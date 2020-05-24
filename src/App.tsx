import React, {ReactNode} from "react";
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import {Redirect, Switch} from "react-router";
import {IntlStrings} from "./static/strings";
import {PageId, SupportedLang} from "./enums";
import {pageComponentFromId} from "./pageListings";
import KadiPage from "./Components/KadiPage";
import HomePage from "./Components/HomePage";
import {SERVER_BASE_NAME} from "./index";
import axios from "axios";
import UserContext, {IUserContext} from "./Contexts/UserContext";

interface AppState {
    userContext: IUserContext;
}

interface AppProps {}

class App extends React.Component<AppProps, AppState> {
    private readonly updateUserContext: (username: string, loggedIn: boolean) => void;
    private readonly changeLang: (lang: SupportedLang, submit?: boolean) => void;
    constructor(props: AppProps) {
        super(props);

        this.updateUserContext = (username, loggedIn) => {
            this.setState({userContext: {
                username: username,
                loggedIn: loggedIn,
                updateUserContext: this.updateUserContext,
                currentLang: this.state.userContext.currentLang,
                strings: this.state.userContext.strings,
                changeLang: this.state.userContext.changeLang,
            }});
        };

        this.changeLang = (lang: SupportedLang, submit=true) => {
            this.setState({userContext: {
                strings: IntlStrings[lang],
                currentLang: lang,
                changeLang: this.changeLang,
                username: this.state.userContext.username,
                loggedIn: this.state.userContext.loggedIn,
                updateUserContext: this.state.userContext.updateUserContext,
            }});
            if (submit) {
                this.submitLanguagePreference(lang);
            }
        };

        this.state = {
            userContext: {
                username: "",
                loggedIn: false,
                updateUserContext: this.updateUserContext,
                currentLang: SupportedLang.gb,
                strings: IntlStrings[SupportedLang.gb],
                changeLang: this.changeLang,
            }
        };
    }

    componentDidMount(): void {
        this.getDefaultVals();
    }

    getDefaultVals(): void {
        axios.get("/api/user", {baseURL: SERVER_BASE_NAME})
            .then((res) => {
                const data = res.data as any;
                if (data.loggedIn) {
                    this.updateUserContext(data.username, data.loggedIn);
                    this.changeLang(data.lang, false);
                }
            })
            .catch(err => console.log(err));
    }

    submitLanguagePreference(lang: SupportedLang) {
        axios.post(SERVER_BASE_NAME + "/api/changeLang",
            {lang: lang},
            {headers: {"Content-Type": "application/json"}}
        );
    };

    render(): ReactNode {

        return (
            <UserContext.Provider value={this.state.userContext}>
                    <Router basename={SERVER_BASE_NAME}>
                        <Route exact={true} path={"/"}>
                            <KadiPage activePage={PageId.home}>
                                <HomePage/>
                            </KadiPage>
                        </Route>
                        <KadiPageRoute pageId={PageId.history}/>
                        <KadiPageRoute pageId={PageId.friends}/>
                        <KadiPageRoute pageId={PageId.stats}/>
                        <KadiPageRoute pageId={PageId.profile}/>
                        <KadiPageRoute pageId={PageId.rulesets}/>
                        <Route path={"/"}>
                            <Redirect
                                to={{
                                    pathname: "/",
                                }}
                            />
                        </Route>
                    </Router>
            </UserContext.Provider>
        );
    }
}

interface KadiPageRouteProps {
    pageId: PageId
}

const KadiPageRoute: React.FunctionComponent<KadiPageRouteProps> = (props: KadiPageRouteProps) => {
    const {pageId} = props;
    const PageComponent = pageComponentFromId[pageId];
    return (
        <Route path={"/" + pageId}>
            <KadiPage activePage={pageId}>
                <PageComponent/>
            </KadiPage>
        </Route>
    );
};


export default App;
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
import LocaleContext, {ILocaleContext} from "./Contexts/LocaleContext";

interface AppState {
    userContext: IUserContext;
    localeContext: ILocaleContext;
}

interface AppProps {}

class App extends React.Component<AppProps, AppState> {
    private readonly updateUserContext: (username: string, loggedIn: boolean) => void;
    private readonly changeLang: (lang: SupportedLang) => void;
    constructor(props: AppProps) {
        super(props);

        this.updateUserContext = (username, loggedIn) => {
            this.setState({userContext: {
                username: username,
                loggedIn: loggedIn,
                updateUserContext: this.updateUserContext
            }});
        };

        this.changeLang = (lang: SupportedLang) => {
            this.setState({localeContext: {
                strings: IntlStrings[lang],
                currentLang: lang,
                changeLang: this.changeLang
            }});
        };

        this.state = {
            userContext: {
                username: "",
                loggedIn: false,
                updateUserContext: this.updateUserContext,
            },
            localeContext: {
                currentLang: SupportedLang.gb,
                strings: IntlStrings[SupportedLang.gb],
                changeLang: this.changeLang,
            }
        };

        axios.get("/api/user", {baseURL: SERVER_BASE_NAME})
            .then((res) => {
                const data = res.data as any;
                if (data.loggedIn) {
                    this.updateUserContext(data.username, true);
                }
                else {
                    this.updateUserContext("", false);
                }
            })
            .catch(err => console.log(err));
    }

    render(): ReactNode {

        return (
            <UserContext.Provider value={this.state.userContext}>
                <LocaleContext.Provider value={this.state.localeContext}>
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
                </LocaleContext.Provider>
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
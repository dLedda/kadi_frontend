import React, {ReactElement, SyntheticEvent} from "react";
import {Dropdown, DropdownItemProps, DropdownProps, Flag, Icon, Menu} from "semantic-ui-react";
import {SERVER_BASE_NAME} from "../index";
import LocaleContext from "../Contexts/LocaleContext";
import {LanguageNames} from "../static/strings";
import {IUserContext} from "../Contexts/UserContext";
import {SupportedLang} from "../enums";

interface KadiTopMenuBarProps {
    user: IUserContext;
}

interface KadiTopMenuBarState {
    currentLangSelection: SupportedLang;
}

class KadiTopMenuBar extends React.Component<KadiTopMenuBarProps, KadiTopMenuBarState> {
    private readonly languageDropdowns: DropdownItemProps[];
    private changeLanguageGlobally: (newLang: SupportedLang) => void;
    constructor(props: KadiTopMenuBarProps) {
        super(props);

        this.state = {
            currentLangSelection: SupportedLang.gb,
        };

        this.changeLanguageGlobally = () => {};
        this.languageDropdowns = [];
        for (const lang in LanguageNames) {
            this.languageDropdowns.push(
                { key: lang, value: lang, flag: lang, text: LanguageNames[lang as SupportedLang] }
                );
        }
    }

    componentDidMount(): void {
        this.changeLanguageGlobally = this.context.changeLang;
    }

    handleLanguageChange: (e: SyntheticEvent, data: DropdownProps) => void = (event, data) => {
        const lang = data.value as SupportedLang;
        this.setState({currentLangSelection: lang});
        this.changeLanguageGlobally(lang);
    };

    render(): ReactElement {
        const {loggedIn, username} = this.props.user;
        const Locale = this.context.strings;

        return (
            <Menu
                secondary={true}
                pointing={true}
                attached={"top"}
            >
                <Menu.Menu
                    position={"right"}
                >
                    { loggedIn && (
                        <Menu.Item>
                            {Locale.menu.userWelcome + username + "!"}
                        </Menu.Item>
                    )}
                    <Menu.Item
                        as={"a"}
                        href={SERVER_BASE_NAME + "/account/" + (loggedIn ? "logout" : "login")}
                    >
                        <Icon spaced={true} name={loggedIn ? "sign out" : "sign in"} />
                        {loggedIn ? Locale.menu.logoutButton : Locale.menu.loginButton}
                    </Menu.Item>
                    <Menu.Item>
                        <Dropdown
                            trigger={(
                                <span>
                                    <Flag name={this.state.currentLangSelection} />
                                    {LanguageNames[this.state.currentLangSelection]}
                                </span>
                            )}
                            options={this.languageDropdowns}
                            onChange={this.handleLanguageChange}
                        />
                    </Menu.Item>
                </Menu.Menu>
            </Menu>
        );
    }
}
KadiTopMenuBar.contextType = LocaleContext;

export default KadiTopMenuBar;
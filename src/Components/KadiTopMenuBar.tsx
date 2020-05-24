import React, {ReactElement} from "react";
import {Dropdown, DropdownItemProps, Flag, Icon, Menu} from "semantic-ui-react";
import {SERVER_BASE_NAME} from "../index";
import {LanguageNames} from "../static/strings";
import {IUserContext} from "../Contexts/UserContext";
import {SupportedLang} from "../enums";

interface KadiTopMenuBarProps {
    user: IUserContext;
}

interface KadiTopMenuBarState {
}

class KadiTopMenuBar extends React.Component<KadiTopMenuBarProps, KadiTopMenuBarState> {
    private readonly languageDropdowns: DropdownItemProps[];
    private changeLanguageGlobally: (newLang: SupportedLang) => void;
    constructor(props: KadiTopMenuBarProps) {
        super(props);

        this.state = {
        };

        this.changeLanguageGlobally = () => {};
        this.languageDropdowns = [];
        for (const lang in LanguageNames) {
            this.languageDropdowns.push(
                { key: lang, value: lang, flag: lang, text: LanguageNames[lang as SupportedLang] }
                );
        }
    }

    render(): ReactElement {
        const {loggedIn, username, strings: Locale, currentLang, changeLang} = this.props.user;

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
                                    <Flag name={currentLang} />
                                    {LanguageNames[currentLang]}
                                </span>
                            )}
                            options={this.languageDropdowns}
                            onChange={(e, d) => changeLang(d.value as SupportedLang)}
                        />
                    </Menu.Item>
                </Menu.Menu>
            </Menu>
        );
    }
}

export default KadiTopMenuBar;
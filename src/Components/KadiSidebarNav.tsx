import {Header, HeaderContent, Icon, Image, Menu} from "semantic-ui-react";
import logo from "../static/images/kadi.png";
import React from "react";
import UserContext from "../Contexts/UserContext";
import {Link} from "react-router-dom";
import {PageId} from "../enums";
import {SERVER_BASE_NAME} from "../index";

interface KadiSidebarNavProps {
    activeItem: PageId;
}

const KadiSidebarNav: React.FunctionComponent<KadiSidebarNavProps> = (props) => {
    const Locale = React.useContext(UserContext).strings;
    const {activeItem} = props;
    return (
        <Menu
            borderless={true}
            vertical={true}
            stackable={true}
            fixed={"left"}
            inverted={true}
            className={"kadiSidebarNav"}
        >
            <Link to={"/"}>
                <Menu.Item>
                    <Header inverted={true} size={"huge"}>
                        <Image src={logo} size={"tiny"} spaced={true} />
                        <HeaderContent>
                            <span className={"brandname"}>K&nbsp;&nbsp;A&nbsp;&nbsp;D&nbsp;&nbsp;I</span>
                        </HeaderContent>
                    </Header>
                </Menu.Item>
            </Link>
            <Menu.Item
                as={"a"}
                icon={true}
                href={SERVER_BASE_NAME + "/game"}
            >
                <Icon name={"game"} />
                {Locale.menu.playTab}
            </Menu.Item>
            <Link to={PageId.profile}>
                <Menu.Item
                    as={"a"}
                    icon={true}
                    active={activeItem === PageId.profile}
                >
                    <Icon name={"user circle"} />
                    {Locale.menu.profileTab}
                </Menu.Item>
            </Link>
            <Link to={PageId.stats}>
                <Menu.Item
                    as={"a"}
                    icon={true}
                    active={activeItem === PageId.stats}
                >
                    <Icon name={"chart pie"} />
                    {Locale.menu.statsTab}
                </Menu.Item>
            </Link>
            <Link to={PageId.rulesets}>
                <Menu.Item
                    as={"a"}
                    icon={true}
                    active={activeItem === PageId.rulesets}
                >
                    <Icon name={"book"} />
                    {Locale.menu.rulesetsTab}
                </Menu.Item>
            </Link>
            <Link to={PageId.friends}>
                <Menu.Item
                    as={"a"}
                    icon={true}
                    active={activeItem === PageId.friends}
                >
                    <Icon name={"group"} />
                    {Locale.menu.friendsTab}
                </Menu.Item>
            </Link>
            <Link to={PageId.history}>
                <Menu.Item
                    as={"a"}
                    icon={true}
                    active={activeItem === PageId.history}
                >
                    <Icon name={"history"} />
                    {Locale.menu.historyTab}
                </Menu.Item>
            </Link>
        </Menu>
    );
};

export default KadiSidebarNav;
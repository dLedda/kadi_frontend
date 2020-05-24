import React, {ReactElement} from "react";
import {Header} from "semantic-ui-react";
import UserContext from "../Contexts/UserContext";

interface FriendsPageProps {}

interface FriendsPageState {
}

class FriendsPage extends React.Component<FriendsPageProps, FriendsPageState> {
    constructor(props: FriendsPageProps) {
        super(props);

        this.state = {
        };
    }

    render(): ReactElement {
        const Locale = this.context.strings;
        return (
            <Header>
                {Locale.friendsPage.title}
            </Header>
        );
    }
}
FriendsPage.contextType = UserContext;

export default FriendsPage;
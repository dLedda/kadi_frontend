import React, {ReactElement} from "react";
import KadiPage from "../Components/KadiPage";
import {Header} from "semantic-ui-react";

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
        return (
            <Header>
                My Friends
            </Header>
        );
    }
}

export default FriendsPage;
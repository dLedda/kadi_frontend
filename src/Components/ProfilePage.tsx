import React, {ReactElement} from "react";
import KadiPage from "../Components/KadiPage";
import {Header} from "semantic-ui-react";

interface ProfilePageProps {}

interface ProfilePageState {
}

class ProfilePage extends React.Component<ProfilePageProps, ProfilePageState> {
    constructor(props: ProfilePageProps) {
        super(props);

        this.state = {
        };
    }

    render(): ReactElement {
        return (
            <Header>
                My Profile
            </Header>
        );
    }
}

export default ProfilePage;
import React, {ReactElement} from "react";
import {Header} from "semantic-ui-react";
import UserContext from "../Contexts/UserContext";

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
        const Locale = this.context.strings;
        return (
            <Header size={"huge"}>
                {Locale.profilePage.title}
            </Header>
        );
    }
}
ProfilePage.contextType = UserContext;

export default ProfilePage;
import React, {ReactElement} from "react";
import {Header} from "semantic-ui-react";
import UserContext from "../Contexts/UserContext";
import axios from "axios";
import {SERVER_BASE_NAME} from "../index";
import GuestList from "./GuestList";

interface ProfilePageProps {}

interface ProfilePageState {
    loadingGuests: boolean;
    guests: Guest[];
}

export interface Guest {
    id: string;
    nick: string;
}

class ProfilePage extends React.Component<ProfilePageProps, ProfilePageState> {
    constructor(props: ProfilePageProps) {
        super(props);

        this.state = {
            loadingGuests: false,
            guests: [],
        };
    }

    componentDidMount(): void {
        this.loadGuests();
    }

    loadGuests(): void {
        this.setState({loadingGuests: true}, () => {
            axios.get(SERVER_BASE_NAME + "/api/guests")
                .then(response => this.setState({guests: response.data.guests}))
                .catch(error => this.handleError(error))
                .finally(() => this.setState({ loadingGuests: false }));
        });
    }

    deleteGuest(id: string): void {
        console.log("delete with url", SERVER_BASE_NAME + "/api/guest/" + id);
        axios.delete(SERVER_BASE_NAME + "/api/guest/" + id)
            .then(response => this.loadGuests())
            .catch(error => this.handleError(error))
    }

    handleError(error: any): void {
        console.log(error);
    }

    render(): ReactElement {
        const Locale = this.context.strings;
        return (
            <>
                <Header size={"huge"}>
                    {Locale.profilePage.title}
                </Header>
                <GuestList
                    deleteGuest={(id) => this.deleteGuest(id)}
                    loading={this.state.loadingGuests}
                    guestList={this.state.guests}
                />
            </>
        );
    }
}
ProfilePage.contextType = UserContext;

export default ProfilePage;
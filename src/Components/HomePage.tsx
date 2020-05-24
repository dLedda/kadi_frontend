import React, {ReactElement} from "react";
import {Header} from "semantic-ui-react";
import UserContext from "../Contexts/UserContext";

interface HomePageProps {}

interface HomePageState {
}

class HomePage extends React.Component<HomePageProps, HomePageState> {
    constructor(props: HomePageProps) {
        super(props);

        this.state = {
        };
    }

    render(): ReactElement {
        const Locale = this.context.strings;
        return (
            <Header>
                {Locale.homePage.title}
            </Header>
        );
    }
}
HomePage.contextType = UserContext;

export default HomePage;
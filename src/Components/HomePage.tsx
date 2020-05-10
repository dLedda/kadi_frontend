import React, {ReactElement} from "react";
import KadiPage from "../Components/KadiPage";
import {Header} from "semantic-ui-react";

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
        return (
            <Header>
                Home
            </Header>
        );
    }
}

export default HomePage;
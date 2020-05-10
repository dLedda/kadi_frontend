import React, {ReactNode} from "react";
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import {Header} from "semantic-ui-react";
import KadiPage from "../Components/KadiPage";

interface StatsPageProps {}

interface StatsPageState {
}

class StatsPage extends React.Component<StatsPageProps, StatsPageState> {
    constructor(props: StatsPageProps) {
        super(props);

        this.state = {
        };
    }

    render(): ReactNode {
        return (
            <Header>
                My Stats
            </Header>
        );
    }
}

export default StatsPage;
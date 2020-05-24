import React, {ReactNode} from "react";
import {Header} from "semantic-ui-react";
import UserContext from "../Contexts/UserContext";

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
        const Locale = this.context.strings;
        return (
            <Header>
                {Locale.statsPage.title}
            </Header>
        );
    }
}
StatsPage.contextType = UserContext;

export default StatsPage;
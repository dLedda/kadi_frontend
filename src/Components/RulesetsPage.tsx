import React, {ReactElement} from "react";
import KadiPage from "../Components/KadiPage";
import {Header} from "semantic-ui-react";

interface RulesetsPageProps {}

interface RulesetsPageState {
}

class RulesetsPage extends React.Component<RulesetsPageProps, RulesetsPageState> {
    constructor(props: RulesetsPageProps) {
        super(props);

        this.state = {
        };
    }

    render(): ReactElement {
        return (
            <Header>
                My Rulesets
            </Header>
        );
    }
}

export default RulesetsPage;
import React, {ReactElement} from "react";
import {Header} from "semantic-ui-react";
import UserContext from "../Contexts/UserContext";

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
        const Locale = this.context.strings;
        return (
            <Header>
                {Locale.rulesetsPage.title}
            </Header>
        );
    }
}
RulesetsPage.contextType = UserContext;

export default RulesetsPage;
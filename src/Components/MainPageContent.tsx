import {Container, Segment} from "semantic-ui-react";
import React from "react";
import KadiTopMenuBar from "./KadiTopMenuBar";
import UserContext from "../Contexts/UserContext";

interface KadiPageMainContentProps {
}

const KadiPageMainContent: React.FunctionComponent<KadiPageMainContentProps> = (props) => {
    const {children} = props;
    return (
        <div className={"mainPageContent"}>
            <UserContext.Consumer>
                { user => (
                    <KadiTopMenuBar user={user}/>
                    )}
            </UserContext.Consumer>
            <Container
                className={"mainPageContentContainer"}
            >
                <Segment>
                    {children}
                </Segment>
            </Container>
        </div>
    );
};

export default KadiPageMainContent;
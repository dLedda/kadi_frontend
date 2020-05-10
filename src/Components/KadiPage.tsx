import React, {ReactElement} from "react";
import {Segment} from "semantic-ui-react";
import "../static/css/site.css";
import KadiSidebarNav from "../Components/KadiSidebarNav";
import MainPageContent from "../Components/MainPageContent";
import {PageId} from "../enums";

interface KadiPageProps {
    activePage: PageId;
}

interface KadiPageState {
}

class KadiPage extends React.Component<KadiPageProps, KadiPageState> {
    constructor(props: KadiPageProps) {
        super(props);

        this.state = {
        };
    }

    render(): ReactElement {
        const {children, activePage} = this.props;
        return (
            <>
                <KadiSidebarNav activeItem={activePage}/>
                <MainPageContent>
                    {children}
                </MainPageContent>
            </>
        );
    }
}

export default KadiPage;
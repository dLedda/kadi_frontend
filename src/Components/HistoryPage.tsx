import React, {ReactElement} from "react";
import {Header, List, ListItem} from "semantic-ui-react";
import axios from "axios";
import {SERVER_BASE_NAME} from "../index";
import UserContext from "../Contexts/UserContext";

interface HistoryPageProps {
}

interface HistoryPageState {
    loadingGames: boolean;
    gameListings: any[];
}

class HistoryPage extends React.Component<HistoryPageProps, HistoryPageState> {
    constructor(props: HistoryPageProps) {
        super(props);

        this.state = {
            loadingGames: true,
            gameListings: [],
        };
    }

    componentDidMount(): void {
        axios.get(SERVER_BASE_NAME + "/api/games")
            .then(response => this.setState({gameListings: response.data.games}))
            .catch(error => this.handleError(error))
            .finally(() => this.setState({ loadingGames: false }));
        console.log(this.state.gameListings);
    }

    handleError = (error: any) => void {

    };

    render(): ReactElement {
        const Locale = this.context.strings;
        return (
            <>
                <Header size={"huge"}>
                    {Locale.historyPage.title}
                </Header>
                {
                    this.state.loadingGames ? (
                        <p>
                            Loading games...
                        </p>
                    ) :
                    (
                        <List bulleted={true}>
                            {
                                this.state.gameListings.map(listing => {
                                    return <ListItem key={listing.createdAt}>Game played on: {listing.createdAt}</ListItem>;
                                })
                            }
                        </List>
                    )
                }
            </>
        );
    }
}
HistoryPage.contextType = UserContext;

export default HistoryPage;
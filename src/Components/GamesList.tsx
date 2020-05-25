import {List, ListItem} from "semantic-ui-react";
import React from "react";
import UserContext from "../Contexts/UserContext";

interface GamesListProps {
    loading: boolean;
    gamesList: any[];
}

const GamesList: React.FunctionComponent<GamesListProps> = (props) => {
    const {loading, gamesList} = props;
    const Uctx = React.useContext(UserContext);
    const listItems = gamesList.map(listing =>
            <ListItem key={listing.createdAt}>
                Game played on: {Uctx.dateTimeFormatter.format(new Date(listing.createdAt))}
            </ListItem>
    );
    return (
        <>
            {loading ? (
                <p>{Uctx.strings.historyPage.loading}</p>
            ) : (
                <List bulleted={true}>
                    {listItems}
                </List>
            )}
        </>
    );
};

export default GamesList;
import {Header, List, ListItem} from "semantic-ui-react";
import React from "react";
import UserContext from "../Contexts/UserContext";
import {Guest} from "./ProfilePage";
import HeaderSubHeader from "semantic-ui-react/dist/commonjs/elements/Header/HeaderSubheader";
import {SERVER_BASE_NAME} from "../index";


interface GuestListProps {
    loading: boolean;
    guestList: Guest[];
    deleteGuest: (id: string) => any;
}

const GuestList: React.FunctionComponent<GuestListProps> = (props) => {
    const {loading, guestList, deleteGuest} = props;
    const Uctx = React.useContext(UserContext);
    const listItems = guestList.map(guest =>
        <ListItem key={guest.id}>
            {guest.nick} - <a onClick={() => deleteGuest(guest.id)}>{Uctx.strings.general.deleteCommand}</a>
        </ListItem>
    );
    return (
        <>
            <Header size={"medium"}>
                {Uctx.strings.profilePage.guestsHeader}
            </Header>
            {loading ? (
                <p>{Uctx.strings.profilePage.loadingGuests}</p>
            ) : (
                <List bulleted={true}>
                    {listItems}
                </List>
            )}
        </>
    );
};

export default GuestList;
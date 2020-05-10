import {PageId} from "./enums";
import {Component as ReactComponent} from "react";
import ProfilePage from "./Components/ProfilePage";
import RulesetsPage from "./Components/RulesetsPage";
import FriendsPage from "./Components/FriendsPage";
import StatsPage from "./Components/StatsPage";
import HistoryPage from "./Components/HistoryPage";
import HomePage from "./Components/HomePage";

type PageComponentFromIdType = {
    [key in PageId]: new (...args: any[]) => ReactComponent;
};

export const pageComponentFromId: PageComponentFromIdType = {
    [PageId.profile]: ProfilePage,
    [PageId.rulesets]: RulesetsPage,
    [PageId.friends]: FriendsPage,
    [PageId.stats]: StatsPage,
    [PageId.home]: HomePage,
    [PageId.history]: HistoryPage,
};
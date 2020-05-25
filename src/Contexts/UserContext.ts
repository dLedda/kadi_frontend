import React from "react";
import {supportedLangToIntlDTF, SupportedLang} from "../enums";
import {IntlStrings} from "../static/strings";

export interface IUserContext {
    username: string;
    loggedIn: boolean;
    updateUserContext: (username: string, loggedIn: boolean) => void;
    dateTimeFormatter: Intl.DateTimeFormat;
    currentLang: SupportedLang;
    strings: any;
    changeLang: (lang: SupportedLang, submit?: boolean) => void;
}

const userDefaultVal = {
    loggedIn: false,
    username: "",
    updateUserContext: () => {},
    dateTimeFormatter: supportedLangToIntlDTF[SupportedLang.gb],
    currentLang: SupportedLang.gb,
    strings: IntlStrings[SupportedLang.gb as SupportedLang],
    changeLang: () => {},
} as IUserContext;

const UserContext = React.createContext(userDefaultVal);

export default UserContext;
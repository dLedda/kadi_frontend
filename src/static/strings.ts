import React from "react";
import {SupportedLang} from "../enums";

// Formats strings
// formatUnicorn("Hello, {0}!", ["World"]) becomes "Hello, World!"
// {0} is the first entry in args, {1} the second, etc.
export function formatUnicorn(fmt: string, ...args: string[]): string {
    if (!fmt.match(/^(?:(?:(?:[^{}]|(?:\{\{)|(?:\}\}))+)|(?:\{[0-9]+\}))+$/)) {
        throw new Error('Invalid formatUnicorn input string.');
    }
    return fmt.replace(/((?:[^{}]|(?:\{\{)|(?:\}\}))+)|(?:\{([0-9]+)\})/g, (m: string, str: string, index: number) => {
        if (str) {
            return str.replace(/(?:{{)|(?:}})/g, m => m[0]);
        } else {
            if (index >= args.length) {
                throw new Error('Argument index is out of range in formatUnicorn call.');
            }
            return args[index];
        }
    });
}

export const LanguageNames: Record<SupportedLang, string> = {
    gb: "English",
    de: "Deutsch",
    it: "Italiano",
};

export const IntlStrings = {
    gb: {
        menu: {
            profileTab: "Profile",
            statsTab: "Stats",
            playTab: "Play",
            rulesetsTab: "Rulesets",
            friendsTab: "Friends",
            historyTab: "History",
            loginButton: "Login",
            logoutButton: "Logout",
            userWelcome: "Hi, ",
        },
        homePage: {
            title: "Home",
        },
        profilePage: {
            title: "Profile",
        },
        statsPage: {
            title: "Stats",
        },
        rulesetsPage: {
            title: "Rulesets",
        },
        friendsPage: {
            title: "Friends",
        },
        historyPage: {
            title: "History",
        },
    },
    de: {
        menu: {
            profileTab: "Profil",
            statsTab: "Statistiken",
            playTab: "Spielen",
            rulesetsTab: "Regelwerke",
            friendsTab: "Freunde",
            historyTab: "Spielverlauf",
            loginButton: "Anmelden",
            logoutButton: "Abmelden",
            userWelcome: "Hallo, ",
        },
        homePage: {
            title: "Startseite",
        },
        profilePage: {
            title: "Profil",
        },
        statsPage: {
            title: "Statistiken",
        },
        rulesetsPage: {
            title: "Regelwerke",
        },
        friendsPage: {
            title: "Freunde",
        },
        historyPage: {
            title: "Spielverlauf",
        },
    },
    it: {
        menu: {
            profileTab: "Profilo",
            statsTab: "Statistiche",
            playTab: "Gioca",
            rulesetsTab: "Regolamenti",
            friendsTab: "Amici",
            historyTab: "Storia",
            loginButton: "Accedi",
            logoutButton: "Esci",
            userWelcome: "Ciao, ",
        },
        homePage: {
            title: "Home",
        },
        profilePage: {
            title: "Profilo",
        },
        statsPage: {
            title: "Statistiche",
        },
        rulesetsPage: {
            title: "Regolamenti",
        },
        friendsPage: {
            title: "Amici",
        },
        historyPage: {
            title: "Storia",
        },
    },
} as const;
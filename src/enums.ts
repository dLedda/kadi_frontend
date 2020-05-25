export enum SupportedLang {
    gb = "gb",
    de = "de",
    it = "it",
}

export enum PageId {
    profile = "profile",
    rulesets = "rulesets",
    friends = "friends",
    stats = "stats",
    home = "home",
    history = "history",
}

export const supportedLangToIntlDTF: Record<SupportedLang, Intl.DateTimeFormat> = {
    gb: Intl.DateTimeFormat('en-AU'),
    de: Intl.DateTimeFormat('de-DE'),
    it: Intl.DateTimeFormat('it-IT'),
};
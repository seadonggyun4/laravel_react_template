import { TFunction } from "i18next";

interface NavItem {
    title: string;
    link: string;
}

type NaveContentMenuType = Record<string, NavItem[]>;

// ko
const getNavMenu = (t: TFunction): NavItem[] => [
    { title: "HOME", link: "/" },
    { title: "렌터카", link: "/rentcar" },
];

const getNaveContentMenu = (t: TFunction): NaveContentMenuType => ({
    "/rentcar": [
        { title: "렌터카예약", link: "/rentcar" },
        { title: "한정특가", link: "/rentcar/limited" },
    ],
});

// en
const getEnNavMenu = (t: TFunction): NavItem[] => [
    { title: "Home", link: "/en" },
    { title: "Rent Car", link: "/en/rentcar" },
];

const getEnNaveContentMenu = (t: TFunction): NaveContentMenuType => ({
    "/en/rentcar": [
        { title: "Rent Car Reservation", link: "/en/rentcar" },
        { title: "Limited Specials", link: "/en/rentcar/limited" },
    ],
});

export { getNavMenu, getNaveContentMenu, getEnNavMenu, getEnNaveContentMenu };

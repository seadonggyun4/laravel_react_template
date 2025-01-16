import { TFunction } from "i18next";

interface NavItem {
    title: string;
    link: string;
}

type NaveContentMenuType = Record<string, NavItem[]>;

const getNavMenu = (t: TFunction): NavItem[] => [
    { title: t("home"), link: "/" },
    { title: t("rentcar"), link: "/rentcar" },
    { title: t("service"), link: "/service" },
    { title: t("customer_support"), link: "/cs" },
    { title: t("reservation"), link: "/reservation" },
];

const getNaveContentMenu = (t: TFunction): NaveContentMenuType => ({
    "/rentcar": [
        { title: t("rentcar_reservation"), link: "/rentcar/reservation" },
        { title: t("limited_specials"), link: "/rentcar/limited" },
    ],
    "/service": [
        { title: t("angel_key_discount"), link: "/service/key" },
    ],
    "/cs": [
        { title: t("notice"), link: "/cs/notice" },
        { title: t("rental_guide"), link: "/cs/rental-guide" },
        { title: t("reservation_consulting"), link: "/cs/reservation-consulting" },
        { title: t("cancellation_request"), link: "/cs/cancellation" },
        { title: t("faq"), link: "/cs/faq" },
        { title: t("events_benefits"), link: "/cs/events" },
        { title: t("reviews"), link: "/cs/reviews" },
        { title: t("travel_pick"), link: "/cs/travel-pick" },
        { title: t("manuals_by_model"), link: "/cs/manuals" },
        { title: t("purchase_option_table"), link: "/cs/options" },
    ],
    "/reservation": [
        { title: t("login_signup"), link: "/reservation/login" },
        { title: t("reservation_confirm_payment"), link: "/reservation/confirm" },
    ],
});

export { getNavMenu, getNaveContentMenu };

import { TFunction } from "i18next";

interface NavItem {
    title: string;
    link: string;
}


const getNavMenu = (t: TFunction): NavItem[] => [
    { title: t("rentcar"), link: "/" },
    { title: t("travel_pick"), link: "/travel_pick" },
    { title: t("rental_guide"), link: "/rental_guide" },
    { title: t("faq"), link: "/faq" },
    { title: t("reservation_confirm_payment"), link: "/reservation_confirm_payment" },
];

export { getNavMenu };

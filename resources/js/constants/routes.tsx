interface NavItem {
    title: string;
    link: string;
}

type NaveContentMenuType = Record<string, NavItem[]>;

const NavMenu: NavItem[] = [
    { title: "Home", link: "/" },
    { title: "렌터카", link: "/rentcar" },
    { title: "서비스", link: "/service" },
    { title: "고객센터", link: "/cs" },
    { title: "예약", link: "/reservation" },
];

const NaveContentMenu: NaveContentMenuType = {
    "/rentcar": [
        { title: "렌터카예약", link: "/rentcar/reservation" },
        { title: "한정특가", link: "/rentcar/limited" },
    ],
    "/service": [
        { title: "엔젤KEY할인", link: "/service/key" },
    ],
    "/cs": [
        { title: "공지 사항", link: "/cs/notice" },
        { title: "대여 안내", link: "/cs/rental-guide" },
        { title: "예약 상담", link: "/cs/reservation-consulting" },
        { title: "취소 요청(결항)", link: "/cs/cancellation" },
        { title: "자주 묻는 질문", link: "/cs/faq" },
        { title: "이벤트 / 혜택", link: "/cs/events" },
        { title: "이용 후기", link: "/cs/reviews" },
        { title: "트래블 Pick", link: "/cs/travel-pick" },
        { title: "차종별 매뉴얼", link: "/cs/manuals" },
        { title: "차량 옵션표(구매)", link: "/cs/options" },
    ],
    "/reservation": [
        { title: "로그인/회원가입", link: "/reservation/login" },
        { title: "예약확인/결제", link: "/reservation/confirm" },
    ],
};


export {NavMenu, NaveContentMenu};

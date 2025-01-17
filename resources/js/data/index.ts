type Tag = {
    class: string;
    text: string;
};

type Promotion = {
    title: string;
    description: string;
    year: string;
    tag: Tag[];
    price: number;
    reservation?: number;
    sale?:number;
    img: string;
};

export const bestPromotions: Promotion[] = [
    {
        title:'더뉴 레이(고급형)',
        description:'#5인승 #경차 #휘발유',
        year: '2024',
        tag: [
            {
                class:'total',
                text: '완전면책 무료',
            },
            {
                class:'super',
                text: '슈퍼면책가능',
            }
        ],
        price: 28000,
        reservation: 1000,
        img: '/assets/img/promotion/best1.png'
    },
    {
        title:'더뉴 K3(고급형)',
        description:'#5인승 #소형 #휘발유',
        year: '2024',
        tag: [
            {
                class:'total',
                text: '완전면책 무료',
            },
            {
                class:'super',
                text: '슈퍼면책가능',
            }
        ],
        price: 33800,
        reservation: 1000,
        img: '/assets/img/promotion/best2.png'
    },
    {
        title:'더뉴 K5 서라운드뷰(고급형)',
        description:'#5인승 #중형 #휘발유',
        year: '2023 ~ 2024',
        tag: [
            {
                class:'total',
                text: '완전면책 무료',
            },
            {
                class:'super',
                text: '슈퍼면책가능',
            }
        ],
        price: 40600,
        reservation: 1000,
        img: '/assets/img/promotion/best3.png'
    },
    {
        title:'더올뉴 G8 AWD 서라운드뷰(고급형)',
        description:'#5인승 #고급 #휘발유',
        year: '2024',
        tag: [
            {
                class:'total',
                text: '완전면책 무료',
            },
            {
                class:'super',
                text: '슈퍼면책가능',
            }
        ],
        price: 63000,
        reservation: 5000,
        img: '/assets/img/promotion/best4.png'
    },
    {
        title:'디올뉴 코나',
        description:'#5인승 #RV #휘발유',
        year: '2023 ~ 2024',
        tag: [
            {
                class:'total',
                text: '완전면책 무료',
            },
            {
                class:'super',
                text: '슈퍼면책가능',
            }
        ],
        price: 33800,
        reservation: 1000,
        img: '/assets/img/promotion/best5.png'
    },
    {
        title:'4세 더뉴 카니발',
        description:'#9인승 #승합 #휘발유',
        year: '2024',
        tag: [
            {
                class:'total',
                text: '완전면책 무료',
            },
            {
                class:'super',
                text: '슈퍼면책가능',
            }
        ],
        price: 75600,
        reservation: 5000,
        img: '/assets/img/promotion/best6.png'
    },
]

export const premiumPromotions: Promotion[] = [
    {
        title:'더뉴 미니쿠퍼 컨버터블',
        description:'#4인승 #수입 #휘발유',
        year: '2019',
        tag: [
            {
                class:'normal',
                text: '일반면책 무료',
            },
        ],
        price: 30000,
        reservation: 1000,
        img: '/assets/img/promotion/premium1.png'
    },
    {
        title:'머스탱 컨버터블',
        description:'#4인승 #수입 #휘발유',
        year: '2020',
        tag: [
            {
                class:'normal',
                text: '일반면책 무료',
            },
        ],
        price: 46800,
        reservation: 1000,
        img: '/assets/img/promotion/premium2.png'
    },
    {
        title:'벤츠 CLE 200 카브리올레',
        description:'#4인승 #중형 #휘발유',
        year: '2024',
        tag: [
            {
                class:'normal',
                text: '일반면책 무료',
            },
            {
                class:'total',
                text: '완전면책 가능',
            },
        ],
        price: 70000,
        reservation: 5000,
        img: '/assets/img/promotion/premium3.png'
    },
    {
        title:'테슬라 모델Y RWD',
        description:'#5인승 #전기',
        year: '2024',
        tag: [
            {
                class:'premiumTotal',
                text: '완전(고급)면책 무료',
            },
        ],
        price: 54000,
        reservation: 5000,
        img: '/assets/img/promotion/premium4.png'
    },
    {
        title:'EV3 롱레인지',
        description:'#5인승 #전기',
        year: '2024',
        tag: [
            {
                class:'total',
                text: '완전면책 무료',
            },
            {
                class:'super',
                text: '슈퍼면책가능',
            }
        ],
        price: 37800,
        reservation: 1000,
        img: '/assets/img/promotion/premium5.png'
    },
    {
        title:'더올뉴 코나 EV',
        description:'#5인승 #전기',
        year: '2023',
        tag: [
            {
                class:'total',
                text: '완전면책 무료',
            },
            {
                class:'super',
                text: '슈퍼면책가능',
            }
        ],
        price: 35000,
        reservation: 1000,
        img: '/assets/img/promotion/premium6.png'
    },
]

export const salesPromotions: Promotion[] = [
    {
        title:'K5 3세대',
        description:'#5인승 #중형 #LPG',
        year: '2020',
        tag: [
            {
                class:'total',
                text: '완전면책 무료',
            },
            {
                class:'super',
                text: '슈퍼면책 가능',
            },
        ],
        price: 33000,
        sale:10,
        img: '/assets/img/promotion/sale1.png'
    },
    {
        title:'더뉴 그랜저 서라운드뷰(고급형)',
        description:'#5인승 #고급 #휘발유',
        year: '2022',
        tag: [
            {
                class:'total',
                text: '완전면책 무료',
            },
            {
                class:'super',
                text: '슈퍼면책 가능',
            },
        ],
        price: 106300,
        sale:20,
        img: '/assets/img/promotion/sale2.png'
    },
    {
        title:'베뉴',
        description:'#5인승 #RV #휘발유',
        year: '2020',
        tag: [
            {
                class:'total',
                text: '완전면책 무료',
            },
            {
                class:'super',
                text: '슈퍼면책 가능',
            },
        ],
        price: 46100,
        sale:20,
        img: '/assets/img/promotion/sale3.png'
    },
    {
        title:'더뉴 QM6 5인승',
        description:'#5인승 #RV #LPG',
        year: '2023',
        tag: [
            {
                class:'premiumTotal',
                text: '완전(고급)면책 무료',
            },
        ],
        price: 57700,
        sale:10,
        img: '/assets/img/promotion/sale4.png'
    },
    {
        title:'4세대 쏘렌토 하이브리드 5인 2WD',
        description:'#5인승 #RV #하이브리드',
        year: '2022',
        tag: [
            {
                class:'total',
                text: '완전면책 무료',
            },
            {
                class:'super',
                text: '슈퍼면책 가능',
            },
        ],
        price: 69100,
        sale:10,
        img: '/assets/img/promotion/sale5.png'
    },
    {
        title:'쏘울 부스터 EV',
        description:'#5인승 #전기',
        year: '2020',
        tag: [
            {
                class:'total',
                text: '완전면책 무료',
            },
            {
                class:'super',
                text: '슈퍼면책 가능',
            },
        ],
        price: 64600,
        sale:10,
        img: '/assets/img/promotion/sale6.png'
    },
]


export const stories = [
    { image: "https://tympanus.net/Development/ColumnScroll/1.04213a58.jpg", title: "Cyber Blue", year: "2011" },
    { image: "https://tympanus.net/Development/ColumnScroll/2.3ff1fdb6.jpg", title: "Gnostic Will", year: "2012" },
    { image: "https://tympanus.net/Development/ColumnScroll/3.b606be87.jpg", title: "French Kiss", year: "2013" },
    { image: "https://tympanus.net/Development/ColumnScroll/4.24fd614c.jpg", title: "Half Life", year: "2014" },
    { image: "https://tympanus.net/Development/ColumnScroll/5.d13f5e61.jpg", title: "Love Boat", year: "2015" },
    { image: "https://tympanus.net/Development/ColumnScroll/6.786c7db4.jpg", title: "Golden Ray", year: "2016" },
    { image: "https://tympanus.net/Development/ColumnScroll/7.df95fe5c.jpg", title: "Blame Game", year: "2017" },
    { image: "https://tympanus.net/Development/ColumnScroll/8.e7faf38e.jpg", title: "Lone Dust", year: "2018" },
];

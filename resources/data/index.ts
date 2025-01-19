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
    { image: "https://jejuangeltour.com/theme/basic/img/renewalPc/main/010.png", link:'https://www.youtube.com/watch?v=YrEhZ0vACPg' },
    { image: "https://jejuangeltour.com/theme/basic/img/renewalPc/main/%E1%84%92%E1%85%A9%E1%86%B7%E1%84%91%E1%85%A6%E1%84%8B%E1%85%B5%E1%84%8C%E1%85%B5-%E1%84%8A%E1%85%A5%E1%86%B7%E1%84%82%E1%85%A6%E1%84%8B%E1%85%B5%E1%86%AF.jpg", link:'https://www.youtube.com/watch?v=OclvaI3n0UI' },
    { image: "https://jejuangeltour.com/theme/basic/img/renewalPc/main/%ED%99%88%ED%8E%98%EC%9D%B4%EC%A7%80_%EC%8D%B8%EB%84%A4%EC%9D%BC.jpg", link:'https://www.youtube.com/watch?v=fVD_yZWBbJ8' },
    { image: "https://jejuangeltour.com/theme/basic/img/renewalPc/main/%EB%B2%9A%EA%BD%83%20%EB%93%9C%EB%9D%BC%EC%9D%B4%EB%B8%8C%20%EC%BD%94%EC%8A%A4%20%EC%8D%B8%EB%84%A4%EC%9D%BC_%ED%99%88%ED%8E%98%EC%9E%8A%EC%9A%A9.jpg", link:'https://www.youtube.com/watch?v=yYGTTy6NoKk' },
    { image: "https://jejuangeltour.com/theme/basic/img/renewalPc/main/%EC%97%94%EC%A0%A4%EC%B9%B4,%20%EC%A0%9C%EC%A3%BC%EB%8F%84%20%EC%97%AC%ED%96%89%EA%B8%B0%20%EC%8D%B8%EB%84%A4%EC%9D%BC_%ED%99%88%ED%8E%98%EC%9D%B4%EC%A7%80.jpg", link:'https://www.youtube.com/watch?v=9FnHTFQjzUY' },
    { image: "https://jejuangeltour.com/theme/basic/img/renewalPc/main/230210_%EC%99%B8%EA%B5%AD%EC%9D%B8%EB%8C%80%EC%97%AC%EC%98%81%EC%83%81_%EC%A0%95%EB%B0%A9%ED%96%A5%EC%8D%B8%EB%84%A4%EC%9D%BC(%EA%B5%AD%EB%AC%B8).png", link:'https://www.youtube.com/watch?v=XFc-bM9KB5M' },
    { image: "https://jejuangeltour.com/theme/basic/img/renewalPc/main/%ED%99%88%ED%8E%98%EC%9D%B4%EC%A7%80_%ED%95%9C%EB%9D%BC%EC%82%B0.jpg", link:'https://www.youtube.com/watch?v=Kkju5uKctwQ' },
    { image: "https://jejuangeltour.com/theme/basic/img/renewalPc/main/%EC%97%B4%EB%91%90%EB%8B%AC%20%ED%8A%B8%EB%A0%88%ED%82%B9%20%ED%95%98%EC%9D%B4%EB%9D%BC%EC%9D%B4%ED%8A%B8.jpg", link:'https://www.youtube.com/watch?v=h5uXvd7KjGA' },
];

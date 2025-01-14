import Panorama from "@/Components/widgets/Panorama";
import Swiper from "@/Components/widgets/Swiper";
import styled from "styled-components";
import {setPrice} from "@/utils";
import PageLayout from "@/Layouts/PageLayout";

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

export default function HomePage() {
    const Banner = '/assets/img/banner.jpeg';

    const bestPromotions: Promotion[] = [
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

    const premiumPromotions: Promotion[] = [
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

    const salesPromotions: Promotion[] = [
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


    return (
        <PageLayout title="제주도렌트카 | 제주엔젤카">
            <Swiper/>
            <PromotionSection>
                <PromotionWrapper>
                    <h3>베스트 추천상품</h3>
                    <p>#제주여행 #완전면책 #슈퍼면책</p>
                    <GridContainer>
                        {bestPromotions.map((item, index) => (
                            <PromotionCard key={index}>
                                <div className="year">{item.year}</div>
                                <img src={item.img} alt={item.title}/>
                                <h4>{item.title}</h4>
                                {item?.reservation && (
                                    <p>실시간 예약 <span>{setPrice(item?.reservation)}원 할인</span></p>
                                )}
                                <strong className={item.sale ? 'sale' : ''}>
                                    {setPrice(item.price)}원
                                    {item.sale && (<span>[{item.sale}% 할인]</span>)}
                                </strong>
                                <p>{item.description}</p>
                                <TagBox>
                                    {item.tag.map((tag, tagIndex) => (
                                        <span key={tagIndex} className={tag.class}>{tag.text}</span>
                                    ))}
                                </TagBox>
                            </PromotionCard>
                        ))}
                    </GridContainer>
                </PromotionWrapper>
            </PromotionSection>
            <img src={Banner} alt="banner"/>
            <PromotionSection>
                <PromotionWrapper>
                    <h3>수입/전기 상품</h3>
                    <p>#5년이내 #블박구비 #EV3입고!</p>
                    <GridContainer>
                        {premiumPromotions.map((item, index) => (
                            <PromotionCard key={index}>
                                <div className="year">{item.year}</div>
                                <img src={item.img} alt={item.title}/>
                                <h4>{item.title}</h4>
                                {item?.reservation && (
                                    <p>실시간 예약 <span>{setPrice(item?.reservation)}원 할인</span></p>
                                )}
                                <strong className={item.sale ? 'sale' : ''}>
                                    {setPrice(item.price)}원
                                    {item.sale && (<span>[{item.sale}% 할인]</span>)}
                                </strong>
                                <p>{item.description}</p>
                                <TagBox>
                                    {item.tag.map((tag, tagIndex) => (
                                        <span key={tagIndex} className={tag.class}>{tag.text}</span>
                                    ))}
                                </TagBox>
                            </PromotionCard>
                        ))}
                    </GridContainer>
                </PromotionWrapper>
            </PromotionSection>
            <Panorama/>
            <PromotionSection>
                <PromotionWrapper>
                    <h3>한정 특가상품</h3>
                    <p>#지정 기간내 사용 #최대50% #최소5%</p>
                    <GridContainer>
                        {salesPromotions.map((item, index) => (
                            <PromotionCard key={index}>
                                <div className="year">{item.year}</div>
                                <img src={item.img} alt={item.title}/>
                                <h4>{item.title}</h4>
                                {item?.reservation && (
                                    <p>실시간 예약 <span>{setPrice(item?.reservation)}원 할인</span></p>
                                )}
                                <strong className={item.sale ? 'sale' : ''}>
                                    {setPrice(item.price)}원
                                    {item.sale && (<span>[{item.sale}% 할인]</span>)}
                                </strong>
                                <p>{item.description}</p>
                                <TagBox>
                                    {item.tag.map((tag, tagIndex) => (
                                        <span key={tagIndex} className={tag.class}>{tag.text}</span>
                                    ))}
                                </TagBox>
                            </PromotionCard>
                        ))}
                    </GridContainer>
                </PromotionWrapper>
            </PromotionSection>
        </PageLayout>
    );
}

const PromotionSection = styled.section`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
    padding: 3rem 0;
`

const PromotionWrapper = styled.article`
    width: var(--section-width);
    height: 100%;

    & > h3{
        margin-bottom: 10px;
        font-size: 2rem;
        font-weight: bold;
    }

    & > P {
        margin-bottom: 3rem;
    }
`

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 4 items per row */
  gap: 40px; /* Space between items */
  width: 100%;
`;

const PromotionCard = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    border-radius: 15px;
    background-color: #ffffffff;
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
    box-shadow: rgba(149, 157, 165, 0.1) 0px 8px 24px;
    perspective: 1000px;

    & > img {
        margin-bottom: 15px;
        width: 100%;
        object-fit: contain;
        transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
        will-change: transform, box-shadow;
        transform-origin: center center;
    }

    & > h4 {
        margin-bottom: 1rem;
        font-size: 1.15rem;
        font-weight: bold;
    }

    & > strong {
        font-size: 1.1rem;
        font-weight: 600;
        margin-bottom: 15px;
    }

    & > strong.sale {
        color: var(--error-color);
    }

    & > strong > span {
        margin-left: 0.3rem;
        font-size: 0.9rem;
    }

    & > p {
        margin-bottom: 5px;
        font-size: 0.9rem;
    }

    & > p > span {
        font-size: 1.1rem;
        color: var(--error-color);
    }

    & > .year {
        position: absolute;
        top: 0;
        left: 0;
        padding: 15px;
        font-size: 1.2rem;
        font-weight: bold;
        background: linear-gradient(90deg, rgba(0,161,229,1) 50%, rgba(3,217,243,1) 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        color: transparent;
    }

    &:hover {
        cursor: pointer;
        transform: perspective(1000px) rotateX(10deg) rotateY(-10deg);
        box-shadow: rgba(0, 0, 0, 0.15) 0px 15px 30px;

        & > img {
            transform: translateZ(50px) rotateX(-10deg);
        }
    }
`;

const TagBox = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;

    & > span {
        padding: 3px;
        border-radius: 5px;
        border: 1px solid var(--border-color);
        font-size: 0.9rem;
        font-weight: 600;
    }

    & > span.normal{
        color: var(--primary-color);
        border: 1px solid var(--primary-color);
        background-color: var(--primary-bg-color);
    }

    & > span.total,
    & > span.premiumTotal {
        color: var(--secondary-color);
        border: 1px solid var(--secondary-color);
        background-color: var(--secondary-bg-color);
    }

    & > span.super{
        color: var(--error-color);
        border: 1px solid var(--error-color);
        background-color: var(--error-bg-color);
    }
`

import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { setPrice } from "@/common/utils";
import { IoCall } from "react-icons/io5";
import { FcMoneyTransfer } from "react-icons/fc";
import { Link } from "@inertiajs/react";
import { useShowPopUp } from "@/common/ux/provider/ShowPopUp";

interface Tag {
    class: string;
    text: string;
}

interface ProductItem {
    year: string;
    img: string;
    title: string;
    reservation?: number;
    price: number;
    sale?: number;
    description: string;
    tag: Tag[];
}

interface WebProductCardProps {
    item: ProductItem;
    reserve?: string;
    pay?: string;
}

const WebProductCard: React.FC<WebProductCardProps> = ({ item, reserve, pay }) => {
    const [leftCard, setLeftCard] = useState(false);
    const { showCardDetail, toggleShowCardDetail } = useShowPopUp();

    const toggleDetail = (e: React.MouseEvent) => {
        e.stopPropagation();

        const cardRect = (e.currentTarget as HTMLElement).getBoundingClientRect();

        setLeftCard(cardRect.left < window.innerWidth / 2);

        window.scrollTo({
            top: window.scrollY + cardRect.top - window.innerHeight / 3, // Center the card vertically in the viewport
            behavior: "smooth",
        });

        toggleShowCardDetail(showCardDetail === item.title ? null : item.title);
    };


    const handleOutsideClick = (e: MouseEvent) => {
        if (!(e.target as HTMLElement).closest('.card-container')) {
            toggleShowCardDetail(null);
        }
    };

    useEffect(() => {
        if (showCardDetail) {
            document.addEventListener('click', handleOutsideClick);
        } else {
            document.removeEventListener('click', handleOutsideClick);
        }
        return () => document.removeEventListener('click', handleOutsideClick);
    }, [showCardDetail]);

    const isActive = showCardDetail === item.title;

    const showLinkWrap = reserve || pay;

    return (
        <StyledWebProductCard
            $showLinkWrap={showLinkWrap}
            $isActive={isActive}
            className="card-container"
            onClick={showLinkWrap ? toggleDetail : ()=>{}}
        >
            <div className="year">{item.year}</div>
            <TagBox>
                {item.tag.map((tag, tagIndex) => (
                    <span key={tagIndex} className={tag.class}>{tag.text}</span>
                ))}
            </TagBox>
            <Content>
                <ImageBox>
                    <img src={item.img} alt={item.title} />
                </ImageBox>
                <TextBox>
                    <h4>{item.title}</h4>
                    {item?.reservation && (
                        <p>
                            실시간 예약 <span>{setPrice(item.reservation)}원 할인</span>
                        </p>
                    )}
                    <strong className={item.sale ? 'sale' : ''}>
                        {setPrice(item.price)} ₩
                        {item.sale && (<span>[{item.sale}% 할인]</span>)}
                    </strong>
                    <p>{item.description}</p>
                </TextBox>
            </Content>
            {showLinkWrap && isActive && (
                <DetailBox $leftCard={leftCard}>
                    <Triangle $leftCard={leftCard} />
                    <DetailWrap>
                        <strong>합리적 가격</strong>
                        <span>
                            안심하세요.엔젤렌터카는 차량을<br />
                            합리적인 금액에 제공해드립니다. 😘
                        </span>
                        <div className="detail-btns">
                            <button>사진 보기 📷</button>
                            <button>차량 상세 🚘</button>
                            <button>영상 보기 🎥</button>
                        </div>
                    </DetailWrap>
                    <LinkWrap>
                        {reserve && <Link className="reserve" href={'#'}>상담 예약<IoCall /></Link>}
                        {pay && <Link className="pay" href={'#'}>실시간 예약<FcMoneyTransfer /></Link>}
                    </LinkWrap>
                </DetailBox>
            )}
        </StyledWebProductCard>
    );
};

export default WebProductCard;

const ImageBox = styled.div`
    width: 100%;
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
    will-change: transform, box-shadow;
    transform-origin: center center;

    & > img {
        width: 100%;
        height: auto;
        object-fit: cover;
    }
`;

const TextBox = styled.div`
    &  h4 {
        margin-bottom: 1rem;
        font-size: 1.15rem;
        font-weight: bold;
    }

    &  strong {
        display: block;
        font-size: 1.1rem;
        font-weight: 600;
        margin-bottom: 5px;
    }

    &  strong.sale {
        color: var(--error-color);
    }

    &  strong > span {
        margin-left: 0.3rem;
        font-size: 0.9rem;
    }

    &  p {
        margin-bottom: 5px;
        font-size: 0.9rem;
    }

    & p:last-child {
        margin-bottom: 0;
    }

    &  p > span {
        font-size: 1.1rem;
        color: var(--error-color);
    }
`;

const TagBox = styled.div`
    margin-top: 25px;
    display: flex;
    align-items: center;
    gap: 5px;

    & > span {
        padding: 3px;
        border-radius: var(--button-border-radius);
        border: 1px solid var(--border-color);
        font-size: 0.8rem;
        font-weight: 600;
    }

    & > span.normal {
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

    & > span.super {
        color: var(--error-color);
        border: 1px solid var(--error-color);
        background-color: var(--error-bg-color);
    }
`;

const Content = styled.article`
    display: flex;
    flex-direction: column;
    row-gap: 0.8rem;
    margin-bottom: 20px;
`;

const StyledWebProductCard = styled.div<{ $showLinkWrap: string | undefined, $isActive: boolean }>`
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    border-radius: var(--card-border-radius);
    background-color: #ffffff;
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
    box-shadow: rgba(149, 157, 165, 0.1) 0px 8px 24px;
    perspective: 1000px;
    cursor: pointer;
    z-index: ${({ $isActive }) => ($isActive ? 'var(--popup-content-zindex)' : 0)};

    & > .year {
        position: absolute;
        top: 0;
        left: 0;
        padding: 15px 1rem;
        font-size: 1.2rem;
        font-weight: bold;
        background: linear-gradient(90deg, rgba(0, 161, 229, 1) 50%, rgba(3, 217, 243, 1) 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        color: transparent;
    }

    &:hover {
        ${({ $showLinkWrap }) =>
            !$showLinkWrap &&
            css`
                transform: perspective(1000px) rotateX(10deg) rotateY(-10deg);
                cursor: pointer;
            `}
    }
`;

const DetailBox = styled.div<{ $leftCard: boolean }>`
    position: absolute;
    top: 0;
    right: ${({ $leftCard }) => ($leftCard ? "-115%" : "105%")};
    display: flex;
    flex-direction: column;
    row-gap: 15px;
    width: 300px;
    height: 100%;
    border-radius: var(--card-border-radius);
    background-color: var(--disabled-color);
    box-shadow: rgba(0, 0, 0, 0.15) 0px 15px 30px;
    opacity: 1;
    transform: translateX(0);
    animation: ShowDetailBox 0.3s ease-in-out forwards;


    @keyframes ShowDetailBox {
        0%{
            opacity: 0;
            transform: translateX(-30%);
        }
        100%{
            opacity: 1;
            transform: translateX(0);
        }
    }
`;

const DetailWrap = styled.div`
    flex: 1;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    & > strong {
        font-family: 'Jua', sans-serif;
        margin-bottom: 1rem;
        color: var(--primary-color);
        font-size: 1.1rem;
        font-weight: bold;
    }

    & > span {
        font-size: 0.9rem;
        line-height: 1.5;
        color: var(--border-color);
    }

    & > .detail-btns {
        margin-top: 10px;
        display: flex;
        align-items: center;
        column-gap: 10px;

        button {
            padding: 5px;
            border-radius: var(--button-border-radius);
            background-color: var(--border-secondary-color);
            transition: 0.3s ease-in-out;

            &:hover {
                color: #fff;
                background-color: var(--secondary-color);
            }
        }
    }
`;

const Triangle = styled.div<{ $leftCard: boolean }>`
    position: absolute;
    top: 10%;
    left: ${({ $leftCard }) => ($leftCard ? "-10px" : "auto")};
    right: ${({ $leftCard }) => ($leftCard ? "auto" : "-10px")};
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 10px 10px 10px 0;
    border-color: transparent var(--disabled-color) transparent transparent;
    ${({ $leftCard }) =>
        !$leftCard &&
        css`
            border-width: 10px 0 10px 10px;
            border-color: transparent transparent transparent var(--disabled-color);
        `}
`;

const LinkWrap = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    row-gap: 10px;
    width: 100%;
    border-bottom-left-radius: var(--card-border-radius);
    border-bottom-right-radius: var(--card-border-radius);
    background-color: var(--primary-color);

    a {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 15px;
        width: 70%;
        border-radius: var(--button-border-radius);
        font-size: 1rem;
        transition: 0.3s ease-in-out;

        & > svg {
            font-size: 1.2rem;
        }
    }

    a.reserve {
        color: #ffffff;
        background-color: var(--success-color);

        &:hover {
            background-color: #c1e277;
        }
    }

    a.pay {
        background-color: #ffe699;

        &:hover {
            background-color: #fcbd65;
        }
    }
`;

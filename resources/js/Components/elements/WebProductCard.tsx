import React from 'react';
import styled from 'styled-components';
import {setPrice} from "@/utils";
import { MOBILE_WIDTH } from "@/constants";
import { IoCall } from "react-icons/io5";

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
}

const WebProductCard: React.FC<WebProductCardProps> = ({ item }) => {
    return (
        <StyledWebProductCard>
            <div className="year">{item.year}</div>
            <TagBox>
                {item.tag.map((tag, tagIndex) => (
                    <span key={tagIndex} className={tag.class}>{tag.text}</span>
                ))}
            </TagBox>
            <Content>
                <ImageBox>
                    <img src={item.img} alt={item.title}/>
                </ImageBox>
                <TextBox>
                    <h4>{item.title}</h4>
                    {item?.reservation && (
                        <p>
                            실시간 예약 <span>{setPrice(item.reservation)}원 할인</span>
                        </p>
                    )}
                    <strong className={item.sale ? 'sale' : ''}>
                        {setPrice(item.price)}원
                        {item.sale && (<span>[{item.sale}% 할인]</span>)}
                    </strong>
                    <p>{item.description}</p>
                </TextBox>
            </Content>
            <ButtonWrap>
                <button>예약 상담신청<IoCall /></button>
                <button>실시간 예약신청<IoCall /></button>
            </ButtonWrap>
        </StyledWebProductCard>
    );
};

export default WebProductCard;

const ImageBox = styled.div`
    margin-bottom: 15px;
    width: 100%;
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
    will-change: transform, box-shadow;
    transform-origin: center center;

    & > img {
        width: 100%;
        height: auto;
        object-fit: cover;
    }

    @media (max-width: ${MOBILE_WIDTH}px) {
        margin-bottom: 0;
        width: 50%;
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

    &  p > span {
        font-size: 1.1rem;
        color: var(--error-color);
    }

    @media (max-width: ${MOBILE_WIDTH}px) {
        width: 200px;

        &  h4 {
            font-size: 1rem;
        }

        &  strong {
            font-size: 1rem;
        }

        &  strong > span {
            font-size: 0.8rem;
        }

        &  p {
            font-size: 0.8rem;
        }

        &  p:last-child {
            margin-bottom: 0;
        }

        &  p > span {
            font-size: 0.95rem;
            color: var(--error-color);
        }
    }
`;

const TagBox = styled.div`
    margin-top: 25px;
    display: flex;
    align-items: center;
    gap: 5px;

    & > span {
        padding: 3px;
        border-radius: 5px;
        border: 1px solid var(--border-color);
        font-size: 0.8rem;
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

    @media (max-width: ${MOBILE_WIDTH}px) {
        & > span{
            font-size: 0.8rem;
        }
    }
`;

const Content = styled.article`
    @media (max-width: ${MOBILE_WIDTH}px) {
        display: flex;
        justify-content: space-between;
        align-items: center;
        column-gap: 1rem;
    }
`;

const StyledWebProductCard = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    border-radius: 15px;
    background-color: #ffffffff;
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
    box-shadow: rgba(149, 157, 165, 0.1) 0px 8px 24px;
    overflow: hidden;

    & > .year {
        position: absolute;
        top: 0;
        left: 0;
        padding: 15px 1rem;
        font-size: 1.2rem;
        font-weight: bold;
        background: linear-gradient(90deg, rgba(0,161,229,1) 50%, rgba(3,217,243,1) 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        color: transparent;
    }

    &:hover {
        box-shadow: rgba(0, 0, 0, 0.15) 0px 15px 30px;
    }
`;


const ButtonWrap = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 15px;
    background-color: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(5px);
    opacity: 0;
    transition: opacity 0.3s ease-in-out;

    button {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 15px;
        width: 70%;
        border-radius: 20px;
        font-size: 1rem;
        transition: 0.3s ease-in-out;

        & > svg {
            font-size: 1.2rem;
        }
    }

    button:first-child {
        color: #ffffff;
        background-color: var(--success-color);

        &:hover {
            background-color:#c1e277;
        }
    }

    button:nth-child(2) {
        color: #ffffff;
        background-color: var(--primary-color);

        &:hover {
            background-color: var(--secondary-color);
        }
    }

    ${StyledWebProductCard}:hover & {
        opacity: 1;
    }
`;


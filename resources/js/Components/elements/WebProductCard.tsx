import React from 'react';
import styled from 'styled-components';
import {setPrice} from "@/utils";


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
            <img src={item.img} alt={item.title} />
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
            <TagBox>
                {item.tag.map((tag, tagIndex) => (
                    <span key={tagIndex} className={tag.class}>{tag.text}</span>
                ))}
            </TagBox>
        </StyledWebProductCard>
    );
};

export default WebProductCard;

// Styled components
const StyledWebProductCard = styled.div`
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
`;

import React, { useState } from 'react';
import styled from 'styled-components';
import { TiChevronLeftOutline, TiChevronRightOutline } from 'react-icons/ti';
import WebProductCard from "@/Components/elements/web/WebProductCard";
import { bestPromotions } from "@/data";
import { MOBILE_WIDTH } from "@/constants";

const MAX_VISIBILITY = 3;

const WebRecommended: React.FC = () => {
    const [active, setActive] = useState(2);
    const count = bestPromotions.length;

    return (
        <StyledWrapper>
            <TextBox>
                <h3>추천차량 실시간 예약!</h3>
                <p>할인된 가격으로 즐거운 제주도 여행을 시작하세요!</p>
            </TextBox>
            <StyledCarousel>
                {active > 0 && (
                    <StyledNavButton className="left" onClick={() => setActive((i) => i - 1)}>
                        <TiChevronLeftOutline />
                    </StyledNavButton>
                )}
                {bestPromotions.map((item, i) => (
                    <StyledCardContainer
                        key={i}
                        style={{
                            // @ts-ignore
                            '--active': i === active ? 1 : 0,
                            '--offset': (active - i) / 3,
                            '--direction': Math.sign(active - i),
                            '--abs-offset': Math.abs(active - i) / 3,
                        }}
                        $active={i === active}
                        $visible={Math.abs(active - i) < MAX_VISIBILITY}
                    >
                        <WebProductCard item={item} />
                    </StyledCardContainer>
                ))}
                {active < count - 1 && (
                    <StyledNavButton className="right" onClick={() => setActive((i) => i + 1)}>
                        <TiChevronRightOutline />
                    </StyledNavButton>
                )}
            </StyledCarousel>
        </StyledWrapper>
    );
};

export default WebRecommended;

// Styled Components
const StyledWrapper = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 3rem 0;
    width: 100%;
    height: 100%;
    background-color: rgb(247, 247, 249);
`;

const TextBox = styled.div`
    text-align: center;

    & > h3 {
        margin-bottom: 10px;
        font-size: 2rem;
        font-weight: bold;
        font-family: 'Jua', sans-serif;
        background: linear-gradient(90deg, rgba(0,161,229,1) 50%, rgba(3,217,243,1) 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        color: transparent;
    }

    & > p {
        margin-bottom: 3rem;
        color: var(--border-color);
    }

    @media (max-width: ${MOBILE_WIDTH}px) {
        & > h3 {
            font-size: 1.5rem;
        }

        & > p {
            font-size: 1rem;
        }
    }
`;

const StyledCarousel = styled.div`
    position: relative;
    width: 23rem;
    height: 23rem;
    perspective: 500px;
    transform-style: preserve-3d;
`;

const StyledCardContainer = styled.div<{ $active: boolean; $visible: boolean }>`
    position: absolute;
    width: 100%;
    height: 100%;
    transform:
        rotateY(calc(var(--offset) * 50deg))
        scaleY(calc(1 + var(--abs-offset) * -0.4))
        translateZ(calc(var(--abs-offset) * -30rem))
        translateX(calc(var(--direction) * -5rem));
    filter: blur(calc(var(--abs-offset) * 1rem));
    transition: all 0.3s ease-out;
    pointer-events: ${({ $active }) => ($active ? 'auto' : 'none')};
    opacity: ${({ $visible }) => ($visible ? '1' : '0')};
    display: ${({ $visible }) => ($visible ? 'block' : 'none')};
`;

const StyledNavButton = styled.button`
    color: #ffffff;
    font-size: 2.5rem;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 50%;
    z-index: 2;
    cursor: pointer;
    border-radius: 50%;
    background-color: var(--primary-color);
    transform: translateY(-50%);
    transition: all 0.3s ease-in-out;

    &.left {
        left: -2rem;
    }

    &.right {
        right: -2rem;
    }

    &:hover{
        background-color: var(--secondary-color);
    }


    @media (max-width: ${MOBILE_WIDTH}px) {
        top: 20%;
    }
`;

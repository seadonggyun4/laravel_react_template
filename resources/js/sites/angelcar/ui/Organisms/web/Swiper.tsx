import React, { useState, useRef } from "react";
import { Swiper as SwiperClass } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import styled from "styled-components";
import { MOBILE_WIDTH } from "@/shared/config";

// Define the type for an individual swiper item
interface SwiperItem {
    img: string;
    text: string;
    slide: number;
}

// Define the props for SwiperComponent
interface SwiperComponentProps {
    swiperList: SwiperItem[];
}

const SwiperComponent: React.FC<SwiperComponentProps> = ({ swiperList }) => {
    const [isPaused, setIsPaused] = useState(false); // Pause state
    const [currentSlide, setCurrentSlide] = useState(1); // Current slide state
    const swiperRef = useRef<SwiperClass | null>(null); // Swiper instance ref

    const togglePause = () => {
        if (swiperRef.current) {
            if (isPaused) {
                swiperRef.current.autoplay.start(); // Resume autoplay
            } else {
                swiperRef.current.autoplay.stop(); // Pause autoplay
            }
        }
        setIsPaused(!isPaused);
    };

    const goToSlide = (index: number) => {
        if (swiperRef.current) {
            swiperRef.current.slideToLoop(index); // Navigate to slide in loop mode
            setCurrentSlide(index + 1);
        }
    };

    return (
        <SwiperSection>
            <Swiper
                modules={[Navigation, Autoplay]}
                navigation={{
                    prevEl: ".custom-prev",
                    nextEl: ".custom-next",
                }}
                allowTouchMove={true} // Enable swipe gestures
                spaceBetween={0}
                loop={true} // Enable looping
                autoplay={{
                    delay: 5000, // Autoplay interval
                    disableOnInteraction: false, // Keep autoplay after interaction
                }}
                onSwiper={(swiper: SwiperClass) => {
                    swiperRef.current = swiper; // Store swiper instance
                }}
                onSlideChange={(swiper: SwiperClass) => {
                    setCurrentSlide(swiper.realIndex + 1); // Update current slide index
                }}
            >
                {swiperList.map((item, index) => (
                    <SwiperSlide key={index}>
                        <Image src={item.img} alt={item.text} />
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Custom Navigation Bar */}
            <NavigationBar>
                <div>
                    <NavigationBtn>
                        <span>{`${currentSlide}/${swiperList.length}`}</span>
                        <button className="custom-prev">&lt;</button>
                        <button className="pause-button" onClick={togglePause}>
                            {isPaused ? "▶" : "||"}
                        </button>
                        <button className="custom-next">&gt;</button>
                    </NavigationBtn>
                    <NavigationTag>
                        {swiperList.map((item, index) => (
                            <li
                                key={index}
                                className={item.slide === currentSlide ? "active" : ""}
                                onClick={() => goToSlide(index)}
                            >
                                {item.text}
                            </li>
                        ))}
                    </NavigationTag>
                </div>
            </NavigationBar>
        </SwiperSection>
    );
};

export default SwiperComponent;

// Styled widgets
const SwiperSection = styled.section`
    width: 100%;
    height: 100%;
    margin: 0 auto;
    position: relative;
    background-color: #ffffff;

    .swiper {
        width: 100%;
        height: 100%;
    }

    .swiper-slide {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
    }

    .swiper-button-prev,
    .swiper-button-next {
        display: none; /* Hide default navigation buttons */
    }
`;

const Image = styled.img`
    width: 100%;
    height: auto;
    object-fit: cover;

    @media (max-width: ${MOBILE_WIDTH}px) {
        height: 500px;
    }
`;

const NavigationBar = styled.div`
    display: flex;
    justify-content: center;
    padding: 1.25rem 0;
    border-bottom: 0.0625rem solid var(--border-secondary-color);

    & > div {
        display: flex;
        align-items: center;
        gap: 1.875rem;
        width: var(--section-width);
    }

    @media (max-width: ${MOBILE_WIDTH}px) {
        display: none;
    }
`;

const NavigationBtn = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.625rem;
    border-radius: var(--button-border-radius);
    background-color: rgba(0, 0, 0, 0.5);

    & span {
        margin-right: 0.9375rem;
        font-size: 0.9375rem;
        letter-spacing: 0.1875rem;
        color: #ffffff;
    }

    & button {
        color: #ffffff;
        background: none;
        border: none;
        font-size: 1rem;
        cursor: pointer;
    }
`;

const NavigationTag = styled.ul`
    display: flex;
    column-gap: 0.625rem;

    & li {
        padding: 0.625rem;
        border: 0.0625rem solid var(--border-color);
        border-radius: var(--tag-border-radius);
        font-size: 0.8rem;
        font-weight: bold;
        cursor: pointer;
        transition: all 0.3s ease;

        &.active {
            color: var(--primary-color);
            border-color: var(--primary-color);
            box-shadow: var(--primary-color) 0rem 0.125rem 0.0625rem 0rem;
        }
    }
`;

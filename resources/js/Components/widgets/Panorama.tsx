import React from "react";
import styled, { keyframes } from "styled-components";
import { MOBILE_WIDTH } from "@/constants"; // Import the constant

const Panorama: React.FC = () => {
    const bgVideo = "assets/video/bgVideo.mp4";

    const images = [
        "assets/img/panorama/panorama1.png",
        "assets/img/panorama/panorama2.png",
        "assets/img/panorama/panorama3.png",
        "assets/img/panorama/panorama4.png",
        "assets/img/panorama/panorama5.png",
        "assets/img/panorama/panorama6.png",
        "assets/img/panorama/panorama7.png",
        "assets/img/panorama/panorama8.png",
    ]; // public 폴더에서 이미지를 불러옴

    return (
        <Wrap>
            <Video src={bgVideo} loop autoPlay muted></Video>
            <TextContent>
                <h2>놓치지 마세요! <span>한정 프로모션!</span></h2>
                <p>지금 바로 참여하고 특별한 혜택을 누리세요.</p>
            </TextContent>
            <Circle>
                {images.map((image, index) => (
                    <Article key={index} className={`face${index + 1}`}>
                        <Inner>
                            <ImageContainer>
                                <img src={image} alt={`Panorama ${index + 1}`} />
                            </ImageContainer>
                        </Inner>
                    </Article>
                ))}
            </Circle>
        </Wrap>
    );
};

export default Panorama;

// Styled Components

const rotateAnimation = keyframes`
    0% {
        transform: rotateY(0deg);
    }
    100% {
        transform: rotateY(360deg);
    }
`;

const Wrap = styled.section`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 390px;
    overflow: hidden;
    perspective: 580px;
    position: relative;
`;

const Video = styled.video`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.2;
`;

const TextContent = styled.div`
    margin-top: 50px;
    text-align: center;

    h2 {
        margin-bottom: 10px;
        font-size: 1.8rem;
        font-weight: bold;

        & > span {
            color: var(--primary-color);
        }
    }

    p {
        font-size: 1rem;
        color: var(--border-color);
    }

    @media (max-width: ${MOBILE_WIDTH}px) {
        h2 {
            font-size: 1.5rem;
        }

        p {
            font-size: 0.8rem;
        }
    }
`;

const Circle = styled.section`
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -150px;
    margin-top: -200px;
    width: 350px;
    height: 100%;
    animation: ${rotateAnimation} linear 60s infinite alternate;
    transform-style: preserve-3d;
`;

const Article = styled.article`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    border-radius: 15px;
    backface-visibility: hidden;
    overflow: hidden;
    transition: .3s ease-in-out;

    &.face1 {
        transform: rotateY(0deg) translateZ(-500px);
    }

    &.face2 {
        transform: rotateY(45deg) translateZ(-500px);
    }

    &.face3 {
        transform: rotateY(90deg) translateZ(-500px);
    }

    &.face4 {
        transform: rotateY(135deg) translateZ(-500px);
    }

    &.face5 {
        transform: rotateY(180deg) translateZ(-500px);
    }

    &.face6 {
        transform: rotateY(225deg) translateZ(-500px);
    }

    &.face7 {
        transform: rotateY(270deg) translateZ(-500px);
    }

    &.face8 {
        transform: rotateY(315deg) translateZ(-500px);
    }
`;

const Inner = styled.div`
    width: 100%;
    height: 100%;
`;

const ImageContainer = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;

    img {
        width: 100%;
        object-fit: cover;
        transition: .3s ease-in-out;
    }
`;

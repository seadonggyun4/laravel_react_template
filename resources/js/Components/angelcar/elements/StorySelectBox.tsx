import React from "react";
import styled, { keyframes } from "styled-components";
import { cutYoutubeKey } from "@/utils";

interface Story {
    image: string;
    link?: string;
}

interface StorySelectBoxProps {
    stories: Story[];
    setkey: (key: string) => void;
}

const StorySelectBox: React.FC<StorySelectBoxProps> = ({ stories, setkey }) => {
    const clickItem = (url?: string) => {
        if (url) {
            const youTubeKey = cutYoutubeKey(url);
            setkey(youTubeKey);
        }
    };

    const renderMarqueeGroups = (reverse = false) => (
        <Marquee reverse={reverse}>
            {[...Array(2)].map((_, groupIndex) => (
                <MarqueeGroup key={groupIndex}>
                    {stories.map((story, index) => (
                        <Item
                            key={`${groupIndex}-${index}`}
                            onClick={() => clickItem(story.link)}
                        >
                            <div>
                                <img src={story.image} alt={`Story ${index + 1}`} />
                            </div>
                        </Item>
                    ))}
                </MarqueeGroup>
            ))}
        </Marquee>
    );

    return (
        <Wrapper>
            {renderMarqueeGroups()}
            {renderMarqueeGroups(true)}
        </Wrapper>
    );
};

export default StorySelectBox;

// Styled Components
const scrollY = keyframes`
    from {
        transform: translateY(0);
    }
    to {
        transform: translateY(-120%);
    }
`;

const Wrapper = styled.article`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 20px;
    margin: auto;
    height: 600px;
`;

const Marquee = styled.div<{ reverse?: boolean }>`
    display: flex;
    flex-direction: column;
    user-select: none;
    gap: 20px;
    mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1) 20%, rgba(0, 0, 0, 1) 80%, rgba(0, 0, 0, 0));
    -webkit-mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1) 20%, rgba(0, 0, 0, 1) 80%, rgba(0, 0, 0, 0));
    overflow: hidden;

    & > div {
        animation-direction: ${({ reverse }) => (reverse ? "reverse" : "normal")};
    }

    &:hover > div {
        animation-play-state: paused;
    }
`;

const MarqueeGroup = styled.div`
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    gap: 20px;
    min-width: 100%;
    animation: ${scrollY} 100s linear infinite;
`;

const Item = styled.div`
    display: grid;
    place-items: center;
    width: 180px;
    height: 180px;
    background: #ffff;
    cursor: pointer;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    border-radius: 15px;
    overflow: hidden;

    & > div {
        width: 100%;
        height: 100%;
    }

    & > div > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

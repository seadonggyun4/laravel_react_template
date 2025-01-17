import styled from "styled-components";
import YoutubeCard from "@/Components/angelcar/elements/YoutubeCard";
import React from "react";
import { MOBILE_WIDTH } from "@/constants";
import StorySelectBox from "@/Components/angelcar/elements/StorySelectBox";
import {stories} from "@/data";

const WebStoryVideo = () => {
    return (
        <WebStoryVideoSection>
            <WebStoryVideoWrapper>
                <h3>엔젤카 스토리</h3>
                <p>편안하고 만족스러운 제주여행을 위한 행복한 소식!</p>
                <StoryBox>
                    <YoutubeCard/>
                    {/*<StorySelectBox stories={stories}/>*/}
                </StoryBox>
            </WebStoryVideoWrapper>
        </WebStoryVideoSection>
    )
}

export default WebStoryVideo;

const WebStoryVideoSection = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 3rem 0;
    width: 100%;

    @media (max-width: ${MOBILE_WIDTH}px) {
        padding: 2rem 0;

    }
`

const WebStoryVideoWrapper = styled.div`
    width: var(--section-width);
    height: 100%;

    & > h3{
        margin-bottom: 10px;
        font-size: 1.5rem;
        font-family: 'Jua', sans-serif;
    }

    & > P {
        margin-bottom: 3rem;
    }


    @media (max-width: ${MOBILE_WIDTH}px) {
        & > h3{
            font-size: 1rem;
        }

        & > P {
            font-size: 0.8rem;
        }
    }
`

const StoryBox = styled.article`
    display: flex;
`

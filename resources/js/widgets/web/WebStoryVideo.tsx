import styled from "styled-components";
import YoutubeCard from "@/shared/ui/Molecule/YoutubeCard";
import React from "react";
import { MOBILE_WIDTH } from "@/shared/config";
import StorySelectBox from "@/shared/ui/Molecule/StorySelectBox";
import {stories} from "../../../data";
import useYoutube from "@/widgets/hooks/useYoutube";
import { FaYoutube } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaBlogger } from "react-icons/fa";
import { TbArrowBigRightFilled } from "react-icons/tb";



const WebStoryVideo = () => {
    const {key, setKey} = useYoutube();
    return (
        <WebStoryVideoSection>
            <WebStoryVideoWrapper>
                <StoryBox>
                    <TextContent>
                        <h3>엔젤카 스토리</h3>
                        <p>편안하고 만족스러운 제주여행을 위한 행복한 소식!</p>
                        <LinkBox>
                            <a className="youtube" href={'https://www.youtube.com/channel/UC9jAtW7s1ygAY2wfsGLhVfw'} target={"_blank"}>
                                <div>
                                    <FaYoutube />
                                    유튜브
                                </div>
                                <TbArrowBigRightFilled />
                            </a>
                            <a className="instagram" href={'https://www.instagram.com/jeju_angel_travel/#'} target={"_blank"}>
                                <div>
                                    <FaSquareInstagram />
                                    인스타그램
                                </div>
                                <TbArrowBigRightFilled />
                            </a>
                            <a className="naverBlog" href={'https://blog.naver.com/jeju_angelcar'} target={"_blank"}>
                                <div>
                                    <FaBlogger />
                                    네이버 블로그
                                </div>
                                <TbArrowBigRightFilled />
                            </a>
                        </LinkBox>
                    </TextContent>
                    <VideoContent>
                        <YoutubeCard youTubeKey={key}/>
                    </VideoContent>
                </StoryBox>
                <StorySelectBox stories={stories} setkey={setKey}/>
            </WebStoryVideoWrapper>
        </WebStoryVideoSection>
    )
}

export default WebStoryVideo;

const WebStoryVideoSection = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: var(--section-padding) 0;
    width: 100%;

    @media (max-width: ${MOBILE_WIDTH}px) {
        padding: var(--section-m-padding) 0;
    }
`

const WebStoryVideoWrapper = styled.div`
    display: flex;
    column-gap: 1rem;
    width: var(--section-width);
    height: 100%;
`

const StoryBox = styled.article`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 675px;
`

const TextContent = styled.div`
    width: 100%;

    & > h3{
        margin-bottom: 10px;
        font-size: var(--strong-font);
        font-family: 'Jua', sans-serif;
    }

    & > p{
        margin-bottom: 0.5rem;
    }

    @media (max-width: ${MOBILE_WIDTH}px) {
        & > h3{
            font-size: var(--strong-m-font);
        }

        & > P {
            font-size: var(--p-m-font);
        }
    }
`

const VideoContent = styled.div`
    width: 100%;
    height: 380px;
`


const LinkBox = styled.div`
    a {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0.5rem 0;
        border-bottom: 2px solid var(--border-secondary-color);
        transition: 0.3s ease-in-out;
        cursor: pointer;
        color: var(--border-color);


        & > div {
            display: flex;
            align-items: center;
            column-gap: 5px;
        }

        &.youtube:hover {
            color: #f03;
            border-bottom: 2px solid #f03;
        }

        &.instagram:hover {
            color:#C13584;
            border-bottom: 2px solid #C13584;
        }

        &.naverBlog:hover {
            color:#03c75a;
            border-bottom: 2px solid #03c75a;
        }
    }
`

import styled from "styled-components";
import React from "react";
import PageLayout from "@/sites/angelcar/layouts/PageLayout";
import { Link } from "@inertiajs/react";

const NotFoundPage = () => {
    const NotFoundImg = '/assets/img/notFoundImg.png';


    return (
        <PageLayout title="제주도렌트카 | 제주엔젤카">
            <Box>
                <Wrapper>
                    <Image src={NotFoundImg} alt="404 에러" />
                    <Strong>
                        잘못된 경로입니다.<br />
                        다시 시도해 주세요.
                    </Strong>
                    <TextBox>
                        죄송합니다, 요청하신 페이지를 찾을 수 없습니다. <br />
                        입력하신 주소가 정확한지 확인하시거나, 홈페이지로 돌아가 다시 시도해주세요.
                    </TextBox>
                    <LinkBox>
                        <Link href={"/"}>홈으로 이동</Link>
                    </LinkBox>
                </Wrapper>
            </Box>
        </PageLayout>
    );
};

export default NotFoundPage;

const Box = styled.article`
    width: 100%;
    height: calc(100vh - var(--header-height));
    display: flex;
    justify-content: center;
    align-items: center;
`

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    width: 632px;
    height: 80%;
    padding: 0 3rem;
    border-radius: var(--button-border-radius);
    background-color: #ffffff;
`;

const Image = styled.img`
    width: 266px;
    height: auto;
    margin-bottom: 17px;
`;

const Strong = styled.strong`
    margin-bottom: 17px;
    text-align: center;
    font-size: 24px;
    font-weight: 600;
    line-height: 32px;
    letter-spacing: -0.464px;
`;

const TextBox = styled.div`
    width: 100%;
    padding: 24px;
    border-radius: var(--button-border-radius);
    text-align: center;
    background-color: var(--bg-secondary-color);
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: -0.128px;
`;

const LinkBox = styled.div`
    margin-top: 15px;

    & > a {
        display: block;
        padding: 10px 20px;
        border-radius: var(--button-border-radius);
        background-color: var(--primary-color);
        color: white;
        transition: 0.3s ease-in-out;

        &:hover {
            background-color: var(--secondary-color);
        }
    }
`;



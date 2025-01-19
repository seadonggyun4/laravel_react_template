import React from "react";
import styled from "styled-components";
import { MOBILE_WIDTH } from "@/common/constants";

interface Article {
    title: string;
    content: string[];
}

interface FooterProps {
    articles: Article[];
}

const Footer: React.FC<FooterProps> = ({ articles }) => {
    return (
        <FooterContainer>
            <ContentWrapper>
                {articles.map((article, index) => (
                    <Article key={index}>
                        <Title>{article.title}</Title>
                        <ul>
                            {article.content.map((item, idx) => (
                                <li key={idx}>{item}</li>
                            ))}
                        </ul>
                    </Article>
                ))}
            </ContentWrapper>
            <Copyright>Copyright© 주식회사 제주엔젤렌트카 All rights reserved.</Copyright>
        </FooterContainer>
    );
};

export default Footer;

const FooterContainer = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: var(--section-m-padding) 0;
    width: 100%;
    background-color: #ffffff;
`;

const ContentWrapper = styled.div`
    display: flex;
    width: 100%;
    max-width: var(--section-width);
    margin-bottom: 1.25rem;

    @media (max-width: ${MOBILE_WIDTH}px) {
        flex-direction: column;
        align-items: center;
    }
`;

const Article = styled.article`
    flex: 1;
    margin: 0 0.9375rem;

    ul {
        padding: 0;
        list-style: none;
    }

    li {
        margin: 0.3125rem 0;
        font-size: 0.7rem;
        line-height: 1.5;
    }

    @media (max-width: ${MOBILE_WIDTH}px) {
        margin: 1.25rem 0;
        text-align: center;
    }
`;

const Title = styled.h4`
    font-size: 1rem;
    font-weight: bold;
    margin-bottom: 0.625rem;
`;

const Copyright = styled.div`
    font-size: 0.7125rem;
    color: var(--border-color);
    text-align: center;
`;

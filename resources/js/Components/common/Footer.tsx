import React from "react";
import styled from "styled-components";
import { MODAL_WIDTH } from "@/constants"; // Import the constant

const Footer: React.FC = () => {
    return (
        <FooterContainer>
            <ContentWrapper>
                <Section>
                    <Title>About Us</Title>
                    <ul>
                        <li>주식회사 제주엔젤렌트카</li>
                        <li>대표자: 강영민, 김재린</li>
                        <li>통신판매업신고: 제2018-제주용담2-0012호</li>
                        <li>사업자등록번호: 127-86-45776</li>
                        <li>관광사업등록: 일반여행업 제2019-09호(제주)</li>
                        <li>주소: 제주 제주시 도령로 171-1</li>
                        <li><a href="tel:064-744-1401">전화: 064-744-1401</a></li>
                        <li>팩스: 0303-0946-1401</li>
                        <li><a href="mailto:angelcar@jejuangelcar.com">이메일: angelcar@jejuangelcar.com</a></li>
                    </ul>
                </Section>
                <Section>
                    <Title>Customer Service</Title>
                    <ul>
                        <li><a href="tel:064-744-1401">064-744-1401</a></li>
                        <li>고객센터 08:00~19:00 (연중무휴)</li>
                    </ul>
                </Section>
                <Section>
                    <Title>Jeju Angel Tour</Title>
                    <ul>
                        <li>주식회사 제주엔젤투어</li>
                        <li>대표자: 강영민</li>
                        <li>통신판매업신고: 제2018-제주용담2-0007호</li>
                        <li>사업자등록번호: 393-81-00371</li>
                        <li>관광사업등록: 일반여행업 제2016-26호(제주)</li>
                        <li>주소: 제주 제주시 도령로 171-1</li>
                        <li><a href="tel:064-738-1004">전화: 064-738-1004</a></li>
                    </ul>
                </Section>
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
    padding: 1.25rem 0;
    width: 100%;
    background-color: #ffffff;
`;

const ContentWrapper = styled.div`
    display: flex;
    width: 100%;
    max-width: var(--section-width);
    margin-bottom: 1.25rem;

    @media (max-width: ${MODAL_WIDTH}px) {
        flex-direction: column;
        align-items: center;
    }
`;

const Section = styled.div`
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

    a {
        text-decoration: none;
        color: inherit;
        &:hover {
            text-decoration: underline;
        }
    }

    @media (max-width: ${MODAL_WIDTH}px) {
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

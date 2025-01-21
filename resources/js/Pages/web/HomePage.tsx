import React from "react";
import Panorama from "@/Components/widgets/Panorama";
import Swiper from "@/Components/widgets/Swiper";
import styled from "styled-components";
import PageLayout from "@/Layouts/PageLayout";
import WebProductCard from "@/Components/elements/web/WebProductCard";
import { bestPromotions, premiumPromotions, salesPromotions } from "@/data";
import Products from "@/Components/common/Products";
import WebSearSection from "@/Components/common/web/WebSearch";
import MobileProductCard from "@/Components/elements/mobile/MobileProductCard";
import { useDeviceSize } from "@/ux/provider/DeviceSize";
import { MOBILE_WIDTH } from "@/constants";

export default function HomePage() {
    const { isMobile } = useDeviceSize();

    const Banner = '/assets/img/banner.jpeg';

    return (
        <PageLayout title="제주도렌트카 | 제주엔젤카">
            <Swiper />
            <WebSearSection />
            <Products text={{
                title: '베스트 추천상품',
                description: '#제주여행 #완전면책 #슈퍼면책'
            }}>
                {bestPromotions.map((item, index) => (
                    isMobile ? (
                        <MobileProductCard item={item} key={index} reserve={'yes'} />
                    ) : (
                        <WebProductCard item={item} key={index} reserve={'yes'} />
                    )
                ))}
            </Products>
            <Panorama />
            <Products text={{
                title: '수입/전기 상품',
                description: '#5년이내 #블박구비 #EV3입고!'
            }}>
                {premiumPromotions.map((item, index) => (
                    isMobile ? (
                        <MobileProductCard item={item} key={index} reserve={'yes'} />
                    ) : (
                        <WebProductCard item={item} key={index} reserve={'yes'} />
                    )
                ))}
            </Products>
            {/*<BannerBox>*/}
            {/*    <img src={Banner} alt="banner" />*/}
            {/*</BannerBox>*/}
            <Products text={{
                title: '한정 특가상품',
                description: '#지정 기간내 사용 #최대50% #최소5%'
            }}>
                {salesPromotions.map((item, index) => (
                    isMobile ? (
                        <MobileProductCard item={item} key={index} reserve={'yes'} />
                    ) : (
                        <WebProductCard item={item} key={index} reserve={'yes'} />
                    )
                ))}
            </Products>
        </PageLayout>
    );
}

const BannerBox = styled.div`
    width: 100%;

    & img {
        width: 100%;
        height: auto;
        object-fit: contain;
    }

    @media (max-width: ${MOBILE_WIDTH}px) {
        display: none;
    }
`;

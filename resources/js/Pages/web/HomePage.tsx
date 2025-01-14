import Panorama from "@/Components/widgets/Panorama";
import Swiper from "@/Components/widgets/Swiper";
import styled from "styled-components";
import PageLayout from "@/Layouts/PageLayout";
import WebProductCard from "@/Components/elements/WebProductCard";
import {bestPromotions, premiumPromotions, salesPromotions} from "@/data";
import WebProductsSection from "@/Components/common/WebProductsSection";
import { MOBILE_WIDTH } from "@/constants";
import WebSearSection from "@/Components/common/WebSearSection";

export default function HomePage() {
    const Banner = '/assets/img/banner.jpeg';

    return (
        <PageLayout title="제주도렌트카 | 제주엔젤카">
            <Swiper/>
            <WebSearSection />
            <WebProductsSection text={{
                title:'베스트 추천상품',
                description:'#제주여행 #완전면책 #슈퍼면책'
            }}>
                {bestPromotions.map((item, index) => (
                    <WebProductCard item={item} key={index}/>
                ))}
            </WebProductsSection>
            <BannerBox>
                <img src={Banner} alt="banner"/>
            </BannerBox>
            <WebProductsSection text={{
                title:'수입/전기 상품',
                description:'#5년이내 #블박구비 #EV3입고!'
            }}>
                {premiumPromotions.map((item, index) => (
                    <WebProductCard item={item} key={index}/>
                ))}
            </WebProductsSection>
            <Panorama/>
            <WebProductsSection text={{
                title:'한정 특가상품',
                description:'#지정 기간내 사용 #최대50% #최소5%'
            }}>
                {salesPromotions.map((item, index) => (
                    <WebProductCard item={item} key={index}/>
                ))}
            </WebProductsSection>
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
`


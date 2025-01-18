import React from "react";
import Panorama from "@/Components/angelcar/widgets/Panorama";
import Swiper from "@/Components/angelcar/widgets/Swiper";
import PageLayout from "@/Layouts/angelcar/PageLayout";
import WebProductCard from "@/Components/angelcar/elements/web/WebProductCard";
import { bestPromotions, premiumPromotions, salesPromotions } from "@/data";
import Products from "@/Components/angelcar/common/Products";
import WebSearSection from "@/Components/angelcar/common/web/WebSearch";
import MobileProductCard from "@/Components/angelcar/elements/mobile/MobileProductCard";
import { useDeviceSize } from "@/ux/provider/DeviceSize";
import WebStoryVideo from "@/Components/angelcar/widgets/web/WebStoryVideo";

export default function HomePage() {
    const { isMobile } = useDeviceSize();

    return (
        <PageLayout title="제주도렌트카 | 제주엔젤카">
            <Swiper/>
            <WebSearSection/>
            <Products text={{
                title: '베스트 추천상품',
                description: '#제주여행 #완전면책 #슈퍼면책'
            }}>
                {bestPromotions.map((item, index) => (
                    isMobile ? (
                        <MobileProductCard item={item} key={index} reserve={'yes'}/>
                    ) : (
                        <WebProductCard item={item} key={index} reserve={'yes'}/>
                    )
                ))}
            </Products>
            <WebStoryVideo />
            <Products text={{
                title: '수입/전기 상품',
                description: '#5년이내 #블박구비 #EV3입고!'
            }}>
                {premiumPromotions.map((item, index) => (
                    isMobile ? (
                        <MobileProductCard item={item} key={index} reserve={'yes'}/>
                    ) : (
                        <WebProductCard item={item} key={index} reserve={'yes'}/>
                    )
                ))}
            </Products>
            <Panorama/>

            {/*<Products text={{*/}
            {/*    title: '한정 특가상품',*/}
            {/*    description: '#지정 기간내 사용 #최대50% #최소5%'*/}
            {/*}}>*/}
            {/*    {salesPromotions.map((item, index) => (*/}
            {/*        isMobile ? (*/}
            {/*            <MobileProductCard item={item} key={index} reserve={'yes'}/>*/}
            {/*        ) : (*/}
            {/*            <WebProductCard item={item} key={index} reserve={'yes'}/>*/}
            {/*        )*/}
            {/*    ))}*/}
            {/*</Products>*/}
        </PageLayout>
    );
}


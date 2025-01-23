import React from "react";
import Panorama from "@/widgets/web/Panorama";
import Swiper from "@/widgets/web/Swiper";
import PageLayout from "@/sites/angelcar/layouts/PageLayout";
import WebProductCard from "@/shared/ui/Molecule/web/WebProductCard";
import { bestPromotions } from "../../../../data";
import Products from "@/widgets/reaction/Products";
import WebSearSection from "@/widgets/web/WebSearch";
import MobileProductCard from "@/shared/ui/Molecule/mobile/MobileProductCard";
import { useDeviceSize } from "@/shared/provider/DeviceSize";
import WebStoryVideo from "@/widgets/web/WebStoryVideo";
import { events, swiperList } from "../../../../data";

export default function HomePage() {
    const { isMobile } = useDeviceSize();

    return (
        <PageLayout>
            <Swiper swiperList={swiperList}/>
            <WebSearSection/>
            <WebStoryVideo />
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
            <Panorama events={events} />
        </PageLayout>
    );
}


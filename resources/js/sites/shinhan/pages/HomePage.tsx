import React from "react";
import PageLayout from "@/sites/shinhan/layouts/PageLayout";
import WebProductCard from "@/common/components/Molecule/web/WebProductCard";
import { bestPromotions } from "../../../../data";
import Products from "@/common/components/Organisms/shared/Products";
import WebSearSection from "@/common/components/Organisms/web/WebSearch";
import MobileProductCard from "@/common/components/Molecule/mobile/MobileProductCard";
import { useDeviceSize } from "@/common/ux/provider/DeviceSize";
import WebRecommended from "@/common/components/Organisms/web/WebRecommended";

export default function HomePage() {
    const { isMobile } = useDeviceSize();

    return (
        <PageLayout title="제주도렌트카 | 제주엔젤카">
            <WebSearSection/>
            <WebRecommended />
            <Products text={{
                title: '베스트 추천상품',
                description: '#제주여행 #완전면책 #슈퍼면책'
            }}>
                {bestPromotions.map((item, index) => (
                    isMobile ? (
                        <MobileProductCard item={item} key={index} reserve={'yes'} pay={'yes'}/>
                    ) : (
                        <WebProductCard item={item} key={index} reserve={'yes'} pay={'yes'}/>
                    )
                ))}
            </Products>
        </PageLayout>
    );
}


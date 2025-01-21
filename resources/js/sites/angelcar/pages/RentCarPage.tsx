import PageLayout from "@/sites/angelcar/layouts/PageLayout";
import {bestPromotions, premiumPromotions} from "../../../../data";
import WebProductCard from "@/shared/ui/Molecule/web/WebProductCard";
import Products from "@/widgets/reaction/Products";
import styled from "styled-components";
import WebSearchSection from "@/widgets/web/WebSearch";
import WebRecommended from "@/widgets/web/WebRecommended";
import MobileProductCard from "@/shared/ui/Molecule/mobile/MobileProductCard";
import React from "react";
import {useDeviceSize} from "@/app/provider/DeviceSize";

const RentCarPage = () => {
    const rentCars = bestPromotions.concat(premiumPromotions);
    const { isMobile } = useDeviceSize();

    return (
        <PageLayout title="제주도렌트카 | 제주엔젤카" >
            <RentCarSection>
                <WebSearchSection />
                <WebRecommended />
                <Products text={{
                    title:'렌터카 예약',
                    description:'엔젤카와 함께 빠르고 편안한 여행 되세요!'
                }}>
                    {rentCars.map((item, index) => (
                        isMobile ? (
                            <MobileProductCard item={item} key={index} reserve={'yes'} pay={'yes'}/>
                        ) : (
                            <WebProductCard item={item} key={index} reserve={'yes'} pay={'yes'}/>
                        )
                    ))}
                </Products>
            </RentCarSection>
        </PageLayout>
    )
}

export default RentCarPage;

const RentCarSection = styled.div`
margin-top: var(--nav-height);
`

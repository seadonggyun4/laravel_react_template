import PageLayout from "@/sites/angelcar/layouts/PageLayout";
import Products from "@/widgets/reaction/Products";
import WebProductCard from "@/shared/ui/Molecule/web/WebProductCard";
import {salesPromotions} from "../../../../data";
import styled from "styled-components";
import WebSearchSection from "@/widgets/web/WebSearch";
import { useDeviceSize } from "@/shared/provider/DeviceSize";
import MobileProductCard from "@/shared/ui/Molecule/mobile/MobileProductCard";
import React from "react";

const LimitedCarPage = () => {
    const { isMobile } = useDeviceSize();

    return (
        <PageLayout>
            <RentCarSection>
                <WebSearchSection />
                <Products text={{
                    title:'한정 특가상품',
                    description:'특가로 진행되는 이 기회를 놓치지 마세요!'
                }}>
                    {salesPromotions.map((item, index) => (
                        isMobile ? (
                            <MobileProductCard item={item} key={index} pay={'yes'} />
                        ) : (
                            <WebProductCard item={item} key={index} pay={'yes'} />
                        )
                    ))}
                </Products>
            </RentCarSection>
        </PageLayout>
    )
}

export default LimitedCarPage;

const RentCarSection = styled.div`
margin-top: var(--nav-height);
`

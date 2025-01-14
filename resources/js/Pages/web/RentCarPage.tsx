import PageLayout from "@/Layouts/PageLayout";
import {bestPromotions, premiumPromotions} from "@/data";
import WebProductCard from "@/Components/elements/WebProductCard";
import WebProducts from "@/Components/common/WebProducts";
import styled from "styled-components";
import WebSearchSection from "@/Components/common/WebSearch";
import WebRecommended from "@/Components/common/WebRecommended";

const RentCarPage = () => {
    const rentCars = bestPromotions.concat(premiumPromotions);

    return (
        <PageLayout title="제주도렌트카 | 제주엔젤카" >
            <RentCarSection>
                <WebSearchSection />
                <WebRecommended />
                <WebProducts text={{
                    title:'렌터카 예약',
                    description:'엔젤카와 함께 빠르고 편안한 여행 되세요!'
                }}>
                    {rentCars.map((item, index) => (
                        <WebProductCard item={item} key={index}/>
                    ))}
                </WebProducts>
            </RentCarSection>
        </PageLayout>
    )
}

export default RentCarPage;

const RentCarSection = styled.div`
margin-top: var(--nav-height);
`

import PageLayout from "@/Layouts/PageLayout";
import {bestPromotions, premiumPromotions} from "@/data";
import WebProductCard from "@/Components/elements/WebProductCard";
import WebProductsSection from "@/Components/common/WebProductsSection";
import styled from "styled-components";

const RentCarPage = () => {
    const rentCars = bestPromotions.concat(premiumPromotions);

    return (
        <PageLayout title="제주도렌트카 | 제주엔젤카" >
            <RentCarSection>
                <WebProductsSection text={{
                    title:'렌터카 예약',
                    description:'엔젤카와 함께 빠르고 편안한 여행 되세요!'
                }}>
                    {rentCars.map((item, index) => (
                        <WebProductCard item={item} key={index}/>
                    ))}
                </WebProductsSection>
            </RentCarSection>
        </PageLayout>
    )
}

export default RentCarPage;

const RentCarSection = styled.div`
margin-top: 10rem;
`

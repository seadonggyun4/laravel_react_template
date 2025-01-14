import PageLayout from "@/Layouts/PageLayout";
import WebProductsSection from "@/Components/common/WebProductsSection";
import WebProductCard from "@/Components/elements/WebProductCard";
import {salesPromotions} from "@/data";
import styled from "styled-components";

const LimitedCarPage = () => {
    return (
        <PageLayout title="제주도렌트카 | 제주엔젤카" >
            <RentCarSection>
                <WebProductsSection text={{
                    title:'한정 특가상품',
                    description:'특가로 진행되는 이 기회를 놓치지 마세요!'
                }}>
                    {salesPromotions.map((item, index) => (
                        <WebProductCard item={item} key={index}/>
                    ))}
                </WebProductsSection>
            </RentCarSection>
        </PageLayout>
    )
}

export default LimitedCarPage;

const RentCarSection = styled.div`
margin-top: 10rem;
`

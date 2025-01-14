import PageLayout from "@/Layouts/PageLayout";
import WebProducts from "@/Components/common/WebProducts";
import WebProductCard from "@/Components/elements/WebProductCard";
import {salesPromotions} from "@/data";
import styled from "styled-components";
import WebSearchSection from "@/Components/common/WebSearch";

const LimitedCarPage = () => {
    return (
        <PageLayout title="제주도렌트카 | 제주엔젤카" >
            <RentCarSection>
                <WebSearchSection />
                <WebProducts text={{
                    title:'한정 특가상품',
                    description:'특가로 진행되는 이 기회를 놓치지 마세요!'
                }}>
                    {salesPromotions.map((item, index) => (
                        <WebProductCard item={item} key={index}/>
                    ))}
                </WebProducts>
            </RentCarSection>
        </PageLayout>
    )
}

export default LimitedCarPage;

const RentCarSection = styled.div`
margin-top: var(--nav-height);
`

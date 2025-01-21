import React from "react";
import styled from "styled-components";
import { MOBILE_WIDTH } from "@/constants";

interface WebProductsSectionProps {
    text?: {
        title: string;
        description: string;
    };
    children: React.ReactNode;
}

const Products: React.FC<WebProductsSectionProps> = ({ text, children }) => {
    return (
        <ProductSection>
            <ProductWrapper>
                {text && (
                    <>
                        <h3>{text.title}</h3>
                        <p>{text.description}</p>
                    </>
                )}
                <GridContainer>
                    {children}
                </GridContainer>
            </ProductWrapper>
        </ProductSection>
    );
};

export default Products;

const ProductSection = styled.section`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
    padding: 3rem 0;
`

const ProductWrapper = styled.article`
    width: var(--section-width);
    height: 100%;

    & > h3{
        margin-bottom: 10px;
        font-size: 2rem;
        font-weight: bold;
        font-family: 'Jua', sans-serif;
    }

    & > P {
        margin-bottom: 3rem;
    }


    @media (max-width: ${MOBILE_WIDTH}px) {
        padding: 1rem;

        & > h3{
            font-size: 1.5rem;
        }

        & > P {
            font-size: 1rem;
        }
    }
`

const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 40px; /* Space between items */
    width: 100%;

    @media (max-width: ${MOBILE_WIDTH}px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;

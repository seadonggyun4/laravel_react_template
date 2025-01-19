import React from "react";
import styled from "styled-components";
import { MOBILE_WIDTH } from "@/common/constants";

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
    padding: var(--section-padding) 0;


    @media (max-width: ${MOBILE_WIDTH}px) {
        padding: var(--section-m-padding) 0;
    }
`

const ProductWrapper = styled.article`
    width: var(--section-width);
    height: 100%;

    & > h3{
        margin-bottom: 10px;
        font-size: var(--strong-font);
        font-family: 'Jua', sans-serif;
    }

    & > P {
        margin-bottom: 3rem;
    }


    @media (max-width: ${MOBILE_WIDTH}px) {
        & > h3{
            font-size: var(--strong-m-font);
        }

        & > P {
            font-size: var(--p-m-font);
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

import React from "react";
import styled from "styled-components";

interface WebProductsSectionProps {
    text?: {
        title: string;
        description: string;
    };
    children: React.ReactNode;
}

const WebProductsSection: React.FC<WebProductsSectionProps> = ({ text, children }) => {
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

export default WebProductsSection;

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
    }

    & > P {
        margin-bottom: 3rem;
    }
`

const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr); /* 4 items per row */
    gap: 40px; /* Space between items */
    width: 100%;
`;

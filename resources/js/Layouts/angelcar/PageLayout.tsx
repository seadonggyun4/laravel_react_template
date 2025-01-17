import React from 'react';
import { Head } from '@inertiajs/react';
import Header from '@/Components/angelcar/common/Header';
import Footer from '@/Components/angelcar/common/Footer';
import PopUpBg from "@/Components/angelcar/common/PopUpBg";
import styled from 'styled-components';
import { useShowPopUp } from "@/ux/provider/ShowPopUp";

const PageLayout: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => {
    const { showCardDetail } = useShowPopUp();

    const showPopUp = showCardDetail !== null;

    return (
        <PageWrapper>
            <Head title={title} />
            <Header />
            <Main>
                {children}
            </Main>
            <Footer/>
            <PopUpBg show={showPopUp}/>
        </PageWrapper>
    );
};

export default PageLayout;

const PageWrapper = styled.div`
    width: 100%;
    height: 100%;
    min-width: 768;
`;

const Main = styled.main`
    padding-top: var(--header-height);
    padding-bottom: 3rem;
    width: 100%;
    height: 100%;
    min-height: 100vh;
    overflow: hidden;
`;

import React from 'react';
import { Head } from '@inertiajs/react';
import Header from '@/common/components/Organisms/Header';
import Footer from '@/common/components/Organisms/Footer';
import PopUpBg from "@/common/components/widget/PopUpBg";
import styled from 'styled-components';
import { useShowPopUp } from "@/common/ux/provider/ShowPopUp";

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

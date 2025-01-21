import React from 'react';
import { Head } from '@inertiajs/react';
import Header from '@/widgets/reaction/Header';
import Footer from '@/widgets/reaction/Footer';
import PopUpBg from "@/widgets/reaction/PopUpBg";
import styled from 'styled-components';
import { useShowPopUp } from "@/app/provider/ShowPopUp";
import { FOOTER_ARTICLES, HEADER_ITEMS } from "@/sites/shinhan/config";
import {getNavMenu} from "@/sites/shinhan/config/routes";
import {useTranslation} from "react-i18next";

const PageLayout: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => {
    const { showCardDetail } = useShowPopUp();
    const { t } = useTranslation();
    const navMenu = getNavMenu(t)

    const showPopUp = showCardDetail !== null;

    return (
        <PageWrapper>
            <Head title={title} />
            <Header navMenu={navMenu} headerItems={HEADER_ITEMS}/>
            <Main>
                {children}
            </Main>
            <Footer articles={FOOTER_ARTICLES}/>
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

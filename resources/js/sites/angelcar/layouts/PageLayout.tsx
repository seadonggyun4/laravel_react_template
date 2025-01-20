import React from 'react';
import { Head } from '@inertiajs/react';
import Header from '@/common/components/Organisms/shared/Header';
import Footer from '@/common/components/Organisms/shared/Footer';
import PopUpBg from "@/common/components/Organisms/shared/PopUpBg";
import styled from 'styled-components';
import { useShowPopUp } from "@/common/ux/provider/ShowPopUp";
import { FOOTER_ARTICLES, HEADER_ITEMS } from "@/sites/angelcar/constants";
import {getNavMenu, getNaveContentMenu} from "@/sites/angelcar/constants/routes";
import {useTranslation} from "react-i18next";

const PageLayout: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => {
    const { showCardDetail } = useShowPopUp();
    const { t } = useTranslation();
    const navMenu = getNavMenu(t)
    const navContentMenu = getNaveContentMenu(t)

    const showPopUp = showCardDetail !== null;

    return (
        <PageWrapper>
            <Head title={title} />
            <Header navMenu={navMenu} navContentMenu={navContentMenu} headerItems={HEADER_ITEMS}/>
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

import React from 'react';
import { Head, usePage } from '@inertiajs/react';
import Header from '@/widgets/reaction/Header';
import Footer from '@/widgets/reaction/Footer';
import PopUpBg from "@/widgets/reaction/PopUpBg";
import styled from 'styled-components';
import { useShowPopUp } from "@/shared/provider/ShowPopUp";
import { FOOTER_ARTICLES, HEADER_ITEMS } from "@/sites/shinhan/config";
import {getNavMenu} from "@/sites/shinhan/config/routes";
import {useTranslation} from "react-i18next";

type PageProps = {
    meta: {
        title?: string;
        description?: string;
        keywords?: string;
    };
};

const PageLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const { showCardDetail } = useShowPopUp();
    const { t } = useTranslation();
    const { props } = usePage<PageProps>();
    const navMenu = getNavMenu(t)
    const showPopUp = showCardDetail !== null;

    return (
        <PageWrapper>
            <Head title={props.meta ? props.meta.title : 'NotFound'} />
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

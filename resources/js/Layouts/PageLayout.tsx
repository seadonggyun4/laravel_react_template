import React from 'react';
import { Head } from '@inertiajs/react';
import Header from '@/Components/common/Header';
import Footer from '@/Components/common/Footer';
import styled from 'styled-components';

const PageLayout: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => {
    return (
        <>
            <Head title={title} />
            <Header />
            <Main>
                {children}
            </Main>
            <Footer/>
        </>
    );
};

export default PageLayout;

const Main = styled.main`
    padding-top: var(--header-height);
    width: 100%;
    height: 100%;
    min-height: 100vh;
    overflow: hidden;
`;

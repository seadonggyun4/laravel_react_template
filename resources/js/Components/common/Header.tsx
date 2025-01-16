import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link, usePage } from "@inertiajs/react";
import { NavMenu, NaveContentMenu } from "@/constants/routes";
import { useTranslation } from 'react-i18next';
import initI18n from '@/utils/i18n';
import i18n from "i18next";

const Header: React.FC = () => {
    const [hoversed, setHoversed] = useState<string | null>(null);
    const [currentLocale, setCurrentLocale] = useState<string>('ko'); // 현재 언어 상태
    const { url } = usePage();
    const firstPath = `/${url.split("/")[1]}`;
    const { t } = useTranslation();
    const { component } = usePage(); // 현재 Inertia 페이지 컴포넌트 이름

    const resolvePageComponentPath = (component: string): string => {
        return `../Pages/${component}`; // 빌드 후 실제 파일 구조에 맞게 경로 생성
    };

    // 언어 변경 함수
    const changeLanguage = async (locale: string) => {
        // 동적 import를 사용하여 현재 페이지 컴포넌트 로드
        const pagePath = resolvePageComponentPath(component); // 경로 생성
        const page = (await import(pagePath)).default;
        const modules = page.modules || []; // 페이지에서 정의된 modules 가져오기

        if (locale === currentLocale) return; // 동일 언어 선택 시 무시
        await initI18n(locale, modules); // 필요한 모듈 로드
        setCurrentLocale(locale); // React 상태 업데이트
    };

    // 활성 메뉴 찾기
    const activeMenu: string | undefined = Object.keys(NaveContentMenu).find((parentKey) =>
        NaveContentMenu[parentKey]?.some((subItem) => subItem.link === url)
    );

    // 초기 설정
    useEffect(() => {
        setHoversed(firstPath);
        setCurrentLocale(i18n.language || "en"); // i18n 초기 언어 동기화
    }, [firstPath]);

    return (
        <HeaderContainer>
            <HeaderBox>
                <div>
                    <Logo>
                        <Link href="/">angelcar</Link>
                    </Logo>
                    <RightSection>
                        <LoginButton type="button" className="login">
                            {t('login')}
                        </LoginButton>
                        <LanguageDropdown>
                            <button type="button" className="more">
                                {currentLocale === 'ko' ? '한국어' : 'English'} ▾
                            </button>
                            <DropdownMenu>
                                <DropdownItem onClick={() => changeLanguage('ko')}>한국어</DropdownItem>
                                <DropdownItem onClick={() => changeLanguage('en')}>English</DropdownItem>
                            </DropdownMenu>
                        </LanguageDropdown>
                    </RightSection>
                </div>
            </HeaderBox>
            <div onMouseLeave={() => !activeMenu && setHoversed(null)}>
                <Nav>
                    <div>
                        {NavMenu.map((item) => (
                            <StyledLink
                                key={item.link}
                                href={item.link}
                                onMouseOver={() => setHoversed(item.link)}
                                className={firstPath === item.link ? "active" : ""}
                            >
                                {item.title}
                            </StyledLink>
                        ))}
                    </div>
                </Nav>
                {(hoversed && NaveContentMenu[hoversed]) || (activeMenu && hoversed && NaveContentMenu[hoversed]) ? (
                    <NavContent>
                        <ul>
                            {NaveContentMenu[hoversed || activeMenu!]?.map((item) => (
                                <li key={item.link}>
                                    <SubLink
                                        href={item.link}
                                        className={url === item.link ? "active" : ""}
                                    >
                                        {item.title}
                                    </SubLink>
                                </li>
                            ))}
                        </ul>
                    </NavContent>
                ) : null}
            </div>
        </HeaderContainer>
    );
};

// HeaderContainer
const HeaderContainer = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: var(--header-zindex);
    background-color: #ffff;
`;

// HeaderBox
const HeaderBox = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
    border-bottom: 0.0625rem solid var(--border-secondary-color);

    & > div {
        display: flex;
        justify-content: space-between;
        padding: 0.625rem 0;
        width: var(--section-width);
    }
`;

const Logo = styled.h1`
    display: flex;
    align-items: center;
    font-weight: bold;
    font-size: 1.875rem;
    & > a{
        color: var(--primary-color);
    }
`;

const RightSection = styled.div`
    display: flex;
    align-items: center;
    gap: 0.9375rem;
`;

const LoginButton = styled.button`
    padding: 0.625rem 1.25rem;
    border-radius: 0.3125rem;
    border: 0.0625rem solid var(--border-color);
    transition: 0.3s ease-in-out;

    &:hover {
        border: 0.0625rem solid var(--font-secondary-color);
    }
`;

const Nav = styled.nav`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
    border-bottom: 0.0625rem solid #e0e0e0;

    & > div {
        display: flex;
        column-gap: 0.625rem;
        padding: 1.25rem 0;
        width: var(--section-width);
    }
`;

const StyledLink = styled(Link)`
    font-size: 1rem;
    text-decoration: none;
    padding: 0.3125rem;
    border-radius: 0.3125rem;
    width: 5rem;
    text-align: center;
    transition: all 0.3s ease-in-out;

    &.active {
        font-weight: bold;
        background-color: var(--secondary-color);
        color: #ffffff;
    }

    &:hover {
        font-weight: bold;
    }
`;

const NavContent = styled.div`
    position: absolute;
    top: 100%;
    display: flex;
    justify-content: center;
    width: 100%;
    height: auto;
    background-color: rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(0.3125rem);
    box-shadow: rgba(99, 99, 99, 0.2) 0rem 0.125rem 0.5rem 0rem;
    animation: showMenuContent 0.3s ease-out forwards;

    & > ul {
        display: flex;
        align-items: start;
        column-gap: 1.25rem;
        padding: 1.25rem 0;
        width: var(--section-width);
    }

    @keyframes showMenuContent {
        from {
            opacity: 0;
            height: 0;
        }
        to {
            opacity: 1;
            height: 100%;
        }
    }
`;

const SubLink = styled(Link)`
    &.active {
        color: var(--primary-color);
    }

    &:hover {
        transition: 0.3s ease-in-out;
        color: var(--primary-color);
    }
`;

const LanguageDropdown = styled.div`
    position: relative;
    display: inline-block;

    .more {
        background-color: #f8f8f8;
        border: 1px solid #ddd;
        border-radius: 4px;
        padding: 8px 12px;
        cursor: pointer;
        font-size: 14px;
        color: #333;
        transition: background-color 0.2s;

        &:hover {
            background-color: #eaeaea;
        }
    }

    &:hover > div {
        display: block;
    }
`;

const DropdownMenu = styled.div`
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    background-color: white;
    border: 1px solid #ddd;
    border-radius: 4px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    z-index: 1000;
    min-width: 120px;
    padding: 8px 0;
`;

const DropdownItem = styled.div`
    padding: 8px 12px;
    font-size: 14px;
    color: #333;
    cursor: pointer;
    transition: background-color 0.2s;

    &:hover {
        background-color: #f0f0f0;
    }
`;

export default Header;

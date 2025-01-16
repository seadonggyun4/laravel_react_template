import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link, usePage } from "@inertiajs/react";
import { NavMenu, NaveContentMenu } from "@/constants/routes";
import { useTranslation } from "react-i18next";
import initI18n from "@/utils/i18n";
import i18n from "i18next";

const Header: React.FC = () => {
    const [hoversed, setHoversed] = useState<string | null>(null);
    const [currentLocale, setCurrentLocale] = useState<string>('ko'); // 현재 언어 상태
    const { url } = usePage();
    const firstPath = `/${url.split("/")[1]}`;
    const { t } = useTranslation();

    // 언어 변경 함수
    const changeLanguage = async (locale: string) => {
        if (locale === currentLocale) return; // 동일 언어 선택 시 무시

        try {
            const module = "angelcar"; // 단일 모듈로 변경
            await initI18n(locale, module); // 필요한 모듈 로드
            setCurrentLocale(locale); // React 상태 업데이트
        } catch (error) {
            console.error("Error initializing i18n:", error);
        }
    };

    // 활성 메뉴 찾기
    const activeMenu: string | undefined = Object.keys(NaveContentMenu).find((parentKey) =>
        NaveContentMenu[parentKey]?.some((subItem) => subItem.link === url)
    );

    // 초기 설정
    useEffect(() => {
        setHoversed(firstPath);
        setCurrentLocale(i18n.language || "ko"); // i18n 초기 언어 동기화
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
                            <button type="button">
                                {currentLocale === 'ko' ? '한글' : 'English'} ▾
                            </button>
                            <DropdownMenu>
                                <DropdownItem onClick={() => changeLanguage('ko')}>한글</DropdownItem>
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

// Styled Components
const HeaderContainer = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: var(--header-zindex);
    background-color: #ffff;
`;

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

    button {
        padding: 0.625rem 0;
        width: 80px;
        transition: 0.3s;
        border-left: 2px solid var(--border-secondary-color);

        &:hover {
            color: var(--primary-color);
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
    border: 1px solid var(--border-color);
    border-radius: 5px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    z-index: 10;
    min-width: 120px;
    padding: 8px 0;
`;

const DropdownItem = styled.div`
    padding: 8px 12px;
    font-size: 14px;
    cursor: pointer;
    transition: background-color 0.2s;

    &:hover {
        background-color: var(--disabled-color);
        color: var(--primary-color);
    }
`;

export default Header;

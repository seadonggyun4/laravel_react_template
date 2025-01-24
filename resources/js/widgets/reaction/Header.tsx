import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link, usePage } from "@inertiajs/react";
import { useTranslation } from "react-i18next";
import { useLanguage } from "@/shared/provider/Language";
import { SUPPORT_LANGUAGE } from "@/shared/config";

interface HeaderProps {
    navTree: TreeNode[];
    headerItems: {
        logoLink?: string;
        options: {
            login: boolean;
            language: boolean;
        };
    };
}

interface TreeNode {
    id: number;
    site: string;
    url: string;
    title: string;
    description: string;
    view: string;
    keyword: string;
    remember_token: string | null;
    created_at: string | null;
    updated_at: string | null;
    group: string;
    lang: string;
    sort: number;
    parent_idx: number;
    children: TreeNode[];
}

const getFirstPath = (url: string, local:string): string => {
    const paths = url.split("/");
    const lang = local !== 'ko' ? local : null
    return !lang ? `/${paths[1]}` : (paths[2] ? `/${lang}/${paths[2]}`: `/${lang}`);
};

const Header: React.FC<HeaderProps> = ({ navTree, headerItems }) => {
    const [hoversed, setHoversed] = useState<string | null>(null);
    const { url } = usePage();
    const { currentLocale, changeLanguage } = useLanguage();
    const { t } = useTranslation();
    const { logoLink, options } = headerItems;
    const firstPath = getFirstPath(url, currentLocale.type);

    const menuLink = (group: string, url: string) => {
        return  group === "/" ? url : `/${group}`
    }
    const subMenuLink = (group: string, url: string): string => {
        return group === "/" ? url : `/${group}${url === '/' ? '' : url}`;
    };


    useEffect(() => {
        setHoversed(firstPath === '/' ? null : firstPath);
    }, [navTree]);

    return (
        <HeaderContainer>
            <HeaderBox>
                <div>
                    <Logo>
                        <Link href={'/'}>
                            {logoLink ? (
                                <img src={logoLink} alt="logo" />
                            ) : (
                                <p>angelcar</p>
                            )}
                        </Link>
                    </Logo>
                    <RightSection>
                        {options.login && (
                            <LoginButton type="button" className="login">
                                {t("login")}
                            </LoginButton>
                        )}
                        {options.language && (
                            <LanguageDropdown>
                                <button type="button" className="more">
                                    {currentLocale.title} ▾
                                </button>
                                <DropdownMenu>
                                    {SUPPORT_LANGUAGE.map((item) => (
                                        <DropdownItem
                                            key={item.type}
                                            onClick={() => changeLanguage(item)}
                                        >
                                            {item.title}
                                        </DropdownItem>
                                    ))}
                                </DropdownMenu>
                            </LanguageDropdown>
                        )}
                    </RightSection>
                </div>
            </HeaderBox>
            <div onMouseLeave={() => setHoversed(firstPath === '/' ? null : firstPath)}>
                <Nav>
                    <div>
                        {navTree && navTree.length > 0 && navTree.map((item) => {
                            const link = menuLink(item.group, item.url);
                            return (
                                <StyledLink
                                    key={item.id}
                                    href={link}
                                    onMouseOver={() => setHoversed(link)}
                                    className={
                                        link === firstPath ? "active" : ""
                                    }
                                >
                                    {item.title}
                                </StyledLink>
                            );
                        })}
                    </div>
                </Nav>
                {hoversed && navTree && navTree.length > 0 &&
                navTree.find((item) => (item.group === '/' ? item.group : `/${item.group}`) === hoversed)?.children.length ? (
                    <NavContent>
                        <ul>
                            {navTree
                                .find((item) => (item.group === '/' ? item.group : `/${item.group}`) === hoversed)
                                ?.children.map((child) => (
                                    <li key={child.id}>
                                        <SubLink
                                            href={subMenuLink(child.group, child.url)}
                                            className={
                                                url === subMenuLink(child.group, child.url)
                                                    ? "active"
                                                    : ""
                                            }
                                        >
                                            {child.title}
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

// Styled widgets
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
        display: block;
        width: 200px;
        color: var(--primary-color);

        & > img {
            width: 100%;
            object-fit: contain;
        }
    }
`;

const RightSection = styled.div`
    display: flex;
    align-items: center;
    gap: 0.9375rem;
`;

const LoginButton = styled.button`
    padding: 0.625rem 1.25rem;
    border-radius: var(--button-border-radius);
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
    padding: 0.3125rem 2rem;
    border-radius: var(--button-border-radius);
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
    border-radius: var(--button-border-radius);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    z-index: var(--show-content-zindex);
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

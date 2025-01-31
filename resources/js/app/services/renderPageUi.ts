import {SUPPORT_LANGUAGE} from "@/shared/config";
import initI18n from "@/shared/lib/i18n";

export const renderPageUi = async (
    name: string,
    site: string,
    pages: Record<string, () => Promise<{ default: React.ComponentType<any> }>>
) => {
    const pageName = name.split('/')[1];

    // 언어 세팅 로직
    const pathLocale = window.location.pathname.split('/')[1];
    const foundLocale =
        SUPPORT_LANGUAGE.find((lang) => lang.type === pathLocale) || SUPPORT_LANGUAGE[0];
    await initI18n(foundLocale.type, site);

    // 페이지 상대경로 정의
    const targetPath = `./sites/${site}/pages/${pageName}.tsx`;

    const page = await pages[targetPath]();
    return page.default;
};

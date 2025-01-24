import React, { createContext, useContext, useEffect, useState } from "react";
import { apiClient } from "@/shared/api";
import _ from "lodash";

interface MenuProviderProps {
    site: string;
    children: React.ReactNode;
}

interface MenuContextValue {
    menu: any[];
    loading: boolean;
    error: string | null;
}

const MenuContext = createContext<MenuContextValue | undefined>(undefined);

export const MenuProvider: React.FC<MenuProviderProps> = ({ site, children }) => {
    const [menu, setMenu] = useState<any[]>([]); // 메뉴 데이터를 저장할 상태
    const [loading, setLoading] = useState<boolean>(true); // 로딩 상태
    const [error, setError] = useState<string | null>(null); // 에러 상태

    const fetchMenu = async () => {
        try {
            setLoading(true); // 로딩 시작
            const { data } = await apiClient("/menu.json");
            // @ts-ignore
            let menu = data.menu;

            // 1. 특정 사이트의 메뉴만 필터링
            menu = menu.filter((item: any) => item.site.split(".")[0] === site);

            // 2. 메뉴를 정렬하고 children 배열 초기화
            const dataWithChildren = _.chain(menu)
                .sortBy("sort")
                .map((item: any) => ({ ...item, children: [] }))
                .value();

            // 3. parent_idx를 기준으로 children 관계 설정
            const menuMap = _.keyBy(dataWithChildren, "id"); // id 기준으로 객체 맵핑
            dataWithChildren.forEach((item: any) => {
                if (item.parent_idx !== 0 && menuMap[item.parent_idx]) {
                    menuMap[item.parent_idx].children.push(item);
                }
            });

            // 4. 최상위 요소만 필터링
            const topLevelMenu = dataWithChildren.filter((item: any) => item.parent_idx === 0);
            setMenu(topLevelMenu); // 상태 업데이트
        } catch (err: any) {
            setError(err.message || "An error occurred while fetching the menu.");
        } finally {
            setLoading(false); // 로딩 종료
        }
    };

    useEffect(() => {
        fetchMenu();
    }, [site]); // `site`가 변경되면 메뉴를 다시 가져옴

    return (
        <MenuContext.Provider value={{ menu, loading, error }}>
            {children}
        </MenuContext.Provider>
    );
};

export const useMenu = (): MenuContextValue => {
    const context = useContext(MenuContext);
    if (!context) {
        throw new Error("useMenu must be used within a MenuProvider");
    }
    return context;
};

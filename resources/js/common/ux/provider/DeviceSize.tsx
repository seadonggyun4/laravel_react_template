import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { MOBILE_WIDTH } from "@/common/constants";

interface DeviceSizeContextValue {
    isMobile: boolean;
}

const DeviceSizeContext = createContext<DeviceSizeContextValue | undefined>(undefined);

interface DeviceSizeProviderProps {
    children: ReactNode;
}

export const DeviceSizeProvider: React.FC<DeviceSizeProviderProps> = ({ children }) => {
    const [isMobile, setIsMobile] = useState(false);

    const updateWindowSize = () => {
        setIsMobile(window.innerWidth <= MOBILE_WIDTH);
    };

    useEffect(() => {
        updateWindowSize(); // 초기 width 설정
        window.addEventListener("resize", updateWindowSize); // resize 이벤트 리스너 등록
        return () => {
            window.removeEventListener("resize", updateWindowSize); // 이벤트 리스너 해제
        };
    }, []);

    return (
        <DeviceSizeContext.Provider value={{ isMobile }}>
            {children}
        </DeviceSizeContext.Provider>
    );
};

export const useDeviceSize = (): DeviceSizeContextValue => {
    const context = useContext(DeviceSizeContext);
    if (!context) {
        throw new Error("useDeviceSize must be used within a DeviceSizeProvider");
    }
    return context;
};

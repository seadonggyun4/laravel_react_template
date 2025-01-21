import React, { createContext, useContext, useState } from 'react';

interface ShowPopUpContextType {
    showCardDetail: string | null;
    toggleShowCardDetail: (state?: string | null) => void;
}

const ShowPopUpContext = createContext<ShowPopUpContextType | undefined>(undefined);

export const ShowPopUpProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [showCardDetail, setShowCardDetail] = useState<string | null>(null);

    const toggleShowCardDetail = (state?: string | null) => {
        if (state !== undefined) {
            setShowCardDetail(state);
        } else {
            setShowCardDetail((prev) => (prev ? null : "default"));
        }
    };

    return (
        <ShowPopUpContext.Provider value={{ showCardDetail, toggleShowCardDetail }}>
            {children}
        </ShowPopUpContext.Provider>
    );
};

export const useShowPopUp = (): ShowPopUpContextType => {
    const context = useContext(ShowPopUpContext);
    if (!context) {
        throw new Error('useShowPopUp must be used within a ShowPopUpProvider');
    }
    return context;
};

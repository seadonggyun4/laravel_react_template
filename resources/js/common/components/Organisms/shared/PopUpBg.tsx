import React, { useEffect } from "react";
import styled from "styled-components";

const PopUpBg = ({ show }: { show: boolean }) => {
    useEffect(() => {
        const preventScroll = (e: Event) => {
            e.preventDefault();
            e.stopPropagation();
        };

        if (show) {
            window.addEventListener("wheel", preventScroll, { passive: false });
            window.addEventListener("touchmove", preventScroll, { passive: false });
        } else {
            window.removeEventListener("wheel", preventScroll);
            window.removeEventListener("touchmove", preventScroll);
        }

        // Cleanup on unmount
        return () => {
            window.removeEventListener("wheel", preventScroll);
            window.removeEventListener("touchmove", preventScroll);
        };
    }, [show]);

    return show ? <PopUpBgStyle /> : null;
};

export default PopUpBg;

const PopUpBgStyle = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: var(--popup-bg-zindex);
    animation: ShowPopUpBg 0.3s ease-in-out forwards;

    @keyframes ShowPopUpBg {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
`;

import React, { useEffect } from "react";
import styled from "styled-components";

const PopUpBg = ({ show }: { show: boolean }) => {
    useEffect(() => {
        if (show) {
            document.body.style.overflow = "hidden"; // Disable scrolling
        } else {
            document.body.style.overflow = ""; // Re-enable scrolling
        }

        // Cleanup on unmount
        return () => {
            document.body.style.overflow = "";
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
    z-index: 999;
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

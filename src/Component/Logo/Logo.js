import React from 'react';
import './Logo.css';
import logo_img from "../../api/img/logo.png";
import useNavLogoSticky from "../../api/hooks/useSticky.js";

function Logo() {
    const beforeStyle = {
        width: 200,
        height: 170,
    };
    const afterStyle = {
        width: 85,
        height: 70,
    }
    const LogoItem = useNavLogoSticky(0, 10, beforeStyle, afterStyle);
    return (
        <>
            <div className="logo_bar">
                <span
                    ref={LogoItem.ref}
                    style={LogoItem.style}
                    className="logo_bar_wrap">
                    <img
                        className="logo_bar_img"
                        src={logo_img}
                    />
                </span>
            </div>
        </>
    )
}

export default React.memo(Logo);
import React from 'react';
import './Logo.css';
import logo_img from "../../api/img/logo.png";

function Logo() {
    return (
        <>
            <div className="logo_bar">
                <span className="logo_bar_wrap">
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
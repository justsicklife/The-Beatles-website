import "./Navigation.css";
import Logo from "../Logo/Logo.js";
import useMenuToggle from "../../api/hooks/useMenuToggle.js";
import React from "react";

const Navigation = () => {
    const { menu, button } = useMenuToggle("right");
    return (
        <div className="Navigation">
            <ul className="Navigation_wrap">
                <li><a href="#songs_bookmark" className="bookmark">Songs</a></li>
                <li><a href="#discography_bookmark" className="bookmark">Discography</a></li>
                <li><a href="#top" className="Logo_bookmark"><Logo /></a></li>
                <li><a href="#members_bookmark" className="bookmark">Members</a></li>
                <li><a href="#link_bookmark" className="bookmark">Link</a></li>
                <li
                    onClick={button.onClick}
                    className="menu_toggle"><button><i className="fas fa-bars"></i></button></li>
            </ul>
            <div ref={menu.ref}
                style={menu.style}
                className="Menu_list_wrap">
                <ul
                    className="Menu_list">
                    <li><a onClick={button.onClick} href="#songs_bookmark" className="menu_bookmark">Songs</a></li>
                    <li><a onClick={button.onClick} href="#discography_bookmark" className="menu_bookmark">Discography</a></li>
                    <li><a onClick={button.onClick} href="#members_bookmark" className="menu_bookmark">Members</a></li>
                    <li><a onClick={button.onClick} href="#link_bookmark" className="menu_bookmark">Link</a></li>
                </ul>
            </div>
        </div>
    )
}

export default React.memo(Navigation);
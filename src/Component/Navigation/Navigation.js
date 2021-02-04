import "./Navigation.css";
import Logo from "../Logo/Logo.js";
import useMenuToggle from "../../api/hooks/useMenuToggle.js";

const Navigation = () => {
    const { menu, button } = useMenuToggle("right");
    return (
        <div className="Navigation">
            <ul className="Navigation_wrap">
                <li><a href="#songs_bookmark" className="bookmark">Songs</a></li>
                <li><a href="#discography_bookmark" className="bookmark">Discography</a></li>
                <li><a href="#top" className="Logo_bookmark"><Logo /></a></li>
                <li><a href="#members_bookmark" className="bookmark">Members</a></li>
                <li
                    ref={button.ref}
                    className="menu_toggle"><button><i class="fas fa-bars"></i></button></li>
            </ul>
            <ul
                ref={menu.ref}
                style={menu.style}
                className="Menu">
                <li><a href="#songs_bookmark" className="menu_bookmark">Songs</a></li>
                <li><a href="#discography_bookmark" className="menu_bookmark">Discography</a></li>
                <li><a href="#members_bookmark" className="menu_bookmark">Members</a></li>
            </ul>
        </div>
    )
}

export default Navigation;
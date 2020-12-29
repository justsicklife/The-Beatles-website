import "./Navigation.css";
import Logo from "../Logo/Logo.js";

const Navigation = () => {
    return (
        <div className="Navigation">
            <ul className="Navigation_wrap">
                <li><a href="#Discography_page" className="bookmark">Discography</a></li>
                <li><a href="#top" className="Logo_bookmark"><Logo /></a></li>
                <li><a href="#Profile_page" className="bookmark">Introdce</a></li>
            </ul>
        </div>
    )
}

export default Navigation;
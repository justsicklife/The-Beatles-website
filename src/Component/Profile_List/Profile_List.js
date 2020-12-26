import "./Profile_List.css";
import Profile_ex from "../Profile_ex/Profile_ex.js";
import { AppContext } from "../../App.js";
import { useContext } from "react";

const Profile_List = () => {
    const { sliderObj } = useContext(AppContext);
    return (
        <div className="Profile_List">
            <div className="Profile_text_wrap">
                <span>
                    Introduce
                </span>
            </div>
            <div className="Profile_List_wrap">
                {sliderObj.map((profile) => {
                    return <Profile_ex profile={profile} />
                })}
            </div>
        </div>
    )
}

export default Profile_List;
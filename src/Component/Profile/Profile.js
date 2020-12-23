import "./Profile.css"
import React from "react";

const Profile = ({ profile, isActive }) => {
    return (
        <div className={isActive ? "select" : "no_select"}>
            <div className="profile_wrap">
                <div className="profile_text_wrap">
                    <p className="profile_name">{profile.name}</p>
                </div>
                <span className="profile_img_wrap">
                    <img src={profile.image} />
                </span>
            </div>
        </div>
    )
}

export default React.memo(Profile);
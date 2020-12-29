import "./Profile_List.css";
import Profile_ex from "../Profile_ex/Profile_ex.js";
import React from 'react';

const Profile_List = ({ sliderObj }) => {
    return (
        <article className="Profile_List">
            <div className="Profile_text_wrap">
                <span>
                    Introduce
                </span>
            </div>
            <div className="Profile_List_wrap">
                {sliderObj.map((profile, index) => {
                    return <Profile_ex
                        profile={profile}
                        index={index}
                        key={index}
                    />
                })}
            </div>
        </article>
    )
}

export default React.memo(Profile_List);
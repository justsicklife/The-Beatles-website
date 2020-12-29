import { useRef } from "react";
import "./Profile_ex.css";
import { useScrollFadeIn } from "../../api/hooks/useScrollFadeIn.js"

const Profile_ex = ({ profile, index }) => {
    const direction = (index % 2 !== 0 ? "left" : "right");
    const animatedItem = useScrollFadeIn(direction);

    return (
        <section
            ref={animatedItem.ref}
            style={animatedItem.style}
            className="Profile_wrap">
            <div className="Profile_image_wrap">
                <span className="Profile_image">
                    <img alt={`${profile.name}의 사진`} src={profile.image} />
                </span>
            </div>
            <div className="Profile_explain_wrap">
                <div className="Profile_name_wrap">
                    <h1 className="Profile_name">
                        {profile.name}
                    </h1>
                </div>
                <div className="Profile_birth_wrap">
                    <h2 className="Profile_birth">
                        {`${profile.birth.getFullYear()}년 ${profile.birth.getMonth() + 1}월 ${profile.birth.getDate()}일`}
                        {profile.dead ? `~ ${profile.dead.getFullYear()}년 ${profile.dead.getMonth() + 1}월 ${profile.dead.getDate()}일` : "..."}
                    </h2>
                </div>
                <div className="Profile_explain_text_wrap">
                    {profile.explain.map((explain) => {
                        return <p className="Profile_explain_text">{explain}</p>
                    })}
                </div>
            </div>
        </section>
    )
}

export default Profile_ex;
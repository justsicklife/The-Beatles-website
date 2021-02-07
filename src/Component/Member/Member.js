import { useRef } from "react";
import "./Member.css";
import { useScrollFadeIn } from "../../api/hooks/useScrollFadeIn.js"

const Member = ({ member, index }) => {
    const direction = (index % 2 !== 0 ? "left" : "right");
    const animatedItem = useScrollFadeIn(direction);

    return (
        <section
            ref={animatedItem.ref}
            style={animatedItem.style}
            className="Member_wrap">
            <div className="Member_image_wrap">
                <span className="Member_image">
                    <img alt={`${member.name}의 사진`} src={member.image} />
                </span>
            </div>
            <div className="Member_explain_wrap">
                <div className="Member_name_wrap">
                    <h1 className="Member_name">
                        {member.name}
                    </h1>
                </div>
                <div className="Member_birth_wrap">
                    <h2 className="Member_birth">
                        {`${member.birth.getFullYear()}년 ${member.birth.getMonth() + 1}월 ${member.birth.getDate()}일`}
                        {member.dead ? `~ ${member.dead.getFullYear()}년 ${member.dead.getMonth() + 1}월 ${member.dead.getDate()}일` : "..."}
                    </h2>
                </div>
                <div className="Member_roles">
                    {member.roles.map((role, index) => {
                        return <span key={`${role}${index}`} className="Member_role">{role}</span>
                    })}
                </div>
                <div className="Member_explain_text_wrap">
                    {member.explain.map((explain, index) => {
                        return <p key={`${explain}${index}`} className="Member_explain_text">{explain}</p>
                    })}
                </div>
            </div>
        </section>
    )
}

export default Member;
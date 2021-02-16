import "./Members.css";
import MemberBox from "../MemberBox/MemberBox.js";
import MemberDescription from "../MemberDescription/MemberDescription.js";
import React from 'react';

const Members = ({ memberArray, memberIndex, onClickMember }) => {
    return (
        <article className="Members container">
            <div className="Title">
                <h1>
                    Members
                </h1>
            </div>
            <div className="Members_wrap">
                <MemberBox
                    memberIndex={memberIndex}
                    memberArray={memberArray}
                    onClickMember={onClickMember}
                />
                <MemberDescription
                    memberIndex={memberIndex}
                    memberArray={memberArray}
                />
            </div>
        </article >
    )
}

export default React.memo(Members);
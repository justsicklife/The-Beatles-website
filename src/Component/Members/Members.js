import "./Members.css";
import Member from "../Member/Member.js";
import React from 'react';

const Members = ({ sliderObj }) => {
    return (
        <article className="Members container">
            <div className="Title">
                <h1>
                    Members
                </h1>
            </div>
            <div className="Members_wrap">
                {sliderObj.map((member, index) => {
                    return <Member
                        member={member}
                        index={index}
                        key={`${member}${index}`}
                    />
                })}
            </div>
        </article>
    )
}

export default React.memo(Members);
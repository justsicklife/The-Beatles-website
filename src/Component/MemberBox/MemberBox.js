import "./MemberBox.css"

const MemberBox = ({ memberArray, onClickMember, memberIndex }) => {
    return (
        <div className="members_box_wrap">
            {memberArray.map((member, index) => {
                return (
                    <div
                        key={`${member}${index}`}
                        onClick={() => onClickMember(index)}
                        className="member_box_wrap">
                        <div className="member_box_image">
                            <img src={member.image} />
                        </div>
                        <div className={memberIndex !== index ? "member_box_default" : "member_box_active"}></div>
                    </div>
                )
            })}
        </div>
    )
}

export default MemberBox;
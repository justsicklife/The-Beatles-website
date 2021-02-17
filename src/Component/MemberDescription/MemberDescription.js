import "./MemberDescription.css"

const MemberDescription = ({ memberArray, memberIndex }) => {
    return (
        <div className="member_description_wrap">
            <div className="member_description">
                <div className="member_description_name">
                    <h2>{memberArray[memberIndex].name}</h2>
                </div>
                <div className="member_description_roles">
                    {
                        memberArray[memberIndex].roles.map((role, index) => {
                            return <span key={`${index}${role}`} className="member_description_role">{role}</span>
                        })
                    }
                </div>
                <div className="member_description_introduce_wrap">
                    {
                        memberArray[memberIndex].explain.map((text, index) => {
                            return <p key={`${index}${text}`} className="member_description_introduce">{text}</p>
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default MemberDescription;
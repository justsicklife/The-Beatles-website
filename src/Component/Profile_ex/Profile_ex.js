import "./Profile_ex.css";

const Profile_ex = ({ profile }) => {
    return (
        <div className="Profile_wrap">
            <div className="Profile_image_wrap">
                <span className="Profile_image">
                    <img src={profile.image} />
                </span>
            </div>
            <div className="Profile_explain_wrap">
                <div className="Profile_name_wrap">
                    <h1 className="Profile_name">
                        {profile.name}
                    </h1>
                </div>
                <div className="Profile_birth_wrap">
                    <h3 className="Profile_birth">
                        {`${profile.birth.getFullYear()}년 ${profile.birth.getMonth() + 1}월 ${profile.birth.getDate()}일`}
                        {profile.dead ? `~ ${profile.dead.getFullYear()}년 ${profile.dead.getMonth() + 1}월 ${profile.dead.getDate()}일` : "..."}
                    </h3>
                </div>
                <div className="Profile_explain_text_wrap">
                    {profile.explain.map((explain) => {
                        return <p className="Profile_explain_text">{explain}</p>
                    })}
                </div>
            </div>
        </div>
    )
}

export default Profile_ex;
import "./Explanation.css";
import Title from "../Title/Title.js";
import Description from "../Description/Description.js"

const Explanation = ({ discography, albumIndex, musicIndex }) => {
    return (
        <div className="Modal_audio_Explanation_wrap">
            <Description />
            <Title
                discography={discography}
                albumIndex={albumIndex}
                musicIndex={musicIndex}
            />
        </div>
    )
}

export default Explanation;
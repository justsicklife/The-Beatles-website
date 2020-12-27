import "./Explanation.css";
import Title from "../Title/Title.js";
import Description from "../Description/Description.js"

const Explanation = ({ discography, albumIndex, musicIndex }) => {
    return (
        <div className="Modal_audio_Explanation_wrap">
            <Title
                discography={discography}
                albumIndex={albumIndex}
                musicIndex={musicIndex}
            />
            <Description />
        </div>
    )
}

export default Explanation;
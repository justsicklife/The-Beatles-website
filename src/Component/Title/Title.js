import "./Title.css";
import { AppContext } from "../../App.js";
import { useContext } from "react";

const Title = () => {
    const { discography, albumIndex, musicIndex } = useContext(AppContext);
    return (
        <div className="Modal_audio_Explanation_title_wrap">
            <div className="Modal_audio_Explanation_title">
                <span>{discography[albumIndex].track[musicIndex]}</span>
            </div>
        </div>
    )
}

export default Title;
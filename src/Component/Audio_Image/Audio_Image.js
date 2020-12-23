import "./Audio_Image.css";
import { AppContext } from "../../App.js";
import { useContext } from "react";

const Audio_Image = () => {
    const { discography, albumIndex } = useContext(AppContext);
    return (
        <div className="Modal_audio_image_wrap">
            <span>
                <img src={discography[albumIndex].image} />
            </span>
        </div>
    )
}

export default Audio_Image;
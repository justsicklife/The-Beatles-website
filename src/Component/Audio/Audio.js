import "./Audio.css"
import Audio_Image from '../Audio_Image/Audio_Image.js';
import Audio_Play from '../Audio_Play/Audio_Play.js';
import Explanation from '../Explanation/Explanation.js';

const Audio = () => {
    return (
        <div className="Modal_audio_wrap">
            <div className="Modal_audio_image_play_wrap">
                <Audio_Image />
                <Audio_Play />
            </div>
            <div className="Modal_audio_Explanation">
                <Explanation />
            </div>
        </div>
    )
}

export default Audio;
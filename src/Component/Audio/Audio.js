import "./Audio.css"
import Audio_Image from '../AudioImage/AudioImage.js';
import Audio_Play from '../Audio_Play/Audio_Play.js';
import Explanation from '../Explanation/Explanation.js';

const Audio = ({ discography, albumIndex, musicIndex }) => {
    return (
        <div className="Modal_audio_wrap">
            <div className="Modal_audio_image_play_wrap">
                <Audio_Image
                    discography={discography}
                    albumIndex={albumIndex}
                    musicIndex={musicIndex}
                />
                <Audio_Play />
            </div>
            <div className="Modal_audio_Explanation">
                <Explanation
                    discography={discography}
                    albumIndex={albumIndex}
                    musicIndex={musicIndex}
                />
            </div>
        </div>
    )
}

export default Audio;
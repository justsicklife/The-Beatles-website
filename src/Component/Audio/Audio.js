import "./Audio.css"

import Explanation from '../Explanation/Explanation.js';

const Audio = ({ discography, albumIndex, musicIndex }) => {
    return (
        <div className="Modal_audio_wrap">
            <div className="Modal_audio_image_play_wrap">
                <div className="Modal_audio_image_wrap">
                    <span>
                        <img src={discography[albumIndex].image} />
                    </span>
                </div>
                <div className="Modal_audio_play_wrap">
                    <audio controls>
                        {/* <source src={ } type="audio/mp3" /> */}
                    </audio>
                </div>
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
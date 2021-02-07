import "./Explanation.css";

const Explanation = ({ discography, albumIndex, musicIndex }) => {
    return (
        <div className="Modal_audio_Explanation_wrap">
            {musicIndex !== null &&
                <>
                    <div className="Modal_audio_Explanation_title_wrap">
                        <div className="Modal_audio_Explanation_title">
                            <span>{discography[albumIndex].track[musicIndex]}</span>
                        </div>
                    </div>
                    <div className="Modal_audio_Explanation_lyrics">
                        <span>가사</span>
                    </div>
                </>
            }
        </div>
    )
}

export default Explanation;
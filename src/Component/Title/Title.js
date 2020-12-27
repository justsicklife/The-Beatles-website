import "./Title.css";


const Title = ({ discography, albumIndex, musicIndex }) => {
    return (
        <div className="Modal_audio_Explanation_title_wrap">
            <div className="Modal_audio_Explanation_title">
                <span>{discography[albumIndex].track[musicIndex]}</span>
            </div>
        </div>
    )
}

export default Title;
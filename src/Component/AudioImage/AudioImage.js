import "./AudioImage.css";


const AudioImage = ({ discography, albumIndex }) => {
    return (
        <div className="Modal_audio_image_wrap">
            <span>
                <img src={discography[albumIndex].image} />
            </span>
        </div>
    )
}

export default AudioImage;
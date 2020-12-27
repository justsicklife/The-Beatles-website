import "./Audio_Image.css";


const Audio_Image = ({ discography, albumIndex }) => {
    return (
        <div className="Modal_audio_image_wrap">
            <span>
                <img src={discography[albumIndex].image} />
            </span>
        </div>
    )
}

export default Audio_Image;
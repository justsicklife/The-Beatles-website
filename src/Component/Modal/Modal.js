import "./Modal.css"
import Audio from "../Audio/Audio.js"
import Music_List from "../Music_List/Music_List.js";

const Modal = ({ musicClickToggle, modalClickToggle, albumIndex, musicIndex, discography }) => {
    return (
        <div className="Modal">
            <div className="Modal_wrap">
                <Audio
                    discography={discography}
                    albumIndex={albumIndex}
                    musicIndex={musicIndex}
                />
                <Music_List
                    discography={discography}
                    albumIndex={albumIndex}
                    musicIndex={musicIndex}
                    modalClickToggle={modalClickToggle}
                    musicClickToggle={musicClickToggle}
                />
                <div
                    onClick={modalClickToggle}
                    className="Modal_Exit_Button">
                    <i className="fas fa-external-link-square-alt"></i>
                </div>
            </div>
        </div>
    )
}

export default Modal;
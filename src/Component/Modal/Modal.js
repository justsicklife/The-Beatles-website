import "./Modal.css"
import Audio from "../Audio/Audio.js"
import Music_List from "../Music_List/Music_List.js";
import { AppContext } from "../../App.js"
import { useContext } from "react";

const Modal = () => {
    const { modalClickToggle } = useContext(AppContext);
    return (
        <div className="Modal">
            <div className="Modal_wrap">
                <Audio />
                <Music_List />
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
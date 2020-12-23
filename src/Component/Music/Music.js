import "./Music.css"
import { AppContext } from "../../App.js";
import React, { useContext } from "react";

const Music = ({ music, index }) => {
    const { musicClickToggle, musicIndex } = useContext(AppContext);
    return (
        <li
            className={index === musicIndex ? "active music" : "music"}
            onClick={() => { musicClickToggle(index) }}
        >
            {music}
        </li>
    )
}

export default React.memo(Music);
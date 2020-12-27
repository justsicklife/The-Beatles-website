import "./Music.css"
import React from "react";

const Music = ({ music, index, musicClickToggle, musicIndex }) => {
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
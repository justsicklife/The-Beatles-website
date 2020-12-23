import Music from '../Music/Music.js';
import { AppContext } from "../../App.js";
import { useContext } from 'react';
import "./Music_List.css";

const Music_List = () => {
    const { discography, albumIndex } = useContext(AppContext);
    return (
        <div className="Modal_Music_List">
            <ul className="Modal_Music_List_wrap">
                {discography[albumIndex].track.map((music, index) => {
                    return <Music music={music} key={index} index={index} />
                })}
            </ul>
        </div>
    )
}

export default Music_List;
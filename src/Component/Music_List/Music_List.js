import Music from '../Music/Music.js';
import "./Music_List.css";

const Music_List = ({ discography, albumIndex, musicIndex, musicClickToggle }) => {
    return (
        <div className="Modal_Music_List">
            <ul className="Modal_Music_List_wrap">
                {discography[albumIndex].track.map((music, index) => {
                    return <Music
                        musicClickToggle={musicClickToggle}
                        musicIndex={musicIndex}
                        music={music}
                        key={index}
                        index={index}
                    />
                })}
            </ul>
        </div>
    )
}

export default Music_List;
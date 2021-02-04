import Music from '../Music/Music.js';
import "./MusicList.css";

const MusicList = ({ discography, albumIndex, musicIndex, musicClickToggle }) => {
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

export default MusicList;
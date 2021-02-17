import "./Song.css";

const Song = ({ songs, discography }) => {
    return (
        <>
            {songs.map((song, index) => {
                return (
                    <div key={song.src} className="song_box">
                        <div className="song_box_link_wrap">
                            <img src={discography[index].image} />
                            <a target="_blank" href={song.src}><i className="fab fa-youtube"></i></a>
                        </div>
                        <div className="song_name_wrap">
                            <h2>{song.name}</h2>
                        </div>
                    </div>)
            })}
        </>
    )
}

export default Song;
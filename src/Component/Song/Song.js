import "./Song.css";

const Song = ({ songs }) => {
    return (
        <>
            {songs.map(song => {
                return (
                    <div key={song.src} className="song_box">
                        <iframe src={song.src}></iframe>
                        <div className="song_name_wrap">
                            <h2>{song.name}</h2>
                        </div>
                    </div>)
            })}
        </>
    )
}

export default Song;
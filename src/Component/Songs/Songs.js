import { useEffect, useRef, useState } from "react";
import "./Songs.css";

const Songs = ({ songs }) => {
    const songListRef = useRef();
    const songIndex = useRef(0);
    const songBoxWidth = useRef();
    const songsSliderRef = useRef();

    const songSlideButton = (direction) => {
        if (songIndex.current === 0 && direction === -1) return;
        if (songIndex.current === songs.length - 1 && direction === 1) return;
        songIndex.current += direction;
        songListRef.current.style.transform = `translateX(${songIndex.current * -songBoxWidth.current}px)`;
    }

    const SongList = () => {
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

    const windowResizeEvenet = () => {
        if (songBoxWidth.current == songsSliderRef.current.clientWidth) return
        songBoxWidth.current = songsSliderRef.current.clientWidth;
        songListRef.current.style.transform = `translateX(${songIndex.current * -songBoxWidth.current}px)`;
        for (let i = 0; i < songListRef.current.children.length; i++) {
            songListRef.current.children[i].style.maxWidth = `${songBoxWidth.current}px`;
        }
        songListRef.current.style.width = `${songs.length * songBoxWidth.current}px`
    }

    useEffect(() => {
        windowResizeEvenet();
        window.addEventListener('resize', windowResizeEvenet);
        window.addEventListener('reset', windowResizeEvenet);
        return () => {
            window.removeEventListener('resize', windowResizeEvenet);
            window.removeEventListener('reset', windowResizeEvenet);
        }
    }, []);

    return (
        <article className="container Songs">
            <div className="Title">
                <h1>Songs</h1>
            </div>
            <div className="songs_wrap">
                <div ref={songsSliderRef} className="songs_slider">
                    <div ref={songListRef} className="song_list">
                        <SongList />
                    </div>
                </div>
                <div className="songs_slider_button">
                    <button onClick={() => songSlideButton(-1)}><i className="fas fa-chevron-left"></i></button>
                    <button onClick={() => songSlideButton(1)}><i className="fas fa-chevron-right"></i></button>
                </div>
            </div>
        </article>
    )
}

export default Songs;
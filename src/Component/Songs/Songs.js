import { useEffect, useRef, useState } from "react";
import "./Songs.css";
import Song from "../Song/Song.js";

const Songs = ({ songs, discography, songIndex, songSlideButton, songListRef, songBoxRef }) => {

    return (
        <article className="container Songs">
            <div className="Title">
                <h1>Songs</h1>
            </div>
            <div className="songs_wrap">
                <div ref={songBoxRef} className="songs_slider">
                    <div ref={songListRef} className="song_list">
                        <Song songs={songs} discography={discography} />
                    </div>
                    {
                        songIndex !== 0 &&
                        <button className="songs_slider_button songs_slider_button__left" onClick={() => songSlideButton(-1)}><i className="fas fa-chevron-left"></i></button>
                    }
                    {
                        songIndex !== songs.length - 1 &&
                        <button className="songs_slider_button songs_slider_button__right" onClick={() => songSlideButton(1)}><i className="fas fa-chevron-right"></i></button>
                    }
                </div>
            </div>
        </article>
    )
}

export default Songs;
import "./Discography.css";
import Album from '../Album/Album.js';
import React from "react";

const Discography = ({ discography, modalClickToggle }) => {
    return (
        <article className="Discography">
            <div className="Discography_wrap">
                <div className="Discography_text_wrap">
                    <h1>Discography</h1>
                </div>
                <div className="Discography_Album_wrap">
                    {discography.map((album, index) =>
                        <Album
                            album={album}
                            modalClickToggle={modalClickToggle}
                            key={index}
                            albumIndex={index} />
                    )}
                </div>
            </div>
        </article >
    )
}

export default React.memo(Discography);
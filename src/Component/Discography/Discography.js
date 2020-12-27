import "./Discography.css";
import Album from '../Album/Album.js';
import React from "react";

const Discography = ({ discography, modalClickToggle }) => {
    return (
        <div className="Discography">
            <div className="Discography_wrap">
                <div className="Discography_text_wrap">
                    <p>Discography</p>
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
        </div >
    )
}

export default React.memo(Discography);
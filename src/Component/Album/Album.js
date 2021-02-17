import React from 'react';
import "./Album.css"
import { useScrollFadeIn } from "../../api/hooks/useScrollFadeIn.js";

const Album = ({ album, albumIndex, modalClickToggle }) => {

    const animatedItem = useScrollFadeIn();
    const albumDate = album.release;
    const year = albumDate.getFullYear();
    const month = albumDate.getMonth();
    const date = albumDate.getDate();

    return (
        <section
            onClick={() => { modalClickToggle(albumIndex) }}
            className="Album"
            ref={animatedItem.ref}
            style={animatedItem.style}
        >
            <figure className="Album_wrap">
                <span className="Album_img">
                    <img alt={`비틀즈의 앨범: ${album.name}`} src={album.image} />
                </span>
                <div className="Album_back_side_wrap">
                    <div className="Album_back_side_name">
                        <h2>이름</h2>
                        <h2>{album.name}</h2>
                    </div>
                    <div className="Album_back_side_release">
                        <h3>발매일</h3>
                        <h3>{`${year}년 ${month}월 ${date}일`}</h3>
                    </div>
                    <div className="Album_back_side_play_time">
                        <h4>
                            재생 시간
                        </h4>
                        <h4>{`${album.playTime[0]}분 ${album.playTime[1]}초`}</h4>
                    </div>
                </div>
                <div className="Album_name">
                    <figcaption>{album.name}</figcaption>
                </div>
            </figure>
        </section>
    )
}

export default React.memo(Album);
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
        <div
            onClick={() => { modalClickToggle(albumIndex) }}
            className="Album"
            ref={animatedItem.ref}
            style={animatedItem.style}
        >
            <div className="Album_wrap">
                <span className="Album_img">
                    <img src={album.image} />
                </span>
                <div className="Album_back_side_wrap">
                    <div className="Album_back_side_name">
                        <span>이름: {album.name}</span>
                    </div>
                    <div className="Album_back_side_release">
                        <span>발매일: {`${year}년 ${month}월 ${date}일`}</span>
                    </div>
                    <div className="Album_back_side_play_time">
                        <span>
                            재생 시간: {`${album.playTime[0]}분 ${album.playTime[1]}초`}
                        </span>
                    </div>
                </div>
                <div className="Album_name">
                    <span>{album.name}</span>
                </div>
            </div>
            {/* <div className="Album_name">
                <span>
                    {album.name.length >= 20 ? `${album.name.substring(0, 20)}...` : album.name}
                </span>
                    </div>
                    <div className="Album_release">
                        <span>
                            {`${album.release.getFullYear()}년`}
                            {` ${album.release.getMonth() === 0 ? 12 : album.release.getMonth()}월`}
                            {` ${album.release.getDate()}일`}
                        </span>
                    </div> */}
        </div>
    )
}

export default React.memo(Album);
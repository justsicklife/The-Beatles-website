import "./Album.css"
import { AppContext } from "../../App.js";
import { useContext } from "react";

const Album = ({ album, albumIndex }) => {
    const { modalClickToggle } = useContext(AppContext);
    return (
        <div
            onClick={() => { modalClickToggle(albumIndex) }}
            className="Album">
            <div
                className="Album_wrap">
                <span className="Album_img">
                    <img src={album.image} />
                </span>
            </div>
            <div className="Album_name">
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
            </div>
        </div>
    )
}

export default Album;
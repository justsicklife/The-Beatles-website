import React, { useContext } from 'react';
import "./Slider.css"
import Profile from "../Profile/Profile.js";
import { AppContext } from "../../App.js";

const Slider = () => {
    const { arrowLeftClick, arrowRightClick, sliderObj, slideIndex } = useContext(AppContext);
    return (
        // <div className="slider">
        //     <div className="slider_wrap">
        //         <div className="slider_row">
        //             {sliderObj.map((profile, index) => {
        //                 return slideIndex === index ?
        //                     <Profile profile={profile} key={index} isActive={true} /> :
        //                     <Profile profile={profile} key={index} isActive={false} />
        //             })}
        //         </div>
        //     </div>
        //     <div
        //         onClick={arrowLeftClick}
        //         className="arrow-left">
        //         <i className="fas fa-arrow-circle-left"></i>
        //     </div>
        //     <div
        //         onClick={arrowRightClick}
        //         className="arrow-right">
        //         <i className="fas fa-arrow-circle-right"></i>
        //     </div>
        // </div>
        null
    )
}

export default Slider;
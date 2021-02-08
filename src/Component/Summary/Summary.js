import React from "react";
import "./Summary.css";
const Summary = ({ summaryObj }) => {
    return (
        <article className="Summary container">
            <figure className="Summary_figure">
                <span className="Summary_figure_img">
                    <img src={summaryObj.image} />
                </span>
                <figcaption>{summaryObj.description}</figcaption>
            </figure>
        </article>
    )
}

export default React.memo(Summary);
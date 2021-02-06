const Link = ({ link }) => {
    return (
        <div className="Link_box_wrap">
            <div className={`Link_box ${link.name}`}>
                <span><i className={link.icon}></i></span>
            </div>
            <div className="Link_box_hover">
                <a href={link.href} className="Link_box_button">
                    <i className="far fa-eye"></i>
                </a>
            </div>
        </div>
    )
}

export default Link;
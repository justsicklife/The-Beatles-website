import "./Link.css";

const Link = () => {
    return (
        <article className="Link container">
            <div className="Link_wrap">
                <div className="Title">
                    <h1>Link</h1>
                </div>
                <div className="Link_box_list_wrap">
                    <div className="Link_box_list">
                        <div className="Link_box_wrap">
                            <div className="Link_box twitter">
                                <span><i className="fab fa-twitter"></i></span>
                            </div>
                            <div className="Link_box_hover">
                                <a href="https://twitter.com/thebeatles" className="Link_box_button">
                                    <i className="far fa-eye"></i>
                                </a>
                            </div>
                        </div>
                        <div className="Link_box_wrap">
                            <div className="Link_box instagram">
                                <span><i class="fab fa-instagram"></i></span>
                            </div>
                            <div className="Link_box_hover">
                                <a href="https://www.instagram.com/thebeatles/" className="Link_box_button">
                                    <i className="far fa-eye"></i>
                                </a >
                            </div>
                        </div>
                        <div className="Link_box_wrap">
                            <div className="Link_box facebook">
                                <span><i class="fab fa-facebook-f"></i></span>
                            </div>
                            <div className="Link_box_hover">
                                <a href="https://facebook.com/thebeatles/" className="Link_box_button">
                                    <i className="far fa-eye"></i>
                                </a>
                            </div>
                        </div>
                        <div className="Link_box_wrap">
                            <div className="Link_box youtube">
                                <span><i class="fab fa-youtube"></i></span>
                            </div>
                            <div className="Link_box_hover">
                                <a href="https://youtube.com/user/thebeatles" className="Link_box_button">
                                    <i className="far fa-eye"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default Link;
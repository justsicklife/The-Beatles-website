import "./LinkList.css";
import Link from "../Link/Link.js";

const LinkList = ({ linkList }) => {
    return (
        <article className="Link container">
            <div className="Link_wrap">
                <div className="Title">
                    <h1>Link</h1>
                </div>
                <div className="Link_box_list_wrap">
                    <div className="Link_box_list">
                        {linkList.map(link => {
                            return (
                                <Link key={link.href} link={link} />
                            )
                        })}
                    </div>
                </div>
            </div>
        </article>
    )
}

export default LinkList;
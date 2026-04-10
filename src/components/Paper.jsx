import { FaStar } from "react-icons/fa"

export const Paper = ({ authors, title, conference, picUrl, award = "", pdfUrl }) => {
    return (
        <div className="paper">
            <div className="paper-thumb-container">
                <img className="paper-thumb" src={picUrl} alt={title} />
            </div>
            <div className="paper-info">
                <h4><a href={pdfUrl}>{title}</a></h4>
                <p className="paper-authors">{authors}</p>
                {conference && <p className="paper-venue">{conference}</p>}
                {award && (
                    <div className="paper-award">
                        <FaStar /> {award}
                    </div>
                )}
            </div>
        </div>
    )
}

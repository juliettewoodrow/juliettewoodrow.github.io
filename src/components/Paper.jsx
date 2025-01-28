import { FaStar } from "react-icons/fa";


export const Paper = ({authors, title, conference, picUrl, award="", pdfUrl}) => {
    const style = {
        marginBottom: "4px",
        marginTop: "2px"
    }

    const badgeStyle = {
        position: 'absolute',
        top: '0',
        right: '0',
        backgroundColor: 'gold',
        padding: '2px 5px',
        borderRadius: '0 0 0 5px', // Rounded corner on the bottom-left
        fontSize: '12px',
        fontWeight: 'bold',
    };

    return (
        <div className="paper">
            {award && <div style={badgeStyle}><FaStar/> {award}</div>}
            <div className="paper-contianer">
                <img className="paper-pic" src={picUrl} alt={title}/>
            </div>
            <div className="paper-info">
                <h4 style={style}><a href={pdfUrl}>{title}</a></h4>
                <p style={style}>{authors}</p>
                <p style={style}><i>{conference}</i></p>
            </div>


        </div>
    )
}
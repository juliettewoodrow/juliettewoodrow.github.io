import { Face } from "./Face"
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"


export const Header = () => {
    const headerStyle = {marginBottom: "2px", marginTop: "2px"}

    return (
        <div style={{display: "flex", flexWrap: "wrap"}}>
            <Face imageUrl="juliette.JPG" />
            <div style={{display: "flex", flexDirection: "column", justifyContent: "center", textAlign: "left"}}>
                <h1 style={{marginBottom: "5px"}}>Juliette Woodrow</h1>
                <h2 style={headerStyle}>Ph.D Student at Stanford University</h2>
                <h3 style={headerStyle}><span>jwoodrow</span><span>@stanford.edu</span></h3>
                <div style={{display: "flex", flexDirection: "row"}}>
                    <a href="https://github.com/juliettewoodrow" aria-label="Github Link" ><FaGithub style={{marginRight: "5px", fontSize:"xx-large", color: "green"}}/></a>
                    <a href="https://www.linkedin.com/in/juliettewoodrow" aria-label="LinkedIn Link"><FaLinkedin style={{marginRight: "5px", fontSize:"xx-large", color: "blue"}}/></a>                </div>
            </div>
        </div>
    )

}
import { Face } from "./Face"
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"
import { useState } from "react";


export const Header = ({setIsDungeon}) => {
    const [isVisible, setIsVisible] = useState(true); // Tracks visibility

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };
    const headerStyle = {marginBottom: "2px", marginTop: "2px"}

    const containerStyle = { display: "flex", flexDirection: "column", justifyContent: "center", textAlign: "left" }


    const textStyle = {
        transition: "opacity 0.5s ease",
        opacity: isVisible ? 1 : 0,
    };

    const imageStyle = {
        transition: "opacity 0.5s ease",
        opacity: !isVisible ? 1 : 0,
        position: 'absolute',
    };

    return (
        <div style={{ display: "flex", flexWrap: "wrap", position: "relative" }}>
            <Face imageUrl="juliette.JPG" toggleIsVisible={toggleVisibility}/>
            <div style={containerStyle}>
                <div style={textStyle}>
                    <h1 style={{marginBottom: "5px"}}>Juliette Woodrow</h1>
                    <h2 style={headerStyle}>Ph.D Student at Stanford University</h2>
                    <h3 style={headerStyle}><span>jwoodrow</span><span>@stanford.edu</span></h3>
                    <div style={{display: "flex", flexDirection: "row"}}>
                        <a href="https://github.com/juliettewoodrow" aria-label="Github Link" ><FaGithub style={{marginRight: "5px", fontSize:"xx-large", color: "green"}}/></a>
                        <a href="https://www.linkedin.com/in/juliettewoodrow" aria-label="LinkedIn Link"><FaLinkedin style={{marginRight: "5px", fontSize:"xx-large", color: "blue"}}/></a>                </div>
                </div>
                <div style={imageStyle} onClick={setIsDungeon}>
                <img src='trapdoor.jpg' alt="Trapdoor" style={{width: '100px'}}/>
            </div>
            </div>
  
        </div>
    )

}
import { Face } from "./Face"
import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter } from "react-icons/fa"
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
            <Face imageUrl="juliette.jpg" toggleIsVisible={toggleVisibility}/>
            <div style={containerStyle}>
                <div style={textStyle}>
                    <h1 style={{marginBottom: "5px"}}>Juliette Woodrow</h1>
                    <h2 style={headerStyle}>Ph.D Candidate at Stanford University</h2>
                    <h3 style={headerStyle}><span>jwoodrow</span><span>@stanford.edu</span></h3>
                    <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "10px" }}>
                        {/* X (Twitter) Logo in a Black Rounded Square */}
                        <a href="https://twitter.com/juliettewoodrow" aria-label="Twitter Link" style={{ textDecoration: "none" }}>
                            <div style={{ 
                                backgroundColor: "black", 
                                color: "white", 
                                width: "30px", 
                                height: "30px", 
                                display: "flex", 
                                alignItems: "center", 
                                justifyContent: "center", 
                                borderRadius: "3px" ,
                                marginBottom: "5px",
                                marginRight: "7px"
                            }}>
                                <span style={{ fontSize: "24px", fontWeight: "bold" }}>𝕏</span>
                            </div>
                        </a>
                        <a href="https://github.com/juliettewoodrow" aria-label="Github Link" ><FaGithub style={{marginRight: "5px", fontSize:"xx-large", color: "green"}}/></a>
                        <a href="https://www.linkedin.com/in/juliette-woodrow" aria-label="LinkedIn Link"><FaLinkedin style={{marginRight: "5px", fontSize:"xx-large", color: "blue"}}/></a>                
                        {/* Bluesky Logo (From image) */}
                        <a href="https://bsky.app/profile/juliettewoodrow.bsky.social" aria-label="Bluesky Link">
                            <img src="blueskylogo_1.png" alt="Bluesky Logo" style={{ width: "32px", height: "32px", borderRadius: "3px" }} />
                        </a>
                    </div>
                    </div>
                <div style={imageStyle} onClick={setIsDungeon}>
                <img src='trapdoor.jpg' alt="Trapdoor" style={{width: '20px'}}/>
            </div>
            </div>
  
        </div>
    )

}
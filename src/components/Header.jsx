import { Face } from "./Face"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { useState } from "react"

export const Header = ({ setIsDungeon }) => {
    const [isVisible, setIsVisible] = useState(true)

    const toggleVisibility = () => {
        setIsVisible(!isVisible)
    }

    const textStyle = {
        transition: "opacity 0.5s ease",
        opacity: isVisible ? 1 : 0,
    }

    const trapdoorStyle = {
        transition: "opacity 0.5s ease",
        opacity: !isVisible ? 1 : 0,
        position: "absolute",
        cursor: "pointer",
    }

    return (
        <div className="header">
            <Face imageUrl="juliette.jpg" toggleIsVisible={toggleVisibility} />
            <div className="header-info">
                <div style={textStyle}>
                    <h1 className="header-name">Juliette Woodrow</h1>
                    <p className="header-title">PhD Candidate in Computer Science, Stanford University</p>
                    <p className="header-tagline">Building interpretable and useful AI systems for education</p>
                    <p className="header-email">jwoodrow@stanford.edu</p>
                    <div className="social-links">
                        <a href="https://twitter.com/juliettewoodrow" aria-label="X (Twitter)">
                            <span className="social-icon" style={{ fontWeight: "bold", fontSize: "1.1rem" }}>𝕏</span>
                        </a>
                        <a href="https://github.com/juliettewoodrow" aria-label="GitHub">
                            <FaGithub className="social-icon" />
                        </a>
                        <a href="https://www.linkedin.com/in/juliette-woodrow" aria-label="LinkedIn">
                            <FaLinkedin className="social-icon" />
                        </a>
                        <a href="https://bsky.app/profile/juliettewoodrow.bsky.social" aria-label="Bluesky">
                            <img src="blueskylogo_1.png" alt="Bluesky" style={{ width: "20px", height: "20px", opacity: 0.6 }} />
                        </a>
                        <a href="https://scholar.google.com/citations?user=NsCBeoEAAAAJ&hl=en" aria-label="Google Scholar" className="scholar-icon">
                            Scholar
                        </a>
                    </div>
                </div>
                <div style={trapdoorStyle} onClick={setIsDungeon}>
                    <img src="trapdoor.jpg" alt="Trapdoor" style={{ width: "20px" }} />
                </div>
            </div>
        </div>
    )
}

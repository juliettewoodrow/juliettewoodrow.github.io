import { FaGithub, FaLinkedin } from "react-icons/fa"

export const Footer = () => {
    return (
        <footer className="footer">
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
                    <img src="blueskylogo_1.png" alt="Bluesky" style={{ width: "18px", height: "18px", opacity: 0.5 }} />
                </a>
            </div>
            <p>jwoodrow@stanford.edu</p>
        </footer>
    )
}

import { Face } from "./Face"
import { Email } from "./Email"
import { useState } from "react"

export const Header = ({ setIsDungeon }) => {
    const [showTrapdoor, setShowTrapdoor] = useState(false)

    const trapdoorStyle = {
        transition: "opacity 0.5s ease",
        opacity: showTrapdoor ? 1 : 0,
        pointerEvents: showTrapdoor ? "auto" : "none",
    }

    return (
        <header className="nb-header">
            <div className="nb-photo">
                <Face imageUrl="juliette_web.jpg" toggleIsVisible={() => setShowTrapdoor(!showTrapdoor)} />
                <button type="button" className="nb-trapdoor" style={trapdoorStyle} onClick={setIsDungeon} aria-label="Open the trapdoor" tabIndex={showTrapdoor ? 0 : -1}>
                    <img src="trapdoor.jpg" alt="" />
                </button>
            </div>
            <div className="nb-header-info">
                <h1 className="nb-name">Juliette Woodrow</h1>
                <p className="nb-title">
                    PhD Candidate in Computer Science, Stanford AI Lab · advised by{" "}
                    <a href="https://stanford.edu/~cpiech/bio/index.html">Chris Piech</a>
                </p>
                <p className="nb-primary-links">
                    <a href="/juliette_woodrow_cv.pdf">CV</a>
                    <a href="https://scholar.google.com/citations?user=NsCBeoEAAAAJ&hl=en">Google Scholar</a>
                    <span className="nb-email">
                        <Email className="nb-mono" />
                    </span>
                </p>
                <p className="nb-links">
                    <a href="https://github.com/juliettewoodrow">GitHub</a>
                    {" · "}<a href="https://twitter.com/juliettewoodrow">X</a>
                    {" · "}<a href="https://www.linkedin.com/in/juliette-woodrow">LinkedIn</a>
                    {" · "}<a href="https://bsky.app/profile/juliettewoodrow.bsky.social">Bluesky</a>
                </p>
                <p className="nb-bio">
                    I am a fifth-year PhD student developing AI systems for education, with the goal of improving teaching and learning at scale. My research focuses on AI-generated feedback, uncertainty-aware assessment, and interpretable models of student understanding, combining machine learning, human-centered evaluation, and classroom deployment.
                </p>
                <p className="nb-bio nb-bio-secondary">
                    More broadly, I am interested in how advances in AI can support teaching without replacing the human relationships at the center of education.
                </p>
            </div>
        </header>
    )
}

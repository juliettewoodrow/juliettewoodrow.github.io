export const Teaching = () => {
    return (
        <div className="section">
            <h2 className="section-title">Teaching</h2>
            <div className="teaching-grid">
                <a href="https://web.stanford.edu/class/archive/cs/cs109/cs109.1264/" className="teaching-card">
                    <h3>CS109</h3>
                    <p className="teaching-card-name">Probability for Computer Scientists</p>
                    <p className="teaching-card-role">Lecturer, Winter 2026</p>
                </a>
                <a href="https://web.stanford.edu/class/cs106a-8/" className="teaching-card">
                    <h3>CS106A</h3>
                    <p className="teaching-card-name">Programming Methodologies</p>
                    <p className="teaching-card-role">Lecturer, Summer 2021</p>
                </a>
                <a href="https://codeinplace.stanford.edu/" className="teaching-card">
                    <h3>Code in Place</h3>
                    <p className="teaching-card-name">Global Intro to CS</p>
                    <p className="teaching-card-role">Core Team, 2020 – Present</p>
                </a>
            </div>
        </div>
    )
}

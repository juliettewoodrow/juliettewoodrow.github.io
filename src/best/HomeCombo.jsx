import "../combo.css"
import { Header } from "../components/Header"
import { Cell, Notebook, SideNav } from "../components/Notebook"

const BellCurves = () => (
    <svg className="cb-curves" width="260" height="150" viewBox="0 0 300 180" role="img" aria-label="Two overlapping bell curves, one shifted right">
        <line x1="10" y1="160" x2="290" y2="160" stroke="#1c1c1c" strokeWidth="1" />
        <path d="M10 160 C 70 160, 80 40, 120 40 S 170 160, 230 160" fill="#ede9fe" stroke="#7c3aed" strokeWidth="2" />
        <path d="M60 160 C 120 160, 130 20, 170 20 S 220 160, 290 160" fill="none" stroke="#db2777" strokeWidth="2" strokeDasharray="5 4" />
        <text x="104" y="32" fontFamily="IBM Plex Mono, monospace" fontSize="11" fill="#7c3aed">before</text>
        <text x="176" y="14" fontFamily="IBM Plex Mono, monospace" fontSize="11" fill="#db2777">with AI?</text>
    </svg>
)

const QuestionCell = () => (
    <Cell id="question" n={0} code="P(learning | AI) > P(learning) ?">
        <div className="cb-question">
            <BellCurves />
            <p className="cb-question-text">
                Still estimating. That question drives my research and teaching.
            </p>
        </div>
    </Cell>
)

const HomeCombo = ({ setIsDungeon }) => (
    <div className="home cb-page">
        <div className="nb-layout">
            <div className="subhome">
                <Header setIsDungeon={setIsDungeon} />
                <Notebook intro={<QuestionCell />} reviewFirst />
            </div>
            <SideNav />
        </div>
    </div>
)

export default HomeCombo

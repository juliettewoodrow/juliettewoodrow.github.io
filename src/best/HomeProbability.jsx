import "../probability.css"
import { Header } from "../components/Header"
import { Email } from "../components/Email"
import { useState } from "react"
import { news, papers, courses, awards } from "../components/Notebook"

const LAYOUTS = [
    { id: "a", label: "A · Currently + news column" },
    { id: "b", label: "B · Observations log" },
    { id: "c", label: "C · Now line + news in sidebar" },
    { id: "d", label: "D · Now / Recently cards" },
]

const initialLayout = () => {
    const v = new URLSearchParams(window.location.search).get("news")
    return LAYOUTS.some((l) => l.id === v) ? v : "d"
}

// Under-review papers first on this version.
const orderedPapers = [...papers].sort((x, y) => {
    const rx = x.meta.endsWith("Under review") ? 0 : 1
    const ry = y.meta.endsWith("Under review") ? 0 : 1
    return rx - ry
})

const current = news[0]
const recent = news.slice(1)

const NewsRows = ({ items, className = "" }) => (
    <div className={"pb-news-list " + className}>
        {items.map((item) => (
            <div className="pb-news-row" key={item.when}>
                <span className="pb-mono pb-news-when">{item.when}</span>
                <span>{item.text}</span>
            </div>
        ))}
    </div>
)

const CurrentlyBody = () => (
    <>
        <h3 className="pb-now-title">
            Co-teaching <a href="https://codeinplace.stanford.edu/cipx/intro">Code in Place X</a> with{" "}
            <a href="https://sierrawang.github.io/">Sierra Wang</a>
        </h3>
        <p className="pb-now-text">
            A free, 6-week, online course from Stanford that reimagines how we should teach and learn programming in the age of modern AI. The course experiments with how we can validate what people actually know when AI is always within reach.
        </p>
    </>
)

const NewsA = () => (
    <section className="pb-news-a" id="news">
        <div className="pb-news pb-now-card">
            <p className="pb-kicker">currently</p>
            <CurrentlyBody />
        </div>
        <div className="pb-news-side">
            <p className="pb-kicker pb-kicker-gray">recent news</p>
            <NewsRows items={recent} className="pb-news-stacked" />
        </div>
    </section>
)

const NewsB = () => (
    <section className="pb-news" id="news">
        <p className="pb-kicker">observations, most recent first</p>
        <div className="pb-obs">
            {news.map((item, i) => (
                <div className="pb-obs-row" key={item.when}>
                    <span className="pb-mono pb-obs-var">x<sub>{news.length - i}</sub></span>
                    <span className="pb-mono pb-news-when">{item.when}</span>
                    <span>{item.text}</span>
                </div>
            ))}
        </div>
        <p className="pb-mono pb-obs-foot">posterior: still updating</p>
    </section>
)

const NowLine = () => (
    <p className="pb-nowline" id="news">
        <span className="pb-mono pb-nowline-label">now</span>
        <span>
            Co-teaching <a href="https://codeinplace.stanford.edu/cipx/intro">Code in Place X</a> with{" "}
            <a href="https://sierrawang.github.io/">Sierra Wang</a>, a global course on learning to program alongside AI.
        </span>
    </p>
)

const NewsD = () => (
    <section className="pb-news-d" id="news">
        <div className="pb-news pb-now-card">
            <p className="pb-kicker">now</p>
            <CurrentlyBody />
        </div>
        <div className="pb-recent-card">
            <p className="pb-kicker pb-kicker-gray">recently</p>
            <NewsRows items={recent} className="pb-news-stacked" />
        </div>
    </section>
)

const LayoutSwitcher = ({ layout, setLayout }) => (
    <div className="pb-switcher" role="group" aria-label="News layout (local preview only)">
        <span className="pb-mono">news layout:</span>
        {LAYOUTS.map((l) => (
            <button
                key={l.id}
                type="button"
                aria-pressed={layout === l.id}
                className={layout === l.id ? "pb-switch pb-switch-on" : "pb-switch"}
                onClick={() => setLayout(l.id)}
                title={l.label}
            >
                {l.id.toUpperCase()}
            </button>
        ))}
        <span className="pb-switch-label">{LAYOUTS.find((l) => l.id === layout).label}</span>
    </div>
)

const splitMeta = (meta) => {
    const i = meta.lastIndexOf(". ")
    return { authors: meta.slice(0, i), venue: meta.slice(i + 2) }
}

const BellCurves = () => (
    <svg className="pb-curves" width="300" height="180" viewBox="0 0 300 180" role="img" aria-label="Two overlapping bell curves, one shifted right">
        <line x1="10" y1="160" x2="290" y2="160" stroke="#1c1c1c" strokeWidth="1" />
        <path d="M10 160 C 70 160, 80 40, 120 40 S 170 160, 230 160" fill="#e8ecfb" stroke="#2b4acb" strokeWidth="2" />
        <path d="M60 160 C 120 160, 130 20, 170 20 S 220 160, 290 160" fill="none" stroke="#c2185b" strokeWidth="2" strokeDasharray="5 4" />
        <text x="104" y="32" fontFamily="IBM Plex Mono, monospace" fontSize="11" fill="#2b4acb">before</text>
        <text x="176" y="14" fontFamily="IBM Plex Mono, monospace" fontSize="11" fill="#c2185b">with AI?</text>
    </svg>
)

const HomeProbability = ({ setIsDungeon }) => {
    const [layout, setLayout] = useState(initialLayout)

    return (
    <div className="home pb-page">
        <div className="pb-wrap">
            <Header setIsDungeon={setIsDungeon} showBio={false} />

            <section className="pb-hero">
                <div className="pb-hero-text">
                    <p className="pb-equation">
                        P( learning | AI ) <span className="pb-gt">&gt;</span> P( learning )<span className="pb-q">?</span>
                    </p>
                    <p className="pb-lead">
                        I am a fifth-year PhD student developing AI systems for education, with the goal of improving teaching and learning at scale. My research focuses on AI-generated feedback, uncertainty-aware assessment, and interpretable models of student understanding, combining machine learning, human-centered evaluation, and classroom deployment.
                    </p>
                    <p className="pb-lead pb-lead-secondary">
                        More broadly, I am interested in how advances in AI can support teaching without replacing the human relationships at the center of education.
                    </p>
                </div>
                <BellCurves />
            </section>

            {layout === "a" && <NewsA />}
            {layout === "b" && <NewsB />}
            {layout === "c" && <NowLine />}
            {layout === "d" && <NewsD />}

            <section className="pb-teaching-section" id="teaching">
                <h2 className="pb-h2">Teaching</h2>
                <div className="pb-course-grid">
                    {courses.map((c) => (
                        <div className="pb-course" key={c.name}>
                            <p className="pb-mono pb-course-when">{c.when}</p>
                            <p className="pb-course-name"><a href={c.url}>{c.name}</a></p>
                            {c.subtitle && <p className="pb-course-subtitle">{c.subtitle}</p>}
                            <p className="pb-course-desc">{c.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            <div className="pb-columns">
                <section id="research">
                    <h2 className="pb-h2">Selected papers</h2>
                    <div className="pb-papers">
                        {orderedPapers.map((p) => {
                            const { authors, venue } = splitMeta(p.meta)
                            return (
                                <div key={p.title}>
                                    <p className="pb-mono pb-venue">{venue}</p>
                                    {p.url ? (
                                        <a className="pb-paper-title" href={p.url}>{p.title}</a>
                                    ) : (
                                        <span className="pb-paper-title pb-paper-title-plain">{p.title}</span>
                                    )}
                                    <p className="pb-paper-result">{p.result}</p>
                                    <p className="pb-authors">{authors}</p>
                                </div>
                            )
                        })}
                    </div>
                    <div className="pb-papers-footer">
                        <a className="pb-mono" href="https://scholar.google.com/citations?user=NsCBeoEAAAAJ&hl=en">... more on Google Scholar</a>
                        <span className="pb-equal">* denotes equal contribution</span>
                    </div>
                </section>

                <aside>
                    {layout === "c" && (
                        <section className="pb-aside-news">
                            <h2 className="pb-h2">News</h2>
                            <NewsRows items={news} className="pb-news-stacked" />
                        </section>
                    )}
                    <section id="awards">
                        <h2 className="pb-h2">Awards</h2>
                        <div className="pb-awards">
                            {awards.map((a) => (
                                <div key={a.name}>
                                    {a.url ? <a href={a.url}>{a.name}</a> : a.name}
                                    {a.year && <span className="pb-small">, {a.year}</span>}
                                </div>
                            ))}
                        </div>
                    </section>
                </aside>
            </div>

            <footer className="pb-footer">
                <Email className="pb-mono" />
                <span> · <a href="/juliette_woodrow_cv.pdf">CV</a></span>
                <span> · Last updated November 2026</span>
            </footer>
        </div>
        <LayoutSwitcher layout={layout} setLayout={setLayout} />
    </div>
    )
}

export default HomeProbability

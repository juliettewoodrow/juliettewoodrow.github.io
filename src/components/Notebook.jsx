import { useEffect, useState } from "react"
import { Email } from "./Email"

const Cell = ({ id, n, code, children }) => (
    <section className="nb-cell" id={id}>
        <div className="nb-row">
            <span className="nb-prompt nb-prompt-in">In [{n}]:</span>
            <pre className="nb-code">{code}</pre>
        </div>
        <div className="nb-row nb-row-out">
            <span className="nb-prompt" aria-hidden="true"></span>
            <div className="nb-out">{children}</div>
        </div>
    </section>
)

const news = [
    {
        when: "Fall 2026",
        text: (
            <>
                Co-teaching <a href="https://codeinplace.stanford.edu/cipx/intro">Code in Place X</a> with{" "}
                <a href="https://sierrawang.github.io/">Sierra Wang</a>, a new global course on learning to program alongside AI.
            </>
        ),
    },
    {
        when: "2026",
        text: (
            <>
                <a href="https://arxiv.org/abs/2605.21776">PromptNCE</a> accepted at COLM 2026.
            </>
        ),
    },
    {
        when: "Winter 2026",
        text: (
            <>
                Instructor of record for <a href="https://web.stanford.edu/class/archive/cs/cs109/cs109.1264/">CS109</a>, Stanford's probability course.
            </>
        ),
    },
]

const papers = [
    {
        title: "PromptNCE: Conditional Probabilities and PMI Using Only LLMs and Contrastive Estimation Prompts",
        url: "https://arxiv.org/abs/2605.21776",
        result: "Estimates pointwise mutual information using only a prompted LLM, with no trained critic.",
        meta: "J. Woodrow, C. Piech. COLM 2026",
    },
    {
        title: "Learner Insight Tracing",
        url: null,
        result: "Natural language knowledge states that predict future work, closing 73% of the gap to full history at under 6% of its length.",
        meta: "J. Woodrow, Z. Zhu, C. Piech. Under review",
    },
    {
        title: "Improving Generative AI Student Feedback: Direct Preference Optimization with Teachers in the Loop",
        url: "/pdfs/DPOFeedback.pdf",
        result: "Fine-tunes on teachers' grading choices; experts preferred it over GPT-4o, 56.8% to 40.2%.",
        meta: "J. Woodrow, S. Koyejo, C. Piech. EDM 2025",
    },
    {
        title: "Soft Grades: A Calibrated and Accurate Method for Course-Grade Estimation that Expresses Uncertainty",
        url: "/pdfs/SoftGrades.pdf",
        result: "Represents grades as calibrated distributions and beats polytomous IRT at predicting future scores.",
        meta: "J. Woodrow, C. Piech. LAK 2025",
    },
    {
        title: "TeachNow: Enabling Teachers to Provide Spontaneous, Realtime 1:1 Help in Massive Online Courses",
        url: "/pdfs/TeachNow.pdf",
        result: "15,000+ sessions of on-demand 1:1 help, with about 15% higher retention in a randomized trial.",
        meta: "A. Malik*, J. Woodrow*, C. Wang, C. Piech. ITiCSE 2024",
    },
]

const courses = [
    {
        when: "Fall 2026 · co-instructor",
        name: "Code in Place X",
        url: "https://codeinplace.stanford.edu/cipx/intro",
        desc: (
            <>
                With <a href="https://sierrawang.github.io/">Sierra Wang</a>. A free global course on learning and teaching programming in the age of AI.
            </>
        ),
    },
    {
        when: "Winter 2026 · instructor of record",
        name: "CS109 Probability for Computer Scientists",
        url: "https://web.stanford.edu/class/archive/cs/cs109/cs109.1264/",
        desc: "270+ students. Probability through computation, from MLE to information theory and diffusion models.",
    },
    {
        when: "Summer 2021 · instructor",
        name: "CS106A Programming Methodologies",
        url: "https://web.stanford.edu/class/cs106a-8/",
        desc: "Stanford's introductory programming course.",
    },
    {
        when: "2020 to present · founding team",
        name: "Code in Place",
        url: "https://codeinplace.stanford.edu/",
        desc: "Stanford's free, global intro CS course, with 60,000+ learners and 5,000+ volunteer teachers.",
    },
]

const awards = [
    { name: "Stanford HAI Graduate Fellowship", url: null, year: null },
    {
        name: "Walter J. Gores Award for Excellence in Teaching",
        url: "https://studentservices.stanford.edu/more-resources/university-awards/walter-j-gores-awards",
        year: "2022",
    },
    {
        name: "Centennial Teaching Assistant Award",
        url: "https://ctl.stanford.edu/cta-winners#soe22",
        year: "2022",
    },
]

const sections = [
    { id: "news", label: "news" },
    { id: "research", label: "research" },
    { id: "teaching", label: "teaching" },
    { id: "awards", label: "awards" },
]

const NewsCell = () => (
    <Cell id="news" n={1} code="juliette.news()">
        <div className="nb-news">
            {news.map((item) => (
                <div className="nb-news-row" key={item.when}>
                    <span className="nb-mono nb-news-when">{item.when}</span>
                    <span>{item.text}</span>
                </div>
            ))}
        </div>
    </Cell>
)

const ResearchCell = () => (
    <Cell id="research" n={2} code="juliette.research()">
        <div className="nb-list nb-papers">
            {papers.map((p) => (
                <div key={p.title} className="nb-paper">
                    {p.url ? (
                        <a className="nb-paper-title" href={p.url}>{p.title}</a>
                    ) : (
                        <span className="nb-paper-title">{p.title}</span>
                    )}
                    <p className="nb-paper-result">{p.result}</p>
                    <p className="nb-meta">{p.meta}</p>
                </div>
            ))}
            <a className="nb-mono nb-more" href="https://scholar.google.com/citations?user=NsCBeoEAAAAJ&hl=en">
                ... more on Google Scholar
            </a>
        </div>
    </Cell>
)

const TeachingCell = () => (
    <Cell id="teaching" n={3} code="juliette.teaching()">
        <div className="nb-course-grid">
            {courses.map((c) => (
                <div className="nb-card" key={c.name}>
                    <p className="nb-card-when">{c.when}</p>
                    <p className="nb-card-name"><a href={c.url}>{c.name}</a></p>
                    <p className="nb-card-desc">{c.desc}</p>
                </div>
            ))}
        </div>
    </Cell>
)

const AwardsCell = () => (
    <Cell id="awards" n={4} code="juliette.awards()">
        <div className="nb-list nb-list-tight">
            {awards.map((a) => (
                <div key={a.name}>
                    {a.url ? <a href={a.url}>{a.name}</a> : a.name}
                    {a.year && <span className="nb-mono nb-year"> {a.year}</span>}
                </div>
            ))}
        </div>
    </Cell>
)

export const Notebook = () => (
    <div className="nb-cells">
        <NewsCell />
        <ResearchCell />
        <TeachingCell />
        <AwardsCell />
        <footer className="nb-footer">
            <Email className="nb-mono" />
            <span> · <a href="/juliette_woodrow_cv.pdf">CV</a></span>
            <span> · Last updated November 2026</span>
        </footer>
    </div>
)

export const SideNav = () => {
    const [active, setActive] = useState(sections[0].id)

    useEffect(() => {
        const els = sections.map((s) => document.getElementById(s.id)).filter(Boolean)
        const onScroll = () => {
            const atBottom = window.innerHeight + window.scrollY >= document.body.scrollHeight - 4
            if (atBottom) {
                setActive(sections[sections.length - 1].id)
                return
            }
            let current = sections[0].id
            for (const el of els) {
                if (el.getBoundingClientRect().top <= window.innerHeight * 0.35) {
                    current = el.id
                }
            }
            setActive(current)
        }
        onScroll()
        window.addEventListener("scroll", onScroll, { passive: true })
        window.addEventListener("resize", onScroll)
        return () => {
            window.removeEventListener("scroll", onScroll)
            window.removeEventListener("resize", onScroll)
        }
    }, [])

    return (
        <nav className="nb-side" aria-label="Sections">
            {sections.map((s) => (
                <a
                    key={s.id}
                    href={"#" + s.id}
                    className={"nb-side-link" + (active === s.id ? " nb-side-active" : "")}
                    aria-current={active === s.id ? "true" : undefined}
                >
                    {s.label}
                </a>
            ))}
        </nav>
    )
}

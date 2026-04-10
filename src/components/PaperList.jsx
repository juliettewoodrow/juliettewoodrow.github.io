import { Paper } from "./Paper"

export const PaperList = () => {
    return (
        <div className="section">
            <h2 className="section-title">Selected Publications</h2>
            <div className="paper-list">
                <Paper
                    authors="J. Woodrow, S. Koyejo, C. Piech"
                    title="Improving Generative AI Student Feedback: Direct Preference Optimization with Teachers in the Loop"
                    conference="Proceedings of the 18th International Conference on Educational Data Mining (EDM). 2025."
                    picUrl="dpofeedback_mainfigure.png"
                    pdfUrl="/pdfs/DPOFeedback.pdf"
                />
                <Paper
                    authors="J. Woodrow, C. Piech"
                    title="Soft Grades: A Calibrated and Accurate Method for Course-Grade Estimation that Expresses Uncertainty"
                    conference="Proceedings of the 15th International Learning Analytics and Knowledge Conference (LAK). 2025."
                    picUrl="softgradesfigure.png"
                    pdfUrl="/pdfs/SoftGrades.pdf"
                />
                <Paper
                    authors="J. Woodrow, A. Malik, C. Piech"
                    title="AI Teaches the Art of Elegant Coding: Timely, Fair, and Helpful Style Feedback in a Global Course"
                    conference="Proceedings of the 55th ACM Technical Symposium on Computer Science Education (SIGCSE). 2024."
                    picUrl="SFMainFigure.png"
                    pdfUrl="/pdfs/AITeachesElegantCoding.pdf"
                />
                <Paper
                    authors="A. Malik*, J. Woodrow*, C. Wang, C. Piech"
                    title="TeachNow: Enabling Teachers to Provide Spontaneous, Realtime 1:1 Help in Massive Online Courses"
                    conference="Proceedings of the 2024 Innovation and Technology in Computer Science Education (ITiCSE)."
                    picUrl="overview_pic.jpg"
                    pdfUrl="/pdfs/TeachNow.pdf"
                />
                <Paper
                    authors="A. Malik*, J. Woodrow*, B. Capoor, T. Jefferson, M. Li, S. Wang, P. Wei, D. Demszky, J. Langer-Osuna, J. Zelenski, M. Sahami, C. Piech"
                    title="Code in Place 2023: Understanding learning and teaching at scale through a massive global classroom"
                    conference=""
                    picUrl="codeinplace_cookies.jpg"
                    pdfUrl="/pdfs/codeinplace2023.pdf"
                />
            </div>
            <p className="scholar-link">
                <a href="https://scholar.google.com/citations?user=NsCBeoEAAAAJ&hl=en">View all publications on Google Scholar &rarr;</a>
            </p>
        </div>
    )
}

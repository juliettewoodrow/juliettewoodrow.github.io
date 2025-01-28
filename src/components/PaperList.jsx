import { Paper } from "./Paper"

export const PaperList = () => {


    return (
        <div className="paper-list">
            <h1>Publications</h1>
            <Paper
                authors={"J. Woodrow, C. Piech"}
                title={"Soft Grades: A Calibrated and Accurate Method for Course-Grade Estimation that Expresses Uncertainty"}
                conference={"LAK 2025"}
                award={""}
                picUrl={"softgradesfigure.png"}
                pdfUrl={"/pdfs/SoftGrades.pdf"}
             />
            <Paper
                authors={"J. Woodrow, A. Malik, C. Piech"}
                title={"AI Teaches the Art of Elegant Coding: Timely, Fair, and Helpful Style Feedback in a Global Course"}
                conference={"SIGCSE 2024"}
                award={""}
                picUrl={"SFMainFigure.png"}
                pdfUrl={"/pdfs/AITeachesElegantCoding.pdf"}
             />
             <Paper
                authors={"A. Malik*, J. Woodrow*, C. Wang, C. Piech"}
                title={"TeachNow: Enabling Teachers to Provide Spontaneous, Realtime 1:1 Help in Massive Online Courses"}
                conference={"ITiCSE 2024"}
                picUrl={"overview_pic.jpg"}
                pdfUrl={"/pdfs/TeachNow.pdf"}
            />
            <Paper
                authors={"A. Malik*, J. Woodrow*, B. Capoor, T. Jefferson, M. Li, S. Wang, P. Wei, D. Demszky, J. Langer-Osuna, J. Zelenski, M. Sahami, C. Piech"}
                title={"Code in Place 2023: Understanding learning and teaching at scale through a massive global classroom"}
                picUrl={"codeinplace_cookies.jpg"}
                pdfUrl={'/pdfs/codeinplace2023.pdf'}
            />
            <Paper
                authors={"A. Malik, J. Woodrow, C. Piech"}
                title={"Learners Teaching Novices: An Uplifting Alternative Assessment"}
                conference={"SIGCSE 2024"}
                award={""}
                picUrl={"avt.png"}
                pdfUrl={"/pdfs/LearnersTeachingNovices.pdf"}
             />

            <Paper
                authors={"E. Liu, D. Yuan, S. Ahmed, E. Cornwall, J. Woodrow, K. Burns, A. Nie, E. Brunskill, C. Piech, C. Finn"}
                title={"A Fast and Accurate Machine Learning Autograder for the Breakout Assignment"}
                conference={"SIGCSE 2024"}
                award={""}
                picUrl={"breakout.png"}
                pdfUrl={"/pdfs/BreakoutAutograder.pdf"}
             />
            
        </div>
    )

}
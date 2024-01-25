import { Paper } from "./Paper"

export const PaperList = () => {


    return (
        <div className="paper-list">
            <h1>Publications</h1>
            <Paper
                authors={"J. Woodrow*, A. Malik, C. Piech"}
                title={"AI Teaches the Art of Elegant Coding: Timely, Fair, and Helpful Style Feedback in a Global Course"}
                conference={"SIGCSE 2024"}
                award={""}
                picUrl={"SFMainFigure.png"}
             />
            <Paper
                authors={"A. Malik*, J. Woodrow*, B. Capoor, T. Jefferson, M. Li, S. Wang, P. Wei, D. Demszky, J. Langer-Osuna, J. Zelenski, M. Sahami, C. Piech"}
                title={"Code in Place 2023: Understanding learning and teaching at scale through a massive global classroom"}
                picUrl={"codeinplace_cookies.jpg"}
                pdfUrl={'https://piechlab.stanford.edu/assets/papers/codeinplace2023.pdf'}
            />
            <Paper
                authors={"A. Malik, J. Woodrow, C. Piech"}
                title={"Learners Teaching Novices: An Uplifting Alternative Assessment"}
                conference={"SIGCSE 2024"}
                award={""}
                picUrl={"avt.png"}
             />

            <Paper
                authors={"E. Liu, D. Yuan, S. Ahmed, E. Cornwall, J. Woodrow, K. Burns, A. Nie, E. Brunskill, C. Piech, C. Finn"}
                title={"A Fast and Accurate Machine Learning Autograder for the Breakout Assignment"}
                conference={"SIGCSE 2024"}
                award={""}
                picUrl={"breakout.png"}
             />
            
        </div>
    )

}
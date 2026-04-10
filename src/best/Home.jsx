import { Header } from "../components/Header"
import { Research } from "../components/Research"
import { Teaching } from "../components/Teaching"
import { PaperList } from "../components/PaperList"
import { Awards } from "../components/Awards"
import { Footer } from "../components/Footer"

export const Home = ({ setIsDungeon }) => {
    return (
        <div className="home">
            <div className="subhome">
                <Header setIsDungeon={setIsDungeon} />
                <Research />
                <hr className="section-divider" />
                <Teaching />
                <hr className="section-divider" />
                <PaperList />
                <hr className="section-divider" />
                <Awards />
                <Footer />
            </div>
        </div>
    )
}

import { Header } from "../components/Header"
import { Notebook, SideNav } from "../components/Notebook"

export const Home = ({ setIsDungeon }) => {
    return (
        <div className="home">
            <div className="nb-layout">
                <div className="subhome">
                    <Header setIsDungeon={setIsDungeon} />
                    <Notebook />
                </div>
                <SideNav />
            </div>
        </div>
    )
}

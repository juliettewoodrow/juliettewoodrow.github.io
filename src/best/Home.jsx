import { Header } from "../components/Header"
import { About } from "../components/About"
import { Teaching } from "../components/Teaching"
import { PaperList } from "../components/PaperList"

export const Home = ({setIsDungeon}) => {


    return <div className="home">
        <div className="subhome">
        <Header setIsDungeon={setIsDungeon}/>
        <About/>
        <hr/>
        <Teaching/>
        <hr/>
        <PaperList/>

        </div>
    </div>

}
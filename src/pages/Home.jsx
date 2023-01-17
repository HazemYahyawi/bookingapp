import { Navbar } from "../components/navbar/Navbar"
import Header from "../components/header/Header"
import { Feautured } from "../components/featured/Featured";
import { PropretyList } from "../components/PropretyList/PropretyList";
import { FeaturedProperties } from "../components/FeaturedProperties/FeaturedProperties";
import "./Home.css";
export const Home = () => {
    return (<>
        <Navbar />
        <Header />
        <div className="homeContainer"><Feautured />
            <h1 className="homeTitle">Browse by property type</h1><PropretyList />
            <h1 className="homeTitle">Homes guests love</h1><FeaturedProperties/>
            </div>
            


    </>
    )
}
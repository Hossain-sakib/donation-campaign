import { useLoaderData } from "react-router-dom";
import Cards from "./Cards";
import Header from "../Header/Header";

const Home = () => {
    const homeCards = useLoaderData();
    
    return (
        <div>
            <Header></Header>
            <Cards homeCards={homeCards}></Cards>
        </div>
    );
};

export default Home;
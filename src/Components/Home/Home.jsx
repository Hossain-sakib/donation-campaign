import { useLoaderData } from "react-router-dom";
import Cards from "./Cards";


const Home = () => {
    const homeCards = useLoaderData();
    
    return (
        <div>
            <Cards homeCards={homeCards}></Cards>
        </div>
    );
};

export default Home;
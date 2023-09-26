import { Outlet } from "react-router-dom";
import Navbar from "../Components/Header/Navbar";


const MainLayout = () => {
    return (
        <div className="px-10 md:px-24">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;
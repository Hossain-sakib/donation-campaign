import { Link, NavLink } from "react-router-dom";
const Navbar = () => {
    return (
        <div>
            <div className="navbar flex justify-between">
                <Link to="/"><img className="w-32" src="https://i.ibb.co/BGRXpYP/Logo.png" alt="" /></Link>
                <div>
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-28">

                            <li>
                                <NavLink
                                    to="/"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "text-red-400 underline" : ""
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/donation"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "text-red-400 underline" : ""
                                    }
                                >
                                    Donation
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/statistics"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "text-red-400 underline" : ""
                                    }
                                >
                                    Statistics
                                </NavLink>
                            </li>

                        </ul>
                    </div>

                </div>
                <div className="hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-red-400 underline" : ""
                                }
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/donation"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-red-400 underline" : ""
                                }
                            >
                                Donation
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/statistics"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-red-400 underline" : ""
                                }
                            >
                                Statistics
                            </NavLink>
                        </li>

                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Navbar;
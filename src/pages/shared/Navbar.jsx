import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";



const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    console.log(user);

    const handleSignOut = () => {
        logOut()
            .then()
            .catch()
    }

    const navLinks = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/allitems">All Items</NavLink></li>
        <li><NavLink to="/additem">Add Item</NavLink></li>
        <li><NavLink to="/updateitem">Update Item</NavLink></li>
        <li><NavLink to="/login">Login</NavLink></li>
        <li><NavLink to="/register">Register</NavLink></li>

    </>

    return (
        <div className="navbar bg-base-200 rounded-lg">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {navLinks}
                    </ul>
                </div>
                <div className="md:flex items-center gap-3">
                    <h2 className="text-xl"><span className="text-amber-950 text-2xl font-bold">Art</span> <br />  &  <span className="text-[#896956] font-bold text-2xl">Craft</span></h2>

                    <img src="https://i.ibb.co.com/JzLJ5s2/craft-logo.jpg" className="h-10 w-auto rounded" alt="logo" />
                </div>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end gap-2">
                <div className="w-10 rounded-full">
                    {/* User Profile Image */}
                    {user?.photoURL ? (
                        <img className="w-10 h-10 rounded-full border-2 border-gray-300" src={user.photoURL} alt="User" />
                    ) : (
                        <img className="w-10 h-10 rounded-full border-2 border-gray-300"
                            alt="default user"
                            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                    )}

                </div>

                {
                    user ?
                        <button onClick={handleSignOut} className="btn">Sign Out</button>
                        :
                        <Link to="/login">
                            <button className="btn">Login</button>
                        </Link>
                }

            </div>
        </div>
    );
}

export default Navbar;
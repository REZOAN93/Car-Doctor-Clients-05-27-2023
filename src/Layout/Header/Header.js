import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.svg";
import { AuthContext } from "../../Contexts/AuthProvidor/AuthProvidor";

const Header = () => {
  const { user, usersignOut } = useContext(AuthContext);

  const handleSignout = () => {
    usersignOut()
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  const menuItem = (
    <>
      <li>
        <Link to={"/"}>Home</Link>
        <Link to={"/"}>About</Link>
        <Link to={"/"}>Blog</Link>
        <Link to={"/"}>Service</Link>
        <Link to={"/"}>Contact</Link>
        <Link to={"/login"}>Log In</Link>
        <Link to={"/signup"}>Sign Up</Link>
      </li>
    </>
  );

  return (
    <div className="navbar bg-yellow-200 mt-2 mb-2">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItem}
          </ul>
        </div>
        <img src={Logo} alt="" srcset="" />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{menuItem}</ul>
      </div>
      <div className="navbar-end">
        <p>{user?.email}</p>
        <button className="btn btn-outline btn-warning">Appointment</button>
        <button onClick={handleSignout} className="btn btn-outline btn-warning">
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Header;

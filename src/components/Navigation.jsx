import React from "react";

const Navigation = () => {
  return (
    <header className="navbar bg-[#202731] ">
      <div className="navbar-start">
        <div className="dropdown">
          <a
            href="#home"
            className="border-2 rounded-full p-2 normal-case text-xl "
          >
            AN
          </a>
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
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-500 rounded-box w-52"
          >
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#Do">What can I do ?</a>
            </li>
            <li>
              <a href="#About">Who I am ?</a>
            </li>
            <li>
              <a href="#Project">Projects</a>
            </li>
            <li>
              <a href="#Skills">Skills</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#Do">What can I do ?</a>
          </li>
          <li>
            <a href="#About">Who I am ?</a>
          </li>
          <li>
            <a href="#Project">Projects</a>
          </li>
          <li>
            <a href="#Skills">Skills</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a href="#Contact" className="btn">
          Contact Me
        </a>
      </div>
    </header>
  );
};

export default Navigation;

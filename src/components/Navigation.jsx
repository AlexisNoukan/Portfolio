import React from "react";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <div>
      <nav
        className="
            w-full
            py-4
            text-gray-500
            dark:bg-gray-800
            dark:decoration-sky-500
            hover:dark:decoration-white hover:decoration-white
            "
      >
        <div className=" w-full flex items-center justify-between px-6">
          <div
            className=" flex items-center justify-between"
            id="navbarSupportedContent"
          >
            <div className="logo">
              <Link to="/" className="ttext-xl text-black font-semibold">
                Alexis Noukan
              </Link>
            </div>
          </div>
          <div>
            <ul className="navbar-nav flex items-center justify-center  pl-0 list-style-none mr-auto">
              <li className="nav-item px-2">
                <Link to="/" className="nav-link active" aria-current="page">
                  <span>Home</span>
                </Link>
              </li>
              <li className="nav-item px-2">
                <Link
                  to="/Project"
                  className="nav-link active"
                  aria-current="page"
                >
                  <span>Project</span>
                </Link>
              </li>
              <li className="nav-item px-2">
                <Link
                  to="/Knowledge"
                  className="nav-link active"
                  aria-current="page"
                >
                  <span>Knowledge</span>
                </Link>
              </li>
            </ul>
          </div>
          <div className=" flex gap-5 items-center   ">
            <Link to="/Contact">
              <button className="btn bg-indigo-600">
                <span>Contact now</span>
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

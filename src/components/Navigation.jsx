import React from "react";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <div>
      <nav
        className="
            w-full
            py-4
            bg-gray-100
            text-gray-500
            hover:text-gray-700
            focus:text-gray-700
            shadow-lg
            "
      >
        <div className=" w-full flex items-center justify-between px-6">
          <div
            className=" flex items-center justify-between"
            id="navbarSupportedContent"
          >
            <div className="logo">
              <Link to="/" className="text-xl text-black">
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
                  to="/Work"
                  className="nav-link active"
                  aria-current="page"
                >
                  <span>Past Work</span>
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
          <div className=" flex gap-5">
            <div>
              <Link to="/Contact">Contact now</Link>
            </div>
            <div>
              <button>light / dark</button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

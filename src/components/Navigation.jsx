import React from "react";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <header className="sticky top-0 z-50">
      <nav
        className="
            w-full
            py-4
            text-gray-500
            "
      >
        <div className=" w-full flex items-center justify-between px-6">
          <div className=" flex items-center justify-between">
            <div className="logo">
              <Link to="/" className="ttext-xl text-black font-semibold">
                <span className="text-2xl">AN</span>
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <ul className="flex items-center justify-center gap-4 list-style-none ">
              <li className="px-2">
                <Link to="/" className="nav-link active" aria-current="page">
                  <span>Home</span>
                </Link>
              </li>
              <li className="px-2">
                <Link to="/Project">
                  <span>Project</span>
                </Link>
              </li>
              <li className="px-2">
                <Link to="/Knowledge">
                  <span>Knowledge</span>
                </Link>
              </li>
            </ul>{" "}
            <div className=" flex gap-5 items-center   ">
              <a href="#Contact">
                <button className="btn bg-indigo-600">
                  <span>Contact now</span>
                </button>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

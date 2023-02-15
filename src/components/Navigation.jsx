import React from "react";

export default function Navigation() {
  return (
    <header className="sticky top-0 z-50">
      <nav
        className="
            w-full
            p-6
            bg-[#112f5a]
            "
      >
        <div className=" w-full flex items-center justify-between px-6">
          <div className=" flex items-center justify-between">
            <div className="logo">
              <a href="#Home" className="ttext-xl font-semibold">
                <span className="text-2xl">AN</span>
              </a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <ul className="flex items-center justify-center gap-4 list-style-none ">
              <li className="px-2">
                <a href="#Home" className="nav-link active" aria-current="page">
                  <span>Home</span>
                </a>
              </li>
              <li className="px-2">
                <a href="#Knowledge">
                  <span>About Me</span>
                </a>
              </li>
              <li className="px-2">
                <a href="#Project">
                  <span>Project</span>
                </a>
              </li>
              <li className="px-2">
                <a href="#Knowledge">
                  <span>Knowledge</span>
                </a>
              </li>
            </ul>{" "}
            <div className=" flex gap-5 items-center   ">
              <a href="#Contact">
                <button className="btn py-2 px-8">
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

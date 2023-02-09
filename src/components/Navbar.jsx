import React from "react";

export default function Navbar() {
  return (
    <div
      className="relative
    w-full
    flex flex-wrap
    items-center
    justify-between
    py-4
    bg-gray-100
    text-gray-500
    hover:text-gray-700
    focus:text-gray-700
    shadow-lg
    navbar navbar-expand-lg navbar-light"
    >
      <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6">
        <a class="text-xl text-black" href="#">
          Navbar
        </a>
        <ul class="navbar-nav flex flex-col pl-0 list-style-none mr-auto">
          <li class="nav-item px-2">
            <a class="nav-link active" aria-current="page" href="#">
              Home
            </a>
          </li>
          <li class="nav-item pr-2">
            <a
              class="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0"
              href="#"
            >
              Features
            </a>
          </li>
          <li class="nav-item pr-2">
            <a
              class="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0"
              href="#"
            >
              Pricing
            </a>
          </li>
          <li class="nav-item pr-2">
            <a class="nav-link disabled text-gray-300 p-0">Disabled</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

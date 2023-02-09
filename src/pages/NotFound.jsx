import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div>
      <div class="relative h-screen overflow-hidden ">
        <div class="absolute inset-0 "></div>
        <div class="container relative z-10 flex items-center px-6 py-32 mx-auto md:px-12 xl:py-40">
          <div class="relative z-10 flex flex-col items-center w-full font-mono">
            <h1 class="mt-4 text-5xl font-extrabold leading-tight text-center text-white">
              You&#x27;re alone here
            </h1>
            <p class="font-extrabold text-white text-8xl my-44 animate-bounce">
              404
            </p>

            <Link to="/">Return to home</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

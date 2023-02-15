import React from "react";
import { Link } from "react-router-dom";
import Project from "./Project";
import Knowledge from "./Knowledge";
import Contact from "./Contact";

const Home = () => {
  return (
    <main>
      <section id="Home" className="min-h-screen  ">
        <div className="  py-[10%] px-[10%]">
          <article className=" flex flex-col gap-3">
            <p className="text-3xl">Hi! I am</p>
            <h1 className="font-bold text-8xl "> Alexis NOUKAN</h1>
            <h2 className="text-5xl">A front end developper</h2>
            <h2 className="text-5xl">A backend developper</h2>
          </article>
        </div>
      </section>
      <section className="flex flex-col justify-center gap-4 items-center min-h-screen py-[10%] w-[100%] px-[10%]">
        <div className="flex gap-2 ">
          <article className="w-[30%]">
            <h2>Front end Developpement</h2>
            <p className="pt-4">
              I make all the front end with React and Tailwind CSS.
            </p>
          </article>
          <article className="w-[30%]">
            <h2>Wed Design (A little)</h2>
            <p className="pt-4">
              I make basic design for website inspired by existent design. I am
              not a web designer but i try my best.
            </p>
          </article>
          <article className="w-[30%]">
            <h2>Back end Developpement</h2>
            <p className="pt-4">
              I make all the back end and create the api between the front and
              the back to make dynamic website.
            </p>
          </article>
        </div>
        <div className="pt-5 w-[30%]">
          <Link to="/Project">
            <div className=" rounded-md p-1 text-center bg-slate-300">
              <span className="text-black ">Project</span>
            </div>
          </Link>
        </div>
      </section>
      <section className="min-h-screen">
        <div className=" py-[10%] px-[10%]">about me</div>
      </section>
      <Project />
      <Knowledge />
      <Contact />
    </main>
  );
};

export default Home;

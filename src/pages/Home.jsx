import React from "react";
import { Link } from "react-router-dom";
import Contact from "./Contact";

const Home = () => {
  return (
    <main>
      <section className="min-h-screen  ">
        <div className="  py-[10%] px-[10%]">
          <article className=" flex flex-col gap-3">
            <p className="text-3xl">Hi! I am</p>
            <h1 className="font-bold text-8xl "> Alexis NOUKAN</h1>
            <h2 className="text-5xl">A front end developper</h2>
            <h2 className="text-5xl">A backend developper</h2>
          </article>
        </div>
      </section>
      <section className="flex bg-white flex-wrap gap-2 min-h-screen">
        <div className="py-[10%] w-[100%] px-[10%]">
          <article className="w-[20%]">
            <h2>Front end Developpement</h2>
            <p className="pt-4">
              I make all the front end with React and Tailwind CSS.
            </p>
          </article>
          <article className="w-[20%]">
            <h2>Wed Design (A little)</h2>
            <p className="pt-4">
              I make basic design for website inspired by existent design. I am
              not a web designer but i try my best.
            </p>
          </article>
          <article className="w-[20%]">
            <h2>Back end Developpement</h2>
            <p className="pt-4">
              I make all the back end and create the api between the front and
              the back to make dynamic website.
            </p>
          </article>
          <div className="pt-5">
            <Link to="/Project">
              <div className=" rounded-md p-1 text-center bg-slate-300">
                <span className="text-black ">Project</span>
              </div>
            </Link>
          </div>
        </div>
      </section>
      <section className="min-h-screen">
        <div className=" py-[10%] px-[10%]">about me</div>
      </section>
      <Contact />
    </main>
  );
};

export default Home;

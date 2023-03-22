import React from "react"
import CV from "../assets/home/resume.pdf"
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline"

const Home = () => {
  return (
    <div>
      <section id="Home" className="min-h-screen  ">
        <div className="  py-[10%] px-[10%]">
          <article className=" flex flex-col gap-3">
            <p className="text-3xl">Hi! I am</p>
            <h1 className="font-bold text-8xl "> Alexis NOUKAN</h1>
            <h2 className="text-5xl">A Fullstack Developper</h2>

            <a
              href={CV}
              target="_blank"
              rel="noreferrer"
              className="btn w-[20%] py-2 px-8 flex items-center space-x-4"
            >
              <ArrowDownTrayIcon className="h-7 w-7" />
              <span>Get my Resume</span>
            </a>
          </article>
        </div>{" "}
      </section>{" "}
      <section
        id="Do"
        className=" flex flex-col justify-center gap-4 items-center min-h-screen py-[10%] w-[100%] px-[10%]"
      >
        <h2 className="text-3xl">What can I do ?</h2>

        <div className="flex justify-center gap-2 text-slate-600 ">
          <div className="card w-96  shadow-xl bg-white">
            <div className="card-body">
              <h2 className="card-title">Front end Developpement</h2>
              <p>II make all the front end with React and Tailwind CSS.</p>
            </div>
          </div>
          <div className="card w-96  shadow-xl bg-white">
            <div className="card-body">
              <h2 className="card-title">Wed Design (A little)</h2>
              <p>
                I make basic design for website inspired by existent design. I
                am not a web designer but i try my best.
              </p>
            </div>
          </div>
          <div className="card w-96  shadow-xl bg-white">
            <div className="card-body">
              <h2 className="card-title">Back end Developpement</h2>
              <p>
                {" "}
                I make all the back end and create the api between the front and
                the back to make dynamic website.
              </p>
            </div>
          </div>
        </div>
        <div className="pt-5 flex justify-center w-[30%]">
          <a href="#Project">
            <div className=" btn py-2 px-8  p-1 text-center ">
              <span>Project</span>
            </div>
          </a>
        </div>
      </section>
    </div>
  )
}

export default Home

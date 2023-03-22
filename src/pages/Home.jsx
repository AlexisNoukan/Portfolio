import React from "react"
import CV from "../assets/home/resume.pdf"
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline"
import GitLab from "../assets/home/gitlab-logo-500.png"
import Next from "../assets/home/nextjs-2.svg"
import ReactIcon from "../assets/home/icons8-react-80.png"
import Tailwind from "../assets/home/tailwind-css-icon.svg"
import Nest from "../assets/home/file_type_nestjs_icon_130355.png"
import Mongo from "../assets/home/mongodb_original_wordmark_logo_icon_146425.png"

const Home = () => {
  return (
    <div>
      <section id="Home" className="min-h-screen  ">
        <div className="  py-[10%] px-[10%]">
          <article className=" flex flex-col gap-3">
            <p className="text-3xl">Hi! I am</p>
            <h1 className="font-bold text-6xl md:text-8xl "> Alexis NOUKAN</h1>
            <h2 className="text-5xl">A Fullstack Software Developper</h2>

            <a
              href={CV}
              target="_blank"
              rel="noreferrer"
              className="btn w-80 py-2 px-8 flex items-center space-x-4"
            >
              <ArrowDownTrayIcon className="h-7 w-7" />
              <span>Get my Resume</span>
            </a>
          </article>
        </div>{" "}
        <div className="flex flex-col md:flex-row justify-center items-center gap-4  md:space-x-10 ">
          <div className="flex gap-2">
            <img
              className="mask mask-squircle h-24 w-24 bg-white p-2"
              src={GitLab}
              alt="GitLab"
            />
            <img
              className="mask mask-squircle h-24 w-24 bg-white p-2"
              src={Next}
              alt="NextJS"
            />
            <img
              className="mask mask-squircle h-24 w-24 bg-white p-2"
              src={ReactIcon}
              alt="React"
            />
          </div>
          <div className="flex gap-2">
            <img
              className="mask mask-squircle h-24 w-24 bg-white p-2"
              src={Tailwind}
              alt="TailwindCSS"
            />
            <img
              className="mask mask-squircle h-24 w-24 bg-white p-2"
              src={Nest}
              alt="NestJS"
            />
            <img
              className="mask mask-squircle h-24 w-24 bg-white p-2"
              src={Mongo}
              alt="MongoDB"
            />
          </div>
        </div>
      </section>{" "}
      <section
        id="Do"
        className=" flex flex-col justify-center gap-4 items-center min-h-screen py-[10%] md:w-[100%] md:px-[10%] m-2"
      >
        <h2 className="text-3xl">What can I do ?</h2>

        <div className="flex flex-wrap justify-center gap-2 text-slate-600 ">
          <div className="card w-80 md:96  shadow-xl bg-white">
            <div className="card-body">
              <h2 className="card-title">Front end Developpement</h2>
              <p>II make all the front end with React and Tailwind CSS.</p>
            </div>
          </div>
          <div className="card w-80 md:96  shadow-xl bg-white">
            <div className="card-body">
              <h2 className="card-title">Wed Design (A little)</h2>
              <p>
                I make basic design for website inspired by existent design. I
                am not a web designer but i try my best.
              </p>
            </div>
          </div>
          <div className="card w-80 md:96  shadow-xl bg-white">
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
            <div className=" btn py-2 px-8  p-1 text-center w-80  ">
              <span>Project</span>
            </div>
          </a>
        </div>
      </section>
    </div>
  )
}

export default Home

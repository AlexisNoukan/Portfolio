import React from "react"
import Bookie from "../assets/project/Bookie.png"
import Twitter from "../assets/project/twitter-clone.png"
import Portfolio from "../assets/project/personal-portfolio.png"

export default function Work() {
  return (
    <section
      id="Project"
      className="min-h-screen flex flex-col justify-center items-center"
    >
      <h2 className="text-bold text-2xl">Projects</h2>
      <div className="py-[10%] md:px-[10%] flex flex-col lg:flex-row justify-center items-center gap-10">
        <div className="card w-80 md:96  bg-base-200 shadow-xl">
          <figure>
            <img src={Bookie} alt="Bookie" />
          </figure>
          <div className="card-body text-slate-600 ">
            <h2 className="card-title">
              Bookie
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>This is one of my school project</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">HTML</div>
              <div className="badge badge-outline">CSS</div>
            </div>
          </div>
        </div>
        <div className="card w-80 md:96  bg-base-200 shadow-xl">
          <figure>
            <img src={Twitter} alt="Twitter Clone" />
          </figure>
          <div className="card-body text-slate-600 ">
            <h2 className="card-title">
              Twitter
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>I have created a Twitter Clone</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">NextJS</div>
              <div className="badge badge-outline">TailwindCSS</div>
              <div className="badge badge-outline">TypeScript</div>
            </div>
          </div>
        </div>
        <div className="card w-80 md:96 bg-base-200 shadow-xl ">
          <figure>
            <img src={Portfolio} alt="Personal Portfolio" />
          </figure>
          <div className="card-body text-slate-600 ">
            <h2 className="card-title">
              Alexis Noukan
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>This is my personal portfolio</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">React</div>
              <div className="badge badge-outline">TailwindCSS</div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <a
          href="https://github.com/AlexisNoukan"
          rel="noreferrer"
          target="_blank"
        >
          <div className=" btn py-2 px-8  p-1 text-center ">
            <span>See my GitHub</span>
          </div>
        </a>
      </div>
    </section>
  )
}

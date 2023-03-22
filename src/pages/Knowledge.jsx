import React from "react"

export default function Knowledge() {
  return (
    <div id="Skills" className="min-h-screen">
      <div className="py-[10%] px-[10%] flex items-center flex-col gap-5">
        <h2 className="text-bold text-2xl">My Skills</h2>
        <div className="flex flex-col md:flex-row justify-between gap-5">
          <div className="flex flex-col gap-5 pt-5">
            <h2 className="text-bold text-xl">Framework</h2>
            <span>Tailwind CSS</span>
            <progress
              className="progress progress-secondary w-56"
              value="40"
              max="100"
            ></progress>
            <span>NextJS</span>
            <progress
              className="progress progress-secondary w-56"
              value="50"
              max="100"
            ></progress>
            <span>React</span>
            <progress
              className="progress progress-secondary w-56"
              value="50"
              max="100"
            ></progress>
            <span>NestJS</span>
            <progress
              className="progress progress-secondary w-56"
              value="20"
              max="100"
            ></progress>
          </div>
          <div className="flex flex-col gap-5 pt-5">
            <h2 className="text-bold text-xl">Language</h2>
            <span>TypeScript / JavaScript</span>
            <progress
              className="progress progress-secondary w-56"
              value="50"
              max="100"
            ></progress>

            <span>MongoDB</span>
            <progress
              className="progress progress-secondary w-56"
              value="10"
              max="100"
            ></progress>
            <span>HTML</span>
            <progress
              className="progress progress-secondary w-56"
              value="60"
              max="100"
            ></progress>
            <span>CSS</span>
            <progress
              className="progress progress-secondary w-56"
              value="60"
              max="100"
            ></progress>
          </div>
        </div>
      </div>
    </div>
  )
}

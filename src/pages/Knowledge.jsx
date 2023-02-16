import React from "react";

export default function Knowledge() {
  return (
    <div id="Knowledge" className="min-h-screen">
      <div className="py-[10%] px-[10%] flex items-center flex-col gap-5">
        <h2>My Skils</h2>
        <div className="flex justify-between gap-5">
          <div className="flex flex-col gap-5 pt-5">
            <progress
              className="progress progress-secondary w-56"
              value="50"
              max="100"
            ></progress>
            <span>JavaScript</span>
            <progress
              className="progress progress-secondary w-56"
              value="10"
              max="100"
            ></progress>
            <span>Tailwind CSS</span>
            <progress
              className="progress progress-secondary w-56"
              value="40"
              max="100"
            ></progress>
            <span>HTML</span>
            <progress
              className="progress progress-secondary w-56"
              value="70"
              max="100"
            ></progress>
            <span>CSS</span>
            <progress
              className="progress progress-secondary w-56"
              value="100"
              max="100"
            ></progress>
            <span>HTML</span>
          </div>
          <div className="flex flex-col gap-5 pt-5">
            <progress
              className="progress progress-secondary w-56"
              value="50"
              max="100"
            ></progress>
            <span>JavaScript</span>
            <progress
              className="progress progress-secondary w-56"
              value="10"
              max="100"
            ></progress>
            <span>Tailwind CSS</span>
            <progress
              className="progress progress-secondary w-56"
              value="40"
              max="100"
            ></progress>
            <span>HTML</span>
            <progress
              className="progress progress-secondary w-56"
              value="70"
              max="100"
            ></progress>
            <span>CSS</span>
            <progress
              className="progress progress-secondary w-56"
              value="100"
              max="100"
            ></progress>
            <span>HTML</span>
          </div>
        </div>
      </div>
    </div>
  );
}

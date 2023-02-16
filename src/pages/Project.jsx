import React from "react";

export default function Work() {
  return (
    <section id="Project" className="min-h-screen ">
      <div className="py-[10%] px-[10%] flex flex-col justify-center items-center gap-10">
        <h2 className="text-3xl ">Project</h2>
        <div className="flex gap-4 text-slate-600">
          <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">
                Bookie
                <div className="badge badge-secondary">NEW</div>
              </h2>
              <p>This is a project made in my formation</p>
              <p>A resservation website</p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">Html</div>
                <div className="badge badge-outline">Css</div>
              </div>
            </div>
          </div>
          <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">
                Riding Cities
                <div className="badge badge-secondary">NEW</div>
              </h2>
              <p>This is a project made in my formation</p>
              <p>Adding features to an existent website</p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">Html</div>
                <div className="badge badge-outline">Css</div>
              </div>
            </div>
          </div>
          <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">
                This Portfolio
                <div className="badge badge-secondary">NEW</div>
              </h2>
              <p>This is my actual portfolio</p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">React</div>
                <div className="badge badge-outline">Tailwind CSS</div>
              </div>
            </div>
          </div>
        </div>
        <a href="https://github.com/AlexisNoukan" target="_blank">
          <div className=" btn py-2 px-8  p-1 text-center ">
            <span>See my GitHub</span>
          </div>
        </a>
      </div>
    </section>
  );
}

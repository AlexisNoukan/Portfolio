import React from "react"
import Bookie from "../assets/project/Bookie.png"

export default function Work() {
  return (
    <section id="Project" className="min-h-screen ">
      <h1>Projects</h1>
      <div className="py-[10%] px-[10%] flex flex-col lg:flex-row justify-center items-center gap-10">
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={Bookie} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Shoes!
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Fashion</div>
              <div className="badge badge-outline">Products</div>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img src="" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Shoes!
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Fashion</div>
              <div className="badge badge-outline">Products</div>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img src="" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Shoes!
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Fashion</div>
              <div className="badge badge-outline">Products</div>
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

import React from "react";

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
              href="./assets/CV_AlexisNoukan.pdf"
              download
              className="btn w-[20%] py-2 px-8"
            >
              Resume
            </a>
          </article>
        </div>{" "}
      </section>{" "}
      <div class="custom-shape-divider-bottom-1676541370">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
      <section className="back-blue flex flex-col justify-center gap-4 items-center min-h-screen py-[10%] w-[100%] px-[10%]">
        <h2 className="text-3xl">What can I do ?</h2>
        <div className="flex justify-center gap-2">
          <article className="w-[35%] rounded-md p-4">
            <h2>Front end Developpement</h2>
            <p className="pt-4">
              I make all the front end with React and Tailwind CSS.
            </p>
          </article>
          <article className="w-[35%] rounded-md p-4">
            <h2>Wed Design (A little)</h2>
            <p className="pt-4">
              I make basic design for website inspired by existent design. I am
              not a web designer but i try my best.
            </p>
          </article>
          <article className="w-[35%] rounded-md p-4">
            <h2>Back end Developpement</h2>
            <p className="pt-4">
              I make all the back end and create the api between the front and
              the back to make dynamic website.
            </p>
          </article>
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
  );
};

export default Home;

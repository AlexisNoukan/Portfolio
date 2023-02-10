import React from "react";
import "../css/home.css";
import { Link } from "react-router-dom";
import Bonome from "../assets/home/bonome.webp";

const Home = () => {
  return (
    <div>
      <div className=" flex justify-center">
        <div className="bg-white flex  dark:bg-gray-800 pt-20 mt-32 rounded-xl shadow-lg shadow-indigo-500/50  ">
          <div className=" w-1/2 mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
            <h2 className="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
              <span className="block text-6xl">I am Alexis</span>
              <span className="flex-col text-indigo-500">
                A front end developper <br /> A backend developper
              </span>
            </h2>
            <p className=" mt-4 max-w-md mx-auto text-gray-400">
              I had noticed that both in the very poor and very rich extremes of
              society the mad were often allowed to mingle freely
            </p>

            <div className="lg:mt-0 lg:flex-shrink-0">
              <div className="mt-12 inline-flex rounded-md shadow">
                <Link to="/Knowledge">
                  <div
                    type="button"
                    className="py-4 px-6  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                  >
                    <span>Learn more</span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <img src={Bonome} alt="bonome" className="w-1/2 " />
        </div>
      </div>
      <div className="pt-20 text-center">
        <div>
          <div className="title font-bold text-lg">
            <h2>What i do</h2>
          </div>
          <div className="flex justify-center  gap-4 p-5">
            <div className="w-1/3 p-5 text-black bg-white dark:bg-gray-800 rounded-xl shadow-lg shadow-indigo-500/50">
              <h2>Front end Developpement</h2>
              <p className="pt-4">
                I make all the front end with React and Tailwind CSS.
              </p>
            </div>
            <div className="w-1/3 p-5 text-black bg-white dark:bg-gray-800 rounded-xl shadow-lg shadow-indigo-500/50">
              <h2>Wed Design (A little)</h2>
              <p className="pt-4">
                I make basic design for website inspired by existent design. I
                am not a web designer but i try to make my best.
              </p>
            </div>
            <div className="w-1/3 p-5 text-black bg-white dark:bg-gray-800 rounded-xl shadow-lg shadow-indigo-500/50">
              <h2>Back end Developpement</h2>
              <p className="pt-4">
                I make all the back end and create the api between the front and
                the back to make dynamic website.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

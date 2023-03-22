import React, { useRef } from "react"

import emailjs from "@emailjs/browser"

export default function Contact() {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        "Portfolio",
        "template_fij95ni",
        form.current,
        "sGw-WU47jGt-GTBq2"
      )
      .then(
        (result) => {
          console.log(result.text)
        },
        (error) => {
          console.log(error.text)
        }
      )
  }
  return (
    <div id="Contact">
      <section className="body-font min-h-screen relative ">
        <div className="container px-5 py-24 mx-auto ">
          <div className="flex flex-col text-center w-full mb-12">
            <h2 className="sm:text-3xl text-3xl font-medium title-font mb-4 ">
              Contact Me
            </h2>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base ">
              Let's work together
            </p>
          </div>
          <form
            ref={form}
            onSubmit={sendEmail}
            className="lg:w-1/2 md:w-2/3 mx-auto"
          >
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="name"
                    className="leading-7 text-sm
                  "
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="user_name"
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none t py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    required
                    placeholder=" Your name"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="email"
                    className="leading-7 text-sm 
                    "
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="user_email"
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none  py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    required
                    placeholder=" Your name"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label htmlFor="message" className="leading-7 text-sm ">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder=" Your name"
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 h-32 text-base outline-none  py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <button
                  type="submit"
                  value="Send"
                  className="flex mx-auto btn  border-0 py-2 px-8 focus:outline-none rounded text-lg"
                >
                  <span>Send</span>
                </button>
              </div>
              <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                <a href="mailto:alexisnoukan@gmail.com">
                  alexisnoukan@gmail.com
                </a>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  )
}

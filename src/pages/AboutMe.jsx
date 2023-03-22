import React from "react"
import Picture from "../assets/about/picture.jpg"

const AboutMe = () => {
  return (
    <section id="About" className="min-h-screen">
      <div className="hero ">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={Picture}
            className="md:max-w-sm rounded-lg shadow-2xl"
            alt="me"
          />
          <div>
            <h2 className="text-5xl font-bold">Alexis Noukan</h2>
            <p className="py-6">
              Hello,
              <br />I am Alexis a Fullstack Software Developper.
              <br />I am passionate about nexw technologie ang programing.
            </p>
            <a href="#Contact" className="btn btn-primary w-80">
              Contact
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe

import React from "react"

const Hero = () => {
  return (
    <div>
      <section className="flex flex-wrap justify-center dark:text-white">
        <h1 className="font-semibold lg:text-7xl text-4xl lg:mt-16 mt-10 lg:mx-44 mx-8 text-center">
          Welcome to{" "}
          <span className="text-green-600 dark:text-[#00FF85] font-semibold">
            Talo
          </span>
          , Your Job Search Companion
        </h1>
        <h3 className="font-medium lg:text-2xl text-sm lg:pt-11 mt-6 lg:px-48 px-6 text-center">
          Hey there, job seeker!
          <br />
          <br />
          Are you feeling overwhelmed by the endless job applications,
          repetitive data entry, and the constant struggle to keep track of
          everything? 😓 I've been there too, and it's no fun. That's why I'm
          excited to introduce you to Talo, the job search platform that's
          designed to make your life easier
        </h3>
        {/* <img src={Vid} alt="" className="pt-20 h-96 w-auto" /> */}
      </section>
    </div>
  )
}

export default Hero

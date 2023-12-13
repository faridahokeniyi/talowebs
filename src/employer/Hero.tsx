import React from "react"

const Hero = () => {
  return (
    <div>
      <section className="flex flex-wrap justify-center">
        <h1 className="font-semibold lg:text-7xl text-4xl lg:mt-16 mt-10 lg:mx-20 mx-8 text-center">
          Welcome to
          <span className="text-green-600 font-semibold">Talo's</span> Employer
          Hub: Your Gateway to Talent Excellence
        </h1>
        <h3 className="font-medium lg:text-2xl text-sm lg:pt-11 mt-6 lg:px-48 px-6 text-center">
          At Talo, we understand that finding the right talent is crucial for
          your business's success. That's why we've created a tailored space
          just for employers - a hub where efficiency meets excellence in
          recruitment.
        </h3>
        {/* <img src={Vid} alt="" className="pt-20 h-96 w-auto" /> */}
      </section>
    </div>
  )
}

export default Hero

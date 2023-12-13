import React from "react"

const JoinTalo = () => {
  return (
    <div>
      <section className="bg-blue-900 lg:px-36 p-4 m-4 lg:py-20 lg:m-20 rounded-3xl w-11/12">
        <h2 className="text-blue-50 lg:text-5xl text-2xl font-semibold lg:text-center lg:mb-10">
          Ready to Transform Your Hiring Experience? Join Talo's Employer Hub
          Today!
        </h2>
        <h3 className="text-blue-200 lg:text-xl text-lg my-3 font-medium leading-7 lg:text-center lg:px-10 lg:mb-10">
          Elevate your hiring process with Talo's powerful tools and insights.
          Sign up for Talo's Employer Hub and discover a new era of talent
          acquisition.
        </h3>
        <div className="flex justify-center lg:mb-0 mb-20">
          <input
            type="text"
            placeholder="johndoe@gmail.com"
            className="bg-green-100 lg:w-80 w-48 lg:px-6 px-4 py-4 rounded-xl mr-4 placeholder:text-green-800"
          />
          <button className="bg-green-700 lg:px-6 px-3 py-4 lg:rounded-xl rounded-full">
            <a href="#features" className="text-white px-2 font-medium">
              Submit
            </a>
          </button>
        </div>
      </section>
      <div className="bg-green-900 lg:bg-green-700 lg:px-16 lg:py-5 rounded-xl m-4 p-4 lg:mx-36 mb-20">
        <h3 className="text-white lg:text-2xl text-xl font-medium text-center">
          Empower your hiring process. Empower your team. Talo – Where
          Exceptional Talent Meets Opportunity.
        </h3>
      </div>
    </div>
  )
}

export default JoinTalo

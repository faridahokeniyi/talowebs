import React from "react"

const WhyTalo = () => {
  return (
    <div>
      <section className="lg:grid lg:grid-cols-2 lg:p-20 p-6 items-center">
        <div>
          <h4 className="font-normal lg:text-lg text-base text-gray-400 pb-2">
            ADVANTAGES
          </h4>
          <h2 className="font-bold lg:text-5xl text-4xl pb-6">Why Talo?</h2>
          <h3 className="font-medium lg:text-2xl text-xl lg:text-green-700 text-gray-950">
            Talo offers a suite of features designed to simplify and elevate
            your hiring process.
          </h3>
        </div>
        <div>
          <img src="/3phones.png" alt="" />
        </div>
      </section>
    </div>
  )
}

export default WhyTalo

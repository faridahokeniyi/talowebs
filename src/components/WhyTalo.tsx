import React from "react"

const WhyTalo = () => {
  return (
    <section className="lg:grid lg:grid-cols-2 lg:p-20 p-6 items-center">
      <div>
        <h4 className="font-normal lg:text-lg text-base text-gray-400 dark:text-indigo-300 pb-2">
          ADVANTAGES
        </h4>
        <h2 className="font-bold lg:text-5xl text-4xl pb-6 dark:text-white">
          Why Talo?
        </h2>
        <h3 className="font-medium lg:text-2xl text-xl dark:text-emerald-300 lg:text-green-700 text-gray-950">
          I get it – job hunting can be a maze. That's why Talo, my brainchild,
          is designed to simplify your job search. It's not just a platform;
          it's your personalized guide to landing that dream job.
        </h3>
        <button className="lg:bg-gray-950 bg-green-900 dark:bg-teal-50  rounded-full flex w-max lg:mt-16 mt-8">
          <a
            href="/signup"
            className="text-green-50 dark:text-green-900 py-4 px-16 text-lg font-medium"
          >
            Learn More
          </a>
        </button>
      </div>
      <div>
        <img src="/3phones.png" alt="" />
      </div>
    </section>
  )
}

export default WhyTalo

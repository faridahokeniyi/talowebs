import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"

import "./styles.css"

// import required modules
import { Autoplay, Pagination } from "swiper/modules"

const WhyEmployers = () => {
  return (
    <div>
      <section className="lg:px-20 m-4 flex flex-wrap justify-center">
        <div className="flex flex-col lg:items-center lg:mb-11">
          <h4 className="text-lg lg:text-gray-300 text-gray-600 dark:text-indigo-300">
            ADVANTAGES
          </h4>
          <h2 className="lg:text-5xl text-3xl dark:text-white font-semibold lg:text-center text-left leading-snug lg:mb-5">
            Why Employers <br />
            Choose Talo
          </h2>
          <h4 className="lg:text-2xl text-lg font-medium text-green-800 dark:text-emerald-300 lg:text-center lg:px-11">
            But wait, there's more! Talo isn't just about you; it's a win-win
            for employers too. Introducing
            <span className="font-semibold text-gray-900 dark:text-white">
              Talo Hr
            </span>{" "}
            – making hiring a breeze for companies lucky enough to have you
            apply.
          </h4>
        </div>
        <div className="lg:grid lg:grid-cols-3 hidden mb-11 text-center">
          <article className="">
            <h3 className="font-semibold text-3xl text-green-800 dark:text-emerald-500 mb-3">
              Reduced Recruitment Time
            </h3>
            <h3 className="font-medium text-2xl dark:text-white">
              Your skills deserve swift recognition. Talo streamlines the
              process, ensuring employers recognize your potential faster. Time
              is money.
            </h3>
          </article>
          <article className="">
            <h3 className="font-semibold text-3xl text-green-800 dark:text-emerald-500 mb-3">
              Efficient Candidate Management
            </h3>
            <h3 className="font-medium text-2xl dark:text-white">
              Employers, say hello to an organized inbox! Easily sift through
              applications and discover your talents without the usual hiring
              chaos.
            </h3>
          </article>
          <article className="">
            <h3 className="font-semibold text-3xl text-green-800 dark:text-emerald-500 mb-3">
              Enhanced Candidate Quality
            </h3>
            <h3 className="font-medium text-2xl dark:text-white">
              Thanks to Talo's AI magic, your application stands out to
              employers looking for someone just like you. Tailored matches mean
              more opportunities.
            </h3>
          </article>
        </div>
        <div className="lg:hidden bg-green-900 rounded-2xl m-4 p-4 h-max w-full">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            // pagination={{
            //   clickable: true,
            // }}
            modules={[Autoplay, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div>
                <h3 className="font-semibold text-3xl text-green-300 mb-3">
                  Reduced Recruitment Time
                </h3>
                <h3 className="font-medium text-2xl text-white">
                  Your skills deserve swift recognition. Talo streamlines the
                  process, ensuring employers recognize your potential faster.
                  Time is money.
                </h3>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <h3 className="font-semibold text-3xl text-green-300 mb-3">
                  Efficient Candidate Management
                </h3>
                <h3 className="font-medium text-2xl text-white">
                  Employers, say hello to an organized inbox! Easily sift
                  through applications and discover your talents without the
                  usual hiring chaos.
                </h3>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="">
                <h3 className="font-semibold text-3xl text-green-300 mb-3">
                  Enhanced Candidate Quality
                </h3>
                <h3 className="font-medium text-2xl text-white">
                  Thanks to Talo's AI magic, your application stands out to
                  employers looking for someone just like you. Tailored matches
                  mean more opportunities.
                </h3>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <button className="lg:bg-gray-900 bg-green-900 dark:bg-teal-50 px-16 py-4 flex items-center rounded-full mb-20">
          <a
            href="/employer"
            className="text-green-50 dark:text-green-900 mr-2"
          >
            Are you an employer?
          </a>
          {/* <Image src="Assets/arrowGrey.svg" alt="" height="16" width="16" /> */}
        </button>
      </section>
    </div>
  )
}

export default WhyEmployers

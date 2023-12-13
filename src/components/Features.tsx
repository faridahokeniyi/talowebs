import React from "react"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"

import "./styles.css"

// import required modules
import { Autoplay, Pagination } from "swiper/modules"

const Features = () => {
  return (
    <section
      id="features"
      className="lg:grid lg:grid-cols-2 py-16 px-9 m-10 rounded-3xl bg-gray-950 dark:bg-white"
    >
      <div className="flex flex-wrap content-between">
        <div>
          <h2 className="text-green-50 dark:text-slate-950 font-semibold lg:text-6xl text-4xl">
            Key Features
          </h2>
          <h4 className="text-green-50 dark:text-slate-950 font-medium text-base leading-5 lg:pr-64 pt-5">
            Talo is a job search platform that helps job seekers and employers
            alike. For job seekers, Talo offers a centralized job application
            tracking system, streamlined application process, and AI assistance.
          </h4>
        </div>
        <div className="bg-green-50 h-40 w-40 rounded-full lg:flex items-center justify-center hidden">
          <img src="./ArrowB.svg" alt="" className="h-10 w-auto" />
        </div>
      </div>
      <div className="lg:grid lg:grid-cols-2 hidden gap-3">
        <div>
          <h2 className="font-semibold text-5xl text-green-50 dark:text-slate-950">
            01
          </h2>
          <h3 className="font-semibold text-2xl text-green-500 dark:text-green-700 pt-2">
            Job Application Tracking
          </h3>
          <h4 className="font-medium text-lg text-green-50 dark:text-slate-950 leading-6 pt-2">
            No more juggling between platforms. With Talo, effortlessly track
            your applications' progress, giving you peace of mind and control.
          </h4>
        </div>
        <div>
          <h2 className="font-semibold text-5xl text-green-50 dark:text-slate-950">
            02
          </h2>
          <h3 className="font-semibold text-2xl text-green-500 dark:text-green-700 pt-2">
            Streamlined Application Process
          </h3>
          <h4 className="font-medium text-lg text-green-50 dark:text-slate-950 leading-6 pt-2">
            Say goodbye to repetitive data entry headaches. Talo's smart
            features handle the details, so you can focus on what matters –
            showcasing your skills.
          </h4>
        </div>
        <div className="pt-4">
          <h2 className="font-semibold text-5xl text-green-50 dark:text-slate-950">
            03
          </h2>
          <h3 className="font-semibold text-2xl text-green-500 dark:text-green-700 pt-2">
            AI Assistance
          </h3>
          <h4 className="font-medium text-lg text-green-50 dark:text-slate-950 leading-6 pt-2">
            Think of it as your personal career coach. Talo's AI provides
            tailored feedback, helping you refine your applications and stand
            out from the crowd.
          </h4>
        </div>
      </div>
      <div className="lg:hidden">
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
              <h2 className="font-semibold text-5xl text-green-50 dark:text-slate-950">
                01
              </h2>
              <h3 className="font-semibold text-2xl text-green-500 dark:text-green-700 pt-2">
                Job Application Tracking
              </h3>
              <h4 className="font-medium text-lg text-green-50 dark:text-slate-950 leading-6 pt-2">
                No more juggling between platforms. With Talo, effortlessly
                track your applications' progress, giving you peace of mind and
                control.
              </h4>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <h2 className="font-semibold text-5xl text-green-50 dark:text-slate-950">
                02
              </h2>
              <h3 className="font-semibold text-2xl text-green-500 dark:text-green-700 pt-2">
                Streamlined Application Process
              </h3>
              <h4 className="font-medium text-lg text-green-50 dark:text-slate-950 leading-6 pt-2">
                Say goodbye to repetitive data entry headaches. Talo's smart
                features handle the details, so you can focus on what matters –
                showcasing your skills.
              </h4>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="">
              <h2 className="font-semibold text-5xl text-green-50 dark:text-slate-950">
                03
              </h2>
              <h3 className="font-semibold text-2xl text-green-500 dark:text-green-700 pt-2">
                AI Assistance
              </h3>
              <h4 className="font-medium text-lg text-green-50 dark:text-slate-950 leading-6 pt-2">
                Think of it as your personal career coach. Talo's AI provides
                tailored feedback, helping you refine your applications and
                stand out from the crowd.
              </h4>
            </div>
          </SwiperSlide>
          <div className="swiper-pagination"></div>
        </Swiper>
      </div>
    </section>
  )
}

export default Features

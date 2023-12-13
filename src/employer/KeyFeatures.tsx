import React from "react"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"

// import required modules
import { Autoplay, Pagination } from "swiper/modules"

const KeyFeatures = () => {
  return (
    <div>
      {" "}
      <section
        id="features"
        className="lg:grid lg:grid-cols-2 py-16 px-9 m-10 rounded-3xl bg-gray-950"
      >
        <div className="flex flex-wrap content-between">
          <div>
            <h2 className="text-green-50 font-semibold lg:text-6xl text-4xl">
              Key Features
            </h2>
            <h4 className="text-green-50 font-medium text-base leading-5 lg:pr-64 pt-5">
              Talo is a job search platform that helps job seekers and employers
              alike. For job seekers, Talo offers a centralized job application
              tracking system, streamlined application process, and AI
              assistance.
            </h4>
          </div>
          <div className="bg-green-50 h-40 w-40 rounded-full lg:flex items-center justify-center hidden">
            <img src="./ArrowB.svg" alt="" className="h-10 w-auto" />
          </div>
        </div>
        <div className="lg:grid lg:grid-cols-2 hidden gap-3">
          <div>
            <h2 className="font-semibold text-5xl text-green-50">01</h2>
            <h3 className="font-semibold text-2xl text-green-600 pt-2">
              Effective Candidate Management
            </h3>
            <h4 className="font-medium text-lg text-green-50 leading-6 pt-2">
              Talo provides a centralized dashboard where you can effortlessly
              manage and review candidate applications. Say goodbye to
              information overload; with Talo, organization is key.
            </h4>
          </div>
          <div>
            <h2 className="font-semibold text-5xl text-green-50">02</h2>
            <h3 className="font-semibold text-2xl text-green-600 pt-2">
              Enhanced Candidate Quality
            </h3>
            <h4 className="font-medium text-lg text-green-50 leading-6 pt-2">
              Talo's AI-driven feedback loop ensures that you receive
              applications tailored to your specific requirements. Say hello to
              a pool of candidates whose skills align perfectly with your
              company's needs.
            </h4>
          </div>
          <div className="pt-4">
            <h2 className="font-semibold text-5xl text-green-50">03</h2>
            <h3 className="font-semibold text-2xl text-green-600 pt-2">
              Reduced Recruitment Time
            </h3>
            <h4 className="font-medium text-lg text-green-50 leading-6 pt-2">
              Time is of the essence in hiring. Talo's streamlined processes
              empower you to make faster, informed decisions. Your next
              top-performer might be just a click away.
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
                <h2 className="font-semibold text-5xl text-green-50">01</h2>
                <h3 className="font-semibold text-2xl text-green-600 pt-2">
                  Effective Candidate Management
                </h3>
                <h4 className="font-medium text-lg text-green-50 leading-6 pt-2">
                  Talo provides a centralized dashboard where you can
                  effortlessly manage and review candidate applications. Say
                  goodbye to information overload; with Talo, organization is
                  key.
                </h4>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <h2 className="font-semibold text-5xl text-green-50">02</h2>
                <h3 className="font-semibold text-2xl text-green-600 pt-2">
                  Enhanced Candidate Quality
                </h3>
                <h4 className="font-medium text-lg text-green-50 leading-6 pt-2">
                  Talo's AI-driven feedback loop ensures that you receive
                  applications tailored to your specific requirements. Say hello
                  to a pool of candidates whose skills align perfectly with your
                  company's needs.
                </h4>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="">
                <h2 className="font-semibold text-5xl text-green-50">03</h2>
                <h3 className="font-semibold text-2xl text-green-600 pt-2">
                  Reduced Recruitment Time
                </h3>
                <h4 className="font-medium text-lg text-green-50 leading-6 pt-2">
                  Time is of the essence in hiring. Talo's streamlined processes
                  empower you to make faster, informed decisions. Your next
                  top-performer might be just a click away.
                </h4>
              </div>
            </SwiperSlide>
            <div className="swiper-pagination"></div>
          </Swiper>
        </div>
      </section>
    </div>
  )
}

export default KeyFeatures

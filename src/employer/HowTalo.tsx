import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"

// import required modules
import { Autoplay, Pagination } from "swiper/modules"

const HowTalo = () => {
  return (
    <div>
      <section className="lg:px-20 m-4 flex flex-wrap justify-center">
        <div className="flex flex-col lg:items-center lg:mb-11">
          <h4 className="text-lg lg:text-gray-300 text-gray-600">ADVANTAGES</h4>
          <h2 className="lg:text-5xl text-3xl font-semibold lg:text-center text-left leading-snug lg:mb-5">
            How Talo Works <br /> for Employers
          </h2>
          <h4 className="lg:text-2xl text-lg font-medium text-green-800 lg:text-center lg:px-11">
            Create an account to access Talo's powerful suite of
            employer-focused features. It's quick, easy, and the first step
            toward transforming your hiring experience.
          </h4>
        </div>
        <div className="lg:grid lg:grid-cols-3 hidden mb-11 text-center">
          <article className="">
            <h3 className="font-semibold text-3xl text-green-800 mb-3">
              Effortless Candidate Review
            </h3>
            <h3 className="font-medium text-2xl">
              Talo's intuitive interface allows you to efficiently sift through
              applications. No more drowning in a sea of resumes – easily
              navigate and evaluate applicants with precision.
            </h3>
          </article>
          <article className="">
            <h3 className="font-semibold text-3xl text-green-800 mb-3">
              Real-time Application Tracking
            </h3>
            <h3 className="font-medium text-2xl">
              Stay in the know with Talo's real-time application tracking.
              Monitor the status and progress of each application, ensuring you
              never miss a potential match.
            </h3>
          </article>
          <article className="">
            <h3 className="font-semibold text-3xl text-green-800 mb-3">
              AI-Enhanced Hiring
            </h3>
            <h3 className="font-medium text-2xl">
              Talo's AI assistance doesn't stop at candidates; it extends to
              employers too. Receive insights and recommendations to fine-tune
              your recruitment strategy, ensuring your team is as exceptional as
              your company.
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
                  Effortless Candidate Review
                </h3>
                <h3 className="font-medium text-2xl text-white">
                  Talo's intuitive interface allows you to efficiently sift
                  through applications. No more drowning in a sea of resumes –
                  easily navigate and evaluate applicants with precision.
                </h3>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <h3 className="font-semibold text-3xl text-green-300 mb-3">
                  Real-time Application Tracking
                </h3>
                <h3 className="font-medium text-2xl text-white">
                  Stay in the know with Talo's real-time application tracking.
                  Monitor the status and progress of each application, ensuring
                  you never miss a potential match.
                </h3>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="">
                <h3 className="font-semibold text-3xl text-green-300 mb-3">
                  AI-Enhanced Hiring
                </h3>
                <h3 className="font-medium text-2xl text-white">
                  Talo's AI assistance doesn't stop at candidates; it extends to
                  employers too. Receive insights and recommendations to
                  fine-tune your recruitment strategy, ensuring your team is as
                  exceptional as your company.
                </h3>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <button className="lg:bg-gray-900 bg-green-900 px-16 py-4 flex items-center rounded-full mb-20">
          <a href="/employer" className="text-green-50 mr-2">
            Sign up for our waitlist
          </a>
          {/* <Image src="Assets/arrowGrey.svg" alt="" height="16" width="16" /> */}
        </button>
      </section>
    </div>
  )
}

export default HowTalo

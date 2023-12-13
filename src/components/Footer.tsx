import React from "react"

const Footer = () => {
  return (
    <div>
      <footer className="lg:bg-black lg:px-16 lg:py-10 px-4 py-5">
        <section className="p-6 rounded-2xl lg:grid lg:grid-cols-4 flex flex-col gap-8 lg:items-center bg-zinc-900">
          <div className="bg-green-400 rounded-md px-9 py-4 flex w-max h-min">
            <img
              src="/Vector.svg"
              alt="logo"
              height={15}
              width={35}
              className="mr-1"
            />
            <img src="/Talo.svg" alt="" height={35} width={35} />
          </div>
          <h4 className="text-gray-500 text-lg">
            ©2023 Talo inc. <br />
            All rights reserved.
          </h4>
          <div className="flex">
            <img
              src="/twitter.png"
              alt=""
              height="40"
              width="40"
              className="mr-4"
            />
            <img
              src="/linkedin.png"
              alt=""
              height="40"
              width="40"
              className="mr-4"
            />
            <img
              src="/instagram.png"
              alt=""
              height="40"
              width="40"
              className="mr-4"
            />
          </div>
          <div className="flex justify-around lg:mt-0 mt-12">
            <a href="#features" className="font-medium text-white">
              About Us
            </a>
            <a href="#features" className="font-medium text-white">
              What We Do
            </a>
            <a href="/employer" className="font-medium text-white">
              Talo Hr
            </a>
          </div>
        </section>
      </footer>
    </div>
  )
}

export default Footer

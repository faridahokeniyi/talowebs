import React, { useState } from "react"

const SignUp = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "#features", label: "About Us" },
    { href: "#features", label: "What We Do" },
    { href: "/employer", label: "Talo Hr" },
  ]
  return (
    <div className="bg-slate-950 w-screen h-screen">
      <div>
        <nav className="grid lg:grid-cols-3 grid-cols-2 lg:h-24  lg:m-0 p-6 items-center lg:px-20">
          <div className="bg-green-300 rounded-md lg:px-9 lg:py-4 p-4 flex w-max">
            <img
              src="/Vector.svg"
              alt="logo"
              height={15}
              width={35}
              className="mr-1"
            />
            <img src="/Talo.svg" alt="" height={35} width={35} />
          </div>
          <div
            onClick={() => {
              setIsMenuOpen(!isMenuOpen)
            }}
            className="lg:hidden justify-self-end bg-[#AEC6E5] rounded-md px-2 py-2 flex w-max"
          >
            <img src="/Hamburger.svg" height={40} width={40} alt="menu" />
          </div>
          <div className="lg:flex lg:justify-around hidden">
            <a
              href="/"
              className="text-green-600 dark:text-emerald-400 font-semibold"
            >
              Home
            </a>
            <a href="#features" className="font-medium dark:text-white">
              About Us
            </a>
            <a href="#features" className="font-medium dark:text-white">
              What We Do
            </a>
            <a href="/employer" className="font-medium dark:text-white">
              Talo Hr
            </a>
          </div>
          <div className="lg:flex justify-self-end hidden">
            <button className="bg-green-900 dark:bg-green-200 rounded-full w-max flex">
              <a
                href="/signup"
                className="text-white dark:text-green-900 px-16 py-3"
              >
                Sign Up
              </a>
            </button>
          </div>
        </nav>
        {isMenuOpen && (
          <div className="lg:hidden w-full">
            <nav className="fixed top-0 right-0 left-0 bottom-0 lg:bottom-auto bg-slate-900  ">
              <div className="flex m-6 items-center">
                <div className="bg-green-300 rounded-md p-4 flex w-max">
                  <img
                    src="/Vector.svg"
                    alt="logo"
                    height={15}
                    width={35}
                    className="mr-1"
                  />
                  <img src="/Talo.svg" alt="" height={30} width={35} />
                </div>
                <div
                  className="hidden max-lg:block fixed right-0  px-8 py-4 cursor-pointer"
                  onClick={() => {
                    setIsMenuOpen(!isMenuOpen)
                  }}
                >
                  <img src="/close.svg" height={40} width={40} alt="menu" />
                </div>
              </div>
              <div className="flex justify-center py-12">
                <img src="/lineW.svg" alt="" className="w-11/12" />
              </div>
              <div className="flex justify-center">
                <ul className=" lg:hidden flex flex-col text-white w-11/12 px-6">
                  {navLinks.map((item) => (
                    <li
                      key={item.label}
                      className="flex items-center justify-between py-4"
                    >
                      <a href={item.href} className="font-medium text-lg">
                        {item.label}
                      </a>
                      <img src="/ArrowS.svg" alt="" className="h-4" />
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex justify-center py-12">
                <img src="/lineW.svg" alt="" className="w-11/12" />
              </div>
              <div className="mx-8">
                <button className="bg-green-200 rounded-full w-max flex">
                  <a href="/signup" className="font-medium text-lg px-16 py-3">
                    Sign Up
                  </a>
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
      <section className="lg:p-14 p-4 bg-[#011733] lg:grid lg:grid-cols-2 gap-8 lg:m-8 m-4 rounded-3xl text-white">
        <div>
          <h1 className="text-3xl font-semibold mb-3">
            Sign Up for Early Access
          </h1>
          <h5 className="text-sm">Hello! Please enter your details</h5>
          <div className="lg:grid lg:grid-cols-2 gap-4 flex flex-col my-12">
            <div className="flex flex-col">
              <label htmlFor="">First Name</label>
              <input
                type="text"
                name="name"
                placeholder="John"
                className="bg-[#04234D] border-[#749ACC] w-full p-3 rounded-lg mr-4 placeholder:text-[#4876B3]"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="">Last Name</label>
              <input
                type="text"
                name="name"
                placeholder="Doe"
                className="bg-[#04234D] border-[#749ACC] w-full p-3 rounded-lg mr-4 placeholder:text-[#4876B3]"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="">Email</label>
              <input
                type="email"
                name="name"
                placeholder="muzzamil@talo.com"
                className="bg-[#04234D] border-[#749ACC] w-full p-3 rounded-lg mr-4 placeholder:text-[#4876B3]"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="">Phone Number</label>
              <input
                type="text"
                name="name"
                placeholder="+234 000 000"
                className="bg-[#04234D] border-[#749ACC] w-full p-3 rounded-lg mr-4 placeholder:text-[#4876B3]"
              />
            </div>
          </div>
          <div className="flex mb-6">
            <input type="checkbox" name="" className="mr-2" />
            <h2>Receive email alerts</h2>
          </div>
          <button className="bg-green-700 py-2 rounded-xl w-full">
            <a href="#features" className="text-white px-2 font-medium">
              Sign Up
            </a>
          </button>
        </div>
        <div className="bg-green-100 hidden lg:flex h-full w-full text-black rounded-xl"></div>
      </section>
    </div>
  )
}

export default SignUp

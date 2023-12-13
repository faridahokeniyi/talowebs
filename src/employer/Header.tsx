import React, { useState } from "react"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "#features", label: "About Us" },
    { href: "#features", label: "What We Do" },
    { href: "/", label: "Talo Jobs" },
  ]
  return (
    <div>
      <nav className="grid lg:grid-cols-3 grid-cols-2 lg:h-24 lg:m-0 m-6 items-center lg:px-20">
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
          className="lg:hidden justify-self-end bg-indigo-300 rounded-md px-2 py-2 flex w-max"
          onClick={() => {
            setIsMenuOpen(!isMenuOpen)
          }}
        >
          <img src="/Hamburger.svg" height={40} width={40} alt="menu" />
        </div>
        <div className="lg:flex lg:justify-around hidden">
          <a href="/" className="text-green-600 font-semibold">
            Home
          </a>
          <a href="#features" className="font-medium">
            About Us
          </a>
          <a href="#features" className="font-medium">
            What We Do
          </a>
          <a href="/" className="font-medium">
            Talo Jobs
          </a>
        </div>
        <div className="lg:flex justify-self-end hidden">
          <button className="bg-green-900 rounded-full w-max flex">
            <a href="/signup" className="text-green-50 px-16 py-3">
              Sign Up
            </a>
          </button>
        </div>
      </nav>
      {isMenuOpen && (
        <div className="lg:hidden">
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
                    <img src="/arrowNav.svg" alt="" className="h-4" />
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
  )
}

export default Header

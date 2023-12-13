import React from "react"

const SignUp = () => {
  return (
    <div className="bg-slate-950 w-screen h-screen">
      <nav className="grid lg:grid-cols-3 grid-cols-2 h-24 items-center lg:px-20 px-6">
        <div className="bg-green-400 rounded-md lg:px-9 lg:py-4 py-2 px-4 flex w-max">
          <img
            src="/Vector.svg"
            alt="logo"
            height={15}
            width={35}
            className="mr-1"
          />
          <img src="/Talo.svg" alt="" height={35} width={35} />
        </div>
        <div className="lg:hidden justify-self-end bg-blue-100 rounded-md px-2 py-2 flex w-max">
          <img src="/Hamburger.svg" height={40} width={40} alt="menu" />
        </div>
        <div className="lg:flex lg:justify-around hidden">
          <a href="/" className="text-green-600 font-semibold">
            Home
          </a>
          <a href="#features" className="font-medium text-green-50">
            About Us
          </a>
          <a href="#features" className="font-medium text-green-50">
            What We Do
          </a>
          <a href="#features" className="font-medium text-green-50">
            Talo Hr
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

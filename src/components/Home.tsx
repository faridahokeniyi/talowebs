import React from "react"
import Header from "./Header"
import Hero from "./Hero"
import WhyTalo from "./WhyTalo"
import Features from "./Features"
import WhyEmployers from "./WhyEmployers"
import JoinTalo from "./JoinTalo"
import Footer from "./Footer"

const Home = () => {
  return (
    <div
      className="dark:bg-slate-950 bg-[#F5F9FF] lg:bg-[#fafffb]"
      style={{
        backgroundImage:
          'url("/RectangleL.png"), url("/GlowsL.png"), url("/StarsL.png")',
        backgroundSize: "cover, cover, cover",
        backgroundRepeat: "no-repeat, no-repeat, no-repeat",
        backgroundBlendMode: "soft-light, normal, normal",
      }}
    >
      <Header />
      <main>
        <Hero />
        <WhyTalo />
        <Features />
        <WhyEmployers />
        <JoinTalo />
      </main>
      <Footer />
    </div>
  )
}

export default Home

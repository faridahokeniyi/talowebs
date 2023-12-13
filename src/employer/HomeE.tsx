import React from "react"
import Header from "./Header"
import Hero from "./Hero"
import WhyTalo from "./WhyTalo"
import KeyFeatures from "./KeyFeatures"
import HowTalo from "./HowTalo"
import UnlockTalo from "./UnlockTalo"
import JoinTalo from "./JoinTalo"
import Footer from "./Footer"

const HomeE = () => {
  return (
    <div className="dark:bg-slate-950">
      <Header />
      <main>
        <Hero />
        <WhyTalo />
        <KeyFeatures />
        <HowTalo />
        <UnlockTalo />
        <JoinTalo />
      </main>
      <Footer />
    </div>
  )
}

export default HomeE

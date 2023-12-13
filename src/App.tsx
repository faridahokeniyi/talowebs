import React, { useEffect } from "react"
import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import SignUp from "./components/SignUp"
import HomeE from "./employer/HomeE"
function App() {
  // const [theme, setTheme] = useState(null)
  // useEffect(() => {
  //   if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
  //     setTheme("dark")
  //   } else {
  //     setTheme("light")
  //   }
  // }, [])
  // useEffect(() => {
  //   if (theme === "dark") {
  //     document.documentElement.classList.add("dark")
  //   } else {
  //     document.documentElement.classList.remove("dark")
  //   }
  // }, [theme])
  // const themeSwitch = () => {
  //   setTheme(theme === "dark" ? "light" : "dark")
  // }
  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  })
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/employer" element={<HomeE />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App

import About from "./components/About"
import Home from "./components/Home"
import NavigationBar from "./components/NavigationBar"
import Skills from "./components/Skills"
import Work from "./components/Work"
import Contact from "./components/Contact"

function App() {

  return (
    <div>
      <NavigationBar />
      <Home />
      {/* <About /> */}
      <Work />
      <Skills />
      <Contact />
    </div>
  )
}

export default App

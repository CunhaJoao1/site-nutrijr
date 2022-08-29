import { About } from "./components/About/About"
import { Header } from "./components/header/Header"
import { Home } from "./components/home/home"
import { Services } from "./components/Services/Services"

function App() {
  return (
    <div className="relative">
      <Header></Header>
      <Home></Home>
      <About/>
      <Services/>
    </div>
  )
}

export default App

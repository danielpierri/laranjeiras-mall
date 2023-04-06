import React from "react"
import { Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import Stores from "./pages/Stores"
import Food from "./pages/Food"
import Services from "./pages/Services"
import Contact from "./pages/Contact"
import History from "./pages/History"

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={ <Home />} />
        <Route path="/lojas" element={ <Stores />} />
        <Route path="/servicos" element={ <Services />} />
        <Route path="/alimentacao" element={ <Food />} />
        <Route path="/contato" element={ <Contact />} />
        <Route path="/nossa-historia" element={ <History />} />
      </Routes>
    </div>
  )
}

export default App

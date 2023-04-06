import React from "react"
import { NavLink } from "react-router-dom"
import logo from "../img/lj-mall-logo-2.jpg"
import logoTitle from "../img/lj-mall-title-2.jpg"

export default function Navbar() {
  return (
    <div>
      <nav>
        <div className="nav__logo__container">
          <img src={logo} alt="Laranjeiras Mall logo" className="nav__logo" />
          <img src={logoTitle} alt="Laranjeiras Mall logo" className="nav__logo-title" />
        </div>
        <div>
          <p className="nav__opening-hours">Horário de Funcionamento</p>
        </div>
        <ul className="nav__list">
          <li><NavLink to="/lojas" className={() => "nav__link"}>Lojas</NavLink></li>
          <li><NavLink to="/servicos" className={() => "nav__link"}>Serviços</NavLink></li>
          <li><NavLink to="/" className={() => "nav__link"}>Home</NavLink></li>
          <li><NavLink to="/alimentacao" className={() => "nav__link"}>Alimentação</NavLink></li>
          <li><NavLink to="/contato" className={() => "nav__link"}>Contato</NavLink></li>
          <li><NavLink to="/nossa-historia" className={() => "nav__link"}>Nossa História</NavLink></li>
        </ul>
      </nav>
    </div>
  )
}
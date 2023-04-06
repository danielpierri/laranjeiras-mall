import React from "react"
import Navbar from "./Navbar"
import ImageSlider from "./ImageSlider"
import { SliderData } from "./SliderData"

export default function Home() {
  return (
    <div className="home__bg">
      <div className="home">
        <Navbar />
        <div className="slider__container">
          <ImageSlider slides={SliderData} />
        </div>
        <div className="home__info">
        </div>
        <div>
          <p>Endereço</p>
        </div>
      </div>
    </div>
  )
}
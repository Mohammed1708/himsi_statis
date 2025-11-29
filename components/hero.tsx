"use client"

import { useEffect, useState } from "react"

interface Slide {
  id: number
  image: string
  alt: string
}

const slides: Slide[] = [
  { id: 1, image: "/walpaperhero.png", alt: "BUMC Medical Center" },
  { id: 2, image: "/bannerweb2.png", alt: "Paket Vaksin Umrah" },
]

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <section id="home" className="relative w-full overflow-hidden">
      {/* Slides */}
      <div className="relative w-full h-auto">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`w-full transition-opacity duration-500 ease-in-out ${
              index === currentSlide 
                ? "opacity-100 block" 
                : "opacity-0 absolute top-0 left-0"
            }`}
          >
            <img
              src={slide.image || "/placeholder.svg"}
              alt={slide.alt}
              className="w-full h-auto object-contain object-top"
              width={1920}
              height={900}
            />
          </div>
        ))}
      </div>

      {/* Indicators */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors cursor-pointer ${
              index === currentSlide ? "bg-gray-600" : "bg-red-600"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
"use client"

import { useEffect, useState } from "react"

type Star = {
  id: number
  top: string
  left: string
  size: string
  opacity: number
  delay: string
  duration: string
  rotation: string
}

export default function SpaceField() {
  const [stars, setStars] = useState<Star[]>([])
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const generatedStars: Star[] = []

    for (let i = 0; i < 120; i++) {
      generatedStars.push({
        id: i,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        size: `${Math.random() * 6 + 2}px`, 
        opacity: Math.random() * 0.6 + 0.3, 
        delay: `${Math.random() * 5}s`,
        duration: `${4 + Math.random() * 6}s`, 
        rotation: `${Math.random() * 360}deg`,
      })
    }

    setStars(generatedStars)
    setTimeout(() => setIsVisible(true), 100)
  }, [])

  if (!isVisible) {
    return <div className="absolute inset-0 -z-10" />
  }

  return (
    <div className="absolute inset-0 overflow-hidden -z-10 pointer-events-none">
      {stars.map((star) => (
        <img
          key={star.id}
          src="/images/Polygon1.svg"
          alt="Estrela"
          className="absolute"
          style={{
            top: star.top,
            left: star.left,
            width: star.size,
            height: star.size,
            opacity: star.opacity,
            transform: `rotate(${star.rotation})`,
            animationName: "starBlink",
            animationDuration: star.duration,
            animationDelay: star.delay,
            animationIterationCount: "infinite",
            animationTimingFunction: "ease-in-out",
            filter: "brightness(1.3) drop-shadow(0 0 2px white)",
          }}
          onError={(e) => {
            const target = e.target as HTMLImageElement
            target.src = ""
            target.style.backgroundColor = "white"
            target.style.borderRadius = "50%"
            target.style.boxShadow = "0 0 6px 2px white"
          }}
        />
      ))}

      {/* Keyframes do piscar */}
      <style jsx>{`
        @keyframes starBlink {
          0% { opacity: 0; }
          40% { opacity: 1; }
          60% { opacity: 1; }
          100% { opacity: 0; }
        }
      `}</style>
    </div>
  )
}
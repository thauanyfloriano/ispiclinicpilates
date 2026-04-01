"use client"

import { Sparkles } from "lucide-react"

const marqueeItems = [
  "Pilates Clinico",
  "Fisioterapia Especializada",
  "Metodo Schroth",
  "Reequilibrio Postural",
  "Alivio de Dores Cronicas",
  "Fortalecimento Global",
  "Tratamento Individualizado",
  "Bem-estar e Saude",
]

export function Marquee() {
  return (
    <div className="relative overflow-hidden bg-[#1A1A1A] py-4">
      {/* Gradient Overlays */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#1A1A1A] to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#1A1A1A] to-transparent z-10" />
      
      {/* Marquee Track */}
      <div 
        className="flex"
        style={{
          animation: "marquee 45s linear infinite",
          width: "max-content",
        }}
      >
        {[...Array(4)].map((_, setIndex) => (
          <div key={setIndex} className="flex shrink-0">
            {marqueeItems.map((item, index) => (
              <div
                key={`${setIndex}-${index}`}
                className="flex items-center gap-4 px-8"
              >
                <Sparkles className="w-4 h-4 text-[#C9A227]" />
                <span className="text-white/80 font-medium tracking-wide whitespace-nowrap uppercase text-sm">
                  {item}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export function MarqueeGold() {
  const items = [
    "Mais de 500 pacientes atendidos",
    "98% de satisfacao",
    "10+ anos de experiencia",
    "Equipe especializada",
    "Atendimento personalizado",
    "Resultados comprovados",
  ]

  return (
    <div className="relative overflow-hidden bg-[#C9A227] py-3">
      {/* Gradient Overlays */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#C9A227] to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#C9A227] to-transparent z-10" />
      
      {/* Marquee Track - Reverse Direction */}
      <div 
        className="flex"
        style={{
          animation: "marquee-reverse 40s linear infinite",
          width: "max-content",
        }}
      >
        {[...Array(4)].map((_, setIndex) => (
          <div key={setIndex} className="flex shrink-0">
            {items.map((item, index) => (
              <div
                key={`${setIndex}-${index}`}
                className="flex items-center gap-4 px-8"
              >
                <span className="w-2 h-2 bg-white rounded-full" />
                <span className="text-white font-semibold tracking-wide whitespace-nowrap text-sm">
                  {item}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export function MarqueeLogos() {
  const logos = [
    "CREFITO",
    "APILATES",
    "ABP",
    "SCHROTH CERTIFICATION",
    "METODO PILATES",
  ]

  return (
    <div className="relative overflow-hidden bg-white/50 py-6 backdrop-blur-sm">
      {/* Gradient Overlays */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white/50 to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white/50 to-transparent z-10" />
      
      {/* Marquee Track */}
      <div 
        className="flex"
        style={{
          animation: "marquee 50s linear infinite",
          width: "max-content",
        }}
      >
        {[...Array(4)].map((_, setIndex) => (
          <div key={setIndex} className="flex shrink-0 items-center">
            {logos.map((logo, index) => (
              <div
                key={`${setIndex}-${index}`}
                className="flex items-center gap-3 px-12"
              >
                <div className="w-12 h-12 rounded-full border-2 border-[#C9A227]/30 flex items-center justify-center">
                  <span className="text-[#C9A227] font-bold text-xs">{logo.charAt(0)}</span>
                </div>
                <span className="text-[#6B6B6B] font-medium tracking-wider whitespace-nowrap text-xs uppercase">
                  {logo}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

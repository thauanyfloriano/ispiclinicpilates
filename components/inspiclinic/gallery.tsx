"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Sparkles } from "lucide-react"
import { AnimatedSection } from "./animated-section"

const galleryImages = [
  { src: "/galeria1.jpeg", alt: "Galeria Inspiclinic 1" },
  { src: "/galeria2.jpeg", alt: "Galeria Inspiclinic 2" },
  { src: "/galeria4.jpeg", alt: "Galeria Inspiclinic 3" },
  { src: "/galeria3.jpeg", alt: "Galeria Inspiclinic 4" },
  { src: "/galeria5.jpeg", alt: "Galeria Inspiclinic 5" },
  { src: "/galeria6.jpeg", alt: "Galeria Inspiclinic 6" },
]

export function Gallery() {
  return (
    <section id="galeria" className="py-24 lg:py-32 bg-[var(--background)]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-[var(--gold)] text-sm font-semibold tracking-[0.2em] uppercase mb-4">
            Galeria
          </span>
          <h2 className="font-serif text-4xl lg:text-5xl text-[var(--foreground)] mb-6">
            Rotina  <span className="text-[var(--gold)]">Clínica</span>
          </h2>
          <div className="w-16 h-1 bg-[var(--gold)] mx-auto mb-6" />
          <p className="text-[var(--muted-foreground)] text-lg leading-relaxed">
            Imagens da nossa rotina, estrutura e atendimentos realizados na clínica.
          </p>
        </AnimatedSection>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {galleryImages.map((image, index) => (
            <AnimatedSection
              key={image.src}
              animation="fade-scale"
              delay={index * 100}
            >
              <div className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className="aspect-square relative">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                  <span className="text-white font-medium text-sm">
                    {image.alt}
                  </span>
                </div>

                {/* Corner Accent */}
                <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-[var(--gold)] opacity-0 group-hover:opacity-100 transition-all duration-500" />
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* CTA Banner */}
        <AnimatedSection animation="fade-up">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[var(--foreground)] to-[#2a2a2a] p-12 lg:p-16 text-center">
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-[var(--gold)]/10 rounded-full -translate-x-1/2 -translate-y-1/2 animate-pulse" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-[var(--gold)]/5 rounded-full translate-x-1/2 translate-y-1/2 animate-pulse" style={{ animationDelay: "1s" }} />
            
            

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
                <Sparkles className="w-4 h-4 text-[var(--gold)]" />
                <span className="text-white/80 text-sm">Agende sua Avaliação</span>
              </div>

              <h3 className="font-serif text-3xl lg:text-4xl text-white mb-4">
                Pronto para Iniciar sua <span className="text-[var(--gold)]">Recuperação</span>?
              </h3>
              <p className="text-white/70 text-lg max-w-xl mx-auto mb-8">
                Agende sua avaliacao e descubra como podemos ajudar voce a viver sem dor
                e com mais qualidade de vida.
              </p>

              <Link
               href="https://wa.me/5511956096075?text=Olá,%20gostaria%20de%20agendar%20uma%20avaliação%20na%20clínica.%20Pode%20me%20ajudar%20com%20as%20informações%20e%20disponibilidade?"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-[var(--gold)] text-white font-semibold rounded-full transition-all duration-300 hover:bg-[var(--gold-dark)] hover:shadow-2xl hover:shadow-[var(--gold)]/30 hover:-translate-y-1 animate-glow-pulse"
              >
                Marcar sua Avaliação
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}

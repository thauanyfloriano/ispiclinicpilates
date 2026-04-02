"use client"

import Image from "next/image"
import { Heart, Award, Users, Clock } from "lucide-react"
import { AnimatedSection } from "./animated-section"

const values = [
  {
    icon: Heart,
    title: "Cuidado Humanizado",
    description: "Cada paciente é único e recebe atenção personalizada.",
  },
  {
    icon: Award,
    title: "Excelência Técnica",
    description: "Profissionais com formação e certificações internacionais.",
  },
  {
    icon: Users,
    title: "Atendimento Individual",
    description: "Sessões exclusivas para máximo aproveitamento.",
  },
  {
    icon: Clock,
    title: "Resultados Duradouros",
    description: "Foco em recuperação completa e prevenção de lesões.",
  },
]

export function About() {
  return (
    <section id="sobre" className="py-24 lg:py-32 ">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Column */}
          <AnimatedSection animation="slide-left" className="relative order-2 lg:order-1">
            {/* Main Image */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <div className="aspect-[4/5] relative">
                <Image
                  src="/karina.jpeg"
                  alt="Dra. Karina - Sobre a clinica"
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* Decorative Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-6 -right-6 lg:right-auto lg:-left-6 bg-white rounded-2xl p-4 shadow-xl max-w-[200px] animate-float">
              <div className="text-4xl font-serif font-bold text-[var(--gold)] mb-1">
                10+
              </div>
              <p className="text-[var(--foreground)] text-sm font-medium">
                Anos de experiência em fisioterapia
              </p>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-[var(--gold)]/20 rounded-full hidden lg:block animate-pulse" />
            <div className="absolute -bottom-8 right-1/4 w-16 h-16 border-2 border-[var(--gold)]/30 rounded-full hidden lg:block animate-pulse" style={{ animationDelay: "1s" }} />
          </AnimatedSection>

          {/* Content Column */}
          <AnimatedSection animation="slide-right" className="order-1 lg:order-2">
            <span className="inline-block text-[var(--gold)] text-sm font-semibold tracking-[0.2em] uppercase mb-4">
              Sobre Nós
            </span>
            <h2 className="font-serif text-4xl lg:text-5xl text-[var(--foreground)] mb-6">
              Sobre a <span className="text-[var(--gold)]">Clínica</span>
            </h2>
            <div className="w-16 h-1 bg-[var(--gold)] mb-8" />

            <p className="text-[var(--gold)] font-semibold text-lg mb-4">
              Cuidar do seu corpo é também cuidar da sua vida.
            </p>

            <div className="space-y-4 text-[var(--muted-foreground)] leading-relaxed mb-8">
              <p>
                A InspiClinic nasceu do sonho da Dra. Karina de oferecer um atendimento 
                mais humano, com presença, escuta e propósito.
              </p>
              <p>
                Aqui, cada paciente é único. Cada sessão é pensada para aliviar dores, 
                recuperar movimentos e devolver sua confiança. Unimos fisioterapia 
                baseada em evidências ao Pilates em um estúdio boutique.
              </p>
              <p>
                Seja para tratar dores crônicas, se recuperar de uma cirurgia, superar 
                uma lesão ou simplesmente viver com mais leveza e qualidade de vida.
              </p>
            </div>

            {/* Values Grid */}
            <div className="grid grid-cols-2 gap-4">
              {values.map((value, index) => (
                <div key={value.title} className="flex items-start gap-3 p-4 bg-white rounded-xl group hover:shadow-lg transition-all duration-300">
                  <div className="w-10 h-10 bg-[var(--gold-muted)] rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[var(--gold)] transition-colors duration-300">
                    <value.icon className="w-5 h-5 text-[var(--gold)] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[var(--foreground)] text-sm mb-1">
                      {value.title}
                    </h4>
                    <p className="text-[var(--muted-foreground)] text-xs leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}

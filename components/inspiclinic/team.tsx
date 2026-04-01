"use client"

import Image from "next/image"
import { AnimatedSection } from "./animated-section"

const team = [
  {
    name: "Dra. Karina de Paula",
    role: "Fisioterapeuta",
    image: "/karina.jpeg",
    bio: "Especialista no tratamento de dores na coluna e escoliose, com aplicacao do Metodo Schroth, reeducacao postural e foco na melhora da qualidade de vida.",
  },
  {
    name: "Dra. Mariana Ferrari",
    role: "Coordenadora de Pilates",
    image: "/Mariana.jpeg",
    bio: "Mestre em fisioterapia traumato-ortopédica, com atuação em métodos modernos de correção postural, promovendo equilíbrio corporal e melhora da qualidade de vida.",
  },
  {
    name: "Dra. Dafine",
    role: "Fisioterapeuta ",
    image: "/dafine.jpeg",
    bio: "Atuação focada em reabilitação e prevenção de lesões em atletas e praticantes de atividade física, com foco na recuperação funcional e qualidade de vida.",
  },
]

export function Team() {
  return (
    <section id="equipe" className="py-24 lg:py-32 ">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-[var(--gold)] text-sm font-semibold tracking-[0.2em] uppercase mb-4">
            Corpo Clinico
          </span>
          <h2 className="font-serif text-4xl lg:text-5xl text-[var(--foreground)] mb-6">
            Especialistas <span className="text-[var(--gold)]">em Voce</span>
          </h2>
          <div className="w-16 h-1 bg-[var(--gold)] mx-auto mb-6" />
          <p className="text-[var(--muted-foreground)] text-lg leading-relaxed">
            Profissionais que unem tecnica, experiencia e cuidado humano para conduzir 
            sua reabilitacao com seguranca e resultados duradouros.
          </p>
        </AnimatedSection>

        {/* Team Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <AnimatedSection
              key={member.name}
              animation="fade-scale"
              delay={index * 150}
            >
              <div className="group">
                <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                  {/* Image Container */}
                  <div className="relative overflow-hidden">
                    <div className="aspect-[4/5] relative">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Gold Corner Accent */}
                    <div className="absolute top-0 right-0 w-24 h-24">
                      <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-[var(--gold)] opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:translate-x-0 translate-x-2" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 text-center">
                    <h3 className="font-serif text-xl font-bold text-[var(--foreground)] mb-1">
                      {member.name}
                    </h3>
                    <span className="inline-block text-[var(--gold)] text-xs font-bold tracking-[0.15em] uppercase mb-4">
                      {member.role}
                    </span>
                    <p className="text-[var(--muted-foreground)] text-sm leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}

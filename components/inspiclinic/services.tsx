"use client"

import { Leaf, Bone, FileCheck, Gauge, Heart, Dumbbell } from "lucide-react"
import { AnimatedSection } from "./animated-section"

// Services component for InspiClinic

const services = [
  {
    icon: Leaf,
    title: "Pilates Clínico",
    description:
      "Conduzido sob perspectiva clínica, onde cada movimento tem propósito terapêutico, garantindo controle biomecânico e execução refinada.",
    highlight: "Sessões Individualizadas",
  },
  {
    icon: Bone,
    title: "Método Schroth",
    description:
      "Técnica alemã com certificação internacional focada em tratamento das disfunções da coluna, correção postural e reeducação respiratória.",
    highlight: "Abordagem Conservadora",
  },
  {
    icon: FileCheck,
    title: "Eletroestimulação",
    description:
      "A eletroestimulação muscular (EMS) é uma tecnologia que ativa profundamente os músculos por meio de impulsos elétricos, potencializando seus treinos de forma rápida, segura e eficiente.",
    highlight:
      "Eletroestimulação de Alta Performance"
  },
  {
    icon: Gauge,
    title: "Reequilíbrio Postural",
    description:
      "Trabalho corporal inteligente voltado para alinhamento e consciência corporal, respeitando os limites e potencializando sua evolução.",
    highlight: "Postura e Consciência",
  },
  {
    icon: Heart,
    title: "Alívio de Dores",
    description:
      "Técnicas específicas integradas ao protocolo para prevenção de lesões e diminuição de dores crônicas ou agudas.",
    highlight: "Segurança e Bem-estar",
  },
  {
    icon: Dumbbell,
    title: "Fortalecimento Global",
    description:
      "Fortalecimento segmentar e global avançado através de exercícios selecionados para devolver sua máxima funcionalidade.",
    highlight: "Condicionamento Físico",
  },
]

export function Services() {
  return (
    <section id="servicos" className="py-24 lg:py-32 ">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-[var(--gold)] text-sm font-semibold tracking-[0.2em] uppercase mb-4">
            Nossos Serviços
          </span>
          <h2 className="font-serif text-4xl lg:text-5xl text-[var(--foreground)] mb-6">
            Tratamentos <span className="text-[var(--gold)]">Especializados</span>
          </h2>
          <div className="w-16 h-1 bg-[var(--gold)] mx-auto mb-6" />
          <p className="text-[var(--muted-foreground)] text-lg leading-relaxed">
            Mais do que acompanhar, nós compreendemos o seu corpo em profundidade.
            Precisão, técnica e atenção aos detalhes definem a nossa abordagem.
          </p>
        </AnimatedSection>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <AnimatedSection
              key={service.title}
              animation="fade-scale"
              delay={index * 100}
            >
              <div className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-transparent hover:border-[var(--gold-border)] h-full">
                {/* Icon */}
                <div className="w-14 h-14 bg-[var(--gold-muted)] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[var(--gold)] transition-colors duration-300">
                  <service.icon className="w-7 h-7 text-[var(--gold)] group-hover:text-white transition-colors duration-300" />
                </div>

                {/* Content */}
                <h3 className="font-serif text-xl font-bold text-[var(--foreground)] mb-3">
                  {service.title}
                </h3>
                <p className="text-[var(--muted-foreground)] leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Divider */}
                <div className="w-full h-px bg-gradient-to-r from-transparent via-[var(--gold)]/30 to-transparent mb-4" />

                {/* Highlight */}
                <span className="text-[var(--gold)] font-semibold text-sm">
                  {service.highlight}
                </span>

                {/* Hover Decoration */}
                <div className="absolute top-0 right-0 w-16 h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute top-4 right-4 w-2 h-2 bg-[var(--gold)] rounded-full" />
                  <div className="absolute top-4 right-8 w-1 h-1 bg-[var(--gold)]/50 rounded-full" />
                  <div className="absolute top-8 right-4 w-1 h-1 bg-[var(--gold)]/50 rounded-full" />
                </div>

                {/* Shimmer Effect on Hover */}
                <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 animate-shimmer" />
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}

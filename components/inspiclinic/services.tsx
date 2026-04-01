"use client"

import { Leaf, Bone, FileCheck, Gauge, Heart, Dumbbell } from "lucide-react"
import { AnimatedSection } from "./animated-section"

// Services component for InspiClinic

const services = [
  {
    icon: Leaf,
    title: "Pilates Clinico",
    description:
      "Conduzido sob perspectiva clinica, onde cada movimento tem proposito terapeutico, garantindo controle biomecanico e execucao refinada.",
    highlight: "Sessoes Individualizadas",
  },
  {
    icon: Bone,
    title: "Metodo Schroth",
    description:
      "Tecnica alema com certificacao internacional focada em tratamento das disfuncoes da coluna, correcao postural e reeducacao respiratoria.",
    highlight: "Abordagem Conservadora",
  },
  {
    icon: FileCheck,
    title: "Eletroestimulação",
    description:
      "Técnica que utiliza correntes elétricas de baixa intensidade para estimular músculos, promover contração e auxiliar no alívio da dor de forma segura e eficaz.",
    highlight:
      "Eletroestimulação de Alta Performance"
  },
  {
    icon: Gauge,
    title: "Reequilibrio Postural",
    description:
      "Trabalho corporal inteligente voltado para alinhamento e consciencia corporal, respeitando os limites e potencializando sua evolucao.",
    highlight: "Postura e Consciencia",
  },
  {
    icon: Heart,
    title: "Alivio de Dores",
    description:
      "Tecnicas especificas integradas ao protocolo para prevencao de lesoes e diminuicao de dores cronicas ou agudas.",
    highlight: "Seguranca e Bem-estar",
  },
  {
    icon: Dumbbell,
    title: "Fortalecimento Global",
    description:
      "Fortalecimento segmentar e global avancado atraves de exercicios selecionados para devolver sua maxima funcionalidade.",
    highlight: "Condicionamento Fisico",
  },
]

export function Services() {
  return (
    <section id="servicos" className="py-24 lg:py-32 ">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-[var(--gold)] text-sm font-semibold tracking-[0.2em] uppercase mb-4">
            Nossos Servicos
          </span>
          <h2 className="font-serif text-4xl lg:text-5xl text-[var(--foreground)] mb-6">
            Tratamentos <span className="text-[var(--gold)]">Especializados</span>
          </h2>
          <div className="w-16 h-1 bg-[var(--gold)] mx-auto mb-6" />
          <p className="text-[var(--muted-foreground)] text-lg leading-relaxed">
            Mais do que acompanhar, nos compreendemos o seu corpo em profundidade.
            Precisao, tecnica e atencao aos detalhes definem a nossa abordagem.
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

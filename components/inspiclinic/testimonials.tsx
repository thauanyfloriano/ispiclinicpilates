"use client"

import { Quote, Star } from "lucide-react"
import { AnimatedSection } from "./animated-section"

const testimonials = [
  {
    text: "A Karina é uma fisioterapeuta extremamente competente. Cheguei à clínica com uma hérnia de disco e dores lombares tão intensas que mal conseguia levantar a perna. Após algumas sessões, a dor aguda desapareceu.",
    author: "Paolo Barone",
    service: "Reabilitação",
  },
  {
    text: "A Dra. Karina é uma profissional incrível, dedicada e extremamente competente! Seu comprometimento em nos fazer sair sem dor é admirável. Cada atendimento reflete cuidado, atenção e excelência.",
    author: "Lucelia Monfardini",
    service: "Fisioterapia",
  },
  {
    text: "INSPICLINIC fisioterapia e pilates conta com profissionais de alto nível, em especial Dra. Karina, proporcionando um ambiente agradável, bem estruturado e obtendo excelentes resultados.",
    author: "Maria Eliana Perasolo",
    service: "Pilates & Fisio",
  },
  {
    text: "Comecei há uma semana, mas já posso dizer que estou gostando muito! O espaço é lindo, acolhedor e muito bem cuidado, o que torna a experiência ainda mais agradável.",
    author: "Flavia Geraldes Rosa",
    service: "Pilates Clínico",
  },
  {
    text: "Excelente! Lugar bem cuidado, limpo e as profissionais ótimas. Recomendo e afirmo: muito bom. Parabéns, Dra. Karina e toda a equipe!",
    author: "Cassia",
    service: "Tratamento Contínuo",
  },
  {
    text: "Minha experiência na Inspire tem sido excepcional. O cuidado e a atenção das profissionais fazem toda a diferença. Notei uma melhora significativa na minha postura.",
    author: "Fawzie Ibrahim",
    service: "Pilates & Fisioterapia",
  },
]

export function Testimonials() {
  return (
    <section id="avaliacoes" className="py-24 lg:py-32 bg-[var(--background)]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-[var(--gold)] text-sm font-semibold tracking-[0.2em] uppercase mb-4">
            Depoimentos
          </span>
          <h2 className="font-serif text-4xl lg:text-5xl text-[var(--foreground)] mb-6">
            O que Dizem Nossos <span className="text-[var(--gold)]">Pacientes</span>
          </h2>
          <div className="w-16 h-1 bg-[var(--gold)] mx-auto mb-6" />
          <p className="text-[var(--muted-foreground)] text-lg leading-relaxed">
            A satisfação e a recuperação de nossos pacientes são o nosso maior orgulho. 
            Conheça as experiências de quem confia na Inspiclinic.
          </p>
        </AnimatedSection>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection
              key={testimonial.author}
              animation="fade-up"
              delay={index * 100}
            >
              <div className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 border border-[var(--border)] hover:border-[var(--gold-border)] relative overflow-hidden h-full">
                {/* Quote Icon */}
                <div className="mb-4">
                  <Quote className="w-10 h-10 text-[var(--gold)]/30 group-hover:text-[var(--gold)]/50 transition-colors duration-300" />
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-[var(--gold)] fill-[var(--gold)]"
                    />
                  ))}
                </div>

                {/* Text */}
                <p className="text-[var(--muted-foreground)] leading-relaxed mb-6 italic">
                  &quot;{testimonial.text}&quot;
                </p>

                {/* Divider */}
                <div className="w-full h-px bg-gradient-to-r from-transparent via-[var(--gold)]/30 to-transparent mb-4" />

                {/* Author */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-serif font-bold text-[var(--foreground)]">
                      {testimonial.author}
                    </p>
                  </div>
                  <span className="text-[var(--gold)] text-sm font-semibold">
                    {testimonial.service}
                  </span>
                </div>

                {/* Hover Decoration */}
                <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-[var(--gold)]/5 rounded-full transition-transform duration-500 group-hover:scale-150" />
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}

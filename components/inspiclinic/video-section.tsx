"use client"

import { Play } from "lucide-react"
import { useState } from "react"
import { AnimatedSection } from "./animated-section"

export function VideoSection() {

  return (
    <section id="espaco" className="py-24 lg:py-32 bg-[var(--background)]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block text-[var(--gold)] text-sm font-semibold tracking-[0.2em] uppercase mb-4">
            Nosso Espaco
          </span>
          <h2 className="font-serif text-4xl lg:text-5xl text-[var(--foreground)] mb-6">
            Conheca a <span className="text-[var(--gold)]">InspiClinic</span>
          </h2>
          <div className="w-16 h-1 bg-[var(--gold)] mx-auto mb-6" />
          <p className="text-[var(--muted-foreground)] text-lg leading-relaxed">
            Um ambiente pensado para o seu conforto e recuperacao, 
            com equipamentos modernos e uma atmosfera acolhedora.
          </p>
        </AnimatedSection>

        {/* Video Container */}
        <AnimatedSection animation="fade-scale">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-black/10 group">
            {/* Decorative Border */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[var(--gold)]/20 via-[var(--gold)]/40 to-[var(--gold)]/20 rounded-3xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative bg-[var(--foreground)] rounded-3xl overflow-hidden aspect-video">
              <video
                className="w-full h-full object-cover"
                controls
                autoPlay
                muted
                loop
                playsInline
                poster="/hero-bg.jpeg"
                src="/vd.mp4"
              >
                Seu navegador nao suporta videos.
              </video>
            </div>

          </div>
        </AnimatedSection>

      </div>
    </section>
  )
}

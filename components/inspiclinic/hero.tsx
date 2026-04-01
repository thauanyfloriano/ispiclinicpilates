"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Star } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/hero-bg.jpeg"
          alt="InspiClinic - Clinica de Fisioterapia"
          fill
          className="object-cover"
          priority
        />
      </div>



      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />

      {/* Animated Decorative Elements */}
      <div className="absolute top-1/4 left-10 w-32 h-32 border border-[#C9A227]/20 rounded-full animate-pulse hidden lg:block" />
      <div
        className="absolute bottom-1/4 right-10 w-24 h-24 border border-[#C9A227]/30 rounded-full animate-pulse hidden lg:block"
        style={{ animationDelay: "1s" }}
      />
      <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-[#C9A227] rounded-full animate-ping hidden lg:block" />
      <div className="absolute top-2/3 left-1/4 w-3 h-3 bg-[#C9A227]/50 rounded-full animate-float hidden lg:block" />

      {/* Floating Gold Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-[#C9A227] rounded-full animate-float opacity-40"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + i * 0.5}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-36 pb-32"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.15,
              delayChildren: 0.3
            }
          }
        }}
      >
        {/* Title */}
        <motion.h1
          className="font-serif text-white mb-6"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
          }}
        >
          <span className="block text-3xl md:text-4xl lg:text-5xl font-light tracking-wide mb-2">
            Excelência em
          </span>
          <span className="block text-4xl md:text-5xl lg:text-6xl font-bold text-[#C9A227] tracking-tight">
            Cuidado Individualizado
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          className="text-white/80 text-md md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
          }}
        >
          Na Inspiclinic, o atendimento não é padronizado é cuidadosamente
          construído para você. Cada detalhe é pensado para sua recuperação.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
          }}
        >
          <Link
            href="https://wa.me/5511956096075?text=Olá,%20gostaria%20de%20agendar%20uma%20avaliação%20na%20clínica.%20Pode%20me%20ajudar%20com%20as%20informações%20e%20disponibilidade?"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-[#C9A227] text-white font-semibold rounded-full transition-all duration-300 hover:bg-[#9E7B1B] hover:shadow-2xl hover:shadow-[#C9A227]/30 hover:-translate-y-1 animate-glow-pulse text-sm"
          >
            Agendar Avaliação
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="#servicos"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-medium rounded-full border border-white/30 transition-all duration-300 hover:bg-white/20 hover:border-white/50 text-sm"
          >
            Conheça Nossos Serviços
          </Link>
        </motion.div>

        {/* Social Proof */}
        <motion.div
          className="mt-12 flex flex-col items-center gap-2"
          variants={{
            hidden: { opacity: 0, scale: 0.9 },
            visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } }
          }}
        >
          <p className="text-white font-semibold text-lg">
            +500 pacientes atendidos
          </p>
          <p className="text-white/60 text-sm">com 98% de satisfação</p>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator - positioned higher */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        <span className="text-white/50 text-xs tracking-widest uppercase">
          Scroll
        </span>
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <motion.div
            className="w-1.5 h-1.5 bg-[#C9A227] rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>

    </section>
  );
}

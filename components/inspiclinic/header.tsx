"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Logo } from "./logo"


const navLinks = [
  { href: "#inicio", label: "Início" },
  { href: "#servicos", label: "Serviços" },
  { href: "#espaco", label: "Espaço" },
  { href: "#equipe", label: "Equipe" },
  { href: "#sobre", label: "Sobre" },
  { href: "#contato", label: "Contato" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-center lg:justify-between">
        {/* Logo */}
        <Logo scrolled={isScrolled} />

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative text-sm font-medium tracking-wide transition-colors duration-300 group ${
                isScrolled
                  ? "text-[var(--foreground)]/80 hover:text-[var(--gold)]"
                  : "text-white/90 hover:text-white"
              }`}
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--gold)] transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <Link
            href="https://wa.me/5511956096075?text=Olá,%20gostaria%20de%20agendar%20uma%20avaliação%20na%20clínica.%20Pode%20me%20ajudar%20com%20as%20informações%20e%20disponibilidade?"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-[var(--gold)] text-white text-sm font-semibold rounded-full transition-all duration-300 hover:bg-[var(--gold-dark)] hover:shadow-lg hover:shadow-[var(--gold)]/20 hover:-translate-y-0.5"
          >
            Agendar Avaliação
          </Link>
        </div>
      </div>
    </header>
  )
}

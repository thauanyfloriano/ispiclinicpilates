"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

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
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
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
            href="https://wa.me/5511956096075?text=Olá,%20gostaria%20de%20agendar%20uma%20avaliação."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-[var(--gold)] text-white text-sm font-semibold rounded-full transition-all duration-300 hover:bg-[var(--gold-dark)] hover:shadow-lg hover:shadow-[var(--gold)]/20 hover:-translate-y-0.5"
          >
            Agendar Avaliação
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`lg:hidden p-2 transition-colors ${
            isScrolled ? "text-[var(--foreground)]" : "text-white"
          }`}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-white shadow-xl transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col p-6 gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-[var(--foreground)] font-medium py-2 border-b border-[var(--border)] last:border-0 hover:text-[var(--gold)] transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="https://wa.me/5511956096075?text=Olá,%20gostaria%20de%20agendar%20uma%20avaliação."
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 text-center px-6 py-3 bg-[var(--gold)] text-white font-semibold rounded-full hover:bg-[var(--gold-dark)] transition-colors"
          >
            Agendar Avaliação
          </Link>
        </nav>
      </div>
    </header>
  )
}

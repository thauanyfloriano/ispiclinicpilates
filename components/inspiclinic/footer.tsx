import Link from "next/link"
import Image from "next/image"
import { MapPin, Phone, Clock, Instagram, Facebook } from "lucide-react"
import { Logo } from "./logo"


const contactInfo = [
  {
    icon: MapPin,
    label: "Localização",
    value: "Padre Estevão Pernet, 718 - Sala 1105/1106, Tatuapé, São Paulo - SP",
  },
  {
    icon: Phone,
    label: "Telefone",
    value: "(11) 95609-6075",
    href: "tel:+5511956096075",
  },
  {
    icon: Clock,
    label: "Horário",
    value: "Seg–Sex: 7h às 20h | Sáb: 8h às 13h",
  },
]

const quickLinks = [
  { href: "#inicio", label: "Início" },
  { href: "#servicos", label: "Serviços" },
  { href: "#equipe", label: "Equipe" },
  { href: "#sobre", label: "Sobre" },
]

export function Footer() {
  return (
    <footer id="contato" className="bg-[var(--foreground)] text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-20">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <Logo className="mb-6" />

            <p className="text-white/60 leading-relaxed mb-6 max-w-sm">
              Cuidando do seu movimento com atenção, ciência e resultados reais. 
              Sua recuperação é nossa missão.
            </p>
            
            {/* Social Icons */}
            <div className="flex gap-3">
              <Link
                href="#"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-[var(--gold)] hover:bg-[var(--gold)] transition-all duration-300 group"
              >
                <Instagram className="w-4 h-4 text-white/60 group-hover:text-white transition-colors" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-[var(--gold)] hover:bg-[var(--gold)] transition-all duration-300 group"
              >
                <Facebook className="w-4 h-4 text-white/60 group-hover:text-white transition-colors" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-[var(--gold)] font-semibold text-sm tracking-wider uppercase mb-6">
              Links Rápidos
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-[var(--gold)] transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-6">
            <h4 className="text-[var(--gold)] font-semibold text-sm tracking-wider uppercase mb-6">
              Contato
            </h4>
            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex gap-4">
                  <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-[var(--gold)]" />
                  </div>
                  <div>
                    <p className="text-white/40 text-xs uppercase tracking-wider mb-1">
                      {item.label}
                    </p>
                    {item.href ? (
                      <Link
                        href={item.href}
                        className="text-white/80 hover:text-[var(--gold)] transition-colors text-sm"
                      >
                        {item.value}
                      </Link>
                    ) : (
                      <p className="text-white/80 text-sm">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/40 text-sm">
              &copy; 2026 InspiClinic. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

"use client"

import Image from "next/image"
import Link from "next/link"

interface LogoProps {
  scrolled?: boolean
  className?: string
}

export function Logo({ scrolled, className = "" }: LogoProps) {
  return (
    <Link href="#inicio" className={`flex flex-col items-center group transition-all duration-300 hover:scale-105 ${className}`}>
      <div className={`relative transition-all duration-300 ${scrolled ? "h-10 w-28" : "h-16 w-44"}`}>
        <Image
          src="/logo.png"
          alt="InspiClinic Logo"
          fill
          className="object-contain"
          priority
        />
      </div>
    </Link>
  )
}






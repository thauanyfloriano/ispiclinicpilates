"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  animation?: "fade-up" | "fade-scale" | "slide-left" | "slide-right"
  delay?: number
}

const animations = {
  "fade-up": {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" as const },
  },
  "fade-scale": {
    initial: { opacity: 0, scale: 0.95 },
    whileInView: { opacity: 1, scale: 1 },
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
  "slide-left": {
    initial: { opacity: 0, x: -50 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 0.8, ease: "easeOut" as const },
  },
  "slide-right": {
    initial: { opacity: 0, x: 50 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 0.8, ease: "easeOut" as const },
  },
}

export function AnimatedSection({
  children,
  className = "",
  animation = "fade-up",
  delay = 0,
}: AnimatedSectionProps) {
  const selectedAnimation = animations[animation]

  return (
    <motion.div
      initial={selectedAnimation.initial}
      whileInView={selectedAnimation.whileInView}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ 
        ...selectedAnimation.transition,
        delay: delay / 1000 
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}


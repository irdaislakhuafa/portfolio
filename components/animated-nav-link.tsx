"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"
import { useSmoothScroll } from "@/hooks/use-smooth-scroll"

interface AnimatedNavLinkProps {
  href: string
  children: ReactNode
  className?: string
}

export function AnimatedNavLink({ href, children, className }: AnimatedNavLinkProps) {
  const { scrollToSection } = useSmoothScroll()
  const sectionId = href.replace("#", "")

  return (
    <motion.button
      className={`text-sm font-medium hover:underline underline-offset-4 ${className}`}
      onClick={() => scrollToSection(sectionId)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {children}
    </motion.button>
  )
}

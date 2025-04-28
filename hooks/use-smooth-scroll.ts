"use client"

import { useCallback } from "react"

export function useSmoothScroll() {
  const scrollToSection = useCallback((elementId: string) => {
    const element = document.getElementById(elementId)
    if (!element) return

    window.scrollTo({
      top: element.offsetTop - 80, // Offset for the fixed header
      behavior: "smooth",
    })
  }, [])

  return { scrollToSection }
}

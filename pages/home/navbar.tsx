import { AnimatedNavLink } from "@/components/animated-nav-link";
import { ThemeToggle } from "@/components/theme-toggle";
import { Code } from "lucide-react";
import Link from "next/link";

export interface NavbarParams {
  params?: {
    navTitle: string,
    links: [{
      href: string,
      label: string,
    }]
  }
}
export default function Navbar({ params }: NavbarParams) {
  return (
    <>
      <div className="container flex h-16 items-center">
        <Link href="/" className="flex items-center gap-2 font-bold">
          <div className="ps-1.5"></div>
          <Code className="h-5 w-5" />
          <span>DevTeam</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6 items-center">
          <AnimatedNavLink href="#about">About</AnimatedNavLink>
          <AnimatedNavLink href="#skills">Skills</AnimatedNavLink>
          <AnimatedNavLink href="#projects">Projects</AnimatedNavLink>
          {/* <AnimatedNavLink href="#contact">Contact</AnimatedNavLink> */}
          <ThemeToggle />
        </nav>
      </div>
    </>
  )
}

"use client"

import { useEffect } from "react"
import Link from "next/link"
import { ArrowRight, Code, Github, Linkedin, Mail } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ParticleBackground from "@/components/particle-background"
import { ThemeToggle } from "@/components/theme-toggle"
import { AnimatedSection } from "@/components/animated-section"
import { AnimatedNavLink } from "@/components/animated-nav-link"
import Navbar from "@/pages/home/navbar"
import { Z_VERSION_ERROR } from "node:zlib"

interface Project {
  title: string;
  description: string;
  details: string;
  image: string;
}

interface DevSkill {
  backend?: string[];
  frontend?: string[];
  others?: string[];
}

interface Dev {
  name: string;
  image: string;
  description: string;
  github: string;
  linkedin: string;
  skills?: DevSkill;
  projects?: Project[];
}

interface Project {
  title: string;
  description: string;
  details: string;
  image: string;
}

export default function Home() {
  const { theme } = useTheme()

  // list developers team
  const imgQueries = "?height=1000&width=1000"
  const teamDevs: Dev[] = [
    {
      name: "Ridho Pujiono",
      image: `/ridho_pujiono.jpg${imgQueries}`,
      description: "Fullstack Developer with 5 years of experience specializing in Laravel and React.js",
      github: "https://github.com/ridhopujiono",
      linkedin: "https://www.linkedin.com/in/ridho-pujiono/",
      skills: {
        backend: ["Laravel"],
        frontend: ["React.js"],
        others: ["Git", "Github"]
      },
      projects: [],
    },
    {
      name: "Irda Islakhu Afa",
      image: `/irda_islakhu_afa1.jpg${imgQueries}`,
      description: "An Software Engineer with 3 years of experience specializing in Go and Java.",
      github: "https://github.com/irdaislakhuafa",
      linkedin: "https://www.linkedin.com/in/irda-islakhu-afa/",
      skills: {
        backend: ["Go", "Java", "Nest.js (TypeScript)"],
        frontend: ["Next.js"],
        others: ["Git", "Github", "Docker", "Linux"],
      },
      projects: [
        {
          title: "E-commerce Platform",
          description: "A full-featured online shopping platform with payment integration",
          details:
            "Built with Next.js, TypeScript, Stripe, and PostgreSQL. Features include user authentication, product management, cart functionality, and order processing.",
          image: "/placeholder.svg?height=200&width=400",
        },
        // {
        //   title: "Task Management App",
        //   description: "A collaborative project management tool for teams",
        //   details:
        //     "Built with React, Node.js, Express, and MongoDB. Features include task creation, assignment, progress tracking, and team collaboration tools.",
        //   image: "/placeholder.svg?height=200&width=400",
        // },
        // {
        //   title: "Real-time Chat Application",
        //   description: "A messaging platform with real-time updates",
        //   details:
        //     "Built with Vue.js, Socket.io, Express, and Firebase. Features include real-time messaging, user presence indicators, and file sharing.",
        //   image: "/placeholder.svg?height=200&width=400",
        // },
        // {
        //   title: "Fitness Tracking App",
        //   description: "A personal fitness and workout tracking application",
        //   details:
        //     "Built with React Native, GraphQL, and MongoDB. Features include workout logging, progress tracking, and personalized workout recommendations.",
        //   image: "/placeholder.svg?height=200&width=400",
        // },
        // {
        //   title: "Content Management System",
        //   description: "A custom CMS for digital content creators",
        //   details:
        //     "Built with Next.js, TypeScript, and Sanity.io. Features include content creation, publishing workflow, and media management.",
        //   image: "/placeholder.svg?height=200&width=400",
        // },
        // {
        //   title: "Analytics Dashboard",
        //   description: "A data visualization platform for business metrics",
        //   details:
        //     "Built with React, D3.js, Node.js, and PostgreSQL. Features include interactive charts, data filtering, and automated reporting.",
        //   image: "/placeholder.svg?height=200&width=400",
        // },
      ],
    },
    {
      name: "Miftahurrohman",
      image: `/miftahurrohman.jpg${imgQueries}`,
      description: "5 years of experience in the industrial world and am now switching to software development to follow my passion for technology",
      github: "https://github.com/mf-rohman",
      linkedin: "https://www.linkedin.com/in/%E2%80%8E-miftahurrohman-717a12342/",
      skills: {
        backend: ["JavaScript"],
        frontend: ["React.js"],
        others: ["Git", "Github", "Linux"],
      },
      projects: [],
    },
  ];

  // sum skills
  const devSkills: {
    backend: string[];
    frontend: string[];
    others: string[];
  } = {
    backend: [],
    frontend: [],
    others: [],
  }

  for (const dev of teamDevs) {
    (devSkills?.backend) && devSkills.backend.push(...(dev.skills?.backend || []));
    (devSkills?.frontend) && devSkills.frontend.push(...(dev.skills?.frontend || []));
    (devSkills?.others) && devSkills.others.push(...(dev.skills?.others || []));
  }
  devSkills.backend = [...new Set(devSkills.backend)];
  devSkills.frontend = [...new Set(devSkills.frontend)];
  devSkills.others = [...new Set(devSkills.others)];

  // Force a re-render when theme changes to trigger animations
  useEffect(() => {
    // This is just to make the component re-render when theme changes
  }, [theme])

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={theme}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="flex min-h-screen flex-col"
      >
        <ParticleBackground />
        {/* START: header */}
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <Navbar />
        </header>
        {/* END: header */}

        {/* START: section contents */}
        <main className="flex-1">
          {/* START: banner section */}
          <AnimatedSection className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <motion.div
                  className="space-y-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Fullstack Development Team
                  </h1>
                  <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                    We are a team of experienced fullstack developers with a passion for building robust, scalable applications.
                  </p>
                </motion.div>
                <motion.div
                  className="space-x-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  <Button variant="outline" asChild>
                    <Link href="#projects">View Our Work</Link>
                  </Button>
                </motion.div>
              </div>
            </div>
          </AnimatedSection>
          {/* END: banner section */}

          {/* START: developers section */}
          <AnimatedSection id="about" className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Meet Our Team</h2>
                  <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                    With over 3 years of experience each, our developers bring expertise in building modern web
                    applications.
                  </p>
                </div>
              </div>
              <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3 md:gap-12 lg:gap-16 mt-12">
                {teamDevs.map((developer, index) => (
                  <motion.div
                    key={developer.name}
                    className="flex flex-col items-center space-y-4"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                  >
                    <img
                      src={developer.image || "/placeholder.svg"}
                      alt={developer.name}
                      className="rounded-full object-cover h-40 w-40 border-4 border-primary/20"
                    />
                    <div className="space-y-2 text-center">
                      <h3 className="text-xl font-bold">{developer.name}</h3>
                      <p className="text-sm text-muted-foreground">{developer.description}</p>
                      <div className="flex justify-center space-x-4">
                        <Link href={developer.github} className="text-muted-foreground hover:text-primary">
                          <Github className="h-5 w-5" />
                          <span className="sr-only">GitHub</span>
                        </Link>
                        <Link href={developer.linkedin} className="text-muted-foreground hover:text-primary">
                          <Linkedin className="h-5 w-5" />
                          <span className="sr-only">LinkedIn</span>
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </AnimatedSection>
          {/* END: developers section */}

          {/* START: skills section */}
          <AnimatedSection id="skills" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Skills</h2>
                  <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                    We bring a diverse set of skills and technologies to every project.
                  </p>
                </div>
              </div>
              <Tabs defaultValue="frontend" className="mx-auto max-w-4xl mt-12">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="frontend">Frontend</TabsTrigger>
                  <TabsTrigger value="backend">Backend</TabsTrigger>
                  <TabsTrigger value="other">Other</TabsTrigger>
                </TabsList>

                {/* START: frontend */}
                <TabsContent value="frontend" className="mt-6">
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                    {devSkills.frontend.map((skill, index) => (
                      <motion.div
                        key={skill}
                        className="flex flex-col items-center justify-center p-4 bg-background rounded-lg shadow-sm"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                      >
                        <span className="font-medium">{skill}</span>
                      </motion.div>
                    ))}
                  </div>
                </TabsContent>
                {/* END: frontend */}

                {/* START: backend */}
                <TabsContent value="backend" className="mt-6">
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                    {devSkills.backend.map((skill, index) => (
                      <motion.div
                        key={skill}
                        className="flex flex-col items-center justify-center p-4 bg-background rounded-lg shadow-sm"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                      >
                        <span className="font-medium">{skill}</span>
                      </motion.div>
                    ))}
                  </div>
                </TabsContent>
                {/* END: backend */}

                {/* START: others */}
                <TabsContent value="other" className="mt-6">
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                    {devSkills.others.map((skill, index) => (
                      <motion.div
                        key={skill}
                        className="flex flex-col items-center justify-center p-4 bg-background rounded-lg shadow-sm"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                      >
                        <span className="font-medium">{skill}</span>
                      </motion.div>
                    ))}
                  </div>
                </TabsContent>
                {/* END: others */}

              </Tabs>
            </div>
          </AnimatedSection>
          {/* END: skills section */}

          {/* START: skills projects */}
          <AnimatedSection id="projects" className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Projects</h2>
                  <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                    Take a look at some of our recent work.
                  </p>
                </div>
              </div>
              <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 mt-12">
                {teamDevs.map((dev) => dev.projects?.map((project, index) => (
                  <motion.div
                    key={project.title}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="h-full flex flex-col">
                      <CardHeader>
                        <img
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          className="w-full h-48 object-cover rounded-t-lg"
                        />
                        <CardTitle className="mt-4">{project.title}</CardTitle>
                        <CardDescription>{project.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="flex-grow">
                        <p className="text-sm text-muted-foreground">{project.details}</p>
                      </CardContent>
                      <CardFooter className="flex justify-between">
                        <Button variant="outline" size="sm" asChild>
                          <Link href="#">View Demo</Link>
                        </Button>
                        <Button size="sm" asChild>
                          <Link href="#">
                            <Github className="mr-2 h-4 w-4" />
                            Code
                          </Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  </motion.div>
                )))}
              </div>
            </div>
          </AnimatedSection>
          {/* END: skills projects */}

          {/* START: contact section */}
          {(
            // <AnimatedSection id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
            //   <div className="container px-4 md:px-6">
            //     <div className="flex flex-col items-center justify-center space-y-4 text-center">
            //       <div className="space-y-2">
            //         <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get In Touch</h2>
            //         <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            //           Interested in working with us? Send us a message and we'll get back to you as soon as possible.
            //         </p>
            //       </div>
            //     </div>
            //     <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 mt-12">
            //       <motion.div
            //         initial={{ opacity: 0, x: -50 }}
            //         whileInView={{ opacity: 1, x: 0 }}
            //         viewport={{ once: true }}
            //         transition={{ duration: 0.5 }}
            //       >
            //         <Card>
            //           <CardHeader>
            //             <CardTitle>Contact Information</CardTitle>
            //             <CardDescription>Reach out to us through any of these channels</CardDescription>
            //           </CardHeader>
            //           <CardContent className="space-y-4">
            //             <div className="flex items-center space-x-3">
            //               <Mail className="h-5 w-5 text-muted-foreground" />
            //               <span>team@devteam.com</span>
            //             </div>
            //             <div className="flex items-center space-x-3">
            //               <Github className="h-5 w-5 text-muted-foreground" />
            //               <span>github.com/devteam</span>
            //             </div>
            //             <div className="flex items-center space-x-3">
            //               <Linkedin className="h-5 w-5 text-muted-foreground" />
            //               <span>linkedin.com/company/devteam</span>
            //             </div>
            //           </CardContent>
            //         </Card>
            //       </motion.div>
            //       <motion.div
            //         initial={{ opacity: 0, x: 50 }}
            //         whileInView={{ opacity: 1, x: 0 }}
            //         viewport={{ once: true }}
            //         transition={{ duration: 0.5 }}
            //       >
            //         <Card>
            //           <CardHeader>
            //             <CardTitle>Send Us a Message</CardTitle>
            //             <CardDescription>Fill out the form below to get in touch</CardDescription>
            //           </CardHeader>
            //           <CardContent>
            //             <form className="space-y-4">
            //               <div className="grid grid-cols-2 gap-4">
            //                 <div className="space-y-2">
            //                   <label
            //                     htmlFor="first-name"
            //                     className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            //                   >
            //                     First name
            //                   </label>
            //                   <input
            //                     id="first-name"
            //                     className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            //                     placeholder="John"
            //                   />
            //                 </div>
            //                 <div className="space-y-2">
            //                   <label
            //                     htmlFor="last-name"
            //                     className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            //                   >
            //                     Last name
            //                   </label>
            //                   <input
            //                     id="last-name"
            //                     className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            //                     placeholder="Doe"
            //                   />
            //                 </div>
            //               </div>
            //               <div className="space-y-2">
            //                 <label
            //                   htmlFor="email"
            //                   className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            //                 >
            //                   Email
            //                 </label>
            //                 <input
            //                   id="email"
            //                   type="email"
            //                   className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            //                   placeholder="john.doe@example.com"
            //                 />
            //               </div>
            //               <div className="space-y-2">
            //                 <label
            //                   htmlFor="message"
            //                   className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            //                 >
            //                   Message
            //                 </label>
            //                 <textarea
            //                   id="message"
            //                   className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            //                   placeholder="Tell us about your project..."
            //                 />
            //               </div>
            //               <Button type="submit" className="w-full">
            //                 Send Message
            //               </Button>
            //             </form>
            //           </CardContent>
            //         </Card>
            //       </motion.div>
            //     </div>
            //   </div>
            // </AnimatedSection>
            ""
          )}
          {/* END: contact sections */}

        </main>
        {/* END: section contents */}

        {/* START: footer */}
        <footer className="w-full border-t py-6 md:py-0">
          <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
            <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} DevTeam. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
        </footer>
        {/* END: footer */}

      </motion.div>
    </AnimatePresence>
  )
}

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Code, GraduationCap, Mail, MessageSquare, Phone, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ProjectCard } from "@/components/project-card"
import { ContactForm } from "@/components/contact-form"
import { SkillsSection } from "@/components/skills-section"
import { TestimonialCard } from "@/components/testimonial-card"
import { HeroSection } from "@/components/hero-section"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />

        <section id="about" className="container py-24 md:py-32">
          <div className="grid gap-10 md:grid-cols-2 md:gap-16">
            <div className="space-y-6">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">About Me</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Crafting digital experiences with purpose
              </h2>
              <p className="text-muted-foreground">
                I'm a passionate junior web developer and educational technologist with a focus on creating engaging
                digital experiences that help people learn and grow.
              </p>
              <p className="text-muted-foreground">
                With a background in both education and technology, I bring a unique perspective to my work, combining
                technical skills with an understanding of how people learn and interact with digital content.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button asChild>
                  <Link href="#contact">
                    Contact Me
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="#projects">View My Work</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -left-4 -top-4 h-[calc(100%+2rem)] w-[calc(100%+2rem)] rounded-xl bg-primary/5"></div>
              <div className="relative aspect-square overflow-hidden rounded-xl">
                <Image
                  src="/placeholder.svg?height=600&width=600"
                  alt="Profile"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-6 -right-6 h-24 w-24 rounded-full bg-primary"></div>
            </div>
          </div>
        </section>

        <section id="skills" className="relative py-24 md:py-32">
          <div className="absolute inset-0 -z-10 bg-muted/50 dark:bg-muted/10"></div>
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#1f2937_1px,transparent_1px)] [background-size:20px_20px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
          <div className="container">
            <div className="mx-auto max-w-[58rem] text-center">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Skills</div>
              <h2 className="mt-6 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Skills</h2>
              <p className="mt-4 text-muted-foreground">
                I've developed a diverse set of skills across web development and educational technology.
              </p>
            </div>
            <SkillsSection />
          </div>
        </section>

        <section id="projects" className="container py-24 md:py-32">
          <div className="mx-auto max-w-[58rem] text-center">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Portfolio</div>
            <h2 className="mt-6 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Projects</h2>
            <p className="mt-4 text-muted-foreground">
              Check out some of my recent work across web development and educational technology.
            </p>
          </div>
          <Tabs defaultValue="all" className="mt-12">
            <div className="flex justify-center">
              <TabsList className="bg-primary/5 dark:bg-primary/10">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="web">Web Development</TabsTrigger>
                <TabsTrigger value="edtech">Educational Tech</TabsTrigger>
              </TabsList>
            </div>
            <TabsContent value="all" className="mt-8">
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                <ProjectCard
                  title="Learning Management System"
                  description="A custom LMS built with React and Node.js for a local coding bootcamp."
                  image="/placeholder.svg?height=400&width=600"
                  tags={["React", "Node.js", "MongoDB"]}
                  link="#"
                />
                <ProjectCard
                  title="E-commerce Website"
                  description="A fully responsive e-commerce platform with payment integration."
                  image="/placeholder.svg?height=400&width=600"
                  tags={["Next.js", "Stripe", "Tailwind CSS"]}
                  link="#"
                />
                <ProjectCard
                  title="Interactive Learning Tool"
                  description="An interactive tool for teaching programming concepts to beginners."
                  image="/placeholder.svg?height=400&width=600"
                  tags={["JavaScript", "Canvas API", "Education"]}
                  link="#"
                />
                <ProjectCard
                  title="Portfolio Website"
                  description="A custom portfolio website for a graphic designer."
                  image="/placeholder.svg?height=400&width=600"
                  tags={["React", "Framer Motion", "CSS"]}
                  link="#"
                />
                <ProjectCard
                  title="Educational Game"
                  description="A math learning game for elementary school students."
                  image="/placeholder.svg?height=400&width=600"
                  tags={["JavaScript", "HTML5", "Education"]}
                  link="#"
                />
                <ProjectCard
                  title="Community Forum"
                  description="A community forum for developers to share knowledge and resources."
                  image="/placeholder.svg?height=400&width=600"
                  tags={["Next.js", "Firebase", "Tailwind CSS"]}
                  link="#"
                />
              </div>
            </TabsContent>
            <TabsContent value="web" className="mt-8">
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                <ProjectCard
                  title="E-commerce Website"
                  description="A fully responsive e-commerce platform with payment integration."
                  image="/placeholder.svg?height=400&width=600"
                  tags={["Next.js", "Stripe", "Tailwind CSS"]}
                  link="#"
                />
                <ProjectCard
                  title="Portfolio Website"
                  description="A custom portfolio website for a graphic designer."
                  image="/placeholder.svg?height=400&width=600"
                  tags={["React", "Framer Motion", "CSS"]}
                  link="#"
                />
                <ProjectCard
                  title="Community Forum"
                  description="A community forum for developers to share knowledge and resources."
                  image="/placeholder.svg?height=400&width=600"
                  tags={["Next.js", "Firebase", "Tailwind CSS"]}
                  link="#"
                />
              </div>
            </TabsContent>
            <TabsContent value="edtech" className="mt-8">
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                <ProjectCard
                  title="Learning Management System"
                  description="A custom LMS built with React and Node.js for a local coding bootcamp."
                  image="/placeholder.svg?height=400&width=600"
                  tags={["React", "Node.js", "MongoDB"]}
                  link="#"
                />
                <ProjectCard
                  title="Interactive Learning Tool"
                  description="An interactive tool for teaching programming concepts to beginners."
                  image="/placeholder.svg?height=400&width=600"
                  tags={["JavaScript", "Canvas API", "Education"]}
                  link="#"
                />
                <ProjectCard
                  title="Educational Game"
                  description="A math learning game for elementary school students."
                  image="/placeholder.svg?height=400&width=600"
                  tags={["JavaScript", "HTML5", "Education"]}
                  link="#"
                />
              </div>
            </TabsContent>
          </Tabs>
        </section>

        <section id="services" className="relative py-24 md:py-32">
          <div className="absolute inset-0 -z-10 bg-muted/50 dark:bg-muted/10"></div>
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,transparent_0%,#f3f4f6_40%,#f3f4f6_60%,transparent_100%)] dark:bg-[linear-gradient(to_right,transparent_0%,#1f2937_40%,#1f2937_60%,transparent_100%)]"></div>
          <div className="container">
            <div className="mx-auto max-w-[58rem] text-center">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Services</div>
              <h2 className="mt-6 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Services</h2>
              <p className="mt-4 text-muted-foreground">
                Here's how I can help you with your web development and educational technology needs.
              </p>
            </div>
            <div className="mx-auto mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card className="group relative overflow-hidden border-none bg-background/50 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl dark:bg-muted/20">
                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                <CardHeader>
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Code className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Web Development</CardTitle>
                  <CardDescription>
                    Custom websites and web applications built with modern technologies.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="grid gap-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4 text-primary"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>Responsive website design</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4 text-primary"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>E-commerce solutions</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4 text-primary"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>Web application development</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4 text-primary"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>Frontend development</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full">
                    <Link href="#contact">Get Started</Link>
                  </Button>
                </CardFooter>
              </Card>
              <Card className="group relative overflow-hidden border-none bg-background/50 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl dark:bg-muted/20">
                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                <CardHeader>
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Educational Technology</CardTitle>
                  <CardDescription>Digital learning solutions that engage and educate.</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="grid gap-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4 text-primary"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>Learning management systems</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4 text-primary"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>Interactive learning tools</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4 text-primary"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>Educational games</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4 text-primary"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>E-learning content development</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full">
                    <Link href="#contact">Get Started</Link>
                  </Button>
                </CardFooter>
              </Card>
              <Card className="group relative overflow-hidden border-none bg-background/50 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl dark:bg-muted/20">
                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                <CardHeader>
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <MessageSquare className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Consultation</CardTitle>
                  <CardDescription>Expert advice on web development and educational technology.</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="grid gap-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4 text-primary"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>Technology stack recommendations</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4 text-primary"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>Digital learning strategy</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4 text-primary"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>UX/UI design feedback</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4 text-primary"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>Project planning and scoping</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full">
                    <Link href="#contact">Get Started</Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        <section id="testimonials" className="container py-24 md:py-32">
          <div className="mx-auto max-w-[58rem] text-center">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Testimonials</div>
            <h2 className="mt-6 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Testimonials</h2>
            <p className="mt-4 text-muted-foreground">
              Here's what clients and collaborators have to say about working with me.
            </p>
          </div>
          <div className="mx-auto mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <TestimonialCard
              quote="Working with this developer was a game-changer for our educational platform. They understood both the technical requirements and the educational goals."
              author="Sarah Johnson"
              role="Education Director"
              avatar="/placeholder.svg?height=100&width=100"
            />
            <TestimonialCard
              quote="The e-commerce website they built for us exceeded our expectations. Clean code, responsive design, and excellent communication throughout the project."
              author="Michael Chen"
              role="Small Business Owner"
              avatar="/placeholder.svg?height=100&width=100"
            />
            <TestimonialCard
              quote="Their ability to translate complex educational concepts into engaging digital experiences is remarkable. Our students love the interactive learning tools."
              author="Dr. Emily Rodriguez"
              role="University Professor"
              avatar="/placeholder.svg?height=100&width=100"
            />
          </div>
        </section>

        <section id="contact" className="relative py-24 md:py-32">
          <div className="absolute inset-0 -z-10 bg-muted/50 dark:bg-muted/10"></div>
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#1f2937_1px,transparent_1px)] [background-size:20px_20px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
          <div className="container">
            <div className="mx-auto max-w-[58rem] text-center">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Contact</div>
              <h2 className="mt-6 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get in Touch</h2>
              <p className="mt-4 text-muted-foreground">
                Interested in working together? Fill out the form below and I'll get back to you as soon as possible.
              </p>
            </div>
            <div className="mx-auto mt-12 grid max-w-5xl gap-8 md:grid-cols-2">
              <div className="relative">
                <div className="absolute -left-4 -top-4 h-24 w-24 rounded-full bg-primary/10"></div>
                <div className="relative space-y-6 rounded-xl bg-background/80 p-8 backdrop-blur-sm dark:bg-muted/30">
                  <h3 className="text-xl font-bold">Contact Information</h3>
                  <p className="text-muted-foreground">
                    Feel free to reach out through the form or directly via the contact details below.
                  </p>
                  <div className="grid gap-4">
                    <div className="flex items-center gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                        <Mail className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">Email</p>
                        <p className="text-sm text-muted-foreground">hello@example.com</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                        <Phone className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">Phone</p>
                        <p className="text-sm text-muted-foreground">(123) 456-7890</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                        <User className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">Social Media</p>
                        <div className="mt-1 flex gap-3">
                          <Link href="#" className="text-muted-foreground hover:text-foreground">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="h-5 w-5"
                            >
                              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                              <rect width="4" height="12" x="2" y="9" />
                              <circle cx="4" cy="4" r="2" />
                            </svg>
                            <span className="sr-only">LinkedIn</span>
                          </Link>
                          <Link href="#" className="text-muted-foreground hover:text-foreground">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="h-5 w-5"
                            >
                              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                              <path d="M9 18c-4.51 2-5-2-7-2" />
                            </svg>
                            <span className="sr-only">GitHub</span>
                          </Link>
                          <Link href="#" className="text-muted-foreground hover:text-foreground">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="h-5 w-5"
                            >
                              <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                            </svg>
                            <span className="sr-only">Twitter</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 h-24 w-24 rounded-full bg-primary/10"></div>
              </div>
              <div className="relative">
                <div className="relative rounded-xl bg-background/80 p-8 backdrop-blur-sm dark:bg-muted/30">
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}

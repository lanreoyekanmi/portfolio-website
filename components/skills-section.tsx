"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"

export function SkillsSection() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <Tabs defaultValue="web" className="mt-12">
      <div className="flex justify-center">
        <TabsList className="bg-primary/5 dark:bg-primary/10">
          <TabsTrigger value="web">Web Development</TabsTrigger>
          <TabsTrigger value="edtech">Educational Tech</TabsTrigger>
          <TabsTrigger value="soft">Soft Skills</TabsTrigger>
        </TabsList>
      </div>
      <TabsContent value="web" className="mt-8">
        <motion.div
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.div variants={item}>
            <Card className="border-none bg-background/50 shadow-lg dark:bg-muted/20">
              <CardHeader>
                <CardTitle>Frontend</CardTitle>
                <CardDescription>Technologies and frameworks I use for frontend development</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                <Badge className="bg-primary/10 text-primary hover:bg-primary/20">HTML5</Badge>
                <Badge className="bg-primary/10 text-primary hover:bg-primary/20">CSS3</Badge>
                <Badge className="bg-primary/10 text-primary hover:bg-primary/20">JavaScript</Badge>
                <Badge className="bg-primary/10 text-primary hover:bg-primary/20">TypeScript</Badge>
                <Badge className="bg-primary/10 text-primary hover:bg-primary/20">React</Badge>
                <Badge className="bg-primary/10 text-primary hover:bg-primary/20">Next.js</Badge>
                <Badge className="bg-primary/10 text-primary hover:bg-primary/20">Tailwind CSS</Badge>
                <Badge className="bg-primary/10 text-primary hover:bg-primary/20">Framer Motion</Badge>
                <Badge className="bg-primary/10 text-primary hover:bg-primary/20">Responsive Design</Badge>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div variants={item}>
            <Card className="border-none bg-background/50 shadow-lg dark:bg-muted/20">
              <CardHeader>
                <CardTitle>Backend</CardTitle>
                <CardDescription>Technologies and frameworks I use for backend development</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                <Badge className="bg-primary/10 text-primary hover:bg-primary/20">Node.js</Badge>
                <Badge className="bg-primary/10 text-primary hover:bg-primary/20">Express</Badge>
                <Badge className="bg-primary/10 text-primary hover:bg-primary/20">MongoDB</Badge>
                <Badge className="bg-primary/10 text-primary hover:bg-primary/20">Firebase</Badge>
                <Badge className="bg-primary/10 text-primary hover:bg-primary/20">REST APIs</Badge>
                <Badge className="bg-primary/10 text-primary hover:bg-primary/20">GraphQL</Badge>
                <Badge className="bg-primary/10 text-primary hover:bg-primary/20">SQL</Badge>
                <Badge className="bg-primary/10 text-primary hover:bg-primary/20">Serverless</Badge>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div variants={item}>
            <Card className="border-none bg-background/50 shadow-lg dark:bg-muted/20">
              <CardHeader>
                <CardTitle>Tools & Workflow</CardTitle>
                <CardDescription>Tools and practices I use in my development workflow</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                <Badge className="bg-primary/10 text-primary hover:bg-primary/20">Git</Badge>
                <Badge className="bg-primary/10 text-primary hover:bg-primary/20">GitHub</Badge>
                <Badge className="bg-primary/10 text-primary hover:bg-primary/20">VS Code</Badge>
                <Badge className="bg-primary/10 text-primary hover:bg-primary/20">Figma</Badge>
                <Badge className="bg-primary/10 text-primary hover:bg-primary/20">Vercel</Badge>
                <Badge className="bg-primary/10 text-primary hover:bg-primary/20">Netlify</Badge>
                <Badge className="bg-primary/10 text-primary hover:bg-primary/20">Jest</Badge>
                <Badge className="bg-primary/10 text-primary hover:bg-primary/20">CI/CD</Badge>
                <Badge className="bg-primary/10 text-primary hover:bg-primary/20">Agile</Badge>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </TabsContent>
      <TabsContent value="edtech" className="mt-8">
        <motion.div
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.div variants={item}>
            <Card className="border-none bg-background/50 shadow-lg dark:bg-muted/20">
              <CardHeader>
                <CardTitle>Learning Platforms</CardTitle>
                <CardDescription>Platforms and tools I use for educational technology</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                <Badge className="bg-primary/10 text-primary hover:bg-primary/20">LMS Development</Badge>
                <Badge className="bg-primary/10 text-primary hover:bg-primary/20">Canvas</Badge>
                <Badge className="bg-primary/10 text-primary hover:bg-primary/20">Moodle</Badge>
                <Badge className="bg-primary/10 text-primary hover:bg-primary/20">Blackboard</Badge>
                <Badge className="bg-primary/10 text-primary hover:bg-primary/20">Google Classroom</Badge>
                <Badge className="bg-primary/10 text-primary hover:bg-primary/20">Custom LMS Solutions</Badge>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div variants={item}>
            <Card className="border-none bg-background/50 shadow-lg dark:bg-muted/20">
              <CardHeader>
                <CardTitle>Interactive Learning</CardTitle>
                <CardDescription>Technologies I use for creating interactive learning experiences</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                <Badge className="bg-primary/10 text-primary hover:bg-primary/20">H5P</Badge>
                <Badge className="bg-primary/10 text-primary hover:bg-primary/20">Interactive JavaScript</Badge>
                <Badge className="bg-primary/10 text-primary hover:bg-primary/20">Educational Games</Badge>
                <Badge className="bg-primary/10 text-primary hover:bg-primary/20">Simulations</Badge>
                <Badge className="bg-primary/10 text-primary hover:bg-primary/20">Quizzes & Assessments</Badge>
                <Badge className="bg-primary/10 text-primary hover:bg-primary/20">Learning Analytics</Badge>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div variants={item}>
            <Card className="border-none bg-background/50 shadow-lg dark:bg-muted/20">
              <CardHeader>
                <CardTitle>Instructional Design</CardTitle>
                <CardDescription>Approaches and methodologies I use for educational content</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                <Badge className="bg-primary/10 text-primary hover:bg-primary/20">ADDIE Model</Badge>
                <Badge className="bg-primary/10 text-primary hover:bg-primary/20">Microlearning</Badge>
                <Badge className="bg-primary/10 text-primary hover:bg-primary/20">Gamification</Badge>
                <Badge className="bg-primary/10 text-primary hover:bg-primary/20">Scenario-based Learning</Badge>
                <Badge className="bg-primary/10 text-primary hover:bg-primary/20">Multimedia Learning</Badge>
                <Badge className="bg-primary/10 text-primary hover:bg-primary/20">Accessibility</Badge>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </TabsContent>
      <TabsContent value="soft" className="mt-8">
        <motion.div
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.div variants={item}>
            <Card className="border-none bg-background/50 shadow-lg dark:bg-muted/20">
              <CardHeader>
                <CardTitle>Communication</CardTitle>
                <CardDescription>How I communicate and collaborate with clients and teams</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                <Badge className="bg-primary/10 text-primary hover:bg-primary/20">Clear Communication</Badge>
                <Badge className="bg-primary/10 text-primary hover:bg-primary/20">Technical Writing</Badge>
                <Badge className="bg-primary/10 text-primary hover:bg-primary/20">Client Presentations</Badge>
                <Badge className="bg-primary/10 text-primary hover:bg-primary/20">Requirements Gathering</Badge>
                <Badge className="bg-primary/10 text-primary hover:bg-primary/20">Documentation</Badge>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div variants={item}>
            <Card className="border-none bg-background/50 shadow-lg dark:bg-muted/20">
              <CardHeader>
                <CardTitle>Problem Solving</CardTitle>
                <CardDescription>My approach to solving complex problems</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                <Badge className="bg-primary/10 text-primary hover:bg-primary/20">Critical Thinking</Badge>
                <Badge className="bg-primary/10 text-primary hover:bg-primary/20">Analytical Skills</Badge>
                <Badge className="bg-primary/10 text-primary hover:bg-primary/20">Research</Badge>
                <Badge className="bg-primary/10 text-primary hover:bg-primary/20">Debugging</Badge>
                <Badge className="bg-primary/10 text-primary hover:bg-primary/20">Creative Solutions</Badge>
                <Badge className="bg-primary/10 text-primary hover:bg-primary/20">Adaptability</Badge>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div variants={item}>
            <Card className="border-none bg-background/50 shadow-lg dark:bg-muted/20">
              <CardHeader>
                <CardTitle>Project Management</CardTitle>
                <CardDescription>How I manage projects and workflows</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                <Badge className="bg-primary/10 text-primary hover:bg-primary/20">Time Management</Badge>
                <Badge className="bg-primary/10 text-primary hover:bg-primary/20">Organization</Badge>
                <Badge className="bg-primary/10 text-primary hover:bg-primary/20">Prioritization</Badge>
                <Badge className="bg-primary/10 text-primary hover:bg-primary/20">Attention to Detail</Badge>
                <Badge className="bg-primary/10 text-primary hover:bg-primary/20">Meeting Deadlines</Badge>
                <Badge className="bg-primary/10 text-primary hover:bg-primary/20">Agile Methodologies</Badge>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </TabsContent>
    </Tabs>
  )
}

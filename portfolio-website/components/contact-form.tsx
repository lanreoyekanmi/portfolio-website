"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { Loader2 } from "lucide-react"

export function ContactForm() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission with a delay
    setTimeout(() => {
      setIsSubmitting(false)

      toast({
        title: "Message received!",
        description: "Thank you for your message. I'll get back to you soon.",
      })

      // Reset form
      e.currentTarget.reset()
    }, 1500)
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-6">
      <div className="grid gap-3">
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          name="name"
          placeholder="Your name"
          required
          className="border-muted-foreground/20 bg-background/50 backdrop-blur-sm focus-visible:ring-primary dark:bg-muted/30"
        />
      </div>
      <div className="grid gap-3">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="Your email"
          required
          className="border-muted-foreground/20 bg-background/50 backdrop-blur-sm focus-visible:ring-primary dark:bg-muted/30"
        />
      </div>
      <div className="grid gap-3">
        <Label htmlFor="subject">Subject</Label>
        <Input
          id="subject"
          name="subject"
          placeholder="Subject of your message"
          required
          className="border-muted-foreground/20 bg-background/50 backdrop-blur-sm focus-visible:ring-primary dark:bg-muted/30"
        />
      </div>
      <div className="grid gap-3">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Your message"
          className="min-h-[150px] resize-none border-muted-foreground/20 bg-background/50 backdrop-blur-sm focus-visible:ring-primary dark:bg-muted/30"
          required
        />
      </div>
      <Button type="submit" disabled={isSubmitting} className="group">
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            Send Message
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
              className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </>
        )}
      </Button>
    </form>
  )
}

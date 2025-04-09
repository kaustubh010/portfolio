"use client"

import { motion } from "framer-motion"
import { Mail, Phone } from "lucide-react"
import { useForm as useFormspree, ValidationError } from "@formspree/react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"

export default function Contact() {
  const [state, handleSubmit] = useFormspree("maneayvb")

  return (
    <section className="relative overflow-hidden bg-zinc-900 py-20" id="contact">
      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="mb-4 text-4xl font-bold text-white tracking-tight">Get in Touch</h2>
          <p className="mb-8 text-gray-400 text-base sm:text-lg">
            Interested in working together or have a question? Feel free to reach out!
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="h-full bg-zinc-800 border-none shadow-xl">
              <CardContent className="flex h-full flex-col justify-center p-6">
                <h3 className="mb-6 text-xl font-semibold text-teal-400">Contact Information</h3>

                <div className="mb-6 space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-400/10 text-teal-400">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Email</p>
                      <a href="mailto:kaustubhbhara420@gmail.com" className="text-white hover:text-teal-400">
                        kaustubhbhara420@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-400/10 text-teal-400">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">WhatsApp</p>
                      <a href="https://wa.me/+918824854410" className="text-white hover:text-teal-400">
                        +91 8824854410
                      </a>
                    </div>
                  </div>
                </div>

                <p className="text-gray-400">
                  I'm currently available for freelance work and full-time positions. Let's connect!
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Card className="bg-zinc-800 border-none shadow-xl">
              <CardContent className="p-6">
                {state.succeeded ? (
                  <div className="text-center text-green-400 text-lg font-medium">
                    🎉 Thank you! Your message has been sent.
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-white mb-1">
                        Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        placeholder="Your name"
                        className="bg-slate-200 placeholder:text-gray-600"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-white mb-1">
                        Email
                      </label>
                      <Input
                        id="email"
                        type="email"
                        name="email"
                        required
                        placeholder="you@example.com"
                        className="bg-slate-200 placeholder:text-gray-600"
                      />
                      <ValidationError prefix="Email" field="email" errors={state.errors} />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-white mb-1">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        placeholder="Write your message here..."
                        className="min-h-[120px] bg-slate-200 placeholder:text-gray-600"
                      />
                      <ValidationError prefix="Message" field="message" errors={state.errors} />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-teal-600 hover:bg-teal-700"
                      disabled={state.submitting}
                    >
                      {state.submitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>

      {/* Grid background */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          {Array.from({ length: 50 }).map((_, i) => (
            <line key={i} x1={i * 2} y1="0" x2={i * 2} y2="100" stroke="white" strokeWidth="0.1" />
          ))}
        </svg>
      </div>
    </section>
  )
}

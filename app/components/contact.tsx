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
    <section className="relative overflow-hidden bg-slate-950 py-24" id="contact">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-slate-950 to-slate-900/80" />
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="h-full w-full" style={{
          backgroundImage: `linear-gradient(rgba(148, 163, 184, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(148, 163, 184, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center mb-16"
        >
          <h2 className="mb-4 text-5xl md:text-6xl font-bold text-white tracking-tight">
            Get in Touch
          </h2>
          <p className="text-lg text-slate-400">
            Interested in working together or have a question? Feel free to reach out!
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="h-full bg-slate-900/50 backdrop-blur-sm border border-slate-800 shadow-2xl">
              <CardContent className="flex h-full flex-col justify-center p-8">
                <h3 className="mb-8 text-2xl font-semibold text-white">
                  Contact Information
                </h3>

                <div className="mb-8 space-y-6">
                  <div className="flex items-center gap-4 group">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500 to-blue-600 shadow-lg shadow-sky-500/20 transition-transform group-hover:scale-110">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500 mb-1">Email</p>
                      <a 
                        href="mailto:kaustubhbhara420@gmail.com" 
                        className="text-white hover:text-sky-400 transition-colors text-base"
                      >
                        kaustubhbhardwaj00@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 group">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-green-600 shadow-lg shadow-emerald-500/20 transition-transform group-hover:scale-110">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500 mb-1">WhatsApp</p>
                      <a 
                        href="https://wa.me/+918824854410" 
                        className="text-white hover:text-emerald-400 transition-colors text-base"
                      >
                        +91 8824854410
                      </a>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-800">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700/50">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
                    <span className="text-sm text-slate-300">
                      Available for Freelance Work
                    </span>
                  </div>
                  <p className="text-slate-400 mt-4">
                    I'm currently available for freelance work and full-time positions. Let's connect!
                  </p>
                </div>
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
            <Card className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 shadow-2xl">
              <CardContent className="p-8">
                {state.succeeded ? (
                  <div className="text-center py-12">
                    <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/10 mb-4">
                      <span className="text-4xl">🎉</span>
                    </div>
                    <h3 className="text-2xl font-semibold text-white mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-slate-400">
                      Thank you for reaching out. I'll get back to you soon.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                        Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        placeholder="Your name"
                        className="bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-500 focus:border-sky-500 focus:ring-sky-500/20 transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                        Email
                      </label>
                      <Input
                        id="email"
                        type="email"
                        name="email"
                        required
                        placeholder="you@example.com"
                        className="bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-500 focus:border-sky-500 focus:ring-sky-500/20 transition-colors"
                      />
                      <ValidationError prefix="Email" field="email" errors={state.errors} />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        placeholder="Write your message here..."
                        className="min-h-[140px] bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-500 focus:border-sky-500 focus:ring-sky-500/20 transition-colors resize-none"
                      />
                      <ValidationError prefix="Message" field="message" errors={state.errors} />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-sky-500 hover:bg-sky-400 text-white font-semibold py-6 rounded-full shadow-lg shadow-sky-500/30 transition-all hover:shadow-sky-500/40 hover:-translate-y-0.5 active:translate-y-0"
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
    </section>
  )
}
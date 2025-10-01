"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Clock } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function Contact() {
  const contactItems = [
    {
      icon: Mail,
      label: "Email",
      value: "kaustubhbhardwaj00@gmail.com",
      href: "mailto:kaustubhbhardwaj00@gmail.com",
      gradient: "from-sky-500 to-blue-600",
      shadow: "shadow-sky-500/20",
      hoverColor: "hover:text-sky-400"
    },
    {
      icon: Phone,
      label: "WhatsApp",
      value: "+91 8824854410",
      href: "https://wa.me/+918824854410",
      gradient: "from-emerald-500 to-green-600",
      shadow: "shadow-emerald-500/20",
      hoverColor: "hover:text-emerald-400"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Jaipur, Rajasthan, India",
      gradient: "from-purple-500 to-pink-600",
      shadow: "shadow-purple-500/20",
      hoverColor: "hover:text-purple-400"
    },
    {
      icon: Clock,
      label: "Availability",
      value: "Open to Opportunities",
      gradient: "from-amber-500 to-orange-600",
      shadow: "shadow-amber-500/20",
      hoverColor: "hover:text-amber-400"
    }
  ]

  return (
    <section className="relative overflow-hidden bg-slate-950 py-20 sm:py-24" id="contact">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-slate-950 to-slate-900/80" />
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `linear-gradient(rgba(148,163,184,0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(148,163,184,0.1) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl text-center mb-12 sm:mb-16"
        >
          <h2 className="mb-4 text-3xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight">
            Let's Connect
          </h2>
          <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto">
            I'm always interested in hearing about new projects and opportunities. 
            Feel free to reach out through any of the channels below.
          </p>
        </motion.div>

        <div className="mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 shadow-2xl overflow-hidden">
              <CardContent className="p-6 sm:p-10 md:p-12">
                <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
                  {contactItems.map((item, index) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.1 * index }}
                      viewport={{ once: true }}
                      className="group flex items-center gap-4"
                    >
                      <div className={`flex h-12 w-12 sm:h-14 sm:w-14 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${item.gradient} shadow-lg ${item.shadow} transition-transform group-hover:scale-110 group-hover:rotate-3`}>
                        <item.icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs sm:text-sm text-slate-500 mb-1 font-medium uppercase tracking-wider">
                          {item.label}
                        </p>
                        {item.href ? (
                          <a 
                            href={item.href}
                            target={item.label === "WhatsApp" ? "_blank" : undefined}
                            rel={item.label === "WhatsApp" ? "noopener noreferrer" : undefined}
                            className={`text-sm sm:text-base md:text-lg text-white ${item.hoverColor} transition-colors font-medium break-all block leading-tight`}
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-sm sm:text-base md:text-lg text-white font-medium leading-tight">
                            {item.value}
                          </p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                  className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-slate-800"
                >
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700/50">
                      <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
                      <span className="text-xs sm:text-sm text-slate-300 font-medium">
                        Available for Freelance & Full-time
                      </span>
                    </div>
                    <p className="text-slate-400 text-xs sm:text-sm text-center sm:text-right">
                      Response time: Within 24 hours
                    </p>
                  </div>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
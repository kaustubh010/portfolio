import Hero from "./components/hero"
import About from "./components/about"
import Projects from "./components/projects"
import Contact from "./components/contact"
import Footer from "./components/footer"

export default function Page() {
  return (
    <main className="min-h-screen bg-zinc-900 text-white">
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}


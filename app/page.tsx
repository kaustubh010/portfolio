import Navbar from "../components/navbar"
import Hero from "../components/hero"
import About from "../components/about"
import Projects from "../components/projects"
import Contact from "../components/contact"
import Footer from "../components/footer"

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}

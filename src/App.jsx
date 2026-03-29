import Navbar from "@/layout/Navbar";
import  Hero  from "@/sections/Hero";
import  About  from "@/sections/About";
import  Projects  from "@/sections/Projects";
import  Certificate  from "@/sections/Certificate";
import Contact from "@/sections/Contact";
import Footer from "@/layout/Footer";

export default function App() {

  return (
    <div className="min-h-screen overflow-x-hidden text-foreground selection:bg-primary/30">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Certificate />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

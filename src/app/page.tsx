import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import CursorGlow from "@/components/CursorGlow";
import MagneticLinks from "@/components/MagneticLinks";
import ParticleField from "@/components/ParticleField";

export default function Home() {
  return (
    <main className="grid-bg min-h-screen relative bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <ParticleField />
      <CursorGlow />
      <ScrollProgress />
      <MagneticLinks />
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}

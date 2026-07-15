import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Education } from "@/components/education";
import { Experience } from "@/components/experience";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";
import { Certifications } from "@/components/certifications";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="mx-auto w-full max-w-4xl flex-1 px-6">
        <Hero />
        <About />
        <Education />
        <Experience />
        <Projects />
        <Skills />
        <Certifications />
      </main>
      <Footer />
    </>
  );
}

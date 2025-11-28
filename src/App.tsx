// src/App.tsx
import { projects } from "./data/projects";
import { ProjectCard } from "./components/ProjectCard";

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      {/* NAVBAR */}
      <header className="sticky top-0 z-20 backdrop-blur border-b border-slate-800/80 bg-slate-950/70">
        <nav className="max-w-5xl mx-auto flex items-center justify-between px-4 py-3">
          <span className="font-semibold tracking-tight">
            Beatrice Errico
          </span>
          <div className="hidden sm:flex gap-4 text-sm text-slate-300">
            <a href="#projects" className="hover:text-white">
              Progetti
            </a>
            <a href="#skills" className="hover:text-white">
              Competenze
            </a>
            <a href="#about" className="hover:text-white">
              Chi sono
            </a>
            <a href="#contact" className="hover:text-white">
              Contatti
            </a>
          </div>
        </nav>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-10 space-y-24">
        {/* HERO */}
        <section id="hero" className="space-y-4">
          <p className="text-sm text-slate-400">Ciao, sono</p>
          <h1 className="text-3xl md:text-4xl font-bold">
            Beatrice Errico
          </h1>
          <h2 className="text-xl md:text-2xl text-slate-200">
            Junior Full-Stack Web Developer (React, Next.js, Laravel)
          </h2>
          <p className="max-w-2xl text-slate-300 text-sm md:text-base">
            Sviluppo applicazioni web moderne, curate e orientate al business,
            dal frontend all&apos;API.
          </p>
          <div className="flex gap-3 mt-4">
            <a
              href="#projects"
              className="px-4 py-2 rounded-lg bg-slate-100 text-slate-950 text-sm font-medium"
            >
              Guarda i progetti
            </a>
            <a
              href="/cv.pdf"
              className="px-4 py-2 rounded-lg border border-slate-600 text-sm"
            >
              Scarica il CV
            </a>
          </div>
        </section>

        {/* PROGETTI */}
        <section id="projects" className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold">Progetti</h2>
            <p className="text-slate-300 text-sm mt-1">
              Una selezione di applicazioni che ho sviluppato dal frontend al backend.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

        {/* COMPETENZE */}
        <section id="skills" className="space-y-6">
          <h2 className="text-2xl font-semibold">Competenze</h2>
          <div className="grid gap-6 md:grid-cols-3 text-sm">
            <div>
              <h3 className="font-medium mb-2">Frontend</h3>
              <ul className="space-y-1 text-slate-300">
                <li>React</li>
                <li>Next.js (App Router)</li>
                <li>TypeScript (base)</li>
                <li>Tailwind CSS</li>
                <li>Vite</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-2">Backend</h3>
              <ul className="space-y-1 text-slate-300">
                <li>Supabase (PostgreSQL, Auth, RLS)</li>
                <li>Laravel (MVC, Blade, MySQL)</li>
                <li>REST API (base)</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-2">Strumenti</h3>
              <ul className="space-y-1 text-slate-300">
                <li>Git / GitHub</li>
                <li>npm</li>
                <li>VS Code</li>
                <li>Figma (wireframe/base UI)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* CHI SONO */}
        <section id="about" className="space-y-4">
          <h2 className="text-2xl font-semibold">Chi sono</h2>
          <p className="text-slate-300 text-sm md:text-base max-w-3xl">
            Sono una junior full-stack developer con un background ibrido tra
            sviluppo web e comunicazione digitale. Negli ultimi mesi mi sono
            concentrata sulla creazione di applicazioni web complete, dal frontend
            in React/Next.js al backend con Supabase e Laravel, lavorando su
            progetti concreti come gestionali, portali news e siti vetrina.
          </p>
          <p className="text-slate-300 text-sm md:text-base max-w-3xl">
            Mi interessa costruire interfacce pulite, logiche chiare e flussi che
            abbiano senso per chi deve usarli davvero. In un team porto cura per
            i dettagli, chiarezza nella comunicazione e disponibilità a sporcarmi
            le mani su ciò che serve, anche al di fuori della comfort zone tecnica.
          </p>
        </section>

        {/* CONTATTI */}
        <section id="contact" className="space-y-4">
          <h2 className="text-2xl font-semibold">Contatti</h2>
          <p className="text-slate-300 text-sm md:text-base">
            Per opportunità di lavoro o collaborazioni:
          </p>
          <ul className="space-y-1 text-sm text-slate-200">
            <li>
              Email:{" "}
              <a href="mailto:tuamail@example.com" className="underline underline-offset-4">
                1.beatriceerrico@gmail.com
              </a>
            </li>
            <li>
              LinkedIn:{" "}
              <a
                href="https://www.linkedin.com/in/beatrice-errico-developer/"
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-4"
              >
                linkedin.com/in/beatrice-errico-developer/
              </a>
            </li>
            <li>
              GitHub:{" "}
              <a
                href="https://github.com/Beatrice-Errico"
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-4"
              >
                github.com/Beatrice-Errico
              </a>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;

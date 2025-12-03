// src/App.jsx

import { projects } from "./data/projects";
import { ProjectCard } from "./components/ProjectCard";

function App() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_#ffe3f2,_#fff5fa)] text-[#241824]">
      {/* NAVBAR */}
      <header className="sticky top-0 z-20 backdrop-blur-md bg-[#fff5fa]/70 border-b border-rose-100">
        <nav className="max-w-5xl mx-auto flex items-center justify-between px-4 py-3">
          <span className="font-semibold tracking-tight text-sm md:text-base">
            Beatrice Errico
          </span>
          <div className="hidden sm:flex gap-4 text-sm text-[#8B6F8F]">
            <a href="#projects" className="hover:text-[#241824]">
              Progetti
            </a>
            <a href="#skills" className="hover:text-[#241824]">
              Competenze
            </a>
            <a href="#about" className="hover:text-[#241824]">
              Chi sono
            </a>
            <a href="#contact" className="hover:text-[#241824]">
              Contatti
            </a>
          </div>
        </nav>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-10 md:py-14 space-y-24">
        {/* HERO */}
        <section id="hero" className="py-6 md:py-10">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-10">
            {/* TESTO */}
            <div className="flex-1 space-y-4">
              <p className="text-sm font-medium text-rose-500">
                Junior Full-Stack / Front-End Developer
              </p>
              <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
                Ciao, sono Beatrice Errico.
              </h1>
              <p className="text-base md:text-lg leading-relaxed text-[#6b546c] max-w-xl">
                Sviluppo applicazioni web moderne con React, Next.js, Laravel e
                Supabase. Mi concentro su interfacce pulite, flussi chiari e
                soluzioni che abbiano senso per chi deve usarle davvero.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href="#projects"
                  className="inline-flex items-center px-5 py-2.5 rounded-full text-sm font-medium text-white
                             bg-gradient-to-r from-[#FF8A3C] to-[#FF2F7D] shadow-md hover:shadow-lg transition-shadow"
                >
                  Guarda i progetti
                </a>
                <a
                  href="/cv.pdf" // togli o sostituisci se non lo usi
                  className="inline-flex items-center px-5 py-2.5 rounded-full text-sm font-medium
                             border border-rose-200 bg-white/70 text-[#241824] hover:bg-white"
                >
                  Scarica il CV
                </a>
              </div>
            </div>

            {/* CARD STILE APP */}
            <div className="flex-1 flex justify-center">
              <div
                className="w-[260px] md:w-[290px] h-[520px] rounded-[40px] bg-white
                           shadow-[0_18px_45px_rgba(0,0,0,0.08)] border border-rose-100
                           p-5 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FF8A3C]
                                 to-[#FF2F7D]"
                    />
                    <div>
                      <p className="text-xs text-rose-400 font-medium">Portfolio</p>
                      <p className="text-sm font-semibold">Beatrice Errico</p>
                    </div>
                  </div>
                  <p className="text-sm font-medium text-[#241824]">
                    Front-End & Full-Stack Web Developer
                  </p>
                  <p className="text-xs leading-relaxed text-[#8B6F8F]">
                    React, Next.js, Laravel, Supabase. Progetti: gestionale centro
                    estetico, portale news, portale gaming, planner.
                  </p>
                </div>

                <div className="space-y-3">
                  <button
                    className="w-full inline-flex items-center justify-center rounded-full text-xs font-medium text-white
                               bg-gradient-to-r from-[#FF8A3C] to-[#FF2F7D] py-2.5"
                  >
                    Esplora i progetti
                  </button>
                  <button
                    className="w-full inline-flex items-center justify-center rounded-full text-xs font-medium
                               bg-rose-50 text-[#241824] py-2 border border-rose-100"
                  >
                    Vedi il codice su GitHub
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROGETTI */}
        <section id="projects" className="space-y-6">
          <div className="space-y-1">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
              Progetti
            </h2>
            <p className="text-sm md:text-base text-[#6b546c] max-w-2xl">
              Una selezione di applicazioni che ho sviluppato dal frontend al
              backend, tra percorsi formativi e progetti personali.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

        {/* COMPETENZE */}
        <section id="skills" className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
            Competenze
          </h2>
          <div className="grid gap-6 md:grid-cols-3 text-sm">
            <div className="space-y-2">
              <h3 className="font-medium text-[#241824]">Frontend</h3>
              <ul className="space-y-1 text-[#6b546c]">
                <li>React</li>
                <li>Next.js (App Router)</li>
                <li>JavaScript (ES6+)</li>
                <li>Tailwind CSS</li>
                <li>Vite</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="font-medium text-[#241824]">Backend</h3>
              <ul className="space-y-1 text-[#6b546c]">
                <li>Supabase (PostgreSQL, Auth, RLS)</li>
                <li>Laravel (MVC, Blade, MySQL)</li>
                <li>REST API (base)</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="font-medium text-[#241824]">Strumenti</h3>
              <ul className="space-y-1 text-[#6b546c]">
                <li>Git / GitHub</li>
                <li>Vercel</li>
                <li>npm</li>
                <li>VS Code</li>
                <li>Figma (wireframe/UI di base)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* CHI SONO */}
        <section id="about" className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
            Chi sono
          </h2>
          <p className="text-base leading-relaxed text-[#6b546c] max-w-3xl">
            Sono una junior full-stack developer con un background in Scienze
            della Comunicazione e Digital Marketing. Negli ultimi mesi mi sono
            concentrata sulla creazione di applicazioni web complete, dal
            frontend in React/Next.js al backend con Supabase e Laravel.
          </p>
          <p className="text-base leading-relaxed text-[#6b546c] max-w-3xl">
            Il mio background nella comunicazione mi aiuta a progettare
            interfacce chiare, orientate all&apos;utente, e a collaborare bene
            con team non tecnici. Cerco un ambiente dinamico in cui poter
            crescere come sviluppatrice e contribuire in modo pratico ai
            progetti del team.
          </p>
        </section>

        {/* CONTATTI */}
        <section id="contact" className="space-y-4 pb-10">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
            Contatti
          </h2>
          <p className="text-sm md:text-base text-[#6b546c]">
            Per opportunità di lavoro o collaborazioni:
          </p>
          <ul className="space-y-1 text-sm md:text-base text-[#241824]">
            <li>
              Email:{" "}
              <a
                href="mailto:1.beatriceerrico@gmail.com"
                className="underline underline-offset-4"
              >
                1.beatriceerrico@gmail.com
              </a>
            </li>
            <li>
              LinkedIn:{" "}
              <a
                href="https://www.linkedin.com/in/beatrice-errico-developer"
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-4"
              >
                linkedin.com/in/beatrice-errico-developer
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

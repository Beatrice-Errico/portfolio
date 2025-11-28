// src/data/projects.ts
export type Project = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  techStack: string[];
  highlights: string[];
  liveUrl?: string;
  codeUrl?: string;
};

export const projects: Project[] = [
  {
    id: "centro-estetico",
    title: "Centro Estetico",
    subtitle: "Gestionale prenotazioni per salone di bellezza",
    description:
      "Sistema full-stack per gestire listino, trattamenti, prenotazioni clienti e area admin.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "PostgreSQL"],
    highlights: [
      "Catalogo dinamico di categorie e servizi con durata, prezzo e descrizione.",
      "Flusso di richiesta appuntamento lato cliente con gestione prenotazioni.",
      "Area admin con autenticazione staff e gestione trattamenti/appuntamenti."
    ],
    liveUrl: "https://centro-estetico-three.vercel.app/", // TODO: sostituisci
    codeUrl: "https://github.com/Beatrice-Errico/centro-estetico" // TODO: sostituisci
  },
    {
    id: "horizon-media",
    title: "Horizon Media",
    subtitle: "Portale news in stile testata giornalistica",
    description:
      "Piattaforma web per pubblicare articoli, gestire categorie e moderare i commenti.",
    techStack: ["Laravel", "PHP", "Blade", "MySQL", "Bootstrap"],
    highlights: [
      "Home con elenco articoli per categoria e data.",
      "Pagine articolo con sezione commenti per utenti registrati.",
      "Dashboard admin per gestione articoli, categorie e utenti."
    ],
    liveUrl: "https://...",
    codeUrl: "https://github.com/Beatrice-Errico/Horizon_Media_"
  },
  {
    id: "gamezone",
    title: "GameZone",
    subtitle: "Portale React per esplorare videogiochi",
    description:
      "Applicazione frontend per esplorare giochi, filtrare per genere/piattaforma e salvare preferiti.",
    techStack: ["React", "Vite", "Tailwind CSS", "Supabase"],
    highlights: [
      "Lista dinamica di videogiochi con ricerca e filtri combinati.",
      "Pagine di dettaglio con informazioni sul singolo gioco.",
      "Gestione base del profilo utente e lista preferiti."
    ],
    liveUrl: "https://...",
    codeUrl: "https://github.com/Beatrice-Errico/GameZone"
  },
  {
    id: "todo-planner",
    title: "ToDo Planner",
    subtitle: "App per promemoria e organizzazione personale",
    description:
      "Applicazione frontend per creare, modificare e gestire liste di attività.",
    techStack: ["React", "Vite", "Tailwind CSS"],
    highlights: [
      "Creazione, modifica e cancellazione di attività con stato completato/non completato.",
      "Organizzazione dei task in liste/categorie.",
      "Componenti semplici e riutilizzabili per input e card."
    ],
    liveUrl: "https://to-do-bea.vercel.app/",
    codeUrl: "https://github.com/Beatrice-Errico/ToDoApp"
  }
];

// src/data/projects.js

export const projects = [
  {
    id: "centro-estetico",
    title: "Centro Estetico",
    subtitle: "Piattaforma gestionale full stack",
    description:
      "Gestionale per centro estetico: booking online, agenda admin e catalogo trattamenti.",
    techStack: [
      "Next.js (App Router)",
      "Supabase (PostgreSQL, Auth, RLS)",
      "Tailwind CSS",
      "TypeScript (base)",
    ],
    highlights: [
      "Flusso di prenotazione lato cliente con selezione trattamento/data.",
      "Area riservata per lo staff con agenda appuntamenti.",
      "Listino dinamico di categorie e servizi gestito da admin.",
    ],
    liveUrl: "https://centro-estetico-three.vercel.app/", 
    codeUrl: "https://github.com/Beatrice-Errico/centro-estetico",
  },
  {
    id: "gamezone",
    title: "GameZone",
    subtitle: "Portale gaming in React",
    description:
      "Portale gaming per esplorare videogiochi con ricerca, filtri e pagina dettaglio.",
    techStack: ["React", "Vite", "Tailwind CSS", "Supabase"],
    highlights: [
      "Lista dinamica di videogiochi con ricerca e filtri combinati.",
      "Pagine di dettaglio con informazioni sul singolo gioco.",
      "Componenti riutilizzabili e gestione stato con hook React.",
    ],
    liveUrl:"https://game-zone-errico.vercel.app/",
    codeUrl: "https://github.com/Beatrice-Errico/GameZone",
  },
  {
    id: "horizon-media",
    title: "Horizon Media",
    subtitle: "Portale news in Laravel",
    description:
      "Portale editoriale con autenticazione, ruoli, CRUD articoli/categorie e pannello admin.",
    techStack: ["Laravel", "PHP", "Blade", "MySQL", "Bootstrap"],
    highlights: [
      "Gestione ruoli (admin/editor/utente) e autenticazione.",
      "CRUD completo per articoli e categorie.",
      "Pannello admin basato su pattern MVC.",
    ],
    liveUrl: "https://horizon-media.onrender.com/", 
    codeUrl: "https://github.com/Beatrice-Errico/Horizon_Media_",
  },
  {
    id: "todo-planner",
    title: "ToDo Planner",
    subtitle: "App per organizzazione personale",
    description:
      "Planner/to-do app per gestione attività personali con liste e stato completato/non completato.",
    techStack: ["React", "Vite", "Tailwind CSS"],
    highlights: [
      "Gestione stato lato client con hook React.",
      "Liste di task filtrabili e stato completato/non completato.",
      "Deploy come SPA su Vercel.",
    ],
    liveUrl: "https://to-do-bea.vercel.app/",
    codeUrl: "https://github.com/Beatrice-Errico/ToDoApp",
  },
];

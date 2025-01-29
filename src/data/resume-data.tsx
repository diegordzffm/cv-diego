import {
  ClevertechLogo,
  ConsultlyLogo,
  JojoMobileLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Diego Rodriguez",
  initials: "DR",
  location: "Akazienstr. 55, 65933 Frankfurt am Main, Deutschland",
  locationLink: "https://www.google.com/maps/place/FrankfurtamMain",
  about: 
      "Physiker mit praktischer Erfahrung in Data Science, Data Analytics, Softwareentwicklung und regulatorischem Reporting. Ich bin interessiert an der Automatisierung von Softwarelösungen und von Datenworkflows. Zusätzlich habe ich eine große Begeisterung für Process Mining, KI, ML, Kryptowährungen und möchte mein Know-how in diesen Bereichen erweitern.",
  summary: (
    <>
      Bereits während meines Physikstudiums habe ich mich intensiv mit Data Science und Datenanalyse beschäftigt. Ich habe Expertise in der Analyse komplexer Daten, in der Erstellung datenbasierter Modelle und in der Verarbeitung von Kundendaten um regulatorische Anforderungen im Bankwesen zu erfüllen. Mein Fokus liegt auf der Automatisierung komplexer Datensätze sowie darauf, durch Datenanalyse wertvolle Business-Insights zu gewinnen.
      <hr className="border-t-2 border-gray-500 my-3 print:border-gray mb-1 -mt--0.5" />
    </>
  ),
  avatarUrl: "https://avatars.githubusercontent.com/u/123733873?s=400&u=17bdf84a736ec887924a058dd9f6c3368083cf5b&v=4",
  personalWebsiteUrl: "https://github.com/diegordzffm" ,
  contact: {
    email: "diego.rodriguez.ffm@gmail.com",
    tel: "Tel: +49 152 25261508",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/diegordzffm",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/diego-rodriguez-721876305",
        icon: LinkedInIcon,
      },
    ],
  },

  education: [
    {
      school: "Universität Stuttgart",
      degree: "Master of Science in Physics",
      start: "2017",
      end: "2020",
    },
    {
      school: "University of Coahuila, Mexico",
      degree: "Bachelor of Science in Physics",
      start: "2011",
      end: "2016",
    },
  ],

  work: [
    {
      company: "Regnology Germany Gmbh", title: "IT/Busines-Analyst",
      link: "https://www.regnology.net/en/",
      badges: ["IT-Business Analyst"],
      start: "10.2021",
      end: null,
      description: (
        <>
          <hr className="border-t-2 border-gray-500 my-2 print:border-gray mb-1 -mt--0.5" />
          <ul className="list-inside list-disc space-y-1">
            <li>
              Implementierung von regulatorischen Modulen in die Softwarelösungen des Unternehmens, zum Beispiel, das WiFSTA-Modul (Datenerhebung über Wohnimmobilienfinanzierungen) für die Bundesbank. Bei der Entwicklung habe ich SQL queries zur Datenberechnungen verwendet. Darüber hinaus habe ich mit Versionskontroll- und Automatisierungstools wie Git, GitLab, Jenkins und Bitbucket gearbeitet.
            </li>
            <li>
              Entwicklung eines Projekts zur Automatisierung komplexer ETL-Prozesse, dabei habe ich Python, Airflow DAGs, S3-Buckets und REST-APIs eingesetzt. Dadurch wurde die Software für das Meldewesen effizienter und besser skalierbar.
            </li>
            <li>
              Erfahrung in dem Management von relationalen Datenbanken und Data Lakes, insbesondere mit MS-SQL Server und PostgreSQL, zur Verarbeitung und Analyse von Datensätzen. Auch Praxiswissen in der Modellierung und Anpassung von Kundendaten für die Software sowie die Entwicklung von Datenqualitätsprüfungen und Monitoring-Prozessen.
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "Universität Stuttgart - Max Planck Institut",
      link: "",
      badges: ["Scientific Assistant - Doktorand"],
      title: "",
      start: "03.2020",
      end: "09.2021",
      description: (
        <>
          <hr className="border-t-2 border-gray-500 my-2 print:border-gray mb-1 -mt--0.5" />
          <ul className="list-inside list-disc space-y-1">
            <li >
              Ich habe mit Python-Libraries wie Pandas, NumPy und Scikit-learn komplexe Datenanalysen durchgeführt und Daten aufbereitet. Als Datenvisualisierungstools verwendete ich Matplotlib, Matlab.
            </li>
            <li>
              Modellierung und Implementierung mathematischer sowie statistischer Algorithmen zur Verarbeitung komplexer experimenteller Daten und exakten Interpretation wissenschaftlicher Ergebnisse. Dabei habe ich Data-Science-Techniken wie Bayesian Optimization, Monte-Carlo-Methoden zur Fehlerabschätzung und neuronale Netzwerke zur Verbesserung der Vorhersagegenauigkeit eingesetzt.
            </li>
            <li className="text-left">            
              Meine Forschung in den Bereichen Data Science und Physik wurde in wissenschaftlichen Publikationen veröffentlicht:{" "} 
              <a href="https://doi.org/10.1103/PhysRevLett.124.136402" target="_blank" rel="noopener noreferrer">
                https://doi.org/10.1103/PhysRevLett.124.136402
              </a> 
              {" "}und{" "}  
              <a href="https://doi.org/10.1103/PhysRevLett.124.136402" target="_blank" rel="noopener noreferrer">
                https://doi.org/10.1103/PhysRevLett.124.136402
              </a>.
              <hr className="border-t-2 border-gray-500 my-4 mt-3 print:border-gray" />
              </li>
          </ul>
        </>
      ),
    },
  ],

  projects: [
    {
      title: "Monito",
      techStack: ["TypeScript", "Next.js", "Browser Extension", "PostgreSQL"],
      description:
        "Browser extension for debugging web applications. Includes taking screenshots, screen recording, E2E test generation, and bug reporting.",
      logo: MonitoLogo,
      link: {
        label: "monito.dev",
        href: "https://monito.dev/",
      },
    },
    {
      title: "Consultly",
      techStack: [
        "TypeScript",
        "Next.js",
        "Vite",
        "GraphQL",
        "WebRTC",
        "Tailwind CSS",
        "PostgreSQL",
        "Redis",
      ],
      description:
        "Platform for online consultations with real-time video meetings and scheduling.",
      logo: ConsultlyLogo,
      link: {
        label: "consultly.com",
        href: "https://consultly.com/",
      },
    },
    {
      title: "Minimalist CV",
      techStack: ["TypeScript", "Next.js", "Tailwind CSS"],
      description:
        "An open-source minimalist, print-friendly CV template with a focus on readability and clean design. >9k stars on GitHub.",
      logo: MonitoLogo,
      link: {
        label: "Minimalist CV",
        href: "https://github.com/BartoszJarocki/cv",
      },
    },
  ],

  skills: [
    "Python",
    "REST APIs",
    "SQL",
    "Data Science",
    "Git",
    "Software Automation",
    "Agile Methodology",
    "• Deutsch: Gute Kenntnisse (B2-Niveau)",  "• Englisch: verhandlungssicher",  "• Spanisch: Muttersprache",
  ],
  
  

} as const;

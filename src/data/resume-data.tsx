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
  location: "Frankfurt am Main, Germany, CET",
  locationLink: "https://www.google.com/maps/place/FrankfurtamMain",
  about: 
      "Physiker mit praktischer Erfahrung in Data Science, Data Analytics,Softwareentwicklung und regulatorischem Reporting. Ich bin interessiert ander Automatisierung von Softwarelösungen und Datenverarbeitungsprozessen.",
  summary: (
    <>
      Bereits während meines Physikstudiums habe ich mich intensiv mit Data Science und Datenanalyse beschäftigt. Ich habe Expertise in derAnalyse komplexer Daten, in der Erstellung datenbasierter Modelle und in der Verarbeitung von Kundendaten, um regulatorischeAnforderungen im Bankwesen zu erfüllen. Mein Fokus liegt auf der Automatisierung komplexer Datensätze sowie darauf, wertvolle Business-Insights durch Datenanalyse zu gewinnen.
      <hr className="border-t-2 border-gray-500 my-2 print:border-gray -mb--1 -mt-0.525" />
    </>
  ),
  avatarUrl: "https://avatars.githubusercontent.com/u/123733873?s=400&u=17bdf84a736ec887924a058dd9f6c3368083cf5b&v=4",
  personalWebsiteUrl: "",
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
      school: "Universidad Autónoma de Coahuila, Mexico",
      degree: "Bachelor of Science in Physics",
      start: "2011",
      end: "2016",
    },
  ],

  work: [
    {
      company: "Regnology Germany Gmbh", title: "IT-Analyst",
      link: "https://www.regnology.net/en/",
      badges: ["IT Analyst"],
      start: "10.2021",
      end: null,
      description: (
        <>
          <hr className="border-t-2 border-gray-500 my-2 print:border-gray mb-1 -mt--0.5" />
          <ul className="list-inside list-disc space-y-1">
            <li>
              Developed and implemented regulatory reporting modules from scratch into the company software solutions. For example, the WiFSTA (Data Collection on Housing Loans) module for Bundesbank, where I utilized SQL to implement data calculations. I worked with version control and automation tools such as Git, GitLab, Jenkins, and Bitbucket to streamline workflows.
            </li>
            <li>
              Designed a project for automating complex ETL processes using Python, Airflow DAGs, S3 buckets and REST APIs, improving efficiency and scalability of the regulatory reporting software.
            </li>
            <li>
              Gained experience in managing relational databases and data lakes, working with MSSQL Server and PostgreSQL to store, process, and analyze datasets. I also modeled and customized client datasets for banking regulation software, developing client data quality checks and monitoring systems.
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "Universität Stuttgart",
      link: "",
      badges: ["Scientific Assistant - Doktorand"],
      title: "",
      start: "03.2020",
      end: "09.2021",
      description: (
        <>
          <hr className="border-t-2 border-gray-500 my-2 print:border-gray mb-1 -mt--0.5" />
          <ul className="list-inside list-disc space-y-1">
            <li>
              Used Python libraries such as Pandas, NumPy, Matplotlib, and Scikit-learn for data cleaning, visualization, and predictive modeling in research-driven analytics.
            </li>
            <li>
              Applied statistical and mathematical models to analyze complex experimental datasets, ensuring accurate interpretation of scientific results. Techniques included Bayesian Optimization, Monte Carlo methods for error estimation, and neural networks to enhance predictive accuracy.
            </li>
            <li>            
              My data analysis work contributed to research on optical measurement systems for chemical materials, published in scientific journals: 
              https://doi.org/10.1103/PhysRevLett.124.136402 and https://doi.org/10.1103/PhysRevLett.124.136402.
             
              <hr className="border-t-2 border-gray-500 my-6 print:border-gray" />
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
    "Languages: English (Advanced), German (Fluent B2), Spanish (Native) ",
    
  ],
  
  

} as const;

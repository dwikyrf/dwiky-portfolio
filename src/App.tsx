import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Download, ExternalLink, Moon, Sun, MapPin } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import Profil from './assets/profil.jpg'
import TomatoVision from './assets/tomato-vision.png'
import Tableau from './assets/tableau.png'
import Excel from './assets/excel.png'
import ChurnCovid from './assets/churn-covid.JPG'
import Laravel from './assets/laravel.jpeg'
import Rockpaperscissor from './assets/rockpaperscissor.png'
import Symphonia from './assets/symphonia.JPG'
import Tailwind from './assets/tailwind.jpeg'
import YOLO from './assets/yolo.jpeg'



// DATA
const PROFILE = {
  name: 'Dwiky Rahmat Fadhila',
  role: 'Information Systems Graduate • AI/ML & Data Enthusiast',
  location: 'Jakarta, Indonesia',
  summary:
    'Fresh graduate focused on AI/ML and data. Hands-on with model building, data cleaning, and deployment; eager to apply skills to real business cases.',
  contacts: {
    email: 'dwikyrf@gmail.com',
    github: 'https://github.com/dwikyrf',
    linkedin: 'http://www.linkedin.com/in/dwikyrf',
    resumeUrl:
      'https://drive.google.com/file/d/1wLRHumazcWWv4ouizB3G5IGp1JnMXYyR/view?usp=drive_link',
  },
}
const TOOLS = [
  { 
    name: "Python", 
    group: "Language", 
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" 
  },
  { 
    name: "SQL", 
    group: "Language",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
  },
  { 
    name: "Google BigQuery",
    group: "Data Warehouse",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg"
  },
  { 
    name: "Google Colab",
    group: "Notebook",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
  },
  { 
    name: "Flask",
    group: "Backend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg"
  },

  // Data Processing
  { 
    name: "Pandas",
    group: "Data Processing",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg"
  },
  { 
    name: "NumPy",
    group: "Data Processing",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg"
  },

  // Machine Learning
  { 
    name: "Scikit-learn",
    group: "Machine Learning",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg"
  },
  { 
    name: "TensorFlow / Keras",
    group: "Deep Learning",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg"
  },
  { 
    name: "YOLOv5",
    group: "Computer Vision",
    icon: YOLO  // kalau kamu punya logo sendiri
  },

  // BI Tools
  { 
    name: "Looker Studio",
    group: "BI / Dashboard",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
  },
  {
    name: "Tableau",
    group: "BI / Dashboard",
    icon: Tableau
  },
  {
    name: "Metabase",
    group: "BI / Dashboard",
    icon: "https://cdn.simpleicons.org/metabase/509ee3"
  },
  {
    name: "Excel for Data",
    group: "Spreadsheet",
    icon: Excel
  },

  // Database & Version Control
  {
    name: "MySQL",
    group: "Database",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
  },
  {
    name: "Git & GitHub",
    group: "Version Control",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
  },

  {
  name: "Laravel",
  group: "Backend Framework",
  icon: Laravel
  },
  {
    name: "Tailwind CSS",
    group: "CSS Framework",
    icon: Tailwind
  },
  {
    name: "Vite",
    group: "Build Tool",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg"
  },
  {
    name: "GitHub Actions",
    group: "CI/CD",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/githubactions/githubactions-original.svg"
  },
];
const EDUCATION = [
  {
    degree: 'S1 Sistem Informasi (GPA 3.52/4.00)',
    school:
      'Universitas Andalas, Fakultas Teknologi Informasi — Padang, Indonesia',
    period: 'Jul 2019 – Oct 2025',
    description:
      'The Information Systems program provided a strong foundation in software development, data management, and business-technology integration. I studied key subjects such as database systems, web development, software engineering, data warehousing, data mining, statistics, enterprise architecture, systems analysis & design, IT project management, and machine learning fundamentals. Through these courses, I learned how to analyze business needs, model processes, design ERDs and BPMNs, develop data-driven applications, and integrate systems using APIs. The curriculum trained me to bridge technical implementation with organizational goals, enabling me to translate business requirements into effective and scalable IT solutions.',
  },
]
const CERTS = [
  {
    period: "Oct 2022 – Dec 2022",
    name: "Pelatihan FGA DTS – Machine Learning Developer x IBM & Dicoding",
    details:
      "Belajar Dasar Visualisasi Data, Data Visualization with Python, Memulai Pemrograman Dengan Python, Data Analysis with Python, Belajar Machine Learning untuk Pemula, Introduction to AI, Belajar Pengembangan Machine Learning.",
  },
  {
    period: "Mar 2023 – Apr 2023",
    name: "Pelatihan FGA DTS – Data Science & Binar Academy",
    details:
      "Basic Database, SQL, Data Storytelling and Visualization, BI Tools, Konsep Statistika, Python Programming Fundamental, Introduction to Machine Learning, Data Preprocessing, Classification Analysis.",
  },
  {
    period: "Sep 2023 – Dec 2023",
    name: "IDCAMP – Data Scientist & Dicoding",
    details:
      "Belajar Dasar Data Science, Belajar Dasar Structured Query Language (SQL), Memulai Pemrograman Dengan Python, Belajar Analysis Data Dengan Python, Belajar Machine Learning untuk Pemula.",
  },
  {
    period: "Feb 2024 – Jun 2024",
    name: "Orbit Future Academy – AI For Jobs",
    details:
      "Logika dan Konsep Teknologi AI, Siklus Proyek AI, Pemrograman Python, Metode Penelitian AI, ChatGPT, Etika Profesi & Keterampilan Perusahaan, Financial Literacy, Entrepreneurship, Job Readiness, dan Proyek Akhir.",
  },
]



const SKILLS = {
  tech: [
    'Python',
    'SQL',
    'Google BigQuery',
    'Google Colab',
    'Flask',
    'Tableau',
    'Looker Studio (Data Studio)',
    'MySQL',
    'Metabase',
    'Excel for Data',
    'YOLOv5',
    'SVM',
    'Random Forest',
    'PHP',
    'Laravel',
    'REST API',
    'MVC Architecture',
    'React.js',
    'Tailwind CSS',
    'Vite',
    'Database Normalization (1NF–3NF)',
    'ERD Modeling',
    'Advanced SQL Queries',
    'Data Warehousing Concepts',
    'ETL Fundamentals',
    'Data Cleaning & Preprocessing',
    'Exploratory Data Analysis (EDA)',
    'Statistics for Data Science',
    'Model Evaluation Metrics',
    'TensorFlow/Keras',
    'Computer Vision (YOLO)',
    'Power BI (optional)',
    'Jupyter Notebook',
    'Google Data Studio / Looker',
    'Git Workflow',
    'GitHub Actions (CI/CD)',
    'Linux Server Basics',
    'App Deployment (Laravel)',

  ],
  soft: [
    'Analytical Thinking',
    'Problem-Solving',
    'Teamwork',
    'Communication',
    'Time Management',
    'Bahasa Indonesia (Native)',
    'English (Intermediate)',
    'Critical Thinking',
    'Requirements Analysis',
    'System Documentation',
    'Leadership',
    'Collaboration',
    'Problem Identification',
    'Troubleshooting',
    'Time Management',
    'Adaptability',

  ],
}

const PROJECTS = [
  {
    title: 'Symphonia — Laravel 11 E-Commerce Platform',
    year: '2024–2025',
    stack: [
      'Laravel 11',
      'PHP',
      'MySQL',
      'Tailwind CSS',
      'Manual Bank Transfer',
      'REST API',
    ],
    description:
      'Built a custom e-commerce platform for CV Symphonia Haksa Kreasindo to handle pre-order workwear & promotional products, with manual transfer payments and integrated shipping cost calculation.',
    impact: [
      'Automated order, payment (DP & full), and shipping flows that were previously handled in spreadsheets',
      'Provided an admin dashboard with charts, PDF/Excel export, and order/transaction monitoring',
    ],
    links: {
      demo: 'https://symphonia.siunand.my.id/',
      repo: 'https://github.com/dwikyrf/Symphonia',
    },
    images: [
      // Ganti dengan screenshot kamu sendiri kalau sudah ada di /public
      Symphonia
    ],
  },
  {
    title: 'TomatoVision — Tomato Disease Analysis',
    year: '2025',
    stack: ['YOLOv5', 'Python', 'Computer Vision', 'Web Deployment'],
    description:
      'Built a computer vision model to classify tomato leaf diseases using YOLOv5; deployed the model to a website and managed hosting.',
    impact: ['End-to-end ML pipeline from data to deployment'],
    links: {
      repo: 'https://github.com/dwikyrf/TomatoVision/tree/biji',
    },
    images: [
    TomatoVision
    ],
  },
  {
    title: 'Churn Prediction & COVID-19 Dashboard',
    year: '2025',
    stack: ['Python', 'SVM', 'Random Forest', 'Google Colab', 'Looker Studio'],
    description:
      'Created ML models (SVM & Random Forest) to predict customer churn and designed targeted dashboards for Indonesian COVID-19 datasets.',
    impact: ['Compared model performance and presented insights with clear storytelling'],
    links: {
      demo: 'https://docs.google.com/presentation/d/12L3c3LfKylXUTnT_gk9K1UBQSiOwu6o9/edit#slide=id.g22cf2c3cb11_0_20',
      repo: 'https://colab.research.google.com/drive/154XCQQeRNoi7RgzgbdMRUeFxZyrpagdo?usp=sharing',
    },
    images: [
      ChurnCovid
    ],
  },
  {
    title: 'Image Classification Deployment (RPS & Intel Dataset)',
    year: '2024',
    stack: ['Python', 'TensorFlow', 'Sequential Model', 'TFLite', 'Google Colab'],
    description:
      'Trained image classifiers for rock–paper–scissors and Intel image datasets; supported on-Colab prediction and exported to TFLite for lightweight usage.',
    impact: ['Lightweight model export for edge scenarios'],
    links: {
      demo: 'https://colab.research.google.com/drive/1pWXCgrvym-p8yTGmvChHYGTv8Z4IBTFA?usp=sharing',
      repo: 'https://colab.research.google.com/drive/1atrxHyBL_w1RyI8PdVKnArJTdh7QxhfV',
    },
    images: [
      Rockpaperscissor
    ],
  },
]


type SectionProps = { id: string; title: string; children: React.ReactNode }

const Section = ({ id, title, children }: SectionProps) => (
  <section id={id} className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-10">
    <motion.h2
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-2xl md:text-3xl font-bold tracking-tight mb-6"
    >
      {title}
    </motion.h2>
    {children}
  </section>
)

const Chip = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-block rounded-full border px-3 py-1 text-xs md:text-sm leading-6 dark:border-zinc-700">
    {children}
  </span>
)

const DarkModeToggle = () => {
  const [isDark, setIsDark] = useState(false)
  useEffect(() => {
    const root = document.documentElement
    if (isDark) root.classList.add('dark')
    else root.classList.remove('dark')
  }, [isDark])
  return (
    <button
      aria-label="Toggle dark mode"
      className="rounded-xl border dark:border-zinc-700 px-3 py-2 text-sm flex items-center gap-2 hover:shadow"
      onClick={() => setIsDark(!isDark)}
    >
      {isDark ? <Sun size={16} /> : <Moon size={16} />}
      <span>{isDark ? 'Light' : 'Dark'}</span>
    </button>
  )
}

export default function App() {
  useEffect(() => {
    if (!PROFILE.contacts.resumeUrl) console.warn('[Portfolio] Missing resumeUrl')
  }, [])
 // 👉 STATE UNTUK SLIDER PROJECTS
  const [projectIndex, setProjectIndex] = useState(0)
  const visibleCount = 3
  const totalProjects = PROJECTS.length

  const visibleProjects = React.useMemo(() => {
    const items = []
    const maxVisible = Math.min(visibleCount, totalProjects)
    for (let i = 0; i < maxVisible; i++) {
      items.push(PROJECTS[(projectIndex + i) % totalProjects])
    }
    return items
  }, [projectIndex])

  const handlePrevProject = () => {
    setProjectIndex((prev) => (prev - 1 + totalProjects) % totalProjects)
  }

  const handleNextProject = () => {
    setProjectIndex((prev) => (prev + 1) % totalProjects)
  }
  
  const [certIndex, setCertIndex] = useState(0)
const visibleCertCount = 2
const totalCerts = CERTS.length

const visibleCerts = React.useMemo(() => {
  const items = []
  const maxVisible = Math.min(visibleCertCount, totalCerts)
  for (let i = 0; i < maxVisible; i++) {
    items.push(CERTS[(certIndex + i) % totalCerts])
  }
  return items
}, [certIndex])

const handlePrevCert = () => {
  setCertIndex((prev) => (prev - 1 + totalCerts) % totalCerts)
}

const handleNextCert = () => {
  setCertIndex((prev) => (prev + 1) % totalCerts)
}

  return (
    <div className="min-h-screen bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
      <header className="sticky top-0 z-50 backdrop-blur border-b dark:border-zinc-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 h-14 flex items-center justify-between">
          <a href="#home" className="font-semibold tracking-tight">
            {PROFILE.name}
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#tools">Tools</a>
          <a href="#experience">Experience</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </nav>

          <div className="flex items-center gap-3">
            <DarkModeToggle />
            <a href={PROFILE.contacts.resumeUrl} target="_blank" rel="noreferrer">
              <Button className="rounded-xl">
                <Download className="mr-2 h-4 w-4" /> Resume
              </Button>
            </a>
          </div>
        </div>
      </header>

      <Section id="home" title="">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">{PROFILE.name}</h1>
            <h3 className="mt-4 text-2xl md:text-2xl font-bold tracking-tight leading-tight">{PROFILE.role}</h3>
            <p className="mt-4 text-base md:text-lg text-zinc-600 dark:text-zinc-400">{PROFILE.summary}</p>
            <div className="mt-5 flex flex-wrap items-center gap-3 text-sm">
              <Chip><MapPin className="inline-block mr-1 h-3 w-3" /> {PROFILE.location}</Chip>
              <a href={PROFILE.contacts.github} className="inline-flex items-center gap-2 hover:opacity-80" target="_blank" rel="noreferrer"><Github size={16}/> GitHub</a>
              <a href={PROFILE.contacts.linkedin} className="inline-flex items-center gap-2 hover:opacity-80" target="_blank" rel="noreferrer"><Linkedin size={16}/> LinkedIn</a>
              <a href={'https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSMVlCVWwzHwKcshdkpSZbqJfljmMVqvQKPjwbsgHhbTRKKdRZqDlwZfhTKBtBQLwScQnkdM'} className="inline-flex items-center gap-2 hover:opacity-80" target="_blank" rel="noreferrer"><Mail size={16}/> Email</a>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="md:justify-self-end">
            <div className="aspect-video w-full md:w-[520px] rounded-2xl overflow-hidden border dark:border-zinc-800 shadow">
              <img src={Profil} alt="Cover" className="w-full h-full object-cover"/>
            </div>
          </motion.div>
        </div>
      </Section>

      <Section id="projects" title="Projects">
        {/* Header kecil + tombol slider */}
        <div className="flex items-center justify-between mb-4">
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            Selected projects — showing 3 at a time.
          </p>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handlePrevProject}
              className="h-8 w-8 rounded-full border border-zinc-200 dark:border-zinc-700 flex items-center justify-center text-sm hover:bg-zinc-100 dark:hover:bg-zinc-800"
              aria-label="Previous projects"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={handleNextProject}
              className="h-8 w-8 rounded-full border border-zinc-200 dark:border-zinc-700 flex items-center justify-center text-sm hover:bg-zinc-100 dark:hover:bg-zinc-800"
              aria-label="Next projects"
            >
              ›
            </button>
          </div>
        </div>

        {/* 👉 Container scrollable */}
        <div className="projects-scrollbar overflow-y-auto max-h-[480px] pr-2">
          <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6">
            {visibleProjects.map((p, i) => (
              <motion.div
                key={p.title + i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <Card className="rounded-2xl overflow-hidden border dark:border-zinc-800 hover:shadow-lg transition-shadow">
                  {p.images?.[0] && (
                    <img
                      src={p.images[0]}
                      alt={p.title}
                      className="aspect-video object-cover w-full"
                    />
                  )}
                  <CardContent className="p-5">
                    <div className="flex items-center justify-between gap-3">
                      <h3 className="font-semibold text-lg">{p.title}</h3>
                      <Badge className="rounded-full">{p.year}</Badge>
                    </div>
                    <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                      {p.description}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {p.stack.map((s) => (
                        <Chip key={s}>{s}</Chip>
                      ))}
                    </div>
                    {p.impact && (
                      <ul className="mt-3 list-disc ml-5 text-sm text-zinc-700 dark:text-zinc-300">
                        {p.impact.map((b) => (
                          <li key={b}>{b}</li>
                        ))}
                      </ul>
                    )}
                    <div className="mt-4 flex flex-wrap items-center gap-3 text-sm">
                      {p.links.demo && (
                        <a
                          href={p.links.demo}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1 hover:underline"
                        >
                          Live Demo <ExternalLink size={14} />
                        </a>
                      )}
                      {p.links.repo && (
                        <a
                          href={p.links.repo}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1 hover:underline"
                        >
                          Source <Github size={14} />
                        </a>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>



      <Section id="skills" title="Skills">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Technical Skills */}
          <Card className="rounded-2xl border dark:border-zinc-800">
            <CardContent className="p-6">
              <h3 className="font-semibold">Technical</h3>
              <div
                className="
                  mt-3 flex flex-wrap gap-2
                  skills-scrollbar overflow-y-auto max-h-60 pr-2
                "
              >
                {SKILLS.tech.map((s) => (
                  <Chip key={s}>{s}</Chip>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Soft Skills */}
          <Card className="rounded-2xl border dark:border-zinc-800">
            <CardContent className="p-6">
              <h3 className="font-semibold">Soft Skills</h3>
              <div
                className="
                  mt-3 flex flex-wrap gap-2
                  skills-scrollbar overflow-y-auto max-h-60 pr-2
                "
              >
                {SKILLS.soft.map((s) => (
                  <Chip key={s}>{s}</Chip>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>


      <Section id="tools" title="Tools I Use">
        <Card className="rounded-2xl border dark:border-zinc-800">
          <CardContent className="p-4 md:p-6">
            <p className="text-sm md:text-base text-zinc-600 dark:text-zinc-300 mb-4">
              A snapshot of tools I&apos;ve used in projects for data, ML, and dashboards.
            </p>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
              {TOOLS.map((tool) => (
                <div
                  key={tool.name}
                  className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/60 px-4 py-3 flex items-center gap-3 min-h-[64px]"
                >
                  <img 
                    src={tool.icon} 
                    alt={tool.name} 
                    className="w-6 h-6 object-contain"
                  />
                  
                  <div>
                    <div className="text-sm md:text-base font-semibold text-zinc-900 dark:text-zinc-50">
                      {tool.name}
                    </div>
                    {tool.group && (
                      <div className="text-[11px] md:text-xs text-zinc-500 dark:text-zinc-400">
                        {tool.group}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-4 text-center text-xs md:text-sm text-zinc-500 dark:text-zinc-400">
              Always open to learning new tools when the project needs it.
            </p>
          </CardContent>
        </Card>
      </Section>


      <Section id="experience" title="Experience">
        <div className="grid gap-4">
          <Card className="rounded-2xl border dark:border-zinc-800"><CardContent className="p-6">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="font-semibold">Data Intern – PT. Paragon Pratama Teknologi</h3>
              <span className="text-sm text-zinc-500 dark:text-zinc-400">Feb 2023 – Jun 2023</span>
            </div>
            <ul className="mt-3 list-disc ml-5 text-sm text-zinc-700 dark:text-zinc-300">
              <li>Cleaned a dataset of 13,000+ records</li>
              <li>Imported GeoJSON into a spatial DBMS</li>
              <li>Created 1,000 polygon areas using GIS software</li>
            </ul>
          </CardContent></Card>
        </div>
      </Section>

      {/* EDUCATION & CERTS */}
      <Section id="education" title="Education & Certifications">
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="rounded-2xl border dark:border-zinc-800">
            <CardContent className="p-6">
              <h3 className="font-semibold">Education</h3>
              <div className="mt-3 space-y-3">
                {EDUCATION.map((ed) => (
                  <div key={ed.school} className="text-sm">
                    <div className="font-medium">{ed.degree}</div>
                    <div className="text-zinc-600 dark:text-zinc-400">
                      {ed.school}
                    </div>
                    <div className="text-zinc-500 dark:text-zinc-400">
                      {ed.period}
                    </div>

                    {/* 👉 Tambahkan deskripsi di sini */}
                    {ed.description && (
                      <div className="mt-3 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                        {ed.description}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          <Card className="rounded-2xl border dark:border-zinc-800">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-lg">Certifications</h3>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handlePrevCert}
                    className="h-7 w-7 rounded-full border border-zinc-300 dark:border-zinc-600 flex items-center justify-center text-sm hover:bg-zinc-100 dark:hover:bg-zinc-800"
                  >
                    ‹
                  </button>
                  <button
                    type="button"
                    onClick={handleNextCert}
                    className="h-7 w-7 rounded-full border border-zinc-300 dark:border-zinc-600 flex items-center justify-center text-sm hover:bg-zinc-100 dark:hover:bg-zinc-800"
                  >
                    ›
                  </button>
                </div>
              </div>

              {/* SLIDER GRID */}
              <div className="flex flex-col gap-4">
                {visibleCerts.map((c, i) => (
                  <motion.div
                    key={c.name + i}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/40"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="font-semibold text-sm text-zinc-900 dark:text-zinc-50">
                        {c.name}
                      </div>
                      <span className="text-xs text-zinc-500 dark:text-zinc-400">
                        {c.period}
                      </span>
                    </div>

                    <p className="text-xs md:text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                      {c.details}
                    </p>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>

        </div>
      </Section>

      <Section id="contact" title="Contact">
        <Card className="rounded-2xl border dark:border-zinc-800"><CardContent className="p-6">
          <p className="text-zinc-600 dark:text-zinc-300 text-sm md:text-base">
            Open to entry-level roles in Software Engineering, Data, or IT Systems. Feel free to reach out — I usually reply within 24 hours.
          </p>
          <div className="mt-4 flex flex-wrap gap-4 text-sm">
            <a href={'https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSMVlCVWwzHwKcshdkpSZbqJfljmMVqvQKPjwbsgHhbTRKKdRZqDlwZfhTKBtBQLwScQnkdM'} className="inline-flex items-center gap-2 hover:underline" target="_blank" rel="noreferrer"><Mail size={16}/> {PROFILE.contacts.email}</a>
            <a href={PROFILE.contacts.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:underline"><Github size={16}/> GitHub</a>
            <a href={PROFILE.contacts.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:underline"><Linkedin size={16}/> LinkedIn</a>
          </div>
        </CardContent></Card>
      </Section>

      <footer className="py-10 text-center text-xs text-zinc-500 dark:text-zinc-400">
        © {new Date().getFullYear()} {PROFILE.name}. Built with React, Tailwind, and Vite.
      </footer>
    </div>
  )
}

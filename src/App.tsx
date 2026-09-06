import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Download, ExternalLink, Moon, Sun, MapPin, ArrowUpRight, BriefcaseBusiness, GraduationCap, Sparkles, Code2, ChevronLeft, ChevronRight } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import Profil from './assets/profil.jpg'
import TomatoVision from './assets/tomato-vision.png'
import Tableau from './assets/tableau.png'
import Excel from './assets/excel.png'
import ChurnCovid from './assets/churn-covid.jpg'
import Laravel from './assets/laravel.jpeg'
import Rockpaperscissor from './assets/rockpaperscissor.png'
import Symphonia from './assets/symphonia.JPG'
import Tailwind from './assets/tailwind.jpeg'
import YOLO from './assets/yolo.jpeg'
import GadingBattery from './assets/gading-battery.JPG'
import CertDicoding from './assets/CertDicoding.jpg'
import CertBinar from './assets/CertBinar.jpg'
import CertIDCamp from './assets/CertIDCamp.jpg'
import CertOrbit from './assets/CertOrbit.jpg'
import CertMagang from './assets/CertMagang.jpg'



// DATA
const PROFILE = {
  name: 'Dwiky Rahmat Fadhila',
  role: 'Information Systems Graduate • AI/ML & Data Enthusiast',
  location: 'Jakarta, Indonesia',
  summary:
    'I am an Information Systems graduate from Andalas University with a strong interest in data, analytics, and technology. I have developed skills in data analysis, programming, database management, and information systems throughout my academic and professional journey. I currently work as a Data Annotator on an automotive automation project, where I work with visual data and annotation processes to support machine learning and computer vision applications. This experience has strengthened my attention to detail, data quality control, consistency, problem-solving, and understanding of how data is prepared and processed for AI systems. In addition, I have hands-on experience with Python, SQL, Excel, Looker Studio, Power BI, Google BigQuery, and various data and programming tools. I also have experience working on computer vision and machine learning projects, including object detection using YOLO. I am continuously developing my skills in Data Analytics, Data Engineering, Machine Learning, and AI Engineer. I am interested in opportunities where I can contribute to data-driven projects, solve real-world problems, and continue growing as a data professional.',
  contacts: {
    email: 'dwikyrf@gmail.com',
    github: 'https://github.com/dwikyrf',
    linkedin: 'http://www.linkedin.com/in/dwikyrf',
    resumeUrl:
      'https://drive.google.com/file/d/1loHnqpuA7fgqPn2F_exDeao_kpUFqswo/view?usp=sharing',
  },
}
// CONTACT / RESUME HELPERS
// Gmail compose works even when the visitor has no desktop mail application configured.
const GMAIL_COMPOSE_URL = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(PROFILE.contacts.email)}`

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
    image: CertDicoding,
    },
  {
    period: "Mar 2023 – Apr 2023",
    name: "Pelatihan FGA DTS – Data Science & Binar Academy",
    details:
      "Basic Database, SQL, Data Storytelling and Visualization, BI Tools, Konsep Statistika, Python Programming Fundamental, Introduction to Machine Learning, Data Preprocessing, Classification Analysis.",
   image: CertBinar,
    },
  {
    period: "Sep 2023 – Dec 2023",
    name: "IDCAMP – Data Scientist & Dicoding",
    details:
      "Belajar Dasar Data Science, Belajar Dasar Structured Query Language (SQL), Memulai Pemrograman Dengan Python, Belajar Analysis Data Dengan Python, Belajar Machine Learning untuk Pemula.",
    image: CertIDCamp,
    },
  {
    period: "Feb 2024 – Jun 2024",
    name: "Orbit Future Academy – AI For Jobs",
    details:
      "Logika dan Konsep Teknologi AI, Siklus Proyek AI, Pemrograman Python, Metode Penelitian AI, ChatGPT, Etika Profesi & Keterampilan Perusahaan, Financial Literacy, Entrepreneurship, Job Readiness, dan Proyek Akhir.",
    image: CertOrbit,
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
    'Adaptability',

  ],
}

const PROJECTS = [
  {
    title: 'Symphonia — Laravel 11 E-Commerce Platform',
    year: '2025',
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
      repo: 'https://github.com/dwikyrf/Symphonia',
    },
    images: [Symphonia],
  },
  {
    title: 'TomatoVision — Tomato Disease Analysis',
    year: '2024',
    stack: ['YOLOv5', 'Python', 'Computer Vision', 'Web Deployment'],
    description:
      'Built a computer vision model to classify tomato leaf diseases using YOLOv5; deployed the model to a website and managed hosting.',
    impact: ['End-to-end ML pipeline from data to deployment'],
    links: {
      repo: 'https://github.com/dwikyrf/tomato-vision',
    },
    images: [TomatoVision],
  },
  {
    title: 'Churn Prediction & COVID-19 Dashboard',
    year: '2023',
    stack: ['Python', 'SVM', 'Random Forest', 'Google Colab', 'Looker Studio'],
    description:
      'Created ML models (SVM & Random Forest) to predict customer churn and designed targeted dashboards for Indonesian COVID-19 datasets.',
    impact: ['Compared model performance and presented insights with clear storytelling'],
    links: {
      demo: 'https://docs.google.com/presentation/d/12L3c3LfKylXUTnT_gk9K1UBQSiOwu6o9/edit#slide=id.g22cf2c3cb11_0_20',
      repo: 'https://colab.research.google.com/drive/154XCQQeRNoi7RgzgbdMRUeFxZyrpagdo?usp=sharing',
    },
    images: [ChurnCovid],
  },
  {
    title: 'Image Classification Deployment (RPS & Intel Dataset)',
    year: '2023',
    stack: ['Python', 'TensorFlow', 'Sequential Model', 'TFLite', 'Google Colab'],
    description:
      'Trained image classifiers for rock–paper–scissors and Intel image datasets; supported on-Colab prediction and exported to TFLite for lightweight usage.',
    impact: ['Lightweight model export for edge scenarios'],
    links: {
      demo: 'https://colab.research.google.com/drive/1pWXCgrvym-p8yTGmvChHYGTv8Z4IBTFA?usp=sharing',
      repo: 'https://colab.research.google.com/drive/1atrxHyBL_w1RyI8PdVKnArJTdh7QxhfV',
    },
    images: [Rockpaperscissor],
  },
  {
    title: 'GADING BATTERY – Toko Aki & Oli Payakumbuh',
    year: '2025',
    stack: ['React', 'TypeScript', 'Vite', 'Vercel'],
    description:
      'Dynamic landing page for GADING BATTERY shop in Payakumbuh, showcasing battery & oil products, services, and WhatsApp / Maps CTA.',
    impact: [
      'Responsive landing page using React + TypeScript + Vite',
      'Brand catalog with slider and logo support',
      'Light/dark mode, WhatsApp pre-filled CTA, and multiple store locations in Google Maps',
      'Deployed to Vercel for public access',
    ],
    links: {
      demo: 'https://gading-battery.vercel.app/',
      repo: 'https://github.com/dwikyrf/gading-battery',
    },
    images: [GadingBattery], // nanti kalau ada screenshot bisa dimasukkan di sini
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
  const [projectIndex, setProjectIndex] = useState(0)
  const [certIndex, setCertIndex] = useState(0)

  const visibleCount = 3
  const totalProjects = PROJECTS.length
  const totalCerts = CERTS.length

  const visibleProjects = React.useMemo(() => {
    const count = Math.min(visibleCount, totalProjects)
    return Array.from({ length: count }, (_, i) => {
      return PROJECTS[(projectIndex + i) % totalProjects]
    })
  }, [projectIndex, totalProjects])

  const currentCert = CERTS[certIndex]

  const handlePrevProject = () => {
    setProjectIndex((prev) => (prev - 1 + totalProjects) % totalProjects)
  }

  const handleNextProject = () => {
    setProjectIndex((prev) => (prev + 1) % totalProjects)
  }

  const handlePrevCert = () => {
    setCertIndex((prev) => (prev - 1 + totalCerts) % totalCerts)
  }

  const handleNextCert = () => {
    setCertIndex((prev) => (prev + 1) % totalCerts)
  }

  return (
    <div className="min-h-screen overflow-x-hidden bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
      {/* Decorative background */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl dark:bg-blue-500/10" />
        <div className="absolute -right-40 top-[35%] h-96 w-96 rounded-full bg-violet-500/10 blur-3xl dark:bg-violet-500/10" />
        <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-cyan-500/5 blur-3xl" />
      </div>

      {/* NAVBAR */}
      <header className="sticky top-0 z-50 border-b border-zinc-200/70 bg-white/75 backdrop-blur-xl dark:border-zinc-800/70 dark:bg-zinc-950/75">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <a href="#home" className="group flex items-center gap-2.5 font-bold tracking-tight">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-zinc-900 text-sm text-white shadow-lg shadow-zinc-900/10 transition-transform group-hover:scale-105 dark:bg-white dark:text-zinc-900">
              DR
            </span>
            <span className="hidden sm:block">{PROFILE.name}</span>
          </a>

          <nav className="hidden items-center gap-6 text-sm font-medium text-zinc-600 md:flex dark:text-zinc-400">
            {['Projects', 'Skills', 'Experience', 'Education', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="transition-colors hover:text-zinc-950 dark:hover:text-white"
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <DarkModeToggle />
            <a
              href={PROFILE.contacts.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open resume"
              className="hidden sm:block"
            >
              <Button
                type="button"
                className="rounded-xl bg-zinc-900 px-4 shadow-lg shadow-zinc-900/10 hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
              >
                <Download className="mr-2 h-4 w-4" />
                Resume
              </Button>
            </a>
          </div>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section id="home" className="mx-auto max-w-7xl px-4 pb-16 pt-14 sm:px-6 md:pb-24 md:pt-20 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_.85fr]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 py-1.5 text-xs font-medium text-zinc-600 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300">
                <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
                Available for opportunities
              </div>

              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
                Hello, I&apos;m
              </p>

              <h1 className="max-w-3xl text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
                {PROFILE.name}
              </h1>

              <h2 className="mt-5 max-w-2xl text-xl font-bold leading-snug text-zinc-700 sm:text-2xl dark:text-zinc-200">
                Information Systems Graduate <span className="text-zinc-400">•</span>{' '}
                <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
                  AI/ML & Data Enthusiast
                </span>
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-600 dark:text-zinc-400">
                {PROFILE.summary}
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 rounded-xl bg-zinc-900 px-5 py-3 text-sm font-semibold text-white shadow-xl shadow-zinc-900/10 transition-all hover:-translate-y-0.5 hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
                >
                  View my projects
                  <ArrowUpRight className="h-4 w-4" />
                </a>
                <a
                  href={GMAIL_COMPOSE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-zinc-200 bg-white px-5 py-3 text-sm font-semibold shadow-sm transition-all hover:-translate-y-0.5 hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-700"
                >
                  <Mail className="h-4 w-4" />
                  Let&apos;s connect
                  <ExternalLink className="h-3.5 w-3.5 opacity-60" />
                </a>
              </div>

              <div className="mt-7 flex flex-wrap items-center gap-4 text-sm text-zinc-500 dark:text-zinc-400">
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="h-4 w-4" />
                  {PROFILE.location}
                </span>
                <span className="h-1 w-1 rounded-full bg-zinc-300 dark:bg-zinc-700" />
                <a href={PROFILE.contacts.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 transition-colors hover:text-zinc-900 dark:hover:text-white">
                  <Github className="h-4 w-4" /> GitHub
                </a>
                <a href={PROFILE.contacts.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 transition-colors hover:text-zinc-900 dark:hover:text-white">
                  <Linkedin className="h-4 w-4" /> LinkedIn
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="relative mx-auto w-full max-w-md lg:ml-auto"
            >
              <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-blue-500/20 via-violet-500/10 to-transparent blur-2xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-white/60 bg-white/70 p-2 shadow-2xl shadow-zinc-900/10 backdrop-blur dark:border-zinc-800 dark:bg-zinc-900/70">
                <div className="relative overflow-hidden rounded-[1.5rem]">
                  <img
                    src={Profil}
                    alt={`${PROFILE.name} profile`}
                    className="aspect-[4/5] w-full object-cover object-center transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent p-6 pt-20">
                    <div className="flex items-center gap-3 text-white">
                      <div className="grid h-10 w-10 place-items-center rounded-xl bg-white/15 backdrop-blur">
                        <Code2 className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold">Data • AI • Software</p>
                        <p className="text-xs text-white/70">Building practical digital solutions</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* QUICK STATS */}
        <section className="mx-auto max-w-7xl px-4 pb-6 sm:px-6 lg:px-8">
          <div className="grid gap-3 sm:grid-cols-3">
            {[
              { icon: BriefcaseBusiness, value: '2+', label: 'Professional Experiences' },
              { icon: Code2, value: `${PROJECTS.length}+`, label: 'Featured Projects' },
              { icon: GraduationCap, value: `${CERTS.length}`, label: 'Certifications' },
            ].map(({ icon: Icon, value, label }) => (
              <div key={label} className="rounded-2xl border border-zinc-200 bg-white/80 p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/60">
                <div className="flex items-center gap-4">
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-zinc-100 dark:bg-zinc-800">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-2xl font-black">{value}</p>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400">{label}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
                Selected work
              </p>
              <h2 className="text-3xl font-black tracking-tight sm:text-4xl">Projects</h2>
              <p className="mt-2 max-w-2xl text-zinc-500 dark:text-zinc-400">
                A selection of projects across web development, data analytics, machine learning, and computer vision.
              </p>
            </div>

            <div className="flex shrink-0 gap-2">
              <button
                type="button"
                onClick={handlePrevProject}
                aria-label="Previous projects"
                className="grid h-10 w-10 place-items-center rounded-full border border-zinc-200 bg-white shadow-sm transition hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:bg-zinc-800"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={handleNextProject}
                aria-label="Next projects"
                className="grid h-10 w-10 place-items-center rounded-full border border-zinc-200 bg-white shadow-sm transition hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:bg-zinc-800"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {visibleProjects.map((project, i) => (
              <motion.article
                key={`${project.title}-${i}`}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: i * 0.08 }}
                className="group flex flex-col overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-zinc-900/10 dark:border-zinc-800 dark:bg-zinc-900/80"
              >
                {project.images?.[0] && (
                  <div className="relative overflow-hidden">
                    <img
                      src={project.images[0]}
                      alt={project.title}
                      className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                    <Badge className="absolute right-3 top-3 rounded-full border border-white/30 bg-black/60 text-white backdrop-blur">
                      {project.year}
                    </Badge>
                  </div>
                )}

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-lg font-bold leading-snug">{project.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                    {project.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-lg bg-zinc-100 px-2.5 py-1 text-[11px] font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {project.impact && (
                    <ul className="mt-5 space-y-2 text-xs leading-5 text-zinc-600 dark:text-zinc-400">
                      {project.impact.map((item) => (
                        <li key={item} className="flex gap-2">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  <div className="mt-auto flex gap-4 pt-6 text-sm font-semibold">
                    {project.links.demo && (
                      <a href={project.links.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 hover:underline">
                        Live Demo <ArrowUpRight className="h-4 w-4" />
                      </a>
                    )}
                    {project.links.repo && (
                      <a href={project.links.repo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 hover:underline">
                        <Github className="h-4 w-4" /> Source
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="border-y border-zinc-200/70 bg-white/60 dark:border-zinc-800/70 dark:bg-zinc-900/30">
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
            <div className="mb-8">
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-violet-600 dark:text-violet-400">
                What I bring
              </p>
              <h2 className="text-3xl font-black tracking-tight sm:text-4xl">Skills</h2>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              {[
                { title: 'Technical Skills', icon: Code2, items: SKILLS.tech },
                { title: 'Soft Skills', icon: Sparkles, items: SKILLS.soft },
              ].map(({ title, icon: Icon, items }) => (
                <div key={title} className="rounded-3xl border border-zinc-200 bg-white p-7 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/70">
                  <div className="mb-5 flex items-center gap-3">
                    <div className="grid h-10 w-10 place-items-center rounded-xl bg-zinc-100 dark:bg-zinc-800">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-bold">{title}</h3>
                  </div>
                  <div className="flex max-h-64 flex-wrap gap-2 overflow-y-auto pr-2">
                    {items.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-zinc-200 px-3 py-1.5 text-xs font-medium text-zinc-600 transition hover:border-zinc-400 hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TOOLS */}
        <section id="tools" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mb-8">
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600 dark:text-cyan-400">
              Tech stack
            </p>
            <h2 className="text-3xl font-black tracking-tight sm:text-4xl">Tools I Use</h2>
            <p className="mt-2 text-zinc-500 dark:text-zinc-400">
              Tools I&apos;ve used for data, analytics, machine learning, dashboards, and software development.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {TOOLS.map((tool) => (
              <div
                key={tool.name}
                className="group flex min-h-[78px] items-center gap-3 rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm transition-all hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900/70 dark:hover:border-zinc-700"
              >
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-zinc-100 p-2 dark:bg-zinc-800">
                  <img src={tool.icon} alt={tool.name} className="h-6 w-6 object-contain transition-transform group-hover:scale-110" />
                </div>
                <div className="min-w-0">
                  <p className="truncate text-sm font-bold">{tool.name}</p>
                  <p className="mt-0.5 truncate text-[11px] text-zinc-500 dark:text-zinc-400">{tool.group}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="border-y border-zinc-200/70 bg-zinc-100/50 dark:border-zinc-800/70 dark:bg-zinc-900/20">
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
            <div className="mb-10">
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-400">
                Career journey
              </p>
              <h2 className="text-3xl font-black tracking-tight sm:text-4xl">Experience</h2>
            </div>

            <div className="relative ml-3 border-l border-zinc-300 pl-8 dark:border-zinc-700">
              {[
                {
                  role: 'Data Annotator',
                  company: 'PT. Dalligent Solusi Indonesia',
                  period: 'Feb 2026 – Present',
                  points: [
                    'Annotated and labeled image/video data for an automotive automation project.',
                    'Applied annotation guidelines to ensure accurate and consistent object labeling.',
                    'Performed quality checks and corrected annotation errors to maintain dataset quality.',
                    'Processed high-volume visual data while meeting accuracy and productivity targets.',
                  ],
                  current: true,
                },
                {
                  role: 'Data Intern',
                  company: 'PT. Paragon Pratama Teknologi',
                  period: 'Feb 2023 – Jun 2023',
                  points: [
                    'Cleaned a dataset of 13,000+ records.',
                    'Imported GeoJSON into a spatial DBMS.',
                    'Created 1,000 polygon areas using GIS software.',
                  ],
                  current: false,
                },
              ].map((job) => (
                <motion.div
                  key={job.company}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="relative mb-10 last:mb-0"
                >
                  <span className={`absolute -left-[41px] top-1.5 h-5 w-5 rounded-full border-4 border-zinc-100 dark:border-zinc-950 ${job.current ? 'bg-emerald-500' : 'bg-zinc-400'}`} />
                  <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/70">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="text-lg font-bold">{job.role}</h3>
                          {job.current && (
                            <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400">
                              Current
                            </span>
                          )}
                        </div>
                        <p className="mt-1 text-sm font-medium text-zinc-500 dark:text-zinc-400">{job.company}</p>
                      </div>
                      <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-semibold text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300">
                        {job.period}
                      </span>
                    </div>

                    <ul className="mt-5 space-y-3 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                      {job.points.map((point) => (
                        <li key={point} className="flex gap-3">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* EDUCATION + CERTIFICATIONS */}
        <section id="education" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mb-10">
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-amber-600 dark:text-amber-400">
              Background
            </p>
            <h2 className="text-3xl font-black tracking-tight sm:text-4xl">Education & Certifications</h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-[.9fr_1.1fr]">
            <div className="rounded-3xl border border-zinc-200 bg-white p-7 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/70">
              <div className="mb-6 flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-zinc-100 dark:bg-zinc-800">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold">Education</h3>
              </div>

              {EDUCATION.map((ed) => (
                <div key={ed.school}>
                  <h4 className="font-bold">{ed.degree}</h4>
                  <p className="mt-1 text-sm font-medium text-zinc-600 dark:text-zinc-400">{ed.school}</p>
                  <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-500">{ed.period}</p>
                  <p className="mt-5 text-sm leading-7 text-zinc-600 dark:text-zinc-400">{ed.description}</p>
                </div>
              ))}
            </div>

            <div className="rounded-3xl border border-zinc-200 bg-white p-7 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/70">
              <div className="mb-6 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-zinc-100 dark:bg-zinc-800">
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">Certifications</h3>
                    <p className="text-xs text-zinc-500">{certIndex + 1} / {totalCerts}</p>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button type="button" onClick={handlePrevCert} aria-label="Previous certification" className="grid h-9 w-9 place-items-center rounded-full border border-zinc-200 dark:border-zinc-700">
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <button type="button" onClick={handleNextCert} aria-label="Next certification" className="grid h-9 w-9 place-items-center rounded-full border border-zinc-200 dark:border-zinc-700">
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <motion.div
                key={currentCert.name}
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                className="overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950/40"
              >
                <div className="flex min-h-[250px] items-center justify-center overflow-hidden bg-white p-4 dark:bg-zinc-900">
                  <img
                    src={currentCert.image}
                    alt={currentCert.name}
                    className="max-h-64 w-full object-contain transition-transform duration-500 hover:scale-[1.02]"
                  />
                </div>
                <div className="p-5">
                  <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">{currentCert.period}</p>
                  <h4 className="mt-2 font-bold leading-6">{currentCert.name}</h4>
                  <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-400">{currentCert.details}</p>
                </div>
              </motion.div>

              <div className="mt-5 flex gap-1.5">
                {CERTS.map((cert, index) => (
                  <button
                    key={cert.name}
                    type="button"
                    aria-label={`Show certification ${index + 1}`}
                    onClick={() => setCertIndex(index)}
                    className={`h-1.5 flex-1 rounded-full transition-all ${index === certIndex ? 'bg-zinc-900 dark:bg-white' : 'bg-zinc-200 dark:bg-zinc-700'}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[2rem] bg-zinc-900 p-8 text-white shadow-2xl sm:p-12 dark:bg-white dark:text-zinc-900">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl" />
            <div className="relative grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/60 dark:text-zinc-500">Get in touch</p>
                <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Let&apos;s build something useful.</h2>
                <p className="mt-4 max-w-2xl leading-7 text-white/65 dark:text-zinc-600">
                  Open to entry-level opportunities in Data, AI/ML, Software Engineering, and IT Systems.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href={GMAIL_COMPOSE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-zinc-900 transition hover:bg-zinc-100 dark:bg-zinc-900 dark:text-white dark:hover:bg-zinc-800"
                >
                  <Mail className="h-4 w-4" />
                  Email me
                  <ExternalLink className="h-3.5 w-3.5 opacity-60" />
                </a>
                <a
                  href={PROFILE.contacts.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-5 py-3 text-sm font-bold transition hover:bg-white/10 dark:border-zinc-300 dark:hover:bg-zinc-100"
                >
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-zinc-200 py-8 text-center text-xs text-zinc-500 dark:border-zinc-800 dark:text-zinc-500">
        © {new Date().getFullYear()} {PROFILE.name}. Built with React, Tailwind CSS, and Vite.
      </footer>
    </div>
  )
}

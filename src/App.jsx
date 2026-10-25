import ProjectCard from "./ProjectCard.jsx";
import ThemeToggle from "./ThemeToggle.jsx";
import { projects } from "./projects.js";

const logo = `${import.meta.env.BASE_URL}geodi-logo.png`;

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 transition-colors dark:bg-ink dark:text-slate-100">
      <header className="sticky top-0 z-10 border-b border-slate-200 bg-slate-50/85 backdrop-blur dark:border-slate-800 dark:bg-ink/85">
        <div className="mx-auto flex h-17 max-w-6xl items-center justify-between px-5">
          <a href="./" className="flex items-center gap-3 text-lg font-bold">
            <img src={logo} alt="GeoDI Lab logo" width="44" height="44" />
            EMERGE Data Hub
          </a>
          <ThemeToggle />
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-5">
        <section className="flex flex-col items-start gap-4 py-9 sm:flex-row sm:items-center sm:gap-7 sm:py-14">
          <img src={logo} alt="" className="h-21 w-21 shrink-0 sm:h-30 sm:w-30" />
          <div>
            <h1 className="mb-2 text-4xl font-bold tracking-tight sm:text-5xl">EMERGE Data Hub</h1>
            <p className="max-w-[60ch] text-lg text-slate-600 dark:text-slate-400">
              Textbooks, software, and apps from the EMERGE project
            </p>
            <p className="mt-3 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
              Environmental Monitoring through Education, Research &amp; Geospatial Engagement (EMERGE) is a
              global initiative that helps communities, libraries, educators, and individuals from all ages and
              backgrounds engage in public health and environmental science using real-world data tools and
              citizen science.
            </p>
          </div>
        </section>

        <section aria-label="Projects" className="grid gap-6 pb-16 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </section>
      </main>

      <footer className="border-t border-slate-200 py-6 text-sm text-slate-500 dark:border-slate-800 dark:text-slate-400">
        <div className="mx-auto flex max-w-6xl flex-wrap justify-between gap-2 px-5">
          <span>© {new Date().getFullYear()} GeoDI Lab</span>
          <a href="https://github.com/geo-di-lab" target="_blank" rel="noopener noreferrer" className="hover:underline">
            github.com/geo-di-lab
          </a>
        </div>
      </footer>
    </div>
  );
}

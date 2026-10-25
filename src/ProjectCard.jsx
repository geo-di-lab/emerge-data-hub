import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const languages = [
  { code: "en", label: "English" },
  { code: "es", label: "Español" },
];

export default function ProjectCard({ project }) {
  const [lang, setLang] = useState("en");
  const bilingual = Boolean(project.es);
  const content = project[lang];

  return (
    <article
      lang={lang}
      className="group relative flex flex-col has-[a:focus-visible]:ring-2 has-[a:focus-visible]:ring-navy has-[a:focus-visible]:ring-offset-2 dark:has-[a:focus-visible]:ring-teal dark:has-[a:focus-visible]:ring-offset-ink overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-xl motion-reduce:transition-none motion-reduce:hover:translate-y-0 dark:border-slate-800 dark:bg-ink-raised dark:shadow-black/40"
    >
      <div className={`relative flex h-32 items-center justify-center bg-gradient-to-br text-white ${project.gradient}`}>
        <span className="absolute left-3 top-3 rounded-full bg-white/20 px-2.5 py-0.5 text-xs font-semibold tracking-wide">
          {content.tag}
        </span>
        <FontAwesomeIcon icon={project.icon} className="text-5xl opacity-95" />
      </div>

      <div className="flex flex-1 flex-col px-5 pb-6 pt-5">
        {bilingual && (
          <div
            role="tablist"
            aria-label="Language"
            className="relative z-10 mb-4 inline-flex self-start rounded-lg border border-slate-200 bg-slate-100 p-0.5 dark:border-slate-800 dark:bg-ink"
          >
            {languages.map(({ code, label }) => (
              <button
                key={code}
                type="button"
                role="tab"
                aria-selected={lang === code}
                onClick={() => setLang(code)}
                className={`rounded-md px-3 py-1 text-xs font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy dark:focus-visible:outline-teal ${
                  lang === code
                    ? "bg-white text-slate-900 shadow-sm dark:bg-slate-700 dark:text-white"
                    : "text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        )}

        <h2 className="mb-2 text-xl font-bold leading-snug text-slate-900 dark:text-slate-50">
          {content.title}
        </h2>
        <p className="mb-6 text-[0.95rem] leading-relaxed text-slate-600 dark:text-slate-400">
          {content.description}
        </p>

        <a
          href={content.href}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto self-start font-semibold text-navy outline-none group-hover:underline after:absolute after:inset-0 after:rounded-2xl after:content-[''] dark:text-teal"
        >
          {content.linkText}{" "}
          <FontAwesomeIcon icon={faArrowRight} className="text-sm transition-transform group-hover:translate-x-0.5" />
        </a>
      </div>
    </article>
  );
}

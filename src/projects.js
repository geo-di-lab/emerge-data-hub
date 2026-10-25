import {
  faBookOpen,
  faCode,
  faComments,
  faEarthAmericas,
  faLayerGroup,
  faWindowMaximize,
} from "@fortawesome/free-solid-svg-icons";

// Projects shown on the hub
export const projects = [
  {
    id: "lessons",
    icon: faBookOpen,
    gradient: "from-navy to-teal",
    en: {
      tag: "Textbook",
      title: "Textbook 1: Data Analysis",
      description: "Interactive lessons on exploring, cleaning, and visualizing GLOBE participatory science data with Python.",
      linkText: "Open textbook",
      href: "https://geo-di-lab.github.io/emerge-lessons/intro.html",
    },
    es: {
      tag: "Libro de texto",
      title: "Libro de texto 1: Análisis de datos",
      description: "Lecciones interactivas para explorar, limpiar y visualizar datos de ciencia participativa de GLOBE con Python.",
      linkText: "Abrir libro",
      href: "https://geo-di-lab.github.io/emerge-lessons-es/intro.html",
    },
  },
  {
    id: "geoai",
    icon: faEarthAmericas,
    gradient: "from-moss to-teal",
    en: {
      tag: "Textbook",
      title: "Textbook 2: Geospatial AI",
      description: "Hands-on lessons applying machine learning and AI to participatory science and geospatial data.",
      linkText: "Open textbook",
      href: "https://geo-di-lab.github.io/emerge-geoai/intro.html",
    },
    es: {
      tag: "Libro de texto",
      title: "Libro de texto 2: IA geoespacial",
      description: "Lecciones prácticas que aplican aprendizaje automático e IA a datos de ciencia participativa y geoespaciales.",
      linkText: "Abrir libro",
      href: "https://geo-di-lab.github.io/emerge-geoai-es/intro.html",
    },
  },
  {
    id: "geoemerge",
    icon: faCode,
    gradient: "from-navy-deep to-steel",
    en: {
      tag: "Python package",
      title: "geoemerge",
      description: "A Python package for processing participatory science data, ready for analysis and mapping.",
      linkText: "View on GitHub",
      href: "https://github.com/geo-di-lab/geoemerge",
    },
  },
  {
    id: "website",
    icon: faWindowMaximize,
    gradient: "from-teal to-navy",
    en: {
      tag: "Website",
      title: "EMERGE Website",
      description: "The main EMERGE site, with news, resources, and information about the project.",
      linkText: "Visit website",
      href: "https://geoemerge.com/",
    },
    es: {
      tag: "Sitio web",
      title: "Sitio web de EMERGE",
      description: "El sitio principal de EMERGE, con noticias, recursos e información sobre el proyecto.",
      linkText: "Visitar sitio",
      href: "https://es-geoemerge.com/",
    },
  },
  {
    id: "ask-globe",
    icon: faComments,
    gradient: "from-steel to-moss",
    en: {
      tag: "Tool",
      title: "ask-globe",
      description: "A tool for asking questions about GLOBE data in plain language.",
      linkText: "View on GitHub",
      href: "https://github.com/geo-di-lab/ask-globe",
    },
  },
  {
    id: "land-cover",
    icon: faLayerGroup,
    gradient: "from-olive to-moss",
    en: {
      tag: "App",
      title: "GLOBE Land Cover 3D",
      description: "An interactive 3D visualization app for exploring GLOBE land cover observations.",
      linkText: "Launch app",
      href: "https://via-zhang.github.io/globe-land-cover",
    },
  },
];

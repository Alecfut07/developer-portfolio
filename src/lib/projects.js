const projects = [
  {
    id: 1,
    slug: "gamezone",
    title: "GameZone - Full-Stack E-commerce Platform",
    category: "Full-Stack, E-commerce",
    shortDescription:
      "A React and .NET Core e-commerce platform for video games with Stripe payments and Redis caching.",
    description: [
      "GameZone is a full-stack e-commerce solution for gaming products, structured with clear separation of concerns and a repository-style data access pattern on the backend.",
      "The platform supports authenticated users, catalog browsing, cart and checkout flows, and integrations for payments and transactional email.",
      "Deployment is containerized with CI automation so environments stay consistent from development through production.",
    ],
    features: [
      "User authentication and role-based access",
      "Shopping cart and order management",
      "Stripe integration for payments and tax calculation",
      "SendGrid for order confirmation emails",
      "Dockerized deployment with GitHub Actions",
    ],
    technologies: [
      "React",
      ".NET Core",
      "SQL Server",
      "Redis",
      "Docker",
      "GitHub Actions",
      "Bootstrap",
    ],
    coverImage: "/images/gamezone-cover.jpg",
    thumbnailImage: "/images/gamezone-cover.jpg",
    gallery: [
      {
        url: "/images/gamezone-cover.jpg",
        caption: "Storefront / catalog",
      },
      {
        url: "/images/gamezone-cart.jpg",
        caption: "Cart / checkout flow",
      },
    ],
    timeline: "-",
    role: "Full-stack developer",
    client: "Personal project",
    githubRepos: [
      {
        label: "Frontend (React)",
        url: "https://github.com/Alecfut07/gamezone-web",
      },
      {
        label: "API (.NET)",
        url: "https://github.com/Alecfut07/gamezone-api",
      },
    ],
    relatedProjects: [
      {
        slug: "pacific",
        title: "Pacific - Industrial Products Store",
        category: "Frontend, E-commerce",
        image: "/images/pacific-cover.jpg",
      },
    ],
  },
  {
    id: 2,
    slug: "pacific",
    title: "Pacific - Industrial Products Store",
    category: "Frontend, E-commerce",
    shortDescription:
      "A Vite + Material Tailwind site for chemical and safety equipment with quote generation.",
    description: [
      "Pacific is an industrial e-commerce experience focused on chemical and safety equipment, with flows for browsing, cart management, and generating downloadable quotes.",
      "The app includes authenticated areas and an admin-oriented workflow for inventory and quote handling.",
      "The UI is built with Material Tailwind and responsive layouts, containerized for consistent deployment.",
    ],
    features: [
      "User registration and login",
      "Shopping cart and downloadable PDF quotes",
      "Admin dashboard for inventory and quote management",
      "Responsive layout with Material Tailwind CSS",
      "Docker-based deployment",
    ],
    technologies: ["Vite", "JavaScript", "Material Tailwind", "Docker"],
    coverImage: "/images/pacific-cover.jpg",
    gallery: [
      {
        url: "/images/pacific-cover.jpg",
        caption: "Storefront",
      },
      {
        url: "/images/pacific-admin.jpg",
        caption: "Admin / management UI",
      },
    ],
    timeline: "-",
    role: "Frontend developer",
    client: "-",
    githubUrl: "https://github.com/Alecfut07/pacific-frontend",
    relatedProjects: [
      {
        slug: "gamezone",
        title: "GameZone - Full-Stack E-commerce Platform",
        category: "Full-Stack, E-commerce",
        image: "/images/gamezone-cover.jpg",
      },
    ],
  },
  {
    id: 3,
    slug: "deco-portfolio",
    title: "Ortega Reyes Remodeling and Restoration",
    category: "Full-Stack, Business Portfolio Website",
    shortDescription:
      "A full-stack marketing and admin platform for a remodeling and restoration business, with a public gallery and a family-member.",
    description: [
      "Ortega Reyes Remodeling and Restoration is a full-stack web application built for a remodeling and restoration family business. The public site showcases services, business information, and a categorized project gallery with before/after media.",
      "The React (Vite) frontend includes a protected admin area where authorized family members manage portfolio items, categories, services, and business details. Media workflows support image galleries, videos, and automatic thumbnail generation.",
      "The Django REST framework provides public and admin APIs, custom token authentication for family members, Redis-backed response caching, PostgreSQL for production data, and Dockerized Redis for local caching.",
    ],
    features: [
      "Public marketing site: hero, services, portfolio gallery, about, and contact.",
      "Protected admin dashboard for portfolio, categories, services, and business information.",
      "Custom FamilyMember auth with token-based login (separate from Django admin users).",
      "Portfolio items with categories, before/after images, multi-image galleries, and videos.",
      "Automatic image thumbnails / optimized gallery images (django-imagekit).",
      "Redis caching for portfolio list and detail API responses.",
      "Search and filter endpoints for the public gallery.",
      "Frontend unit tests (Vitest) and end-to-end tests (Playwright).",
      "Frontend production build served with Nginx; Redis via Docker Compose.",
    ],
    technologies: [
      "React",
      "Vite",
      "Tailwind CSS",
      "React Router",
      "Axios",
      "Django",
      "Django REST Framework",
      "PostgreSQL",
      "Redis",
      "Pillow",
      "OpenCV",
      "Docker",
      "Nginx",
      "Playwright",
      "Vitest",
    ],
    coverImage: "/images/projects/deco-portfolio/deco-cover.png",
    thumbnailImage: "/images/projects/deco-portfolio/deco-cover.png",
    gallery: [
      {
        url: "/images/projects/deco-portfolio/deco-cover.png",
        caption: "Public marketing / gallery site",
      },
      {
        url: "/images/projects/deco-portfolio/deco-admin.png",
        caption: "Admin dashboard",
      },
      {
        url: "/images/projects/deco-portfolio/deco-gallery.png",
        caption: "Portfolio gallery / before-after",
      },
    ],
    timeline: "2025 - 2026",
    role: "Full-stack developer",
    client: "Ortega Reyes Remodeling and Restoration",
    liveUrl: "http://68.183.111.50",
    githubRepos: [
      {
        label: "Frontend (React + Vite)",
        url: "https://github.com/Alecfut07/deco-site-frontend",
      },
      {
        label: "Backend (Django API)",
        url: "https://github.com/Alecfut07/deco-site-backend",
      },
    ],
    relatedProjects: [
      {
        slug: "gamezone",
        title: "GameZone - Full-Stack E-commerce Platform",
        category: "Full-Stack, E-commerce",
        image: "/images/gamezone-cover.jpg",
      },
      {
        slug: "Pacific",
        title: "Pacific - Industrial Products Store",
        category: "Frontend, E-commerce",
        image: "/images/pacific-cover.jpg",
      },
    ],
  },
  {
    id: 4,
    slug: "sdbh-xp-farm",
    title: "SDBH XP Farm - Steam Deck Automation Bot",
    category: "Python, Computer Vision, Automation",
    shortDescription:
      "A modular Python bot that farms XP in Super Dragon Ball Heroes: World Mission on Steam Deck using OpenCV and a virtual Xbox controller.",
    description: [
      "SDBH XP Farm is a Linux / Steam Deck automation tool that runs a full torunament → battle → reward loop without modifying game files, memory, or network traffic.",
      "It uses OpenCV template matching against cropped UI screenshots (via mss) to detect game states, then drives a virtual Xbox 360 gamepad through Linux (evdev) so the game receives normal controller inputs.",
      "The core is an 18-state machine with multi-cycle farming, hybrid timing (template polls + fixed waits for load screens), analog stick aim nudges, configurable tunables in config.py, and teimstamped run logs for debugging and calibration.",
    ],
    features: [
      "18-state machine covering tournament setup, battle prep, and post-battle rewards.",
      "Multi-cycle farming with optional skip of EXP item setup after the first cycle.",
      "Virtual Xbox 360 controller via Linux UInput (evdev).",
      "OpenCV template matching on cropped PNG UI templates.",
      "Hybrid timing: template polling plus fixed waits for slow load screens.",
      "Analog stick nudges for finer aim control vs full D-pad steps.",
      "Structured logging under logs/ plus timing JSON for calibration.",
      "Keyboard/mouse fallback path when controller mode is disabled.",
    ],
    technologies: [
      "Python",
      "OpenCV",
      "NumPy",
      "mss",
      "Pillow",
      "evdev",
      "PyAutoGUI",
      "Linux",
      "Steam Deck",
    ],
    // YouTube thumbnail as card/cover image
    coverImage: "https://img.youtube.com/vi/xYVPDVDLSZM/maxresdefault.jpg",
    thumbnailImage: "https://img.youtube.com/vi/xYVPDVDLSZM/hqdefault.jpg",
    gallery: [],
    videoUrl: "https://www.youtube.com/watch?v=xYVPDVDLSZM",
    videoEmbedUrl: "https://www.youtube.com/embed/xYVPDVDLSZM",
    timeline: "2026",
    role: "Solo developer",
    client: "Personal project",
    githubUrl: "https://github.com/Alecfut07/sdbh-xp-farm",
    relatedProjects: [
      {
        slug: "deco-portfolio",
        title: "Ortega Reyes Remodeling and Restoration",
        category: "Full-Stack, Business Portfolio Website",
        image: "/images/projects/deco-portfolio/deco-cover.png",
      },
      {
        slug: "gamezone",
        title: "GameZone - Full-Stack E-commerce Platform",
        category: "Full-Stack, E-commerce",
        image: "/images/gamezone-cover.jpg",
      },
    ],
  },
];

export { projects };

export function getAllProjects() {
  return projects;
}

export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug);
}

export function getRelatedProjects(currentSlug, limit = 2) {
  const currentProject = getProjectBySlug(currentSlug);

  if (!currentProject || !currentProject.relatedProjects) {
    return projects
      .filter((project) => project.slug !== currentSlug)
      .slice(0, limit)
      .map((project) => ({
        slug: project.slug,
        title: project.title,
        category: project.category,
        image: project.thumbnailImage,
      }));
  }
  return currentProject.relatedProjects.slice(0, limit);
}

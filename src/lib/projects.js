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
    githubUrl: "https://github.com/Alecfut07/gamezone-web",
    relatedProjects: [
      {
        slug: "Pacific",
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

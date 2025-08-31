// src/data/projects.ts
export type Project = {
  slug: string;
  title: string;
  description: string;
  year: number;
  tags: string[];
  image?: string;   // e.g. "/projects/landing.jpg" from /public/projects
  live?: string;    // external or internal URL
  code?: string;    // GitHub link
  content: {
    overview: string;
    features: string[];
    tech: string[];
    results?: string[];
  };
};

export const projects: Project[] = [
  {
    slug: 'landing',
    title: 'Marketing Landing (Astro + Tailwind)',
    description:
      'A fast, animated landing page with a gradient hero, feature cards, and a conversion-focused CTA.',
    year: 2025,
    tags: ['astro', 'tailwind', 'animation'],
    image: '/projects/landing.jpg',
    live: '/',
    code: 'https://github.com/James-Olagoke/strong-star',
    content: {
      overview:
        'This landing page demonstrates a modern hero section with subtle motion, strong contrast, and a clear CTA. Built with Astro for performance and Tailwind for rapid styling.',
      features: [
        'Animated gradient hero with floating accents',
        'Feature cards with dark surfaces and elevated contrast',
        'Sticky glassy navbar and smooth scroll-reveal',
        'Fully responsive layout with semantic markup',
      ],
      tech: ['Astro', 'Tailwind CSS v4', 'TypeScript-ready', 'GitHub PR workflow'],
      results: [
        '95+ Lighthouse Performance locally',
        'Minimal JavaScript shipped by default',
        'Fast authoring flow with utility classes',
      ],
    },
  },
  {
    slug: 'blog',
    title: 'Content Blog (Astro Collections)',
    description:
      'Markdown-driven blog with Content Collections, dynamic routes, and typography polish.',
    year: 2025,
    tags: ['astro', 'content', 'blog'],
    image: '/projects/blog.jpg',
    live: '/blog',
    code: 'https://github.com/James-Olagoke/strong-star',
    content: {
      overview:
        'A content-first blog using Astro Content Collections, with Markdown posts, dynamic routes, and dark-mode typography.',
      features: [
        'Content schema with Zod and typed posts',
        'Blog index with thumbnails and tags',
        'Post template with optional cover images',
        'Dark theme with readable contrast and prose-invert',
      ],
      tech: ['Astro Content', '@tailwindcss/typography', 'Markdown', 'Dark UI'],
      results: ['Easy to add posts as files', 'Consistent metadata and layout'],
    },
  },
  {
    slug: 'portfolio-grid',
    title: 'Portfolio Grid',
    description:
      'Responsive project cards with badges, dark surfaces, and consistent spacing.',
    year: 2025,
    tags: ['ui', 'grid', 'responsive'],
    image: '/projects/portfolio-grid.jpg',
    live: '/projects',
    code: 'https://github.com/James-Olagoke/strong-star',
    content: {
      overview:
        'A reusable grid pattern for showcasing projects with thumbnails, tags, and clear calls to action.',
      features: [
        'Search & tag filters on the Projects page',
        'Hover states and subtle elevation',
        'Mobile-first responsive grid',
      ],
      tech: ['Astro', 'Tailwind utilities', 'Small inline scripts'],
    },
  },
  {
    slug: 'ui-kit',
    title: 'UI Kit (Utilities)',
    description:
      'Reusable buttons, cards, sections, and helpers for rapid page building.',
    year: 2025,
    tags: ['tailwind', 'components', 'utilities'],
    image: '/projects/ui-kit.jpg',
    live: '/projects',
    code: 'https://github.com/James-Olagoke/strong-star',
    content: {
      overview:
        'A small set of utility-driven components to speed up common UI tasks like buttons, cards, and sections.',
      features: [
        'Dark-friendly surfaces and contrast',
        'Button variants without custom class nesting',
        'Consistent spacing and typography scale',
      ],
      tech: ['Tailwind v4', 'Component utilities', 'Dark theme tokens'],
    },
  },
];

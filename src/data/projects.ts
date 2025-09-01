export type Project = {
  slug: string; title: string; description: string; year: number;
  tags: string[]; image?: string; live?: string; code?: string;
  content: { overview: string; features?: string[]; tech: string[]; results?: string[]; };
};

export const projects: Project[] = [
  {
    slug: 'landing',
    title: 'Marketing Landing (Astro + Tailwind)',
    description: 'A fast, animated landing page with a gradient hero and CTA.',
    year: 2025,
    tags: ['astro','tailwind','animation'],
    image: '/projects/landing.png',
    live: '/',
    code: 'https://github.com/James-Olagoke/strong-star',
    content: {
      overview: 'Modern hero, dark UI, and clean components.',
      features: ['Gradient hero','Feature cards','Sticky glassy navbar'],
      tech: ['Astro','Tailwind v4','GitHub PRs'],
      results: ['95+ Lighthouse locally','Minimal JS by default'],
    },
  },
  {
    slug: 'blog',
    title: 'Content Blog (Collections)',
    description: 'Markdown-driven blog with Content Collections and dark typography.',
    year: 2025,
    tags: ['astro','content','blog'],
    image: '/projects/blog.png',
    live: '/blog',
    code: 'https://github.com/James-Olagoke/strong-star',
    content: {
      overview: 'Typed posts, featured hero, search and tag filters.',
      features: ['Schema via Zod','Dynamic routes','Dark prose'],
      tech: ['Astro Content','@tailwindcss/typography'],
    },
  },
];

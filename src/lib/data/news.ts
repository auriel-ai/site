export type ArticleCategory = 'Blog' | 'Press' | 'Case Study';

export interface Article {
  slug: string;
  title: string;
  date: string;
  author: string;
  category: ArticleCategory;
  featured?: boolean;
  url?: string; // External URL for press mentions
  company?: string; // For case studies
  description?: string; // Short description of the article
  readingTime?: string; // Estimated reading time
}

// Collection of all articles
export const articles: Article[] = [
  {
    slug: 'building-observability',
    title: "Building observability for AI-driven applications",
    date: "April 15",
    author: "Auriel Blog",
    category: "Blog",
    featured: true
  },
  {
    slug: 'agent-lens-launch',
    title: "Auriel Analytics introduces AgentLens for robust LLM monitoring",
    date: "March 28",
    author: "TechCrunch",
    category: "Press",
    url: "https://techcrunch.com/example-article-link"
  },
  {
    slug: 'debug-llm-apps',
    title: "How to effectively debug LLM applications",
    date: "March 12",
    author: "Auriel Blog",
    category: "Blog",
    featured: true
  },
  {
    slug: 'cost-management',
    title: "AI agent cost management: Best practices",
    date: "February 22",
    author: "Auriel Blog",
    category: "Blog"
  },
  {
    slug: 'fintech-case-study',
    title: "FinTech leader improves LLM reliability with Auriel's tooling",
    date: "February 10",
    author: "Case Study",
    category: "Case Study",
    featured: true,
    company: "FinTech Leader"
  },
  {
    slug: 'funding-announcement',
    title: "Auriel Analytics raises $12M to expand AI observability tools",
    date: "January 25",
    author: "VentureBeat",
    category: "Press",
    url: "https://venturebeat.com/example-article-link"
  },
  {
    slug: 'reliable-agents',
    title: "3 ways to make your AI agents more reliable",
    date: "January 18",
    author: "Auriel Blog",
    category: "Blog",
    featured: true
  },
  {
    slug: 'healthcare-case-study',
    title: "Healthcare provider streamlines operations with custom AI agents",
    date: "January 5",
    author: "Case Study",
    category: "Case Study",
    company: "Healthcare Provider"
  }
];

// Helper function to get article by slug
export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find(article => article.slug === slug);
}

// Helper function to get articles by category
export function getArticlesByCategory(category: ArticleCategory | 'All'): Article[] {
  if (category === 'All') {
    return articles;
  }
  return articles.filter(article => article.category === category);
} 
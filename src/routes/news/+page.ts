import type { PageLoad } from './$types';
import type { Article } from '$lib/data/news';
import { calculateReadingTime } from '$lib/utils';

export const load: PageLoad = async () => {
  // Import all posts (blog posts, case studies, etc)
  const posts = import.meta.glob('./blog/_posts/*.md', { eager: true });
  
  // Load post metadata
  const articles = await Promise.all(
    Object.entries(posts).map(async ([path, post]: [string, any]) => {
      const slug = path.split('/').pop()?.replace('.md', '') || '';
      
      return {
        slug,
        title: post.metadata.title,
        date: post.metadata.date,
        author: post.metadata.author || "Auriel Team",
        category: post.metadata.category || "Blog" as const,
        featured: post.metadata.featured || false,
        company: post.metadata.company,
        description: post.metadata.description,
        readingTime: calculateReadingTime(post.metadata.description + ' ' + post.content)
      };
    })
  );
  
  // External press articles
  // Add new press mentions here as needed. Example format:
  // {
  //   slug: 'unique-identifier',
  //   title: "Title of the press mention", 
  //   date: "Month Day, Year",
  //   author: "Publication Name",
  //   category: "Press",
  //   url: "https://external-url-to-the-article"
  // }
  const pressArticles: Article[] = [
    // Press links will be added here when you have them
  ];
  
  // Combine all article types
  const allArticles = [
    ...articles,
    ...pressArticles
  ];
  
  // Sort by date (newest first)
  const sortedArticles = allArticles.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateB.getTime() - dateA.getTime();
  });
  
  return {
    articles: sortedArticles
  };
}; 
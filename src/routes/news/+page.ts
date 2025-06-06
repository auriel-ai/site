import type { PageLoad } from './$types';
import type { Article } from '$lib/data/news';

export const load: PageLoad = async () => {
  // Import all blog posts and case studies
  const blogPosts = import.meta.glob('./blog/_posts/*.md');
  const caseStudies = import.meta.glob('./case-study/_posts/*.md');
  
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
  
  // Load blog post metadata
  const blogArticles = await Promise.all(
    Object.entries(blogPosts).map(async ([path, loader]) => {
      const post: any = await loader();
      const slug = path.split('/').pop()?.replace('.md', '') || '';
      
      return {
        slug,
        title: post.metadata.title,
        date: post.metadata.date,
        author: post.metadata.author || "Auriel Team",
        category: "Blog" as const,
        featured: post.metadata.featured || false
      };
    })
  );
  
  // Load case study metadata
  const caseStudyArticles = await Promise.all(
    Object.entries(caseStudies).map(async ([path, loader]) => {
      const post: any = await loader();
      const slug = path.split('/').pop()?.replace('.md', '') || '';
      
      return {
        slug,
        title: post.metadata.title,
        date: post.metadata.date,
        author: post.metadata.author || "Auriel Team",
        category: "Case Study" as const,
        featured: post.metadata.featured || false,
        company: post.metadata.company
      };
    })
  );
  
  // Combine all article types
  const allArticles = [
    ...blogArticles,
    ...caseStudyArticles,
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
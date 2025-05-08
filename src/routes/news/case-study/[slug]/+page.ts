import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';

export const load: PageLoad = async ({ params }) => {
  // Dynamic import of case study posts
  const posts = import.meta.glob('../_posts/*.md');
  
  // Check if the post exists by slug
  const matchedPostPath = Object.keys(posts).find(path => 
    path.includes(`/${params.slug}.md`)
  );
  
  if (!matchedPostPath) {
    throw error(404, 'Case study not found');
  }
  
  try {
    // Load the case study content
    const post: any = await posts[matchedPostPath]();
    
    // Return the post content and metadata
    return {
      content: post.default,
      ...post.metadata
    };
  } catch (e) {
    console.error('Error loading case study:', e);
    throw error(500, 'Error loading case study');
  }
}; 
import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';

// Define the type for MDsveX module
interface MdsvexModule {
  default: any;
  metadata: {
    title: string;
    date: string;
    [key: string]: any;
  };
}

export const load: PageLoad = async ({ params }) => {
  // Dynamic import of blog posts
  const posts = import.meta.glob('../_posts/*.md');
  
  // Check if the post exists by slug
  const matchedPostPath = Object.keys(posts).find(path => 
    path.includes(`/${params.slug}.md`)
  );
  
  if (!matchedPostPath) {
    throw error(404, 'Blog post not found');
  }
  
  try {
    // Load the blog post content
    const post: any = await posts[matchedPostPath]();
    
    // Return the post content and metadata
    return {
      content: post.default,
      ...post.metadata
    };
  } catch (e) {
    console.error('Error loading blog post:', e);
    throw error(500, 'Error loading blog post');
  }
}; 
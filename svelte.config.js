import adapter from '@sveltejs/adapter-node';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [
		vitePreprocess(),
		mdsvex({
			extensions: ['.md'],
			layout: {
				blog: path.resolve(__dirname, './src/routes/news/blog/_layout.svelte')
			}
		})
	],
	
	extensions: ['.svelte', '.md'],

	kit: {
		// Using adapter-node for proper server-side rendering and production deployment
		adapter: adapter({
			// The default output directory is 'build'
			// You can customize output options if needed
			// out: 'build',
		})
	}
};

export default config;

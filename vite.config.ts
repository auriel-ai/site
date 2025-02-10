import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	// Add this to help debug any build issues
	build: {
		rollupOptions: {
			onwarn(warning, warn) {
				if (warning.code === 'MISSING_EXPORT') return;
				warn(warning);
			}
		}
	}
});

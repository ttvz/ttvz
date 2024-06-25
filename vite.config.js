import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import vsharp from 'vite-plugin-vsharp';

export default defineConfig({
	plugins: [
		vsharp({
			// Plugin options go here
		}),
		sveltekit()
	],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});

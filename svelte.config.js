import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

import { mdsvex } from 'mdsvex';
import { codeToHtml } from 'shiki';

const mdsvexConf = {
	extensions: ['.md', '.svelte'],
	highlight: {
		highlighter: async (code, lang = 'text') => {
			const html = await codeToHtml(code, {
				lang,
				themes: { dark: 'andromeeda', light: 'catppuccin-latte' }
			});
			return `{@html \`${html}\`}`;
		}
	}
};

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter()
	},
	extensions: ['.svelte', '.md'],
	preprocess: [vitePreprocess(), mdsvex(mdsvexConf)]
};

export default config;

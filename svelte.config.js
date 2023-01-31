import adapter from '@sveltejs/adapter-auto';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		alias: {
			$db: './src/db',
			$assets: './src/assets'
		}
	}
};

export default config;
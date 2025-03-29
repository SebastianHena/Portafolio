/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundImage: {
				'background_primary': 'linear-gradient(90deg, #090f30, #000000, #190631)',
			},
		},
	},
	plugins: [],
}

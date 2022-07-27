import { gray } from '@radix-ui/colors';
import { createStitches } from "@stitches/react";

export const { styled, css, globalCss, keyframes, getCssText, theme, createTheme, config } = createStitches({
	theme: {
		colors: {
			...gray
		},
	},
	media: {
		'sm': '(min-width: 640px)',
		'md': '(min-width: 768px)',
		'lg': '(min-width: 1024px)',
		'xl': '(min-width: 1280px)',
		'2xl': '(min-width: 1536px)',
	},
	utils: {
		marginY: (margin: number | string) => ({
			marginTop: margin,
			marginBottom: margin
		})
	}
});

export const globalStyles = globalCss({
	'html, body': {
		padding: 0,
		margin: 0,
		fontFamily: `-apple-system, BlinkMacSystemFont, "Helvetica Neue", "Segoe UI", Roboto,
		 Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", sans-serif`
	},
	'*': {
		boxSizing: 'border-box'
	}
});
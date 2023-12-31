// /** @type {import('tailwindcss').Config} */
export const content = [
  './pages/**/*.{js,ts,jsx,tsx,mdx}',
  './components/**/*.{js,ts,jsx,tsx,mdx}',
  './app/**/*.{js,ts,jsx,tsx,mdx}',
];
export const theme = {
  extend: {
    spacing: {
      '72': '18rem',
      '80': '20rem',
    },
    padding: {
      '5/6': '83.3333333%'
    } 
  },
  customForms: theme => ({
    lineHeight: theme('lineHeight.snug'),
    borderColor: 'transparent',
    borderRadius: theme('borderRadius.lg'),
    backgroundColor: theme('colors.gray.700'),
    focusBorderColor: 'transparent',
    focusShadow: 'none',
    checkboxSize: '1.5em',
    radioSize: '1.5em',
    checkedColor: theme('colors.indigo.500'),
    selectIcon: `<svg xmlns="http://www.w3.org/2000/svg"viewBox="0 0 24 24" fill="#fff"><path d="M15.3 9.3a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4l3.3 3.29 3.3-3.3z"/></svg>`,
    colorAdjust: 'print-color-adjust',
  })
};
export const variants = {};
export const plugins = [

];

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

Para ejecutar en gh pages:

{
"name": "bellapiel",
// "homepage":"https://anayaricardo.github.io/viviansBeautyRoom/",
"private": true,
"version": "0.0.0",
"type": "module",
"scripts": {
"dev": "vite",
"build": "vite build",
"lint": "eslint .",
"preview": "vite preview",
// "predeploy": "npm run build",
// "deploy": "gh-pages -d dist"
},
"dependencies": {
"gh-pages": "^6.3.0",
"react": "^19.1.1",
"react-dom": "^19.1.1",
"router": "^2.2.0"
},
"devDependencies": {
"@eslint/js": "^9.33.0",
"@types/react": "^19.1.10",
"@types/react-dom": "^19.1.7",
"@vitejs/plugin-react": "^5.0.0",
"eslint": "^9.33.0",
"eslint-plugin-react-hooks": "^5.2.0",
"eslint-plugin-react-refresh": "^0.4.20",
"globals": "^16.3.0",
"vite": "^7.1.2"
}
}

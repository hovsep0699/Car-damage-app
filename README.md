# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list


# Usage

```bash
cd Car-damage-app && npm install
```
# development
```bash
npm run dev
```
# build
```bash
npm run build
```
Copy out files to your application
```
cp dist/plugin.js path/to/app/
```
and
```
cp dist/plugin.css path/to/app/
```
types in plugin
```typescript
interface PluginOptions {
    selector: string;
    options: {
        initializedOptions?: string[];
        onPositionChange?: (positions: string[]) => void;
        onComplete?: (positions: string[]) => void;
        onInit?: () => void;
    };
}
interface MyApp
{
    init: (options: PluginOptions)=> void;
}

interface Window {
    DAMAGE_SELECTOR_API: MyApp;
}

```

in your application usage example
```typescript
import "./global.d.ts"

const onPositionChange = (positions: string[]) =>
{
  console.log("change: ", positions);
  
};
const onComplete = (positions: string[])=>
{
  console.log("Complete: ", positions);
  
}
const onInit = () => {
  console.log("Init Plugin");
  
}

document.addEventListener('DOMContentLoaded', () => {
  window.DAMAGE_SELECTOR_API &&
    window.DAMAGE_SELECTOR_API.init({
      selector: "#root",
      options: { 
        initializedOptions: ["A3", "B1", "C2", "C4"], 
        onPositionChange, 
        onComplete, 
        onInit 
      },
    });
});
```

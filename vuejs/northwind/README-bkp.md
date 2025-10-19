# 🚀 Vue.js App on Hugging Face Spaces (Northwind)

This repository hosts a **Vue.js application** deployed on **Hugging Face Spaces** using the **Static SDK**.  
It allows you to serve any frontend built with Vue, React, or plain HTML/CSS/JS directly on Spaces.

---

## 📦 Project Structure

```
.
├── public/              # Static assets
├── src/                 # Vue app source code
├── dist/                # Production build output (after `npm run build`)
├── package.json
├── .gitignore
└── README.md
```

---

## ⚙️ Setup Instructions

### 1. Install Dependencies
```bash
npm install
```

### 2. Build the App
```bash
npm run build
```

This will create a production-ready `dist/` folder.

### 3. Add a Hugging Face `space.yaml`

Create a file named `space.yaml` in the root directory:

```yaml
sdk: static
app_file: dist
title: "Vue.js App"
emoji: 🚀
colorFrom: green
colorTo: blue
pinned: false
license: mit
```

### 4. Commit and Push

Push your code to a Hugging Face Space repository:

```bash
git add .
git commit -m "Deploy Vue.js app to Hugging Face Spaces"
git push
```

The app will automatically build and deploy!

---

## 🌐 Customization

- Update your app name and metadata in `space.yaml`.
- You can add a favicon in `public/`.
- Use environment variables by prefixing them with `VITE_` (e.g., `VITE_API_URL`).

---

## 🧠 Notes

- Hugging Face automatically hosts the contents of `dist/` as a static site.
- Make sure to commit the built folder (`dist/`) or ensure your build process runs automatically in CI.

---

## 📄 License
MIT © 2025 Bibhu Mishra

## northwind

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

### Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

### Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

### Project Setup

```sh
npm install
```

#### Compile and Hot-Reload for Development

```sh
npm run dev
```

#### Type-Check, Compile and Minify for Production

```sh
npm run build
```

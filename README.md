# 🎨 Multi-Theme Switcher React App

A responsive and secure React + TypeScript web application with a **dynamic theme switcher**. The app supports **three distinct themes** that alter layout, font, structure, and color. Themes persist across page reloads using `localStorage`.

---

## ✨ Features

- 🌗 **Three Complete Themes**:
  - **Theme 1 (Default)**: Minimalist layout, light background, Inter font
  - **Theme 2**: Dark mode, sidebar-style layout, serif font
  - **Theme 3**: Colorful card-based layout, playful Pacifico font

- 🔁 Theme persisted using `localStorage`
- ⚙️ Theme managed using **Context API**
- 🎯 Responsive design (Mobile + Desktop)
- 🧠 API data fetched from [Fake Store API](https://fakestoreapi.com/products)
- 🎬 Smooth transitions when switching themes
- 🔐 Secure and modern code practices (no unsafe HTML, HTTPS APIs only)
- 📄 Includes pages: **Home**, **About**, **Contact** using `React Router`

---

## 📁 Folder Structure

\`\`\`
src/
├── components/
│   └── Header.tsx
├── context/
│   └── ThemeContext.tsx
├── pages/
│   └── Home.tsx
│   └── About.tsx
│   └── Contact.tsx
├── styles/
│   └── global.css
├── App.tsx
├── main.tsx
├── index.css (Tailwind base)
\`\`\`

---

## 🚀 Getting Started

### 1. Clone the Repo

\`\`\`bash
git clone https://github.com/MaheshBabu125/mahesh-babu-kethineni.git
switch to master branch
\`\`\`

### 2. Install Dependencies

\`\`\`bash
npm install
# or
yarn install
\`\`\`

### 3. Run the App

\`\`\`bash
npm run dev
# or
yarn dev
\`\`\`

---

## ⚙️ Tech Stack

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Router](https://reactrouter.com/)
- [Fake Store API](https://fakestoreapi.com/)
- [Framer Motion](https://www.framer.com/motion/) (optional animations)

---

## 🌈 Theming Logic

- Themes are stored in \`ThemeContext.tsx\` using \`React.createContext\`
- On switch:
  - \`<body className="theme1" />\` (or theme2, theme3) is set
  - Global CSS reads that class and updates styles (colors, fonts, layout)
- Header can respond to the theme via global CSS or class-based logic

---

## 📦 Build for Production

\`\`\`bash
npm run build
\`\`\`

---

## 🔒 Security Tips

- Uses HTTPS API (\`fakestoreapi.com\`)
- No \`dangerouslySetInnerHTML\`
- Safe \`localStorage\` usage for theme

---

## 📌 To Do / Ideas

- Add user preference saving via cookies or backend
- Add more layout options per theme
- Add language switcher

---

## 🙋‍♂️ Author

Developed by Mahesh Babu Kethineni  
Frontend Developer @ Kshema General Insurance

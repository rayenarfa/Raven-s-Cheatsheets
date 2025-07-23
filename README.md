# 🚀 Raven's Cheatsheets

A modern, searchable cheatsheet hub for developers, featuring comprehensive guides and keyboard shortcuts for popular development tools and technologies.

## ✨ Features

- **📚 Comprehensive Cheatsheets**: Programming languages, frameworks, databases, and more
- **⌨️ Keyboard Shortcuts**: VS Code, Figma, Adobe tools, Unity, and more
- **🔍 Smart Search**: Find what you need quickly with category and tag filtering
- **📱 Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **🌙 Dark Mode**: Easy on the eyes for long coding sessions
- **⚡ Fast Loading**: Static markdown files served from public folder
- **📋 Copy Code**: One-click copy for all code blocks
- **🎨 Beautiful Tables**: Enhanced table rendering for keybinds and data

## 🛠️ Tech Stack

- **React 19.1.0** - Latest React with modern features
- **TypeScript 5.8.3** - Type-safe development
- **Vite 7.0.4** - Lightning-fast build tool
- **React Router DOM** - Client-side routing
- **Tailwind CSS v4** - Utility-first styling
- **Framer Motion** - Smooth animations
- **React Markdown** - Markdown rendering
- **React Syntax Highlighter** - Code block highlighting

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Card.tsx        # Cheatsheet/Keybind cards
│   ├── ContentRenderer.tsx # Markdown content renderer
│   ├── Footer.tsx      # Site footer
│   └── Navbar.tsx      # Navigation bar
├── data/               # Data and metadata
│   └── cheatsheets.ts  # Cheatsheet definitions
├── pages/              # Page components
│   ├── About.tsx       # About page
│   ├── CheatsheetDetail.tsx # Individual cheatsheet view
│   ├── Cheatsheets.tsx # Cheatsheets listing
│   ├── Home.tsx        # Homepage
│   ├── Keybinds.tsx    # Keybinds listing
│   └── NotFound.tsx    # 404 page
├── utils/              # Utility functions
│   └── markdownLoader.ts # Markdown loading utility
└── main.tsx           # App entry point

public/
└── CheatSheets/       # Markdown files served statically
    ├── react-cheatsheet/
    ├── javascript-cheatsheet/
    ├── vscode-keybinds/
    └── ... (other cheatsheets)
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ravens-cheatsheets
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist/` directory, ready for deployment.

## 📝 Adding New Cheatsheets

### 1. Create Markdown File

Add your markdown file to `public/CheatSheets/your-cheatsheet/README.md`

### 2. Update Data

Add the cheatsheet metadata to `src/data/cheatsheets.ts`:

```typescript
{
  slug: "your-cheatsheet",
  title: "Your Cheatsheet Title",
  category: "Programming", // or "Backend", "Database", "Design", "Tools"
  tags: ["Tag1", "Tag2", "Tag3"],
  description: "Brief description of the cheatsheet",
  type: "cheatsheet", // or "keybinds"
  file: "CheatSheets/your-cheatsheet/README.md"
}
```

### 3. Categories Available

- **Programming**: Languages, frameworks, libraries
- **Backend**: Server-side technologies
- **Database**: Database systems and queries
- **Design**: Design tools and software
- **Tools**: Development tools and utilities

## 🎨 Customization

### Styling

The app uses Tailwind CSS v4. You can customize:

- Colors in `src/index.css`
- Component styles in individual component files
- Global styles in `src/index.css`

### Content Rendering

The `ContentRenderer` component handles:

- Syntax highlighting for code blocks
- Copy-to-clipboard functionality
- Enhanced table styling
- Responsive design
- Dark mode support

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect your repository** to Vercel
2. **Deploy automatically** on push to main branch
3. **Custom domain** (optional)

### Other Platforms

The app is a static site and can be deployed to:

- Netlify
- GitHub Pages
- AWS S3 + CloudFront
- Any static hosting service

## 📊 Performance

- **Static Markdown**: Files served directly from public folder
- **On-demand Loading**: Content loaded only when needed
- **Code Splitting**: Routes split for optimal loading
- **Optimized Images**: SVG icons and optimized assets
- **Minimal Dependencies**: Only essential packages included

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Add your cheatsheet or improvements
4. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- All the amazing developers who created the tools and technologies featured
- The open source community for the excellent libraries used
- Contributors who help improve and expand the cheatsheets

---

**Happy coding! 🎉**

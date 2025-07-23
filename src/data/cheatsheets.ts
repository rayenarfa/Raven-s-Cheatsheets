export interface Cheatsheet {
  slug: string;
  title: string;
  category: string;
  tags: string[];
  description: string;
  type: 'cheatsheet' | 'keybinds';
  file: string;
}

export const cheatsheets: Cheatsheet[] = [
  // Cheatsheets
  {
    slug: "javascript-cheatsheet",
    title: "JavaScript Cheatsheet",
    category: "Programming",
    tags: ["JavaScript", "Web", "Frontend"],
    description: "Essential JavaScript syntax, methods, and best practices",
    type: "cheatsheet",
    file: "CheatSheets/javascript-cheatsheet/README.md"
  },
  {
    slug: "react-cheatsheet",
    title: "React Cheatsheet",
    category: "Programming",
    tags: ["React", "JavaScript", "Frontend"],
    description: "React hooks, components, and common patterns",
    type: "cheatsheet",
    file: "CheatSheets/react-cheatsheet/README.md"
  },
  {
    slug: "html-cheatsheet",
    title: "HTML Cheatsheet",
    category: "Programming",
    tags: ["HTML", "Web", "Frontend"],
    description: "HTML elements, attributes, and semantic markup",
    type: "cheatsheet",
    file: "CheatSheets/html-cheatsheet/README.md"
  },
  {
    slug: "css-cheatsheet",
    title: "CSS Cheatsheet",
    category: "Programming",
    tags: ["CSS", "Web", "Styling"],
    description: "CSS properties, selectors, and layout techniques",
    type: "cheatsheet",
    file: "CheatSheets/css-cheatsheet/README.md"
  },
  {
    slug: "tailwind-cheatsheet",
    title: "Tailwind CSS Cheatsheet",
    category: "Programming",
    tags: ["Tailwind", "CSS", "Utility"],
    description: "Tailwind CSS utility classes and components",
    type: "cheatsheet",
    file: "CheatSheets/tailwind-cheatsheet/README.md"
  },
  {
    slug: "csharp-cheatsheet",
    title: "C# Cheatsheet",
    category: "Programming",
    tags: ["C#", ".NET", "Backend"],
    description: "C# syntax, LINQ, and .NET features",
    type: "cheatsheet",
    file: "CheatSheets/csharp-cheatsheet/README.md"
  },
  {
    slug: "nodejs-cheatsheet",
    title: "Node.js Cheatsheet",
    category: "Backend",
    tags: ["Node.js", "JavaScript", "Backend"],
    description: "Node.js APIs, modules, and server-side development",
    type: "cheatsheet",
    file: "CheatSheets/nodejs-cheatsheet/README.md"
  },
  {
    slug: "express-cheatsheet",
    title: "Express.js Cheatsheet",
    category: "Backend",
    tags: ["Express", "Node.js", "API"],
    description: "Express.js framework for building web applications",
    type: "cheatsheet",
    file: "CheatSheets/express-cheatsheet/README.md"
  },
  {
    slug: "nextjs-cheatsheet",
    title: "Next.js Cheatsheet",
    category: "Programming",
    tags: ["Next.js", "React", "Full-stack"],
    description: "Next.js framework for React applications",
    type: "cheatsheet",
    file: "CheatSheets/nextjs-cheatsheet/README.md"
  },
  {
    slug: "git-cheatsheet",
    title: "Git Cheatsheet",
    category: "Tools",
    tags: ["Git", "Version Control", "CLI"],
    description: "Git commands and workflow patterns",
    type: "cheatsheet",
    file: "CheatSheets/git-cheatsheet/README.md"
  },
  {
    slug: "npm-cheatsheet",
    title: "NPM Cheatsheet",
    category: "Tools",
    tags: ["NPM", "Package Manager", "Node.js"],
    description: "NPM commands and package management",
    type: "cheatsheet",
    file: "CheatSheets/npm-cheatsheet/README.md"
  },
  {
    slug: "mysql-cheatsheet",
    title: "MySQL Cheatsheet",
    category: "Database",
    tags: ["MySQL", "SQL", "Database"],
    description: "MySQL database queries and administration",
    type: "cheatsheet",
    file: "CheatSheets/mysql-cheatsheet/README.md"
  },
  {
    slug: "mongodb-cheatsheet",
    title: "MongoDB Cheatsheet",
    category: "Database",
    tags: ["MongoDB", "NoSQL", "Database"],
    description: "MongoDB queries and aggregation pipeline",
    type: "cheatsheet",
    file: "CheatSheets/mongodb-cheatsheet/README.md"
  },
  {
    slug: "firebase-cheatsheet",
    title: "Firebase Cheatsheet",
    category: "Backend",
    tags: ["Firebase", "Google", "Backend"],
    description: "Firebase services and SDK usage",
    type: "cheatsheet",
    file: "CheatSheets/firebase-cheatsheet/README.md"
  },
  // Keybinds
  {
    slug: "vscode-keybinds",
    title: "VS Code Keybinds",
    category: "Tools",
    tags: ["VS Code", "Editor", "Productivity"],
    description: "VS Code keyboard shortcuts and commands",
    type: "keybinds",
    file: "CheatSheets/vscode-keybinds/README.md"
  },
  {
    slug: "figma-keybinds",
    title: "Figma Keybinds",
    category: "Design",
    tags: ["Figma", "Design", "UI/UX"],
    description: "Figma keyboard shortcuts and design tools",
    type: "keybinds",
    file: "CheatSheets/figma-keybinds/README.md"
  },
  {
    slug: "photoshop-keybinds",
    title: "Photoshop Keybinds",
    category: "Design",
    tags: ["Photoshop", "Adobe", "Design"],
    description: "Adobe Photoshop keyboard shortcuts",
    type: "keybinds",
    file: "CheatSheets/photoshop-keybinds/README.md"
  },
  {
    slug: "illustrator-keybinds",
    title: "Illustrator Keybinds",
    category: "Design",
    tags: ["Illustrator", "Adobe", "Design"],
    description: "Adobe Illustrator keyboard shortcuts",
    type: "keybinds",
    file: "CheatSheets/illustrator-keybinds/README.md"
  },
  {
    slug: "adobe-premiere-pro-keybinds",
    title: "Premiere Pro Keybinds",
    category: "Design",
    tags: ["Premiere Pro", "Adobe", "Video"],
    description: "Adobe Premiere Pro keyboard shortcuts",
    type: "keybinds",
    file: "CheatSheets/adobe-premiere-pro-keybinds/README.md"
  },
  {
    slug: "unity-keybinds",
    title: "Unity Keybinds",
    category: "Tools",
    tags: ["Unity", "Game Development", "3D"],
    description: "Unity editor keyboard shortcuts and commands",
    type: "keybinds",
    file: "CheatSheets/unity-keybinds/README.md"
  }
];

export const categories = [
  "Programming",
  "Backend", 
  "Database",
  "Design",
  "Tools"
];

export const getCheatsheetsByCategory = (category: string) => {
  return cheatsheets.filter(cheatsheet => cheatsheet.category === category);
};

export const getCheatsheetBySlug = (slug: string) => {
  return cheatsheets.find(cheatsheet => cheatsheet.slug === slug);
};

export const getCheatsheetsByType = (type: 'cheatsheet' | 'keybinds') => {
  return cheatsheets.filter(cheatsheet => cheatsheet.type === type);
};

export const getCheatsheets = () => {
  return cheatsheets.filter(cheatsheet => cheatsheet.type === 'cheatsheet');
};

export const getKeybinds = () => {
  return cheatsheets.filter(cheatsheet => cheatsheet.type === 'keybinds');
}; 
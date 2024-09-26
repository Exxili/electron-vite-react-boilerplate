# React + TypeScript + Vite + Electron Boilerplate

This is my own personal template for building electron react desktop applications.

This template features a vite build system using SWC compiler.

Its file structure is as follows:

```
/project-root
│
├── /packages
│   ├── /main                    # Electron Main Process (Backend)
│   │   ├── /src                  # Main Process Source Files
│   │   │   ├── main.ts           # Main Electron entry point
│   │   │   ├── preload.ts        # Preload scripts
│
│   ├── /renderer                 # React Frontend (Renderer Process)
│   │   ├── /src                  # React Source Files
│   │   │   ├── /components       # UI Components
│   │   │   ├── /layouts          # Layouts
│   │   │   ├── /pages            # Pages
│   │   │   ├── /assets           # Assets
│   │   │   ├── App.tsx           # Root Component for React
│   │   │   ├── main.tsx          # Entry point for React
│
│   ├── /shared                   # Shared code between Main and Renderer
│
└── tsconfig.json                 # Global TypeScript configuration
└── tsconfig.node.json            # Typescript configuration for Main Process

```

# UI Library

This template uses Mantine UI Library - see https://mantine.dev
As a template it only includes the hooks and core parts of the library

# Styling

This template primarily uses tailwindcss (https://tailwindcss.com/) as its Styling engine

# Packager

This template uses electron builder (https://www.electron.build/index.html) as its packaging system

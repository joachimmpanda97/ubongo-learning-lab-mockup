# Ubongo Learning Lab — Project Context

## What this is
A React + Vite mockup of the Ubongo Learning Lab app — an educational platform for foundational literacy and numeracy. Built as a single-page app with state-based navigation (no URL router).

## Stack
- **Framework**: React + TypeScript
- **Build tool**: Vite
- **Styling**: Tailwind CSS v4 (`@tailwindcss/vite`)
- **Animations**: Framer Motion (`motion/react`)
- **Icons**: Lucide React

## Project structure
```
src/
  App.tsx       — entire app (components, views, data all in one file)
  main.tsx      — entry point
  index.css     — global styles + custom Tailwind classes
index.html      — HTML shell (Figma capture script removed after use)
```

## Navigation
4 views managed via React state: `home | lessons | dashboard | alphabet`
- History stack (`navHistory`) tracks navigation for the header back button
- `navigate(view)` — push to history and switch view
- `goBack()` — pop history and return to previous view
- `goHome()` — clear history and go to home

## GitHub
- Repo: https://github.com/joachimmpanda97/ubongo-learning-lab-mockup
- Branch: `main`

## Deployment
- Platform: **Vercel** (connected to GitHub repo)
- Auto-deploys on every push to `main`
- URL: check Vercel dashboard for live URL

## Figma
- Captured file: https://www.figma.com/design/8aekaFz8r4Ifb99jMiZ6TA
- Team: Ubongo Digital
- Contains all 4 screens: Home, Lessons, Dashboard, Alphabet
- Captured using Figma MCP + script injection into index.html

## Design notes
- Logo is centered in the header using a 3-column grid layout
- Back button (top left) matches the English pill button style: `bg-u-yellow/20 rounded-full border-2 border-u-yellow text-u-orange`
- Custom Tailwind colors: `u-blue`, `u-pink`, `u-orange`, `u-yellow`, `u-purple`, `go-green`, `u-grey`, `u-light-grey`

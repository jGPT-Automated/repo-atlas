# Scrolling-Portfolio

**Organization:** GenJess  
**URL:** https://github.com/GenJess/Scrolling-Portfolio  
**Language:** None  
**Size:** 81 KB  
**Stars:** ⭐ 0 | Forks: 🔀 0  
**Created:** 2026-03-28T12:51:37Z  
**Last Updated:** 2026-03-28T12:51:37Z  

## Overview

scrolling portfolio v1

## README

```
# Enhanced Vite React TypeScript Template

This template includes built-in detection for missing CSS variables between your Tailwind config and CSS files.

## Features

- **CSS Variable Detection**: Automatically detects if CSS variables referenced in `tailwind.config.cjs` are defined in `src/index.css`
- **Enhanced Linting**: Includes ESLint, Stylelint, and custom CSS variable validation
- **Shadcn/ui**: Pre-configured with all Shadcn components
- **Modern Stack**: Vite + React + TypeScript + Tailwind CSS

## Available Scripts

```bash
# Run all linting (includes CSS variable check)
npm run lint

# Check only CSS variables
npm run check:css-vars

# Individual linting
npm run lint:js    # ESLint
npm run lint:css   # Stylelint
```

## CSS Variable Detection

The template includes a custom script that:

1. **Parses `tailwind.config.cjs`** to find all `var(--variable)` references
2. **Parses `src/index.css`** to find all defined CSS variables (`--variable:`)
3. **Cross-references** them to find missing definitions
4. **Reports undefined variables** with clear error messages

### Example Output

When CSS variables are missing:
```
❌ Undefined CSS variables found in tailwind.config.cjs:
   --sidebar-background
   --sidebar-foreground
   --sidebar-primary

Add these variables to src/index.css
```

When all variables are defined:
```
✅ All CSS variables in tailwind.config.cjs are defined
```

## How It Works

The detection happens during the `npm run lint` command, which will:
- Exi
```

## File Structure

📄 .bash_logout
📄 .bashrc
📄 .env.local
📄 .gitignore
📄 .profile
📄 README.md
📄 components.json
📄 index.html
📄 package.json
📄 postcss.config.cjs
📁 public/
📁 src/
📄 tailwind.config.cjs
📄 tsconfig.json
📄 tsconfig.node.json
📄 vite.config.ts

---

**Analysis Date:** 2026-07-27 15:02:34 UTC  
**Analyzer:** Repo Atlas Daily Deep Dive  

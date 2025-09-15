# my_portfolio (React + Vite + Tailwind)

This is a minimal, beginner-friendly starter for a personal portfolio.

## No‑Terminal Setup (Beginner)

1. **Create a GitHub repo**
   - Go to GitHub → New repository → name it **my_portfolio**.
   - Click **Create repository**.
2. **Upload the files**
   - On the new repo page, click **Add file → Upload files**.
   - Drag-and-drop all files from this folder into the repo.
   - Click **Commit changes**.
3. **Connect to Vercel**
   - Go to vercel.com → **Add New… → Project** → import your `my_portfolio` repo.
   - Framework preset: **Vite** (defaults OK). Build command: `npm run build`. Output: `dist/`.
   - Click **Deploy** → you’ll get a live URL.
4. **Edit online and auto‑deploy**
   - In your GitHub repo, press the `.` key to open the web editor.
   - Edit files (like `src/App.jsx`), then **Commit**.
   - Vercel will auto-build and update your live site.

> Your résumé `_CV_.pdf` is already placed in `public/`. The button in the Hero section will download it.

## Optional: Local Dev (with Terminal)

- Install Node.js (18+), then run:
  ```bash
  npm i
  npm run dev
  ```
- Open the shown URL, edit files, save to see changes.

## Project Structure

```
my_portfolio/
  public/
    _CV_.pdf
    favicon.svg
  src/
    App.jsx
    main.jsx
    index.css   # Tailwind entry
  index.html
  tailwind.config.js
  postcss.config.js
  vite.config.js
  package.json
  .gitignore
  README.md
```

Happy building!

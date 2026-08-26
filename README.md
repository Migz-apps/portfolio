# Miguel Portfolio

This Vite portfolio deploys automatically to GitHub Pages whenever changes are pushed to the `main` branch.

## Local development

```powershell
npm install
npm run dev
```

## GitHub Pages deployment

1. Push this project to the `main` branch of the `Migz-apps/portfolio` repository.
2. In GitHub, open **Settings → Pages** and set **Source** to **GitHub Actions**.
3. The workflow in `.github/workflows/deploy.yml` installs dependencies, builds the site, adds the SPA fallback, and deploys the `dist` folder automatically.

The public site is served from `/portfolio/`, matching the Vite base path.

## Contact form

The contact form submits directly to FormSubmit and sends messages to `mazimpakamiguel@gmail.com`. Confirm the one-time FormSubmit activation email after the first live submission so delivery can begin.

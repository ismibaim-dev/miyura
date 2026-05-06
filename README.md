# Miyura — site

Marketing and documentation site for Miyura. Built with [VitePress](https://vitepress.dev), deployed to Netlify.

## Local development

```bash
npm install
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173).

## Build

```bash
npm run build
```

Output is written to `docs/.vitepress/dist`.

## Preview the production build

```bash
npm run preview
```

## Project structure

```
docs/
  .vitepress/
    config.mjs        # site config — nav, sidebar, metadata
    theme/
      index.js        # extends the default theme
      style.css       # all custom styling lives here
  public/             # static assets served at the site root
    logo.svg
    hero-art.svg
    manifest.webmanifest
  guide/              # user-facing docs
  contributing/       # contributor docs
  index.md            # homepage (uses the VitePress home layout + custom sections)
netlify.toml          # deploy + headers config
```

## Deploying to Netlify

1. Push this repository to GitHub.
2. In Netlify, **Add new site → Import an existing project** and pick the repo.
3. Netlify will read `netlify.toml` for the build command and publish directory. Confirm and deploy.

That's it. Subsequent commits to the default branch trigger a redeploy automatically.

## License

Site content and code: Apache License 2.0.

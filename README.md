# Mark John's Portfolio

This repository hosts a simple portfolio site served with Node.js/Express and prepared for deployment on Vercel.

## Contents

- `index.html` — main landing page
- `styles.css` — site styles
- `server.js` — original Express server for local development
- `api/index.js` — Express app adapted for Vercel serverless function
- `placeholder-pages/` — example project pages
- `package.json` — project metadata and dependencies
- `vercel.json` — Vercel routing and build configuration

## Prerequisites

- Node.js (>=14)
- npm (comes with Node)
- Vercel CLI (optional for CLI-based deploy):

```bash
npm install -g vercel
```

## Install and run locally

1. Install dependencies:

```bash
npm install
```

2. Start the server (local Express):

```bash
npm start
# Opens http://localhost:3300 by default
```

Note: The repository contains an Express server (`server.js`) for local development and an `api/index.js` entry prepared for Vercel serverless deployment.

## Deploy to Vercel

1. Login and link (first time):

```bash
vercel login
vercel
```

2. Deploy a production release:

```bash
vercel --prod
```

Vercel will detect the `vercel.json` and route requests to the serverless function at `api/index.js`. Static assets are served from the project root and the `placeholder-pages/` directory.

## Notes & troubleshooting

- If you prefer purely static hosting, remove the Express server and serve `index.html` and `placeholder-pages/` as static files.
- If an API route returns 500 on Vercel, check the function logs in the Vercel dashboard or run `vercel logs <deployment-url>`.
- Ensure `node_modules` is not committed; it is ignored by `.gitignore`.

## Next steps

- Connect the repo to GitHub and enable automatic deployments in the Vercel dashboard.
- Add a custom domain via Vercel settings.

---

# Mark John C. Serato Portfolio

Interactive portfolio landing page built with HTML, CSS, Tailwind, Node.js, and Express.

## Project overview

This portfolio includes:
- A responsive landing page with a minimal white/beige design
- An Express backend serving static files
- A dynamic `/api/projects` endpoint for future project links
- Placeholder pages for future CloudStack and network dashboard projects

## Files

- `index.html` — main portfolio page
- `styles.css` — custom styling for the landing page
- `server.js` — Express server configuration
- `package.json` — Node project metadata and dependencies
- `placeholder-pages/` — folder for placeholder project pages
- `placeholder-pages/project-cloudstack.html` — placeholder page for CloudStack project
- `placeholder-pages/project-network-dashboard.html` — placeholder page for network dashboard project
- `.gitignore` — ignored files for Git

## Setup

1. Open the project folder in a terminal.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the server:
   ```bash
   npm start
   ```
4. Open the app in your browser:
   ```text
   http://localhost:3000
   ```

If a project card still does not load, make sure the server is running and try opening the URL directly:
```text
http://localhost:3000/placeholder-pages/project-cloudstack.html
```

## How the placeholder pages are organized

1. Project placeholder pages live in `placeholder-pages/`.
2. The Express backend serves them directly because `server.js` uses `express.static(__dirname)`.
3. The portfolio frontend loads project URLs from `/api/projects`.
4. The API returns the paths:
   - `/placeholder-pages/project-cloudstack.html`
   - `/placeholder-pages/project-network-dashboard.html`

## How to update the project links

1. Open `server.js`.
2. Edit the `projects` array inside the `/api/projects` route.
3. For each project, set `title`, `description`, `status`, and `url`.
4. Keep `url` pointing to the correct file path under `placeholder-pages/`.

Example:
```js
{
  id: 1,
  title: 'New Project Title',
  description: 'Short description of the project.',
  status: 'Coming soon',
  url: '/placeholder-pages/your-project-file.html'
}
```

## How to add a new placeholder page

1. Create a new HTML file in `placeholder-pages/`, for example `your-project-file.html`.
2. Use the existing placeholder page structure as a template.
3. Update the `url` field in `server.js` to reference the new file.
4. Restart the server if it is already running.

## How to change the homepage style

1. Open `index.html`.
2. Update the layout or text content directly in the HTML.
3. Use Tailwind utility classes in the markup for styling.
4. If you need custom CSS, edit `styles.css`.

## API reference

- `GET /api/projects` — returns JSON data for project cards on the main page.

## Notes

- Keep placeholder page files inside `placeholder-pages/` so the project structure stays organized.
- Use `npm start` to run the app locally and test changes immediately.
- Deploy on any Node.js hosting provider when ready.

## Project API

- `GET /api/projects` — returns a JSON list of future project links.

## Customize

- Add new project entries inside `server.js` under the `/api/projects` route.
- Update the main page layout in `index.html`.
- Use Tailwind utility classes directly in the HTML for styling.

## Notes

- The portfolio is ready to extend with real project pages and backend-driven content.
- For deployment, host the project on any platform that supports Node.js.

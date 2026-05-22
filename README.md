# next-watch/

A clean, fast movie discovery site. Search for any film, explore details, and get linked directly to where you can watch or download it.

Built with React and with the TMDB API.

---

## Features

- Search movies by title
- Browse movie details — poster, rating, release date, e.t.c
- External links to streaming/download sources
- Fast and lightweight — no backend, no database

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React + Vite |
| Styling | Tailwind CSS |
| Routing | React Router |
| Movie Data | TMDB API |
| Hosting | Netlify |

---

## Getting Started

### Prerequisites

- Node.js v18+
- A free [TMDB API key](https://www.themoviedb.org/settings/api)

### Installation

```bash
# Clone the repo
git clone https://github.com/your-username/next-watch.git
cd next-watch

# Install dependencies
npm install
```

### Environment Variables

Create a `.env` file in the root of the project:

```env
VITE_TMDB_API_KEY=your_tmdb_api_key_here
```

### Run Locally

```bash
npm run dev
```

---

## Deployment

The app deploys to Netlify in one step:

```bash
npm run build
```

Or connect your GitHub repo to [Netlify](https://netlify.com) for automatic deployments on every push. Make sure to add your `VITE_TMDB_API_KEY` to the Netlify environment variables.

---

## API Reference

Movie data is sourced from the [TMDB API](https://developer.themoviedb.org/docs). This product uses the TMDB API but is not endorsed or certified by TMDB.

## License

This project is licensed under the MIT License - see the [LICENSE](license.txt) file for details.
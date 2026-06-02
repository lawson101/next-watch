# next-watch/

A movie discovery site. Search for movies, explore details, and get linked to where you can watch or download it.

Built with React, the TMDB API and Supabase.

---

## Features

- Search movies and TV shows
- View movie and TV show details
- Find where to watch titles
- Save favorites
- Create a watchlist
- User authentication

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React + Vite |
| Styling | Tailwind CSS |
| Routing | React Router |
| Movie Data | TMDB API |
| Authentication | Supabase Auth
| Database | Supabase PostgreSQL
| Hosting | Netlify |

---

## Getting Started

### Prerequisites

- Node.js v18+
- A free [TMDB API key](https://www.themoviedb.org/settings/api)
- A free supabase URL and Database

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
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
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

Or connect your GitHub repo to [Netlify](https://netlify.com) for automatic deployments on every push. Make sure to add your `VITE_TMDB_API_KEY`, `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` to the Netlify environment variables.

---

## API Reference

Movie data is sourced from the [TMDB API](https://developer.themoviedb.org/docs). This product uses the TMDB API but is not endorsed or certified by TMDB.

## Database

The application uses Supabase to store user-specific data.

## License

This project is licensed under the MIT License - see the [LICENSE](license.txt) file for details.

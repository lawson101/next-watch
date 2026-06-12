# next-watch/

A movie and TV show discovery site. Search for movies, explore details, and get linked to where you can watch or download it.

Built with React, the TMDB API and Supabase.

---

## Features

- Search movies and TV shows
- View movie and TV show details
- Find where to watch titles
- Save favorites
- Create a watchlist
- User authentication
- Contact form powered by Formspree

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React + Vite |
| Styling | Tailwind CSS |
| Routing | React Router |
| Movie Data | TMDB API |
| Authentication | Supabase Auth |
| Database | Supabase PostgreSQL |
| Contact Form | Formspree |
| Hosting | Netlify |

---

## Getting Started

### Prerequisites

- Node.js v18+
- A [TMDB Access Token](https://www.themoviedb.org/settings/api)
- A supabase URL and Database
- A formspree account

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
VITE_TMDB_ACCESS_TOKEN=your_tmdb_access_token
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_PUB_KEY=your_supabase_key
VITE_FORMSPREE_FORM_ID=your_formspree_id
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

Or connect your GitHub repo to [Netlify](https://netlify.com) for automatic deployments on every push. Make sure to add your `VITE_TMDB_ACCESS_TOKEN`, `VITE_SUPABASE_URL`, `VITE_SUPABASE_PUB_KEY` and `VITE_FORMSPREE_FORM_ID`  to the Netlify environment variables.

---

## API Reference

Movie data is sourced from the [TMDB API](https://developer.themoviedb.org/docs). This product uses the TMDB API but is not endorsed or certified by TMDB.

## Database and Authentication

The application uses Supabase to store user-specific data and for user authentication.

## Contact Form

The contact form is powered by Formspree, allowing users to send emails without requiring a custom backend.

## License

This project is licensed under the MIT License - see the [LICENSE](license.txt) file for details.

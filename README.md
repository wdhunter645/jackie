# Jackie Robinson Fan Club

A Next.js web application celebrating the life and legacy of Jackie Robinson, the first African American to play in Major League Baseball in the modern era.

## Features

- Interactive hero banner with key statistics
- Fan poll voting system
- Responsive design with beautiful gradients
- Built with Next.js and React

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Supabase account (for backend integration)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/wdhunter645/jackie.git
   cd jackie
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env.local
   ```
   Then fill in your Supabase credentials in `.env.local`

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Supabase Setup

This application uses Supabase for backend functionality. To set up Supabase integration:

1. **Access the Supabase "fan club" project** and collect environment variables
2. **Set up repository secrets** for CI/CD deployment

### Quick Setup

For detailed instructions, see:
- **[SECRETS_REFERENCE.md](./SECRETS_REFERENCE.md)** - Quick reference for repository secrets
- **[SUPABASE_SETUP.md](./SUPABASE_SETUP.md)** - Complete setup guide

### Automated Setup

Use the provided script to automatically create GitHub repository secrets:

```bash
./setup-github-secrets.sh
```

This script requires [GitHub CLI](https://cli.github.com/) to be installed and authenticated.

### Required Environment Variables

The following environment variables are required:

- `NEXT_PUBLIC_SUPABASE_URL` - Your Supabase project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` - Supabase anonymous key
- `SUPABASE_SERVICE_ROLE_KEY` - Supabase service role key (keep secret!)

## Deployment

This application is configured for deployment on Netlify with Next.js support.

### Netlify Setup

1. Connect your repository to Netlify
2. Add the environment variables in Netlify dashboard (same as above)
3. Deploy!

The `netlify.toml` configuration is already set up for Next.js.

## Project Structure

```
jackie/
├── components/          # React components
│   ├── HeroBanner.js   # Main hero section
│   ├── Navbar.js       # Navigation bar
│   └── VotePanel.js    # Voting interface
├── pages/              # Next.js pages
│   ├── _app.js         # App wrapper
│   └── index.js        # Home page
├── styles/             # Global styles
│   └── globals.css
├── .env.example        # Environment variables template
└── netlify.toml        # Netlify configuration
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available for educational purposes.

## Acknowledgments

Honoring #42 Forever - Jackie Robinson's legacy continues to inspire generations.

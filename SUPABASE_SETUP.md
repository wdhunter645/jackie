# Supabase Setup Guide

This guide will help you integrate Supabase with the Jackie Robinson Fan Club application and set up the necessary GitHub repository secrets.

## Prerequisites

- Access to the Supabase "fan club" project
- Admin access to the GitHub repository
- Supabase account

## Step 1: Access Supabase Project

1. Log in to [Supabase Dashboard](https://supabase.com/dashboard)
2. Navigate to the "fan club" project
3. Go to **Settings** → **API**

## Step 2: Collect Environment Variables

From the Supabase API settings page, collect the following values:

### Required Environment Variables:

1. **NEXT_PUBLIC_SUPABASE_URL**
   - Found under: "Project URL"
   - Format: `https://[project-ref].supabase.co`
   - This is safe to expose in the browser

2. **NEXT_PUBLIC_SUPABASE_ANON_KEY**
   - Found under: "Project API keys" → "anon public"
   - This is the public anonymous key
   - Safe to use in client-side code

3. **SUPABASE_SERVICE_ROLE_KEY**
   - Found under: "Project API keys" → "service_role"
   - ⚠️ **IMPORTANT**: This is a secret key with admin privileges
   - Never expose this in client-side code
   - Only use server-side

## Step 3: Create Repository Secrets

Create GitHub repository secrets for secure deployment:

### Using GitHub Web Interface:

1. Go to your repository: `https://github.com/wdhunter645/jackie`
2. Click on **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret**
4. Add each of the following secrets:

   **Secret 1:**
   - Name: `NEXT_PUBLIC_SUPABASE_URL`
   - Value: [Your Supabase project URL]

   **Secret 2:**
   - Name: `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - Value: [Your Supabase anon key]

   **Secret 3:**
   - Name: `SUPABASE_SERVICE_ROLE_KEY`
   - Value: [Your Supabase service role key]

### Using GitHub CLI:

If you have GitHub CLI installed, you can create secrets with:

```bash
# Set Supabase URL
gh secret set NEXT_PUBLIC_SUPABASE_URL -b "https://your-project-ref.supabase.co"

# Set Supabase Anon Key
gh secret set NEXT_PUBLIC_SUPABASE_ANON_KEY -b "your-anon-key-here"

# Set Supabase Service Role Key
gh secret set SUPABASE_SERVICE_ROLE_KEY -b "your-service-role-key-here"
```

## Step 4: Set Up Local Development

For local development:

1. Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```

2. Fill in the values in `.env.local` with your Supabase credentials

3. The `.env.local` file is already in `.gitignore` and will not be committed

## Step 5: Verify Configuration

After setting up the secrets, verify they're available:

1. In GitHub Actions, the secrets will be available as environment variables
2. For Netlify deployment, you'll also need to add these as environment variables in Netlify dashboard

## Environment Variables Summary

| Variable | Usage | Exposure |
|----------|-------|----------|
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase project URL | Public (client-side safe) |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Public anonymous API key | Public (client-side safe) |
| `SUPABASE_SERVICE_ROLE_KEY` | Admin API key | Secret (server-side only) |

## Security Notes

- ✅ Environment variables prefixed with `NEXT_PUBLIC_` are safe to expose in the browser
- ⚠️ Never commit actual credentials to the repository
- ⚠️ The `SUPABASE_SERVICE_ROLE_KEY` bypasses Row Level Security - use with caution
- ✅ Always use `.env.local` for local development
- ✅ Use GitHub Secrets for CI/CD pipelines
- ✅ Use Netlify Environment Variables for production deployment

## Next Steps

After setting up the environment variables:

1. Integrate Supabase client in your Next.js application
2. Set up database tables for storing votes
3. Implement Row Level Security policies
4. Update the VotePanel component to use Supabase

## Resources

- [Supabase Documentation](https://supabase.com/docs)
- [Next.js Environment Variables](https://nextjs.org/docs/basic-features/environment-variables)
- [GitHub Secrets Documentation](https://docs.github.com/en/actions/security-guides/encrypted-secrets)

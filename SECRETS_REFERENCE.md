# Repository Secrets for Supabase Integration

## Required GitHub Repository Secrets

The following secrets need to be created in the GitHub repository for Supabase integration:

### 1. NEXT_PUBLIC_SUPABASE_URL
- **Description**: Your Supabase project URL
- **Where to find**: Supabase Dashboard → Settings → API → Project URL
- **Format**: `https://[project-ref].supabase.co`
- **Example**: `https://abcdefghijklmnop.supabase.co`
- **Visibility**: Public (safe for client-side use)

### 2. NEXT_PUBLIC_SUPABASE_ANON_KEY
- **Description**: Supabase anonymous/public API key
- **Where to find**: Supabase Dashboard → Settings → API → Project API keys → anon public
- **Format**: Long JWT token starting with `eyJ`
- **Visibility**: Public (safe for client-side use)
- **Usage**: Used for client-side API calls with RLS (Row Level Security)

### 3. SUPABASE_SERVICE_ROLE_KEY
- **Description**: Supabase service role key (admin privileges)
- **Where to find**: Supabase Dashboard → Settings → API → Project API keys → service_role
- **Format**: Long JWT token starting with `eyJ`
- **Visibility**: ⚠️ **SECRET** - Never expose this key
- **Usage**: Server-side only, bypasses RLS

## How to Access Supabase "fan club" Project

1. Go to [https://supabase.com/dashboard](https://supabase.com/dashboard)
2. Log in with your credentials
3. Select the "fan club" project from your projects list
4. Navigate to Settings (gear icon) → API
5. Copy the required values from the API settings page

## How to Create Repository Secrets

### Method 1: Using GitHub Web Interface (Recommended)

1. Go to: `https://github.com/wdhunter645/jackie/settings/secrets/actions`
2. Click "New repository secret"
3. Add each secret one by one:
   - Name: (use exact names from list above)
   - Secret: (paste the value from Supabase)
4. Click "Add secret"
5. Repeat for all three secrets

### Method 2: Using the Automated Script

```bash
# Make sure you're in the repository directory
cd /path/to/jackie

# Run the setup script
./setup-github-secrets.sh
```

The script will prompt you for each value and create the secrets automatically.

### Method 3: Using GitHub CLI Manually

```bash
# Set the repository context (run from repository directory)
cd /path/to/jackie

# Create each secret
gh secret set NEXT_PUBLIC_SUPABASE_URL -b "https://your-project.supabase.co"
gh secret set NEXT_PUBLIC_SUPABASE_ANON_KEY -b "your-anon-key"
gh secret set SUPABASE_SERVICE_ROLE_KEY -b "your-service-role-key"
```

## Verification

After creating the secrets, verify they exist:

```bash
# List all secrets in the repository
gh secret list
```

You should see all three secrets listed:
- NEXT_PUBLIC_SUPABASE_URL
- NEXT_PUBLIC_SUPABASE_ANON_KEY
- SUPABASE_SERVICE_ROLE_KEY

## For Netlify Deployment

These same environment variables also need to be added to Netlify:

1. Go to Netlify Dashboard → Your Site → Site settings → Environment variables
2. Add the same three variables with their values
3. Save and redeploy your site

## Security Checklist

- ✅ Never commit actual secret values to Git
- ✅ Use `.env.local` for local development (already in .gitignore)
- ✅ Repository secrets are encrypted and only visible during builds
- ✅ The `NEXT_PUBLIC_*` prefix makes variables available to the browser
- ⚠️ Keep `SUPABASE_SERVICE_ROLE_KEY` secret - only use server-side
- ✅ Rotate keys if they are ever exposed

## Troubleshooting

**Problem**: Secrets not showing in GitHub Actions
- Solution: Make sure you created them in "Actions" secrets, not "Dependabot" or "Codespaces"

**Problem**: Can't find the "fan club" project in Supabase
- Solution: Verify you have access to the correct Supabase organization/account

**Problem**: Keys don't work
- Solution: Double-check you copied the correct keys (anon vs service_role)
- Solution: Make sure there are no extra spaces or characters when copying

## Additional Resources

- Full setup guide: See `SUPABASE_SETUP.md`
- Supabase documentation: https://supabase.com/docs
- GitHub Secrets docs: https://docs.github.com/en/actions/security-guides/encrypted-secrets

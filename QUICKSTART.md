# Quick Start: Setting Up Supabase Environment Variables

Follow these steps to collect environment variables from Supabase and create repository secrets.

## Step 1: Get Values from Supabase

1. Go to https://supabase.com/dashboard
2. Open the **"fan club"** project
3. Click **Settings** (gear icon) → **API**
4. Copy these three values:

   | Value to Copy | Field in Supabase |
   |---------------|-------------------|
   | Project URL | Under "Project URL" section |
   | Anon Key | Under "Project API keys" → `anon` `public` |
   | Service Role Key | Under "Project API keys" → `service_role` |

## Step 2: Create GitHub Repository Secrets

### Option A: Use the Automated Script (Easiest)

```bash
./setup-github-secrets.sh
```

### Option B: Manual Setup via GitHub Web

1. Go to: https://github.com/wdhunter645/jackie/settings/secrets/actions
2. Click "New repository secret" for each:
   
   - **Name**: `NEXT_PUBLIC_SUPABASE_URL`
     **Value**: [paste Project URL from step 1]
   
   - **Name**: `NEXT_PUBLIC_SUPABASE_ANON_KEY`
     **Value**: [paste Anon Key from step 1]
   
   - **Name**: `SUPABASE_SERVICE_ROLE_KEY`
     **Value**: [paste Service Role Key from step 1]

### Option C: Use GitHub CLI

```bash
gh secret set NEXT_PUBLIC_SUPABASE_URL -b "your-url"
gh secret set NEXT_PUBLIC_SUPABASE_ANON_KEY -b "your-anon-key"
gh secret set SUPABASE_SERVICE_ROLE_KEY -b "your-service-role-key"
```

## Step 3: Verify

Check secrets are created:
```bash
gh secret list
```

Or visit: https://github.com/wdhunter645/jackie/settings/secrets/actions

## Done! ✅

Your repository secrets are now set up. GitHub Actions will use these automatically.

---

**Need more details?** See:
- `SECRETS_REFERENCE.md` - Detailed reference
- `SUPABASE_SETUP.md` - Complete setup guide

# START HERE - Supabase Environment Variables Setup

👋 Welcome! This guide will help you set up Supabase environment variables and repository secrets.

## ⚡ Quick Action (5 minutes)

### Step 1: Get Supabase Credentials
1. Open https://supabase.com/dashboard
2. Select the **"fan club"** project
3. Go to **Settings** → **API**
4. Copy these 3 values:
   - Project URL
   - anon public key
   - service_role key

### Step 2: Create GitHub Secrets
Run this command in your terminal:
```bash
./setup-github-secrets.sh
```

The script will prompt you for the 3 values and create the secrets automatically.

### Step 3: Verify
```bash
gh secret list
```

You should see:
- NEXT_PUBLIC_SUPABASE_URL
- NEXT_PUBLIC_SUPABASE_ANON_KEY
- SUPABASE_SERVICE_ROLE_KEY

## ✅ That's it!

Your repository secrets are now configured.

---

## 📚 Need More Information?

**Choose based on your needs:**

| If you want... | Read this file |
|----------------|----------------|
| Quick 1-2 minute guide | `QUICKSTART.md` |
| Visual workflow diagram | `WORKFLOW.md` |
| Detailed secret reference | `SECRETS_REFERENCE.md` |
| Complete setup guide | `SUPABASE_SETUP.md` |
| Implementation details | `IMPLEMENTATION_SUMMARY.md` |

## 🔧 Alternative Setup Methods

**Don't have GitHub CLI?** 

Manual setup via GitHub web interface:
1. Go to: https://github.com/wdhunter645/jackie/settings/secrets/actions
2. Click "New repository secret"
3. Add each of the 3 secrets

See `SECRETS_REFERENCE.md` for detailed instructions.

## 🚀 For Local Development

After creating repository secrets:
```bash
cp .env.example .env.local
# Edit .env.local with your Supabase credentials
npm install
npm run dev
```

## 📦 For Production Deployment

Also add these variables to Netlify:
- Go to Netlify Dashboard → Site settings → Environment variables
- Add the same 3 environment variables

## ❓ Questions?

- Check `SECRETS_REFERENCE.md` for troubleshooting
- Review `SUPABASE_SETUP.md` for security notes
- See `README.md` for project overview

---

**Files in this repository:**
- 📘 Documentation: 6 comprehensive guides
- 🔧 Tools: Automated setup script
- 📝 Templates: .env.example for local dev
- ⚙️ CI/CD: GitHub Actions workflow example

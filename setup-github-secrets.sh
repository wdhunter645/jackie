#!/bin/bash

# Script to set up GitHub repository secrets for Supabase integration
# This script requires GitHub CLI (gh) to be installed and authenticated
# Run: chmod +x setup-github-secrets.sh && ./setup-github-secrets.sh

set -e

echo "🔧 Supabase GitHub Secrets Setup"
echo "=================================="
echo ""

# Check if gh CLI is installed
if ! command -v gh &> /dev/null; then
    echo "❌ Error: GitHub CLI (gh) is not installed."
    echo "Please install it from: https://cli.github.com/"
    exit 1
fi

# Check if user is authenticated
if ! gh auth status &> /dev/null; then
    echo "❌ Error: Not authenticated with GitHub CLI."
    echo "Please run: gh auth login"
    exit 1
fi

echo "This script will help you set up GitHub repository secrets for Supabase."
echo ""
echo "You will need the following information from your Supabase 'fan club' project:"
echo "1. Project URL (from Settings → API)"
echo "2. Anon/Public Key (from Settings → API)"
echo "3. Service Role Key (from Settings → API)"
echo ""

# Prompt for Supabase URL
echo "📍 Enter your Supabase Project URL:"
echo "   (Example: https://abcdefghijklmnop.supabase.co)"
read -p "   URL: " SUPABASE_URL

if [ -z "$SUPABASE_URL" ]; then
    echo "❌ Error: Supabase URL cannot be empty"
    exit 1
fi

# Prompt for Anon Key
echo ""
echo "🔑 Enter your Supabase Anon Key:"
echo "   (This is the 'anon public' key from API settings)"
read -p "   Key: " SUPABASE_ANON_KEY

if [ -z "$SUPABASE_ANON_KEY" ]; then
    echo "❌ Error: Supabase Anon Key cannot be empty"
    exit 1
fi

# Prompt for Service Role Key
echo ""
echo "🔐 Enter your Supabase Service Role Key:"
echo "   (This is the 'service_role' key from API settings - keep this secret!)"
read -sp "   Key: " SUPABASE_SERVICE_ROLE_KEY
echo ""

if [ -z "$SUPABASE_SERVICE_ROLE_KEY" ]; then
    echo "❌ Error: Supabase Service Role Key cannot be empty"
    exit 1
fi

echo ""
echo "📤 Creating GitHub repository secrets..."
echo ""

# Create the secrets
gh secret set NEXT_PUBLIC_SUPABASE_URL -b "$SUPABASE_URL"
echo "✅ Created: NEXT_PUBLIC_SUPABASE_URL"

gh secret set NEXT_PUBLIC_SUPABASE_ANON_KEY -b "$SUPABASE_ANON_KEY"
echo "✅ Created: NEXT_PUBLIC_SUPABASE_ANON_KEY"

gh secret set SUPABASE_SERVICE_ROLE_KEY -b "$SUPABASE_SERVICE_ROLE_KEY"
echo "✅ Created: SUPABASE_SERVICE_ROLE_KEY"

echo ""
echo "✨ Success! All GitHub secrets have been created."
echo ""
echo "Next steps:"
echo "1. Verify secrets at: https://github.com/$(gh repo view --json nameWithOwner -q .nameWithOwner)/settings/secrets/actions"
echo "2. Set up the same environment variables in Netlify for production deployment"
echo "3. Create a .env.local file for local development using .env.example as a template"
echo ""
echo "For more information, see SUPABASE_SETUP.md"

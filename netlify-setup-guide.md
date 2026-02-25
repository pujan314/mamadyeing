# 🚨 URGENT: Fix Netlify Environment Variables

## The Problem
Your Netlify site is missing the Supabase environment variables, which is why you're getting "database temporarily unavailable" errors.

## 🔧 IMMEDIATE FIX STEPS:

### Step 1: Go to Netlify Dashboard
1. Open [netlify.com](https://netlify.com) and log in
2. Find your "Mama Dyeing" site
3. Click on it to open the site dashboard

### Step 2: Add Environment Variables
1. In your site dashboard, click **"Site settings"**
2. In the left sidebar, click **"Environment variables"**
3. Click **"Add a variable"** button

### Step 3: Add These Exact Variables

**Variable 1:**
- **Key:** `VITE_SUPABASE_URL`
- **Value:** Your Supabase project URL (looks like: `https://xxxxxxxxxxxxx.supabase.co`)

**Variable 2:**
- **Key:** `VITE_SUPABASE_ANON_KEY`
- **Value:** Your Supabase anon key (starts with `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...`)

### Step 4: Get Your Supabase Values
If you don't have these values:

1. Go to [supabase.com](https://supabase.com)
2. Open your project
3. Go to **Settings** → **API**
4. Copy:
   - **Project URL** → use for `VITE_SUPABASE_URL`
   - **anon public** key → use for `VITE_SUPABASE_ANON_KEY`

### Step 5: Redeploy
After adding the environment variables:
1. Go to **"Deploys"** tab in Netlify
2. Click **"Trigger deploy"** → **"Deploy site"**
3. Wait for deployment to complete (2-3 minutes)

## ✅ How to Verify It's Fixed:
1. Visit your live site
2. Try submitting a quote or contact form
3. Check browser console (F12) for any errors
4. You should see "✅ Supabase client created successfully" in console

## 🆘 If Still Not Working:
1. Double-check the environment variable names are EXACTLY:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`
2. Make sure there are no extra spaces in the values
3. Redeploy after making any changes

## 📞 Emergency Contact:
If this doesn't work, users can still contact you at:
- **Phone:** +977-9816499891
- **Email:** pujanupreti11@gmail.com

The site will show these contact details if the database is still unavailable.
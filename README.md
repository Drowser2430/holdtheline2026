# Hold The Line 2026

The companion website to *The Black Voter Protection Playbook 2026*. A free, AI-powered voter protection toolkit built in response to *Louisiana v. Callais*.

**Stack:** Next.js 14 (App Router) · TypeScript · Tailwind CSS · Anthropic Claude API · Vercel

---

## Setup — End-to-End (about 30 minutes)

### Step 1: Install dependencies

```bash
npm install
```

### Step 2: Get an Anthropic API key

1. Go to [console.anthropic.com](https://console.anthropic.com).
2. Add $5 of credit to start.
3. Go to **API Keys** → **Create Key**. Copy the key (starts with `sk-ant-`).
4. Create a file called `.env.local` in the project root:

```
ANTHROPIC_API_KEY=sk-ant-your-key-here
```

### Step 3: Run it locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Click "Check your rights" to try the AI tool.

### Step 4: Push to GitHub

```bash
git init
git add .
git commit -m "Initial scaffold for Hold The Line 2026"
git branch -M main
git remote add origin https://github.com/Drowser2430/holdtheline2026.git
git push -u origin main
```

### Step 5: Deploy to Vercel

1. Go to [vercel.com](https://vercel.com). Sign in **with GitHub**.
2. Click **Add New → Project**. Select the `holdtheline2026` repo.
3. Expand **Environment Variables** and add `ANTHROPIC_API_KEY` with your key.
4. Click **Deploy**. Wait ~90 seconds.
5. You now have a live URL like `holdtheline2026.vercel.app`.

### Step 6: Connect custom domain

1. Buy `holdtheline2026.org` on Namecheap (~$12/year).
2. In Vercel → **Settings → Domains** → add `holdtheline2026.org`.
3. Add the DNS records Vercel gives you at Namecheap.

---

## Brand colors

- **Navy:** `#1F3A5F`
- **Gold:** `#E8B948`
- **Charcoal:** `#222222`
- **Off-white:** `#FAFAFA`

## What's working

- Homepage with three-door layout (Voter / Organizer / Campaign)
- Full playbook at /playbook
- Voter portal at /voter
- Organizer portal at /organizer
- Campaign portal at /campaign
- About page at /about
- **State Voter Rights Generator** at /voter/rights — the working AI tool

## What's next

- Bill Translator (Tool 2)
- Voter Rights Chatbot (Tool 3)
- Action Plan Generator (Tool 4)
- Battleground Race Map (Tool 5)

## Contact

Built by Darius Rowser — drowser@sandiego.edu
Open source under the MIT license.

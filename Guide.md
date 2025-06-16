## Running Locally - Step by Step Guide

### Step 1: Install Dependencies

```bash
# From project root
npm install
```

### Step 2: Build UI Core Package

```bash
# Build the UI components first
npm run build
```

### Step 3: Start Storybook

```bash
# Start development server
npm run dev
```

### Step 4: Verify Components

- Open browser to `http://localhost:6006`
- Check your components in the sidebar under "📊 Data Visualization"
- Test different component states and props

### Common Issues & Solutions:

```bash
# If you get CSS issues
cd packages/ui-core
npm run build:css

# If you get TypeScript errors
npm run type-check

# If you get dependency issues
rm -rf node_modules package-lock.json
npm install
```

---

## GitHub Pages Deployment Guide

### Step 1: Prepare Repository

```bash
# Ensure your code is pushed to GitHub
git add .
git commit -m "Prepare for deployment"
git push origin main
```

### Step 2: Build Storybook

```bash
# Build static Storybook files
npm run build-storybook
```

### Step 3: Deploy to GitHub Pages

```bash
# Deploy using gh-pages
npm run deploy-storybook
```

### Step 4: Configure GitHub Pages

1. Go to your GitHub repository
2. Navigate to **Settings** → **Pages**
3. Under **Source**, select **Deploy from a branch**
4. Select **gh-pages** branch and **/ (root)** folder
5. Click **Save**

### Step 5: Access Your Deployed Storybook

- URL will be: `https://[username].github.io/[repository-name]/`
- Wait 5-10 minutes for deployment to complete

### GitHub Actions Alternative (Recommended):

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy Storybook to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: "18"
          cache: "npm"

      - name: Install dependencies
        run: npm ci

      - name: Build Storybook
        run: npm run build-storybook

      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./storybook-static
```

---

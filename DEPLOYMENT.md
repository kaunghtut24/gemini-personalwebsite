# How to Deploy Your Static Profile Page

This is a static React application. Follow these steps to deploy it for free on services like Vercel, Netlify, or GitHub Pages.

## Step 1: Customize Your Content

Before deploying, you need to replace the default placeholder content with your own personal information.

For a detailed, step-by-step guide on how to do this, please refer to the **[CUSTOMIZATION.md](CUSTOMIZATION.md)** file. It provides instructions for using our automated script to make customization quick and easy.

## Step 2: Build Your Site

Once your content is ready, you need to build the static files for your site. You must have [Node.js](https://nodejs.org/) and npm (which comes with Node.js) installed on your machine.

First, open your terminal, navigate to the project directory, and install the necessary dependencies if you haven't already:

```bash
# Install dependencies
npm install
```

Next, run the build command to compile your site into optimized, static files:

```bash
# Build the static files for production
npm run build
```

This command will create a `dist` folder in your project directory. This folder contains all the static HTML, CSS, and JavaScript files for your live site.

## Step 3: Deploy

Choose one of the following hosting providers for a fast and free deployment.

### Netlify (Recommended - Optimized Configuration Included)

This project includes a pre-configured `netlify.toml` file for optimal deployment on Netlify.

#### Method 1: Git-based Deployment (Automatic Updates)

1.  Sign up for a free account on [Netlify](https://www.netlify.com/).
2.  Click "Add new site" → "Import an existing project"
3.  Connect your GitHub/GitLab/Bitbucket account and select your repository
4.  Netlify will automatically detect the configuration from `netlify.toml`
5.  Click "Deploy site" - Your site will be live in about a minute!

**Benefits:** Your site automatically redeploys whenever you push changes to your repository.

#### Method 2: Drag & Drop Deployment (Quick One-Time Deploy)

1.  Build your site locally: `npm run build`
2.  Go to [Netlify Drop](https://app.netlify.com/drop)
3.  Drag the `dist` folder onto the page
4.  Your site is instantly deployed!

#### Method 3: Netlify CLI (For Advanced Users)

```bash
# Install Netlify CLI globally
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy directly
netlify deploy --prod --dir=dist
```

**Included Netlify Features:**
- ✅ Optimized build settings (Node.js 18)
- ✅ Security headers configured
- ✅ Asset caching for better performance
- ✅ SPA routing support
- ✅ Custom 404 handling

### Vercel

1.  Sign up for an account on [Vercel](https://vercel.com/).
2.  Connect your Git repository (e.g., GitHub, GitLab) where you've pushed your project code.
3.  Import your project. Vercel should automatically detect that it's a Vite project.
4.  Configure the build settings if prompted:
    -   **Build Command:** `npm run build`
    -   **Output Directory:** `dist`
5.  Deploy! Your site will be live in a minute.

### GitHub Pages

A great free option if your code is already on GitHub.

1.  **Install `gh-pages`:**
    This is a helper package to make deployment easier.

    ```bash
    npm install --save-dev gh-pages
    ```

2.  **Update `package.json`:**
    You need to add a `homepage` field and two new scripts (`predeploy` and `deploy`) to your `package.json` file.

    ```json
    {
      "homepage": "https://<your-github-username>.github.io/<your-repo-name>",
      "scripts": {
        // ... other scripts like "dev", "build"
        "predeploy": "npm run build",
        "deploy": "gh-pages -d dist"
      }
    }
    ```
    -   Replace `<your-github-username>` with your GitHub username.
    -   Replace `<your-repo-name>` with your GitHub repository name.

3.  **Deploy:**
    Run the deploy script from your terminal.

    ```bash
    npm run deploy
    ```

This command will first build your site, then push the contents of the `dist` folder to a special `gh-pages` branch on your GitHub repository. GitHub will then automatically serve your live site from that branch.

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

### Vercel / Netlify (Recommended)

This is the easiest and fastest method.

1.  Sign up for an account on [Vercel](https://vercel.com/) or [Netlify](https://www.netlify.com/).
2.  Connect your Git repository (e.g., GitHub, GitLab) where you've pushed your project code.
3.  Import your project. The platform should automatically detect that it's a modern web project.
4.  Configure the build settings if prompted:
    -   **Build Command:** `npm run build`
    -   **Output Directory:** `dist`
5.  Deploy! Your site will be live in a minute.

> Alternatively, you can use their command-line tools or simply drag and drop the `dist` folder you created in Step 2 directly onto the Vercel or Netlify dashboard for a manual deployment.

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

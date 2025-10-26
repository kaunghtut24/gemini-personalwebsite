# How to Customize Your Profile Page

This guide will walk you through personalizing your profile page with your own content. There are two ways to do this: using the automated script (recommended for ease and speed) or by manually editing the configuration file.

---

## Method 1: Automated Customization via Script (Recommended)

This is the fastest and safest way to update your profile. The script handles formatting and ensures your data is correctly placed.

### Step 1: Open the Customization Script
In your project's root directory, open the file named `customize.js`.

### Step 2: Fill in Your Details
Inside `customize.js`, you will find a JavaScript object called `userData`. It's filled with placeholder content. Carefully replace all the placeholder values with your own personal information.

The file contains comments and examples for each section:
-   **`profile`**: Your name, title, a short bio for the header, and a URL to your avatar image.
-   **`cvUrl`**: (Optional) Previously used for external CV links. The site now generates a PDF CV dynamically from your profile data when clicking "Download CV".
-   **`contactEmail`**: The email address for the "Say Hello" button.
-   **`socials`**: Your social media links. Supported icons are "GitHub", "LinkedIn", "Twitter", and "Instagram".
-   **`aboutMe`**: The main content for the "About Me" section. You can use multiple lines.
-   **`skills`**: A categorized list of your skills.
-   **`workExperience`**: Your professional history.
-   **`projects`**: Showcase your best work.
-   **`galleryImages`**: Images for the photo gallery.
-   **`videoUrl`**: An embeddable YouTube video link.
-   **`testimonials`**: Client/colleague testimonials with names, roles, companies, and optional ratings (1-5 stars).

### Step 3: Run the Script
Once you've saved your changes to `customize.js`, open your terminal, navigate to the project's root directory, and run the following command:

```bash
node customize.js
```

The script will automatically:
1. Update the `constants.ts` file with your information
2. Update the HTML meta tags (title, description, Open Graph, Twitter cards) for better SEO

You should see success messages in your terminal.

### Step 4: See Your Changes
Start the development server to view your personalized page:

```bash
npm run dev
```

Your profile page is now updated!

---

## Method 2: Manual Editing

If you prefer to edit the code directly, you can modify the `constants.ts` file.

1.  Open `constants.ts` in your source directory.
2.  Edit the exported constants with your information, following the existing structure. Be careful not to introduce syntax errors.

---

## Additional Customization Options

### Favicon
The site currently uses a default Vite SVG icon. To use your own favicon:
1. Create or find your favicon image (recommended: .ico, .png, or .svg format)
2. Place it in the `public` folder
3. Update the `<link rel="icon"...>` tag in `index.html` to point to your new favicon

### Theme Color
The site's primary color is cyan (#06b6d4). To change it:
1. Update the `theme-color` meta tag in `index.html`
2. Search and replace all instances of `cyan-` in your component files with your preferred Tailwind color

## Guide to Assets (Images, CV, Videos)

### Images (Avatar, Projects, Gallery)
-   **Hosting**: Since this is a static site, you need to host your images online. You can use services like [Imgur](https://imgur.com/), [Cloudinary](https://cloudinary.com/), or even a public GitHub repository.
-   **Avatar**: A square image (e.g., 200x200 pixels) works best.
-   **Project Images**: A 4:3 aspect ratio (e.g., 800x600 pixels) is recommended.
-   **Gallery Images**: A 1:1 aspect ratio (square) will look best in the grid, but any size will work.

### CV / Resume
The site now automatically generates a professional PDF CV from your profile data when users click "Download CV". This includes:
- Your name, title, and contact information
- Professional summary and about me section
- Skills organized by category
- Complete work experience with descriptions
- Key projects with technologies used
- Generation date footer

The CV is generated dynamically using all the information you provide in `customize.js`, ensuring it's always up-to-date with your latest profile changes.

### Featured Video
1.  Go to the YouTube video you want to feature.
2.  Click the "Share" button below the video.
3.  Click "Embed".
4.  In the code that appears, copy the URL from the `src` attribute (e.g., `https://www.youtube.com/embed/VIDEO_ID`).
5.  Paste this URL into the `videoUrl` field in `customize.js`.

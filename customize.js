
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// --- STEP 1: FILL IN YOUR DETAILS ---
// Replace the placeholder values below with your personal information.
// After filling it out, run 'node customize.js' in your terminal.

const userData = {
  profile: {
    name: "Alex Doe",
    title: "Full-Stack Developer & UI/UX Enthusiast",
    bio: "Crafting beautiful, functional, and user-centric digital experiences. Turning complex problems into elegant solutions.",
    avatarUrl: "https://picsum.photos/id/237/200/200", // Recommended size: 200x200
  },
  cvUrl: "#", // Link to your resume (e.g., a PDF on Google Drive)
  contactEmail: "hello@example.com",
  socials: [
    { name: "GitHub", url: "https://github.com" },
    { name: "LinkedIn", url: "https://linkedin.com" },
    { name: "Twitter", url: "https://twitter.com" },
    { name: "Instagram", url: "https://instagram.com" },
    // You can add or remove social links.
    // Supported icons: GitHub, LinkedIn, Twitter, Instagram
  ],
  aboutMe: `
  Hello! I'm Alex, a passionate developer with a knack for creating dynamic and responsive web applications.
  With over 5 years of experience in the tech industry, I've had the privilege of working on a variety of projects, from small business websites to large-scale enterprise applications.
  My expertise lies in the MERN stack (MongoDB, Express, React, Node.js), but I'm always eager to learn new technologies and expand my skillset.
  When I'm not coding, you can find me hiking in the mountains, experimenting with new recipes, or capturing moments with my camera.
  I believe in the power of technology to connect people and solve real-world problems. Let's build something amazing together!
  `,
  skills: {
    "Frontend": ["React", "TypeScript", "Tailwind CSS", "Next.js", "Vite"],
    "Backend": ["Node.js", "Express", "MongoDB", "PostgreSQL", "REST APIs"],
    "Tools & Other": ["Git", "Docker", "Figma", "CI/CD", "Jest"],
    // You can add/remove categories and skills.
  },
  workExperience: [
    {
      role: "Senior Frontend Developer",
      company: "Tech Solutions Inc.",
      duration: "Jan 2021 - Present",
      description: "Led the development of a new client-facing dashboard using React and TypeScript. Improved application performance by 30% and mentored junior developers."
    },
    {
      role: "Full-Stack Developer",
      company: "Innovate Co.",
      duration: "Jun 2018 - Dec 2020",
      description: "Developed and maintained full-stack web applications for various clients. Worked with Node.js on the backend and React on the frontend."
    },
    {
      role: "Junior Web Developer",
      company: "Digital Creations",
      duration: "Jul 2016 - May 2018",
      description: "Assisted in building and maintaining marketing websites using HTML, CSS, and JavaScript. Gained foundational experience in web development and version control."
    }
  ],
  projects: [
    {
      title: "E-commerce Platform",
      description: "A full-featured e-commerce site with user authentication, product catalog, and a Stripe-integrated checkout process.",
      tech: ["Next.js", "MongoDB", "Stripe", "Tailwind CSS"],
      imageUrl: "https://picsum.photos/id/1015/800/600", // Recommended aspect ratio: 4:3
      liveUrl: "#",
      repoUrl: "#",
    },
    {
      title: "Project Management Tool",
      description: "A collaborative tool for teams to manage tasks, track progress, and communicate effectively, featuring a drag-and-drop interface.",
      tech: ["React", "Node.js", "Socket.IO", "PostgreSQL"],
      imageUrl: "https://picsum.photos/id/1018/800/600",
      liveUrl: "#",
      repoUrl: "#",
    },
    {
      title: "Personal Blog",
      description: "A content-focused blog platform with a Markdown editor and static site generation for optimal performance and SEO.",
      tech: ["Vite", "React", "Markdown", "Firebase"],
      imageUrl: "https://picsum.photos/id/1025/800/600",
      liveUrl: "#",
      repoUrl: "#",
    }
  ],
  galleryImages: [
    {
      src: "https://picsum.photos/id/10/800/600", // Recommended aspect ratio: 1:1 for grid consistency
      alt: "Misty forest path",
    },
    {
      src: "https://picsum.photos/id/20/800/600",
      alt: "City skyline at dusk",
    },
    {
      src: "https://picsum.photos/id/30/800/600",
      alt: "Hot air balloons over a valley",
    },
    {
      src: "https://picsum.photos/id/40/800/600",
      alt: "Person walking on a beach",
    },
    {
      src: "https://picsum.photos/id/50/800/600",
      alt: "Abstract architectural details",
    },
    {
      src: "https://picsum.photos/id/60/800/600",
      alt: "A cat looking curiously",
    },
  ],
  videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?si=bTeF-4b7g_f3hE8d", // Use the 'embed' link from YouTube.
  testimonials: [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Product Manager",
      company: "Tech Corp",
      avatarUrl: "https://picsum.photos/id/64/200/200",
      content: "Working with Alex was an absolute pleasure. Their attention to detail and ability to translate complex requirements into elegant solutions is remarkable. They delivered our project ahead of schedule with exceptional quality.",
      rating: 5 // Optional: 1-5 star rating
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "CTO",
      company: "StartupHub",
      avatarUrl: "https://picsum.photos/id/65/200/200",
      content: "Alex is a talented developer who brings both technical expertise and creative problem-solving to every project. Their code is clean, well-documented, and maintainable. I highly recommend them for any development work.",
      rating: 5
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Design Lead",
      company: "Creative Agency",
      avatarUrl: "https://picsum.photos/id/66/200/200",
      content: "The collaboration with Alex was fantastic. They have a great eye for design implementation and always ensure the final product matches our vision perfectly. Their responsive designs work flawlessly across all devices.",
      rating: 5
    }
    // You can add more testimonials or remove them as needed
  ]
};

// --- STEP 2: RUN THE SCRIPT ---
// You don't need to change anything below this line.
// Open your terminal, navigate to the project root directory, and run:
//
// node customize.js
//
// This will overwrite 'constants.ts' with your new data.
// After running, start your dev server (npm run dev) to see the changes.

// -----------------------------------------------------------------------------
// SCRIPT LOGIC (DO NOT EDIT)
// -----------------------------------------------------------------------------

function generateConstantsFile(data) {
  const socialIconMapping = {
    GitHub: 'GithubIcon',
    LinkedIn: 'LinkedinIcon',
    Twitter: 'TwitterIcon',
    Instagram: 'InstagramIcon',
  };

  const socialEntries = data.socials
    .map(social => {
      const iconComponent = socialIconMapping[social.name];
      if (!iconComponent) {
        console.warn(`Warning: No icon component found for "${social.name}". It will be excluded from socials.`);
        return null;
      }
      return `  { name: "${social.name}", url: "${social.url}", icon: ${iconComponent} }`;
    })
    .filter(Boolean)
    .join(',\n');

  const fileContent = `
import { GithubIcon, LinkedinIcon, TwitterIcon, InstagramIcon, ExternalLinkIcon } from './components/IconComponents';

// ===================================================================================
//
//  THIS FILE WAS AUTO-GENERATED BY THE 'customize.js' SCRIPT.
//
//  To update your profile, edit the \`userData\` object in \`customize.js\`
//  and run \`node customize.js\` in your terminal.
//
//  DO NOT EDIT THIS FILE MANUALLY.
//
// ===================================================================================

export const profile = ${JSON.stringify(data.profile, null, 2)};

export const cvUrl = \`${data.cvUrl}\`;

export const contactEmail = \`${data.contactEmail}\`;

export const socials = [
${socialEntries}
];

export const aboutMe = \`
${data.aboutMe.trim()}
\`;

export const skills = ${JSON.stringify(data.skills, null, 2)};

export const workExperience = ${JSON.stringify(data.workExperience, null, 2)};

export const projects = ${JSON.stringify(data.projects, null, 2)};

export const galleryImages = ${JSON.stringify(data.galleryImages, null, 2)};

export const videoUrl = \`${data.videoUrl}\`;

export const testimonials = ${JSON.stringify(data.testimonials, null, 2)};
`;

  return fileContent.trim() + '\n';
}

// Update constants.ts file
const outputPath = path.join(__dirname, 'constants.ts');
const newContent = generateConstantsFile(userData);

fs.writeFile(outputPath, newContent, 'utf8', (err) => {
  if (err) {
    console.error('An error occurred while writing to constants.ts:', err);
    return;
  }
  console.log('✅ Successfully updated constants.ts with your profile data!');
  
  // Update index.html meta tags
  updateIndexHtml();
});

function updateIndexHtml() {
  const indexPath = path.join(__dirname, 'index.html');
  
  fs.readFile(indexPath, 'utf8', (err, htmlContent) => {
    if (err) {
      console.error('Error reading index.html:', err);
      return;
    }
    
    // Update title and meta tags
    let updatedHtml = htmlContent;
    
    // Update title tags
    updatedHtml = updatedHtml.replace(
      /<title>.*?<\/title>/,
      `<title>${userData.profile.name} - ${userData.profile.title}</title>`
    );
    
    updatedHtml = updatedHtml.replace(
      /<meta name="title" content=".*?">/,
      `<meta name="title" content="${userData.profile.name} - ${userData.profile.title}">`
    );
    
    updatedHtml = updatedHtml.replace(
      /<meta name="description" content=".*?">/,
      `<meta name="description" content="${userData.profile.bio}">`
    );
    
    updatedHtml = updatedHtml.replace(
      /<meta name="author" content=".*?">/,
      `<meta name="author" content="${userData.profile.name}">`
    );
    
    // Update Open Graph tags
    updatedHtml = updatedHtml.replace(
      /<meta property="og:title" content=".*?">/,
      `<meta property="og:title" content="${userData.profile.name} - ${userData.profile.title}">`
    );
    
    updatedHtml = updatedHtml.replace(
      /<meta property="og:description" content=".*?">/,
      `<meta property="og:description" content="${userData.profile.bio}">`
    );
    
    // Update Twitter tags
    updatedHtml = updatedHtml.replace(
      /<meta property="twitter:title" content=".*?">/,
      `<meta property="twitter:title" content="${userData.profile.name} - ${userData.profile.title}">`
    );
    
    updatedHtml = updatedHtml.replace(
      /<meta property="twitter:description" content=".*?">/,
      `<meta property="twitter:description" content="${userData.profile.bio}">`
    );
    
    fs.writeFile(indexPath, updatedHtml, 'utf8', (err) => {
      if (err) {
        console.error('Error writing index.html:', err);
        return;
      }
      console.log('✅ Successfully updated index.html meta tags!');
      console.log('🚀 Run "npm run dev" to see your personalized page.');
    });
  });
}

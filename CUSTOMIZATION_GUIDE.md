# Portfolio Customization Guide

This guide will help you customize the portfolio with your own information and content.

## 📚 Table of Contents
1. [Installation & Setup](#installation--setup)
2. [Customizing Personal Information](#customizing-personal-information)
3. [Updating Sections](#updating-sections)
4. [Changing Colors](#changing-colors)
5. [Adding Images & Media](#adding-images--media)
6. [Forms & Integration](#forms--integration)
7. [Deployment](#deployment)
8. [Troubleshooting](#troubleshooting)

---

## Installation & Setup

### Step 1: Install Dependencies

```bash
npm install
```

### Step 2: Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Step 3: Build for Production

```bash
npm run build
npm start
```

---

## Customizing Personal Information

### 1. Update Header Logo & Brand

**File:** `components/Header.tsx`

Find and update:
```typescript
<span className="text-xl font-bold text-white hidden md:inline group-hover:text-accent-purple">
  Motalib  {/* Change this to your name */}
</span>
```

### 2. Update Social Links

**File:** `components/Header.tsx`

```typescript
<a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer">
  Twitter
</a>
// Update all social links similarly
```

### 3. Update Contact Information

**File:** `components/sections/Contact.tsx`

Find the contact info array and update:
```typescript
{
  icon: FiMail,
  title: 'Email',
  content: 'your.email@example.com',  {/* Change this */}
  link: 'mailto:your.email@example.com',  {/* And this */}
}
```

---

## Updating Sections

### Hero Section

**File:** `components/sections/Hero.tsx`

Update your introduction:
```typescript
<h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
  Hi, I'm <span className="gradient-text">Your Name</span>
</h1>
<p className="text-xl md:text-2xl text-gray-400 font-medium">
  Your Job Title or Tagline
</p>
<p className="text-gray-400 text-lg leading-relaxed max-w-lg">
  Your introduction text...
</p>
```

Update statistics:
```typescript
<div>
  <p className="text-3xl font-bold text-accent-purple">50+</p>
  <p className="text-gray-400 text-sm">Your Stat Label</p>
</div>
```

### About Section

**File:** `components/sections/About.tsx`

Update your about text:
```typescript
<p className="text-gray-300 leading-relaxed text-lg">
  Your about text here...
</p>
```

### Skills Section

**File:** `components/sections/Skills.tsx`

Update skill categories:
```typescript
const skills = [
  { category: 'Frontend', items: ['React', 'Next.js', 'Vue.js', 'Tailwind CSS'] },
  { category: 'Backend', items: ['Node.js', 'Python', 'Django'] },
  // Add more categories
];
```

Update proficiency levels:
```typescript
const technicalSkills = [
  { name: 'React', level: 95 },
  { name: 'Next.js', level: 90 },
  // Adjust levels as needed
];
```

### Services Section

**File:** `components/sections/Services.tsx`

The services are already defined in the `services` array. Update:
- Icon (using React Icons)
- Title
- Description
- Features list

### Portfolio/Projects Section

**File:** `components/sections/Portfolio.tsx`

Add your projects:
```typescript
const portfolioItems = [
  {
    id: 1,
    title: 'Your Project Title',
    description: 'Project description...',
    category: 'Full Stack',
    tags: ['React', 'Node.js', 'MongoDB'],
    image: '🎨',  // or use emoji or path to image
    liveUrl: 'https://your-project.com',
    codeUrl: 'https://github.com/yourusername/project',
  },
  // Add more projects
];
```

### Resume Section

**File:** `components/sections/Resume.tsx`

Update education:
```typescript
const education = [
  {
    school: 'Your University Name',
    degree: 'Your Degree',
    year: '2020 - 2024',
    description: 'Description of your studies...',
  },
];
```

Update experience:
```typescript
const experience = [
  {
    company: 'Company Name',
    position: 'Your Position',
    year: '2022 - Present',
    description: 'Job description...',
    achievements: ['Achievement 1', 'Achievement 2'],
  },
];
```

### Blog Section

**File:** `components/sections/Blog.tsx`

Add blog posts:
```typescript
const blogPosts = [
  {
    id: 1,
    title: 'Your Blog Post Title',
    excerpt: 'Brief excerpt...',
    date: 'Apr 15, 2024',
    category: 'Tutorial',
    readTime: '8 min read',
  },
];
```

### Testimonials Section

**File:** `components/sections/Testimonials.tsx`

Add client testimonials:
```typescript
const testimonials = [
  {
    id: 1,
    name: 'Client Name',
    position: 'Job Title, Company',
    image: '👤',  // emoji or image path
    text: 'Client testimonial...',
    rating: 5,
  },
];
```

---

## Changing Colors

The portfolio uses a dark theme with three accent colors. Customize them in `tailwind.config.js`:

```javascript
colors: {
  dark: {
    900: '#111827',  // Main background
    800: '#1f2937',  // Secondary background
    700: '#374151',  // Cards and sections
    // ...
  },
  accent: {
    purple: '#a855f7',  // Primary accent
    blue: '#0ea5e9',    // Secondary accent
    pink: '#ec4899',    // Tertiary accent
  },
}
```

### Popular Color Combinations

**Option 1: Purple & Blue (Current)**
```javascript
purple: '#a855f7',
blue: '#0ea5e9',
pink: '#ec4899',
```

**Option 2: Teal & Cyan**
```javascript
purple: '#14b8a6',  // Teal
blue: '#06b6d4',    // Cyan
pink: '#f97316',    // Orange
```

**Option 3: Indigo & Violet**
```javascript
purple: '#6366f1',  // Indigo
blue: '#8b5cf6',    // Violet
pink: '#d946ef',    // Magenta
```

---

## Adding Images & Media

### 1. Add Images to Hero Section

**File:** `components/sections/Hero.tsx`

Replace the emoji placeholder with an image:

```jsx
import Image from 'next/image';

// Inside the right content div:
<Image
  src="/images/profile.jpg"
  alt="Profile Picture"
  width={300}
  height={300}
  className="rounded-full"
/>
```

### 2. Add Project Images in Portfolio

**File:** `components/sections/Portfolio.tsx`

```typescript
const portfolioItems = [
  {
    id: 1,
    image: '/images/project-1.jpg',  // Path instead of emoji
    // ... other properties
  },
];
```

### 3. Add Testimonial Images

**File:** `components/sections/Testimonials.tsx`

```typescript
const testimonials = [
  {
    id: 1,
    image: '/images/client-1.jpg',
    // ... other properties
  },
];
```

### 4. Add Blog Post Images

**File:** `components/sections/Blog.tsx`

```typescript
const blogPosts = [
  {
    id: 1,
    image: '/images/blog-1.jpg',  // Add this field
    // ... other properties
  },
];
```

### File Organization

1. Create `public/images/` folder in your project
2. Add your images there
3. Reference them as `/images/filename.jpg` in components

---

## Forms & Integration

### Contact Form Integration

The contact form is ready for integration. To make it work:

#### Option 1: Using Formspree

1. Go to [formspree.io](https://formspree.io)
2. Create an account
3. Create a new form for your email
4. Update the form action in `components/sections/Contact.tsx`:

```jsx
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
  {/* form fields */}
</form>
```

#### Option 2: Using Your Own Backend

Create an API route in `app/api/contact/route.ts`:

```typescript
import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  const data = await request.json();
  
  // Send email logic here
  
  return NextResponse.json({ success: true });
}
```

Update the Contact component to call this API:

```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  
  const response = await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  });
  
  // Handle response
};
```

---

## Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub:**
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/yourusername/portfolio.git
git push -u origin main
```

2. **Deploy:**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Select your GitHub repository
   - Click "Deploy"

### Deploy to Netlify

1. **Build locally:**
```bash
npm run build
```

2. **Deploy:**
   - Drag and drop the `out` folder to [netlify.com](https://netlify.com)
   - Or connect your GitHub repository

### Custom Domain

1. **In Vercel:**
   - Go to Settings → Domains
   - Add your custom domain

2. **Update DNS:**
   - Follow the DNS records provided by Vercel
   - Update your domain registrar settings

---

## SEO Optimization

### Update Metadata

**File:** `app/layout.tsx`

```typescript
export const metadata: Metadata = {
  title: 'Your Name - Full Stack Developer',
  description: 'Professional portfolio of Your Name showcasing web development projects',
  keywords: ['developer', 'portfolio', 'react', 'next.js'],
};
```

### Add Open Graph Tags

Add to `app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  // ... existing metadata
  openGraph: {
    title: 'Your Name - Portfolio',
    description: 'Your description',
    url: 'https://yourportfolio.com',
    images: [{
      url: '/og-image.jpg',
      width: 1200,
      height: 630,
    }],
  },
};
```

---

## Troubleshooting

### Issue: Tailwind CSS not working

**Solution:**
```bash
npm run dev
# Clear cache
rm -rf .next
npm run dev
```

### Issue: Images not loading

**Solution:**
- Ensure images are in `public/` folder
- Use correct path: `/images/filename.jpg`
- Check Next.js Image configuration

### Issue: Navigation not scrolling

**Solution:**
- Ensure section IDs match navigation links
- Check that `scroll-smooth` is applied to HTML
- Verify element IDs in `globals.css`

### Issue: Animations not showing

**Solution:**
- Ensure Framer Motion is installed: `npm install framer-motion`
- Check browser compatibility (modern browsers required)
- Verify CSS animations in `globals.css`

### Issue: Form not submitting

**Solution:**
- Set up email service (Formspree or custom backend)
- Check browser console for errors
- Verify form endpoint is correct

---

## Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Icons](https://react-icons.github.io/react-icons/)
- [Framer Motion](https://www.framer.com/motion/)

---

## Support

For issues or questions, refer to the main README.md or check the GitHub issues section.

**Happy Customizing! 🚀**

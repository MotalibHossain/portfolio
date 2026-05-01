# Modern Portfolio Website

A beautiful, modern, and fully responsive portfolio website built with **Next.js**, **React**, **Tailwind CSS**, and **Framer Motion**.

## 🎨 Features

- **Modern Design**: Dark theme with gradient accents inspired by contemporary portfolio designs
- **Responsive**: Mobile-first design that works perfectly on all devices
- **Performance**: Optimized for fast loading and smooth animations
- **Interactive**: Smooth animations and transitions throughout
- **Accessibility**: Built with accessibility best practices in mind
- **SEO Optimized**: Meta tags and structured data for search engines

## 📋 Sections Included

1. **Hero Section** - Eye-catching introduction with CTA buttons
2. **About Me** - Personal background and expertise overview
3. **Skills** - Technical skills with proficiency levels
4. **Services** - Detailed service offerings
5. **Portfolio** - Showcase of featured projects with filtering
6. **Resume** - Education and professional experience timeline
7. **Blog** - Latest articles and insights
8. **Testimonials** - Client feedback carousel
9. **Contact** - Contact form and information
10. **Footer** - Links and social media

## 🚀 Getting Started

### Prerequisites

- Node.js 16.x or higher
- npm or yarn package manager

### Installation

1. **Clone the repository** (or navigate to the project directory)

```bash
cd Portfolio_V2
```

2. **Install dependencies**

```bash
npm install
```

3. **Set up environment variables** (optional)

Create a `.env.local` file in the root directory:

```bash
cp .env.example .env.local
```

4. **Run the development server**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the portfolio.

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
Portfolio_V2/
├── app/
│   ├── layout.tsx          # Root layout component
│   ├── page.tsx            # Home page with all sections
│   ├── globals.css         # Global styles
│   └── favicon.ico         # Favicon
├── components/
│   ├── Header.tsx          # Header with logo
│   ├── Navigation.tsx      # Mobile & desktop navigation
│   ├── Footer.tsx          # Footer component
│   └── sections/           # Section components
│       ├── Hero.tsx        # Hero section
│       ├── About.tsx       # About section
│       ├── Skills.tsx      # Skills section
│       ├── Services.tsx    # Services section
│       ├── Portfolio.tsx   # Portfolio section
│       ├── Resume.tsx      # Resume section
│       ├── Blog.tsx        # Blog section
│       ├── Testimonials.tsx # Testimonials section
│       └── Contact.tsx     # Contact section
├── public/                 # Static files
├── package.json           # Dependencies
├── tsconfig.json          # TypeScript configuration
├── tailwind.config.js     # Tailwind CSS configuration
├── postcss.config.js      # PostCSS configuration
└── next.config.js         # Next.js configuration
```

## 🎯 Customization

### Updating Your Information

All content is easily customizable. Here's where to find key information:

- **Personal Info**: Update components in `app/page.tsx`
- **Skills**: Modify `components/sections/Skills.tsx`
- **Experience**: Update `components/sections/Resume.tsx`
- **Projects**: Edit `components/sections/Portfolio.tsx`
- **Blog Posts**: Add/modify `components/sections/Blog.tsx`
- **Testimonials**: Update `components/sections/Testimonials.tsx`
- **Colors**: Change in `tailwind.config.js` in the `colors` object

### Changing Colors

The portfolio uses three main accent colors. Modify them in `tailwind.config.js`:

```javascript
accent: {
  purple: '#a855f7',
  blue: '#0ea5e9',
  pink: '#ec4899',
}
```

### Adding Images

1. Place images in the `public` folder
2. Import and use them in components:

```jsx
import Image from 'next/image';

<Image 
  src="/images/my-image.jpg" 
  alt="Description"
  width={400}
  height={300}
/>
```

## 🛠 Technologies Used

- **Next.js 14** - React framework with App Router
- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Icons** - Icon library
- **Vercel** - Deployment platform

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Connect your GitHub repository
4. Click "Deploy"

Vercel will automatically build and deploy your site.

### Deploy to Netlify

1. Build the project locally:
```bash
npm run build
```

2. Deploy the `out` folder to Netlify

### Deploy to Other Platforms

The `out` folder contains the static build. Upload it to any static hosting service.

## 📝 Content Updates

### Adding New Blog Posts

Edit `components/sections/Blog.tsx` and add to the `blogPosts` array:

```typescript
{
  id: 7,
  title: 'Your Blog Post Title',
  excerpt: 'Brief description...',
  date: 'Apr 01, 2024',
  category: 'Tutorial',
  readTime: '8 min read',
}
```

### Adding New Portfolio Items

Edit `components/sections/Portfolio.tsx` and add to the `portfolioItems` array:

```typescript
{
  id: 7,
  title: 'Project Title',
  description: 'Project description...',
  category: 'Full Stack',
  tags: ['React', 'Node.js'],
  image: '🎨',
}
```

## 🎨 Design Inspiration

This portfolio was inspired by:
- AFROZ MILLER's modern dark design
- Obaidullah Tusher's clean layout
- Contemporary portfolio trends
- Best practices from top developer portfolios

## 📞 Contact & Support

For questions or customization requests, feel free to reach out through the contact form on the portfolio or email directly.

## 📄 License

This project is open source and available for personal use. Feel free to customize and deploy it for your own portfolio.

## ✨ Future Enhancements

Potential additions:
- Dark/Light mode toggle
- Multi-language support
- Integration with CMS
- Newsletter signup
- Advanced animations
- Video sections
- Case studies

## 🤝 Contributing

If you find bugs or want to suggest improvements, feel free to open an issue or submit a pull request.

---

**Made with ❤️ by Motalib Hossain**

Last Updated: April 2024

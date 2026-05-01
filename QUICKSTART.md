# Quick Start Guide

## 🚀 Get Your Portfolio Running in 5 Minutes

### Prerequisites
- Node.js 16.x or higher installed
- npm or yarn package manager

### Step 1: Install Dependencies

```bash
npm install
```

This will install all required packages:
- Next.js
- React
- Tailwind CSS
- Framer Motion
- React Icons

### Step 2: Start Development Server

```bash
npm run dev
```

**Output:**
```
> portfolio-v2@2.0.0 dev
> next dev

  ▲ Next.js 14.0.0
  - Local:        http://localhost:3000
  - Environments: .env.local

  ✓ Ready in 1.5s
```

### Step 3: Open in Browser

Visit **[http://localhost:3000](http://localhost:3000)** in your browser

You should see the portfolio website with:
- Beautiful dark theme with gradient accents
- Smooth animations and transitions
- Responsive design (works on mobile too)
- All sections: Hero, About, Skills, Services, Portfolio, Resume, Blog, Testimonials, Contact

---

## 📝 Quick Customization

### 1. Change Your Name (5 seconds)

**File:** `components/Header.tsx` (Line ~19)

```typescript
// Before:
<span className="text-xl font-bold text-white hidden md:inline">
  Motalib
</span>

// After:
<span className="text-xl font-bold text-white hidden md:inline">
  Your Name
</span>
```

### 2. Update Hero Section (2 minutes)

**File:** `components/sections/Hero.tsx` (Lines 20-50)

```typescript
// Change your name
<h1 className="text-4xl md:text-6xl font-bold">
  Hi, I'm <span className="gradient-text">Your Name</span>
</h1>

// Change your title
<p className="text-xl md:text-2xl text-gray-400">
  Your Job Title Here
</p>

// Change your bio
<p className="text-gray-400 text-lg leading-relaxed">
  Your introduction text...
</p>
```

### 3. Update Contact Info (1 minute)

**File:** `components/sections/Contact.tsx` (Lines 60-80)

```typescript
// Update email
{ title: 'Email', content: 'your.email@example.com', link: 'mailto:your.email@example.com' }

// Update phone
{ title: 'Phone', content: '+1 (555) 123-4567', link: 'tel:+15551234567' }

// Update location
{ title: 'Location', content: 'Your City, Country', link: '#' }
```

---

## 🎨 Customize Colors (Optional)

**File:** `tailwind.config.js`

```javascript
accent: {
  purple: '#a855f7',  // Change this
  blue: '#0ea5e9',    // Change this
  pink: '#ec4899',    // Change this
}
```

Try these color combinations:
- **Teal**: `#14b8a6`, `#06b6d4`, `#f97316`
- **Indigo**: `#6366f1`, `#8b5cf6`, `#d946ef`
- **Green**: `#10b981`, `#06b6d4`, `#f59e0b`

---

## 🔧 Available Commands

```bash
# Development
npm run dev              # Start dev server on http://localhost:3000

# Production
npm run build           # Build for production
npm start              # Start production server

# Linting
npm run lint           # Check code quality

# Other
npm run type-check     # Check TypeScript types (if configured)
```

---

## 📁 Project Structure at a Glance

```
Portfolio_V2/
├── app/
│   ├── page.tsx        ← Main page with all sections
│   ├── layout.tsx      ← Root layout
│   └── globals.css     ← Global styles
├── components/
│   ├── Header.tsx      ← Top header
│   ├── Navigation.tsx  ← Mobile menu & sidebar
│   ├── Footer.tsx      ← Footer
│   └── sections/       ← All page sections
│       ├── Hero.tsx
│       ├── About.tsx
│       ├── Skills.tsx
│       ├── Services.tsx
│       ├── Portfolio.tsx
│       ├── Resume.tsx
│       ├── Blog.tsx
│       ├── Testimonials.tsx
│       └── Contact.tsx
├── lib/
│   ├── utils.ts        ← Helper functions
│   └── types.ts        ← TypeScript interfaces
└── package.json        ← Dependencies
```

---

## 🌐 Deploy Your Portfolio

### Option 1: Deploy to Vercel (Recommended - Free)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Select your GitHub repository
5. Click "Deploy"
6. Done! Your portfolio is live 🎉

**It takes about 2-3 minutes to deploy**

### Option 2: Deploy to Netlify (Free)

1. Run `npm run build`
2. Go to [netlify.com](https://netlify.com)
3. Drag and drop the `.next` folder
4. Done! ✨

---

## ✅ Common Tasks

### Add Your Blog Post

Edit `components/sections/Blog.tsx`:

```typescript
{
  id: 7,
  title: 'My New Article',
  excerpt: 'This is about...',
  date: 'Apr 30, 2024',
  category: 'Tutorial',
  readTime: '5 min read',
}
```

### Add Your Project

Edit `components/sections/Portfolio.tsx`:

```typescript
{
  id: 7,
  title: 'My Project',
  description: 'A project about...',
  category: 'Full Stack',
  tags: ['React', 'Node.js'],
  image: '🎨',
}
```

### Update Your Skills

Edit `components/sections/Skills.tsx`:

```typescript
const technicalSkills = [
  { name: 'React', level: 95 },
  { name: 'Your Skill', level: 88 },
];
```

---

## 🐛 Troubleshooting

| Issue | Solution |
|-------|----------|
| Styles not loading | Run `npm run dev` again, clear `.next` folder |
| Port 3000 in use | Use `npm run dev -- -p 3001` for different port |
| Module not found | Run `npm install` again |
| Images not showing | Place images in `public/` folder |

---

## 📚 Useful Resources

- [Full Customization Guide](./CUSTOMIZATION_GUIDE.md)
- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com)
- [React Icons](https://react-icons.github.io/react-icons/)

---

## 🎯 Next Steps

1. ✅ Run `npm install`
2. ✅ Start with `npm run dev`
3. ✅ Customize with your information
4. ✅ Test on mobile
5. ✅ Deploy to Vercel
6. ✅ Share your portfolio!

---

## 📞 Need Help?

Refer to the detailed [CUSTOMIZATION_GUIDE.md](./CUSTOMIZATION_GUIDE.md) for:
- Detailed customization instructions
- How to integrate email forms
- SEO optimization
- Domain setup
- And much more!

---

**Happy coding! 🚀**

Made with ❤️ by Motalib Hossain

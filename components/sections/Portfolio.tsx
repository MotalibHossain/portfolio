'use client';

import { useState } from 'react';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

const portfolioItems = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with payment integration and admin dashboard',
    category: 'Full Stack',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    image: '🛍️',
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'Collaborative task management application with real-time updates',
    category: 'Frontend',
    tags: ['React', 'Firebase', 'Tailwind CSS'],
    image: '📋',
  },
  {
    id: 3,
    title: 'Social Media Analytics',
    description: 'Analytics dashboard for social media metrics and insights',
    category: 'Full Stack',
    tags: ['Next.js', 'Python', 'PostgreSQL', 'Chart.js'],
    image: '📊',
  },
  {
    id: 4,
    title: 'Portfolio Website',
    description: 'Modern portfolio website with animations and responsive design',
    category: 'Frontend',
    tags: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
    image: '🎨',
  },
  {
    id: 5,
    title: 'Fitness Tracking App',
    description: 'Mobile and web app for tracking fitness activities and progress',
    category: 'Full Stack',
    tags: ['React Native', 'Node.js', 'MongoDB'],
    image: '💪',
  },
  {
    id: 6,
    title: 'Blog Platform',
    description: 'Content management system with markdown support and SEO optimization',
    category: 'Full Stack',
    tags: ['Next.js', 'Prisma', 'PostgreSQL'],
    image: '📝',
  },
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Frontend', 'Full Stack'];
  const filtered =
    activeCategory === 'All' ? portfolioItems : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <section className="section-padding">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="section-title">Portfolio</h2>
          <p className="section-subtitle">Featured projects and case studies</p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-accent-purple to-accent-blue text-white shadow-lg'
                  : 'bg-dark-700 text-gray-300 hover:text-accent-purple'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {filtered.map(item => (
            <div
              key={item.id}
              className="glass p-6 rounded-2xl overflow-hidden group hover:bg-white/15 transition-all duration-300 cursor-pointer card-hover"
            >
              {/* Image/Icon */}
              <div className="w-full h-40 bg-gradient-to-br from-accent-purple/20 to-accent-blue/20 rounded-lg flex items-center justify-center text-6xl mb-6 group-hover:from-accent-purple/40 group-hover:to-accent-blue/40 transition-all">
                {item.image}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm mb-4">{item.description}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {item.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-xs bg-accent-purple/20 text-accent-purple rounded-full border border-accent-purple/50"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-3 pt-4 border-t border-gray-700">
                <a
                  href="#"
                  className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-dark-700 hover:bg-accent-purple hover:text-white transition-all text-gray-300"
                >
                  <FiExternalLink size={16} />
                  <span className="text-sm">Live</span>
                </a>
                <a
                  href="#"
                  className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-dark-700 hover:bg-accent-purple hover:text-white transition-all text-gray-300"
                >
                  <FiGithub size={16} />
                  <span className="text-sm">Code</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

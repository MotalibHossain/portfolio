'use client';

import { FiArrowRight } from 'react-icons/fi';

const blogPosts = [
  {
    id: 1,
    title: 'Getting Started with Next.js 14: A Complete Guide',
    excerpt: 'Learn how to build modern web applications with Next.js 14 and its powerful features like App Router and Server Components.',
    date: 'Mar 15, 2024',
    category: 'Tutorial',
    readTime: '8 min read',
  },
  {
    id: 2,
    title: 'Mastering Tailwind CSS: Tips and Tricks',
    excerpt: 'Discover advanced Tailwind CSS techniques to write more efficient and maintainable CSS code.',
    date: 'Mar 10, 2024',
    category: 'Web Design',
    readTime: '6 min read',
  },
  {
    id: 3,
    title: 'React Performance Optimization Best Practices',
    excerpt: 'Explore different strategies to optimize your React applications for better performance and user experience.',
    date: 'Mar 05, 2024',
    category: 'Performance',
    readTime: '10 min read',
  },
  {
    id: 4,
    title: 'Building Scalable APIs with Node.js',
    excerpt: 'Learn how to design and build scalable RESTful APIs using Node.js and Express framework.',
    date: 'Feb 28, 2024',
    category: 'Backend',
    readTime: '7 min read',
  },
  {
    id: 5,
    title: 'WebSockets: Real-time Communication Guide',
    excerpt: 'Understand how WebSockets work and how to implement real-time features in your applications.',
    date: 'Feb 20, 2024',
    category: 'Advanced',
    readTime: '9 min read',
  },
  {
    id: 6,
    title: 'TypeScript Essentials for React Developers',
    excerpt: 'Master TypeScript to write type-safe React applications with better development experience.',
    date: 'Feb 15, 2024',
    category: 'Tutorial',
    readTime: '8 min read',
  },
];

export default function Blog() {
  return (
    <section className="section-padding">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="section-title">Latest Blog Posts</h2>
          <p className="section-subtitle">Articles and insights about web development</p>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {blogPosts.map(post => (
            <article
              key={post.id}
              className="glass p-6 rounded-2xl hover:bg-white/15 transition-all duration-300 group cursor-pointer card-hover flex flex-col h-full"
            >
              {/* Category Badge */}
              <div className="mb-4">
                <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-accent-purple/20 text-accent-purple border border-accent-purple/50">
                  {post.category}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent-purple transition-colors flex-grow">
                {post.title}
              </h3>

              {/* Excerpt */}
              <p className="text-gray-400 text-sm mb-6 flex-grow">{post.excerpt}</p>

              {/* Footer */}
              <div className="pt-6 border-t border-gray-700 space-y-4">
                <div className="flex justify-between items-center text-xs text-gray-500">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>

                <a href="#" className="inline-flex items-center gap-2 text-accent-purple group-hover:text-accent-blue transition-colors font-semibold">
                  Read Article
                  <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <a href="#" className="btn-primary inline-flex items-center gap-2 group">
            View All Articles
            <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}

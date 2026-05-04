'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

import { FiMenu, FiX } from 'react-icons/fi';
import { SidebarProfile } from './SidebarProfile';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Services', href: '#services' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Resume', href: '#resume' },
  { name: 'Blog', href: '#blog' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Contact', href: '#contact' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      // Determine active section based on scroll position
      const sections = navLinks.map(link => link.href.slice(1));
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 200) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Mobile Navigation Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 right-8 z-40 md:hidden bg-gradient-to-r from-accent-purple to-accent-blue p-3 rounded-full text-white shadow-lg hover:shadow-xl transition-all"
      >
        {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-30 bg-black/50 backdrop-blur-sm md:hidden">
          <nav className="fixed bottom-0 left-0 right-0 bg-dark-800 border-t border-gray-700 p-6 space-y-3 max-h-96 overflow-y-auto">
            <SidebarProfile />
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                onClick={handleNavClick}
                className={`block py-3 px-4 rounded-lg transition-all ${
                  activeSection === link.href.slice(1)
                    ? 'bg-gradient-to-r from-accent-purple to-accent-blue text-white'
                    : 'text-gray-300 hover:text-accent-purple hover:bg-dark-700'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      )}

      {/* Desktop Sidebar Navigation */}
      <nav className="hidden md:flex md:fixed md:left-0 md:top-0 md:flex-col md:w-64 md:h-screen md:bg-dark-900 md:border-r md:border-gray-800 md:z-30 md:overflow-y-auto">
        <SidebarProfile />
        <div className="px-4 pb-8 space-y-1">
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className={`flex items-center gap-3 py-2.5 px-4 rounded-lg transition-all text-sm font-medium ${
                activeSection === link.href.slice(1)
                  ? 'bg-gradient-to-r from-accent-purple to-accent-blue text-white shadow-lg'
                  : 'text-gray-400 hover:text-white hover:bg-dark-800'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </nav>

      {/* Main content offset removed; handled in main layout */}
    </>
  );
}

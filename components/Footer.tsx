'use client';

import Link from 'next/link';
import { FaGithub, FaTwitter, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-800 border-t border-gray-700 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Motalib</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Full-stack developer passionate about creating beautiful and functional web applications.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Services', 'Portfolio', 'Contact'].map(link => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-400 hover:text-accent-purple transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {['Web Development', 'UI/UX Design', 'Mobile App', 'Consulting'].map(service => (
                <li key={service}>
                  <a href="#" className="text-gray-400 hover:text-accent-purple transition-colors text-sm">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <div className="flex gap-3">
              {[
                { icon: FaGithub, link: 'https://github.com' },
                { icon: FaTwitter, link: 'https://twitter.com' },
                { icon: FaLinkedin, link: 'https://linkedin.com' },
                { icon: FaEnvelope, link: 'mailto:hello@motalib.dev' },
              ].map((social, idx) => {
                const Icon = social.icon;
                return (
                  <a
                    key={idx}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-dark-700 hover:bg-gradient-to-r hover:from-accent-purple hover:to-accent-blue flex items-center justify-center text-gray-400 hover:text-white transition-all"
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
            {/* Copyright */}
            <p className="text-gray-500 text-sm">
              © {currentYear} Motalib Hossain. All rights reserved.
            </p>

            {/* Made with love */}
            <p className="text-gray-500 text-sm flex items-center justify-center gap-1">
              Made with <FaHeart className="text-accent-pink" size={14} /> by Motalib
            </p>

            {/* Links */}
            <div className="flex gap-4 text-sm text-gray-500">
              <a href="#" className="hover:text-accent-purple transition-colors">
                Privacy Policy
              </a>
              <span>•</span>
              <a href="#" className="hover:text-accent-purple transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>

        {/* Back to Top Button */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-gradient-to-r from-accent-purple to-accent-blue text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-all opacity-0 hover:opacity-100 pointer-events-none hover:pointer-events-auto"
          style={{
            opacity: typeof window !== 'undefined' && window.scrollY > 500 ? 1 : 0,
            pointerEvents: typeof window !== 'undefined' && window.scrollY > 500 ? 'auto' : 'none',
          }}
        >
          ↑
        </button>
      </div>
    </footer>
  );
}

'use client';

import { FiArrowRight } from 'react-icons/fi';

import { FaGithub, FaTwitter, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { HeroProfileImage } from '../HeroProfileImage';

export default function Hero() {
  return (
    <section className="section-padding pt-32 pb-20 md:pt-40 md:pb-32 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent-purple/10 via-transparent to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 animate-fade-in">
            {/* Greeting Badge */}
            <div className="inline-block">
              <div className="px-4 py-2 rounded-full bg-gradient-to-r from-accent-purple/20 to-accent-blue/20 border border-accent-purple/50">
                <p className="text-accent-purple text-sm font-semibold">👋 Welcome to my portfolio</p>
              </div>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                Hi, I'm <span className="gradient-text">Motalib Hossain</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-400 font-medium">
                Full Stack Developer & Creative Designer
              </p>
            </div>

            {/* Description */}
            <p className="text-gray-400 text-lg leading-relaxed max-w-lg">
              I specialize in creating beautiful, responsive web applications using modern technologies like React, Next.js, and Tailwind CSS. With expertise in both frontend and backend development, I transform ideas into elegant digital solutions.
            </p>

            {/* Stats */}
            <div className="flex gap-8 py-6 border-t border-b border-gray-700">
              <div>
                <p className="text-3xl font-bold text-accent-purple">50+</p>
                <p className="text-gray-400 text-sm">Projects Completed</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-accent-blue">5+</p>
                <p className="text-gray-400 text-sm">Years Experience</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-accent-pink">100%</p>
                <p className="text-gray-400 text-sm">Satisfaction Rate</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="https://github.com/MotalibHossain"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex items-center gap-2 group"
              >
                View My Work
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="https://storage.rxresu.me/cm2uot72a13j8zg0515a3o4xo/resumes/cv-motalib-hossain.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                Download CV
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              <a href="https://github.com/MotalibHossain" target="_blank" rel="noopener noreferrer" className="p-3 rounded-lg bg-dark-700 hover:bg-accent-purple hover:text-white transition-all text-gray-400">
                <FaGithub size={20} />
              </a>
              <a href="https://twitter.com/MotalibHossain" target="_blank" rel="noopener noreferrer" className="p-3 rounded-lg bg-dark-700 hover:bg-accent-blue hover:text-white transition-all text-gray-400">
                <FaTwitter size={20} />
              </a>
              <a href="https://www.linkedin.com/in/motalibhossain/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-lg bg-dark-700 hover:bg-accent-purple hover:text-white transition-all text-gray-400">
                <FaLinkedin size={20} />
              </a>
              <a href="mailto:motalibhossainrbk33@gmail.com" className="p-3 rounded-lg bg-dark-700 hover:bg-accent-pink hover:text-white transition-all text-gray-400">
                <FaEnvelope size={20} />
              </a>
            </div>
          </div>

          {/* Right Content - Profile Image with Status */}
          <div className="hidden md:flex justify-center animate-slide-in">
            <HeroProfileImage />
          </div>
        </div>
      </div>

      {/* Scroll indicator removed as requested */}
    </section>
  );
}

'use client';

import { FiArrowDown, FiArrowRight } from 'react-icons/fi';
import { FaGithub, FaLinkedin, FaFacebook, FaStackOverflow } from 'react-icons/fa';
import { HeroProfileImage } from '../HeroProfileImage';

export default function Hero() {
  return (
    <section className="section-padding pt-16 pb-20 md:pt-24 md:pb-32 relative overflow-hidden min-h-screen flex items-center">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent-purple/10 via-transparent to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10 w-full">
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
            <div className="space-y-3">
              <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                Hi, I'm <span className="gradient-text">Motalib Hossain!</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-400 font-medium">
                Fullstack Web Developer
              </p>
            </div>

            {/* Description */}
            <p className="text-gray-400 text-base leading-relaxed max-w-lg">
              I am a full-stack developer with a passion and expertise in front-end development,
              including HTML5, CSS3, JavaScript, jQuery, and React. I also have a solid understanding
              of backend technologies such as Python and Django. I enjoy teaching others about
              web development and ICT.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <a href="#about" className="btn-primary flex items-center gap-2 group">
                More About Me
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
            <div className="flex gap-3 pt-2">
              <a href="https://www.linkedin.com/in/motalibhossain/" target="_blank" rel="noopener noreferrer"
                className="p-3 rounded-lg bg-dark-800 hover:bg-accent-blue hover:text-white transition-all text-gray-400" title="LinkedIn">
                <FaLinkedin size={18} />
              </a>
              <a href="https://github.com/MotalibHossain" target="_blank" rel="noopener noreferrer"
                className="p-3 rounded-lg bg-dark-800 hover:bg-accent-purple hover:text-white transition-all text-gray-400" title="GitHub">
                <FaGithub size={18} />
              </a>
              <a href="https://www.facebook.com/KNM.MotalibHossain" target="_blank" rel="noopener noreferrer"
                className="p-3 rounded-lg bg-dark-800 hover:bg-blue-600 hover:text-white transition-all text-gray-400" title="Facebook">
                <FaFacebook size={18} />
              </a>
              <a href="https://stackoverflow.com/users/13298803/motalib-hossain" target="_blank" rel="noopener noreferrer"
                className="p-3 rounded-lg bg-dark-800 hover:bg-orange-500 hover:text-white transition-all text-gray-400" title="Stack Overflow">
                <FaStackOverflow size={18} />
              </a>
            </div>
          </div>

          {/* Right Content - Profile Image with Status */}
          <div className="flex justify-center animate-slide-in">
            <HeroProfileImage />
          </div>
        </div>

        {/* Scroll to Explore */}
        <div className="mt-16 flex flex-col items-center gap-2 animate-bounce-slow">
          <a href="#about" className="flex flex-col items-center gap-2 text-gray-500 hover:text-accent-purple transition-colors group">
            <span className="text-xs tracking-widest uppercase font-medium">Scroll to Explore</span>
            <FiArrowDown size={20} className="group-hover:translate-y-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}

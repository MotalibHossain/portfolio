'use client';

import Header from '@/components/Header';
import Navigation from '@/components/Navigation';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import Services from '@/components/sections/Services';
import Portfolio from '@/components/sections/Portfolio';
import Resume from '@/components/sections/Resume';
import Blog from '@/components/sections/Blog';
import Testimonials from '@/components/sections/Testimonials';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-dark-900">
      {/* Header only shown on mobile */}
      <div className="md:hidden">
        <Header />
      </div>
      <Navigation />
      <div className="pt-16 md:pt-0 md:ml-64">
        <section id="home">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="services">
          <Services />
        </section>
        <section id="portfolio">
          <Portfolio />
        </section>
        <section id="resume">
          <Resume />
        </section>
        <section id="blog">
          <Blog />
        </section>
        <section id="testimonials">
          <Testimonials />
        </section>
        <section id="contact">
          <Contact />
        </section>
        <Footer />
      </div>
    </main>
  );
}

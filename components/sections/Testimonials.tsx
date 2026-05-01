'use client';

import { useState, useEffect } from 'react';
import { FiChevronLeft, FiChevronRight, FiStar } from 'react-icons/fi';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    position: 'CEO, TechStart Inc.',
    image: '👩‍💼',
    text: 'Motalib delivered our website ahead of schedule with exceptional quality. His attention to detail and communication throughout the project was outstanding.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Ahmed Hassan',
    position: 'Product Manager, Digital Solutions',
    image: '👨‍💼',
    text: 'Working with Motalib was a game-changer. He understood our vision perfectly and transformed it into a beautiful, functional application that exceeded expectations.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    position: 'Founder, Creative Studio',
    image: '👩‍🎨',
    text: 'The level of professionalism and technical expertise Motalib brought to our project was incredible. Highly recommend for any complex web development needs.',
    rating: 5,
  },
  {
    id: 4,
    name: 'James Wilson',
    position: 'CTO, Innovation Labs',
    image: '👨‍💻',
    text: 'Motalib is a true full-stack developer. His ability to handle both frontend and backend seamlessly, combined with his problem-solving skills, is exceptional.',
    rating: 5,
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [autoSlide, setAutoSlide] = useState(true);

  useEffect(() => {
    if (!autoSlide) return;

    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [autoSlide]);

  const goToPrevious = () => {
    setCurrent(prev => (prev - 1 + testimonials.length) % testimonials.length);
    setAutoSlide(false);
  };

  const goToNext = () => {
    setCurrent(prev => (prev + 1) % testimonials.length);
    setAutoSlide(false);
  };

  return (
    <section className="section-padding bg-dark-800/50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="section-title">Testimonials</h2>
          <p className="section-subtitle">What my clients say about my work</p>
        </div>

        {/* Testimonials Carousel */}
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Slides */}
            <div className="overflow-hidden">
              {testimonials.map((testimonial, idx) => (
                <div
                  key={testimonial.id}
                  className={`transition-all duration-500 transform ${
                    idx === current ? 'opacity-100 scale-100' : 'opacity-0 scale-95 absolute'
                  }`}
                  style={{
                    visibility: idx === current ? 'visible' : 'hidden',
                  }}
                >
                  <div className="glass p-8 rounded-2xl">
                    {/* Rating */}
                    <div className="flex gap-1 mb-6">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <FiStar key={i} className="text-accent-pink fill-accent-pink" size={20} />
                      ))}
                    </div>

                    {/* Quote */}
                    <p className="text-lg text-gray-300 mb-8 leading-relaxed italic">
                      "{testimonial.text}"
                    </p>

                    {/* Author */}
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent-purple/20 to-accent-blue/20 flex items-center justify-center text-3xl">
                        {testimonial.image}
                      </div>
                      <div>
                        <h4 className="text-white font-bold">{testimonial.name}</h4>
                        <p className="text-gray-400 text-sm">{testimonial.position}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={goToPrevious}
              onMouseEnter={() => setAutoSlide(false)}
              onMouseLeave={() => setAutoSlide(true)}
              className="absolute -left-12 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-accent-purple hover:bg-accent-blue transition-all text-white z-10 hidden md:flex items-center justify-center"
            >
              <FiChevronLeft size={24} />
            </button>

            <button
              onClick={goToNext}
              onMouseEnter={() => setAutoSlide(false)}
              onMouseLeave={() => setAutoSlide(true)}
              className="absolute -right-12 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-accent-purple hover:bg-accent-blue transition-all text-white z-10 hidden md:flex items-center justify-center"
            >
              <FiChevronRight size={24} />
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setCurrent(idx);
                  setAutoSlide(false);
                }}
                className={`w-3 h-3 rounded-full transition-all ${
                  idx === current ? 'bg-accent-purple w-8' : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto mt-16 pt-8 border-t border-gray-700">
          {[
            { label: 'Happy Clients', value: '50+' },
            { label: 'Projects Completed', value: '100+' },
            { label: 'Satisfaction Rate', value: '98%' },
          ].map((stat, idx) => (
            <div key={idx} className="text-center">
              <p className="text-3xl font-bold gradient-text mb-2">{stat.value}</p>
              <p className="text-gray-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

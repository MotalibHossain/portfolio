'use client';

import { FiArrowRight } from 'react-icons/fi';
import { FaCode, FaMobile, FaPalette, FaRocket } from 'react-icons/fa';

const services = [
  {
    icon: FaCode,
    title: 'Web Development',
    description: 'Building modern, responsive websites and web applications using React, Next.js, and other cutting-edge technologies.',
    features: ['Responsive Design', 'SEO Optimization', 'Fast Performance'],
  },
  {
    icon: FaMobile,
    title: 'Mobile Development',
    description: 'Creating powerful mobile experiences with React Native and cross-platform solutions for iOS and Android.',
    features: ['iOS Apps', 'Android Apps', 'Cross-platform'],
  },
  {
    icon: FaPalette,
    title: 'UI/UX Design',
    description: 'Designing intuitive and beautiful user interfaces that engage users and enhance their experience.',
    features: ['Wireframing', 'Prototyping', 'Design Systems'],
  },
  {
    icon: FaRocket,
    title: 'Performance Optimization',
    description: 'Optimizing applications for speed, scalability, and reliability to ensure the best user experience.',
    features: ['Code Splitting', 'Caching', 'CDN Integration'],
  },
];

export default function Services() {
  return (
    <section className="section-padding bg-dark-800/50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="section-title">My Services</h2>
          <p className="section-subtitle">What I offer to help you achieve your goals</p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => {
            const IconComponent = service.icon;
            return (
              <div
                key={idx}
                className="glass p-8 rounded-2xl hover:bg-white/15 group transition-all duration-300 flex flex-col h-full hover:shadow-2xl hover:shadow-accent-purple/30"
              >
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-accent-purple/20 to-accent-blue/20 flex items-center justify-center group-hover:from-accent-purple/40 group-hover:to-accent-blue/40 transition-all">
                    <IconComponent className="text-2xl text-accent-purple group-hover:text-accent-blue transition-colors" />
                  </div>
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400 mb-6 flex-grow">{service.description}</p>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-gray-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent-blue" />
                      {feature}
                    </div>
                  ))}
                </div>

                {/* Link */}
                <a href="#" className="inline-flex items-center gap-2 text-accent-purple group-hover:text-accent-blue transition-colors font-semibold">
                  Learn More
                  <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

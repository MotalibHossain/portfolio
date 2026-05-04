'use client';

import { FaCode, FaPaintBrush, FaWordpress } from 'react-icons/fa';

const services = [
  {
    icon: FaPaintBrush,
    title: 'Web Design',
    description: "In today's digital world, your website is the first interaction consumers have with your business. I offer the best web design service � eyes-catching, responsive, SEO-friendly website design.",
    features: ['Responsive Design', 'SEO Friendly', 'Modern UI/UX'],
  },
  {
    icon: FaCode,
    title: 'Web Development',
    description: 'If you have already designed your website and want to develop it � custom functionality, data imports, or CMS implementation, I am ready for the challenge.',
    features: ['Custom Functionality', 'CMS Integration', 'Data Management'],
  },
  {
    icon: FaWordpress,
    title: 'WordPress',
    description: 'The easy-to-use, SEO friendly, flexible platform used on over 35% of all websites. WordPress provides a user-friendly CMS to easily manage and update your site.',
    features: ['WordPress Setup', 'Theme Customization', 'Plugin Integration'],
  },
];

export default function Services() {
  return (
    <section className="section-padding bg-dark-800/50">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="section-title">My Services</h2>
          <p className="section-subtitle">Currently serving the following services with good quality support</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {services.map((service, idx) => {
            const IconComponent = service.icon;
            return (
              <div
                key={idx}
                className="glass p-8 rounded-2xl hover:bg-white/15 group transition-all duration-300 flex flex-col hover:shadow-2xl hover:shadow-accent-purple/30"
              >
                <div className="mb-6">
                  <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-accent-purple/20 to-accent-blue/20 flex items-center justify-center group-hover:from-accent-purple/40 group-hover:to-accent-blue/40 transition-all">
                    <IconComponent className="text-2xl text-accent-purple group-hover:text-accent-blue transition-colors" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400 mb-6 flex-grow text-sm leading-relaxed">{service.description}</p>
                <div className="space-y-2">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-gray-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent-blue" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 max-w-3xl mx-auto glass p-8 rounded-2xl text-center">
          <h3 className="text-2xl font-bold text-white mb-2">{"Let's work together"}</h3>
          <p className="text-gray-400 mb-6">{"I'm available for freelancer projects. Hire me and get your project done."}</p>
          <a href="#contact" className="btn-primary inline-flex items-center gap-2">Hire Me</a>
        </div>
      </div>
    </section>
  );
}

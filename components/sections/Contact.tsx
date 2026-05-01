'use client';

import { useState } from 'react';
import { FiMail, FiPhone, FiMapPin, FiArrowRight } from 'react-icons/fi';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    console.log('Form submitted:', formData);
    setSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section className="section-padding">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">Let's connect and create something amazing together</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            {/* Info Cards */}
            {[
              {
                icon: FiMail,
                title: 'Email',
                content: 'hello@motalib.dev',
                link: 'mailto:hello@motalib.dev',
              },
              {
                icon: FiPhone,
                title: 'Phone',
                content: '+1 (555) 123-4567',
                link: 'tel:+15551234567',
              },
              {
                icon: FiMapPin,
                title: 'Location',
                content: 'San Francisco, CA',
                link: '#',
              },
            ].map((info, idx) => {
              const Icon = info.icon;
              return (
                <a
                  key={idx}
                  href={info.link}
                  className="glass p-6 rounded-xl hover:bg-white/15 transition-all group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent-purple/20 to-accent-blue/20 flex items-center justify-center group-hover:from-accent-purple/40 group-hover:to-accent-blue/40 transition-all flex-shrink-0">
                      <Icon className="text-accent-purple group-hover:text-accent-blue transition-colors text-xl" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">{info.title}</h3>
                      <p className="text-gray-400 mt-1">{info.content}</p>
                    </div>
                  </div>
                </a>
              );
            })}

            {/* Social Links */}
            <div className="pt-4">
              <p className="text-gray-400 text-sm mb-4">Follow me on social media</p>
              <div className="flex gap-4">
                {[
                  { name: 'GitHub', color: 'from-gray-600 to-gray-700' },
                  { name: 'Twitter', color: 'from-blue-400 to-blue-500' },
                  { name: 'LinkedIn', color: 'from-blue-600 to-blue-700' },
                  { name: 'Instagram', color: 'from-pink-500 to-purple-500' },
                ].map((social, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className={`w-12 h-12 rounded-lg bg-gradient-to-br ${social.color} flex items-center justify-center text-white hover:shadow-lg transition-all`}
                  >
                    {social.name.charAt(0)}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-white font-semibold mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-dark-700 border border-gray-600 text-white placeholder-gray-500 focus:border-accent-purple focus:outline-none transition-all"
                placeholder="John Doe"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-white font-semibold mb-2">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-dark-700 border border-gray-600 text-white placeholder-gray-500 focus:border-accent-purple focus:outline-none transition-all"
                placeholder="john@example.com"
              />
            </div>

            {/* Subject */}
            <div>
              <label htmlFor="subject" className="block text-white font-semibold mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-dark-700 border border-gray-600 text-white placeholder-gray-500 focus:border-accent-purple focus:outline-none transition-all"
                placeholder="Project Inquiry"
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-white font-semibold mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 rounded-lg bg-dark-700 border border-gray-600 text-white placeholder-gray-500 focus:border-accent-purple focus:outline-none transition-all resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="btn-primary w-full flex items-center justify-center gap-2 group"
            >
              {submitted ? (
                <>
                  <span>Message Sent! ✓</span>
                </>
              ) : (
                <>
                  <span>Send Message</span>
                  <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>

            {/* Note */}
            <p className="text-xs text-gray-500 text-center">
              I'll get back to you as soon as possible. Typically within 24 hours.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

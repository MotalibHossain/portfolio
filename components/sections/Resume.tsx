'use client';

import { useState } from 'react';
import { FiDownload } from 'react-icons/fi';

const education = [
  {
    degree: 'B.Sc in Engineering',
    subject: 'Computer Science and Engineering',
    school: 'Daffodil International University',
    location: 'Dhaka, Bangladesh',
    year: 'Jan 2019 - Dec 2022',
    icon: 'GradCap',
  },
  {
    degree: 'Diploma-In-Engineering',
    subject: 'Computer Technology',
    school: 'Rajshahi Polytechnic Institute',
    location: 'Rajshahi, Bangladesh',
    year: 'Jan 2014 - Dec 2018',
    icon: 'Laptop',
  },
  {
    degree: 'Secondary School Certificate',
    subject: 'Science',
    school: 'Kalupara Mohadipur High School',
    location: 'Dinajpur Board',
    year: 'Jan 2012 - Dec 2014',
    icon: 'Book',
  },
];

const experience = [
  {
    title: 'Full Stack Web Developer',
    period: '2022 - Present',
    type: 'Professional',
    description: 'Building modern, responsive web applications for clients using React, Next.js, Python, and Django. Delivering end-to-end solutions from frontend to backend.',
    tags: ['React', 'Next.js', 'Python', 'Django'],
  },
  {
    title: 'Freelance Web Designer & Developer',
    period: '2020 - Present',
    type: 'Freelance',
    description: 'Worked with local and international clients to design and develop custom websites and web applications. Available on Fiverr for freelancer projects.',
    tags: ['WordPress', 'Web Design', 'Bootstrap'],
  },
  {
    title: 'ICT Trainer',
    period: '2019 - Present',
    type: 'Training',
    description: 'Trained students in web design and ICT, sharing knowledge and helping others grow in the tech field.',
    tags: ['Teaching', 'Web Development', 'ICT'],
  },
];

const eduIcons: Record<string, string> = {
  GradCap: '🎓',
  Laptop: '💻',
  Book: '📖',
};

export default function Resume() {
  const [activeTab, setActiveTab] = useState<'education' | 'experience'>('education');

  return (
    <section className="section-padding bg-dark-800/50">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="section-title">My Resume</h2>
          <p className="section-subtitle">Education & Professional Experience</p>
        </div>

        <div className="flex justify-center mb-10">
          <div className="flex bg-dark-900 rounded-xl p-1 gap-1">
            <button
              onClick={() => setActiveTab('education')}
              className={`px-6 py-2.5 rounded-lg text-sm font-semibold transition-all ${activeTab === 'education' ? 'bg-gradient-to-r from-accent-purple to-accent-blue text-white shadow-lg' : 'text-gray-400 hover:text-white'}`}
            >
              Education
            </button>
            <button
              onClick={() => setActiveTab('experience')}
              className={`px-6 py-2.5 rounded-lg text-sm font-semibold transition-all ${activeTab === 'experience' ? 'bg-gradient-to-r from-accent-blue to-accent-pink text-white shadow-lg' : 'text-gray-400 hover:text-white'}`}
            >
              Experience
            </button>
          </div>
        </div>

        {activeTab === 'education' && (
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {education.map((edu, idx) => (
              <div key={idx} className="glass p-6 rounded-2xl hover:bg-white/15 transition-all group text-center">
                <div className="text-4xl mb-4">{eduIcons[edu.icon]}</div>
                <h4 className="text-sm font-bold text-accent-purple uppercase tracking-wide mb-1">{edu.degree}</h4>
                <p className="text-base font-semibold text-white mb-1">{edu.subject}</p>
                <p className="text-sm text-gray-400 mb-1">{edu.school}</p>
                <p className="text-xs text-gray-500 mb-3">{edu.location}</p>
                <span className="px-3 py-1 bg-accent-purple/20 border border-accent-purple/40 rounded-full text-xs text-accent-purple font-medium">
                  {edu.year}
                </span>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'experience' && (
          <div className="space-y-5 max-w-3xl mx-auto">
            {experience.map((exp, idx) => (
              <div key={idx} className="glass p-6 rounded-2xl hover:bg-white/15 transition-all group">
                <div className="flex items-start justify-between flex-wrap gap-3 mb-3">
                  <div>
                    <h4 className="text-lg font-bold text-white group-hover:text-accent-purple transition-colors">{exp.title}</h4>
                    <span className="text-sm text-gray-500">{exp.type}</span>
                  </div>
                  <span className="px-3 py-1 bg-accent-blue/20 border border-accent-blue/40 rounded-full text-xs text-accent-blue font-medium whitespace-nowrap">
                    {exp.period}
                  </span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag, i) => (
                    <span key={i} className="px-2.5 py-1 bg-dark-800 border border-gray-700 rounded-full text-xs text-gray-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-12 text-center">
          <a
            href="https://storage.rxresu.me/cm2uot72a13j8zg0515a3o4xo/resumes/cv-motalib-hossain.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2 group"
          >
            Download Full CV
            <FiDownload className="group-hover:translate-y-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
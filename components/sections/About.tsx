'use client';

import { FiDownload } from 'react-icons/fi';

export default function About() {
  return (
    <section className="section-padding bg-dark-800/50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">A passionate developer with expertise in creating digital solutions</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          {/* Left - Content */}
          <div className="space-y-6">
            <p className="text-gray-300 leading-relaxed text-lg">
              Hi 👋,<br />
              I am a full-stack developer with a passion and expertise in front-end development, including HTML5, CSS3, JavaScript, jQuery, and React. I also have a solid understanding of backend technologies such as Python and Django. I am passionate about web technology and enjoy teaching others about web development and ICT.
            </p>

            <div className="pt-4">
              <button className="btn-primary flex items-center gap-2 group">
                Download My CV
                <FiDownload className="group-hover:translate-y-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right - Features Grid */}
          <div className="grid grid-cols-2 gap-6">
            {[
              { title: 'Frontend', desc: 'React, Next.js, Vue' },
              { title: 'Backend', desc: 'Node.js, Python, Django' },
              { title: 'Design', desc: 'UI/UX, Figma, Adobe' },
              { title: 'Databases', desc: 'MongoDB, PostgreSQL' },
            ].map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-xl hover:bg-white/15 transition-all duration-300 group cursor-pointer"
              >
                <h3 className="text-lg font-semibold text-accent-purple group-hover:text-accent-blue transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-400 mt-2">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

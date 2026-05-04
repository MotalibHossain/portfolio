'use client';

import { FiDownload, FiMapPin, FiMail, FiGithub } from 'react-icons/fi';

const personalInfo = [
  { label: 'Location', value: 'Dhanmondi, Dhaka, Bangladesh', icon: FiMapPin },
  { label: 'Email', value: 'motalibhossainrbk33@gmail.com', icon: FiMail },
  { label: 'GitHub', value: 'github.com/MotalibHossain', icon: FiGithub },
];

export default function About() {
  return (
    <section className="section-padding bg-dark-800/50">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">A Professional FullStack Web Developer</p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-accent-blue">Let&apos;s be familiar, I am Motalib Hossain</h3>
            <p className="text-gray-300 leading-relaxed">
              Hi,<br /><br />
              I am a full-stack developer with a passion and expertise in front-end
              development, including HTML5, CSS3, JavaScript, jQuery, and React. I also have a solid
              understanding of backend technologies such as Python and Django. I am passionate
              about web technology and enjoy teaching others about web development and ICT.
            </p>
            <div className="space-y-3 pt-2">
              {personalInfo.map((info, idx) => {
                const IconComp = info.icon;
                return (
                  <div key={idx} className="flex items-center gap-3 text-sm">
                    <IconComp className="text-accent-purple flex-shrink-0" size={16} />
                    <span className="text-gray-400 font-medium w-20">{info.label}:</span>
                    <span className="text-gray-300">{info.value}</span>
                  </div>
                );
              })}
            </div>
            <div className="pt-2">
              <a
                href="https://storage.rxresu.me/cm2uot72a13j8zg0515a3o4xo/resumes/cv-motalib-hossain.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2 group"
              >
                Download My CV
                <FiDownload className="group-hover:translate-y-1 transition-transform" />
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { title: 'Frontend', desc: 'HTML5, CSS3, JavaScript, jQuery, React, Next.js, Bootstrap, Tailwind CSS' },
              { title: 'Backend', desc: 'Python, Django, PHP and Laravel, WordPress Customization' },
              { title: 'Database', desc: 'PostgreSQL, MySQL' },
              { title: 'Tools', desc: 'Git and GitHub, Figma, SEO' },
            ].map((item, idx) => (
              <div key={idx} className="glass p-5 rounded-xl hover:bg-white/15 transition-all duration-300 group cursor-pointer">
                <h3 className="text-base font-semibold text-accent-purple group-hover:text-accent-blue transition-colors mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

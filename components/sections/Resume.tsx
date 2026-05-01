'use client';

const education = [
  {
    school: 'Daffodil International University',
    degree: 'B.Sc in Engineering',
    subject: 'Computer Science and Engineering',
    location: 'Dhaka, Bangladesh',
    year: '2019 - 2022',
  },
  {
    school: 'Rajshahi Polytechnic Institute',
    degree: 'Diploma-In-Engineering',
    subject: 'Computer Technology',
    location: 'Rajshahi, Bangladesh',
    year: '2014 - 2018',
  },
  {
    school: 'Kalupara Mohadi Pur High School',
    degree: 'Secondary School Certificate',
    subject: 'Science',
    location: 'Dinajpur, Bangladesh',
    year: '2012 - 2014',
  },
];

const experience = [
  {
    title: 'Full Stack Web Developer',
    period: '2020 - Present',
    description: 'Building modern, responsive web applications for clients using React, Next.js, Python, and Django. Specialized in both frontend and backend development, delivering end-to-end solutions.',
  },
  {
    title: 'Freelance Web Designer & Developer',
    period: '2018 - 2020',
    description: 'Worked with local and international clients to design and develop custom websites and web applications. Focused on user experience and modern web standards.',
  },
  {
    title: 'ICT Trainer',
    period: '2019 - Present',
    description: 'Trained students in web design and ICT, sharing knowledge and helping others grow in the tech field.',
  },
];

export default function Resume() {
  return (
    <section className="section-padding bg-dark-800/50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="section-title">My Resume</h2>
          <p className="section-subtitle">Education & Professional Experience</p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
              <div className="w-1 h-8 bg-gradient-to-b from-accent-purple to-accent-blue rounded-full" />
              Education
            </h3>

            <div className="space-y-8">
              {education.map((edu, idx) => (
                <div key={idx} className="glass p-6 rounded-xl hover:bg-white/15 transition-all relative pl-8">
                  {/* Timeline Dot */}
                  <div className="absolute -left-4 top-6 w-8 h-8 rounded-full bg-gradient-to-r from-accent-purple to-accent-blue border-4 border-dark-800" />
                  <h4 className="text-lg font-bold text-accent-purple">{edu.degree}</h4>
                  <p className="text-gray-300 font-semibold mt-1">{edu.school}</p>
                  <p className="text-gray-400 text-sm mt-1">{edu.subject}</p>
                  <p className="text-gray-400 text-xs">{edu.location}</p>
                  <p className="text-sm text-accent-blue mt-1">{edu.year}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
              <div className="w-1 h-8 bg-gradient-to-b from-accent-blue to-accent-pink rounded-full" />
              Experience
            </h3>

            <div className="space-y-8">
              {experience.map((exp, idx) => (
                <div key={idx} className="glass p-6 rounded-xl hover:bg-white/15 transition-all relative pl-8">
                  {/* Timeline Dot */}
                  <div className="absolute -left-4 top-6 w-8 h-8 rounded-full bg-gradient-to-r from-accent-blue to-accent-pink border-4 border-dark-800" />
                  <h4 className="text-lg font-bold text-accent-blue">{exp.title}</h4>
                  <p className="text-gray-300 font-semibold mt-1">{exp.period}</p>
                  <p className="text-gray-400 mt-3">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

'use client';

const skills = [
  { category: 'Frontend', items: ['React', 'Next.js', 'Vue.js', 'Tailwind CSS', 'TypeScript', 'JavaScript'] },
  { category: 'Backend', items: ['Node.js', 'Python', 'Django', 'Express.js', 'REST APIs', 'GraphQL'] },
  { category: 'Design', items: ['UI/UX Design', 'Figma', 'Adobe XD', 'Responsive Design', 'Wireframing'] },
  { category: 'Tools & Others', items: ['Git', 'Docker', 'AWS', 'Vercel', 'GitHub', 'Firebase'] },
];

const technicalSkills = [
  { name: 'React', level: 95 },
  { name: 'Next.js', level: 90 },
  { name: 'Tailwind CSS', level: 92 },
  { name: 'JavaScript', level: 94 },
  { name: 'TypeScript', level: 88 },
  { name: 'Node.js', level: 85 },
  { name: 'Python', level: 82 },
  { name: 'Django', level: 80 },
  { name: 'Firebase', level: 86 },
  { name: 'MongoDB', level: 84 },
];

export default function Skills() {
  return (
    <section className="section-padding">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="section-title">My Skills</h2>
          <p className="section-subtitle">Technologies and tools I work with</p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skills.map((skillGroup, idx) => (
            <div key={idx} className="glass p-6 rounded-xl hover:bg-white/15 transition-all">
              <h3 className="text-lg font-bold text-accent-purple mb-4">{skillGroup.category}</h3>
              <div className="space-y-3">
                {skillGroup.items.map((skill, i) => (
                  <div key={i} className="flex items-center gap-2 text-gray-300">
                    <div className="w-2 h-2 rounded-full bg-accent-blue" />
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Proficiency Bars */}
        <div className="bg-dark-800/50 rounded-2xl p-8 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-8">Proficiency Level</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {technicalSkills.map((skill, idx) => (
              <div key={idx} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300 font-semibold">{skill.name}</span>
                  <span className="text-accent-purple text-sm font-bold">{skill.level}%</span>
                </div>
                <div className="w-full bg-dark-700 rounded-full h-2 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-accent-purple to-accent-blue h-full rounded-full transition-all duration-500"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

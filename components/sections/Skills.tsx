'use client';

const skillGroups = [
  {
    category: 'Frontend Technologies',
    color: 'text-accent-purple',
    items: ['HTML & CSS', 'Bootstrap-5', 'Tailwind CSS', 'JavaScript', 'jQuery', 'React JS', 'Next.js'],
  },
  {
    category: 'Backend Technologies',
    color: 'text-accent-blue',
    items: ['Python', 'Django', 'PHP & Laravel', 'WordPress Customization', 'PostgreSQL', 'MySQL'],
  },
  {
    category: 'Others',
    color: 'text-accent-pink',
    items: ['Git & GitHub', 'Figma', 'SEO', 'Supabase'],
  },
];

const familiarityTags = [
  'Bootstrap-5', 'Tailwind CSS', 'JavaScript', 'jQuery', 'React', 'Python', 'Django', 'Supabase',
];

export default function Skills() {
  return (
    <section className="section-padding">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="section-title">My Skills</h2>
          <p className="section-subtitle">Technologies and tools I work with</p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-5xl mx-auto">
          {skillGroups.map((group, idx) => (
            <div key={idx} className="glass p-6 rounded-xl hover:bg-white/15 transition-all">
              <h3 className={`text-base font-bold mb-4 ${group.color}`}>{group.category}</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-dark-800 border border-gray-700 rounded-full text-xs text-gray-300 hover:border-accent-purple hover:text-white transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Familiarity Section */}
        <div className="max-w-3xl mx-auto">
          <div className="glass p-8 rounded-2xl">
            <h3 className="text-lg font-bold text-white mb-6 text-center">Familiarity</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {familiarityTags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 rounded-lg bg-gradient-to-r from-accent-purple/20 to-accent-blue/20 border border-accent-purple/40 text-accent-purple font-semibold text-sm hover:from-accent-purple/40 hover:to-accent-blue/40 transition-all cursor-default"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { useState, useEffect, useRef } from 'react';
import FadeIn from '../components/FadeIn';

export function Skills() {
     const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const skills = [
    { name: 'Web Development', level: 80, icon: '⚛️' },
    { name: 'Graphic Design', level: 75, icon: '📜' },
    { name: 'Data Analysis', level: 75, icon: '🎯' },
    { name: 'Video Editing', level: 50, icon: '🌐' },
    // { name: 'Graphic Design', level: 75, icon: '🖌️' },
    // { name: 'Tailwind CSS', level: 70, icon: '🎨' },
    // { name: 'Excel', level: 70, icon: '📜' },
    // { name: 'SQL', level: 55, icon: '🖌️' },
    // { name: 'Python', level: 60, icon: '🌐' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-8 px-4 bg-white dark:bg-gray-900">
      <div className="container mx-auto max-w-3xl" ref={sectionRef}>
        <FadeIn>
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-4">
            My <span className="text-purple-500">Skills</span>
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12">
            Technologies and tools I work with
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 space-y-6">
          {skills.map((skill, index) => (
            <FadeIn key={skill.name} delay={index * 0.1}>
              <div>
                <div className="flex justify-between text-sm text-gray-800 dark:text-gray-200 mb-1">
                  <span className="flex items-center gap-2">
                    {skill.icon} {skill.name}
                  </span>
                  <span>{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                  <div 
                    className="h-3 rounded-full bg-linear-to-r from-purple-600 to-blue-500 transition-all duration-1000 ease-out"
                    style={{ 
                      width: isVisible ? `${skill.level}%` : '0%',
                      transition: 'width 1.5s ease-in-out'
                    }}
                  />
                </div>
              </div>
            // </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills

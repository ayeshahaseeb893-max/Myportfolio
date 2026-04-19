import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Briefcase, GraduationCap } from 'lucide-react';
import { fadeUp } from '../utils/motion';

const experiences = [
  {
    title: 'Frontend Developer',
    company: 'Verdant Soft',
    date: 'Jan 2025 - Oct 2025',
    description: 'As a Frontend Developer, i contributed in building a highly interactive, scalable User Interfaces using React and Vite.',
    icon: <Briefcase className="w-5 h-5 text-white" />,
  },
  {
    title: 'UI Developer',
    company: 'Smart Technology House',
    date: 'Jun 2024 - Dec 2024',
    description: 'Developed pixel-perfect animations and web experiences, leveraging Framer Motion and modern CSS techniques.',
    icon: <Briefcase className="w-5 h-5 text-white" />,
  },
  {
    title: 'Web Developer',
    company: 'DigiPakistan NSDI - Internship',
    date: 'Aug 2023 - Feb 2024',
    description: 'As a intern I contributed to front-end development by building responsive web interfaces.Focused on implementing modern UI designs with clean and maintainable code. ',
    icon: <Briefcase className="w-5 h-5 text-white" />,
  },
  {
    title: 'B.S. in Software Engineering',
    company: 'Govt College University Faisalabad',
    date: '2019 - 2023',
    description: 'Graduated with honors. Specialized in Software Engineering and modern web development.',
    icon: <GraduationCap className="w-5 h-5 text-white" />,
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.div variants={fadeUp} className="mb-20 text-center">
            <h2 className="text-4xl font-bold text-slate-800 dark:text-white mb-2">
              My <span className="text-primary">Experience</span>
            </h2>
            <div className="w-20 h-1.5 bg-primary rounded-full mx-auto"></div>
          </motion.div>

          {/* Timeline */}
          <div className="relative max-w-4xl mx-auto">
            {/* Vertical Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-800 -translate-x-1/2"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className={`relative flex items-center justify-between md:justify-normal w-full ${index % 2 === 0 ? 'md:flex-row-reverse left-timeline' : 'right-timeline'
                    }`}
                >
                  {/* Icon */}
                  <div className="absolute left-8 md:left-1/2 w-12 h-12 bg-primary dark:bg-primary-dark rounded-full border-4 border-white dark:border-slate-900 shadow-xl flex items-center justify-center -translate-x-1/2 z-10">
                    {exp.icon}
                  </div>

                  {/* Card content */}
                  <div className="w-full pl-24 pr-4 md:w-5/12 md:pl-0 md:px-8">
                    <div className={`p-6 bg-white dark:bg-slate-900 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-800 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                      }`}>
                      <span className="text-primary font-medium text-sm mb-2 block">{exp.date}</span>
                      <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-1">{exp.title}</h3>
                      <h4 className="text-slate-500 dark:text-slate-400 font-medium mb-4">{exp.company}</h4>
                      <p className="text-slate-600 dark:text-slate-300">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;

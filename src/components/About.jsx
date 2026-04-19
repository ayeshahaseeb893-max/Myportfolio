import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Layout, Smartphone, Globe, Cpu } from 'lucide-react';
import { fadeUp, staggerContainer } from '../utils/motion';
import { FaGithub } from 'react-icons/fa';
const skills = [
  { name: 'React', icon: <Code2 className="w-6 h-6" />, category: 'Frontend' },
  { name: 'Tailwind CSS', icon: <Layout className="w-6 h-6" />, category: 'Styling' },
  { name: 'Framer Motion', icon: <Smartphone className="w-6 h-6" />, category: 'Animations' },
  { name: 'JavaScript', icon: <Globe className="w-6 h-6" />, category: 'Language' },
  { name: 'Git', icon: <FaGithub className="w-6 h-6" />, category: 'Version Control' },
  { name: 'Vite', icon: <Cpu className="w-6 h-6" />, category: 'Tooling' },
];

const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer(0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          {/* About Text */}
          <motion.div variants={fadeUp} className="space-y-6">
            <h2 className="text-4xl font-bold text-slate-800 dark:text-white mb-2">
              About <span className="text-primary">Me</span>
            </h2>
            <div className="w-20 h-1.5 bg-primary rounded-full mb-8"></div>

            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              I'm a dedicated developer with a strong focus on building intuitive, beautiful, and highly interactive user interfaces. I bridge the gap between design and engineering to create pixel-perfect, performant web applications.
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              With a keen eye for aesthetics, I ensure that every project I work on not only runs efficiently under the hood but also delivers an exceptional, smooth, and premium user experience akin to modern tech giants.
            </p>
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            variants={staggerContainer(0.1, 0.2)}
            className="grid grid-cols-2 sm:grid-cols-3 gap-6"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass p-6 rounded-2xl flex flex-col items-center justify-center text-center gap-4 hover:border-primary/50 transition-colors duration-300 group"
              >
                <div className="w-12 h-12 bg-primary/10 dark:bg-primary/20 text-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {skill.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800 dark:text-slate-200">{skill.name}</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{skill.category}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default About;

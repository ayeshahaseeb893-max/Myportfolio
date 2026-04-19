
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { fadeUp, staggerContainer } from '../utils/motion';
import grocifymockup from '../assets/Images/Grocifymockup.png';
import talentsyncmockup from '../assets/Images/image.png';

const projects = [
  {
    title: 'Grocify Website',
    description: 'Designed a clean, user-friendly online grocery frontend showcasing fresh organic products with smooth navigation and modern UI.',
    image: grocifymockup,
    tech: ['React', 'Tailwind CSS', 'Redux', 'React-Router'],
    github: '#',
    live: 'https://agent-69ca773a897fff45422cc0cc--grocifyproject.netlify.app/',
  },
  {
    title: 'Awesome Website ',
    description: 'A modern, website landing page design with interactive UI elements, showcasing a portfolio of projects and services with smooth animations and responsive layout.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    tech: ['HTML', 'Tailwind CSS', 'JavaScript'],
    github: '#',
    live: '#',
  },
  {
    title: 'TalentSync Website',
    description: 'A smart recruitment platform designed to connect skilled professionals with the right employers.A landing page design with modern and interactive UI.',
    image: talentsyncmockup,
    tech: ['React', 'vite', 'Tailwind', 'JavaScript'],
    github: '#',
    live: 'https://agent-69c51885384b5db4da--jobagency-website.netlify.app/',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-surface-light dark:bg-surface-dark transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer(0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.div variants={fadeUp} className="mb-16">
            <h2 className="text-4xl font-bold text-slate-800 dark:text-white mb-2">
              Featured <span className="text-primary">Projects</span>
            </h2>
            <div className="w-20 h-1.5 bg-primary rounded-full"></div>
            <p className="mt-6 text-lg text-slate-600 dark:text-slate-300 max-w-2xl">
              Here are a few select projects that showcase my passion for creating modern, dynamic web experiences.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                whileHover={{ y: -10 }}
                className="group relative bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-800 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20"
              >
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-primary/20 mix-blend-multiply group-hover:opacity-0 transition-opacity duration-300 z-10"></div>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                  />
                  {/* Overlay Links */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex items-center justify-center gap-6 backdrop-blur-sm">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="p-3 bg-white/10 hover:bg-white/20 rounded-full text-white backdrop-blur-md transition-colors hover:scale-110"
                    >
                      <FaGithub className="w-6 h-6" />
                    </a>
                    <a 
                      href={project.live} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="p-3 bg-primary hover:bg-primary-dark rounded-full text-white shadow-lg transition-colors hover:scale-110"
                    >
                      <ExternalLink className="w-6 h-6" />
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-6 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

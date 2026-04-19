import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { fadeUp, staggerContainer } from '../utils/motion';
import PlexusBackground from './PlexusBackground';

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="min-h-screen flex items-center justify-center pt-24 pb-12 relative overflow-hidden bg-[#030014]"
      >
        {/* Plexus canvas background */}
        <div className="absolute inset-0 z-0">
          <PlexusBackground />
        </div>

        {/* Ambient blobs */}
        <div className="absolute top-1/2 left-1/4 w-[40rem] h-[40rem] bg-indigo-500/10 rounded-full blur-[130px] opacity-60 -z-10 animate-pulse -translate-y-1/2 -translate-x-1/2 pointer-events-none" />
        <div className="absolute top-1/2 right-1/4 w-[35rem] h-[35rem] bg-cyan-500/8 rounded-full blur-[110px] opacity-50 -z-10 animate-pulse delay-1000 -translate-y-1/2 translate-x-1/4 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            variants={staggerContainer(0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="flex flex-col items-center text-center justify-center relative z-10"
          >
            {/* Eyebrow */}
            <motion.p
              variants={fadeUp}
              className="font-medium tracking-widest text-sm md:text-base mb-5 uppercase bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 flex items-center gap-3"
            >
              <span className="w-10 h-px bg-gradient-to-r from-transparent to-cyan-400 inline-block" />
              Hi there, I am
              <span className="w-10 h-px bg-gradient-to-l from-transparent to-cyan-400 inline-block" />
            </motion.p>

            {/* Name */}
            <motion.h1
              variants={fadeUp}
              className="text-6xl md:text-8xl lg:text-[6.5rem] font-bold mb-4 tracking-tighter text-white leading-none"
            >
              Ayesha
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-violet-500">.</span>
            </motion.h1>

            {/* Role */}
            <motion.p
              variants={fadeUp}
              className="text-slate-100 text-xl md:text-2xl lg:text-3xl mt-2 mb-10 font-medium tracking-tight"
            >
              Frontend Developer &amp;{' '}
              <span className="text-slate-100 font-medium">UI/UX Designer</span>
            </motion.p>

            {/* Short bio */}
            <motion.p
              variants={fadeUp}
              className="text-slate-200 text-sm md:text-base max-w-md mb-12 leading-relaxed"
            >
              Crafting pixel-perfect interfaces and delightful digital experiences.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeUp}
              className="flex flex-wrap gap-4 justify-center mb-14"
            >
              <Link
                to="contact"
                smooth={true}
                offset={-80}
                duration={600}
                className="px-8 py-3.5 rounded-full font-semibold text-sm tracking-wide cursor-pointer
                  bg-gradient-to-r from-cyan-500 to-blue-600 text-white
                  hover:scale-105 hover:shadow-[0_0_30px_rgba(34,211,238,0.4)]
                  transition-all duration-300 flex items-center gap-2"
              >
                Connect
              </Link>
              <a
                href="/resume.pdf"
                download
                className="px-8 py-3.5 rounded-full font-semibold text-sm tracking-wide cursor-pointer
                  bg-transparent border border-slate-200 text-slate-200
                  hover:border-cyan-500/60 hover:text-cyan-400 hover:bg-cyan-500/5
                  hover:shadow-[0_0_20px_rgba(34,211,238,0.15)]
                  transition-all duration-300 flex items-center gap-2"
              >
                Resume
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={fadeUp}
              className="flex items-center gap-5 text-slate-200 mb-14"
            >
              {[
                { href: 'https://github.com/ayeshahaseeb893-max', icon: <FaGithub className="w-6 h-6" />, label: 'GitHub' },
                { href: 'https://www.linkedin.com/in/ayesha-ayesha-706a29248/', icon: <FaLinkedin className="w-6 h-6" />, label: 'LinkedIn' },
                { href: 'mailto:ayeshahaseeb8932@gmail.com', icon: <Mail className="w-6 h-6" />, label: 'Email' },
              ].map(({ href, icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-11 h-11 rounded-full border border-slate-300 flex items-center justify-center
                    text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50
                    hover:bg-cyan-500/5 hover:shadow-[0_0_15px_rgba(34,211,238,0.2)]
                    hover:-translate-y-1 transition-all duration-300"
                >
                  {icon}
                </a>
              ))}
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
              variants={fadeUp}
              className="flex flex-col items-center gap-2 opacity-50 hover:opacity-80 transition-opacity"
            >
              <div className="w-6 h-10 border border-slate-300 rounded-full flex justify-center pt-1.5">
                <motion.div
                  animate={{ y: [0, 12, 0] }}
                  transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
                  className="w-1.5 h-1.5 bg-cyan-400 rounded-full"
                />
              </div>
              <span className="text-[10px] text-slate-300 tracking-[0.2em] uppercase">Scroll</span>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Hero;

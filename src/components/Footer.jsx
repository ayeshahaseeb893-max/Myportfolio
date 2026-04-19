import React from 'react';
import { Heart } from 'lucide-react';
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] border-t border-slate-800/50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <Link 
          to="home"
          smooth={true}
          className="text-2xl font-bold cursor-pointer text-primary-dark dark:text-primary tracking-tight"
        >
          Ayesha<span className="text-slate-800 dark:text-white">.</span>
        </Link>
        
        <p className="text-slate-500 dark:text-slate-400 flex items-center gap-1.5 text-sm md:text-base">
          Built with <Heart className="w-4 h-4 text-red-500 animate-pulse fill-red-500" /> by Ayesha
        </p>
        
        <p className="text-slate-500 dark:text-slate-400 text-sm">
          &copy; {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

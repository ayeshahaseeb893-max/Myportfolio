import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle, Mail, MapPin, Sparkles, MessageSquare } from 'lucide-react';
import { fadeUp, staggerContainer } from '../utils/motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const ContactInfoCard = ({ icon: Icon, title, content, delay, href }) => (
  <motion.a
    href={href}
    target={href.startsWith('http') ? '_blank' : undefined}
    rel="noopener noreferrer"
    variants={fadeUp}
    whileHover={{ y: -5, scale: 1.02 }}
    className="flex items-center gap-4 p-4 rounded-2xl bg-slate-800/30 border border-slate-700/50 hover:border-cyan-500/50 hover:bg-slate-800/80 transition-all duration-300 group cursor-pointer"
  >
    <div className="w-12 h-12 rounded-full bg-slate-900 flex items-center justify-center border border-slate-700 group-hover:border-cyan-400 group-hover:shadow-[0_0_15px_rgba(34,211,238,0.4)] transition-all duration-300 text-slate-400 group-hover:text-cyan-400">
      <Icon className="w-6 h-6" />
    </div>
    <div>
      <h4 className="text-sm font-medium text-slate-400 group-hover:text-cyan-300 transition-colors">{title}</h4>
      <p className="text-slate-200 font-semibold">{content}</p>
    </div>
  </motion.a>
);

const InputField = ({ id, label, type = "text", rows }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [hasValue, setHasValue] = useState(false);

  return (
    <div className="relative group">
      <div className={`absolute -inset-0.5 bg-gradient-to-r from-cyan-400 to-violet-500 rounded-xl blur opacity-0 group-focus-within:opacity-30 transition duration-500`}></div>
      <div className="relative">
        <label
          htmlFor={id}
          className={`absolute left-4 transition-all duration-300 pointer-events-none font-medium
            ${isFocused || hasValue
              ? '-top-2.5 text-xs bg-[#0a0a0a] px-2 text-cyan-400'
              : 'top-3.5 text-sm text-slate-500'}`}
        >
          {label}
        </label>
        {rows ? (
          <textarea
            id={id}
            rows={rows}
            required
            onFocus={() => setIsFocused(true)}
            onBlur={(e) => { setIsFocused(false); setHasValue(e.target.value.length > 0); }}
            onChange={(e) => setHasValue(e.target.value.length > 0)}
            className="w-full px-4 py-3.5 bg-[#0a0a0a] border border-slate-700 rounded-xl focus:border-cyan-400 outline-none transition-all duration-300 text-slate-200 resize-none shadow-inner"
          />
        ) : (
          <input
            type={type}
            id={id}
            required
            onFocus={() => setIsFocused(true)}
            onBlur={(e) => { setIsFocused(false); setHasValue(e.target.value.length > 0); }}
            onChange={(e) => setHasValue(e.target.value.length > 0)}
            className="w-full px-4 py-3.5 bg-[#0a0a0a] border border-slate-700 rounded-xl focus:border-cyan-400 outline-none transition-all duration-300 text-slate-200 shadow-inner"
          />
        )}
      </div>
    </div>
  );
};

const Contact = () => {
  const [status, setStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => {
      setStatus('sent');
      e.target.reset();
      setTimeout(() => setStatus(null), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative bg-[#030014] overflow-hidden">
      {/* Decorative ambient background glows */}
      <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-violet-600/10 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[40rem] h-[40rem] bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none translate-y-1/3 -translate-x-1/3"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Header */}
          <motion.div variants={fadeUp} className="text-center mb-16">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-sm font-medium mb-6 uppercase tracking-widest"
            >
              <Sparkles className="w-4 h-4" />
              Get in Touch
            </motion.div>

            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              Let's build something <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-violet-500">incredible.</span>
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto font-light">
              Whether you have a groundbreaking idea or just want to say hi, my inbox is always open. I'll try my best to get back to you!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-stretch">
            
            {/* Left Side: Contact Info */}
            <motion.div variants={fadeUp} className="lg:col-span-2 flex flex-col justify-between h-full relative z-10">
              <div className="mb-6">
                <h3 className="text-2xl font-semibold text-white mb-2 flex items-center gap-2">
                  <MessageSquare className="w-6 h-6 text-cyan-400" />
                  Contact Details
                </h3>
                <p className="text-slate-400 font-light">
                  Reach out to me directly through any of these platforms.
                </p>
              </div>
              
              <div className="flex flex-col gap-4 flex-1 justify-center">
                <ContactInfoCard 
                  icon={Mail} 
                  title="Email" 
                  content="ayeshahaseeb893@gmail.com" 
                  href="mailto:ayeshahaseeb893@gmail.com"
                />
                <ContactInfoCard 
                  icon={FaLinkedin} 
                  title="LinkedIn" 
                  content="Ayesha Ayesha" 
                  href="https://www.linkedin.com/in/ayesha-ayesha-706a29248/"
                />
                <ContactInfoCard 
                  icon={FaGithub} 
                  title="GitHub" 
                  content="ayeshahaseeb893-max" 
                  href="https://github.com/ayeshahaseeb893-max"
                />
                <ContactInfoCard 
                  icon={MapPin} 
                  title="Location" 
                  content="Sweden / Remote " 
                  href="#"
                />
              </div>
            </motion.div>

            {/* Right Side: Contact Form */}
            <motion.div 
              variants={fadeUp} 
              className="lg:col-span-3 relative group h-full"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-violet-600 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
              
              <div className="relative h-full p-8 md:p-10 bg-[#0a0a0a]/90 backdrop-blur-xl rounded-3xl border border-slate-700/50 shadow-2xl flex flex-col justify-between">
                <form onSubmit={handleSubmit} className="space-y-6 flex-1 flex flex-col justify-between">
                  
                  <div className="space-y-6 flex-1">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <InputField id="name" label="Your Name" />
                      <InputField id="email" type="email" label="Your Email" />
                    </div>

                    <InputField id="subject" label="Subject" />
                    <InputField id="message" label="Your Message" rows={5} />
                  </div>

                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit" 
                    disabled={status !== null}
                    className="w-full mt-6 flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-bold tracking-wide hover:shadow-[0_0_30px_rgba(34,211,238,0.4)] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed group overflow-hidden relative"
                  >
                    {/* Hover light sweep effect */}
                    <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-[shimmer_1.5s_infinite]"></div>
                    
                    <AnimatePresence mode="wait">
                      {status === 'sending' ? (
                        <motion.span 
                          key="sending"
                          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
                          className="flex items-center gap-2 relative z-10"
                        >
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending logic...
                        </motion.span>
                      ) : status === 'sent' ? (
                        <motion.span 
                          key="sent"
                          initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }}
                          className="flex items-center gap-2 relative z-10"
                        >
                          <CheckCircle className="w-5 h-5" />
                          Message Delivered
                        </motion.span>
                      ) : (
                        <motion.span 
                          key="idle"
                          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                          className="flex items-center gap-2 relative z-10"
                        >
                          Launch Message
                          <Send className="w-5 h-5 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform duration-300" />
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </motion.button>
                </form>
              </div>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

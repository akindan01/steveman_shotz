import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Camera, MapPin, ChevronDown, Instagram, Twitter, Mail, ArrowRight, Award, Play, Calendar, Quote, CheckCircle, MessageCircle, Menu, X } from 'lucide-react'; // Import Menu and X icons

const LandingPage = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Portfolio items
  const portfolioItems = [
    { id: 1, img: "1.jpeg", title: "Birthday/Creative", vol: "Vol. 1" },
    { id: 2, img: "2.jpeg", title: "Birthday", vol: "Vol. 2" },
    { id: 3, img: "3.jpeg", title: "Convocation", vol: "Vol. 3" },
    { id: 4, img: "4.jpeg", title: "Creative Shot", vol: "Vol. 4" },
    { id: 5, img: "5.jpeg", title: "Birthday Shot", vol: "Vol. 5" },
    { id: 6, img: "6.jpeg", title: "Wedding Portrait", vol: "Vol. 6" },
    { id: 7, img: "7.jpeg", title: "Portrait shot", vol: "Vol. 7" },
    { id: 8, img: "8.jpeg", title: "Portrait shot", vol: "Vol. 8" },
    { id: 9, img: "9.jpeg", title: "Portrait shot", vol: "Vol. 9" },
    { id: 10, img: "10.jpeg", title: "Birthday shot", vol: "Vol. 10" },
    { id: 11, img: "11.jpeg", title: "Event shot", vol: "Vol. 11" },
    { id: 12, img: "12.jpeg", title: "Brand shot", vol: "Vol. 12" },
    { id: 13, img: "13.jpeg", title: "Event shot", vol: "Vol. 13" },
    { id: 14, img: "14.jpeg", title: "Event shot", vol: "Vol. 14" },
    { id: 15, img: "15.jpeg", title: "Event shot", vol: "Vol. 15" },
  ];

  const testimonials = [
    { id: 1, name: "Akinremi Daniel", role: "Software Engineer", content: "Steveman has an incredible eye for detail. The editorial shoot he did for my birthday exceeded all expectations." },
    { id: 2, name: "Sharon Oladiran", role: "Host|MC|VOA", content: "If you need a photographer, Steveman is your guy! His eye for lighting and detail is insane, and his energy makes the whole session so fun and effortless" },
    { id: 3, name: "Oluwasoorefunmi Adebanjo", role: "Writer", content: "Steveman is a great man, excellent at what he does and he is a true master of mood." },
    { id: 4, name: "David Adeyemi", role: "Groom", content: "His ability to capture candid moments is unmatched. We relive our wedding day every time we look at the portraits." },
    { id: 5, name: "Bethel", role: "Photographer", content: "Your ability to capture raw, authentic moments is unmatched. A lot of people can take a sharp photo, but you actually capture the feeling behind the lens. Your storytelling through imagery is inspiring." },
    { id: 6, name: "Adebajo Olamilekan", role: "MS|Researcher", content: "Need a photographer who delivers nothing but hits? Hit up Steveman. Insane talent, great energy on set, and the edits are always immaculate. Literally cannot recommend them enough!" },
  ];

  const steps = [
    { title: "Discovery", desc: "We discuss your vision, location, and stylistic preferences.", icon: <Mail className="w-5 h-5" /> },
    { title: "The Session", desc: "A relaxed, guided shoot where we capture the magic.", icon: <Camera className="w-5 h-5" /> },
    { title: "Retouching", desc: "Professional color grading and skin work to polish every frame.", icon: <Play className="w-5 h-5" /> },
    { title: "Delivery", desc: "Your high-resolution gallery delivered within 7-10 business days.", icon: <Calendar className="w-5 h-5" /> },
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] },
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-white/30 selection:text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#050505]/80 backdrop-blur-xl border-b border-white/10 py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
          <div className="cursor-pointer flex items-center">
            <img src="/stevelogo.png" alt="Steveman Logo" className="h-16 md:h-16 w-auto object-contain" />
          </div>
          <div className="hidden md:flex items-center gap-10 text-sm font-medium text-gray-400 tracking-wide">
            <a href="#home" onClick={e => handleSmoothScroll(e, '#home')} className="text-white hover:text-gray-300 transition-colors">Home</a>
            <a href="#about" onClick={e => handleSmoothScroll(e, '#about')} className="hover:text-white transition-colors">About</a>
            <a href="#portfolio" onClick={e => handleSmoothScroll(e, '#portfolio')} className="hover:text-white transition-colors">Portfolio</a>
            <a href="#services" onClick={e => handleSmoothScroll(e, '#services')} className="hover:text-white transition-colors">Services</a>
          </div>
          <a href="#contact" onClick={e => handleSmoothScroll(e, '#contact')} className="hidden md:flex bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md text-white px-7 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-105">Let's Talk</a>
          <button className="md:hidden text-white z-50" onClick={toggleMobileMenu}>{isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}</button>
        </div>
        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ type: 'spring', damping: 25, stiffness: 200 }} className="fixed inset-0 bg-[#050505]/95 backdrop-blur-lg z-40 flex flex-col items-center justify-center space-y-8 md:hidden">
              <a href="#home" onClick={e => handleSmoothScroll(e, '#home')} className="text-white text-2xl font-bold hover:text-gray-300 transition-colors">Home</a>
              <a href="#about" onClick={e => handleSmoothScroll(e, '#about')} className="text-white text-2xl font-bold hover:text-gray-300 transition-colors">About</a>
              <a href="#portfolio" onClick={e => handleSmoothScroll(e, '#portfolio')} className="text-white text-2xl font-bold hover:text-gray-300 transition-colors">Portfolio</a>
              <a href="#services" onClick={e => handleSmoothScroll(e, '#services')} className="text-white text-2xl font-bold hover:text-gray-300 transition-colors">Services</a>
              <a href="#contact" onClick={e => handleSmoothScroll(e, '#contact')} className="bg-white text-black px-8 py-3.5 rounded-full text-lg font-semibold hover:bg-gray-200 transition-colors">Let's Talk</a>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-28 lg:pt-0 min-h-screen flex flex-col lg:flex-row items-center max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1, ease: "easeOut" }} className="w-full lg:w-1/2 pr-0 lg:pr-12 pt-12 lg:pt-0 z-10">
          <div className="w-12 h-0.5 bg-white mb-8" />
          <h1 className="text-5xl lg:text-6xl font-semibold leading-[1.1] mb-6 tracking-tight">I'm SteveMan, a professional photographer from Lagos, Nigeria</h1>
          <p className="text-gray-400 text-lg mb-10 max-w-md leading-relaxed">Specializing in high-end portraits, editorial fashion, and breathtaking travel stories. Capturing the raw, unfiltered essence of human emotion.</p>
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <a href="#portfolio" className="w-full sm:w-auto text-center bg-white text-black px-8 py-3.5 rounded-full text-sm font-semibold hover:bg-gray-200 transition-colors">View Portfolio</a>
            <a href="#contact" className="w-full sm:w-auto text-center bg-[#222] text-white border border-white/10 px-8 py-3.5 rounded-full text-sm font-semibold hover:bg-[#333] transition-colors">Contact Me</a>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 1.2, ease: "easeOut" }} className="w-full lg:w-1/2 h-[60vh] lg:h-screen mt-12 lg:mt-0 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-transparent to-transparent z-10 hidden lg:block" />
          <img src="/steveimage.jpeg" alt="SteveMan holding camera" className="w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-700" />
        </motion.div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-[#0a0a0a] py-32 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-20">
            <h2 className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-4 flex items-center justify-center gap-4"><span className="w-12 h-[1px] bg-gray-600" />Areas of Expertise<span className="w-12 h-[1px] bg-gray-600" /></h2>
            <h3 className="text-4xl md:text-5xl font-bold">Premium <span className="italic font-serif font-light text-gray-400">Services</span></h3>
          </motion.div>
          <motion.div initial="initial" whileInView="whileInView" viewport={{ once: true }} transition={{ staggerChildren: 0.2 }} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div variants={fadeInUp} className="group p-8 rounded-2xl bg-[#111] border border-white/5 hover:border-white/20 transition-all duration-500 hover:-translate-y-2">
              <div className="w-14 h-14 bg-white/5 rounded-full flex items-center justify-center mb-6 group-hover:bg-white/10 transition-colors"><Camera className="w-6 h-6 text-gray-300 group-hover:text-white" /></div>
              <h4 className="text-xl font-bold mb-4">Portrait Photography</h4>
              <p className="text-gray-400 leading-relaxed">Professional studio and outdoor portraits capturing your authentic self with cinematic lighting and deep focus.</p>
            </motion.div>
            <motion.div variants={fadeInUp} className="group p-8 rounded-2xl bg-[#111] border border-white/5 hover:border-white/20 transition-all duration-500 hover:-translate-y-2">
              <div className="w-14 h-14 bg-white/5 rounded-full flex items-center justify-center mb-6 group-hover:bg-white/10 transition-colors"><MapPin className="w-6 h-6 text-gray-300 group-hover:text-white" /></div>
              <h4 className="text-xl font-bold mb-4">Editorial & Travel</h4>
              <p className="text-gray-400 leading-relaxed">High-end editorial shoots for magazines and brands, combined with stunning visual travel storytelling across the globe.</p>
            </motion.div>
            <motion.div variants={fadeInUp} className="group p-8 rounded-2xl bg-[#111] border border-white/5 hover:border-white/20 transition-all duration-500 hover:-translate-y-2">
              <div className="w-14 h-14 bg-white/5 rounded-full flex items-center justify-center mb-6 group-hover:bg-white/10 transition-colors"><Play className="w-6 h-6 text-gray-300 group-hover:text-white" /></div>
              <h4 className="text-xl font-bold mb-4">Commercial Videography</h4>
              <p className="text-gray-400 leading-relaxed">Short-form aesthetic videography for brands, events, and personal portfolios, crafted with a cinematic eye.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 relative border-t border-white/5 bg-[#080808]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1, ease: "easeOut" }} className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-gray-700 to-gray-500 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200" />
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 bg-black">
                <img src="/steve.jpeg" alt="Steveman - Professional Photographer" className="w-full h-full object-cover object-center filter grayscale transition duration-700 group-hover:grayscale-0 group-hover:scale-105" />
                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                  <div className="flex items-center gap-4 text-white">
                    <div className="bg-white/20 backdrop-blur-md p-3 rounded-2xl"><Camera className="w-8 h-8" /></div>
                    <div>
                      <p className="font-bold text-lg">SteveMan Shotz</p>
                      <p className="text-sm text-gray-300 flex items-center gap-1"><MapPin className="w-3 h-3" /> Lagos, Nigeria</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -right-6 top-1/4 bg-[#111] border border-white/10 p-5 rounded-2xl shadow-2xl backdrop-blur-xl hidden md:block group-hover:-translate-y-2 transition-transform duration-500">
                <div className="flex items-center gap-4 text-white"><div className="bg-white/10 p-3 rounded-full"><Award className="w-6 h-6 text-gray-300" /></div><div><p className="text-2xl font-bold">5+</p><p className="text-xs text-gray-400 uppercase tracking-wider">Years Exp.</p></div></div>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 100 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1, ease: "easeOut" }} className="flex flex-col justify-center">
              <h2 className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-4 flex items-center gap-4"><span className="w-12 h-[1px] bg-gray-600" />The Artist Behind the Lens<span className="w-12 h-[1px] bg-gray-600" /></h2>
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">Seeing the world <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-600 italic font-serif font-light">differently.</span></h3>
              <div className="space-y-6 text-gray-400 text-lg font-light">
                <p>I am <span className="text-white font-medium">SteveMan</span>, an editorial and portrait photographer. My journey began with a simple desire: to capture the raw unfiltered essence of human emotion and the breathtaking stillness of the world around us.</p>
                <p>Based in the vibrant heart of Lagos, I draw deeply from the city's pulse and energy, translating this vibrancy into every frame. Whether it's high-end fashion, intimate portraits, or expansive landscapes, my work is defined by an obsessive attention to lighting, mood, and storytelling.</p>
              </div>
              <div className="grid grid-cols-2 gap-8 mt-12 py-8 border-y border-white/10">
                <div><p className="text-3xl font-bold text-white mb-2">50+</p><p className="text-sm text-gray-500 uppercase tracking-wider font-semibold">Projects Completed</p></div>
                <div><p className="text-3xl font-bold text-white mb-2">50+</p><p className="text-sm text-gray-500 uppercase tracking-wider font-semibold">Happy Clients</p></div>
              </div>
              <div className="mt-12"><img src="/stevelogo.png" alt="Signature" className="h-10 opacity-70" /></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-32 bg-[#050505] relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <h2 className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-4 flex items-center gap-4"><span className="w-12 h-[1px] bg-gray-600" />Selected Works</h2>
              <h3 className="text-4xl md:text-5xl font-bold">Featured <span className="italic font-serif font-light text-gray-400">Captures</span></h3>
            </motion.div>
            {/* button removed – covered by expand toggle below */}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(isExpanded ? portfolioItems : portfolioItems.slice(0, 3)).map(item => (
              <div key={item.id} className="group relative aspect-[3/4] rounded-2xl overflow-hidden bg-gray-900 cursor-pointer">
                <div className="w-full h-full bg-gray-800 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110" style={{ backgroundImage: `url('${item.img}')` }} />
                <div className="absolute bottom-0 left-0 p-8 z-20 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-300 mb-2">{item.title}</p>
                  <p className="text-2xl font-bold text-white">Project {item.vol}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <button onClick={() => setIsExpanded(!isExpanded)} className="text-sm font-bold uppercase tracking-widest hover:text-gray-400 transition-colors flex items-center gap-2 border-b border-white pb-1 group">
              {isExpanded ? 'Show Less' : 'Explore All'}
              <ArrowRight className={`w-4 h-4 transition-transform ${isExpanded ? '-rotate-90' : 'group-hover:translate-x-1'}`} />
            </button>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-32 bg-[#080808] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-20">
            <h2 className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-4">How I Work</h2>
            <h3 className="text-4xl font-bold">The <span className="italic font-serif font-light text-gray-400">Creative</span> Journey</h3>
          </div>
          <motion.div initial="initial" whileInView="whileInView" viewport={{ once: true }} transition={{ staggerChildren: 0.15 }} className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, idx) => (
              <motion.div key={idx} variants={fadeInUp} className="relative group">
                <div className="mb-6 w-12 h-12 bg-white/5 rounded-full flex items-center justify-center group-hover:bg-white text-gray-400 group-hover:text-black transition-all duration-300">
                  {step.icon}
                </div>
                <h4 className="text-lg font-bold mb-2 flex items-center gap-2"><span className="text-white/20 text-sm font-mono">0{idx + 1}</span> {step.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                {idx < 3 && <div className="hidden md:block absolute top-6 left-16 w-full h-[1px] bg-gradient-to-r from-white/10 to-transparent -z-10" />}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 bg-[#050505] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row items-center justify-between mb-16">
            <div className="mb-8 md:mb-0"><h2 className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-4">Kind Words</h2><h3 className="text-4xl font-bold">Client <span className="italic font-serif font-light text-gray-400">Voices</span></h3></div>
            <div className="flex gap-4"><Award className="w-12 h-12 text-white/10" /></div>
          </div>
          <motion.div initial="initial" whileInView="whileInView" viewport={{ once: true }} transition={{ staggerChildren: 0.2 }} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map(t => (
              <motion.div key={t.id} variants={fadeInUp} className="p-8 rounded-3xl bg-[#0a0a0a] border border-white/5 hover:border-white/10 transition-colors relative group">
                <Quote className="w-8 h-8 text-white/5 absolute top-6 right-8 group-hover:text-white/10 transition-colors" />
                <p className="text-gray-300 mb-8 italic leading-relaxed">"{t.content}"</p>
                <h4 className="font-bold text-white">{t.name}</h4>
                <p className="text-xs text-gray-500 uppercase tracking-widest mt-1">{t.role}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 lg:py-32 bg-[#0a0a0a] border-t border-white/5 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex flex-col justify-center">
              <h2 className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-4 flex items-center gap-4"><span className="w-12 h-[1px] bg-gray-600" />Get In Touch</h2>
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">Let's Create <br /><span className="italic font-serif font-light text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-600">Magic</span> Together.</h3>
              <p className="text-gray-400 text-lg mb-12 max-w-md leading-relaxed font-light">Whether you're looking for a portrait session, a commercial shoot, or just want to say hello. Fill out the form and I'll get back to you as soon as possible.</p>
              <div className="space-y-8">
                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 bg-[#111] rounded-2xl flex items-center justify-center border border-white/10 group-hover:border-white/30 group-hover:bg-[#1a1a1a] transition-all"><MapPin className="w-6 h-6 text-gray-300 group-hover:text-white transition-colors" /></div>
                  <div className="flex flex-col justify-center h-14"><p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Studio Location</p><p className="text-lg text-white">Lagos, Nigeria</p></div>
                </div>
              </div>
              <div className="mt-16 flex items-center gap-6">
                <a href="https://www.instagram.com/steveman_shotz?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/30 transition-all"><Instagram className="w-5 h-5" /></a>
                <a href="https://x.com/steveman_shotz?s=20" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/30 transition-all"><Twitter className="w-5 h-5" /></a>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex flex-col gap-6">
              <div className="p-10 rounded-[2rem] bg-gradient-to-br from-white to-gray-200 text-black group cursor-pointer transition-all hover:scale-[1.02] duration-500">
                <MessageCircle className="w-12 h-12 mb-6" />
                <h4 className="text-3xl font-bold mb-2">Direct Booking</h4>
                <p className="text-black/60 mb-8 leading-relaxed font-medium">The quickest way to reach me for availability, rates, and booking inquiries.</p>
                <a href="https://wa.me/2347042358069" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-bold border-b-2 border-black pb-1 hover:gap-4 transition-all">Chat on WhatsApp <ArrowRight className="w-5 h-5" /></a>
              </div>
              <div className="p-10 rounded-[2rem] bg-[#111] border border-white/5 group cursor-pointer transition-all hover:scale-[1.02] duration-500 overflow-hidden relative">
                <div className="absolute -right-4 -top-4 w-32 h-32 bg-white/5 rounded-full blur-3xl group-hover:bg-white/10 transition-colors" />
                <Mail className="w-12 h-12 mb-6 text-gray-400" />
                <h4 className="text-3xl font-bold mb-2 text-white">Collaborations</h4>
                <p className="text-gray-500 mb-8 leading-relaxed font-light">For commercial projects, editorial fashion shoots, and global brand partnerships.</p>
                <a href="mailto:stevemanshotz@gmail.com" className="inline-flex items-center gap-2 font-bold text-white border-b-2 border-white pb-1 hover:gap-4 transition-all">Send Email <ArrowRight className="w-5 h-5" /></a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 bg-[#020202] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="space-y-6 text-center md:text-left">
              <img src="/stevelogo.png" alt="Logo" className="h-12 opacity-80 mx-auto md:mx-0" />
              <p className="text-gray-500 text-sm leading-relaxed max-w-xs mx-auto md:mx-0">Capturing the essence of human emotion and the beauty of the world through a cinematic lens.</p>
            </div>
            <div className="text-center md:text-left">
              <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Explore</h4>
              <ul className="space-y-4 text-sm text-gray-500"><li><a href="#home" className="hover:text-white transition-colors">Home</a></li><li><a href="#about" className="hover:text-white transition-colors">About</a></li><li><a href="#portfolio" className="hover:text-white transition-colors">Portfolio</a></li><li><a href="#services" className="hover:text-white transition-colors">Services</a></li></ul>
            </div>
            <div className="text-center md:text-left">
              <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Contact</h4>
              <ul className="space-y-4 text-sm text-gray-500"><li className="flex items-center justify-center md:justify-start gap-3"><Mail className="w-4 h-4" /><a href="mailto:stevemanshotz@gmail.com" className="hover:text-white transition-colors">stevemanshotz@gmail.com</a></li><li className="flex items-center justify-center md:justify-start gap-3"><MapPin className="w-4 h-4" /><span>Lagos, Nigeria</span></li></ul>
            </div>
            <div className="text-center md:text-left">
              <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Follow</h4>
              <div className="flex justify-center md:justify-start gap-4"><a href="https://www.instagram.com/steveman_shotz?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-500 hover:text-white hover:border-white/30 transition-all"><Instagram className="w-4 h-4" /></a><a href="https://x.com/steveman_shotz?s=20" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-500 hover:text-white hover:border-white/30 transition-all"><Twitter className="w-4 h-4" /></a></div>
            </div>
          </div>
          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
            <p className="text-gray-600 text-xs tracking-wide">© {new Date().getFullYear()} SteveMan Shotz. All rights reserved.</p>
            <p className="text-gray-600 text-xs tracking-wide">Developed by <span className="text-gray-400">Akinremi Daniel</span></p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
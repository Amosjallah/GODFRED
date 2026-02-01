
import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Building2 } from 'lucide-react';
import { LOGO_URL } from '../constants.tsx';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [logoError, setLogoError] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'glass-nav py-3 shadow-2xl border-b border-white/5' : 'bg-transparent py-8'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-4 group">
          <div className="relative w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-2xl overflow-hidden transform group-hover:scale-105 transition-transform duration-500 p-1 border border-emerald-900/10">
            {!logoError ? (
              <img 
                src={LOGO_URL} 
                alt="TSALACH DESIGNS" 
                className="w-full h-full object-contain"
                onError={() => setLogoError(true)}
              />
            ) : (
              <Building2 className="w-10 h-10 text-[#064e3b]" />
            )}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-black tracking-tighter text-white uppercase leading-none">
              TSALACH
            </span>
            <span className="text-[#10b981] text-[10px] tracking-[0.4em] font-black uppercase mt-1">
              DESIGNS
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-10">
          <div className="flex space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.href}
                className={({ isActive }) => 
                  `text-[11px] font-black uppercase tracking-[0.2em] transition-all hover:text-[#10b981] ${isActive ? 'text-[#10b981]' : 'text-white/70'}`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>
          <Link
            to="/contact"
            className="bg-[#10b981] text-white px-8 py-3 rounded-full font-black text-[10px] uppercase tracking-[0.2em] hover:bg-white hover:text-[#064e3b] transition-all transform hover:scale-105 shadow-xl"
          >
            Get a Quote
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-[#064e3b] flex flex-col items-center justify-center p-8 animate-fade-in">
          <button className="absolute top-8 right-8 text-white" onClick={() => setIsOpen(false)}>
            <X className="w-10 h-10" />
          </button>
          <div className="flex flex-col space-y-8 text-center">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.href}
                className="text-4xl font-black text-white uppercase tracking-tighter hover:text-[#10b981]"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </NavLink>
            ))}
            <Link
              to="/contact"
              className="bg-[#10b981] text-white px-10 py-5 rounded-full font-black uppercase tracking-widest text-sm"
              onClick={() => setIsOpen(false)}
            >
              Start Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;

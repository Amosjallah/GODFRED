
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Building2, Facebook, Instagram, Linkedin, Twitter, ArrowRight } from 'lucide-react';
import { LOGO_URL, CONTACT_INFO } from '../constants';

const Footer: React.FC = () => {
  const [logoError, setLogoError] = useState(false);

  return (
    <footer className="bg-[#042f24] text-white pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="space-y-8">
            <Link to="/" className="flex items-center space-x-4 group">
              <div className="relative w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg overflow-hidden p-1">
                {!logoError ? (
                  <img 
                    src={LOGO_URL} 
                    alt="TSALACH" 
                    className="w-full h-full object-contain"
                    onError={() => setLogoError(true)}
                  />
                ) : (
                  <Building2 className="w-8 h-8 text-[#064e3b]" />
                )}
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black tracking-tighter uppercase leading-none">
                  TSALACH
                </span>
                <span className="text-[#10b981] text-[9px] tracking-[0.3em] font-black uppercase">
                  DESIGNS
                </span>
              </div>
            </Link>
            <p className="text-emerald-100/50 leading-relaxed text-sm">
              We are a premier Ghanaian architectural and construction consultancy. Our mission is to transform the skyline of West Africa through innovation, precision, and imagination.
            </p>
            <div className="flex gap-4">
              {[Facebook, Instagram, Linkedin, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-emerald-900/50 flex items-center justify-center text-emerald-100/60 hover:bg-[#10b981] hover:text-white transition-all transform hover:-translate-y-1">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold mb-8 text-[#10b981] uppercase tracking-[0.2em]">Quick Access</h4>
            <ul className="space-y-4">
              {['Home', 'About Us', 'Our Services', 'Project Portfolio', 'Contact Us'].map((item) => (
                <li key={item}>
                  <Link 
                    to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '')}`} 
                    className="text-emerald-100/50 hover:text-white transition-colors text-sm flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" /> {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold mb-8 text-[#10b981] uppercase tracking-[0.2em]">Specializations</h4>
            <ul className="space-y-4">
              {[
                { name: 'Architectural Planning', id: 'arch' },
                { name: 'Structural Analysis', id: 'struct' },
                { name: '3D Visualization', id: 'visuals' },
                { name: 'Construction Works', id: 'construction' }
              ].map((item) => (
                <li key={item.id}>
                  <Link to={`/services/${item.id}`} className="text-emerald-100/50 hover:text-white transition-colors text-sm">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold mb-8 text-[#10b981] uppercase tracking-[0.2em]">Newsletter</h4>
            <p className="text-emerald-100/50 mb-6 text-sm">Stay updated with our latest architectural insights and projects across Ghana.</p>
            <form className="flex bg-emerald-900/30 rounded-xl overflow-hidden border border-emerald-800 p-1" onSubmit={e => e.preventDefault()}>
              <input type="email" placeholder="Email address" className="bg-transparent px-4 py-3 outline-none w-full text-xs text-white" />
              <button className="bg-[#10b981] text-white px-6 py-2 rounded-lg font-bold text-xs uppercase hover:bg-white hover:text-[#064e3b] transition-all">Join</button>
            </form>
            <div className="mt-8">
              <p className="text-xs text-emerald-100/30">Connect directly:</p>
              <p className="text-sm font-bold text-emerald-100/80">{CONTACT_INFO.phone}</p>
            </div>
          </div>
        </div>

        <div className="border-t border-emerald-900/50 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-emerald-100/20 text-[10px] uppercase tracking-widest text-center md:text-left">
            © {new Date().getFullYear()} TSALACH DESIGNS AND CONSULT. Crafted for Excellence in Ghana.
          </p>
          <div className="flex gap-8 text-[10px] uppercase tracking-widest text-emerald-100/20">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

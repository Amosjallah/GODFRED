
import React from 'react';
import { ICON_MAP } from '../constants';
import { Camera, Ruler, Home } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-24">
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#10b981] rounded-full -z-10 opacity-5 blur-3xl"></div>
            <div className="relative z-10 rounded-[40px] overflow-hidden shadow-[0_50px_100px_rgba(6,78,59,0.15)]">
              <img 
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200" 
                alt="TSALACH DESIGNS Mastery" 
                className="w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 bg-[#064e3b] p-10 rounded-[30px] shadow-2xl z-20 hidden lg:block border border-white/10">
              <p className="text-5xl font-black text-[#10b981] mb-2">10+</p>
              <p className="text-emerald-100 font-bold uppercase tracking-widest text-xs">Years of Mastery</p>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 text-[#10b981] mb-6">
              <div className="w-10 h-[2px] bg-[#10b981]"></div>
              <span className="text-xs font-black uppercase tracking-[0.3em]">Our Legacy</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-[#064e3b] mb-8 leading-tight">Crafting the Future of West African Living.</h2>
            <p className="text-gray-600 mb-10 leading-relaxed text-lg font-light">
              TSALACH DESIGNS AND CONSULT is a premier architectural and construction firm dedicated to transforming the skylines of Ghana. We bridge the gap between imaginative artistry and clinical structural precision.
            </p>

            <div className="grid sm:grid-cols-2 gap-8">
              {[
                { icon: 'Target', title: 'Our Mission', text: 'To provide innovative architectural and engineering solutions that exceed expectations.' },
                { icon: 'Lightbulb', title: 'Our Vision', text: 'To be the most respected architectural and construction brand in West Africa.' }
              ].map((item, i) => (
                <div key={i} className="space-y-4">
                  <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center text-[#10b981]">
                    {ICON_MAP[item.icon]}
                  </div>
                  <h4 className="font-bold text-xl text-[#064e3b]">{item.title}</h4>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* New Signature Series Highlight */}
        <div className="bg-[#f0fdf4] rounded-[50px] p-12 md:p-20 relative overflow-hidden border border-emerald-100">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-[#10b981]/5 rounded-l-full pointer-events-none"></div>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-3xl font-black text-[#064e3b] mb-6">Introducing the <span className="text-[#10b981]">Signature Series</span></h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                As seen in our latest projects, our signature style revolves around minimalist bungalow architecture and luxury residences. We focus on:
              </p>
              <ul className="space-y-6">
                {[
                  { icon: Home, label: 'Modern Parapet Systems', sub: 'Sleek, watertight flat-roof aesthetics.' },
                  { icon: Ruler, label: 'Granite Stone Cladding', sub: 'Premium textured finishes for timeless exteriors.' },
                  { icon: Camera, label: '3D Reality Accuracy', sub: 'What you see in our renders is what we build.' }
                ].map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center text-[#10b981]">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-bold text-[#064e3b]">{item.label}</p>
                      <p className="text-sm text-gray-400">{item.sub}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
               <div className="rounded-3xl overflow-hidden shadow-xl aspect-square bg-white">
                  <img src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=600" alt="Detail 1" className="w-full h-full object-cover" />
               </div>
               <div className="rounded-3xl overflow-hidden shadow-xl aspect-square translate-y-8 bg-white">
                  <img src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=600" alt="Detail 2" className="w-full h-full object-cover" />
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;


import React from 'react';
import { History, Award, Users, ShieldCheck, Zap, Target, Leaf, CheckCircle2 } from 'lucide-react';
import { CORE_VALUES, ICON_MAP } from '../constants';

const AboutPage: React.FC = () => {
  const leadership = [
    { name: 'Yaw Tsalach', role: 'Principal Architect', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400' },
    { name: 'Kwadwo Appiah', role: 'Lead Structural Engineer', img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400' },
    { name: 'Esi Mansa', role: 'Chief Creative Director', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400' }
  ];

  return (
    <div className="page-enter">
      {/* Page Header */}
      <section className="relative py-48 bg-[#064e3b] overflow-hidden">
        <div className="absolute inset-0 z-0 scale-110 animate-pulse-slow">
           <img 
            src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover opacity-20"
            alt="Background"
           />
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-[#10b981]/20 backdrop-blur-md px-4 py-2 rounded-full text-[#10b981] text-[10px] font-black uppercase tracking-widest mb-6">
            <ShieldCheck className="w-4 h-4" /> Established Excellence
          </div>
          <h1 className="text-6xl md:text-8xl font-black text-white mb-8 leading-[0.9] tracking-tighter">
            IMAGINATION <br /> <span className="text-[#10b981]">SHAPES</span> REALITY
          </h1>
          <p className="text-xl text-emerald-100/70 max-w-2xl mx-auto font-light leading-relaxed">
            TSALACH DESIGNS AND CONSULT is a bridge between the dream and the detail. We craft structural landmarks that define Ghana's modern architectural identity.
          </p>
        </div>
      </section>

      {/* History & Philosophy */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <div className="flex items-center gap-4 text-[#064e3b]">
                <History className="w-8 h-8 text-[#10b981]" />
                <h2 className="text-4xl font-black uppercase tracking-tighter leading-none">The Journey <br /> of Tsalach</h2>
              </div>
              <p className="text-gray-600 leading-relaxed text-lg font-light">
                Founded in Accra, Tsalach Designs began with a singular focus: to unify imaginative architecture with robust structural clinical precision. In a rapidly urbanizing West Africa, we saw a need for structures that don't just occupy space, but inspire those who move within them.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="p-8 bg-emerald-50 rounded-[30px] border border-emerald-100 hover:shadow-xl transition-all">
                  <Award className="w-12 h-12 text-[#10b981] mb-6" />
                  <h4 className="font-bold text-xl text-[#064e3b] mb-2">Award Winning</h4>
                  <p className="text-xs text-gray-500 leading-relaxed uppercase tracking-widest">Recognized for structural safety and innovation across Ghana.</p>
                </div>
                <div className="p-8 bg-emerald-50 rounded-[30px] border border-emerald-100 hover:shadow-xl transition-all">
                  <Users className="w-12 h-12 text-[#10b981] mb-6" />
                  <h4 className="font-bold text-xl text-[#064e3b] mb-2">50+ Experts</h4>
                  <p className="text-xs text-gray-500 leading-relaxed uppercase tracking-widest">A multi-disciplinary team of architects, engineers, and surveyors.</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-[#10b981]/5 rounded-full blur-3xl -z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1200" 
                className="rounded-[50px] shadow-2xl" 
                alt="Tsalach Apartment Project" 
              />
              <div className="absolute -bottom-10 -left-10 bg-[#064e3b] p-12 rounded-[40px] shadow-2xl border border-white/10">
                 <p className="text-6xl font-black text-[#10b981] mb-1 leading-none">250+</p>
                 <p className="font-black uppercase tracking-[0.3em] text-[10px] text-emerald-100">Projects Delivered</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEW SECTION: Core Values */}
      <section className="py-24 bg-emerald-50/50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl font-black text-[#064e3b] mb-6 uppercase tracking-tighter">Our Core Pillars</h2>
            <p className="text-gray-500">Every project at Tsalach is built upon a foundation of shared principles that ensure excellence in both design and delivery.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {CORE_VALUES.map((val, i) => (
              <div key={i} className="bg-white p-10 rounded-[40px] shadow-sm hover:shadow-2xl transition-all border border-emerald-100/50 group">
                <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center text-[#064e3b] mb-8 group-hover:bg-[#10b981] group-hover:text-white transition-all">
                  {ICON_MAP[val.icon]}
                </div>
                <h4 className="text-2xl font-black text-[#064e3b] mb-4">{val.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{val.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEW SECTION: Sustainable Design */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="bg-[#064e3b] rounded-[60px] p-12 md:p-24 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-[#10b981]/5 -skew-x-12 translate-x-20"></div>
            <div className="grid lg:grid-cols-2 gap-20 items-center relative z-10">
              <div>
                <div className="w-16 h-16 bg-[#10b981] rounded-2xl flex items-center justify-center text-white mb-10 shadow-xl">
                  <Leaf className="w-8 h-8" />
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-white mb-8 leading-tight uppercase tracking-tighter">Sustainable <br /> <span className="text-[#10b981]">West African</span> <br /> Architecture</h2>
                <p className="text-emerald-100/70 mb-10 text-lg font-light leading-relaxed">
                  We specialize in passive cooling designs and sustainable material selection specifically for Ghana's tropical climate. Our projects prioritize natural ventilation and solar orientation to minimize energy consumption.
                </p>
                <ul className="space-y-4">
                  {['Passive Solar Design', 'Rainwater Harvesting Systems', 'Eco-friendly Material Sourcing', 'Thermal Efficient Envelopes'].map(item => (
                    <li key={item} className="flex items-center gap-4 text-white font-bold tracking-wide uppercase text-xs">
                      <div className="w-6 h-6 rounded-full bg-[#10b981]/20 flex items-center justify-center">
                        <CheckCircle2 className="w-3 h-3 text-[#10b981]" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=600" className="rounded-3xl shadow-2xl" alt="Design Detail 1" />
                <img src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=600" className="rounded-3xl shadow-2xl translate-y-12" alt="Design Detail 2" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-black text-[#064e3b] mb-6 uppercase tracking-tighter">Meet Our Leadership</h2>
          <p className="text-gray-500 mb-20 max-w-2xl mx-auto">The visionaries behind West Africa's most iconic structural transformations.</p>
          <div className="grid md:grid-cols-3 gap-12">
            {leadership.map((member) => (
              <div key={member.name} className="group">
                <div className="relative overflow-hidden rounded-[40px] mb-8 shadow-2xl">
                  <img src={member.img} alt={member.name} className="w-full aspect-[4/5] object-cover transition-transform duration-1000 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#064e3b]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-10">
                     <div className="text-white text-left transform translate-y-4 group-hover:translate-y-0 transition-transform">
                        <p className="text-[10px] font-black uppercase tracking-widest text-[#10b981] mb-2">Partner</p>
                        <h4 className="text-xl font-bold">{member.name}</h4>
                     </div>
                  </div>
                </div>
                <h3 className="text-2xl font-black text-[#064e3b] mb-1">{member.name}</h3>
                <p className="text-[#10b981] font-black uppercase tracking-[0.2em] text-[10px]">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;

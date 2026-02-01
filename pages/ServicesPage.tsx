
import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES, ICON_MAP } from '../constants';
import { ArrowUpRight, Cpu, Eye, Building, Home, Briefcase, ShoppingBag } from 'lucide-react';

const ServicesPage: React.FC = () => {
  return (
    <div className="page-enter">
      {/* Page Header */}
      <section className="relative py-48 bg-[#064e3b] overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0 100 L100 0 L100 100 Z" fill="#10b981" />
          </svg>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-6xl md:text-8xl font-black text-white mb-8 leading-[0.9] tracking-tighter uppercase">Mastery In <br /> Every <span className="text-[#10b981]">Detail</span></h1>
          <p className="text-xl text-emerald-100/70 max-w-3xl mx-auto font-light leading-relaxed">
            From photorealistic 3D conceptualization to complex structural engineering audits, our capabilities span the entire architectural lifecycle.
          </p>
        </div>
      </section>

      {/* Main Services Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {SERVICES.map((s) => (
              <div key={s.id} className="p-12 bg-emerald-50/50 rounded-[50px] border border-emerald-100 hover:shadow-2xl transition-all duration-700 group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 green-gradient opacity-[0.03] translate-x-12 -translate-y-12 rounded-full"></div>
                
                <div className="w-24 h-24 bg-white rounded-3xl flex items-center justify-center text-[#064e3b] mb-10 group-hover:bg-[#10b981] group-hover:text-white transition-all duration-500 shadow-xl border border-emerald-50">
                   {ICON_MAP[s.icon]}
                </div>
                <h3 className="text-4xl font-black text-[#064e3b] mb-6 uppercase tracking-tighter">{s.title}</h3>
                <p className="text-gray-500 mb-10 leading-relaxed text-lg font-light">{s.description}</p>
                
                <div className="space-y-8">
                   <div className="space-y-4">
                      <h4 className="font-black text-[10px] uppercase text-[#10b981] tracking-[0.3em]">Key Capabilities:</h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                         {s.details?.map(d => (
                           <li key={d} className="flex items-center gap-3 text-gray-500 text-sm font-medium">
                              <div className="w-2 h-2 rounded-full bg-[#10b981]"></div> {d}
                           </li>
                         ))}
                      </ul>
                   </div>
                   
                   <Link 
                     to={`/services/${s.id}`}
                     className="inline-flex items-center gap-3 text-[#064e3b] font-black uppercase tracking-[0.2em] text-xs group-hover:text-[#10b981] transition-colors pt-10 border-t border-emerald-100/50 w-full"
                   >
                     View Methodology & Standards <ArrowUpRight className="w-5 h-5" />
                   </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEW SECTION: Technological Edge */}
      <section className="py-24 bg-[#042f24] overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#10b981]/5 rounded-l-full blur-3xl"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="inline-flex items-center gap-3 bg-[#10b981]/10 px-6 py-3 rounded-full text-[#10b981] text-[10px] font-black uppercase tracking-widest mb-10 border border-[#10b981]/20">
                <Cpu className="w-4 h-4" /> Next-Gen Architecture
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-white mb-10 leading-[0.9] uppercase tracking-tighter">The <span className="text-[#10b981]">Technological</span> Edge</h2>
              <p className="text-emerald-100/60 mb-12 text-lg font-light leading-relaxed">
                We leverage Building Information Modeling (BIM) and photorealistic AI-enhanced rendering to ensure that what we envision is structurally sound and visually stunning before groundbreaking.
              </p>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#10b981] flex-shrink-0">
                    <Eye className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2 uppercase tracking-wide">VR Walkthroughs</h4>
                    <p className="text-emerald-100/40 text-sm">Experience your design in full 3D space with immersive virtual reality technology.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#10b981] flex-shrink-0">
                    <Building className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2 uppercase tracking-wide">BIM Integration</h4>
                    <p className="text-emerald-100/40 text-sm">Seamless structural and architectural coordination to eliminate on-site errors.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=1200" 
                className="rounded-[60px] shadow-2xl scale-105" 
                alt="3D Visualization Output" 
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-[#10b981] rounded-full flex items-center justify-center animate-pulse">
                <Eye className="w-10 h-10 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEW SECTION: Sectors We Serve */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl font-black text-[#064e3b] mb-6 uppercase tracking-tighter">Sectors Of Excellence</h2>
            <p className="text-gray-500">Tailored structural and architectural solutions for diverse market needs across West Africa.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: Home, title: 'Luxury Residential', count: '120+' },
              { icon: Briefcase, title: 'Corporate Offices', count: '45+' },
              { icon: ShoppingBag, title: 'Retail & Mixed-Use', count: '30+' },
              { icon: Building, title: 'Industrial Blocks', count: '15+' }
            ].map((sector, i) => (
              <div key={i} className="group p-10 bg-emerald-50/50 rounded-[40px] text-center hover:bg-[#064e3b] transition-all duration-500">
                <div className="w-20 h-20 bg-white rounded-3xl mx-auto flex items-center justify-center text-[#064e3b] mb-8 shadow-md group-hover:bg-[#10b981] group-hover:text-white transition-all">
                  <sector.icon className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-[#064e3b] group-hover:text-white transition-colors mb-2 uppercase tracking-wide">{sector.title}</h4>
                <p className="text-[#10b981] font-black text-2xl">{sector.count}</p>
                <p className="text-[10px] uppercase tracking-widest text-gray-400 group-hover:text-emerald-100/40 mt-1">Completed Projects</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-32 green-gradient relative overflow-hidden">
         <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-x-20 -translate-y-20 blur-3xl"></div>
         <div className="container mx-auto px-6 text-center relative z-10">
            <h2 className="text-5xl md:text-7xl font-black text-white mb-10 leading-none tracking-tighter uppercase">Need a Specialist <br /> Consultation?</h2>
            <Link 
              to="/contact"
              className="bg-white text-[#064e3b] px-14 py-6 rounded-full font-black text-lg hover:scale-105 transition-all shadow-2xl inline-block uppercase tracking-widest"
            >
               Book Technical Call
            </Link>
         </div>
      </section>
    </div>
  );
};

export default ServicesPage;

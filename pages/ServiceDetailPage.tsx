
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { SERVICES, PROJECTS, ICON_MAP } from '../constants';
import { ArrowRight, CheckCircle2, ShieldCheck, Ruler, Clipboard, ExternalLink } from 'lucide-react';

const ServiceDetailPage: React.FC = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const service = SERVICES.find(s => s.id === serviceId);

  // Filter relevant projects for this service type
  const relevantProjects = PROJECTS.slice(0, 3);

  if (!service) return (
    <div className="py-60 text-center bg-emerald-50 h-screen flex flex-col items-center justify-center">
      <h2 className="text-4xl font-black text-[#064e3b] uppercase tracking-tighter">Service Not Found</h2>
      <Link to="/services" className="text-[#10b981] mt-6 font-bold uppercase tracking-widest hover:underline">Explore All Services</Link>
    </div>
  );

  return (
    <div className="page-enter">
      {/* Header */}
      <section className="relative py-48 bg-[#064e3b] overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-[0.03] pointer-events-none">
           <div className="w-full h-full flex items-center justify-center scale-[4] text-white">
              {ICON_MAP[service.icon]}
           </div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
           <div className="max-w-4xl">
              <div className="w-20 h-20 bg-[#10b981] rounded-[25px] flex items-center justify-center text-white mb-10 shadow-2xl border border-white/10 scale-110">
                 {ICON_MAP[service.icon]}
              </div>
              <h1 className="text-6xl md:text-8xl font-black text-white mb-8 uppercase tracking-tighter leading-[0.85]">{service.title}</h1>
              <p className="text-2xl text-emerald-100/70 leading-relaxed font-light">{service.description}</p>
           </div>
        </div>
      </section>

      {/* Overview & Capabilities */}
      <section className="py-24 bg-white relative overflow-hidden">
         <div className="absolute top-1/2 left-0 w-64 h-64 bg-emerald-50 rounded-full blur-3xl -z-10 -translate-x-32"></div>
         <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-20 items-start">
               <div>
                  <h2 className="text-4xl font-black text-[#064e3b] mb-10 uppercase tracking-tighter leading-none border-l-4 border-[#10b981] pl-8">Core <br /> Capabilities</h2>
                  <p className="text-gray-600 text-xl leading-relaxed mb-12 font-light">
                     {service.fullDescription}
                  </p>
                  <div className="grid sm:grid-cols-2 gap-6">
                     {service.details?.map(d => (
                       <div key={d} className="flex items-center gap-4 p-6 bg-emerald-50/50 rounded-[30px] border border-emerald-100/50 hover:bg-white hover:shadow-xl transition-all group">
                          <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-[#10b981] shadow-sm group-hover:bg-[#10b981] group-hover:text-white transition-all">
                             <CheckCircle2 className="w-5 h-5" />
                          </div>
                          <span className="font-bold text-[#064e3b] text-sm uppercase tracking-wide">{d}</span>
                       </div>
                     ))}
                  </div>
               </div>

               <div className="relative">
                  <div className="bg-[#064e3b] p-12 lg:p-16 rounded-[60px] shadow-2xl border border-white/5 relative overflow-hidden">
                     <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-x-10 translate-y-10 blur-2xl"></div>
                     <h3 className="text-3xl font-black text-white mb-8 uppercase tracking-tighter">Enquire About <br /> This Service</h3>
                     <p className="text-emerald-100/60 mb-10 font-light">
                        Our technical leads will provide a bespoke assessment for your project requirements within 24 hours.
                     </p>
                     <form className="space-y-6" onSubmit={e => e.preventDefault()}>
                        <input type="text" placeholder="Full Name" className="w-full p-5 bg-white/5 rounded-2xl border border-white/10 text-white outline-none focus:border-[#10b981] transition-all" />
                        <input type="email" placeholder="Email Address" className="w-full p-5 bg-white/5 rounded-2xl border border-white/10 text-white outline-none focus:border-[#10b981] transition-all" />
                        <textarea rows={4} placeholder="Project scale, location, and vision..." className="w-full p-5 bg-white/5 rounded-2xl border border-white/10 text-white outline-none focus:border-[#10b981] transition-all resize-none"></textarea>
                        <button className="w-full bg-[#10b981] text-white py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-white hover:text-[#064e3b] transition-all flex items-center justify-center gap-3 shadow-xl">
                           Initiate Consultation <ArrowRight className="w-5 h-5" />
                        </button>
                     </form>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* NEW SECTION: Technical Standards */}
      <section className="py-24 bg-emerald-50/30">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="p-10 bg-white rounded-[40px] shadow-sm border border-emerald-100 flex flex-col items-center text-center">
              <ShieldCheck className="w-16 h-16 text-[#10b981] mb-6" />
              <h4 className="text-xl font-black text-[#064e3b] mb-4 uppercase">Eurocode & GH Standards</h4>
              <p className="text-sm text-gray-500 font-light">Adhering to strict international and local structural standards for total safety.</p>
            </div>
            <div className="p-10 bg-white rounded-[40px] shadow-sm border border-emerald-100 flex flex-col items-center text-center">
              <Ruler className="w-16 h-16 text-[#10b981] mb-6" />
              <h4 className="text-xl font-black text-[#064e3b] mb-4 uppercase">Meticulous Detailing</h4>
              <p className="text-sm text-gray-500 font-light">Sub-millimeter accuracy in our 2D/3D technical drawings and site coordination.</p>
            </div>
            <div className="p-10 bg-white rounded-[40px] shadow-sm border border-emerald-100 flex flex-col items-center text-center">
              <Clipboard className="w-16 h-16 text-[#10b981] mb-6" />
              <h4 className="text-xl font-black text-[#064e3b] mb-4 uppercase">Weekly Site Audits</h4>
              <p className="text-sm text-gray-500 font-light">Regular progress and quality audits to ensure construction matches design intent.</p>
            </div>
          </div>
        </div>
      </section>

      {/* NEW SECTION: Recent Projects in this category */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div>
              <h2 className="text-4xl font-black text-[#064e3b] mb-4 uppercase tracking-tighter leading-none">Relevant <br /> Case Studies</h2>
              <div className="w-24 h-2 bg-[#10b981] rounded-full"></div>
            </div>
            <Link to="/portfolio" className="text-[#10b981] font-black uppercase tracking-widest text-[10px] hover:underline mt-8 md:mt-0">
              View Full Portfolio
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {relevantProjects.map((p) => (
              <Link key={p.id} to={`/project/${p.slug}`} className="group relative rounded-[40px] overflow-hidden aspect-[4/5] shadow-xl block bg-emerald-50">
                <img 
                  src={p.image} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                  alt={p.title} 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#064e3b] via-[#064e3b]/20 to-transparent opacity-80 group-hover:opacity-95 transition-all flex items-end p-10">
                   <div className="text-white transform translate-y-6 group-hover:translate-y-0 transition-transform">
                      <p className="text-[10px] font-black uppercase tracking-widest text-[#10b981] mb-2">{p.location}</p>
                      <h4 className="text-2xl font-bold mb-4">{p.title}</h4>
                      <div className="flex items-center gap-2 text-white font-black text-[10px] uppercase tracking-widest">
                        Case Detail <ExternalLink className="w-4 h-4" />
                      </div>
                   </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* The Process */}
      {service.process && (
        <section className="py-24 bg-emerald-50/50 relative overflow-hidden">
           <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#10b981]/20 to-transparent"></div>
           <div className="container mx-auto px-6">
              <div className="text-center mb-20 max-w-2xl mx-auto">
                 <h2 className="text-4xl font-black text-[#064e3b] mb-6 uppercase tracking-tighter">The Tsalach Methodology</h2>
                 <p className="text-gray-500">A rigorous, proven roadmap ensuring your project moves from vision to reality without structural or aesthetic compromise.</p>
              </div>

              <div className="grid md:grid-cols-4 gap-8">
                 {service.process.map((step) => (
                   <div key={step.step} className="relative group">
                      <div className="text-9xl font-black text-[#064e3b]/5 absolute -top-12 -left-6 pointer-events-none group-hover:text-[#10b981]/10 transition-colors">
                         {step.step}
                      </div>
                      <div className="relative z-10 bg-white p-10 rounded-[40px] shadow-sm border border-emerald-100 group-hover:border-[#10b981] transition-all h-full hover:shadow-2xl">
                         <h4 className="text-2xl font-black text-[#064e3b] mb-6 tracking-tight">{step.title}</h4>
                         <p className="text-gray-500 text-sm leading-relaxed font-light">{step.description}</p>
                      </div>
                   </div>
                 ))}
              </div>
           </div>
        </section>
      )}
    </div>
  );
};

export default ServiceDetailPage;

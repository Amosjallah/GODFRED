
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { PROJECTS } from '../constants';
import { Calendar, MapPin, User, CheckCircle, ArrowLeft, Share2, ZoomIn } from 'lucide-react';

const ProjectDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = PROJECTS.find(p => p.slug === slug);

  if (!project) return (
    <div className="py-60 text-center bg-emerald-50 h-screen">
      <h2 className="text-4xl font-bold text-[#064e3b]">Project Not Found</h2>
      <p className="text-gray-500 mt-4">The project you are looking for might have been archived or moved.</p>
      <Link to="/portfolio" className="bg-[#064e3b] text-white px-8 py-3 rounded-full mt-10 inline-block font-bold">Return to Portfolio</Link>
    </div>
  );

  return (
    <div className="page-enter bg-white">
      {/* Immersive Header */}
      <section className="relative h-[80vh] min-h-[600px] overflow-hidden">
        <img 
          src={project.image} 
          className="w-full h-full object-cover" 
          alt={project.title} 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-[#064e3b] flex items-end">
          <div className="container mx-auto px-6 pb-20">
             <Link to="/portfolio" className="inline-flex items-center gap-2 text-white/80 mb-8 hover:text-[#10b981] transition-colors font-bold uppercase tracking-widest text-xs">
                <ArrowLeft className="w-4 h-4" /> Back to Portfolio
             </Link>
             <div className="flex items-center gap-4 mb-4">
                <span className="px-4 py-1 bg-[#10b981] text-white text-[10px] font-black uppercase tracking-widest rounded-full">
                   {project.category}
                </span>
                <span className="text-white/60 text-xs font-bold uppercase tracking-[0.2em]">
                   Project ID: PRJ-00{project.id}
                </span>
             </div>
             <h1 className="text-5xl md:text-8xl font-black text-white leading-tight uppercase tracking-tighter">
                {project.title}
             </h1>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
           <div className="grid lg:grid-cols-12 gap-20">
              {/* Detailed Overview */}
              <div className="lg:col-span-8 space-y-12">
                 <div>
                    <h2 className="text-3xl font-bold text-[#064e3b] mb-8 flex items-center gap-4">
                       <span className="w-12 h-[2px] bg-[#10b981]"></span>
                       Project Narrative
                    </h2>
                    <p className="text-gray-600 text-xl leading-relaxed font-light">
                       {project.fullDescription || project.description}
                    </p>
                 </div>
                 
                 {project.gallery && project.gallery.length > 0 && (
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
                      {project.gallery.map((img, i) => (
                        <div key={i} className="group relative overflow-hidden rounded-3xl shadow-xl aspect-video cursor-pointer">
                           <img src={img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={`Gallery ${i}`} />
                           <div className="absolute inset-0 bg-[#064e3b]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                              <ZoomIn className="text-white w-10 h-10" />
                           </div>
                        </div>
                      ))}
                   </div>
                 )}

                 <div className="bg-emerald-50 rounded-[40px] p-12 border border-emerald-100 mt-20">
                    <h3 className="text-2xl font-bold text-[#064e3b] mb-6">Innovative Solutions</h3>
                    <p className="text-gray-600 mb-8">
                       Every TSALACH project involves solving complex architectural and structural puzzles. For {project.title}, our team focused on optimizing spatial flow while ensuring the highest structural safety standards under local conditions.
                    </p>
                    <div className="grid sm:grid-cols-2 gap-6">
                       {['Sustainability Focused', 'Structural Precision', 'Climate-Responsive', 'Material Innovation'].map(feat => (
                         <div key={feat} className="flex items-center gap-3">
                            <CheckCircle className="text-[#10b981] w-5 h-5" />
                            <span className="font-bold text-[#064e3b]">{feat}</span>
                         </div>
                       ))}
                    </div>
                 </div>
              </div>

              {/* Sidebar Info */}
              <div className="lg:col-span-4">
                 <div className="sticky top-32 space-y-8">
                    <div className="bg-white p-10 rounded-[40px] border border-emerald-50 shadow-2xl">
                       <h3 className="text-xl font-bold text-[#064e3b] mb-10 uppercase tracking-widest border-b border-emerald-50 pb-6">Project Details</h3>
                       <div className="space-y-8">
                          {[
                            { icon: MapPin, label: 'Location', value: project.location },
                            { icon: Calendar, label: 'Timeline', value: project.year || '2023-2024' },
                            { icon: User, label: 'Client', value: project.client || 'Private Entity' },
                            { icon: CheckCircle, label: 'Status', value: project.status }
                          ].map((meta, i) => (
                            <div key={i} className="flex items-start gap-5">
                               <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-[#10b981] flex-shrink-0">
                                  <meta.icon className="w-5 h-5" />
                               </div>
                               <div>
                                  <p className="text-[10px] text-gray-400 uppercase font-black tracking-widest mb-1">{meta.label}</p>
                                  <p className="text-lg font-bold text-[#064e3b]">{meta.value}</p>
                               </div>
                            </div>
                          ))}
                       </div>
                       
                       <div className="mt-12 pt-8 border-t border-emerald-50">
                          <button className="w-full flex items-center justify-center gap-2 text-[#10b981] font-bold hover:text-[#064e3b] transition-colors mb-6">
                             <Share2 className="w-4 h-4" /> Share Project
                          </button>
                          <Link 
                             to="/contact" 
                             className="block w-full bg-[#064e3b] text-white text-center py-5 rounded-2xl font-bold hover:bg-[#10b981] transition-all shadow-xl uppercase tracking-widest text-sm"
                          >
                             Enquire Now
                          </Link>
                       </div>
                    </div>

                    <div className="p-8 bg-emerald-900 rounded-[40px] text-white">
                       <h4 className="font-bold text-lg mb-4">Want something similar?</h4>
                       <p className="text-emerald-100/60 text-sm mb-6 leading-relaxed">
                          We can adapt the design principles used in this project to suit your specific site and requirements.
                       </p>
                       <Link to="/contact" className="text-[#10b981] font-bold underline hover:text-white transition-colors">
                          Book a Consultation
                       </Link>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetailPage;

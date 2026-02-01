
import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import { Link } from 'react-router-dom';
import { ExternalLink, Search, Filter } from 'lucide-react';

const PortfolioPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const categories = ['All', 'Residential', 'Commercial', 'Mixed-Use'];

  const filtered = PROJECTS.filter(p => {
    const matchesCategory = activeCategory === 'All' || p.category === activeCategory;
    const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          p.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="page-enter">
      {/* Hero Section */}
      <section className="relative py-48 bg-[#064e3b] overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto px-6 text-center text-white relative z-10">
          <h1 className="text-5xl md:text-8xl font-black mb-6 uppercase tracking-tighter">Our <span className="text-[#10b981]">Portfolio</span></h1>
          <p className="text-emerald-100 max-w-2xl mx-auto text-lg md:text-xl font-light">
            A visual anthology of architectural innovation and structural mastery across Ghana.
          </p>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="py-8 bg-white sticky top-[64px] md:top-[72px] z-40 shadow-xl border-b border-emerald-50">
        <div className="container mx-auto px-6">
           <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
              <div className="flex items-center gap-4 overflow-x-auto w-full lg:w-auto pb-4 lg:pb-0 no-scrollbar">
                <Filter className="w-5 h-5 text-[#064e3b] hidden lg:block" />
                {categories.map(c => (
                  <button
                    key={c}
                    onClick={() => setActiveCategory(c)}
                    className={`px-8 py-3 rounded-full font-bold text-sm uppercase tracking-widest transition-all whitespace-nowrap ${
                      activeCategory === c 
                      ? 'bg-[#10b981] text-white shadow-lg scale-105' 
                      : 'bg-emerald-50 text-emerald-800 hover:bg-emerald-100'
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
              <div className="relative w-full lg:w-96">
                 <input 
                    type="text" 
                    placeholder="Search by project name or location..." 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-emerald-50/50 border border-emerald-100 rounded-full py-4 px-12 outline-none focus:ring-2 focus:ring-[#10b981] transition-all" 
                 />
                 <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-emerald-300" />
              </div>
           </div>
        </div>
      </section>

      {/* Project Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
           {filtered.length > 0 ? (
             <div className="grid md:grid-cols-2 gap-16">
                {filtered.map((p, idx) => (
                  <Link to={`/project/${p.slug}`} key={p.id} className="group block">
                    <div className="relative overflow-hidden rounded-[40px] h-[500px] md:h-[600px] mb-10 shadow-2xl bg-emerald-100">
                      <img 
                        src={p.image} 
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                        alt={p.title} 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#064e3b] via-transparent to-transparent opacity-80 group-hover:opacity-95 transition-opacity flex items-end p-12">
                         <div className="text-white transform transition-transform duration-500 group-hover:-translate-y-4">
                            <div className="flex items-center gap-3 mb-4">
                               <span className="w-10 h-[2px] bg-[#10b981]"></span>
                               <p className="text-[#10b981] font-black uppercase tracking-[0.3em] text-xs">{p.category} | {p.location}</p>
                            </div>
                            <h3 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">{p.title}</h3>
                            <div className="inline-flex items-center gap-3 font-bold text-sm uppercase tracking-widest bg-white/10 backdrop-blur-md px-6 py-3 rounded-full hover:bg-[#10b981] transition-all">
                               View Case Study <ExternalLink className="w-4 h-4" />
                            </div>
                         </div>
                      </div>
                      <div className="absolute top-8 right-8 w-16 h-16 bg-white rounded-full flex items-center justify-center text-[#064e3b] font-black text-xl shadow-xl transform rotate-12 group-hover:rotate-0 transition-transform">
                         {String(idx + 1).padStart(2, '0')}
                      </div>
                    </div>
                  </Link>
                ))}
             </div>
           ) : (
             <div className="text-center py-40">
                <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-6 text-emerald-200">
                   <Search className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-[#064e3b]">No projects found</h3>
                <p className="text-gray-500 mt-2">Try adjusting your filters or search terms.</p>
                <button 
                  onClick={() => {setActiveCategory('All'); setSearchQuery('');}}
                  className="mt-8 text-[#10b981] font-bold underline"
                >
                  Reset All Filters
                </button>
             </div>
           )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#064e3b] relative overflow-hidden">
        <div className="container mx-auto px-6 text-center relative z-10">
           <h2 className="text-4xl font-bold text-white mb-8">Have a vision for your next project?</h2>
           <Link 
             to="/contact" 
             className="inline-block bg-[#10b981] text-white px-12 py-5 rounded-full font-bold text-lg hover:bg-white hover:text-[#064e3b] transition-all shadow-2xl"
           >
             Start a Consultation
           </Link>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;

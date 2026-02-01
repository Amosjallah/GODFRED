
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PROJECTS } from '../constants';
import { ExternalLink } from 'lucide-react';

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Residential', 'Commercial', 'Mixed-Use'];

  const filteredProjects = filter === 'All' 
    ? PROJECTS.slice(0, 4) // Show only first 4 on home
    : PROJECTS.filter(p => p.category === filter);

  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-bold text-[#064e3b] mb-4">Our Featured Projects</h2>
            <div className="w-24 h-1 bg-[#10b981] mb-6"></div>
          </div>
          <div className="flex flex-wrap gap-2 mb-6">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  filter === cat 
                    ? 'bg-[#064e3b] text-white shadow-lg' 
                    : 'bg-emerald-50 text-emerald-800 hover:bg-emerald-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <Link 
              to={`/project/${project.slug}`}
              key={project.id} 
              className="group relative overflow-hidden rounded-3xl h-[400px] shadow-lg block"
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#064e3b] via-transparent to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-300"></div>
              
              <div className="absolute bottom-0 left-0 p-8 transform translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <p className="text-[#10b981] font-bold mb-2 uppercase tracking-widest text-xs">{project.category} | {project.location}</p>
                <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-emerald-50 text-sm mb-4 line-clamp-2">{project.description}</p>
                <div className="flex items-center gap-2 text-white font-bold text-sm">
                   View Project Details <ExternalLink className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Link 
            to="/portfolio"
            className="inline-block border-2 border-[#064e3b] text-[#064e3b] px-10 py-4 rounded-full font-bold hover:bg-[#064e3b] hover:text-white transition-all"
          >
            See Full Portfolio
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

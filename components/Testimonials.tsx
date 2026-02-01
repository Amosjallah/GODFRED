
import React from 'react';
import { Quote } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-[#064e3b] text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
          <div className="w-24 h-1 bg-[#10b981] mx-auto mb-6"></div>
          <p className="text-emerald-100 max-w-2xl mx-auto">
            Trust is the foundation of our business. Hear from some of the people who have trusted us with their biggest investments.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="bg-emerald-900/50 p-8 rounded-2xl border border-emerald-800 relative hover:transform hover:-translate-y-2 transition-all duration-300">
              <Quote className="absolute top-6 right-6 w-10 h-10 text-emerald-800 opacity-50" />
              <div className="flex items-center gap-4 mb-6">
                <img src={t.image} alt={t.name} className="w-16 h-16 rounded-full border-2 border-[#10b981] object-cover" />
                <div>
                  <h4 className="font-bold text-lg leading-tight">{t.name}</h4>
                  <p className="text-emerald-300 text-sm">{t.role}</p>
                </div>
              </div>
              <p className="italic text-emerald-50 leading-relaxed mb-4">"{t.content}"</p>
              <div className="text-[#10b981] text-xs font-bold uppercase tracking-widest">
                Project: {t.projectType}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

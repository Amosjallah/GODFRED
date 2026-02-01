
import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES, ICON_MAP } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-[#f0fdf4]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#064e3b] mb-4">Our Professional Services</h2>
          <div className="w-24 h-1 bg-[#10b981] mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            From initial survey to final construction, we offer a comprehensive suite of services to turn your architectural dreams into structural realities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <Link 
              to={`/services/${service.id}`}
              key={service.id} 
              className="group p-8 bg-white rounded-2xl hover:bg-[#064e3b] hover:text-white transition-all duration-500 shadow-sm hover:shadow-2xl border border-emerald-50 hover:border-transparent cursor-pointer block"
            >
              <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center text-[#064e3b] mb-6 group-hover:bg-[#10b981] group-hover:text-white transition-all duration-300 shadow-sm">
                {ICON_MAP[service.icon]}
              </div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-600 group-hover:text-emerald-50 transition-colors leading-relaxed">
                {service.description}
              </p>
              <div className="mt-6 flex items-center text-[#064e3b] group-hover:text-[#10b981] font-bold">
                Explore Process 
                <span className="ml-2 group-hover:translate-x-2 transition-transform">→</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

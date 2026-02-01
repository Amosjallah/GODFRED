
import React from 'react';
import { MapPin } from 'lucide-react';
import { LOCATIONS } from '../constants';

const Locations: React.FC = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-[#064e3b] mb-6">Regional Hubs</h2>
            <p className="text-gray-600 mb-8 text-lg">
              We operate across the major commercial and residential hearts of Ghana. 
              Our strategically located offices ensure that we are always close to your 
              project site for inspections and meetings.
            </p>
            <div className="space-y-6">
              {LOCATIONS.map((loc) => (
                <div key={loc.name} className="flex items-center gap-6 p-6 rounded-2xl bg-emerald-50 border border-emerald-100 hover:border-[#10b981] transition-colors">
                  <div className="w-12 h-12 rounded-full bg-[#064e3b] flex items-center justify-center text-[#10b981]">
                    <MapPin />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-[#064e3b]">{loc.name}</h4>
                    <p className="text-gray-500">{loc.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="bg-[#064e3b] rounded-3xl p-2 shadow-2xl overflow-hidden aspect-square flex items-center justify-center border-4 border-emerald-900/10">
              {/* This is a placeholder for an interactive map. We use a stylized map representation */}
              <div className="relative w-full h-full bg-emerald-900 overflow-hidden flex items-center justify-center">
                <svg viewBox="0 0 200 200" className="w-full h-full opacity-20 fill-[#10b981]">
                  <path d="M100 0 L150 50 L150 150 L100 200 L50 150 L50 50 Z" />
                </svg>
                {/* Visual markers */}
                <div className="absolute top-[30%] left-[45%] group cursor-pointer">
                  <div className="w-4 h-4 bg-[#10b981] rounded-full animate-ping"></div>
                  <div className="w-4 h-4 bg-[#10b981] rounded-full absolute top-0 shadow-lg"></div>
                  <span className="absolute left-6 top-1/2 -translate-y-1/2 bg-white text-[#064e3b] font-bold px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">Accra</span>
                </div>
                <div className="absolute top-[45%] left-[60%] group cursor-pointer">
                  <div className="w-4 h-4 bg-[#10b981] rounded-full animate-ping"></div>
                  <div className="w-4 h-4 bg-[#10b981] rounded-full absolute top-0 shadow-lg"></div>
                  <span className="absolute left-6 top-1/2 -translate-y-1/2 bg-white text-[#064e3b] font-bold px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">Kumasi</span>
                </div>
                <div className="absolute top-[60%] left-[40%] group cursor-pointer">
                  <div className="w-4 h-4 bg-[#10b981] rounded-full animate-ping"></div>
                  <div className="w-4 h-4 bg-[#10b981] rounded-full absolute top-0 shadow-lg"></div>
                  <span className="absolute left-6 top-1/2 -translate-y-1/2 bg-white text-[#064e3b] font-bold px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">Koforidua</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Locations;

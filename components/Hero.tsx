
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight, ChevronLeft, Home, Building, Sparkles } from 'lucide-react';

const slides = [
  {
    id: 1,
    title: "IMAGINATION SHAPES REALITY",
    subtitle: "The Signature Bungalow Series",
    description: "Discover the Airban A-108—a masterclass in minimalist living and structural elegance.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2000",
    cta: "Explore Bungalows",
    icon: <Home className="w-5 h-5" />
  },
  {
    id: 2,
    title: "LUXURY WITHOUT LIMITS",
    subtitle: "Premium Residential Villas",
    description: "High-end 2-story residences featuring neon-edge designs and photorealistic visualizations.",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=2000",
    cta: "View Luxury Villas",
    icon: <Sparkles className="w-5 h-5" />
  },
  {
    id: 3,
    title: "URBAN EXCELLENCE",
    subtitle: "Multi-Story Commercial Blocks",
    description: "Precision-engineered commercial and mixed-use developments across Ghana's skylines.",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=2000",
    cta: "Our Commercial Portfolio",
    icon: <Building className="w-5 h-5" />
  }
];

const Hero: React.FC = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-[#064e3b]">
      {/* Slides */}
      {slides.map((slide, idx) => (
        <div 
          key={slide.id}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${idx === current ? 'opacity-100 scale-100' : 'opacity-0 scale-110 pointer-events-none'}`}
        >
          <div 
            className="absolute inset-0 z-0 bg-cover bg-center"
            style={{ backgroundImage: `url("${slide.image}")` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#064e3b]/95 via-[#064e3b]/70 to-transparent"></div>
            <div className="absolute inset-0 bg-black/30 mix-blend-overlay"></div>
          </div>

          <div className="container mx-auto px-6 relative z-10 h-full flex flex-col justify-center">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-3 bg-[#10b981]/20 backdrop-blur-md border border-[#10b981]/30 px-6 py-3 rounded-full text-[#10b981] text-xs font-black uppercase tracking-[0.3em] mb-10 transform translate-y-4 animate-fade-in-up">
                {slide.icon} {slide.subtitle}
              </div>
              
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white mb-8 leading-[0.85] tracking-tighter animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                {slide.title.split(' ').map((word, i) => (
                  <span key={i} className={word === 'REALITY' || word === 'LIMITS' || word === 'EXCELLENCE' ? 'text-[#10b981] block italic' : 'block'}>
                    {word}
                  </span>
                ))}
              </h1>
              
              <p className="text-xl md:text-2xl text-emerald-100/80 mb-12 max-w-2xl font-light leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                {slide.description}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                <Link
                  to="/portfolio"
                  className="group bg-[#10b981] text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white hover:text-[#064e3b] transition-all shadow-2xl flex items-center justify-center gap-3"
                >
                  {slide.cta} <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/contact"
                  className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white hover:text-[#064e3b] transition-all flex items-center justify-center"
                >
                  Book Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Controls */}
      <div className="absolute bottom-12 right-6 md:right-12 z-20 flex gap-4">
        <button 
          onClick={prevSlide}
          className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-[#10b981] transition-all"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button 
          onClick={nextSlide}
          className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-[#10b981] transition-all"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-12 left-6 md:left-12 z-20 flex gap-3">
        {slides.map((_, idx) => (
          <button 
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`h-1.5 rounded-full transition-all duration-500 ${idx === current ? 'w-12 bg-[#10b981]' : 'w-4 bg-white/30'}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;


import React from 'react';
import { Phone, Mail, MapPin, Clock, Globe, Send, MessageCircle } from 'lucide-react';
import { CONTACT_INFO, LOCATIONS } from '../constants';

const ContactPage: React.FC = () => {
  return (
    <div className="page-enter">
      {/* Hero Section */}
      <section className="relative py-40 bg-[#064e3b] overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0 100 L100 0 L100 100 Z" fill="#10b981" />
          </svg>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6">Connect With Us</h1>
          <p className="text-xl text-emerald-100 max-w-2xl mx-auto">
            Your architectural masterpiece begins with a simple conversation. Reach out to our team of experts today.
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            
            {/* Contact Details Column */}
            <div className="lg:col-span-1 space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-[#064e3b] mb-6">Contact Details</h2>
                <p className="text-gray-500 mb-10 leading-relaxed">
                  Have a specific inquiry about land surveying, structural audits, or a new construction project? Use the details below.
                </p>
              </div>

              <div className="space-y-6">
                <a href={`tel:${CONTACT_INFO.phone}`} className="flex items-center gap-6 p-6 rounded-2xl bg-emerald-50 border border-emerald-100 hover:border-[#10b981] transition-all group">
                  <div className="w-14 h-14 rounded-xl bg-[#064e3b] text-white flex items-center justify-center group-hover:bg-[#10b981] transition-colors">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-emerald-600 uppercase tracking-widest">Call or WhatsApp</p>
                    <p className="text-lg font-bold text-[#064e3b]">{CONTACT_INFO.phone}</p>
                  </div>
                </a>

                <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center gap-6 p-6 rounded-2xl bg-emerald-50 border border-emerald-100 hover:border-[#10b981] transition-all group">
                  <div className="w-14 h-14 rounded-xl bg-[#064e3b] text-white flex items-center justify-center group-hover:bg-[#10b981] transition-colors">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-xs font-bold text-emerald-600 uppercase tracking-widest">Email Us</p>
                    <p className="text-sm font-bold text-[#064e3b] truncate">{CONTACT_INFO.email}</p>
                  </div>
                </a>

                <div className="flex items-center gap-6 p-6 rounded-2xl bg-emerald-50 border border-emerald-100">
                  <div className="w-14 h-14 rounded-xl bg-[#064e3b] text-white flex items-center justify-center">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-emerald-600 uppercase tracking-widest">Business Hours</p>
                    <p className="text-lg font-bold text-[#064e3b]">Mon - Sat: 8am - 6pm</p>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-gray-100">
                <h4 className="font-bold text-[#064e3b] mb-4">Follow Our Progress</h4>
                <div className="flex gap-4">
                  {['Facebook', 'Instagram', 'LinkedIn'].map(social => (
                    <a key={social} href="#" className="w-10 h-10 rounded-full bg-emerald-100 text-[#064e3b] flex items-center justify-center hover:bg-[#064e3b] hover:text-white transition-all">
                      <span className="sr-only">{social}</span>
                      <Globe className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form Column */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-[40px] shadow-2xl border border-emerald-50 p-8 md:p-12">
                <h3 className="text-2xl font-bold text-[#064e3b] mb-8">Send Us a Message</h3>
                <form className="space-y-6" onSubmit={e => e.preventDefault()}>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-emerald-800 uppercase tracking-wide">Full Name</label>
                      <input type="text" placeholder="John Doe" className="w-full p-4 bg-emerald-50/50 rounded-xl border border-emerald-100 focus:ring-2 focus:ring-[#10b981] outline-none" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-emerald-800 uppercase tracking-wide">Phone Number</label>
                      <input type="tel" placeholder="+233..." className="w-full p-4 bg-emerald-50/50 rounded-xl border border-emerald-100 focus:ring-2 focus:ring-[#10b981] outline-none" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-emerald-800 uppercase tracking-wide">Email Address</label>
                    <input type="email" placeholder="john@example.com" className="w-full p-4 bg-emerald-50/50 rounded-xl border border-emerald-100 focus:ring-2 focus:ring-[#10b981] outline-none" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-emerald-800 uppercase tracking-wide">Project Category</label>
                    <select className="w-full p-4 bg-emerald-50/50 rounded-xl border border-emerald-100 focus:ring-2 focus:ring-[#10b981] outline-none appearance-none">
                      <option>Architectural Design</option>
                      <option>Structural Engineering</option>
                      <option>Construction Works</option>
                      <option>Land Surveying</option>
                      <option>Other Consultation</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-emerald-800 uppercase tracking-wide">Detailed Inquiry</label>
                    <textarea rows={5} placeholder="Describe your project vision, location, and requirements..." className="w-full p-4 bg-emerald-50/50 rounded-xl border border-emerald-100 focus:ring-2 focus:ring-[#10b981] outline-none resize-none"></textarea>
                  </div>

                  <button className="w-full bg-[#064e3b] text-white py-5 rounded-2xl font-bold text-lg hover:bg-[#10b981] transition-all flex items-center justify-center gap-3 shadow-xl transform active:scale-95">
                    Submit Project Inquiry <Send className="w-5 h-5" />
                  </button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Regional Hubs (Re-use logic) */}
      <section className="py-24 bg-emerald-50/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#064e3b] mb-4">Our Regional Presence</h2>
            <p className="text-gray-600">Find us in the business hearts of Ghana.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {LOCATIONS.map((loc) => (
              <div key={loc.name} className="bg-white p-8 rounded-3xl shadow-lg border border-emerald-100">
                <div className="w-12 h-12 rounded-full bg-[#064e3b] flex items-center justify-center text-white mb-6">
                  <MapPin className="w-6 h-6" />
                </div>
                <h4 className="text-2xl font-bold text-[#064e3b] mb-2">{loc.name}</h4>
                <p className="text-sm text-emerald-600 font-bold mb-4 uppercase tracking-widest">{loc.description}</p>
                <p className="text-gray-500 mb-6">{loc.address}</p>
                <div className="flex items-center gap-2 text-[#064e3b] font-bold">
                  <Phone className="w-4 h-4" /> {loc.phone}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instant WhatsApp Help */}
      <section className="py-24 bg-[#064e3b]">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto text-white">
            <h2 className="text-4xl font-bold mb-6">Need Immediate Assistance?</h2>
            <p className="text-xl text-emerald-100 mb-10">
              Start a real-time conversation with our consultants via WhatsApp for quick questions.
            </p>
            <a 
              href={`https://wa.me/${CONTACT_INFO.phone.replace(/[^0-9]/g, '')}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#10b981] px-10 py-5 rounded-full font-bold text-xl hover:scale-105 transition-all shadow-2xl"
            >
              <MessageCircle className="w-6 h-6" /> Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;

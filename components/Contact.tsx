
import React from 'react';
import { Phone, Mail, Clock, Send } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="bg-[#f0fdf4] rounded-[40px] overflow-hidden shadow-2xl border border-emerald-100">
          <div className="grid lg:grid-cols-2">
            <div className="bg-[#064e3b] p-12 lg:p-20 text-white flex flex-col justify-between">
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold mb-8">Let's Build <br />Your Vision</h2>
                <p className="text-emerald-100 text-lg mb-12">
                  Ready to start? Fill out the form or reach out to us via our direct channels. 
                  Our team typically responds within 24 business hours.
                </p>

                <div className="space-y-8">
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 bg-emerald-900 rounded-xl flex items-center justify-center text-[#10b981]">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm text-emerald-300">Phone & WhatsApp</p>
                      <p className="text-xl font-bold text-white">{CONTACT_INFO.phone}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 bg-emerald-900 rounded-xl flex items-center justify-center text-[#10b981]">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div className="overflow-hidden">
                      <p className="text-sm text-emerald-300">Email Address</p>
                      <p className="text-lg md:text-xl font-bold text-white break-all">{CONTACT_INFO.email}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 bg-emerald-900 rounded-xl flex items-center justify-center text-[#10b981]">
                      <Clock className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm text-emerald-300">Working Hours</p>
                      <p className="text-xl font-bold text-white">Mon - Sat: 8am - 6pm</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-16 flex gap-6 text-sm font-bold">
                <a href="#" className="hover:text-[#10b981] transition-colors">LinkedIn</a>
                <a href="#" className="hover:text-[#10b981] transition-colors">Instagram</a>
                <a href="#" className="hover:text-[#10b981] transition-colors">Facebook</a>
              </div>
            </div>

            <div className="p-12 lg:p-20 bg-white">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-[#064e3b] mb-2 uppercase tracking-wide">Name</label>
                    <input type="text" placeholder="John Doe" className="w-full bg-emerald-50 border-b-2 border-emerald-100 focus:border-[#10b981] outline-none py-3 px-4 transition-all" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-[#064e3b] mb-2 uppercase tracking-wide">Phone</label>
                    <input type="tel" placeholder="+233..." className="w-full bg-emerald-50 border-b-2 border-emerald-100 focus:border-[#10b981] outline-none py-3 px-4 transition-all" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-[#064e3b] mb-2 uppercase tracking-wide">Email</label>
                  <input type="email" placeholder="john@example.com" className="w-full bg-emerald-50 border-b-2 border-emerald-100 focus:border-[#10b981] outline-none py-3 px-4 transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-[#064e3b] mb-2 uppercase tracking-wide">Service Required</label>
                  <select className="w-full bg-emerald-50 border-b-2 border-emerald-100 focus:border-[#10b981] outline-none py-3 px-4 transition-all">
                    <option>Architectural Design</option>
                    <option>Structural Engineering</option>
                    <option>Quantity Surveying</option>
                    <option>General Construction</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-[#064e3b] mb-2 uppercase tracking-wide">Message</label>
                  <textarea rows={4} placeholder="Tell us about your project..." className="w-full bg-emerald-50 border-b-2 border-emerald-100 focus:border-[#10b981] outline-none py-3 px-4 transition-all resize-none"></textarea>
                </div>
                <button className="w-full bg-[#064e3b] text-white font-bold py-5 rounded-xl hover:bg-[#10b981] transition-all flex items-center justify-center gap-3 shadow-lg transform active:scale-95">
                  Send Message <Send className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

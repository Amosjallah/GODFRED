
import React, { useState, useRef, useEffect } from 'react';
import { Sparkles, Send, X, Bot, Loader2, Compass, Building2 } from 'lucide-react';
import { getDesignAdvice } from '../services/geminiService';
import { LOGO_URL } from '../constants';

const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: 'user' | 'bot', text: string}[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [logoError, setLogoError] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input;
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setInput('');
    setIsLoading(true);

    const botResponse = await getDesignAdvice(userMsg);
    setMessages(prev => [...prev, { role: 'bot', text: botResponse || "I'm sorry, I couldn't process that right now." }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      {/* Floating Action Button */}
      {!isOpen && (
        <button 
          onClick={() => setIsOpen(true)}
          className="group relative w-20 h-20 bg-[#064e3b] rounded-full shadow-[0_20px_50px_rgba(6,78,59,0.4)] flex items-center justify-center text-white hover:scale-110 transition-all duration-500 overflow-hidden"
        >
          <div className="absolute inset-0 bg-[#10b981] scale-0 group-hover:scale-100 transition-transform duration-500"></div>
          <Sparkles className="w-10 h-10 relative z-10 animate-pulse" />
          <div className="absolute -top-1 -right-1 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-[10px] font-bold border-2 border-white">1</div>
        </button>
      )}

      {/* Concierge Window */}
      {isOpen && (
        <div className="w-[380px] sm:w-[450px] h-[600px] bg-white rounded-[40px] shadow-[0_40px_100px_rgba(0,0,0,0.2)] flex flex-col overflow-hidden border border-emerald-50 animate-slide-up">
          {/* Header */}
          <div className="bg-[#064e3b] p-8 text-white relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full translate-x-12 -translate-y-12"></div>
            <div className="flex justify-between items-center relative z-10">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center border border-white/20 p-1">
                  {!logoError ? (
                    <img src={LOGO_URL} alt="Logo" className="w-full h-full object-contain" onError={() => setLogoError(true)} />
                  ) : (
                    <Compass className="w-8 h-8 text-[#064e3b]" />
                  )}
                </div>
                <div>
                  <h4 className="text-xl font-bold leading-none tracking-tight">Design Concierge</h4>
                  <p className="text-[9px] text-emerald-300/80 uppercase tracking-[0.3em] font-black mt-2">TSALACH AI ASSISTANT</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors">
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Chat History */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-8 space-y-6 bg-emerald-50/20">
            {messages.length === 0 && (
              <div className="text-center py-10 space-y-4">
                <Bot className="w-12 h-12 text-[#10b981]/20 mx-auto" />
                <p className="text-gray-400 text-sm italic max-w-[200px] mx-auto">
                  "Welcome to TSALACH DESIGNS. How can our architectural expertise assist you today?"
                </p>
                <div className="flex flex-wrap justify-center gap-2 pt-4">
                  {['Building costs in Accra?', 'Structural audit?', 'Project timelines?'].map(tag => (
                    <button 
                      key={tag}
                      onClick={() => setInput(tag)}
                      className="px-4 py-2 bg-white border border-emerald-100 rounded-full text-[10px] font-bold text-[#064e3b] hover:bg-[#10b981] hover:text-white transition-all shadow-sm"
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
            )}
            {messages.map((m, idx) => (
              <div key={idx} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-5 rounded-3xl ${
                  m.role === 'user' 
                    ? 'bg-[#064e3b] text-white rounded-tr-none shadow-xl shadow-emerald-900/10' 
                    : 'bg-white text-gray-700 shadow-xl rounded-tl-none border border-emerald-50'
                }`}>
                  <p className="text-sm leading-relaxed">{m.text}</p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white p-5 rounded-3xl shadow-lg rounded-tl-none flex items-center gap-3 border border-emerald-50">
                  <Loader2 className="w-5 h-5 animate-spin text-[#10b981]" />
                  <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Architectural Insight...</span>
                </div>
              </div>
            )}
          </div>

          {/* Input Area */}
          <div className="p-6 bg-white border-t border-emerald-50">
            <div className="flex gap-4 items-center bg-emerald-50/50 p-2 rounded-2xl border border-emerald-100">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask about your vision..."
                className="flex-1 bg-transparent px-4 py-3 text-sm focus:outline-none placeholder:text-gray-400 font-medium"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading}
                className="w-12 h-12 bg-[#064e3b] text-white rounded-xl flex items-center justify-center disabled:opacity-50 hover:bg-[#10b981] transition-all"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
            <p className="text-[8px] text-center text-gray-300 mt-4 uppercase tracking-[0.2em] font-bold">
              Secure Design Consultation
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIAssistant;

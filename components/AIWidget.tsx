
import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Loader2, Sparkles } from 'lucide-react';
import { askEyeAssistant } from '../services/geminiService';

const AIWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [messages, setMessages] = useState<{role: 'user' | 'ai', content: string}[]>([
    {role: 'ai', content: 'Hello! I am your SN Eye Assistant. How can I help you with your vision today?'}
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!query.trim()) return;
    
    const userMessage = query;
    setQuery('');
    setMessages(prev => [...prev, {role: 'user', content: userMessage}]);
    setIsLoading(true);

    const response = await askEyeAssistant(userMessage);
    setMessages(prev => [...prev, {role: 'ai', content: response}]);
    setIsLoading(false);
  };

  return (
    <div className={`fixed right-4 sm:right-6 z-[9998] transition-all duration-300 ${isOpen ? 'bottom-20 lg:bottom-6' : 'bottom-20 lg:bottom-6'}`}>
      {isOpen ? (
        <div className="bg-white w-[calc(100vw-32px)] sm:w-[400px] h-[500px] max-h-[70vh] rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-gray-100 animate-fade-up">
          {/* Header */}
          <div className="bg-navy p-4 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="bg-tealAccent p-1.5 rounded-lg">
                <Sparkles size={18} className="text-white" />
              </div>
              <div>
                <h4 className="text-white font-bold text-sm">SN Eye Assistant</h4>
                <div className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span>
                  <span className="text-[10px] text-teal-200 uppercase tracking-widest font-bold">Online</span>
                </div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white/70 hover:text-white">
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-warmGray/50 custom-scrollbar">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 rounded-2xl text-sm ${
                  m.role === 'user' 
                    ? 'bg-navy text-white rounded-tr-none shadow-lg shadow-navy/10' 
                    : 'bg-white text-navy border border-gray-200 rounded-tl-none'
                }`}>
                  {m.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white p-3 rounded-2xl rounded-tl-none border border-gray-200 flex gap-2">
                  <Loader2 size={16} className="animate-spin text-tealAccent" />
                  <span className="text-xs text-gray-500">Thinking...</span>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-4 bg-white border-t border-gray-100">
            <div className="relative flex items-center">
              <input 
                type="text" 
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask SN Assistant..."
                className="w-full bg-warmGray border-0 rounded-full py-3 px-5 pr-12 text-sm focus:ring-2 focus:ring-tealAccent outline-none"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading}
                className="absolute right-2 p-2 bg-tealAccent text-white rounded-full hover:bg-navy transition-colors disabled:opacity-50"
              >
                <Send size={16} />
              </button>
            </div>
            <p className="text-[10px] text-center text-gray-400 mt-2 italic">
              AI info only. Always consult SN doctors for medical advice.
            </p>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="w-14 h-14 sm:w-16 sm:h-16 bg-tealAccent hover:bg-navy text-white rounded-full shadow-2xl flex items-center justify-center transition-all hover:scale-110 active:scale-95 group"
        >
          <MessageSquare className="group-hover:hidden" size={24} />
          <Sparkles className="hidden group-hover:block" size={24} />
          <div className="absolute -top-1 -right-1 w-5 h-5 bg-navy rounded-full border-2 border-white flex items-center justify-center">
            <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
          </div>
        </button>
      )}
    </div>
  );
};

export default AIWidget;


import React from 'react';
import { Phone, MessageCircle, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const MobileStickyActions: React.FC = () => {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 w-full z-[999] bg-white border-t border-gray-200 shadow-[0_-4px_20px_rgba(0,0,0,0.1)] flex items-center h-16 safe-area-bottom">
      <a 
        href="tel:+918277297325" 
        className="flex-1 flex flex-col items-center justify-center text-navy gap-1"
      >
        <Phone size={20} />
        <span className="text-[10px] font-bold uppercase tracking-wider">Call</span>
      </a>
      
      <Link 
        to="/book-appointment" 
        className="flex-[2] h-full flex items-center justify-center bg-tealAccent text-white gap-2 font-bold text-sm"
      >
        <Calendar size={18} />
        Book Appointment
      </Link>
      
      <a 
        href="https://wa.me/918277297325" 
        className="flex-1 flex flex-col items-center justify-center text-successGreen gap-1"
      >
        <MessageCircle size={20} />
        <span className="text-[10px] font-bold uppercase tracking-wider">WhatsApp</span>
      </a>
    </div>
  );
};

export default MobileStickyActions;

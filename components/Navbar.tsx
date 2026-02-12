
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Calendar } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHome = location.pathname === '/';

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-md py-2' : isHome ? 'bg-transparent py-4' : 'bg-white py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center overflow-hidden shadow-sm border border-gray-100">
              <img 
                src="https://i.ibb.co/HpLJkvCk/Gemini-Generated-Image-fil4lkfil4lkfil4-1.png" 
                alt="Satya Nethralaya Logo" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className={`font-heading font-bold text-lg leading-none ${isHome && !scrolled ? 'text-white' : 'text-navy'}`}>
                SATYA NETHRALAYA
              </span>
              <span className={`text-[10px] tracking-widest font-bold ${isHome && !scrolled ? 'text-teal-200' : 'text-tealAccent'}`}>
                LEADING TO LIGHT
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-tealAccent ${
                  isHome && !scrolled ? 'text-white' : 'text-navy'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link to="/book-appointment" className="bg-tealAccent hover:bg-navy text-white px-5 py-2 rounded-full text-sm font-semibold transition-all flex items-center gap-2">
              <Calendar size={16} />
              Book Appointment
            </Link>
          </div>

          {/* Mobile Toggle */}
          <div className="lg:hidden flex items-center space-x-4">
            <a href="tel:+918277297325" className={`${isHome && !scrolled ? 'text-white' : 'text-navy'}`}>
              <Phone size={20} />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`${isHome && !scrolled ? 'text-white' : 'text-navy'}`}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-white z-[100] transition-transform duration-500 transform ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      } lg:hidden`}>
        <div className="p-8 flex flex-col h-full">
          <div className="flex justify-between items-center mb-12">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-tealAccent rounded-full overflow-hidden">
                <img 
                  src="https://i.ibb.co/HpLJkvCk/Gemini-Generated-Image-fil4lkfil4lkfil4-1.png" 
                  alt="Logo" 
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="font-heading font-bold text-navy text-xl tracking-tight">SATYA NETHRALAYA</span>
            </div>
            <button onClick={() => setIsOpen(false)}><X size={32} className="text-navy" /></button>
          </div>
          <div className="flex flex-col space-y-6">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className="text-2xl font-semibold text-navy hover:text-tealAccent"
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="mt-auto space-y-4">
            <Link
              to="/book-appointment"
              onClick={() => setIsOpen(false)}
              className="w-full bg-tealAccent text-white py-4 rounded-xl flex items-center justify-center font-bold text-lg gap-2"
            >
              <Calendar size={20} />
              Book Appointment
            </Link>
            <a
              href="tel:+918277297325"
              className="w-full border-2 border-navy text-navy py-4 rounded-xl flex items-center justify-center font-bold text-lg gap-2"
            >
              <Phone size={20} />
              Call Hospital
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

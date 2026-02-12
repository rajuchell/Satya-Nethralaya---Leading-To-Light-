
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-navy text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center overflow-hidden">
                <img 
                  src="https://i.ibb.co/HpLJkvCk/Gemini-Generated-Image-fil4lkfil4lkfil4-1.png" 
                  alt="Satya Nethralaya Logo" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-xl tracking-tight leading-none">SATYA NETHRALAYA</span>
                <span className="text-[8px] tracking-[0.2em] text-tealAccent font-bold mt-1 uppercase">Leading To Light</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Advanced eye care with precision and compassion. Leading eye hospital in Gangavathi and Koppal district delivering modern vision solutions for all ages.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-tealAccent transition-colors"><Facebook size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-tealAccent transition-colors"><Instagram size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-tealAccent transition-colors"><Twitter size={18} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-heading font-bold mb-6">Explore</h3>
            <ul className="space-y-3">
              {NAV_ITEMS.map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="text-gray-400 hover:text-tealAccent text-sm transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-heading font-bold mb-6">Get in Touch</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="text-tealAccent shrink-0 mt-1" size={18} />
                <span className="text-gray-400 text-sm">
                  Kampli-Bellary Rd, opp. IDFC Bank,<br />
                  Amar Bhagat Singh Nagar,<br />
                  Gangavathi, Karnataka 583227
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="text-tealAccent shrink-0" size={18} />
                <span className="text-gray-400 text-sm">+91 82772 97325</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="text-tealAccent shrink-0" size={18} />
                <span className="text-gray-400 text-sm">contact@satyanethralaya.com</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-lg font-heading font-bold mb-6">Working Hours</h3>
            <div className="flex items-start space-x-3 mb-4">
              <Clock className="text-tealAccent shrink-0 mt-1" size={18} />
              <div className="text-gray-400 text-sm">
                <p className="mb-1">Mon - Sat: 9:30 AM - 7:30 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Satya Nethralaya - Leading To Light. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

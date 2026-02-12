
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  ChevronDown, 
  Star, 
  Award, 
  Activity, 
  Users, 
  CheckCircle2, 
  Play, 
  Microscope,
  Zap,
  ShieldCheck,
  Smartphone,
  Search,
  Phone
} from 'lucide-react';
import { SERVICES, DOCTORS, TESTIMONIALS } from '../constants';
import * as Icons from 'lucide-react';

const Home: React.FC = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="overflow-x-hidden pb-16 lg:pb-0">
      {/* Section 1: Cinematic Hero */}
      <section className="relative h-screen min-h-[600px] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://i.ibb.co/23R4RJpj/Gemini-Generated-Image-wna3evwna3evwna3-1.jpg')] bg-cover bg-center">
          <div className="absolute inset-0 hero-overlay" />
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto animate-fade-up">
          <h1 className="text-3xl sm:text-4xl md:text-7xl font-heading font-bold text-white mb-6 leading-[1.2] md:leading-tight">
            Advanced Eye Care with <br className="hidden md:block" />
            <span className="text-teal-400">Precision & Compassion</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-teal-50/80 mb-8 md:mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            Trusted Eye Care in Gangavathi delivering safe, modern, and affordable vision solutions for all ages.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4 sm:px-0">
            <Link to="/book-appointment" className="w-full sm:w-auto px-8 md:px-10 py-4 bg-tealAccent hover:bg-white hover:text-navy text-white font-bold rounded-full transition-all transform hover:scale-105 shadow-xl text-sm md:text-base">
              Book Appointment
            </Link>
            <a href="tel:+918277297325" className="w-full sm:w-auto px-8 md:px-10 py-4 border-2 border-white/30 hover:border-white text-white font-bold rounded-full transition-all flex items-center justify-center gap-2 text-sm md:text-base">
              Call Now
            </a>
          </div>
        </div>

        <div className="absolute bottom-20 md:bottom-10 left-1/2 -translate-x-1/2 text-white/50 animate-bounce">
          <ChevronDown size={32} />
        </div>
      </section>

      {/* Section 2: Trust Bar */}
      <section className="relative z-20 -mt-10 md:-mt-16 max-w-6xl mx-auto px-4">
        <div className="glass-header rounded-2xl shadow-2xl p-6 md:p-8 grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {[
            { icon: <Star className="text-yellow-400" size={20} />, val: '4.0', label: 'Rating' },
            { icon: <Microscope className="text-tealAccent" size={20} />, val: 'Modern', label: 'Tech' },
            { icon: <Users className="text-tealAccent" size={20} />, val: 'Expert', label: 'Surgeons' },
            { icon: <CheckCircle2 className="text-successGreen" size={20} />, val: '1000+', label: 'Cases' },
          ].map((stat, idx) => (
            <div key={idx} className="text-center group flex flex-col items-center">
              <div className="flex justify-center mb-1 group-hover:scale-110 transition-transform">{stat.icon}</div>
              <div className="text-lg md:text-2xl font-bold text-navy font-heading">{stat.val}</div>
              <div className="text-[10px] md:text-xs text-gray-500 uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 3: About Snapshot */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
            <div className="relative group overflow-hidden rounded-3xl order-2 lg:order-1">
              <img 
                src="https://i.ibb.co/60YxrFcG/satya-netralya-gvt-gangavathi-koppal-hospitals-54aka2zjdn.jpg" 
                alt="Satya Nethralaya Eye Hospital Building" 
                className="w-full aspect-[4/3] md:aspect-auto object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8 bg-white p-4 md:p-6 rounded-2xl shadow-xl max-w-[150px] md:max-w-[200px] border border-gray-100">
                <p className="text-tealAccent font-bold text-2xl md:text-3xl">10+</p>
                <p className="text-navy text-[10px] md:text-xs uppercase tracking-widest font-bold leading-tight">Years of Trust in Gangavathi</p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy mb-4 md:mb-6 leading-tight">Your Vision, <br className="md:hidden" /><span className="text-tealAccent italic">Our Commitment</span></h2>
              <div className="w-16 h-1 bg-tealAccent mb-6 md:mb-8 rounded-full" />
              <p className="text-gray-600 mb-4 md:mb-6 text-sm md:text-base leading-relaxed font-medium">
                Satya Nethralaya is a dedicated eye hospital located in Gangavathi, Koppal, providing comprehensive ophthalmology services for all age groups.
              </p>
              <p className="text-gray-600 mb-6 md:mb-8 text-sm md:text-base leading-relaxed">
                We combine modern diagnostic technology with experienced medical expertise to deliver safe, precise, and patient-centered eye care. From routine eye examinations to advanced microsurgeries, our focus is on accurate diagnosis and compassionate care.
              </p>
              <Link to="/about" className="inline-flex items-center text-tealAccent font-bold hover:gap-4 transition-all group text-sm md:text-base">
                Explore Our Story <ArrowRight size={20} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Services Grid */}
      <section className="py-16 md:py-24 bg-navy relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 transform origin-top pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">Precision Services</h2>
          <p className="text-teal-200/60 max-w-2xl mx-auto text-sm md:text-base">Specialized treatments using advanced medical technology and surgical expertise.</p>
        </div>
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {SERVICES.map((service, idx) => {
            const IconComponent = (Icons as any)[service.icon] || Icons.Eye;
            return (
              <div key={idx} className="group bg-white/5 border border-white/10 p-6 md:p-8 rounded-3xl hover:bg-white transition-all duration-500 transform hover:-translate-y-2">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-tealAccent/20 text-tealAccent rounded-2xl flex items-center justify-center mb-4 md:mb-6 group-hover:bg-navy group-hover:text-white transition-colors">
                  <IconComponent size={28} />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-navy mb-3 md:mb-4 transition-colors">{service.name}</h3>
                <p className="text-gray-400 group-hover:text-gray-600 mb-4 md:mb-6 transition-colors text-xs md:text-sm line-clamp-3">{service.description}</p>
                <Link to={`/services`} className="text-tealAccent font-bold flex items-center gap-2 group-hover:text-navy transition-colors text-sm">
                  Learn More <ArrowRight size={14} />
                </Link>
              </div>
            );
          })}
        </div>
      </section>

      {/* Section 5: Doctor Spotlight */}
      <section className="py-16 md:py-24 bg-warmGray">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {DOCTORS.map((doc, idx) => (
            <div key={idx} className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all group flex flex-col md:flex-row">
              <div className="w-full md:w-[40%] h-[250px] md:h-auto overflow-hidden">
                <img src={doc.portrait} alt={doc.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" />
              </div>
              <div className="w-full md:w-[60%] p-6 md:p-8 flex flex-col justify-center">
                <h3 className="text-xl md:text-2xl font-bold text-navy mb-1">{doc.name}</h3>
                <p className="text-tealAccent text-[10px] md:text-xs font-bold uppercase tracking-wider mb-4 md:mb-6">{doc.role}</p>
                <p className="text-gray-600 text-xs md:text-sm leading-relaxed mb-6 italic line-clamp-3">"{doc.bio.substring(0, 150)}..."</p>
                <div className="space-y-2 mb-6 md:mb-8">
                  {doc.expertise.slice(0, 3).map((exp, i) => (
                    <div key={i} className="flex items-center gap-2 text-[10px] md:text-xs font-medium text-navy/70">
                      <div className="w-1.5 h-1.5 bg-tealAccent rounded-full" />
                      {exp}
                    </div>
                  ))}
                </div>
                <Link to="/doctors" className="w-full inline-block text-center py-3 bg-navy hover:bg-tealAccent text-white rounded-xl transition-colors font-bold text-sm tracking-wide">
                  View Profile
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 6: Technology Showcase */}
      <section className="py-16 md:py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-5xl font-heading font-bold text-navy mb-4 md:mb-6 leading-tight">Precision Technology for Safer Vision</h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-10 md:mb-16 leading-relaxed text-sm md:text-base">
            We invest in modern ophthalmic diagnostic and surgical equipment to ensure accuracy and faster recovery.
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {[
              { icon: <Search size={32} />, title: "Diagnostics", desc: "Advanced imaging" },
              { icon: <Zap size={32} />, title: "Surgical", desc: "Micro-incision" },
              { icon: <Smartphone size={32} />, title: "Digital", desc: "Vision testing" },
              { icon: <ShieldCheck size={32} />, title: "Sterile", desc: "Safe OT" },
            ].map((item, i) => (
              <div key={i} className="p-6 md:p-8 rounded-3xl bg-warmGray hover:bg-tealAccent/10 transition-all border border-transparent hover:border-tealAccent/20 flex flex-col items-center">
                <div className="text-tealAccent mb-3 md:mb-4">{item.icon}</div>
                <h4 className="font-bold text-navy text-sm md:text-base mb-1">{item.title}</h4>
                <p className="text-[10px] md:text-xs text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7: Patient Journey */}
      <section className="py-16 md:py-24 bg-warmGray overflow-hidden">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-center text-2xl md:text-3xl font-heading font-bold text-navy mb-12 md:mb-16">Path to Clear Vision</h2>
          <div className="space-y-10 md:space-y-12 relative">
            {/* Optimized line for mobile */}
            <div className="absolute left-[15px] md:left-1/2 top-0 bottom-0 w-1 bg-tealAccent/20 md:-translate-x-1/2" />
            {[
              { step: '1', title: 'Appointment', desc: 'Easy online or phone booking to fit your schedule.' },
              { step: '2', title: 'Consultation', desc: 'Detailed discussion about your concerns.' },
              { step: '3', title: 'Diagnosis', desc: 'Comprehensive examination using modern equipment.' },
              { step: '4', title: 'Treatment', desc: 'Tailored care plans designed specifically for you.' },
              { step: '5', title: 'Recovery', desc: 'Continuous support for lasting visual results.' },
            ].map((item, i) => (
              <div key={i} className={`flex items-start md:items-center gap-6 md:gap-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className={`flex-1 hidden md:block text-right ${i % 2 === 0 ? '' : 'text-left'}`}>
                  {i % 2 === 0 && (
                    <>
                      <h4 className="font-bold text-navy text-lg md:text-xl mb-2">{item.title}</h4>
                      <p className="text-gray-500 text-xs md:text-sm leading-relaxed">{item.desc}</p>
                    </>
                  )}
                </div>
                
                <div className="w-8 h-8 rounded-full bg-tealAccent text-white flex items-center justify-center font-bold relative z-10 shrink-0 shadow-lg text-sm">
                  {item.step}
                </div>

                <div className="flex-1 text-left">
                  {/* Mobile content always here */}
                  <div className="md:hidden">
                    <h4 className="font-bold text-navy text-base mb-1">{item.title}</h4>
                    <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                  {/* Desktop alternating content */}
                  <div className="hidden md:block">
                    {i % 2 !== 0 && (
                      <>
                        <h4 className="font-bold text-navy text-lg md:text-xl mb-2">{item.title}</h4>
                        <p className="text-gray-500 text-xs md:text-sm leading-relaxed">{item.desc}</p>
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 8: Video Testimonial / Hospital Tour */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-2xl md:text-4xl font-heading font-bold text-navy mb-4 leading-tight">Hospital Tour</h2>
            <p className="text-gray-500 text-sm md:text-base">Experience our state-of-the-art facility virtually.</p>
          </div>
          
          <div className="max-w-4xl mx-auto mb-16 md:mb-20 px-4">
            {/* 
              Improved Responsive Video Wrapper to completely eliminate scrollbars.
              Uses the padding-top trick for strictly maintained 16:9 aspect ratio.
            */}
            <div className="relative w-full pt-[56.25%] rounded-[2rem] overflow-hidden shadow-2xl bg-navy ring-1 ring-gray-100">
              <iframe 
                id="weetPlayer" 
                src="https://app.weet.co/embed/f0f8ef8f/create-video-tutorials-with-weet" 
                className="absolute top-0 left-0 w-full h-full border-0 m-0 p-0 overflow-hidden"
                allowFullScreen
                scrolling="no"
                title="Satya Nethralaya Hospital Tour"
                loading="lazy"
              />
            </div>
          </div>

          <div className="max-w-3xl mx-auto text-center px-4">
            <div className="flex justify-center gap-1 mb-6">
              {[1, 2, 3, 4, 5].map(s => <Star key={s} size={20} fill="#fbbf24" className="text-yellow-400" />)}
            </div>
            <div className="relative min-h-[140px] md:min-h-[150px] flex items-center justify-center">
              {TESTIMONIALS.map((t, idx) => (
                <div 
                  key={t.id} 
                  className={`absolute inset-0 transition-all duration-1000 transform ${
                    idx === activeTestimonial ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none'
                  }`}
                >
                  <p className="text-base md:text-2xl font-accent italic text-navy leading-relaxed mb-4 md:mb-6">"{t.text}"</p>
                  <p className="font-bold text-tealAccent uppercase tracking-widest text-[10px] md:text-sm">— {t.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 10: Final CTA */}
      <section className="py-20 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center">
          <div className="absolute inset-0 bg-navy/90" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-6xl font-heading font-bold text-white mb-6 md:mb-8 leading-tight">Protect Your Vision Today</h2>
          <p className="text-sm md:text-xl text-teal-100/70 mb-10 md:mb-12 leading-relaxed">
            Your eyes deserve expert care. Book a comprehensive eye checkup and take the first step toward clearer vision.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/book-appointment" className="w-full sm:w-auto px-10 py-4 bg-tealAccent hover:bg-white hover:text-navy text-white font-bold rounded-full transition-all animate-pulse-subtle text-sm md:text-base">
              Book Appointment Now
            </Link>
          </div>
          <div className="mt-10 md:mt-12 pt-8 md:pt-12 border-t border-white/10 flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8">
            <div className="flex items-center gap-2 text-white text-xs md:text-base">
              <Phone size={18} className="text-tealAccent" />
              <span className="font-bold">+91 82772 97325</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;

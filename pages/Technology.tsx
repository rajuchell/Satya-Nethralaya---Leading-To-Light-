
import React from 'react';
import { Microscope, Zap, Smartphone, ShieldCheck, Search, Activity, Cpu, Laptop } from 'lucide-react';
import { Link } from 'react-router-dom';

const Technology: React.FC = () => {
  return (
    <main className="pt-20 lg:pt-0">
      {/* Hero Section */}
      <section className="bg-navy py-16 md:py-24 px-6 text-center relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-tealAccent/5 rounded-full translate-y-1/2 translate-x-1/2 blur-3xl"></div>
        <div className="max-w-4xl mx-auto animate-fade-up relative z-10">
          <h1 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
            Clinical <span className="text-teal-400">Excellence</span> Through Tech
          </h1>
          <p className="text-teal-50/70 text-base md:text-lg max-w-2xl mx-auto font-light leading-relaxed">
            We invest in advanced ophthalmic equipment to ensure higher precision, faster recovery, and better surgical outcomes.
          </p>
        </div>
      </section>

      {/* Diagnostic Tech Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="w-full lg:w-1/2">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-tealAccent/10 text-tealAccent rounded-full text-[10px] font-bold uppercase tracking-widest mb-6">
                Diagnostic Excellence
              </div>
              <h2 className="text-3xl font-heading font-bold text-navy mb-6">Modern Diagnostic Imaging</h2>
              <div className="w-16 h-1 bg-tealAccent mb-8 rounded-full" />
              <p className="text-gray-600 mb-8 leading-relaxed">
                Accurate diagnosis is the foundation of effective treatment. Our diagnostic suite features high-resolution imaging systems that allow our specialists to view the intricate structures of the eye with extreme clarity.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-warmGray rounded-xl flex items-center justify-center text-tealAccent shrink-0">
                    <Search size={20} />
                  </div>
                  <div>
                    <h5 className="font-bold text-navy text-sm mb-1">Optical Biometry</h5>
                    <p className="text-gray-500 text-xs">For precise IOL power calculation in cataract cases.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-warmGray rounded-xl flex items-center justify-center text-tealAccent shrink-0">
                    <Activity size={20} />
                  </div>
                  <div>
                    <h5 className="font-bold text-navy text-sm mb-1">Digital Retinal Imaging</h5>
                    <p className="text-gray-500 text-xs">High-definition scans for diabetic retinopathy screening.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="bg-warmGray p-4 rounded-[2.5rem] relative">
                <img 
                  src="https://i.ibb.co/FkQbGdpM/satya-netralya-gvt-gangavathi-koppal-hospitals-7be0ptdq7i.jpg" 
                  alt="Satya Nethralaya Diagnostic Technology" 
                  className="rounded-[2rem] shadow-xl w-full grayscale hover:grayscale-0 transition-all duration-700 object-cover aspect-[4/3]"
                />
                <div className="absolute top-8 right-8 bg-white/90 backdrop-blur p-4 rounded-2xl shadow-lg flex items-center gap-3">
                  <Cpu className="text-tealAccent" />
                  <span className="text-xs font-bold text-navy">AI-Assisted Screening</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Surgical Innovation */}
      <section className="py-20 bg-warmGray/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-heading font-bold text-navy mb-4">Surgical Precision</h2>
            <p className="text-gray-500">Minimally invasive techniques for painless procedures and rapid healing.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <Microscope size={32} />, title: 'Micro-Incision Phaco', desc: 'Advanced cold phaco technology for cataract removal with incisions as small as 2.2mm.' },
              { icon: <Zap size={32} />, title: 'Advanced Laser Systems', desc: 'Precision lasers for glaucoma and post-cataract procedures (YAG Laser).' },
              { icon: <ShieldCheck size={32} />, title: 'Sterile OT Environment', desc: 'HEPA-filtered modular operation theatres with strict sterilization protocols.' },
            ].map((tech, i) => (
              <div key={i} className="bg-white p-10 rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="text-tealAccent mb-6">{tech.icon}</div>
                <h4 className="font-bold text-navy text-xl mb-4">{tech.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{tech.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Standards Banner */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-navy rounded-[3rem] p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 md:gap-12 text-white relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
            <div className="shrink-0">
              <div className="w-20 h-20 bg-tealAccent rounded-full flex items-center justify-center shadow-lg">
                <Laptop size={40} />
              </div>
            </div>
            <div className="relative z-10 flex-grow text-center md:text-left">
              <h3 className="text-xl md:text-2xl font-bold mb-3">Digital Patient Records</h3>
              <p className="text-teal-100/60 text-sm leading-relaxed mb-0">
                Our facility is fully digitized, ensuring your medical history is securely stored and easily accessible for follow-ups and long-term vision management.
              </p>
            </div>
            <div className="shrink-0 flex items-center gap-4">
              <div className="text-right">
                <p className="text-xs font-bold text-tealAccent uppercase tracking-widest">Safety Standard</p>
                <p className="text-sm font-bold">100% Verified</p>
              </div>
              <ShieldCheck className="text-tealAccent" size={32} />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-softWhite border-t border-gray-100 text-center px-6">
        <h2 className="text-2xl font-heading font-bold text-navy mb-8">Trust Your Eyes to the Best Technology</h2>
        <Link to="/book-appointment" className="inline-flex items-center gap-2 px-10 py-4 bg-navy text-white font-bold rounded-full hover:bg-tealAccent transition-all shadow-lg">
          Schedule Evaluation <Zap size={18} />
        </Link>
      </section>
    </main>
  );
};

export default Technology;

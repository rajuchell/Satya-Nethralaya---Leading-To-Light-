
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Award, CheckCircle2, GraduationCap, Microscope, ShieldCheck } from 'lucide-react';
import { DOCTORS } from '../constants';

const Doctors: React.FC = () => {
  return (
    <main className="pt-20 lg:pt-0">
      {/* Hero Section */}
      <section className="bg-navy py-16 md:py-24 px-6 text-center">
        <div className="max-w-4xl mx-auto animate-fade-up">
          <h1 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
            Meet Our Experienced <span className="text-teal-400">Eye Specialists</span>
          </h1>
          <p className="text-teal-50/70 text-base md:text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Dedicated professionals committed to your vision health through precision diagnostics and compassionate patient care.
          </p>
        </div>
      </section>

      {/* Doctor Profiles */}
      <section className="py-16 md:py-24 bg-softWhite">
        <div className="max-w-7xl mx-auto px-6 space-y-20 md:space-y-32">
          
          {/* Dr. Jyoti Babu C. Neelam */}
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="w-full lg:w-1/2 relative group">
              <div className="absolute -inset-4 bg-tealAccent/10 rounded-[2rem] -rotate-2 group-hover:rotate-0 transition-transform duration-500"></div>
              <img 
                src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=800" 
                alt="Dr. Jyoti Babu C. Neelam" 
                className="relative w-full aspect-[4/5] object-cover rounded-[2rem] shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <div className="w-full lg:w-1/2">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-tealAccent/10 text-tealAccent rounded-full text-xs font-bold uppercase tracking-wider mb-4">
                Phaco & Glaucoma Surgeon
              </div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy mb-2">Dr. Jyoti Babu C. Neelam</h2>
              <div className="flex flex-wrap gap-x-4 gap-y-2 mb-6">
                <p className="text-navy/60 font-semibold flex items-center gap-2">
                  <GraduationCap size={18} /> MBBS, MS (Ophthalmology)
                </p>
                <p className="text-tealAccent font-bold flex items-center gap-2">
                  <Award size={18} /> FIGS (Aravind Eye Hospital, Madurai)
                </p>
              </div>
              
              <div className="prose prose-slate max-w-none mb-8">
                <p className="text-gray-600 leading-relaxed mb-4">
                  Dr. Jyoti Babu C. Neelam is a highly specialized ophthalmologist and Phaco-Glaucoma surgeon. Having completed his <strong>FIGS (Fellowship in Glaucoma & Cataract Surgery)</strong> at the world-renowned <strong>Aravind Eye Hospital, Madurai</strong>, he brings exceptional clinical standards to Satya Nethralaya.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  His expertise lies in sutureless cataract surgery and advanced management of glaucoma, ensuring that patients receive global standards of care right here in Gangavathi.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                <div>
                  <h4 className="font-bold text-navy flex items-center gap-2 mb-4">
                    <Microscope size={18} className="text-tealAccent" /> Expertise
                  </h4>
                  <ul className="space-y-2">
                    {['Advanced Phacoemulsification', 'Glaucoma Management', 'FIGS Fellow - Aravind Madurai', 'Sutureless Cataract Surgery'].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-500">
                        <CheckCircle2 size={14} className="text-successGreen shrink-0" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-navy flex items-center gap-2 mb-4">
                    <ShieldCheck size={18} className="text-tealAccent" /> Specializations
                  </h4>
                  <ul className="space-y-2">
                    {['Precision Glaucoma Screening', 'Premium IOL Implantation', 'Surgical Innovation', 'Ethics-First Practice'].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-500">
                        <CheckCircle2 size={14} className="text-successGreen shrink-0" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <Link to="/book-appointment" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-navy hover:bg-tealAccent text-white font-bold rounded-xl transition-all shadow-lg group">
                <Calendar size={20} />
                Book Appointment with Dr. Jyoti Babu
              </Link>
            </div>
          </div>

          {/* Dr. Bhavi - Alternating Layout */}
          <div className="flex flex-col lg:flex-row-reverse gap-12 items-center">
            <div className="w-full lg:w-1/2 relative group">
              <div className="absolute -inset-4 bg-navy/5 rounded-[2rem] rotate-2 group-hover:rotate-0 transition-transform duration-500"></div>
              <img 
                src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=800" 
                alt="Dr. Bhavi" 
                className="relative w-full aspect-[4/5] object-cover rounded-[2rem] shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <div className="w-full lg:w-1/2">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-tealAccent/10 text-tealAccent rounded-full text-xs font-bold uppercase tracking-wider mb-4">
                Consultant Ophthalmologist
              </div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy mb-2">Dr. Bhavi</h2>
              <p className="text-navy/60 font-semibold mb-6 flex items-center gap-2">
                <GraduationCap size={18} /> MBBS, MS (Ophthalmology)
              </p>
              
              <div className="prose prose-slate max-w-none mb-8">
                <p className="text-gray-600 leading-relaxed mb-4">
                  Dr. Bhavi focuses on comprehensive eye care with special expertise in pediatric ophthalmology and glaucoma management. Her diagnostic approach emphasizes early detection and preventive eye health strategies.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Known for her empathetic consultation style and thorough examinations, Dr. Bhavi ensures every patient understands their condition and treatment options completely, making her particularly skilled in treating children.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                <div>
                  <h4 className="font-bold text-navy flex items-center gap-2 mb-4">
                    <Microscope size={18} className="text-tealAccent" /> Expertise
                  </h4>
                  <ul className="space-y-2">
                    {['Pediatric Vision Screening', 'Glaucoma Diagnosis', 'Squint (Strabismus) Correction', 'Diabetic Eye Screening'].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-500">
                        <CheckCircle2 size={14} className="text-successGreen shrink-0 mt-1" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-navy flex items-center gap-2 mb-4">
                    <Award size={18} className="text-tealAccent" /> Achievements
                  </h4>
                  <ul className="space-y-2">
                    {['Pediatric Specialty Trained', 'Glaucoma Program Lead', 'Community Advocate', 'Patient Education Expert'].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-500">
                        <CheckCircle2 size={14} className="text-successGreen shrink-0 mt-1" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <Link to="/book-appointment" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-navy hover:bg-tealAccent text-white font-bold rounded-xl transition-all shadow-lg group">
                <Calendar size={20} />
                Book Appointment with Dr. Bhavi
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 bg-navy text-center px-6">
        <h3 className="text-white text-2xl font-heading mb-8">Committed to Medical Excellence</h3>
        <div className="flex flex-wrap justify-center gap-12 opacity-60 grayscale brightness-200">
          <div className="flex flex-col items-center">
            <Award size={40} className="text-white mb-2" />
            <span className="text-white text-[10px] uppercase tracking-widest font-bold">Certified Quality</span>
          </div>
          <div className="flex flex-col items-center">
            <Microscope size={40} className="text-white mb-2" />
            <span className="text-white text-[10px] uppercase tracking-widest font-bold">Modern Equipment</span>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Doctors;

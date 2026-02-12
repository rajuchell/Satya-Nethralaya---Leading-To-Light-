
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Eye, 
  Zap, 
  Activity, 
  Search, 
  Baby, 
  ShieldAlert, 
  Accessibility, 
  ClipboardList, 
  CheckCircle2,
  ArrowRight,
  Clock,
  ShieldCheck,
  Award,
  ChevronDown
} from 'lucide-react';
import { SERVICES } from '../constants';
import * as Icons from 'lucide-react';

const Services: React.FC = () => {
  return (
    <main className="pt-20 lg:pt-0">
      {/* Hero Section */}
      <section className="bg-navy py-16 md:py-24 px-6 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-tealAccent/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
        <div className="max-w-4xl mx-auto animate-fade-up relative z-10">
          <h1 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
            Comprehensive <span className="text-teal-400">Ophthalmic Services</span>
          </h1>
          <p className="text-teal-50/70 text-base md:text-lg max-w-2xl mx-auto font-light leading-relaxed">
            From routine diagnostics to advanced micro-incision surgeries, we provide world-class eye care solutions tailored to every patient's needs.
          </p>
        </div>
      </section>

      {/* Main Services Grid */}
      <section className="py-16 md:py-24 bg-softWhite">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, idx) => {
              const IconComponent = (Icons as any)[service.icon] || Eye;
              return (
                <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-all group flex flex-col h-full">
                  <div className="w-14 h-14 bg-tealAccent/10 text-tealAccent rounded-2xl flex items-center justify-center mb-6 group-hover:bg-navy group-hover:text-white transition-all">
                    <IconComponent size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-4">{service.name}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow">
                    {service.description}
                  </p>
                  
                  {/* Detailed Feature List for each service based on PRD */}
                  <ul className="space-y-2 mb-8 border-t border-gray-50 pt-6">
                    {service.id === 'cataract' && [
                      'Micro-incision Phacoemulsification',
                      'Stitchless & Painless Procedure',
                      'Premium IOL (Multifocal/Toric) Options',
                      'Same-day Discharge & Fast Recovery'
                    ].map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs text-gray-500">
                        <CheckCircle2 size={14} className="text-successGreen shrink-0" /> {feature}
                      </li>
                    ))}
                    {service.id === 'lasik' && [
                      'Bladeless Vision Correction',
                      'Treatment for Myopia & Astigmatism',
                      'Quick 15-minute Procedure',
                      'Spectacle-free Freedom'
                    ].map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs text-gray-500">
                        <CheckCircle2 size={14} className="text-successGreen shrink-0" /> {feature}
                      </li>
                    ))}
                    {service.id === 'pediatric' && [
                      'Child-friendly Vision Screening',
                      'Squint & Amblyopia (Lazy Eye) Management',
                      'Pediatric Refraction',
                      'Early Detection Programs'
                    ].map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs text-gray-500">
                        <CheckCircle2 size={14} className="text-successGreen shrink-0" /> {feature}
                      </li>
                    ))}
                    {/* Default features for others */}
                    {!['cataract', 'lasik', 'pediatric'].includes(service.id) && [
                      'Advanced Diagnostic Imaging',
                      'Specialist Consultation',
                      'Personalized Care Plan',
                      'Follow-up Support'
                    ].map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs text-gray-500">
                        <CheckCircle2 size={14} className="text-successGreen shrink-0" /> {feature}
                      </li>
                    ))}
                  </ul>

                  <Link to="/book-appointment" className="inline-flex items-center gap-2 text-tealAccent font-bold hover:gap-3 transition-all text-sm group-hover:text-navy">
                    Book Consultation <ArrowRight size={16} />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Procedure Workflow */}
      <section className="py-20 bg-warmGray/50">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-navy mb-16">Our Clinical Approach</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md mb-6 relative">
                <Search className="text-tealAccent" />
                <span className="absolute -top-2 -right-2 w-7 h-7 bg-navy text-white rounded-full flex items-center justify-center text-xs font-bold">01</span>
              </div>
              <h4 className="font-bold text-navy mb-2">Detailed Diagnosis</h4>
              <p className="text-gray-500 text-sm">Comprehensive screening using advanced diagnostic technology.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md mb-6 relative">
                <Activity className="text-tealAccent" />
                <span className="absolute -top-2 -right-2 w-7 h-7 bg-navy text-white rounded-full flex items-center justify-center text-xs font-bold">02</span>
              </div>
              <h4 className="font-bold text-navy mb-2">Precision Care</h4>
              <p className="text-gray-500 text-sm">Personalized surgical or medical treatment plan for optimal outcomes.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md mb-6 relative">
                <ShieldCheck className="text-tealAccent" />
                <span className="absolute -top-2 -right-2 w-7 h-7 bg-navy text-white rounded-full flex items-center justify-center text-xs font-bold">03</span>
              </div>
              <h4 className="font-bold text-navy mb-2">Safe Recovery</h4>
              <p className="text-gray-500 text-sm">Continuous monitoring and post-operative support for lasting vision.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-heading font-bold text-navy mb-8 leading-tight">Why Patients Choose <br />Satya Nethralaya Gvt</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <div className="shrink-0 w-10 h-10 bg-tealAccent/10 text-tealAccent rounded-lg flex items-center justify-center">
                  <Award size={20} />
                </div>
                <div>
                  <h5 className="font-bold text-navy text-sm mb-1">Expert Surgeons</h5>
                  <p className="text-gray-500 text-xs leading-relaxed">Highly experienced specialists for every eye condition.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="shrink-0 w-10 h-10 bg-tealAccent/10 text-tealAccent rounded-lg flex items-center justify-center">
                  <Zap size={20} />
                </div>
                <div>
                  <h5 className="font-bold text-navy text-sm mb-1">Advanced Tech</h5>
                  <p className="text-gray-500 text-xs leading-relaxed">Cutting-edge equipment for safer, faster procedures.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="shrink-0 w-10 h-10 bg-tealAccent/10 text-tealAccent rounded-lg flex items-center justify-center">
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <h5 className="font-bold text-navy text-sm mb-1">Safe Environment</h5>
                  <p className="text-gray-500 text-xs leading-relaxed">Sterile operation theatres following strict hygiene protocols.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="shrink-0 w-10 h-10 bg-tealAccent/10 text-tealAccent rounded-lg flex items-center justify-center">
                  <Clock size={20} />
                </div>
                <div>
                  <h5 className="font-bold text-navy text-sm mb-1">Quick Recovery</h5>
                  <p className="text-gray-500 text-xs leading-relaxed">Minimal incision techniques for same-day discharge.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1200" 
              alt="Advanced Eye Care Technology" 
              className="rounded-3xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-navy p-6 rounded-2xl shadow-xl text-white">
              <div className="flex items-center gap-3 mb-2">
                <CheckCircle2 className="text-tealAccent" />
                <span className="font-bold text-xl">100% Safety</span>
              </div>
              <p className="text-teal-200/60 text-xs tracking-wider uppercase font-bold">Standard of Excellence</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Mini */}
      <section className="py-20 bg-warmGray/30">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-center text-2xl font-heading font-bold text-navy mb-12">Common Questions</h2>
          <div className="space-y-4">
            {[
              { q: 'Is cataract surgery painful?', a: 'No, we use advanced local anesthesia (eye drops) to ensure the procedure is completely painless and comfortable.' },
              { q: 'How long does it take to recover from LASIK?', a: 'Most patients return to their normal activities within 24-48 hours, with significant vision improvement immediately.' },
              { q: 'Do you offer pediatric eye checkups?', a: 'Yes, we have specialized diagnostic tools and expertise specifically for children and infants.' }
            ].map((faq, i) => (
              <details key={i} className="bg-white rounded-xl shadow-sm border border-gray-100 group">
                <summary className="p-6 cursor-pointer font-bold text-navy flex items-center justify-between list-none">
                  {faq.q}
                  <span className="text-tealAccent transition-transform group-open:rotate-180"><ChevronDown size={20} /></span>
                </summary>
                <div className="px-6 pb-6 text-gray-500 text-sm leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy text-center px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-white mb-6">Ready for Clearer Vision?</h2>
          <p className="text-teal-50/60 mb-10">Schedule a comprehensive evaluation with our experts today.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/book-appointment" className="px-10 py-4 bg-tealAccent hover:bg-white hover:text-navy text-white font-bold rounded-full transition-all shadow-xl">
              Book Appointment
            </Link>
            <a href="tel:+918277297325" className="px-10 py-4 border-2 border-white/20 hover:border-white text-white font-bold rounded-full transition-all text-center">
              Call Hospital
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;

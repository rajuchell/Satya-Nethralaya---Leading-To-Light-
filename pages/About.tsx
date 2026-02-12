
import React from 'react';
import { Target, Eye, Heart, ShieldCheck, Award, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <main className="pt-20 lg:pt-0">
      {/* Hero Section */}
      <section className="bg-navy py-16 md:py-24 px-6 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-tealAccent/10 rounded-full -translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
        <div className="max-w-4xl mx-auto animate-fade-up relative z-10">
          <h1 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
            Our Story & <span className="text-teal-400">Mission</span>
          </h1>
          <p className="text-teal-50/70 text-base md:text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Over a decade of dedicated service in restoring vision and enhancing lives in Gangavathi and beyond.
          </p>
        </div>
      </section>

      {/* Hospital History & Philosophy */}
      <section className="py-16 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img 
              src="https://i.ibb.co/f3cVQKc/satya-netralya-gvt-gangavathi-koppal-hospitals-1emhtfj9nnn0r.jpg" 
              alt="Hospital Interior Reception" 
              className="rounded-[2.5rem] shadow-2xl w-full object-cover aspect-[4/3] lg:aspect-auto"
            />
            {/* Trust Badge precisely positioned as per design */}
            <div className="absolute -bottom-6 right-6 md:right-12 bg-[#1E88A8] p-6 md:p-10 rounded-[2rem] shadow-2xl text-white text-center transform hover:scale-105 transition-transform duration-300">
              <p className="text-3xl md:text-5xl font-bold mb-1">10+</p>
              <p className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold">Years of Trust</p>
            </div>
          </div>
          <div className="mt-12 lg:mt-0">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy mb-4">A Legacy of Care</h2>
            <div className="w-16 h-1 bg-tealAccent mb-8 rounded-full" />
            
            <div className="space-y-6 text-gray-600 leading-relaxed mb-12">
              <p>
                Satya Nethralaya was founded on the principle that high-quality eye care should be accessible and affordable for everyone. Located in the heart of Gangavathi, we have grown from a local clinic to a premier destination for ophthalmic excellence in the Koppal district.
              </p>
              <p>
                Led by Dr. Jothi Babu and Dr. Bhavi, our medical team combines decades of collective experience with a shared passion for patient well-being. We believe that every patient deserves a personalized approach, where clinical precision meets human compassion.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 md:gap-12">
              <div className="flex flex-col gap-2 border-l-4 border-tealAccent/20 pl-6">
                <span className="text-navy font-bold text-2xl md:text-3xl font-heading tracking-tight">15,000+</span>
                <span className="text-gray-500 text-xs md:text-sm font-medium">Patients Treated</span>
              </div>
              <div className="flex flex-col gap-2 border-l-4 border-tealAccent/20 pl-6">
                <span className="text-navy font-bold text-2xl md:text-3xl font-heading tracking-tight">2,000+</span>
                <span className="text-gray-500 text-xs md:text-sm font-medium">Successful Surgeries</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Cards */}
      <section className="py-20 bg-warmGray/50">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-gray-100 flex flex-col items-center text-center group hover:shadow-xl transition-all duration-500">
            <div className="w-16 h-16 bg-navy text-white rounded-2xl flex items-center justify-center mb-6 group-hover:bg-tealAccent transition-colors">
              <Target size={32} />
            </div>
            <h3 className="text-2xl font-heading font-bold text-navy mb-4">Our Mission</h3>
            <p className="text-gray-500 leading-relaxed italic">
              "To provide comprehensive, state-of-the-art eye care services that are accessible, affordable, and delivered with the highest standards of safety and empathy."
            </p>
          </div>
          <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-gray-100 flex flex-col items-center text-center group hover:shadow-xl transition-all duration-500">
            <div className="w-16 h-16 bg-tealAccent text-white rounded-2xl flex items-center justify-center mb-6 group-hover:bg-navy transition-colors">
              <Eye size={32} />
            </div>
            <h3 className="text-2xl font-heading font-bold text-navy mb-4">Our Vision</h3>
            <p className="text-gray-500 leading-relaxed italic">
              "To be the regional leader in eye care, recognized for our clinical excellence, ethical practices, and contribution to eradicating preventable blindness in Karnataka."
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-center text-3xl font-heading font-bold text-navy mb-16">The Values We Live By</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Heart className="text-tealAccent" />, title: 'Compassion', desc: 'Treating every patient like family with warmth and understanding.' },
              { icon: <ShieldCheck className="text-tealAccent" />, title: 'Integrity', desc: 'Unwavering commitment to medical ethics and transparent billing.' },
              { icon: <Award className="text-tealAccent" />, title: 'Excellence', desc: 'Continuous pursuit of the highest clinical and surgical standards.' },
              { icon: <Users className="text-tealAccent" />, title: 'Community', desc: 'Active participation in local vision health awareness programs.' },
            ].map((value, i) => (
              <div key={i} className="group p-8 rounded-3xl bg-warmGray/30 hover:bg-navy transition-all duration-500">
                <div className="mb-6 group-hover:scale-110 transition-transform">{value.icon}</div>
                <h4 className="font-bold text-navy text-lg mb-3 group-hover:text-white">{value.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed group-hover:text-teal-100/60">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-navy text-center px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-heading font-bold text-white mb-6">Experience Better Vision</h2>
          <p className="text-teal-50/60 mb-10">We invite you to visit our facility and see the difference in care.</p>
          <Link to="/book-appointment" className="inline-block px-10 py-4 bg-tealAccent hover:bg-white hover:text-navy text-white font-bold rounded-full transition-all shadow-xl">
            Book a Visit
          </Link>
        </div>
      </section>
    </main>
  );
};

export default About;

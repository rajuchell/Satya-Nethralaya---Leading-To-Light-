
import React, { useState } from 'react';
import { MapPin, Phone, MessageCircle, Clock, Mail, Send, ChevronDown } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 5000);
  };

  const faqs = [
    { q: 'Where is Satya Nethralaya located?', a: 'We are located on Kampli-Bellary Road, right opposite IDFC Bank in July Nagar, Gangavathi.' },
    { q: 'What are the consultation hours?', a: 'Our specialists are available from Monday to Saturday, 9:30 AM to 7:30 PM.' },
    { q: 'How can I contact the hospital for an emergency?', a: 'For eye trauma or emergencies, please call our primary number directly. We are available 24/7 for emergency cases.' }
  ];

  return (
    <main className="pt-20 lg:pt-0">
      <section className="bg-navy py-16 px-6 text-center">
        <h1 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">Contact Us</h1>
        <p className="text-teal-50/70 text-base max-w-2xl mx-auto">Have questions? Reach out to our hospital directly using any of the channels below.</p>
      </section>

      <section className="py-16 md:py-24 bg-softWhite">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Contact Details */}
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold text-navy mb-6">Reach Out Directly</h3>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <MapPin className="text-tealAccent shrink-0" size={24} />
                    <div>
                      <p className="font-bold text-sm text-navy">Our Address</p>
                      <p className="text-gray-500 text-sm leading-relaxed">Kampli-Bellary Rd, opp. IDFC Bank, Gangavathi, Karnataka 583227</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Phone className="text-tealAccent shrink-0" size={24} />
                    <div>
                      <p className="font-bold text-sm text-navy">Call Support</p>
                      <p className="text-gray-500 text-sm font-semibold">+91 82772 97325</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <MessageCircle className="text-successGreen shrink-0" size={24} />
                    <div>
                      <p className="font-bold text-sm text-navy">WhatsApp</p>
                      <p className="text-gray-500 text-sm font-semibold">+91 82772 97325</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-navy p-8 rounded-[2rem] text-white">
                <h3 className="text-lg font-bold mb-4">Emergency Care</h3>
                <p className="text-teal-100/60 text-sm mb-6 leading-relaxed">For urgent eye trauma or sudden vision loss, we are available 24/7.</p>
                <a href="tel:+918277297325" className="inline-flex items-center gap-2 font-bold text-tealAccent hover:text-white transition-colors">
                  Call Emergency line <Phone size={16} />
                </a>
              </div>
            </div>

            {/* Quick Message Form */}
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-white p-8 md:p-12 rounded-[2rem] shadow-sm border border-gray-100">
                <h3 className="text-2xl font-heading font-bold text-navy mb-6">Send a Quick Message</h3>
                {sent ? (
                  <div className="bg-green-50 p-6 rounded-2xl text-successGreen font-bold flex items-center gap-3">
                    <Send size={20} /> Your message has been sent successfully!
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <input 
                        required
                        type="text" 
                        placeholder="Your Name" 
                        className="bg-warmGray/50 border-0 rounded-xl py-4 px-6 text-sm focus:ring-2 focus:ring-tealAccent outline-none"
                        value={formState.name}
                        onChange={e => setFormState({...formState, name: e.target.value})}
                      />
                      <input 
                        type="email" 
                        placeholder="Your Email" 
                        className="bg-warmGray/50 border-0 rounded-xl py-4 px-6 text-sm focus:ring-2 focus:ring-tealAccent outline-none"
                        value={formState.email}
                        onChange={e => setFormState({...formState, email: e.target.value})}
                      />
                    </div>
                    <textarea 
                      required
                      rows={5} 
                      placeholder="How can we help you?" 
                      className="w-full bg-warmGray/50 border-0 rounded-xl py-4 px-6 text-sm focus:ring-2 focus:ring-tealAccent outline-none resize-none"
                      value={formState.message}
                      onChange={e => setFormState({...formState, message: e.target.value})}
                    ></textarea>
                    <button type="submit" className="bg-navy hover:bg-tealAccent text-white font-bold px-8 py-4 rounded-xl transition-all flex items-center gap-2">
                      Send Message <Send size={18} />
                    </button>
                  </form>
                )}
              </div>

              {/* Map */}
              <div className="h-80 rounded-[2rem] overflow-hidden shadow-lg bg-gray-200">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3846.5414341496!2d76.5298133!3d15.4283844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTXCsDI1JzQyLjIiTiA3NiszMSc0Ny4zIkU!5e0!3m2!1sen!2sin!4v1612345678901!5m2!1sen!2sin" 
                  width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-warmGray/30">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-center text-2xl font-heading font-bold text-navy mb-12">General Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="bg-white rounded-2xl border border-gray-100 group">
                <summary className="p-6 cursor-pointer font-bold text-navy flex items-center justify-between list-none">
                  {faq.q} <ChevronDown size={20} className="text-tealAccent group-open:rotate-180 transition-all" />
                </summary>
                <div className="px-6 pb-6 text-gray-500 text-sm">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;

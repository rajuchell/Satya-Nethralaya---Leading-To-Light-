
import React, { useState } from 'react';
import { Calendar, CheckCircle2, Clock, Stethoscope, User, Phone as PhoneIcon } from 'lucide-react';

const BookAppointment: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    time: 'Morning',
    service: 'General Checkup',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main className="pt-20 lg:pt-0">
      <section className="bg-navy py-16 px-6 text-center">
        <div className="max-w-4xl mx-auto animate-fade-up">
          <h1 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
            Schedule Your <span className="text-teal-400">Visit</span>
          </h1>
          <p className="text-teal-50/70 text-base md:text-lg max-w-2xl mx-auto font-light">
            Take the first step towards clearer vision. Fill in the details below and our team will confirm your slot.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-softWhite">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-white rounded-[2.5rem] shadow-2xl overflow-hidden">
            {isSubmitted ? (
              <div className="p-12 text-center animate-fade-up">
                <div className="w-20 h-20 bg-successGreen text-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-successGreen/20">
                  <CheckCircle2 size={40} />
                </div>
                <h2 className="text-3xl font-heading font-bold text-navy mb-4">Appointment Requested!</h2>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Thank you, <strong>{formState.name}</strong>. We have received your request for a <strong>{formState.service}</strong> on <strong>{formState.date}</strong>. Our reception team will call you shortly to confirm the exact time.
                </p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="px-8 py-3 bg-navy text-white font-bold rounded-xl hover:bg-tealAccent transition-colors"
                >
                  Book Another Appointment
                </button>
              </div>
            ) : (
              <div className="p-8 md:p-12">
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Patient Info */}
                    <div className="space-y-4">
                      <label className="flex items-center gap-2 text-xs font-bold text-navy uppercase tracking-widest">
                        <User size={14} className="text-tealAccent" /> Patient Name*
                      </label>
                      <input 
                        required
                        type="text" 
                        placeholder="Enter full name"
                        className="w-full bg-warmGray/50 border-0 rounded-2xl py-4 px-6 text-sm focus:ring-2 focus:ring-tealAccent outline-none transition-all"
                        value={formState.name}
                        onChange={e => setFormState({...formState, name: e.target.value})}
                      />
                    </div>
                    <div className="space-y-4">
                      <label className="flex items-center gap-2 text-xs font-bold text-navy uppercase tracking-widest">
                        <PhoneIcon size={14} className="text-tealAccent" /> Phone Number*
                      </label>
                      <input 
                        required
                        type="tel" 
                        placeholder="10-digit mobile number"
                        className="w-full bg-warmGray/50 border-0 rounded-2xl py-4 px-6 text-sm focus:ring-2 focus:ring-tealAccent outline-none transition-all"
                        value={formState.phone}
                        onChange={e => setFormState({...formState, phone: e.target.value})}
                      />
                    </div>

                    {/* Schedule */}
                    <div className="space-y-4">
                      <label className="flex items-center gap-2 text-xs font-bold text-navy uppercase tracking-widest">
                        <Calendar size={14} className="text-tealAccent" /> Preferred Date*
                      </label>
                      <input 
                        required
                        type="date" 
                        className="w-full bg-warmGray/50 border-0 rounded-2xl py-4 px-6 text-sm focus:ring-2 focus:ring-tealAccent outline-none transition-all"
                        value={formState.date}
                        onChange={e => setFormState({...formState, date: e.target.value})}
                      />
                    </div>
                    <div className="space-y-4">
                      <label className="flex items-center gap-2 text-xs font-bold text-navy uppercase tracking-widest">
                        <Clock size={14} className="text-tealAccent" /> Preferred Time*
                      </label>
                      <select 
                        className="w-full bg-warmGray/50 border-0 rounded-2xl py-4 px-6 text-sm focus:ring-2 focus:ring-tealAccent outline-none transition-all appearance-none"
                        value={formState.time}
                        onChange={e => setFormState({...formState, time: e.target.value})}
                      >
                        <option>Morning (9:30 AM - 1:00 PM)</option>
                        <option>Afternoon (2:00 PM - 5:00 PM)</option>
                        <option>Evening (5:00 PM - 7:30 PM)</option>
                      </select>
                    </div>

                    {/* Service */}
                    <div className="md:col-span-2 space-y-4">
                      <label className="flex items-center gap-2 text-xs font-bold text-navy uppercase tracking-widest">
                        <Stethoscope size={14} className="text-tealAccent" /> Select Service*
                      </label>
                      <select 
                        className="w-full bg-warmGray/50 border-0 rounded-2xl py-4 px-6 text-sm focus:ring-2 focus:ring-tealAccent outline-none transition-all appearance-none"
                        value={formState.service}
                        onChange={e => setFormState({...formState, service: e.target.value})}
                      >
                        <option>Comprehensive Eye Checkup</option>
                        <option>Cataract Consultation</option>
                        <option>LASIK Evaluation</option>
                        <option>Pediatric Ophthalmology</option>
                        <option>Diabetic Eye Screening</option>
                        <option>Glaucoma Management</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div className="md:col-span-2 space-y-4">
                      <label className="text-xs font-bold text-navy uppercase tracking-widest">Additional Notes</label>
                      <textarea 
                        rows={3}
                        placeholder="Mention any existing conditions or specific eye symptoms..."
                        className="w-full bg-warmGray/50 border-0 rounded-2xl py-4 px-6 text-sm focus:ring-2 focus:ring-tealAccent outline-none transition-all resize-none"
                        value={formState.message}
                        onChange={e => setFormState({...formState, message: e.target.value})}
                      ></textarea>
                    </div>
                  </div>

                  <button 
                    type="submit" 
                    className="w-full bg-tealAccent hover:bg-navy text-white font-bold py-5 px-4 rounded-2xl shadow-xl transition-all flex items-center justify-center gap-3 text-sm md:text-lg text-center"
                  >
                    <Calendar size={22} className="shrink-0" />
                    <span>Confirm Appointment Request</span>
                  </button>
                  <p className="text-center text-[10px] text-gray-400">
                    *We'll confirm your appointment within 2 hours of submission.
                  </p>
                </form>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

export default BookAppointment;

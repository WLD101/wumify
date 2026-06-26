import React, { useState } from 'react';
import { motion } from 'framer-motion';

const timeSlots = ["09:00 AM", "10:30 AM", "01:00 PM", "02:30 PM", "04:00 PM"];
const meetTypes = [
  { id: 'discovery', title: '15 Min Discovery Call', desc: 'Initial review of automation needs' },
  { id: 'audit', title: '30 Min Operational Audit', desc: 'Detailed review of manual bottlenecks' },
  { id: 'cyber', title: '45 Min Cyber & AI Review', desc: 'Detailed compliance & vulnerability discussion' }
];

export default function Booking() {
  const [selectedType, setSelectedType] = useState('discovery');
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [selectedDay, setSelectedDay] = useState(3); // Wednesday
  const [booked, setBooked] = useState(false);

  const handleBook = () => {
    if (selectedSlot) {
      setBooked(true);
    }
  };

  return (
    <section id="booking" className="relative w-full max-w-6xl mx-auto px-8 py-32 z-10">
      <div className="text-center mb-16">
        <span className="text-wumify-purple font-semibold text-xs uppercase tracking-widest block mb-4">Direct Booking</span>
        <h2 className="font-general text-[40px] md:text-[56px] leading-tight font-medium text-foreground mb-6">
          Schedule via <span className="text-transparent bg-clip-text bg-gradient-to-r from-wumify-cyan to-wumify-purple">Google Meet</span>
        </h2>
        <p className="text-hero-sub text-lg max-w-xl mx-auto mb-4">
          Book an audit directly into our calendar or reach out immediately at our UK hotline.
        </p>
        <div className="flex justify-center items-center gap-2 text-foreground/90 text-lg font-medium">
          <iconify-icon icon="solar:phone-calling-linear" width="22" height="22" className="text-wumify-purple" />
          <span>UK Phone:</span>
          <a href="tel:+447752941226" className="text-wumify-purple hover:underline font-bold">+44 7752 941226</a>
        </div>
      </div>

      <div className="liquid-glass border border-white/10 rounded-3xl p-6 md:p-10 max-w-4xl mx-auto shadow-2xl flex flex-col md:flex-row gap-8 relative overflow-hidden">
        {booked ? (
          <div className="w-full text-center py-20">
            <div className="text-wumify-purple mb-4 flex justify-center">
              <iconify-icon icon="solar:check-circle-linear" width="64" height="64" />
            </div>
            <h3 className="text-2xl font-general font-medium text-foreground mb-2">Meeting Booked!</h3>
            <p className="text-foreground/60 text-sm max-w-md mx-auto">
              A Google Calendar invite with a secure Google Meet link has been dispatched to your email address. We look forward to talking.
            </p>
            <button 
              onClick={() => { setBooked(false); setSelectedSlot(null); }}
              className="mt-8 hero-secondary-btn py-2.5 px-6 rounded-full text-sm font-semibold"
            >
              Book Another Meeting
            </button>
          </div>
        ) : (
          <>
            {/* Left side: meeting type */}
            <div className="flex-1 space-y-4">
              <h4 className="text-xs font-bold text-foreground/40 uppercase tracking-widest mb-6">1. Choose Meeting Type</h4>
              
              {meetTypes.map((t) => (
                <div 
                  key={t.id}
                  onClick={() => setSelectedType(t.id)}
                  className={`p-4 rounded-xl border transition-all cursor-pointer text-left ${selectedType === t.id ? 'bg-wumify-purple/10 border-wumify-purple' : 'bg-white/[0.02] border-white/10 hover:border-white/20'}`}
                >
                  <h5 className="text-sm font-semibold text-foreground">{t.title}</h5>
                  <p className="text-xs text-foreground/50 leading-tight mt-1">{t.desc}</p>
                </div>
              ))}
            </div>

            {/* Right side: scheduler */}
            <div className="flex-1 border-t md:border-t-0 md:border-l border-white/10 pt-6 md:pt-0 md:pl-8 flex flex-col justify-between">
              <div>
                <h4 className="text-xs font-bold text-foreground/40 uppercase tracking-widest mb-6">2. Select Day & Time (Manchester UTC)</h4>
                
                {/* Days row */}
                <div className="flex gap-2 mb-6 justify-between">
                  {[26, 27, 28, 29, 30].map((dayNum, i) => (
                    <div 
                      key={i}
                      onClick={() => setSelectedDay(i)}
                      className={`w-12 h-14 rounded-lg flex flex-col items-center justify-center text-center cursor-pointer transition-all border ${selectedDay === i ? 'bg-wumify-purple border-wumify-purple text-white' : 'bg-white/[0.02] border-white/10 text-foreground/70 hover:border-white/20'}`}
                    >
                      <span className="text-[10px] uppercase font-bold">Jun</span>
                      <span className="text-sm font-bold">{dayNum}</span>
                    </div>
                  ))}
                </div>

                {/* Slots grid */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {timeSlots.map((slot) => (
                    <div 
                      key={slot}
                      onClick={() => setSelectedSlot(slot)}
                      className={`py-2 text-center text-xs font-medium rounded-lg border transition-all cursor-pointer ${selectedSlot === slot ? 'bg-wumify-purple border-wumify-purple text-white' : 'bg-white/[0.02] border-white/10 text-foreground/70 hover:border-white/20'}`}
                    >
                      {slot}
                    </div>
                  ))}
                </div>
              </div>

              <button 
                onClick={handleBook}
                disabled={!selectedSlot}
                className={`w-full py-3 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 transition-all ${selectedSlot ? 'bg-white text-black hover:bg-white/90' : 'bg-white/10 text-white/40 cursor-not-allowed'}`}
              >
                <iconify-icon icon="solar:calendar-linear" width="16" height="16" />
                Confirm Google Meet Invite
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  );
}

import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-32 pb-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-[#d4af37] font-bold uppercase tracking-widest text-xs mb-4 block">Get in Touch</span>
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6">
              Contact <span className="gold-gradient">Us</span>
            </h1>
            <p className="text-white/50 max-w-2xl mx-auto leading-relaxed">
              Have a question or want to make a reservation? Our team is here to assist you. 
              Reach out to us through any of the channels below or fill out the form.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-8">
            {[
              { icon: MapPin, title: 'Location', content: 'No 423, Nawala Road, Rajagiriya' },
              { icon: Phone, title: 'Phone', content: '+94 777474368 ' },
              { icon: Mail, title: 'Email', content: 'info@cec.lk' },
              { icon: Clock, title: 'Hours', content: 'Mon - Sun: 11:00 AM - 11:00 PM' },
            ].map((info, idx) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-start gap-6 p-8 bg-white/5 border border-white/10 rounded-3xl"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#d4af37]/10 flex items-center justify-center flex-shrink-0">
                  <info.icon className="w-6 h-6 text-[#d4af37]" />
                </div>
                <div>
                  <h3 className="text-white font-bold uppercase tracking-widest text-xs mb-2">{info.title}</h3>
                  <p className="text-white/60 leading-relaxed">{info.content}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-10 bg-white/5 border border-white/10 rounded-3xl"
            >
              <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-white/40 ml-1">Full Name</label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-white focus:outline-none focus:border-[#d4af37] transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-white/40 ml-1">Email Address</label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-white focus:outline-none focus:border-[#d4af37] transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-white/40 ml-1">Subject</label>
                  <select className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-white/60 focus:outline-none focus:border-[#d4af37] transition-colors appearance-none">
                    <option>Table Reservation</option>
                    <option>Private Event</option>
                    <option>Feedback</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-white/40 ml-1">Message</label>
                  <textarea
                    rows={6}
                    placeholder="Tell us more about your request..."
                    className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-white focus:outline-none focus:border-[#d4af37] transition-colors resize-none"
                  ></textarea>
                </div>

                <button className="w-full py-5 bg-[#d4af37] text-black font-bold uppercase tracking-widest text-sm rounded-2xl hover:scale-[1.02] transition-transform flex items-center justify-center gap-3">
                  Send Message <Send className="w-4 h-4" />
                </button>
              </form>
            </motion.div>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="mt-24 aspect-[21/9] rounded-3xl overflow-hidden border border-white/10 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-700">
  <iframe
    src="https://www.google.com/maps?q=423+Nawala+Rd,+Sri+Jayawardenepura+Kotte+10100&output=embed"
    className="w-full h-full"
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    allowFullScreen
  ></iframe>
</div>
      </div>
    </div>
  );
}

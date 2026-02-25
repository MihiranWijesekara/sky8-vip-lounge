import { motion } from 'motion/react';
import { Award, Users, Heart, ShieldCheck } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-32 pb-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[#d4af37] font-bold uppercase tracking-widest text-xs mb-4 block">Our Story</span>
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-8 leading-tight">
              Crafting Excellence <br />
              <span className="gold-gradient">Since 2025</span>
            </h1>
            <p className="text-white/50 text-lg leading-relaxed mb-8">
              Sky8 VIP Lounge was born from a simple vision: to create a sanctuary where culinary mastery and luxury hospitality converge. What started as a small boutique lounge has evolved into one of the city's most prestigious dining destinations.
            </p>
            <p className="text-white/50 text-lg leading-relaxed">
              Our philosophy is rooted in the belief that dining is not just about food, but about the memories created around the table. Every ingredient is hand-selected, every recipe is tested to perfection, and every guest is treated like royalty.
            </p>
          </motion.div>

          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=1000"
                className="w-full h-full object-cover"
                alt="Our Kitchen"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -top-8 -left-8 w-48 h-48 bg-[#d4af37] rounded-3xl p-8 flex flex-col justify-center items-center text-black text-center">
              <span className="text-4xl font-bold">1+</span>
              <span className="text-[10px] font-bold uppercase tracking-widest">Years of Excellence</span>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
          {[
            { icon: Award, title: 'Quality First', desc: 'We source only the finest, freshest ingredients for every dish.' },
            { icon: Users, title: 'Expert Team', desc: 'Our chefs and staff are trained to provide world-class service.' },
            { icon: Heart, title: 'Passion', desc: 'Every plate is a work of art created with genuine passion.' },
            { icon: ShieldCheck, title: 'Exclusivity', desc: 'A VIP experience designed for those who appreciate the best.' },
          ].map((value, idx) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="p-8 bg-white/5 border border-white/10 rounded-3xl hover:border-[#d4af37]/30 transition-all group"
            >
              <value.icon className="w-10 h-10 text-[#d4af37] mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-serif font-bold text-white mb-4">{value.title}</h3>
              <p className="text-white/40 text-sm leading-relaxed">{value.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Team Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-white mb-4">Meet Our <span className="gold-gradient">Master Chefs</span></h2>
          <p className="text-white/50 max-w-2xl mx-auto">The creative minds behind our exquisite menu, bringing decades of international experience to your table.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { name: 'Marcus Sterling', role: 'Executive Chef', img: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&q=80&w=600' },
            { name: 'Elena Rodriguez', role: 'Pastry Chef', img: 'https://images.unsplash.com/photo-1583394293214-28ded15ee548?auto=format&fit=crop&q=80&w=600' },
            { name: 'David Chen', role: 'Sous Chef', img: 'https://images.unsplash.com/photo-1595273670150-bd0c3c392e46?auto=format&fit=crop&q=80&w=600' },
          ].map((member, idx) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="aspect-[3/4] rounded-3xl overflow-hidden mb-6">
                <img
                  src={member.img}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  alt={member.name}
                  referrerPolicy="no-referrer"
                />
              </div>
              <h3 className="text-xl font-serif font-bold text-white">{member.name}</h3>
              <p className="text-[#d4af37] text-xs font-bold uppercase tracking-widest mt-1">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

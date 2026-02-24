import { motion } from 'motion/react';
import { menuData, MenuItem } from '../data/menu';
import DishCard from '../components/DishCard';
import { useState } from 'react';
import DishModal from '../components/DishModal';
import { ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const specialDishes = menuData.flatMap(section => section.items).filter(item => item.isSpecial).slice(0, 4);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=2000"
            className="w-full h-full object-cover opacity-40 scale-110"
            alt="Hero Background"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[#d4af37] font-bold uppercase tracking-[0.3em] text-sm mb-6 block">Welcome to Sky8 VIP Lounge</span>
            <h1 className="text-6xl md:text-8xl font-serif font-bold text-white mb-8 leading-tight tracking-tighter">
              Elevate Your <br />
              <span className="gold-gradient">Dining Experience</span>
            </h1>
            <p className="text-white/60 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
              Indulge in a symphony of flavors where luxury meets culinary artistry. 
              Discover our curated selection of premium dishes crafted for the discerning palate.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link
                to="/menu"
                className="px-10 py-5 bg-[#d4af37] text-black font-bold uppercase tracking-widest text-sm rounded-2xl hover:scale-105 transition-transform flex items-center gap-2"
              >
                Explore Menu <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/about"
                className="px-10 py-5 bg-white/5 border border-white/10 text-white font-bold uppercase tracking-widest text-sm rounded-2xl hover:bg-white/10 transition-all"
              >
                Our Story
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Special Menu Section */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 text-[#d4af37] mb-4">
                <Star className="w-5 h-5 fill-[#d4af37]" />
                <span className="font-bold uppercase tracking-widest text-xs">Chef's Selection</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-white">
                Today's <span className="gold-gradient">Specialties</span>
              </h2>
            </div>
            <Link to="/menu" className="text-[#d4af37] font-bold uppercase tracking-widest text-sm flex items-center gap-2 hover:gap-4 transition-all">
              View Full Menu <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {specialDishes.map((item, idx) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <DishCard item={item} onClick={(i) => setSelectedItem(i)} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-24 bg-[#080808]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1550966842-2849a220276c?auto=format&fit=crop&q=80&w=1000"
                  className="w-full h-full object-cover"
                  alt="Dining Experience"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-[#d4af37] rounded-3xl -z-10 opacity-20 blur-3xl" />
            </div>
            
            <div>
              <span className="text-[#d4af37] font-bold uppercase tracking-widest text-xs mb-4 block">The Atmosphere</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-8 leading-tight">
                A Space Designed for <br />
                <span className="gold-gradient">Unforgettable Moments</span>
              </h2>
              <p className="text-white/50 text-lg mb-10 leading-relaxed">
                From the ambient lighting to the meticulously curated decor, every element of Sky8 VIP Lounge is designed to transport you to a world of luxury and comfort. Whether it's a romantic dinner or a corporate gathering, we provide the perfect backdrop.
              </p>
              <ul className="space-y-6 mb-12">
                {[
                  'Private VIP Lounges for intimate gatherings',
                  'Live jazz performances on weekends',
                  'Exquisite wine cellar with international selections',
                  'Bespoke cocktail menu by award-winning mixologists'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-4 text-white/80">
                    <div className="w-2 h-2 rounded-full bg-[#d4af37]" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className="inline-block px-10 py-5 bg-white text-black font-bold uppercase tracking-widest text-sm rounded-2xl hover:bg-[#d4af37] transition-colors"
              >
                Book a Table
              </Link>
            </div>
          </div>
        </div>
      </section>

      <DishModal item={selectedItem} onClose={() => setSelectedItem(null)} />
    </div>
  );
}

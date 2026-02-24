import { motion, AnimatePresence } from 'motion/react';
import { MenuItem } from '../data/menu';
import { X, Check } from 'lucide-react';
import { useState } from 'react';

interface DishModalProps {
  item: MenuItem | null;
  onClose: () => void;
}

export default function DishModal({ item, onClose }: DishModalProps) {
  const [selectedSize, setSelectedSize] = useState(0);
  
  if (!item) return null;

  const formatLKR = (n: number) => 'LKR ' + n.toLocaleString('en-US');

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/90 backdrop-blur-sm"
        />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative bg-[#121212] w-full max-w-2xl rounded-3xl overflow-hidden border border-white/10 shadow-2xl"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 bg-black/50 backdrop-blur-md rounded-full text-white hover:bg-[#d4af37] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="h-64 md:h-auto">
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            
            <div className="p-8 flex flex-col">
              <h2 className="text-3xl font-serif font-bold text-white mb-2">{item.name}</h2>
              <p className="text-white/50 text-sm mb-8 leading-relaxed">
                {item.desc || "Our signature dish, prepared with passion and precision. We use only the freshest ingredients sourced from local producers to ensure the highest quality and flavor profile."}
              </p>
              
              <div className="mb-8">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#d4af37] block mb-4">Select Size</span>
                <div className="flex flex-wrap gap-3">
                  {item.sizes.map((size, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedSize(idx)}
                      className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-widest border transition-all flex items-center gap-2 ${
                        selectedSize === idx
                          ? 'bg-[#d4af37] border-[#d4af37] text-black'
                          : 'bg-white/5 border-white/10 text-white/70 hover:border-[#d4af37]/50'
                      }`}
                    >
                      {selectedSize === idx && <Check className="w-3 h-3" />}
                      {size.label}
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="mt-auto pt-8 border-t border-white/5 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-white/40 block mb-1">Price</span>
                  <span className="text-2xl font-bold text-[#d4af37]">
                    {formatLKR(item.sizes[selectedSize].price)}
                  </span>
                </div>
                
                <button 
                  onClick={onClose}
                  className="px-8 py-4 rounded-2xl bg-[#d4af37] text-black font-bold uppercase tracking-widest text-xs hover:scale-105 transition-transform"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

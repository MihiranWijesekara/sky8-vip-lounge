import { motion } from "motion/react";
import { MenuItem } from "../data/menu";
import { Info } from "lucide-react";

interface DishCardProps {
  item: MenuItem;
  onClick: (item: MenuItem) => void;
  key?: string | number;
}

export default function DishCard({ item, onClick }: DishCardProps) {
  const formatLKR = (n: number) => "LKR " + n.toLocaleString("en-US");

  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="group bg-[#121212] rounded-2xl overflow-hidden border border-white/5 hover:border-[#d4af37]/30 transition-all cursor-pointer"
      onClick={() => onClick(item)}
    >
      <div className="relative h-56 w-72 overflow-hidden">
        <img
          src={item.img}
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
        <div className="absolute bottom-4 left-4">
          <span className="px-3 py-1 bg-black/60 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-widest text-[#d4af37] border border-[#d4af37]/30">
            {item.sizes[0].label} • {formatLKR(item.sizes[0].price)}
          </span>
        </div>
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between gap-4 mb-2">
          <h3 className="text-lg font-serif font-bold text-white group-hover:text-[#d4af37] transition-colors">
            {item.name}
          </h3>
        </div>
        <div className="flex items-start justify-between gap-4 mb-2">
          <span className="text-[#d4af37] font-bold">
            {formatLKR(item.sizes[0].price)}
          </span>
        </div>

        <p className="text-white/40 text-sm line-clamp-2 mb-6 leading-relaxed">
          {item.desc ||
            "Exquisitely prepared with the finest ingredients for a truly premium dining experience."}
        </p>

        <button className="w-full py-3 rounded-xl bg-white/5 border border-white/10 text-white text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 group-hover:bg-[#d4af37] group-hover:text-black group-hover:border-[#d4af37] transition-all">
          <Info className="w-4 h-4" />
          View Details
        </button>
      </div>
    </motion.div>
  );
}

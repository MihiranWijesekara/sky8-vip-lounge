import { motion } from "motion/react";
import { menuData, MenuItem } from "../data/menu";
import DishCard from "../components/DishCard";
import { useState } from "react";
import DishModal from "../components/DishModal";
import { Search } from "lucide-react";

export default function Menu() {
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", ...menuData.map((section) => section.title)];

  const filteredMenu = menuData
    .map((section) => ({
      ...section,
      items: section.items.filter(
        (item) =>
          (activeCategory === "All" || section.title === activeCategory) &&
          item.name.toLowerCase().includes(searchQuery.toLowerCase()),
      ),
    }))
    .filter((section) => section.items.length > 0);

  return (
    <div className="pt-32 pb-24 min-h-screen bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-[#d4af37] font-bold uppercase tracking-widest text-xs mb-4 block">
              Our Culinary Collection
            </span>
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6">
              The <span className="gold-gradient">Menu</span>
            </h1>
            <p className="text-white/50 max-w-2xl mx-auto leading-relaxed">
              Explore our diverse range of dishes, from traditional favorites to
              modern innovations. Each dish is prepared with the freshest
              ingredients and a touch of VIP luxury.
            </p>
          </motion.div>
        </div>

        {/* Controls */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-16">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-widest border transition-all ${
                  activeCategory === cat
                    ? "bg-[#d4af37] border-[#d4af37] text-black"
                    : "bg-white/5 border-white/10 text-white/60 hover:border-[#d4af37]/50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
            <input
              type="text"
              placeholder="Search dishes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white text-sm focus:outline-none focus:border-[#d4af37] transition-colors"
            />
          </div>
        </div>

        {/* Menu Grid */}
        <div className="space-y-24">
          {filteredMenu.map((section) => (
            <div key={section.id}>
              <div className="flex items-center gap-6 mb-12">
                <h2 className="text-2xl font-serif font-bold text-white whitespace-nowrap">
                  {section.title}
                </h2>
                <div className="h-px w-full bg-gradient-to-r from-white/10 to-transparent" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {section.items.map((item) => (
                  <DishCard
                    key={item.name}
                    item={item}
                    onClick={(i) => setSelectedItem(i)}
                  />
                ))}
              </div>
            </div>
          ))}

          {filteredMenu.length === 0 && (
            <div className="text-center py-24">
              <p className="text-white/30 text-lg">
                No dishes found matching your search.
              </p>
            </div>
          )}
        </div>
      </div>

      <DishModal item={selectedItem} onClose={() => setSelectedItem(null)} />
    </div>
  );
}

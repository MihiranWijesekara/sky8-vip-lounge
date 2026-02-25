import { UtensilsCrossed, Instagram, Facebook, Twitter } from "lucide-react";
import sky8Logo from "../img/sky8Logo.jpeg";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              {/* <img
                src={sky8Logo}
                alt="SKY8 VIP Logo"
                width={75}
                height={85}
                className="object-contain rounded-lg"
                referrerPolicy="no-referrer"
                style={{ background: "#222" }}
              /> */}
              <span className="text-2xl font-serif font-bold tracking-tighter gold-gradient">
                SKY8 VIP
              </span>
            </div>
            <p className="text-white/50 max-w-md leading-relaxed">
              Experience the pinnacle of culinary excellence at Sky8 VIP Lounge.
              We blend traditional flavors with modern techniques to create
              unforgettable dining moments.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">
              Follow Us
            </h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#d4af37] hover:border-[#d4af37] transition-all"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#d4af37] hover:border-[#d4af37] transition-all"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#d4af37] hover:border-[#d4af37] transition-all"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">
              Hours
            </h4>
            <ul className="text-white/50 space-y-2 text-sm">
              <li>Mon - Fri: 11:00 AM - 11:00 PM</li>
              <li>Sat - Sun: 11:00 AM - 11:00 PM</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 text-center text-white/30 text-xs uppercase tracking-widest">
          © {new Date().getFullYear()} Sky8 VIP Lounge. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

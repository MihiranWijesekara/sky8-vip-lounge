export interface MenuItem {
  name: string;
  img: string;
  desc?: string;
  sizes: { label: string; price: number }[];
  isSpecial?: boolean;
}
import tomYumImg from "../img/tom-yum-1.jpg";
import thaiRiceImg from "../img/ThaiRice.jpg";
import thaiFishCakeImg from "../img/ThaiFishcake.jpg";
import padThaiImg from "../img/PadThai.jpg";
import satayChickenImg from "../img/stayChicken.jpg";
import mangoStickyImg from "../img/MangoSticky.jpg";
export interface MenuSection {
  id: number;
  title: string;
  items: MenuItem[];
}

export const menuData: MenuSection[] = [
  {
    id: 1,
    title: "Rice Dishes",
    items: [
      {
        name: "Vegetable Rice",
        img: "https://images.unsplash.com/photo-1512058560366-cd2427ffbb62?auto=format&fit=crop&q=80&w=800",
        sizes: [
          { label: "Small", price: 350 },
          { label: "Large", price: 550 },
        ],
        isSpecial: true,
      },
      {
        name: "Chicken Rice",
        img: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&q=80&w=800",
        sizes: [
          { label: "Small", price: 450 },
          { label: "Large", price: 650 },
        ],
        isSpecial: true,
      },
      {
        name: "Egg Rice",
        img: "https://images.unsplash.com/photo-1512058560366-cd2427ffbb62?auto=format&fit=crop&q=80&w=800",
        sizes: [{ label: "Plate", price: 500 }],
      },
      {
        name: "Sea Food Rice",
        img: "https://images.unsplash.com/photo-1534422298391-e4f8c170db76?auto=format&fit=crop&q=80&w=800",
        sizes: [{ label: "Plate", price: 500 }],
        isSpecial: true,
      },
      {
        name: "Mixed Rice",
        img: "https://images.unsplash.com/photo-1512058560366-cd2427ffbb62?auto=format&fit=crop&q=80&w=800",
        sizes: [{ label: "Plate", price: 480 }],
      },
    ],
  },
  {
    id: 2,
    title: "Nasi Gorana",
    items: [
      {
        name: "Chicken Nasi Gorana",
        img: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&q=80&w=800",
        sizes: [
          { label: "Small", price: 350 },
          { label: "Large", price: 550 },
        ],
      },
      {
        name: "Sea Food Nasi Gorana",
        img: "https://images.unsplash.com/photo-1534422298391-e4f8c170db76?auto=format&fit=crop&q=80&w=800",
        sizes: [
          { label: "Small", price: 450 },
          { label: "Large", price: 650 },
        ],
      },
      {
        name: "Egg Nasi Gorana",
        img: "https://images.unsplash.com/photo-1512058560366-cd2427ffbb62?auto=format&fit=crop&q=80&w=800",
        sizes: [
          { label: "Small", price: 450 },
          { label: "Large", price: 650 },
        ],
      },
    ],
  },
  {
    id: 3,
    title: "Prawn Dishes",
    items: [
      {
        name: "Fried & Chille Prawn",
        img: "https://images.unsplash.com/photo-1559742811-822873691df8?auto=format&fit=crop&q=80&w=800",
        sizes: [
          { label: "Small", price: 350 },
          { label: "Large", price: 550 },
        ],
        isSpecial: true,
      },
      {
        name: "Devilled Prawn",
        img: "https://images.unsplash.com/photo-1559742811-822873691df8?auto=format&fit=crop&q=80&w=800",
        sizes: [
          { label: "Small", price: 450 },
          { label: "Large", price: 650 },
        ],
      },
      {
        name: "Garlic Prawn",
        img: "https://images.unsplash.com/photo-1559742811-822873691df8?auto=format&fit=crop&q=80&w=800",
        sizes: [
          { label: "Small", price: 450 },
          { label: "Large", price: 650 },
        ],
      },
    ],
  },
  {
    id: 4,
    title: "Fish",
    items: [
      {
        name: "Fried & Chille Fish",
        img: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&q=80&w=800",
        sizes: [
          { label: "Small", price: 350 },
          { label: "Large", price: 550 },
        ],
      },
      {
        name: "Stew Fish",
        img: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&q=80&w=800",
        sizes: [
          { label: "Small", price: 450 },
          { label: "Large", price: 650 },
        ],
      },
      {
        name: "Devilled Fish",
        img: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&q=80&w=800",
        sizes: [
          { label: "Small", price: 450 },
          { label: "Large", price: 650 },
        ],
      },
      {
        name: "Hot Battered Fish",
        img: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&q=80&w=800",
        sizes: [
          { label: "Small", price: 450 },
          { label: "Large", price: 650 },
        ],
        isSpecial: true,
      },
    ],
  },
  {
    id: 5,
    title: "Beef",
    items: [
      {
        name: "Fried Beef Vegetable",
        img: "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&q=80&w=800",
        sizes: [
          { label: "Small", price: 350 },
          { label: "Large", price: 550 },
        ],
      },
      {
        name: "Devilled Beef",
        img: "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&q=80&w=800",
        sizes: [
          { label: "Small", price: 450 },
          { label: "Large", price: 650 },
        ],
      },
      {
        name: "Beef Stew",
        img: "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&q=80&w=800",
        sizes: [
          { label: "Small", price: 450 },
          { label: "Large", price: 650 },
        ],
      },
      {
        name: "Beef+Kankun+Garlic",
        img: "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&q=80&w=800",
        sizes: [
          { label: "Small", price: 450 },
          { label: "Large", price: 650 },
        ],
      },
    ],
  },
  {
    id: 6,
    title: "Noodles",
    items: [
      {
        name: "Vegetable Noodles",
        img: "https://images.unsplash.com/photo-1552611052-33e04de081de?auto=format&fit=crop&q=80&w=800",
        sizes: [
          { label: "Small", price: 350 },
          { label: "Large", price: 550 },
        ],
      },
      {
        name: "Chicken Noodles",
        img: "https://images.unsplash.com/photo-1552611052-33e04de081de?auto=format&fit=crop&q=80&w=800",
        sizes: [
          { label: "Small", price: 450 },
          { label: "Large", price: 650 },
        ],
      },
      {
        name: "Egg Noodles",
        img: "https://images.unsplash.com/photo-1552611052-33e04de081de?auto=format&fit=crop&q=80&w=800",
        sizes: [
          { label: "Small", price: 450 },
          { label: "Large", price: 650 },
        ],
      },
      {
        name: "Mixed Noodles",
        img: "https://images.unsplash.com/photo-1552611052-33e04de081de?auto=format&fit=crop&q=80&w=800",
        sizes: [
          { label: "Small", price: 450 },
          { label: "Large", price: 650 },
        ],
      },
      {
        name: "Sea Food Noodles",
        img: "https://images.unsplash.com/photo-1552611052-33e04de081de?auto=format&fit=crop&q=80&w=800",
        sizes: [
          { label: "Small", price: 450 },
          { label: "Large", price: 650 },
        ],
      },
    ],
  },
  {
    id: 7,
    title: "Omelet",
    items: [
      {
        name: "Cheese Omelet",
        img: "https://images.unsplash.com/photo-1510627489930-0c1b0ba9448f?auto=format&fit=crop&q=80&w=800",
        sizes: [
          { label: "Small", price: 350 },
          { label: "Large", price: 550 },
        ],
      },
      {
        name: "Sausage Omelet",
        img: "https://images.unsplash.com/photo-1510627489930-0c1b0ba9448f?auto=format&fit=crop&q=80&w=800",
        sizes: [
          { label: "Small", price: 450 },
          { label: "Large", price: 650 },
        ],
      },
      {
        name: "Cheese Omelet Chicken",
        img: "https://images.unsplash.com/photo-1510627489930-0c1b0ba9448f?auto=format&fit=crop&q=80&w=800",
        sizes: [
          { label: "Small", price: 450 },
          { label: "Large", price: 650 },
        ],
      },
    ],
  },
  {
    id: 8,
    title: "Dishes",
    items: [
      {
        name: "Fried Cashew",
        img: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?auto=format&fit=crop&q=80&w=800",
        sizes: [
          { label: "Small", price: 350 },
          { label: "Large", price: 550 },
        ],
      },
      {
        name: "Fried Peanut",
        img: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?auto=format&fit=crop&q=80&w=800",
        sizes: [
          { label: "Small", price: 450 },
          { label: "Large", price: 650 },
        ],
      },
      {
        name: "Boiled Vegetable Platter",
        img: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&q=80&w=800",
        sizes: [
          { label: "Small", price: 450 },
          { label: "Large", price: 650 },
        ],
      },
    ],
  },

  {
    id: 9,
    title: "Thai Dishes",
    items: [
      {
        name: "Thai Tom yum Soup",
        img: tomYumImg,
        sizes: [
          { label: "Small", price: 350 },
          { label: "Large", price: 550 },
        ],
      },
      {
        name: "Thai Rice ",
        img: thaiRiceImg,
        sizes: [
          { label: "Small", price: 450 },
          { label: "Large", price: 650 },
        ],
      },
      {
        name: "Thai Fish Cake(6)",
        img: thaiFishCakeImg,
        sizes: [
          { label: "Small", price: 450 },
          { label: "Large", price: 650 },
        ],
      },
      {
        name: "Pad Thai Chicken",
        img: padThaiImg,
        sizes: [
          { label: "Small", price: 450 },
          { label: "Large", price: 650 },
        ],
      },
      {
        name: "Satay Chicken",
        img: satayChickenImg,
        sizes: [
          { label: "Small", price: 450 },
          { label: "Large", price: 650 },
        ],
      },
      {
        name: "Sticky Rice with Mango ",
        img: mangoStickyImg,
        sizes: [
          { label: "Small", price: 450 },
          { label: "Large", price: 650 },
        ],
      },
    ],
  },
];

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
import vegetablericeImg from "../img/VegetableRice.jpg";
import ChickenRiceImg from "../img/ChickenFriedRice.jpg";
import eggriceImg from "../img/eggrice.jpg";
import SeaFoodRiceImg from "../img/SeaFoodRice.jpg";
import MixedRiceImg from "../img/MixedRice.jpg";
import ChickenNasiGoranaImg from "../img/ChickenNasiGorana.jpg";
import mixednasiImg from "../img/mixednasi.jpg";
import eggnasiImg from "../img/eggnasi.jpg";
import FriedPrawnImg from "../img/FriedPrawn.jpg";
import DevilledPrawnImg from "../img/DevilledPrawn.jpg";
import GarlicPrawnImg from "../img/GarlicPrawn.jpg";
import FriedChilleImg from "../img/FriedChille.jpg";
import StewFishImg from "../img/StewFish.jpg";
import DevilledFishImg from "../img/DevilledFish.jpg";
import HotBatteredImg from "../img/HotBattered.jpg";
import FriedBeefVegetableImg from "../img/Fried Beef Vegetable.jpg";
import DevilledBeefImg from "../img/DevilledBeef.jpg";
import BeefStewImg from "../img/BeefStew.jpg";
import KankunImg from "../img/Kankun.jpg";
import VegetableNoodlesImg from "../img/VegetableNoodles.jpg";
import ChickenNoodlesImg from "../img/ChickenNoodles.jpg";
import EggNoodlesImg from "../img/EggNoodles.jpg";
import MixedNoodlesImg from "../img/MixedNoodles.jpg";
import seafoodImg from "../img/seafood.jpg";
import cheesImg from "../img/chees.jpg";
import SausageOmeletImg from "../img/SausageOmelet.jpg";
import bbImg from "../img/bb.jpg";

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
        img: vegetablericeImg,
        desc: "A healthy blend of fresh vegetables and aromatic rice, perfect for vegetarians.",
        sizes: [{ label: "Two Person", price: 1400 }],
      },

      {
        name: "Chicken Rice",
        img: ChickenRiceImg,
        desc: "Tender chicken pieces served with fragrant rice and a blend of spices.",
        sizes: [{ label: "Two Person", price: 1900 }],
        isSpecial: true,
      },

      {
        name: "Egg Rice",
        img: eggriceImg,
        desc: "Classic rice tossed with scrambled eggs and mild seasonings.",
        sizes: [{ label: "Two Person", price: 1500 }],
        isSpecial: true,
      },

      {
        name: "Sea Food Rice",
        img: SeaFoodRiceImg,
        desc: "A rich medley of seafood and rice, cooked to perfection with coastal spices.",
        sizes: [{ label: "Two Person", price: 2200 }],
        isSpecial: true,
      },

      {
        name: "Mixed Rice",
        img: MixedRiceImg,
        desc: "A flavorful mix of rice, vegetables, and proteins for a hearty meal.",
        sizes: [{ label: "Two Person", price: 2200 }],
        isSpecial: true,
      },
    ],
  },

  {
    id: 2,
    title: "Nasi Gorana",
    items: [
      {
        name: "Chicken Nasi Gorana",
        img: ChickenNasiGoranaImg,
        desc: "Indonesian-style fried rice with succulent chicken and vegetables.",
        sizes: [{ label: "Two Person", price: 1950 }],
        isSpecial: true,
      },

      {
        name: "Seafood Nasi Gorana",
        img: eggnasiImg,
        desc: "A delicious blend of fried rice with fresh seafood, seasoned with traditional spices.",
        sizes: [{ label: "Two Person", price: 2700 }],
        isSpecial: true,
      },

      {
        name: "Mixed Nasi Gorana",
        img: mixednasiImg,
        desc: "A flavorful mix of fried rice, vegetables, and meats.",
        sizes: [{ label: "Two Person", price: 2450 }],
        isSpecial: true,
      },
    ],
  },
  {
    id: 3,
    title: "Prawn Dishes",
    items: [
      {
        name: "Fried & Chille Prawn",
        img: FriedPrawnImg,
        desc: "Juicy prawns fried and tossed with spicy chili sauce.",
        sizes: [{ label: "One plate", price: 2300 }],
        isSpecial: true,
      },
      {
        name: "Devilled Prawn",
        img: DevilledPrawnImg,
        desc: "Prawns cooked in a fiery devilled sauce for spice lovers.",
        sizes: [{ label: "One plate", price: 2300 }],
        isSpecial: true,
      },
      {
        name: "Garlic Prawn",
        img: GarlicPrawnImg,
        desc: "Prawns sautéed with garlic and herbs for a savory treat.",
        sizes: [{ label: "One plate", price: 2300 }],
        isSpecial: true,
      },
    ],
  },
  {
    id: 4,
    title: "Fish",
    items: [
      {
        name: "Fried & Chille Fish",
        img: FriedChilleImg,
        desc: "Fish fillets fried and tossed in spicy chili sauce.",
        sizes: [{ label: "One plate", price: 1800 }],
        isSpecial: true,
      },
      {
        name: "Stew Fish",
        img: StewFishImg,
        desc: "Tender fish cooked in a rich stew with vegetables and spices.",
        sizes: [{ label: "One plate", price: 2200 }],
        isSpecial: true,
      },
      {
        name: "Devilled Fish",
        img: DevilledFishImg,
        desc: "Fish cooked in spicy devilled sauce for a bold flavor.",
        sizes: [{ label: "One plate", price: 2200 }],
        isSpecial: true,
      },
      {
        name: "Hot Battered Fish",
        img: HotBatteredImg,
        desc: "Crispy battered fish served hot with tangy sauce.",
        sizes: [{ label: "One plate", price: 2400 }],
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
        img: FriedBeefVegetableImg,
        desc: "Beef stir-fried with fresh vegetables and savory sauce.",
        sizes: [{ label: "One plate", price: 2800 }],
        isSpecial: true,
      },
      {
        name: "Devilled Beef",
        img: DevilledBeefImg,
        desc: "Beef cooked in spicy devilled sauce for a fiery taste.",
        sizes: [{ label: "One plate", price: 2400 }],
        isSpecial: true,
      },
      {
        name: "Beef Stew",
        img: BeefStewImg,
        desc: "Slow-cooked beef stew with rich flavors and tender meat.",
        sizes: [{ label: "One plate", price: 2200 }],
        isSpecial: true,
      },
      {
        name: "Beef with Kankun and Garlic",
        img: KankunImg,
        desc: "Beef stir-fried with kankun and garlic for a unique flavor.",
        sizes: [{ label: "One plate", price: 2400 }],
        isSpecial: true,
      },
    ],
  },
  {
    id: 6,
    title: "Noodles",
    items: [
      {
        name: "Vegetable Noodles",
        img: VegetableNoodlesImg,
        desc: "Noodles stir-fried with assorted vegetables and light sauce.",
        sizes: [{ label: "Two Person", price: 1400 }],
        isSpecial: true,
      },
      {
        name: "Chicken Noodles",
        img: ChickenNoodlesImg,
        desc: "Noodles stir-fried with chicken and vegetables.",
        sizes: [{ label: "Two Person", price: 1900 }],
        isSpecial: true,
      },

      {
        name: "Egg Noodles",
        img: EggNoodlesImg,
        desc: "Noodles stir-fried with egg and mild spices.",
        sizes: [{ label: "Two Person", price: 1500 }],
        isSpecial: true,
      },
      {
        name: "Mixed Noodles",
        img: MixedNoodlesImg,
        desc: "A mix of noodles, vegetables, and proteins for a filling meal.",
        sizes: [{ label: "Two Person", price: 2200 }],
        isSpecial: true,
      },
      {
        name: "Sea Food Noodles",
        img: seafoodImg,
        desc: "Noodles stir-fried with assorted seafood and vegetables.",
        sizes: [{ label: "Two Person", price: 2200 }],
        isSpecial: true,
      },
    ],
  },
  {
    id: 7,
    title: "Omelet",
    items: [
      {
        name: "Cheese Omelet",
        img: cheesImg,
        desc: "Fluffy omelet with melted cheese and herbs.",
        sizes: [{ label: "One ", price: 1150 }],
        isSpecial: true,
      },
      {
        name: "Sausage Omelet",
        img: SausageOmeletImg,
        desc: "Omelet stuffed with savory sausage pieces.",
        sizes: [{ label: "One", price: 950 }],
        isSpecial: true,
      },
      {
        name: "Cheese Omelet Chicken",
        img: bbImg,
        desc: "Cheese omelet with tender chicken pieces for extra protein.",
        sizes: [{ label: "One", price: 1350 }],
        isSpecial: true,
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
        desc: "A classic Thai soup with spicy and sour flavors, loaded with seafood and herbs.",
        sizes: [{ label: "One portion", price: 1400 }],
      },
      {
        name: "Thai Rice",
        img: thaiRiceImg,
        desc: "Fragrant Thai rice cooked with traditional spices and vegetables.",
        sizes: [{ label: "Two Person", price: 1200 }],
      },
      {
        name: "Thai Fish Cake(6)",
        img: thaiFishCakeImg,
        desc: "Six pieces of authentic Thai fish cakes, crispy and flavorful.",
        sizes: [{ label: "Six Pieces  ", price: 2740 }],
      },
      {
        name: "Pad Thai Chicken",
        img: padThaiImg,
        desc: "Classic Pad Thai noodles stir-fried with chicken, peanuts, and vegetables.",
        sizes: [{ label: "One Plate", price: 2870 }],
      },
      {
        name: "Satay Chicken",
        img: satayChickenImg,
        desc: "Grilled chicken skewers served with creamy satay sauce.",
        sizes: [{ label: "One Plate", price: 1650 }],
      },
      {
        name: "Sticky Rice with Mango",
        img: mangoStickyImg,
        desc: "Sweet sticky rice topped with fresh mango slices, a Thai dessert favorite.",
        sizes: [{ label: "One portion", price: 2200 }],
      },
    ],
  },
];

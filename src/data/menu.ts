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
import  ChickenRiceImg from "../img/ChickenRice.jpg";
import  eggriceImg from "../img/eggrice.jpg";
import  SeaFoodRiceImg from "../img/SeaFoodRice.jpg";
import  MixedRiceImg from "../img/MixedRice.jpg";
import  ChickenNasiGoranaImg from "../img/ChickenNasiGorana.jpg";
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
        sizes: [
          { label: "Small", price: 350 },
          { label: "Large", price: 550 },
        ],
      },

      {
        name: "Chicken Rice",
        img: ChickenRiceImg,
        sizes: [
          { label: "Small", price: 450 },
          { label: "Large", price: 650 },
        ],
        isSpecial: true,
      },
    
      {
        name: "Egg Rice",
        img: eggriceImg,
        sizes: [
          { label: "Small", price: 450 },
          { label: "Large", price: 650 },
        ],
        isSpecial: true,
      },

       
      {
        name: "Sea Food Rice",
        img: SeaFoodRiceImg,
        sizes: [
          { label: "Small", price: 450 },
          { label: "Large", price: 650 },
        ],
        isSpecial: true,
      },

       
      {
        name: "Sea Food Rice",
        img: MixedRiceImg,
        sizes: [
          { label: "Small", price: 450 },
          { label: "Large", price: 650 },
        ],
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
        sizes: [
          { label: "Small", price: 450 },
          { label: "Large", price: 650 },
        ],
        isSpecial: true,
      },

    
  {
        name: "Mixed Nasi Gorana",
        img: mixednasiImg,
        sizes: [
          { label: "Small", price: 450 },
          { label: "Large", price: 650 },
        ],
        isSpecial: true,
      },

      {
        name: "Egg Nasi Gorana",
        img: eggnasiImg,
        sizes: [
          { label: "Small", price: 450 },
          { label: "Large", price: 650 },
        ],
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
        sizes: [
          { label: "Small", price: 450 },
          { label: "Large", price: 650 },
        ],
        isSpecial: true,
      },
        {
        name: "Devilled Prawn",
        img: DevilledPrawnImg,
        sizes: [
          { label: "Small", price: 450 },
          { label: "Large", price: 650 },
        ],
        isSpecial: true,
      },
     {
        name: "Garlic Prawn",
        img:GarlicPrawnImg ,
        sizes: [
          { label: "Small", price: 450 },
          { label: "Large", price: 650 },
        ],
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
        img: FriedChilleImg ,
        sizes: [
          { label: "Small", price: 450 },
          { label: "Large", price: 650 },
        ],
        isSpecial: true,
      },
      {
        name: " Stew Fish",
        img:  StewFishImg ,
        sizes: [
          { label: "Small", price: 450 },
          { label: "Large", price: 650 },
        ],
        isSpecial: true,
      },
         {
        name: "Devilled Fish",
        img: DevilledFishImg ,
        sizes: [
          { label: "Small", price: 450 },
          { label: "Large", price: 650 }, 
        ],
        isSpecial: true,
      },
      {
        name: " Hot Battered Fish",
        img:  HotBatteredImg ,
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
        name: " Fried Beef Vegetable",
        img:  FriedBeefVegetableImg ,
        sizes: [
          { label: "Small", price: 450 },
          { label: "Large", price: 650 },
        ],
        isSpecial: true,
      },
    {
        name: " Devilled Beef",
        img: DevilledBeefImg ,
        sizes: [
          { label: "Small", price: 450 },
          { label: "Large", price: 650 },
        ],
        isSpecial: true,
      },
      {
        name: "  Beef Stew",
        img:   BeefStewImg ,
        sizes: [
          { label: "Small", price: 450 },
          { label: "Large", price: 650 },
        ],
        isSpecial: true,  
      },
  {
        name: " Beef with Kankun and Garlic",
        img:  KankunImg ,
        sizes: [
          { label: "Small", price: 450 },
          { label: "Large", price: 650 },
        ],
        isSpecial: true,  
      },
  
    ],
  },
  {
    id: 6,
    title: "Noodles",
    items: [
      {
        name: " Vegetable Noodles",
        img:  VegetableNoodlesImg ,
        sizes: [
          { label: "Small", price: 450 },
          { label: "Large", price: 650 }, 
        ],
        isSpecial: true,  
      },
       {
        name: " Chicken Noodles",
        img:  ChickenNoodlesImg ,
        sizes: [
          { label: "Small", price: 450 },
          { label: "Large", price: 650 },
        ],
        isSpecial: true,  
      },
  
    {
        name: "Egg Noodles",
        img: EggNoodlesImg,
        sizes: [
          { label: "Small", price: 450 },
          { label: "Large", price: 650 },
        ],
        isSpecial: true,
      },
      {
        name: "Mixed Noodles",
        img: MixedNoodlesImg,
        sizes: [
          { label: "Small", price: 450 },
          { label: "Large", price: 650 },
        ],
        isSpecial: true,
      },
        {
        name: "Sea Food Noodles",
        img: seafoodImg,
        sizes: [
          { label: "Small", price: 450 },
          { label: "Large", price: 650 },
        ],
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
        sizes: [
          { label: "Small", price: 450 },
          { label: "Large", price: 650 },
        ],
        isSpecial: true,
      },
       {
        name: "Sausage Omelet",
        img: SausageOmeletImg,
        sizes: [
          { label: "Small", price: 450 },
          { label: "Large", price: 650 },  
        ],
        isSpecial: true,
      },
      {
        name: "Cheese Omelet Chicken",
        img: bbImg,
        sizes: [
          { label: "Small", price: 450 },
          { label: "Large", price: 650 },
        ],
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

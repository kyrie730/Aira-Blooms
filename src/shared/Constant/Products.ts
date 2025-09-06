import { Products } from "./Assets";

export interface BouquetList {
  title: string;
  items: Bouquet[];
}

interface Bouquet {
  name: string;
  size?: "Small" | "Medium" | "Large";
  price: number;
  imgUrl: string;
}

export const FreshSynth: BouquetList = {
  title: "Fresh/Synthetic Flowers",
  items: [
    {
      name: "Saki",
      size: "Small",
      imgUrl: Products.Syn_S_Saki,
      price: 13000,
    },
    {
      name: "Yuai",
      size: "Small",
      price: 15000,
      imgUrl: Products.Syn_S_Yuai,
    },
    {
      name: "Honne",
      size: "Small",
      price: 25000,
      imgUrl: Products.Syn_S_Honne,
    },
    {
      name: "Aya",
      size: "Small",
      price: 79000,
      imgUrl: Products.Syn_S_Aya,
    },
    {
      name: "Sora",
      size: "Medium",
      price: 185000,
      imgUrl: Products.Syn_M_Sora,
    },
    {
      name: "Puchi",
      size: "Medium",
      price: 225000,
      imgUrl: Products.Syn_M_Puchi,
    },
    {
      name: "Shika",
      size: "Large",
      price: 335000,
      imgUrl: Products.Syn_L_Shika,
    },
    {
      name: "Keia",
      size: "Large",
      price: 335000,
      imgUrl: Products.Syn_L_Keia,
    },
  ],
};

export const HandmadeRibbon: BouquetList = {
  title: "Handmade Ribbon Flowers",
  items: [
    {
      name: "Clara",
      size: "Small",
      price: 20000,
      imgUrl: Products.Hand_S_Clara,
    },
    {
      name: "Milica",
      size: "Small",
      price: 65000,
      imgUrl: Products.Hand_S_Milica,
    },
    {
      name: "Elara",
      size: "Medium",
      price: 95000,
      imgUrl: Products.Hand_M_Elara,
    },
    {
      name: "Lyah",
      size: "Medium",
      price: 150000,
      imgUrl: Products.Hand_M_Lyah,
    },
    {
      name: "Aurelia",
      size: "Large",
      price: 190000,
      imgUrl: Products.Hand_L_Aurelia,
    },
    {
      name: "Lane",
      size: "Large",
      price: 225000,
      imgUrl: Products.Hand_L_Lane,
    },
  ],
};

export const Valentine: BouquetList = {
  title: "Valentine Edition",
  items: [
    { name: "Pesan Kasih", price: 75000, imgUrl: Products.Val_Pesan },
    { name: "Sentuhan Hati", price: 155000, imgUrl: Products.Val_Sentuhan },
    { name: "Cinta Sejati", price: 185000, imgUrl: Products.Val_Cinta },
  ],
};

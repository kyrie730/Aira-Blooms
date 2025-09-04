"use client";
import { Images, Products } from "@/shared/Constant/Assets";
import { ReactNode, useEffect, useState } from "react";
import { RedirectToWA } from "@/shared/Utility";
import { AnimatePresence, motion } from "framer-motion";
import ProductList from "../ProductList";

import {
  FreshSynth,
  HandmadeRibbon,
  Valentine,
} from "@/shared/Constant/Products";
import TypewriterText from "@/shared/Component/TypewriterText/Component";

export default function ProductPage(): ReactNode {
  const backgroundImages = [
    Products.Hand_M_Lyah,
    Products.Syn_L_Keia,
    Products.Val_Cinta,
  ];
  const [bgIndex, setBgIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPrevIndex(bgIndex);
      setBgIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 10000);
    return () => clearInterval(interval);
  }, [bgIndex]);

  return (
    <div className="gap-10 flex flex-col">
      <div className="relative overflow-hidden min-h-screen">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.5)), url(${backgroundImages[prevIndex]})`,
          }}
        />

        <AnimatePresence mode="wait">
          <motion.div
            key={bgIndex}
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{}}
            transition={{ duration: 2 }}
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.5)), url(${backgroundImages[bgIndex]})`,
            }}
          />
        </AnimatePresence>

        <div
          className="relative z-1 flex w-full space-x-4 gap-6 items-center justify-center flex-col min-h-screen text-white px-6 text-center"
          id="hero"
        >
          <motion.h1
            className="text-6xl font-serif font-bold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <TypewriterText text="Discover Our Signature Blooms" />
          </motion.h1>
          <motion.p
            className="text-lg text-gray-300 max-w-2xl font-serif text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 2 }}
          >
            <TypewriterText text="Explore our collection of handcrafted flower bouquets made with heart, detail, and love. Each piece is designed to brighten your moments and leave a lasting impression." />
          </motion.p>
        </div>
      </div>
      <div id="fresh-synthetic">
        <ProductList title={FreshSynth.title} items={FreshSynth.items} />
      </div>
      <div id="handmade-ribbon">
        <ProductList
          title={HandmadeRibbon.title}
          items={HandmadeRibbon.items}
        />
      </div>
      <div id="valentine-edition">
        <ProductList title={Valentine.title} items={Valentine.items} />
      </div>
    </div>
  );
}

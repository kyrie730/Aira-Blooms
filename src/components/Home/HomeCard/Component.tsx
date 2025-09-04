"use client";
import { Images } from "@/shared/Constant/Assets";
import { ReactNode, useEffect, useState } from "react";
import NewestCollection from "../NewestCollection";
import Advantages from "../Advantages";
import { RedirectToWA } from "@/shared/Utility";
import { AnimatePresence, motion } from "framer-motion";
import TypewriterText from "@/shared/Component/TypewriterText/Component";

export default function HomeCard(): ReactNode {
  const backgroundImages = [
    Images.AiraHome,
    Images.AiraHome1,
    Images.AiraHome2,
  ];
  const [bgIndex, setBgIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(2);

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

        <div className="relative z-1 flex w-full space-x-4 gap-6 items-center justify-center flex-col min-h-screen text-white px-6 text-center">
          <motion.h1
            className="text-6xl font-serif font-bold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <TypewriterText text="Every story is unique." />
          </motion.h1>
          <motion.p
            className="text-lg text-gray-300 text-justify max-w-2xl font-serif"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 2 }}
          >
            <TypewriterText text="Let's craft flowers that speak yours." />
          </motion.p>
          <motion.button
            className="md:w-1/4 p-4 bg-primary text-secondary rounded-2xl font-serif text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 4 }}
            onClick={() => RedirectToWA()}
          >
            Order Your Custom Flowers
          </motion.button>
        </div>
      </div>

      <Advantages />
      <NewestCollection />
    </div>
  );
}

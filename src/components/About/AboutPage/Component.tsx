"use client";
import { Images, Products } from "@/shared/Constant/Assets";
import { ReactNode, useEffect, useState } from "react";
import { RedirectToWA } from "@/shared/Utility";
import { AnimatePresence, motion } from "framer-motion";
import dynamic from "next/dynamic";
import TypewriterText from "@/shared/Component/TypewriterText/Component";
import { Image } from "@chakra-ui/react";

const Map = dynamic(() => import("@/components/About/Map/Component"), {
  ssr: false,
});

export default function AboutPage(): ReactNode {
  return (
    <div className="gap-16 flex flex-col font-serif">
      <div className="relative overflow-hidden min-h-screen">
        <div
          className="absolute inset-0 bg-cover bg-top"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.5)), url(${Images.MarelWhite})`,
          }}
        />

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
            <TypewriterText text="Unveil Our Story" />
          </motion.h1>
          <motion.p
            className="text-lg text-gray-300 max-w-2xl font-serif text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 2 }}
          >
            <TypewriterText text="Step into our world and discover how Aira turns ordinary days into something truly special." />
          </motion.p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-3 px-10">
        <div className="md:w-1/2 justify-items-center">
          <Image
            rounded={"lg"}
            height={300}
            width={400}
            objectFit={"cover"}
            src={Images.MarelWhite}
            objectPosition={"top"}
          />
        </div>
        <div className="flex-col flex md:w-1/2 gap-5">
          <p className="text-4xl font-bold text-primary">
            It all started with a girl in high school who couldn’t stop admiring
            flowers.
          </p>
          <p className="text-primary-light">
            Fascinated by their colors and beauty, she began crafting small
            handmade ribbon bouquets long before they became popular. What
            started as a simple hobby quickly grew into a passion.In 2018, that
            passion became Ascenceur Flower, a small brand that opened
            pre-orders only once a year for Valentine’s Day. For seven years, it
            bloomed quietly until the time came for it to grow into something
            more.
          </p>
        </div>
      </div>
      <div className="flex flex-col-reverse md:flex-row gap-3 px-10">
        <div className="flex-col flex md:w-1/2 font-serif gap-5">
          <p className="text-4xl font-bold text-primary">
            That’s when Ascenceur Flower transformed into Aira Blooms
          </p>
          <p className="text-primary-light">
            a florist where you can order anytime, offering three kinds of
            flowers, handmade ribbon blooms, fresh flowers, and synthetic
            flowers. The name Aira comes from the Japanese word for “love and
            good” or “harmonious growth”. Every bouquet carries this meaning: a
            wish that the flowers in your hands will touch your heart and
            inspire growth in life, relationships, and career. May our flowers
            speak love and harmonious growth to you too.🌸
          </p>
        </div>
        <div className="md:w-1/2 justify-items-center">
          <Image
            rounded={"lg"}
            height={300}
            width={400}
            objectFit={"cover"}
            src={Images.MarelRed}
            objectPosition={"center"}
          />
        </div>
      </div>
      <div className="w-full text-6xl font-bold text-center pt-4 text-primary">
        Business Information
      </div>
      <div className="flex flex-col md:flex-row gap-10 px-10">
        <div className="md:w-1/2">
          <Map />
        </div>
        <div className="md:w-1/2 flex flex-col gap-10">
          <div className="flex flex-col gap-4 items-center">
            <p className="text-3xl text-primary font-bold">Operational Hours</p>
            <p className="text-xl text-primary-light">9.00 - 20.00 WIB</p>
          </div>
          <div className="flex flex-col gap-4 items-center">
            <p className="text-3xl text-primary font-bold">Location</p>
            <p className="text-xl text-primary-light">Jl. Pagarsih No. 28B</p>
            <p className="text-xl text-primary-light text-center">
              Astana Anyar, Cibadak, Bandung, Jawa Barat
            </p>
            <p className="text-xl text-primary-light">*pick-up only</p>
          </div>
          <div className="flex flex-col gap-4 items-center">
            <p className="text-3xl text-primary font-bold">More Info</p>
            <p className="text-xl text-primary-light">
              Whatsapp : +62 85161468477
            </p>
            <p className="text-xl text-primary-light">
              Instagram : @aira_blooms
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

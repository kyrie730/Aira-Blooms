"use client";
import { Environment } from "@/shared/Config";
import { Illustrations } from "@/shared/Constant/Assets";
import { Button, Card, Text } from "@chakra-ui/react";
import Image from "next/image";
import { ReactNode, useState } from "react";
import NewestCollection from "../NewestCollection";

interface Advantages {
  image: string;
  title: string;
  description: string;
}

const ADVANTAGES_DATA: Advantages[] = [
  {
    image: Illustrations.HomeBanner,
    title: "Uniquely Handcrafted",
    description:
      "Each bouquet is a one-of-a-kind masterpiece, made with precision and care.",
  },
  {
    image: Illustrations.HomeBanner,
    title: "Timeless Beauty",
    description: "Our crochet flowers exude a classic charm that never fades",
  },
  {
    image: Illustrations.HomeBanner,
    title: "Eco-Friendly",
    description: "Embrace sustainability with flowers that last a lifetime.",
  },
];

export default function Advantages(): ReactNode {
  return (
    <div className="flex justify-between space-x-10 my-10">
      {ADVANTAGES_DATA.map((e) => (
        <div
          key={e.title}
          className="flex bg-primary flex-col gap-3 p-3 rounded-xl"
        >
          <div className="text-3xl font-bold text-white">{e.title}</div>
          <div className="text-lg text-white">{e.description}</div>
        </div>
      ))}
    </div>
  );
}

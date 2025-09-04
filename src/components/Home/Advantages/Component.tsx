"use client";
import { Environment } from "@/shared/Config";
import { Icons, Illustrations } from "@/shared/Constant/Assets";
import { Button, Card, Text, Image } from "@chakra-ui/react";
import { ReactNode, useState } from "react";
import NewestCollection from "../NewestCollection";

interface Advantages {
  title: string;
  description: string;
}

const ADVANTAGES_DATA: Advantages[] = [
  {
    title: "Fresh Flowers",
    description:
      "Fresh blooms carry a beauty that feels alive and ever-changing. Their natural charm brings warmth to any space, making them perfect for those who enjoy caring for flowers and displaying them at home or work.",
  },
  {
    title: "Handmade Ribbon Flowers",
    description:
      "Crafted one by one with love, ribbon flowers are a thoughtful choice when you want something unique and lasting. They can be kept for years, holding not just their shape, but also the love and memories they symbolize.",
  },
  {
    title: "Synthetic Flowers",
    description:
      "Durable and timeless, synthetic flowers are a beautiful way to preserve special moments. They complement our other collections by offering a lasting option. Ideal when you want your memories to stay close for a long time.",
  },
];

export default function Advantages(): ReactNode {
  return (
    <div className="flex flex-col justify-between my-10 md:flex-row gap-10 px-6">
      {ADVANTAGES_DATA.map((e) => (
        <div
          key={e.title}
          className=" bg-secondary-dark flex flex-col gap-3 p-10 rounded-xl w-full font-serif"
        >
          <div className="text-3xl font-bold text-primary ">{e.title}</div>
          <div className="text-lg text-primary">{e.description}</div>
        </div>
      ))}
    </div>
  );
}

"use client";
import { Environment } from "@/shared/Config";
import { Illustrations } from "@/shared/Constant/Assets";
import { Button, Text } from "@chakra-ui/react";
import Image from "next/image";
import { ReactNode, useState } from "react";
import NewestCollection from "../NewestCollection";

export default function HomeCard(): ReactNode {
  const message =
    "Hi! I need further information about D'Gift crochet bouquets.";

  function handlePressRedirect() {
    const toOpen = window.open(
      `https://wa.me/${Environment.whatsappPhoneNumber}?text=` +
        `${message.replaceAll("\n", "%0A")}`,
      "_blank",
      "noopener,noreferrer"
    );
    if (toOpen) toOpen.opener = null;
  }
  return (
    <div className="gap-10 flex flex-col">
      <div className="flex w-full space-x-4 gap-6 items-center justify-between flex-col-reverse md:flex-row my-6">
        <div className="flex md:w-1/2 flex-col gap-6">
          <Text className="text-5xl">Be the best for your special one✨</Text>
          <Text className="text-lg text-gray-300 text-justify">
            Indulge in the enchanting world of D&apos;Gift, where artistry meets
            nature&apos;s charm. Our online store is your gateway to a
            delightful array of handcrafted crochet flower bouquets that will
            add a touch of timeless elegance to any occasion.
          </Text>
          <Button
            background={"#C6B148"}
            color={"white"}
            className="md:w-1/4 p-6"
            onClick={handlePressRedirect}
          >
            Pre-order now
          </Button>
        </div>
        <div className="flex md:w-1/2 justify-center">
          <div className="relative">
            <Image
              alt="D'Gift"
              height={600}
              width={600}
              src={Illustrations.HomeBanner}
              priority={true}
              className="rounded-full"
            />
          </div>
        </div>
      </div>
      <NewestCollection />
    </div>
  );
}

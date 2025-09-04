"use client";
import { Environment } from "@/shared/Config";
import { Illustrations, Products } from "@/shared/Constant/Assets";
import { RedirectToWA } from "@/shared/Utility";
import {
  Box,
  Button,
  Text,
  useColorModeValue,
  Image,
  Stack,
  Heading,
} from "@chakra-ui/react";
import Link from "next/link";
import { ReactNode, useState } from "react";

interface Collections {
  image: Products;
  title: string;
  url: string;
}

const COLLECTION_LIST: Collections[] = [
  {
    image: Products.Syn_L_Keia,
    title: "Fresh/Synthetic Flowers",
    url: "/products#fresh-synthetic",
  },
  {
    image: Products.Hand_M_Lyah,
    title: "Handmade Ribbon Flowers",
    url: "/products#handmade-ribbon",
  },
  {
    image: Products.Val_Cinta,
    title: "Valentine Edition",
    url: "/products#valentine-edition",
  },
];

export default function NewestCollection(): ReactNode {
  return (
    <div className="text-center my-5 gap-10 flex flex-col items-center font-serif">
      <div className="text-5xl text-primary">Our Collection</div>
      <div className="flex flex-col md:flex-row gap-20 mt-10">
        {COLLECTION_LIST.map((e) => (
          <Box
            role={"group"}
            p={6}
            maxW={"330px"}
            w={"full"}
            bg={"white"}
            boxShadow={"2xl"}
            rounded={"lg"}
            pos={"relative"}
            zIndex={1}
            key={e.title}
          >
            <Box rounded={"lg"} mt={-12} pos={"relative"} height={"230px"}>
              <Image
                rounded={"lg"}
                height={230}
                width={282}
                objectFit={"cover"}
                src={e.image}
                alt="#"
              />
            </Box>
            <Stack pt={10} align={"center"}>
              <Heading
                fontSize={"2xl"}
                fontFamily={"serif"}
                fontWeight={500}
                className="text-primary"
              >
                {e.title}
              </Heading>
              <Stack direction={"row"} align={"end"}>
                <Link
                  href={e.url}
                  className="text-primary-light text-sm mt-3 hover:cursor-pointer"
                >
                  See catalogue →
                </Link>
              </Stack>
            </Stack>
          </Box>
        ))}
      </div>
    </div>
  );
}

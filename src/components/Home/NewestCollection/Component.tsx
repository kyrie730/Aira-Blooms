"use client";
import { Environment } from "@/shared/Config";
import { Illustrations } from "@/shared/Constant/Assets";
import {
  Box,
  Button,
  Text,
  useColorModeValue,
  Image,
  Stack,
  Heading,
} from "@chakra-ui/react";
import { ReactNode, useState } from "react";

export default function NewestCollection(): ReactNode {
  return (
    <div className="text-center my-5 gap-10 flex flex-col items-center">
      <div className="text-5xl text-primary">Our Newest Products</div>
      <div className="flex space-x-40 mt-10 ">
        <Box
          role={"group"}
          p={6}
          maxW={"330px"}
          w={"full"}
          bg={useColorModeValue("white", "gray.800")}
          boxShadow={"2xl"}
          rounded={"lg"}
          pos={"relative"}
          zIndex={1}
        >
          <Box rounded={"lg"} mt={-12} pos={"relative"} height={"230px"}>
            <Image
              rounded={"lg"}
              height={230}
              width={282}
              objectFit={"cover"}
              src={Illustrations.HomeBanner}
              alt="#"
            />
          </Box>
          <Stack pt={10} align={"center"}>
            <Heading fontSize={"2xl"} fontFamily={"body"} fontWeight={500}>
              Single Crochet Rose Bouquet
            </Heading>
            <Stack direction={"row"} align={"end"}>
              <Text color={"gray.600"}>More information →</Text>
            </Stack>
          </Stack>
        </Box>
        <Box
          role={"group"}
          p={6}
          maxW={"330px"}
          w={"full"}
          bg={useColorModeValue("white", "gray.800")}
          boxShadow={"2xl"}
          rounded={"lg"}
          pos={"relative"}
          zIndex={1}
        >
          <Box rounded={"lg"} mt={-12} pos={"relative"} height={"230px"}>
            <Image
              rounded={"lg"}
              height={230}
              width={282}
              objectFit={"cover"}
              src={Illustrations.HomeBanner}
              alt="#"
            />
          </Box>
          <Stack pt={10} align={"center"}>
            <Heading fontSize={"2xl"} fontFamily={"body"} fontWeight={500}>
              Small Crochet Rose Bouquet
            </Heading>
            <Stack direction={"row"} align={"end"}>
              <Text color={"gray.600"}>More information →</Text>
            </Stack>
          </Stack>
        </Box>
        <Box
          role={"group"}
          p={6}
          maxW={"330px"}
          w={"full"}
          bg={useColorModeValue("white", "gray.800")}
          boxShadow={"2xl"}
          rounded={"lg"}
          pos={"relative"}
          zIndex={1}
        >
          <Box rounded={"lg"} mt={-12} pos={"relative"} height={"230px"}>
            <Image
              rounded={"lg"}
              height={230}
              width={282}
              objectFit={"cover"}
              src={Illustrations.HomeBanner}
              alt="#"
            />
          </Box>
          <Stack pt={10} align={"center"}>
            <Heading fontSize={"2xl"} fontFamily={"body"} fontWeight={500}>
              Full Crochet Rose Bouquet
            </Heading>
            <Stack direction={"row"} align={"end"}>
              <Text color={"gray.600"}>More information →</Text>
            </Stack>
          </Stack>
        </Box>
      </div>
    </div>
  );
}

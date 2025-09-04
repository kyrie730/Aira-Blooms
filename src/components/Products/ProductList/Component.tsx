"use client";

import { BouquetList } from "@/shared/Constant/Products";
import { Box, Heading, SimpleGrid, Text, Image, Stack } from "@chakra-ui/react";
import { ReactNode, useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export default function ProductList(products: BouquetList): ReactNode {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Always start at top first
    window.scrollTo(0, 0);

    // Then manually handle hash scroll
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }, 100); // small delay ensures DOM is ready
    }
  }, [pathname, searchParams]);

  return (
    <div className="text-center my-5 flex flex-col items-center font-serif">
      <div className="text-5xl text-primary mb-16">{products.title}</div>
      {/* <div className="text-sm mb-10">
        Size S/M : Ojek online motor &nbsp; | &nbsp; Size L : Ojek online mobil
      </div> */}

      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={100}>
        {products.items.map((e) => (
          <Box
            key={e.name}
            role={"group"}
            p={6}
            maxW={"330px"}
            w={"full"}
            bg={"white"}
            boxShadow={"2xl"}
            rounded={"lg"}
            pos={"relative"}
            zIndex={1}
          >
            <Box rounded={"lg"} mt={-12} pos={"relative"} height={"350px"}>
              <Image
                rounded={"lg"}
                height={350}
                width={282}
                objectFit={"cover"}
                src={e.imgUrl}
                alt={e.name}
                objectPosition={"top"}
              />
            </Box>
            <Stack className="pt-5">
              <Text className="text-primary text-3xl font-bold">{e.name}</Text>
              {e.size && (
                <Text className="text-primary-light text-sm">
                  Size: {e.size}
                </Text>
              )}
              <Text className="text-primary-light text-sm">
                Price: Rp.{e.price.toLocaleString("id-ID")},-
              </Text>
            </Stack>
          </Box>
        ))}
      </SimpleGrid>
    </div>
  );
}

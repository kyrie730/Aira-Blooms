import { PageTitle } from "@/shared/Constant";
import { Metadata } from "next";
import { ProductPage } from "@/components/Products";

export const metadata: Metadata = {
  title: PageTitle.Products,
};

export default function Page() {
  return <ProductPage />;
}

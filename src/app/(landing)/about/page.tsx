import { PageTitle } from "@/shared/Constant";
import { Metadata } from "next";
import AboutPage from "@/components/About/AboutPage/Component";

export const metadata: Metadata = {
  title: PageTitle.About,
};

export default function Page() {
  return <AboutPage />;
}

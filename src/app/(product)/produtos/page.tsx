"use client";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { ProductCategory } from "@/components/products/productsCategory";


const Page = async () => {

  return (
    <div>
      <Header />
      <ProductCategory/>
    </div>
  );
};

export default Page;

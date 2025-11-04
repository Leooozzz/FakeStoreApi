"use client";

import AllProducts from "@/components/allproducts";
import { Carousels } from "@/components/carousel";
import { ModeToggle } from "@/components/mode-toggle";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const Page = () => {
  return (
    <div className="bg-white dark:bg-gray-900 shadow-md sticky top-0">
      <header className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-xl font-semibold text-gray-800 dark:text-gray-100">
            FakeStore
          </span>
        </div>

        <nav>
          <ul className="flex items-center gap-6 text-gray-700 dark:text-gray-200 font-medium">
            <li className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer">
              Home
            </li>
            <li className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer">
              Produtos
            </li>
            <li className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer">
              Categorias
            </li>
            <li className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer">
              Carrinho
            </li>
            <li className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer">
              Sobre
            </li>
            <ModeToggle />
          </ul>
        </nav>
      </header>
     <Carousels />
     <section>
      <AllProducts/>
     </section>
    </div>
  );
};

export default Page;

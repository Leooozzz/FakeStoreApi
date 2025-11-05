"use client";

import AllProducts from "@/components/allproducts";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";


const Page = () => {
  return (
    <div className="  shadow-md sticky top-0">
      <Header/>
     <section className="mx-auto container max-w-5xl px-4 py-8">
        <div className="relative overflow-hidden rounded-xl shadow-lg">
          <Carousel>
            <CarouselContent className="transition-transform duration-50 ease-in-out">
              <CarouselItem>
                <img
                  src="/image/Banner1.png"
                  alt="Promoção 1"
                  className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-xl"
                />
              </CarouselItem>
              <CarouselItem>
                <img
                  src="/image/Banner2.png"
                  alt="Promoção 2"
                  className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-xl"
                />
              </CarouselItem>
              <CarouselItem>
                <img
                  src="/image/Banner3.png"
                  alt="Promoção 3"
                  className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-xl"
                />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/70 dark:bg-gray-800/70 hover:bg-white hover:dark:bg-gray-700 rounded-full shadow-md p-2 transition">
              ‹
            </CarouselPrevious>
            <CarouselNext className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/70 dark:bg-gray-800/70 hover:bg-white hover:dark:bg-gray-700 rounded-full shadow-md p-2 transition">
              ›
            </CarouselNext>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              <button className="w-3 h-3 rounded-full bg-blue-500"></button>
              <button className="w-3 h-3 rounded-full bg-gray-300 dark:bg-gray-600"></button>
              <button className="w-3 h-3 rounded-full bg-gray-300 dark:bg-gray-600"></button>
            </div>
          </Carousel>
        </div>
      </section>
     <section>
      <AllProducts/>
     </section>
     <footer>
      <Footer/>
     </footer>
    </div>
  );
};

export default Page;

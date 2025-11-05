"use client";
import { getAllProducts } from "@/app/services/api";
import { Product } from "@/app/types/products";
import { useEffect, useState } from "react";
import { ProductSkeletonDestaque } from "./productSkeletonDestaque";

const DestaqueProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    getAllProducts().then((data) => {
      const destaque = [
        data[2],
        data[3],
        data[7],
        data[11],
        data[15],
        data[10],
        data[16],
        data[18],
      ].filter(Boolean);
      setProducts(destaque);
    });
  }, []);

   if (products.length ===0) {
    return <ProductSkeletonDestaque />;
  }
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
        Produtos em Destaque
      </h1>

      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <li
            key={product.id}
            className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-4 flex flex-col items-center text-center"
          >
            <div className="w-full flex justify-center bg-gray-100 rounded-lg p-4 mb-4">
              <img
                src={product.image}
                alt={product.title}
                className="w-32 h-32 object-contain"
              />
            </div>

            <h2 className="text-lg font-medium text-gray-800 line-clamp-2 mb-2">
              {product.title}
            </h2>

            <p className="text-xl font-semibold text-blue-600 ">
              R${product.price.toFixed(2)}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DestaqueProducts;

"use client";

import { getAllProducts } from "@/app/services/api";
import { Product } from "@/app/types/products";
import { useEffect, useState } from "react";

const AllProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    getAllProducts().then(setProducts);
  }, []);

  return (
    <div className="mx-auto container">
      <h1 className="text-3xl mt-3 font-sans">Produtos Em destaque</h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <li
            key={product.id}
            className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
          >
            <div className="bg-gray-100 flex justify-center items-center h-48">
              <img
                src={product.image}
                alt={product.title}
                className="max-h-40 object-contain"
              />
            </div>
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800 line-clamp-2">
                {product.title}
              </h2>
              <p className="text-gray-600 mt-2 text-sm">
                R${product.price.toFixed(2)}
              </p>
              <button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md transition-colors">
                Adicionar ao carrinho
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllProducts;

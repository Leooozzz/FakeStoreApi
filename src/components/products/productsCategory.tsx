"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

type Product = {
  id: string;
  image: string;
  title: string;
  price: number;
};

export const ProductCategory = () => {
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [productsByCategory, setProductsByCategory] = useState<
    Record<string, Product[]>
  >({});
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const API_BASE = process.env.NEXT_PUBLIC_API;

  useEffect(() => {
    axios
      .get(`${API_BASE}/products/categories`)
      .then((res) => {
        setCategories(res.data);
        setSelectedCategory(res.data[0]); 
      })
      .catch((err) => {
        console.error("Erro ao buscar categorias:", err);
        setError("Não foi possível carregar as categorias.");
      });
  }, [API_BASE]);

  
  useEffect(() => {
    if (!selectedCategory || productsByCategory[selectedCategory]) return;

    setLoading(true);
    axios
      .get(`${API_BASE}/products/category/${selectedCategory}`)
      .then((res) => {
        setProductsByCategory((prev) => ({
          ...prev,
          [selectedCategory]: res.data,
        }));
        setLoading(false);
      })
      .catch((err) => {
        console.error(
          `Erro ao buscar produtos da categoria ${selectedCategory}:`,
          err
        );
        setError("Erro ao carregar produtos.");
        setLoading(false);
      });
  }, [selectedCategory, API_BASE, productsByCategory]);

  return (
    <div className="w-full p-6 mx-auto container">
      <h1 className="text-2xl font-bold mb-4">Categorias de Produtos</h1>

      {error && <p className="text-red-500 mb-4">{error}</p>}

      {categories.length > 0 && (
        <Tabs
          value={selectedCategory}
          onValueChange={setSelectedCategory}
          className="w-full"
        >
          <TabsList className="flex w-full overflow-x-auto gap-2 mb-4">
            {categories.map((item) => (
              <TabsTrigger
                key={item}
                value={item}
                className="flex-1 capitalize px-4 py-2 text-sm border rounded-md"
              >
                {item}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value={selectedCategory}>
            {loading ? (
              <p>Carregando produtos...</p>
            ) : productsByCategory[selectedCategory]?.length === 0 ? (
              <p>Nenhum produto encontrado.</p>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-4">
                {productsByCategory[selectedCategory]?.map((product) => (
                  <div
                    key={product.id}
                    className="border rounded-lg p-4 flex flex-col items-center shadow-sm hover:shadow-md transition"
                  >
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-24 h-24 object-contain mb-3"
                    />
                    <h3 className="text-sm font-semibold text-center line-clamp-2">
                      {product.title}
                    </h3>
                    <p className="text-gray-600 mt-2 font-medium">
                      R${product.price}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </TabsContent>
        </Tabs>
      )}
    </div>
  );
};

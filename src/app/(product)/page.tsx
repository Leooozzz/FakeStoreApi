"use client"

import { useEffect, useState } from "react";
import { getAllProducts } from "../services/api";
import { Product } from "../types/products";


const Page = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    getAllProducts().then(setProducts);
  }, []);

  return (
    <div>
      <h1>Produtos</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <img src={product.image} alt={product.title} width={100} />
            <h2>{product.title}</h2>
            <p>{product.price} USD</p>
          </li>
        ))}
      </ul>
    </div>

)}

export default Page;

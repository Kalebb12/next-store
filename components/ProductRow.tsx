"use client";

import { fetcher } from "@/lib/fetcher";
import useSWR from "swr";
import ProductCard from "./ProductCard";
import ProductCardShadow from "./shadows/ProductCardShadow";
import { Product } from "@/generated/prisma";

interface ProductsRowProps {
  url: string;
}

const ProductsRow : React.FC<ProductsRowProps> = ({url}) => {
  const { data, error, isLoading } = useSWR(
    url,
    fetcher
  );

  if (isLoading) {
    return (
      <section className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {Array(4)
          .fill(0)
          .map((_, i) => (
            <ProductCardShadow key={i} />
          ))}
      </section>
    );
  }

  if (error) {
    return <p className="text-red-500">Failed to load products.</p>;
  }

  return (
    <section className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {data.map((product: Product) => (
        <ProductCard product={product} key={product.id}/>
      ))}
    </section>
  );
};

export default ProductsRow;

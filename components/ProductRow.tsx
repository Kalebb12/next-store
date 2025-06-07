"use client";

import { fetcher } from "@/lib/fetcher";
import Link from "next/link";
import useSWR from "swr";
import StarRating from "./StarRating";

const ProductsRow = () => {
  const { data, error, isLoading } = useSWR(
    "/api/products/new-arrivals",
    fetcher
  );

  if (isLoading) {
    return (
      <section className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {Array(4)
          .fill(0)
          .map((_, i) => (
            <div
              key={i}
              className="animate-pulse bg-white rounded-xl shadow-md p-4 space-y-4"
            >
              <div className="bg-gray-300 h-40 w-full rounded-md" />
              <div className="h-4 bg-gray-300 rounded w-3/4" />
              <div className="h-4 bg-gray-200 rounded w-1/2" />
            </div>
          ))}
      </section>
    );
  }

  if (error) {
    return <p className="text-red-500">Failed to load products.</p>;
  }

  return (
    <section className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {data.map((product: any) => (
        <Link href={`/product/${product.id}`} key={product.id}>
          <div
            key={product.id}
            className="bg-white text-start rounded-xl shadow-md p-4"
          >
            <img
              src={product.thumbnail}
              alt={product.name}
              className="h-70 w-full bg-primary-foreground object-center object-cover rounded-md"
            />
            <div className="space-y-2 mt-4">
              <h3 className="text-xl font-bold">{product.name}</h3>
              <StarRating rating={3.5} />
              <p className="text-md font-semibold">
                ${product.price.toFixed(2)}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </section>
  );
};

export default ProductsRow;

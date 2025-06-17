import React from "react";
import Link from "next/link";
import Image from "next/image";
import StarRating from "./StarRating";
import { Product } from "@/generated/prisma";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Link href={`/product/${product.slug}`}>
      <div className="bg-card text-start rounded-xl hover:shadow-lg shadow-md p-4">
        <div className="relative w-full bg-primary-foreground  h-70">
          <Image
            src={product.thumbnail}
            alt={product.name}
            fill
            className="object-center object-cover rounded-md"
          />
        </div>
        <div className="space-y-2 mt-4">
          <h3 className="text-xl font-bold truncate">{product.name}</h3>
          <StarRating rating={product.rating} />
          <p className="text-md font-semibold">{product.price.toLocaleString("en-US", {style:"currency", currency:"NGN"})}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;

import React from "react";

const ProductCardShadow = () => {
  return (
    <div className="animate-pulse bg-white rounded-xl shadow-md p-4 space-y-4">
      <div className="bg-gray-300 h-70 w-full rounded-md" />
      <div className="h-4 bg-gray-300 rounded w-3/4" />
      <div className="h-4 bg-gray-300 rounded w-3/4" />
      <div className="h-4 bg-gray-200 rounded w-1/2" />
    </div>
  );
};

export default ProductCardShadow;

import React from "react";
import Image from "next/image";

interface ProductProps {
  product: any;
}
const Product: React.FC<ProductProps> = ({ product }) => {
  return (
    <div>
      <div className="product-main d-flex flex-column align-items-center justify-content-between">
        <Image
          alt="poster"
          width={183}
          height={238}
          unoptimized
          src={product.thumbnail}
        />
        <span className="product-title">{product.title}</span>
        <span className="product-desc">{product.category} </span>
        <div className="d-flex mt-3">
          <span className="product-discount-price">
            {" "}
            ${(product.discountPercentage / product.price).toFixed(2)}{" "}
          </span>
          <span className="product-price ms-2">$16.48</span>
        </div>
      </div>
    </div>
  );
};

export default Product;

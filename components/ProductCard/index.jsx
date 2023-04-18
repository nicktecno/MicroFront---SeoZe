import React from "react";
import dynamic from "next/dynamic";

const ProductCardMicro = dynamic(
  () => import("generalProductCards/productCard"),
  { ssr: false }
);

const ProductCard = ({ hit, slider, page, appImagesUrl }) => {
  return (
    <>
      <ProductCardMicro
        hit={hit}
        slider={slider}
        page={page}
        appImagesUrl={appImagesUrl}
      />
    </>
  );
};

export default ProductCard;

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import dynamic from "next/dynamic";

const ProductListApiGqlMicro = dynamic(
  () => import("generalProductCards/productListApiGql"),
  { ssr: false }
);

const Hits = ({ hits, page, slider, mktName, appImagesUrl }) => {
  return (
    <>
      <ProductListApiGqlMicro
        hits={hits}
        page={page}
        slider={slider}
        mktName={mktName}
        appImagesUrl={appImagesUrl}
      />
    </>
  );
};

const ProductListApiGql = Hits;

export default ProductListApiGql;

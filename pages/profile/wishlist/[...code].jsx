import "react-toastify/dist/ReactToastify.min.css";
import { useCart } from "../../../Context/CartLengthContext";
import dynamic from "next/dynamic";

import { useLang } from "../../../Context/LangContext";
import { useMenu } from "../../../Context/Menu";

import api from "../../../services/api";
import wishListApi from "../../../services/msWishList";

import msLocation from "../../../services/msLocation";

const WishListProductsMicro = dynamic(
  () => import("wishlist/wishlistProducts"),
  {
    ssr: false,
  }
);

import useWindowDimensions from "../../../services/windowSizeHook";

const WishlistProductsPage = () => {
  const { routeTranslations } = useLang();
  const { setCartLength } = useCart();
  const { show } = useMenu();
  const { width } = useWindowDimensions();
  const mktName = process.env.NEXT_PUBLIC_REACT_APP_NAME;
  const headerUrl = process.env.NEXT_PUBLIC_REACT_APP_HEADER_URL;
  const appUrl = process.env.NEXT_PUBLIC_REACT_APP_URL;
  return (
    <>
      <WishListProductsMicro
        mktName={mktName}
        api={api}
        routeTranslations={routeTranslations}
        setCartLength={setCartLength}
        wishListApi={wishListApi}
        headerUrl={headerUrl}
        appUrl={appUrl}
        show={show}
        msLocation={msLocation}
        width={width}
      />
    </>
  );
};

export default WishlistProductsPage;

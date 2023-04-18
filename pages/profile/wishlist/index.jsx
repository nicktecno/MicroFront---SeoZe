import "react-toastify/dist/ReactToastify.min.css";
import { useCart } from "../../../Context/CartLengthContext";
import dynamic from "next/dynamic";

import { useLang } from "../../../Context/LangContext";
import { useMenu } from "../../../Context/Menu";

import api from "../../../services/api";
import wishListApi from "../../../services/msWishList";

import msLocation from "../../../services/msLocation";

const WishListMicro = dynamic(() => import("wishlist/wishlist"), {
  ssr: false,
});

const WishlistPage = () => {
  const { routeTranslations } = useLang();
  const { setCartLength } = useCart();
  const { show } = useMenu();
  const mktName = process.env.NEXT_PUBLIC_REACT_APP_NAME;
  const headerUrl = process.env.NEXT_PUBLIC_REACT_APP_HEADER_URL;
  const appUrl = process.env.NEXT_PUBLIC_REACT_APP_URL;
  return (
    <>
      <WishListMicro
        mktName={mktName}
        api={api}
        routeTranslations={routeTranslations}
        setCartLength={setCartLength}
        wishListApi={wishListApi}
        headerUrl={headerUrl}
        appUrl={appUrl}
        show={show}
        msLocation={msLocation}
      />
    </>
  );
};

export default WishlistPage;

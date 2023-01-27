import "react-toastify/dist/ReactToastify.min.css";
import { useCart } from "../../Context/CartLengthContext";
import dynamic from "next/dynamic";
import { useLang } from "../../Context/LangContext";

import api from "../../services/api";
import wishListApi from "../../services/msWishList";

const PhotobookMicro = dynamic(() => import("photobookPage/photobookPage"), {
  ssr: false,
});

const PhotobookPage = () => {
  const { routeTranslations } = useLang();
  const { setCartLength } = useCart();
  const mktName = process.env.NEXT_PUBLIC_REACT_APP_NAME;
  const headerUrl = process.env.NEXT_PUBLIC_REACT_APP_HEADER_URL;
  const appUrl = process.env.NEXT_PUBLIC_REACT_APP_URL;
  return (
    <>
      <PhotobookMicro
        mktName={mktName}
        api={api}
        routeTranslations={routeTranslations}
        setCartLength={setCartLength}
        wishListApi={wishListApi}
        headerUrl={headerUrl}
        appUrl={appUrl}
      />
    </>
  );
};

export default PhotobookPage;

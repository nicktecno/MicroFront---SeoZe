import "react-toastify/dist/ReactToastify.min.css";
import { useCart } from "../Context/CartLengthContext";

import { useLang } from "../Context/LangContext";
import dynamic from "next/dynamic";
import wishListApi from "../services/msWishList";

const RegisterMicro = dynamic(() => import("registerPage/registerPage"), {
  ssr: false,
});

import api from "../services/api";
import { Context } from "../Context/AuthContext";
import { useContext } from "react";

const RegisterPage = () => {
  const { routeTranslations } = useLang();
  const { validaLogin } = useContext(Context);
  const { setCartLength } = useCart();
  const headerUrl = process.env.NEXT_PUBLIC_REACT_APP_HEADER_URL;
  const mktName = process.env.NEXT_PUBLIC_REACT_APP_NAME;

  return (
    <>
      <RegisterMicro
        api={api}
        validaLogin={validaLogin}
        routeTranslations={routeTranslations}
        setCartLength={setCartLength}
        wishListApi={wishListApi}
        headerUrl={headerUrl}
        mktName={mktName}
      />
    </>
  );
};

export default RegisterPage;

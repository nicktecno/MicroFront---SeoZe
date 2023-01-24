import "react-toastify/dist/ReactToastify.min.css";

import { useLang } from "../../Context/LangContext";
import dynamic from "next/dynamic";

import api from "../../services/api";

import { useCart } from "../../Context/CartLengthContext";

const AddPaymentMethodMicro = dynamic(
  () => import("addPaymentMethodPage/addPaymentMethodPage"),
  {
    ssr: false,
  }
);

const AddPaymentMethodPage = () => {
  const { routeTranslations } = useLang();

  const { setCartLength } = useCart();

  const mktName = process.env.NEXT_PUBLIC_REACT_APP_NAME;

  return (
    <>
      <AddPaymentMethodMicro
        mktName={mktName}
        api={api}
        routeTranslations={routeTranslations}
        setCartLength={setCartLength}
      />
    </>
  );
};

export default AddPaymentMethodPage;

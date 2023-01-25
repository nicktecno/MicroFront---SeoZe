import "react-toastify/dist/ReactToastify.min.css";

import { useLang } from "../../../Context/LangContext";

import api from "../../../services/api";
import dynamic from "next/dynamic";

const OrderDatadMicro = dynamic(() => import("orders/orderDataPage"), {
  ssr: false,
});

const OrderDataPage = () => {
  const { routeTranslations } = useLang();

  const mktName = process.env.NEXT_PUBLIC_REACT_APP_NAME;

  return (
    <>
      <OrderDatadMicro
        mktName={mktName}
        api={api}
        routeTranslations={routeTranslations}
      />
    </>
  );
};

export default OrderDataPage;

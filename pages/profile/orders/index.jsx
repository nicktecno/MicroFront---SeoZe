import "react-toastify/dist/ReactToastify.min.css";

import dynamic from "next/dynamic";
import api from "../../../services/api";
import { useLang } from "../../../Context/LangContext";

const OrdersHistorydMicro = dynamic(() => import("orders/ordersHistoryPage"), {
  ssr: false,
});

const OrderDataPage = () => {
  const { routeTranslations } = useLang();

  const mktName = process.env.NEXT_PUBLIC_REACT_APP_NAME;

  return (
    <>
      <OrdersHistorydMicro
        mktName={mktName}
        api={api}
        routeTranslations={routeTranslations}
      />
    </>
  );
};

export default OrderDataPage;

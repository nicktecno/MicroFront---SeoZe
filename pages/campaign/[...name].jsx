import "react-toastify/dist/ReactToastify.min.css";
import { useLang } from "../../Context/LangContext";
import { Context } from "../../Context/AuthContext";
import { useContext } from "react";

import api from "../../services/api";

import dynamic from "next/dynamic";

const CampaignMicro = dynamic(() => import("campaignPage/campaignPage"), {
  ssr: false,
});

const CampaignPage = () => {
  const { routeTranslations } = useLang();
  const { validaLogin } = useContext(Context);

  const mktName = process.env.NEXT_PUBLIC_REACT_APP_NAME;
  const appImagesUrl = process.env.NEXT_PUBLIC_REACT_APP_IMAGES_URL;

  return (
    <>
      <CampaignMicro
        api={api}
        validaLogin={validaLogin}
        routeTranslations={routeTranslations}
        mktName={mktName}
        appImagesUrl={appImagesUrl}
      />
    </>
  );
};

export default CampaignPage;

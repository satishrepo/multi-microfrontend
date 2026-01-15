import "./App.css";
import AppWithRoutes from "./routing";
import "./i18n";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import i18n from "./i18n";

const localConfig = {
  base: "",
  callback: () => "",
  lang: "en",
};

function App({ config = localConfig }) {
  const { base, callback, lang } = config;
  const { t } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang]);

  return (
    <>
      <div className="mf3">
        <h1>{t("title")}</h1>
        <AppWithRoutes base={base} callback={callback} />
      </div>
    </>
  );
}

export default App;

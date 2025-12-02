import { RouterProvider } from "react-router";
import { useSelector } from "react-redux";
import { Toaster } from "sonner";
import { useEffect, useState } from "react";
import { router } from "./providers/Router";
import i18n from "./utils/i18n";
import Preloader from "./components/Preloader";

function App() {
  const { lang } = useSelector((state) => state.settings);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // simulate loading for smoother appearance
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []); 
  
  useEffect(() => {
    localStorage.setItem("lang", lang);
    const body = document.querySelector("body");
    lang === "en" ? body.classList.add("en") : body.classList.remove("en");
    i18n.changeLanguage(lang);
  }, [lang]);

  return (
    <>
          {loading && <Preloader />}

      <Toaster expand={false} richColors position="bottom-right" />
      <RouterProvider router={router} />
    </>
  );
}

export default App;

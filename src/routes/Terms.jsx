import { useTranslation } from "react-i18next";
import PageHeader from "../components/PageHeader";

export default function Terms() {
      const { t } = useTranslation();
    
  return (
    <div>
          <PageHeader
                title={t("terms.Title")} 
                subtitle={t("terms.SubTitle")} 
              />
    </div>
  )
}

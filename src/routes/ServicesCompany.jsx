import { useTranslation } from "react-i18next";
import useGetServices from "../hooks/home/useGetServices";
import FaqSection from "../components/services/FaqSection";

export default function ServicesCompany() {
  const { t } = useTranslation();
  const { data: services = [], isLoading } = useGetServices();

  const serviceItems = services.map((s) => ({
    id: s.id,
    title: s.title,
    answer: s.description,
    icon: s.icon,
  }));

  return (
    <FaqSection
      title={t("services.title")}
      subtitle={t("services.subtitle")}
      icon="fa-hands-helping"
      items={serviceItems}
      loading={isLoading}
    />
  );
}

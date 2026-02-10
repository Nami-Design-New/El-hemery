import { useTranslation } from "react-i18next";
import useGetByCar from "../hooks/services/useGetBycar";
import FaqSection from "../components/services/FaqSection";

export default function CarTravelers() {
  const { t } = useTranslation();

  const { data: comingByCars, isLoading } = useGetByCar();

  const carItems =
    comingByCars?.map((c) => ({
      id: c.id,
      title: c.title,
      answer: c.description,
    })) ?? [];

  return (
    <FaqSection
      title={t("faqs.carTravelers")}
  subtitle={t("faqs.carTravelersSubtitle")} 
        icon="fa-car"
      items={carItems}
      loading={isLoading}
    />
  );
}

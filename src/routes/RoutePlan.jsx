import { useTranslation } from "react-i18next";
import useGetWalk from "../hooks/services/useGetWalk";
import FaqSection from "../components/services/FaqSection";

export default function RoutePlan() {
  const { t } = useTranslation();

  const { data: walkReturn, isLoading } = useGetWalk();

  const routeItems =
    walkReturn?.map((w) => ({
      id: w.id,
      title: w.title,
      answer: w.description,
    })) ?? [];

  return (
    <FaqSection
      title={t("faqs.routePlan")}
      subtitle={t("faqs.routePlanSubtitle")}
      icon="fa-route"
      items={routeItems}
      loading={isLoading}
    />
  );
}

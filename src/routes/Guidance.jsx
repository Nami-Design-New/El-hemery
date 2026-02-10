import { useTranslation } from "react-i18next";
import useGetGuides from "../hooks/services/useGetGuides";
import FaqSection from "../components/services/FaqSection";

export default function Guidance() {
  const { t } = useTranslation();

  const { data: guides, isLoading } = useGetGuides();

  const guideItems =
    guides?.map((g) => ({
      id: g.id,
      title: g.title,
      answer: g.description,
    })) ?? [];

  return (
    <FaqSection
      title={t("faqs.guides")}
 subtitle={t("faqs.guidesSubtitle")}      icon="fa-book"
      items={guideItems}
      loading={isLoading}
    />
  );
}

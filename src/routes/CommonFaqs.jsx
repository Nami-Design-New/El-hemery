import { useTranslation } from "react-i18next";
import useGetFaqs from "../hooks/services/useGetFaqs";
import FaqSection from "../components/services/FaqSection";

export default function CommonFaqs() {
  const { t } = useTranslation();

  const { data: faqs, isLoading } = useGetFaqs();

  const faqItems =
    faqs?.map((f) => ({
      id: f.id,
      title: f.question,
      answer: f.answer,
    })) ?? [];

  return (
    <FaqSection
      title={t("faqs.mostCommon")}
  subtitle={t("faqs.mostCommonSubtitle")}       icon="fa-comments"
      items={faqItems}
      loading={isLoading}
    />
  );
}

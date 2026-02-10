import { useTranslation } from "react-i18next";
import useGetCommonFatwa from "../hooks/services/useGetCommonFatwa";
import FaqSection from "../components/services/FaqSection";

export default function CommonFatwa() {
  const { t } = useTranslation();

  const { data: commonFatwa, isLoading } = useGetCommonFatwa();

  const fatwaItems =
    commonFatwa?.map((f) => ({
      id: f.id,
      title: f.title,
      answer: f.description,
    })) ?? [];

  return (
    <FaqSection
      title={t("faqs.commonfatwa")}
 subtitle={t("faqs.commonFatwaSubtitle")}       icon="fa-hands-praying"
      items={fatwaItems}
      loading={isLoading}
    />
  );
}

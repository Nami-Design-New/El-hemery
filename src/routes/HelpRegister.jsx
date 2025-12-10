import PageHeader from "../components/PageHeader";
import useGetHelp from "../hooks/useGetHelp";
import { useTranslation } from "react-i18next";
import SupervisorsCard from "../components/HelpInRegister/SupervisorsCard";
import NoteCard from "../components/HelpInRegister/NoteCard";
import MediaSlider from "../components/HelpInRegister/MediaSlider";

export default function HelpRegister() {
  const { t } = useTranslation();
  const { data } = useGetHelp();
  const item = data?.[0];

  return (
    <div className="register-help-page">
      <PageHeader 
        title={t("helpRegister.title")} 
        subtitle={t("helpRegister.subtitle")} 
      />

      <div className="top-cards-row">
        <SupervisorsCard supervisors={item?.supervisors} />
        <NoteCard title={item?.title} />
      </div>

      <MediaSlider files={item?.Files} />
    </div>
  );
}

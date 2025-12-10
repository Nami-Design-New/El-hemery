import { useTranslation } from "react-i18next";

export default function NoteCard({ title }) {
  const { t } = useTranslation();

  return (
    <div className="card-box note-card">
      <h3 className="note-title">{t("helpRegister.noteTitle")}</h3>
      <p className="note-text">{title}</p>
    </div>
  );
}

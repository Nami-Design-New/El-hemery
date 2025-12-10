import { useTranslation } from "react-i18next";

export default function SupervisorsCard({ supervisors }) {
  const { t } = useTranslation();

  return (
    <div className="card-box help-card">
      <h3 className="card-title">{t("helpRegister.supervisorsTitle")}</h3>

      <div className="supervisors-list">
        {supervisors?.map((sup) => (
          <div key={sup.id} className="supervisor-item">
            <div className="info">
              <p className="name">{sup.name}</p>
              {sup.description && <p className="desc">{sup.description}</p>}
            </div>

            <div className="icons">
              <a href={`tel:${sup.phone}`} className="call">
                <i className="fa-solid fa-phone" />
              </a>
              <a
                href={`https://wa.me/${sup.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="whatsapp"
              >
                <i className="fa-brands fa-whatsapp" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

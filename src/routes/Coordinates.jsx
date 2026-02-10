import { useTranslation } from "react-i18next";
import useGetSupervisors from "../hooks/services/useGetCoordinate";
import PageHeader from "../components/PageHeader";

export default function Coordinates() {
  const { t } = useTranslation();
  const { data } = useGetSupervisors();

  return (
    <section className="faq-page">
      {/* Page Header */}
      <PageHeader
        title={t("faqs.coordinates")}
         subtitle={t("faqs.coordinatesSubtitle")}
      />

      <div className="container mb-5">
        <div className="faq-wrapper">
          <div className="tab-content-wrapper">

            {/*  Tab Header */}
            <div className="tab-content-header">
              <div className="header-icon">
                <i className="fa-solid fa-users-gear"></i>
              </div>

              <h2>{t("faqs.coordinates")}</h2>
            </div>

            {/*  Coordinates List */}
            {data?.coordinates?.length > 0 && (
              <div className="coordinates-list">
                <ul>
                  {data.coordinates.map((coord) => (
                    <li key={coord.id}>{coord.title}</li>
                  ))}
                </ul>
              </div>
            )}

            {/*  Supervisors Grid */}
            <div className="supervisors-grid">
              {data?.supervisors?.map((sup) => (
                <div key={sup.id} className="supervisor-card">
                  <h3>{sup.name}</h3>

                  {sup.description && <p>{sup.description}</p>}

                  <div className="icons">
                    {/* Phone */}
                    {sup.phone && (
                      <a href={`tel:${sup.phone}`} className="call">
                        <i className="fa-solid fa-phone" />
                      </a>
                    )}

                    {/* WhatsApp */}
                    {sup.whatsapp && (
                      <a
                        href={`https://wa.me/${sup.whatsapp}`}
                        target="_blank"
                        rel="noreferrer"
                        className="whatsapp"
                      >
                        <i className="fa-brands fa-whatsapp" />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

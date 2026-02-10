import { useTranslation } from "react-i18next";
import useGetGroups from "../hooks/services/useGetGroups";
import PageHeader from "../components/PageHeader";
import GroupsTab from "../components/services/GroupsTab";

export default function Groups() {
  const { t } = useTranslation();
  const { data: groups } = useGetGroups();

  return (
    <section className="faq-page">
      {/* Page Header */}
      <PageHeader
        title={t("faqs.groups")}
 subtitle={t("faqs.groupsSubtitle")}      />

      <div className="container mb-5">
        <div className="faq-wrapper">
          <div className="tab-content-wrapper">
            
            <div className="tab-content-header">
              <div className="header-icon">
                <i className="fa-solid fa-location-dot"></i>
              </div>

              <h2>{t("faqs.groups")}</h2>
            </div>

            {/*  Groups Content */}
            <GroupsTab groups={groups} />

          </div>
        </div>
      </div>
    </section>
  );
}

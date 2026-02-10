import { useState } from "react";
import PageHeader from "../PageHeader";
import AccordionList from "./AccordionList";

export default function FaqSection({
  title,
  subtitle,
  icon,
  items,
  loading,
}) {
  const [activeAccordion, setActiveAccordion] = useState(null);

  return (
    <section className="faq-page">
      {/* Page Header */}
      <PageHeader title={title} subtitle={subtitle} />

      <div className="container mb-5">
        <div className="faq-wrapper">
          <div className="tab-content-wrapper">

            {/* Header */}
            <div className="tab-content-header">
              <div className="header-icon">
                <i className={`fa-solid ${icon}`}></i>
              </div>

              <h2>{title}</h2>
            </div>

            {/* Accordion */}
            <div className="accordion">
              <AccordionList
                items={items}
                activeAccordion={activeAccordion}
                toggleAccordion={(id) =>
                  setActiveAccordion(activeAccordion === id ? null : id)
                }
                loading={loading}
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

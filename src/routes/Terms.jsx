import useGetSettings from "../hooks/useSettings";
import PageHeader from "../components/PageHeader";

export default function Terms() {
  const { data: settings } = useGetSettings();

  return (
    <section className="main_section terms">
         <PageHeader
        title="Terms & Conditions"
        subtitle="Please read carefully"
      />
      <div className="container">
        <div className="row">
     
          <div
            className="col-12 p-2"
            dangerouslySetInnerHTML={{ __html: settings?.terms_conditions_text}}
          />
        </div>
      </div>
    </section>
  );
}

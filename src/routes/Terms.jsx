import PageHeader from "../components/PageHeader";
import useSettings from "../hooks/useSettings"; 

export default function Terms() {
  const { settings, isLoading, error } = useSettings();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const paragraphs = settings?.terms_conditions_text
    .split(/<\/?p>/)
    .map(p => p.trim())
    .filter(p => p.length > 0);

  return (
    <div>
      <PageHeader
        title="Terms & Conditions"
        subtitle="Please read carefully"
      />

   <div className="terms-content container">
  {paragraphs.map((text, index) => (
    <p key={index}>
      {text}
    </p>
  ))}
</div>

    </div>
  );
}

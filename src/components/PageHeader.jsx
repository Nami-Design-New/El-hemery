export default function PageHeader({ title, subtitle }) {
  return (
    <div className="page-header text-center mb-5">
      <h1 className="header-title">{title}</h1>
      {subtitle && <p className="header-subtitle">{subtitle}</p>}
    </div>
  );
}

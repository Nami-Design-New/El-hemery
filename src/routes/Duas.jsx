import PageHeader from "../components/PageHeader.jsx";

const DUA_LIST = [
  {
    id: "ihram",
    title: "دعاء الإحرام",
    arabic: "اللَّهُمَّ إِنِّي أَحْرَمْتُ بِحَجٍ/بِعُمْرَةٍ فَتَقَبَّلْهُ مِنِّي"
  },
  {
    id: "talbiyah",
    title: "التلبية",
    arabic: "لَبَّيْكَ اللَّهُمَّ لَبَّيْكَ، لَبَّيْكَ لَا شَرِيكَ لَكَ لَبَّيْكَ..."
  },
  {
    id: "enter-makkah",
    title: "دعاء دخول مكة",
    arabic: "اللهم اجعلها خيرا وبارك لنا فيها"
  },
  {
    id: "enter-haram",
    title: "دعاء دخول المسجد الحرام",
    arabic: "اللهم افتح لي أبواب رحمتك"
  },
  {
    id: "safar",
    title: "دعاء السفر",
    arabic:
      "اللَّهُمَّ إِنَّا نَسْأَلُكَ فِي سَفَرِنَا هَذَا الْبِرَّ وَالتَّقْوَى..."
  }
];

export default function Duas() {
  return (
    <main className="duas-page" >
            <PageHeader
                        title=" أدعية الحج والعمرة"
                        subtitle=" أدعية ثابتة ومختصرة — للقراءة أثناء المناسك"
                    />
        <div className="container">

        <div className="duas-grid">

          <aside className="duas-compass">
            <div className="compass-card">
              <img
                src="/icons/qiblah.svg"
                alt="البوصلة"
                className="compass-svg"
              />
              <div className="compass-meta">
                <h4>البوصلة</h4>
                <small>اتجاه ثابت للمساعدة أثناء المناسك</small>
              </div>
            </div>
          </aside>

          {/* قائمة الأدعية */}
          <section className="duas-list">
            {DUA_LIST.map((d) => (
              <article key={d.id} className="dua-card">
                <div className="dua-head">
                  <h3>{d.title}</h3>
                </div>
                <p className="dua-ar">{d.arabic}</p>
              </article>
            ))}
          </section>
        </div>
      </div>
    </main>
  );
}

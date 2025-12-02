import { useState, useEffect, useRef } from "react";

export default function ServicesSection() {
  const orbitRef = useRef(null);

  const items = [
    {
      title: "النقل",
      icon: "/icons/s1.svg",
      text: "نوفر وسائل نقل حديثة ومريحة لكل الحجاج، مع باصات مكيفة وسائقين محترفين لضمان وصول آمن وسريع لكل مكان."
    },
    {
      title: "السكن",
      icon: "/icons/s1.svg",
      text: "خيام مكيفة مجهزة بكل وسائل الراحة، مع مرافق صحية ونظافة يومية لتوفير تجربة إقامة مريحة طوال فترة الحج."
    },
    {
      title: "الإعاشة",
      icon: "/icons/s1.svg",
      text: "وجبات متنوعة وصحية تقدم يوميًا، تشمل خيارات نباتية ولحوم طازجة، مع مراعاة المعايير الدينية والصحية."
    },
    {
      title: "عرفات",
      icon: "/icons/s1.svg",
      text: "خيام أوروبية واسعة في منطقة عرفات، مجهزة بمقاعد ومراوح، مع فريق خدمة متواجد لتلبية جميع احتياجات الحجاج."
    },
    {
      title: "مزدلفة",
      icon: "/icons/s1.svg",
      text: "موقع مزدلفة مجهز بالكامل، مع خيام للإقامة ومناطق للراحة، بالإضافة إلى إرشادات واضحة لتسهيل الانتقالات."
    },
    {
      title: "القطار",
      icon: "/icons/s1.svg",
      text: "رحلات سريعة ومريحة بين مكة والمزدلفة وعرفات باستخدام قطارات حديثة ومهيأة لضمان الراحة والأمان لجميع الحجاج."
    },
    {
      title: "المرشد الديني",
      icon: "/icons/s1.svg",
      text: "يوجد فريق من المرشدين الدينيين لتقديم الإرشادات الدينية والأدعية الصحيحة أثناء أداء مناسك الحج، مع جلسات تعليمية يومية."
    },
    {
      title: "العربات",
      icon: "/icons/s1.svg",
      text: "عربات كهربائية ومجهزة لكبار السن وذوي الاحتياجات الخاصة، لتسهيل التنقل بين المواقع المختلفة دون أي تعب."
    },
  ];

  const [rotation, setRotation] = useState(0);
  const [orbitSize, setOrbitSize] = useState({ width: 0, height: 0, radius: 0 });

  useEffect(() => {
    if (orbitRef.current) {
      const w = orbitRef.current.offsetWidth;
      const h = orbitRef.current.offsetHeight;
      const r = w / 2 + 30;
      setOrbitSize({ width: w, height: h, radius: r });
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((r) => r + 0.1);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="services-section">
         <h2 className="title">خدمات باقة الحج المميزة</h2>
      <p className="subtitle">راحة وتنظيم في كل خطوة</p>
      <div className="service-wrapper">

        <div className="center-half-circle">
          <img
            src={items[Math.floor(rotation) % items.length].icon}
            className="service-icon"
          />
          <h3>{items[Math.floor(rotation) % items.length].title}</h3>
          <p>{items[Math.floor(rotation) % items.length].text}</p>
        </div>

        <div className="orbit" ref={orbitRef}>
          {items.map((item, i) => {
            const activeIndex = Math.floor(rotation) % items.length;

            const indexDiff = i - activeIndex;

            const angle = ((2 * Math.PI) / items.length) * indexDiff - Math.PI / 2;

            const cx = orbitSize.width / 2;
            const cy = orbitSize.height;

            const left = cx + Math.cos(angle) * orbitSize.radius;
            const top = cy + Math.sin(angle) * orbitSize.radius;

            return (
              <div
                key={i}
                className={`orbit-item ${activeIndex === i ? "active" : ""}`}
                style={{
                  left: `${left}px`,
                  top: `${top}px`,
                  transition: "all 0.5s linear",
                }}
              >
                <div className="icon-wrap">
                  <img src={item.icon} />
                  <span>{item.title}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

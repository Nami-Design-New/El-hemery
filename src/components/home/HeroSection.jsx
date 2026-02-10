// import { useEffect, useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper/modules";
// import "swiper/css";
// import useGetHome from "../../hooks/home/useGetSlider";
// import { useTranslation } from "react-i18next";
// import { Link } from "react-router";

// export default function HeroSection() {
//   const [fade, setFade] = useState(false);
//   const { data: slides = [], isLoading } = useGetHome();
//   const { t } = useTranslation();

//   useEffect(() => {
//     setTimeout(() => setFade(true), 200);
//   }, []);

//   return (
//     <section className={`hero-section ${fade ? "fade-in" : ""}`}>

//       {/* slider images */}
//       {!isLoading && slides.length > 0 && (
//         <Swiper
//           slidesPerView={1}
//           loop={true}
//           centeredSlides={true}
//           modules={[Autoplay]}
//           autoplay={{ delay: 3000, disableOnInteraction: false }}
//           className="hero-bg-slider"
//         >
//           {slides.map((item, idx) => (
//             <SwiperSlide key={idx}>
//               <div
//                 className="slide-bg"
//                 style={{
//                   backgroundImage: `url(${item.image})`,
//                 }}
//               />
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       )}

//       <div className="overlay" />

//       <div className="hero-content">
//         <h1 className="hero-title">
//           {t("hero.title")}
//           <span>{t("hero.subtitle")}</span>
//         </h1>

//         <p className="hero-sub">
//           {t("hero.description")}
//         </p>

//         <div className="hero-btns">
//           <Link to="/helpinregister" className="primary-btn">
//             {t("hero.helpinregister")}
//           </Link>
//           <Link to="/joinus" className="secondary-btn">
//             {t("hero.joinus")}
//           </Link>
//         </div>
//       </div>

//       <div className="hero-stats">
//         <div className="stat-box">
//           <h2>15+</h2>
//           <p>{t("hero.stats.experience")}</p>
//         </div>
//         <div className="stat-box">
//           <h2>10,000+</h2>
//           <p>{t("hero.stats.hajjPilgrims")}</p>
//         </div>
//         <div className="stat-box">
//           <h2>12</h2>
//           <p>{t("hero.stats.countries")}</p>
//         </div>
//       </div>

//     </section>
//   );
// }

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import useGetHome from "../../hooks/home/useGetSlider";
import { Link } from "react-router";
import { useTranslation } from "react-i18next";

export default function HeroSectionUpdated() {
  const { data: slides = [], isLoading } = useGetHome();
  const { t } = useTranslation();

  /* Services List */
  const services = [
    { title: t("faqs.guides"), path: "/guidance", icon: "fa-book" },
    { title: t("faqs.mostCommon"), path: "/CommonFaqs", icon: "fa-comments" },
    { title: t("faqs.carTravelers"), path: "/CarTravelers", icon: "fa-car" },
    { title: t("faqs.routePlan"), path: "/RoutePlan", icon: "fa-route" },
    { title: t("faqs.commonfatwa"), path: "/CommonFatwa", icon: "fa-hands-praying" },
    { title: t("faqs.coordinates"), path: "/Coordinates", icon: "fa-users-gear" },
    { title: t("faqs.groups"), path: "/Groups", icon: "fa-location-dot" },
    { title: t("hero.helpinregister"), path: "/helpinregister", icon: "fa-life-ring" },
    { title: t("footer.bottom.privacy"), path: "/terms-conditions", icon: "fa-file-contract" },
    { title: t("footer.bottom.jobs"), path: "/jobs", icon: "fa-briefcase" },
    { title: t("tasbeeh.tipsTitle"), path: "/tips", icon: "fa-lightbulb" },
    { title: t("header.services"), path: "/ServicesPage", icon: "fa-hands-helping" },

  ];

  return (
    <section className="hero-updated">
      <div className="hero-container">

        <div className="hero-grid">
          {/* Left Services Panel */}
          <div className="services-panel left-panel">
            <div className="services-grid">
              {services.slice(0, Math.ceil(services.length / 2)).map((service, idx) => (
                <Link key={idx} to={service.path} className="service-card">
                  <div className="service-icon"><i className={`fa-solid ${service.icon}`}></i></div>
                  <span className="service-title">{service.title}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Slider Panel */}
          <div className="slider-panel">
            {!isLoading && slides.length > 0 ? (
              <Swiper
                slidesPerView={1}
                loop
                modules={[Autoplay]}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                className="main-slider"
              >
                {slides.map((slide, idx) => (
                  <SwiperSlide key={idx}>
                    <div
                      className="slide-bg"
                      style={{
                        backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${slide.image})`,
                      }}
                    >
                      <div className="quran-verse">
                        ﴿وَأَذِّنْ فِي النَّاسِ بِالْحَجِّ يَأْتُوكَ رِجَالًا
                        وَعَلَىٰ كُلِّ ضَامِرٍ يَأْتِينَ مِنْ كُلِّ فَجٍّ عَمِيقٍ ﴾
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            ) : (
              <div className="slider-placeholder">
                <div className="placeholder-content">
                  <h3>{t("hero.welcome")}</h3>
                  <p>{t("hero.placeholderText")}</p>
                </div>
              </div>
            )}
          </div>

          {/* Right Services Panel */}
          <div className="services-panel right-panel">
            <div className="services-grid">
              {services.slice(Math.ceil(services.length / 2)).map((service, idx) => (
                <Link key={idx} to={service.path} className="service-card">
                  <div className="service-icon"><i className={`fa-solid ${service.icon}`}></i></div>
                  <span className="service-title">{service.title}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Full Width Tab Below Slider */}
        <div className="full-tab-below">
          <Link
            to="https://haj.gov.sa"
            target="_blank"
            className="tab-card"
          >
            <i className="fa-solid fa-globe"></i>
            <span>{t("hero.hajWebsite")}</span>
          </Link>
        </div>

      </div>
    </section>
  );
}

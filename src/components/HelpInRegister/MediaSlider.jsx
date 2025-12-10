import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import { useTranslation } from "react-i18next";

export default function MediaSlider({ files }) {
  const { t } = useTranslation();

  return (
    <div className="card-box media-card">
      <h3 className="media-title">{t("helpRegister.mediaTitle")}</h3>

      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={10}
        navigation
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 2 },
          1200: { slidesPerView: 3 },
        }}
      >
        {files?.map((file) => (
          <SwiperSlide key={file.id}>
            <div className="media-item">
              {file.type === "video" ? (
                <video src={file.file} controls />
              ) : (
                <img src={file.file} alt="" />
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

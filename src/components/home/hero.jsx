import { useState, useEffect } from "react";

export default function Hero() {
    const [currentImage, setCurrentImage] = useState(0);

    const images = [
        "/images/3.png",
        "/images/2.png",
        "/images/3.png",
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % images.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="hero-section ">
            {/* SOCIALS LEFT */}
            <div className="socials-left">
                <span>انستقرام</span>
                <span>تويتر</span>
                <span>فيسبوك</span>
            </div>

            <div className="hero-inner container">

                {/* CENTER CONTENT */}
                <div className="center-content" style={{ textAlign: "right" }}>
                    {/* BIG TITLE */}
                    <div className="big-title">
                        <div className="title-row">
                            <div className="small-title">
                                <p>مرحبًا بك في </p>
                                <h4>الحميري للحج</h4>
                                {/* <img src="/images/7.svg" alt="تسطير" className="underline-svg" /> */}
                            </div>
                            <h1>شريكك</h1>
                            <img src="/images/Asset 4.svg" alt="أيقونة" className="title-icon" />
                        </div>

                        <div className="title-row">
                            <h1>الموثوق و المتكامل</h1>
                        </div>

                        <div className="title-row">
                            <h1>لحج وعُمرة</h1>
                            <div className="img-contact-row">
                                <div className="img-wrapper">
                                    <img src={images[currentImage]} alt="خدمات الحميري" className="main-img" />
                                </div>

                                <div className="circle-btn" aria-hidden="true">
                                    <i className="fa-solid fa-arrow-trend-up arrow"></i>
                                    <svg width="120" height="120" viewBox="0 0 120 120" role="img" aria-label="تواصل معنا">
                                        <defs>
                                            <path
                                                id="circlePath"
                                                d="M60,10 a50,50 0 1,1 -0.1,0"
                                            />
                                        </defs>

                                        <text fontSize="10" fill="#fff">
                                            <textPath xlinkHref="#circlePath" startOffset="0%">
                                                تواصل معنا • تواصل معنا • تواصل معنا •
                                            </textPath>
                                        </text>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="desc-curve-row">
                        <div className="curve-svg">
                            <svg width="300" height="180" viewBox="0 0 300 180" role="img" aria-label="مرر للأسفل">
                                <path
                                    id="curvePath"
                                    d="M10,40 Q150,170 290,40"
                                    stroke="#8E1838"
                                    strokeWidth="4"
                                    fill="transparent"
                                />

                                <text fontSize="14" fill="#000" fontWeight="400" style={{ baselineShift: "5px" }}>
                                    <textPath href="#curvePath" startOffset="30%" spacing="auto">
                                        مرر للأسفل
                                    </textPath>
                                </text>
                                <image
                                    href="/images/arr.svg"
                                    width="30"
                                    height="25"
                                    x="5"
                                    y="26"
                                />
                            </svg>
                        </div>

                        <p className="desc">
                            يقدم الحميري خدمات حج وعمرة متكاملة بخبرة واهتمام بالتفاصيل.
                            من التنظيم اللوجستي إلى الإرشاد والراحة أثناء الرحلة — نرافقك خطوة بخطوة
                            لتجربة آمنة ومُطمئنة. انضم إلينا لتحويل النية إلى رحلة لا تُنسى.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
}

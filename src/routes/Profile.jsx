import { useState } from "react";
import PageHeader from "../components/PageHeader";

export default function Profile() {
    const [activeTab, setActiveTab] = useState("complaints");

    const [userData] = useState({
        name: "أحمد محمد",
        phone: "+966 50 123 4567",
        registrationNumber: "PH23456",
        age: 45,
        gender: "ذكر",
        residenceAddress: "الرياض، المملكة العربية السعودية",
        iqamaNumber: "1234567890",
        image: "/images/2.png"
    });

    const [supervisors] = useState([
        { id: 1, name: "أحمد محمد", position: "قائد المجموعة", phone: "+966501112222" },
        { id: 2, name: "محمود علي", position: "مدير المشرفين", phone: "+966503334444" },
        { id: 3, name: "محمد سمير", position: "منسق طلبات الحجاج", phone: "+966505556666" }
    ]);

    return (
        <main className="profile-page">
            <PageHeader
                title="الملف الشخصي"
                subtitle="معلوماتك الشخصية ورقم ملفك"
            />

            <div className="container">
                
                {/* ---------------- Top Info Card ---------------- */}
                <div className="top-info-card">
                    <div className="logo-section">
                        <div className="logo-box">
                            <img src={userData.image} alt={userData.name} />
                        </div>
                    </div>

                    <div className="info-grid">
                        <div className="info-item">
                            <span className="label">المقعد في الباص</span>
                            <span className="value">{userData.registrationNumber}</span>
                        </div>
                        <div className="info-item">
                            <span className="label">رقم الهاتف</span>
                            <span className="value">{userData.phone}</span>
                        </div>
                        <div className="info-item">
                            <span className="label">رقم الإقامة</span>
                            <span className="value">{userData.iqamaNumber}</span>
                        </div>
                        <div className="info-item">
                            <span className="label">رقم الملف</span>
                            <span className="value">14</span>
                        </div>
                    </div>
                </div>

                {/* ---------------- Cards Row ---------------- */}
                <div className="cards-row">
                    <div className="personal-card">
                        <h2 className="section-title">المعلومات الأساسية</h2>
                        <ul className="personal-list">
                            <li><span className="label">المقعد في الباص :</span><span className="val">{userData.registrationNumber}</span></li>
                            <li><span className="label">الاسم :</span><span className="val">{userData.name}</span></li>
                            <li><span className="label">موقع السكن فندقي :</span><span className="val">خيمة رقم 45</span></li>
                            <li><span className="label">موقع السكن عرفات :</span><span className="val">خيمة رقم 45</span></li>
                            <li><span className="label">موقع السكن مزدلفة :</span><span className="val">خيمة رقم 45</span></li>
                        </ul>
                    </div>

                    <div className="right-card">
                        <div className="supervisors-card">
                            <h2 className="section-title">المشرفون</h2>
                            <div className="supervisors-list compact">
                                {supervisors.map(s => (
                                    <div className="supervisor-row" key={s.id}>
                                        <a href={`tel:${s.phone}`} className="call-icon">
                                            <i className="fa-solid fa-phone"></i>
                                        </a>
                                        <div className="supervisor-info">
                                            <div className="supervisor-name">{s.name}</div>
                                            <div className="supervisor-position">{s.position}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="companions-card">
                            <h2 className="section-title">مرتبطون معك</h2>
                            <div className="companions-list compact">
                                <div className="companion-item">ولاء علي السيد</div>
                                <div className="companion-item">سعيد احمد</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ---------------- Tabs Section ---------------- */}
                <div className="tabs-section">
                    <div className="tabs-header">
                        <button
                            className={activeTab === "complaints" ? "active" : ""}
                            onClick={() => setActiveTab("complaints")}
                        >
                            الشكاوى
                        </button>

                        <button
                            className={activeTab === "requests" ? "active" : ""}
                            onClick={() => setActiveTab("requests")}
                        >
                            الطلبات
                        </button>

                        <button
                            className={activeTab === "suggestions" ? "active" : ""}
                            onClick={() => setActiveTab("suggestions")}
                        >
                            الاقتراحات
                        </button>

                        <button
                            className={activeTab === "surveys" ? "active" : ""}
                            onClick={() => setActiveTab("surveys")}
                        >
                            الاستبيانات
                        </button>
                    </div>

                    <div className="tabs-content">
                        {activeTab === "complaints" && (
                            <div className="tab-box">لا توجد شكاوى حالياً.</div>
                        )}
                        {activeTab === "requests" && (
                            <div className="tab-box">قائمة الطلبات ستظهر هنا.</div>
                        )}
                        {activeTab === "suggestions" && (
                            <div className="tab-box">أرسل اقتراحاتك لتحسين تجربتك.</div>
                        )}
                        {activeTab === "surveys" && (
                            <div className="tab-box">الاستبيانات الخاصة بك ستتوفر هنا.</div>
                        )}
                    </div>
                </div>

            </div>
        </main>
    );
}

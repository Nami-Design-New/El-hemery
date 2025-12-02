import { useState } from "react";
import PageHeader from "../components/PageHeader.jsx";
import { Link } from "react-router";

export default function Faqs() {
    const [activeTab, setActiveTab] = useState(0);
    const [activeAccordion, setActiveAccordion] = useState(null);

    const tabs = [
        {
            id: 0,
            label: "الدليل التوعوي والإرشادي",
            icon: "fa-book",
            content: [
                {
                    id: 1,
                    title: "متطلبات الحج الأساسية",
                    answer: "متطلبات الحج الأساسية تشمل: الإسلام، العقل، البلوغ، والحرية، والاستطاعة المالية والجسدية. يجب أن يكون لديك جواز سفر ساري المفعول وتأشيرة حج صحيحة."
                },
                {
                    id: 2,
                    title: "أركان الحج الأساسية",
                    answer: "أركان الحج أربعة: الإحرام، والوقوف بعرفة، والطواف بالبيت الحرام، والسعي بين الصفا والمروة. جميع هذه الأركان واجبة ولا يصح الحج بدونها."
                },
                {
                    id: 3,
                    title: "محظورات الإحرام",
                    answer: "من محظورات الإحرام: قص الشعر والأظافر، استخدام الطيب، تغطية الرأس للرجال، لبس المخيط، الصيد، والمعاشرة الزوجية. يجب الابتعاد عن هذه الأمور طوال فترة الإحرام."
                },
                {
                    id: 4,
                    title: "الطواف والسعي بالتفصيل",
                    answer: "الطواف يكون 7 أشواط حول الكعبة بعكس اتجاه عقارب الساعة، والسعي 7 أشواط بين الصفا والمروة. كل شوط له أحكام معينة وسنن يجب اتباعها."
                },
                {
                    id: 5,
                    title: "التضحية والهدي",
                    answer: "على الحاج المتمتع والقارن تقديم هدي (شاة أو جزء من بدنة). تتم التضحية في أيام التشريق، وتوزع على الفقراء والأقارب والأصدقاء."
                }
            ]
        },
        {
            id: 1,
            label: "الأسئلة الأكثر شيوعًا",
            icon: "fa-comments",
            content: [
                {
                    id: 6,
                    title: "كم عدد أيام رحلة الحج عادة؟",
                    answer: "عادة تستغرق رحلة الحج حوالي 10-14 يومًا، تبدأ من الوصول إلى مكة المكرمة وحتى العودة. تشمل الإحرام والطواف والسعي وأيام التشريق."
                },
                {
                    id: 7,
                    title: "ما أسعار الباقات المختلفة؟",
                    answer: "نوفر باقات متعددة تناسب جميع الميزانيات، من باقات اقتصادية إلى فاخرة. تتراوح الأسعار حسب مستوى الخدمات والسكن والنقل. يرجى التواصل معنا للحصول على أسعار مفصلة."
                },
                {
                    id: 8,
                    title: "هل يوجد تخفيفات للمجموعات الكبيرة؟",
                    answer: "نعم، نقدم تخفيفات خاصة للمجموعات من 20 شخص فأكثر. كما نوفر خطط دفع مرنة وتسهيلات مالية للعائلات والمجموعات الكبيرة."
                },
                {
                    id: 9,
                    title: "ما الخدمات الطبية المتوفرة؟",
                    answer: "نوفر فريقًا طبيًا متخصصًا متواجدًا طوال الوقت. هناك عيادة طبية في كل موقع إقامة، وتأمين صحي شامل يغطي الحالات الطارئة والاستشارات الطبية."
                },
                {
                    id: 10,
                    title: "هل توجد جلسات دينية خلال الرحلة؟",
                    answer: "نعم، يتوفر فريق من المرشدين الدينيين المؤهلين يقدمون جلسات دينية يومية وإرشادات حول مناسك الحج. هناك أيضًا فرص للتعلم والاستزادة من العلم الديني."
                }
            ]
        },
        {
            id: 2,
            label: "القادمون بسياراتهم",
            icon: "fa-car",
            content: [
                {
                    id: 11,
                    title: "ما هي شروط إحضار السيارة الشخصية؟",
                    answer: "يجب أن تكون السيارة مسجلة وموثقة، وتتمتع بتأمين ساري المفعول. كما يجب اجتياز الفحص الفني وتحمل لصاقة العرضة. نوفر أماكن آمنة لوقوف السيارات."
                },
                {
                    id: 12,
                    title: "هل توجد خدمات صيانة طوارئ؟",
                    answer: "نعم، نوفر خدمة صيانة طوارئ على مدار الساعة. لدينا فنيون متخصصون وقطع غيار أصلية. كما نوفر خدمة الرافعة والجر في حالات العطل الشديدة."
                },
                {
                    id: 13,
                    title: "ما مساحة مواقف السيارات؟",
                    answer: "نمتلك مواقف آمنة وحديثة بمساحة كبيرة في مناطق قريبة من الحرم. جميع السيارات تكون تحت حراسة أمنية مستمرة وكاميرات مراقبة."
                },
                {
                    id: 14,
                    title: "هل يمكن الذهاب والعودة بالسيارة الشخصية؟",
                    answer: "نعم، يمكنك القيادة الذاتية من بيتك إلى مكة. نوفر خريطة طرق مفصلة وتعليمات واضحة. كما نقدم دعم ملاحة عبر الهاتف للتأكد من وصولك بأمان."
                },
                {
                    id: 15,
                    title: "ما تكاليف وقوف السيارات؟",
                    answer: "تكاليف المواقف تشمل فترة الحج كاملة بسعر ثابت وآمن. لا توجد رسوم إضافية مخفية، وتشمل الخدمة الحراسة الأمنية والتأمين."
                }
            ]
        },
        {
            id: 3,
            label: "خطة السير والعودة",
            icon: "fa-route",
            content: [
                {
                    id: 16,
                    title: "ما هي خطة اليوم الأول؟",
                    answer: "اليوم الأول: استقبال من المطار، التوجه إلى الفندق، تسجيل الدخول، ومحاضرة توجيهية عن مناسك الحج. وقت الراحة والتأقلم مع المناخ."
                },
                {
                    id: 17,
                    title: "متى نذهب للإحرام والطواف؟",
                    answer: "في اليوم الثاني والثالث: الذهاب للمسجد الحرام، الإحرام بنية العمرة، الطواف 7 أشواط، السعي، والحلق أو التقصير. ثم العودة للاستراحة."
                },
                {
                    id: 18,
                    title: "ما جدول يوم عرفة؟",
                    answer: "يوم عرفة: الاستيقاظ مبكرًا، وجبة إفطار قوية، الذهاب إلى عرفات قبل الزوال. الوقوف والدعاء حتى الغروب. العودة إلى مزدلفة في المساء."
                },
                {
                    id: 19,
                    title: "ماذا في ليلة مزدلفة؟",
                    answer: "ليلة مزدلفة: المبيت والراحة، صلاة المغرب والعشاء، جمع الحصى للرمي. الاستيقاظ مبكرًا للفجر والدعاء. الذهاب إلى منى لرمي جمرة العقبة."
                },
                {
                    id: 20,
                    title: "متى تكون العودة والتسليم؟",
                    answer: "بعد أيام التشريق: يوم 13 أو 12 حسب الاختيار. تسليم المفاتيح والتوثيق. الذهاب للمطار والعودة الآمنة للبيت مع تحقيق الحج إن شاء الله."
                }
            ]
        }
    ];

    const currentTab = tabs[activeTab];

    const toggleAccordion = (id) => {
        setActiveAccordion(activeAccordion === id ? null : id);
    };

    return (
        <section className="faq-page">
            <PageHeader
                title="الأسئلة الشائعة والإرشادات"
                subtitle="كل ما تحتاج معرفته عن رحلتك"
            />

            <div className="container mb-5">
                <div className="faq-wrapper">
                    {/* Tabs Navigation */}
                    <div className="tabs-navigation">
                        <div className="tabs-list">
                            {tabs.map((tab) => (
                                <button
                                    key={tab.id}
                                    className={`tab-btn ${activeTab === tab.id ? "active" : ""}`}
                                    onClick={() => {
                                        setActiveTab(tab.id);
                                        setActiveAccordion(null);
                                    }}
                                >
                                    <i className={`fa-solid ${tab.icon}`}></i>
                                    <span>{tab.label}</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Tab Content */}
                    <div className="tab-content-wrapper">
                        <div className="tab-content-header">
                            <div className="header-icon">
                                <i className={`fa-solid ${currentTab.icon}`}></i>
                            </div>
                            <h2>{currentTab.label}</h2>
                        </div>

                        {/* Accordion */}
                        <div className="accordion">
                            {currentTab.content.map((item) => (
                                <div
                                    key={item.id}
                                    className={`accordion-item ${activeAccordion === item.id ? "active" : ""}`}
                                >
                                    <button
                                        className="accordion-header"
                                        onClick={() => toggleAccordion(item.id)}
                                    >
                                        <h3 className="accordion-title">{item.title}</h3>
                                        <div className="accordion-icon">
                                            <i className="fa-solid fa-chevron-down"></i>
                                        </div>
                                    </button>
                                    <div className="accordion-body">
                                        <div className="accordion-content">
                                            <p>{item.answer}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* CTA Section */}
                    <div className="faq-cta">
                        <div className="cta-content">
                            <h3>لم تجد ما تبحث عنه؟</h3>
                            <p>تواصل معنا مباشرة وسيكون فريقنا سعيدًا بالرد على كل استفساراتك</p>
                            <div className="cta-buttons">
                                <Link to="/contact" className="btn btn-primary">
                                    <i className="fa-solid fa-phone"></i>
                                    اتصل بنا
                                </Link>
                                <Link to="/contact" className="btn btn-secondary">
                                    <i className="fa-solid fa-envelope"></i>
                                    أرسل رسالة
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
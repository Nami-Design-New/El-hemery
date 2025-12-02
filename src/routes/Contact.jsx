import { useForm } from "react-hook-form";
import InputField from "../ui/forms/InputField";
import PageHeader from "../components/PageHeader.jsx";

export default function Contact() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const handleSend = (data) => {
    console.log(data);
  };

  const socialCards = [
    { title: "إنستجرام", icon: "fa-instagram", color: "#E1306C", link: "#" },
    { title: "سناب شات", icon: "fa-snapchat", color: "#FFFC00", link: "#" },
    { title: "واتساب", icon: "fa-whatsapp", color: "#25D366", link: "#" },
    { title: "تيك توك", icon: "fa-tiktok", color: "#000000", link: "#" },
  ];

  return (
    <section className="contact-page ">

 <PageHeader
        title="تواصل معنا"
        subtitle="نحن هنا للإجابة على أسئلتك ومساعدتك في كل ما تحتاجه"
      />
      <div className="container mb-5">
        <div className="row g-4">
          {socialCards.map((card, i) => (
            <div className="col-6 col-md-3" key={i}>
              <a href={card.link} className="social-card d-flex flex-column align-items-center justify-content-center p-4 rounded-4">
                <i className={`fab ${card.icon} icon mb-2`} style={{ color: card.color, fontSize: "32px" }}></i>
                <h5 className="m-0">{card.title}</h5>
              </a>
            </div>
          ))}
        </div>
      </div>

<div className="form_section container">
  <div className="row align-items-center justify-content-between g-4">
    <div className="col-lg-6 col-12">
      <form className="contact-form form_ui" onSubmit={handleSubmit(handleSend)}>
        <h4 className="title mb-3">تواصل معنا</h4>
        <InputField
          label="الاسم الكامل"
          placeholder="اكتب اسمك"
          error={errors?.name?.message}
          {...register("name", { required: "الاسم مطلوب" })}
        />
        <InputField
          label="البريد الإلكتروني"
          placeholder="example@mail.com"
          type="email"
          error={errors?.email?.message}
          {...register("email", { required: "البريد مطلوب" })}
        />
        <InputField
          as="textarea"
          label="اكتب رسالتك"
          placeholder="اكتب رسالتك هنا..."
          error={errors?.message?.message}
          {...register("message", { required: "الرسالة مطلوبة" })}
        />
        <button type="submit" className="btn-send mt-3">إرسال</button>
      </form>
    </div>

    <div className="col-lg-5 col-12 d-lg-block d-none">
      <div className="contact-img ps-lg-4">
        <img src="/images/h1.png" alt="Contact" className="w-100 rounded-3" />
      </div>
    </div>
  </div>
</div>

    </section>
  );
}

import useGetTips from "../hooks/home/useGetTips";
import PageHeader from "../components/PageHeader";
import { useTranslation } from "react-i18next";

export default function Tips() {
    const { t } = useTranslation();
    const { data: tipsData, isLoading } = useGetTips();

    return (
        <section className="main_section tips-page">
            <PageHeader
                title={t("tasbeeh.tipsTitle")}
                subtitle={t("faqs.tipsSubTitle")}
            />

            <div className="container">
                <div className="row">
                    <div className="col-12 p-2">
                        {isLoading ? (
                            <p>Loading...</p>
                        ) : (
                            <ul className="tips-list">
                                {tipsData?.map((tip) => (
                                    <li key={tip.id} dangerouslySetInnerHTML={{ __html: tip.description || tip.title }} />
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}

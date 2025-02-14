"use client";
import React from "react";
import "./about.css";

const AboutPage = () => {
    return (
        <section className="aboutPage">
            <div className="container">
                <h1 className="title">Biz Kimik?</h1>
                <p className="description">
                    2015-ci ildə başlayan fəaliyyəti ərzində özünü etibarlı tərəfdaş və geniş spektrli xidmətlərin təchizatçısı kimi tanıtmış şirkətimiz Azərbaycanın dinamik surətdə inkişaf edən informasiya texnologiyaları sektorunda Nəqliyyatın İntellektual GPS Nəzarət sistemlərin inteqrasiyası, avadanlıq və proqram təminatının təchizatı və quraşdırılması üzrə xidmətlər göstərir. <br /> <br />
                    “GPS Plus” komandasının başlıca məqsədi istənilən müştərinin tələbatını maksimal həddə ödəyə biləcək nəqliyyat vasitələrinin yüksək keyfiyyətli monitorinq və nəzarət sisteminin yaradılmasıdır. <br /> <br />
                    Biz bazarı öyrənərək, hər bir alt sistemi üçün ən mükəmməl həlləri götürüb birləşdirmişik və bu gün öz müştərilərimizə hazır, konkret məqsədlər üçün optimallaşdırılmış həllər təklif edirik. <br /> <br />
                    Şirkət daim öz məhsullarını və həllərini təkmilləşdirir, istənilən biznes sahəsində istifadə üçün nəzərdə tutulmüş yeni təkliflər hazırlayır. <br /> <br />
                    “GPS Plus” şirkətinin işçiləri İT, GIS, M2M, GPS və naviqasiya sistemləri sahəsində yüksək ixtisaslı mütəxəssis və ekspertlərdir. <br /> <br />
                    Şirkət İSO 9001-2008 uyğun olaraq sertifikatlaşdırılmışdır.
                </p>
                <div className="team">
                    <h2>Komandamız</h2>
                    <div className="team-members">
                        <div className="member">
                            <img src="https://media.istockphoto.com/id/1413766112/photo/successful-mature-businessman-looking-at-camera-with-confidence.jpg?s=612x612&w=0&k=20&c=NJSugBzNuZqb7DJ8ZgLfYKb3qPr2EJMvKZ21Sj5Sfq4=" alt="CEO" />
                            <div className="member-info">CEO - Orxan Məmmədov</div>
                        </div>
                        <div className="member">
                            <img src="https://static.vecteezy.com/system/resources/thumbnails/023/886/161/small/young-smiling-businesswoman-standing-in-blur-background-of-office-generative-ai-photo.jpg" alt="Manager" />
                            <div className="member-info">Layihə Meneceri - Aygün Əliyeva</div>
                        </div>
                        <div className="member">
                            <img src="https://bairesdev.mo.cloudinary.net/blog/2022/08/portrait-of-a-man-using-a-computer-in-a-modern-office-picture-id1344688156-1.jpg?tx=w_1920,q_auto" alt="Developer" />
                            <div className="member-info">Baş Proqramçı - Elvin Hüseynov</div>
                        </div>
                        <div className="member">
                            <img src="https://res.cloudinary.com/hyld/image/upload/f_auto,dpr_auto,c_lfill,g_auto,w_6328,h_4218/v1/h2/solutions/technical-support/call-support-as87995413?h=4218&iar=0&w=6328" alt="Support" />
                            <div className="member-info">Texniki Dəstək - Nərmin Quliyeva</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutPage;

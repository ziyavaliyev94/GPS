"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "./main.css"
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import 'swiper/css/autoplay';
import { useEffect, useState } from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const Counter = ({ start, end, duration }) => {
  const [count, setCount] = useState(start);

  useEffect(() => {
    let startTime = Date.now();
    const interval = setInterval(() => {
      const elapsedTime = Date.now() - startTime;
      if (elapsedTime >= duration) {
        setCount(end);
        clearInterval(interval);
      } else {
        setCount(Math.floor(start + (end - start) * (elapsedTime / duration)));
      }
    }, 30);
    return () => clearInterval(interval);
  }, [start, end, duration]);

  return <span className="counter">{count}</span>;
};

const partners = [
  "/mkt.jpg", "/agrarco.jpg", "avroaz.jpg", "azprotein.png", "gesco.png",
  "kehriz.jpg", "soundride.png", "payim.png", "mitsubishi.webp", "anc.png",
];

const page = () => {
  return (
    <main>
      <section className="videoSection">
        <div className="videoContainer">
          <video width="100%" autoPlay muted loop>
            <source src="/GPSvideo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>
      <section className="carouselSection">
        <h1 className="why">NİYƏ BİZ?</h1>
        <div className="carouselContainer">
          <div className="whyUs">
            <div className="line">
              <h3>Peşəkar Təcrübə</h3>
              <p>İllərlə yığdığımız təcrübə ilə müştərilərimizə ən yüksək səviyyədə xidmət göstəririk. GPS texnologiyasında qabaqcıl həllər təqdim edərək, sizin ehtiyaclarınıza uyğun xüsusi həllər yaradırıq.</p>
            </div>
            <div className="line">
              <h3>Etibarlılıq və Dəqiqlik</h3>
              <p>Bizim üçün etibarlılıq əsasdır. Təqdim etdiyimiz GPS cihazları və xidmətləri ən dəqiq məlumatlarla təmin edir və uzunmüddətli istifadə üçün nəzərdə tutulub.</p>
            </div>
            <div className="line">
              <h3>Müştəri Məmnuniyyəti</h3>
              <p>Müştəri mərkəzliyik! Sizin məmnuniyyətiniz bizim əsas prioritetimizdir. Hər zaman sizi dinləyir, suallarınıza cavab verir və problemlərinizə ən optimal həlləri təqdim edirik.</p>
            </div>
            <div className="line">
              <h3>İnnovativ Yanaşma</h3>
              <p>Son texnologiyaları izləyərək bazarda yenilikçi həllər təqdim edirik. Bizimlə əməkdaşlıq etməklə, həmişə bir addım öndə olacaqsınız.</p>
            </div>
            <div className="line">
              <h3>Dəyərli Tərəfdaşlıq</h3>
              <p>Sadəcə xidmət təminatçısı deyil, sizin işinizin inkişafı üçün etibarlı tərəfdaş olmağa çalışırıq.</p>
            </div>
          </div>
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img
                src="https://www.mimbarpublik.com/wp-content/uploads/2020/12/WhatsApp-Image-2020-12-02-at-09.42.26.jpeg"
                alt="Slide 1"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://static.vecteezy.com/system/resources/previews/023/847/217/non_2x/gps-navigation-on-the-smartphone-screen-with-ai-generated-free-photo.jpg"
                alt="Slide 2"
              />
            </SwiperSlide>
            <SwiperSlide><img
              src="https://techterms.com/img/xl/gps_53-3.jpg"
              alt="Slide 2"
            /></SwiperSlide>
            <SwiperSlide><img
              src="https://powunity.com/wp-content/uploads/2021/04/GPS-Tracking-Definition5.jpg"
              alt="Slide 2"
            /></SwiperSlide>
          </Swiper>
        </div>
      </section>
      <section className="safety">
        <div className="secure">
          <div className="content">
            <h1>100% Təhlükəsiz və Güvənli</h1>
            <p>İstifadəçilərin məlumatlarının qorunması prioritetdir. GPS sistemi güclü şifrələmə və təhlükəsizlik protokolları ilə məlumatların məxfiliyini təmin edir.</p>
          </div>
          <div className="contact">
            +994 55 408 07 17
          </div>
        </div>
      </section>
      <section className="services">
        <div className="boxes">
          <div className="box">
            <img src="/Etibarliliq.webp" alt="" />
            <h2>Etibarlılıq</h2>
            <p>GPS sistemi fasiləsiz işləməli və dəqiq məlumat təqdim etməlidir. İstifadəçilərin məlumatlarının təhlükəsizliyi təmin olunmalıdır.</p>
          </div>
          <div className="box">
            <img src="/Adaptivlik.webp" alt="" />
            <h2>Adaptiv</h2>
            <p>GPS müxtəlif cihazlarda və dillərdə uyğun işləməlidir. İstifadəçilərin ehtiyaclarına tez uyğunlaşması vacibdir.</p>
          </div>
          <div className="box">
            <img src="/Intuitiv.webp" alt="" />
            <h2>İntuitiv İnterfeys</h2>
            <p>İstifadəsi sadə və başa düşülən interfeys olmalıdır. Vizual elementlər və funksiyalar aydın təşkil edilməlidir.</p>
          </div>
          <div className="box">
            <img src="/Olculebilenlik.webp" alt="" />
            <h2>Ölçüləbilənlik</h2>
            <p>Sistem artan istifadəçi bazasına uyğun genişlənməlidir. Performans zəifləmədən məlumat axını idarə olunmalıdır.</p>
          </div>
        </div>
      </section>
      <section className="stats-section">
        <div className="stats-container">
          <div className="stat-item">
            <h2>+ <Counter start={0} end={238} duration={2000} /></h2>
            <p>Müştəri sayı</p>
          </div>
          <div className="stat-item">
            <h2>+ <Counter start={0} end={4225} duration={2000} /></h2>
            <p>Maşın sayı</p>
          </div>
          <div className="stat-item">
            <h2>+ <Counter start={0} end={472} duration={2000} /></h2>
            <p>Aktiv istifadəçi</p>
          </div>
          <div className="stat-item">
            <h2>+ <Counter start={0} end={97} duration={2000} /></h2>
            <p>Partnyorlar</p>
          </div>
        </div>
      </section>
      <section className="partners-section">
        <h2>Partnyorlarımız</h2>
        <Swiper
          spaceBetween={30}
          loop={true}
          autoplay={{ delay: 2000 }}
          modules={[Autoplay]}
          breakpoints={{
            320: { slidesPerView: 1 },
            480: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 }
          }}
        >
          {partners.map((logo, index) => (
            <SwiperSlide key={index} className="partner-slide">
              <img src={logo} alt={`Partner ${index + 1}`} />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      <section className="review">
        <div className="review" id="Review">
          <h1>Müştəri<span>Rəyləri</span></h1>
          <div className="review_box">
            <div className="review_card">
              <div className="card_top">
                <div className="profile">
                  <div className="profile_image">
                    <img src="https://imgcdn.stablediffusionweb.com/2024/11/7/118d16ee-5898-46e1-88e2-bb9eaae90e96.jpg" alt="" />
                  </div>
                  <div className="name">
                    <strong>Eltun İsgəndərov</strong>
                    <div className="like">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStarHalfAlt />
                    </div>
                  </div>
                </div>
              </div>
              <div className="comment">
                <p>
                  GPS+ ilə maşınıma GPS quraşdırdım və xidmətdən çox razı qaldım. İlk öncə, komandalarının peşəkarlığı və müştəriyə yanaşması məni çox sevindirdi. Quraşdırılma prosesi cəmi 30 dəqiqə çəkdi və heç bir əlavə problem yaşanmadı. Xəritə çox dəqiq işləyir və siqnallar gecikmədən ötürülür. Xüsusilə oğurluq hallarında avtomobilin yerini müəyyənləşdirmək üçün çox faydalı bir sistemdir. GPS+ xidmətini hər kəsə tövsiyə edirəm!
                </p>
              </div>
            </div>
            <div className="review_card">
              <div className="card_top">
                <div className="profile">
                  <div className="profile_image">
                    <img src="https://www.shutterstock.com/image-photo/smiling-african-american-millennial-businessman-600nw-1437938108.jpg" alt="" />
                  </div>
                  <div className="name">
                    <strong>Mehman Shamilov</strong>
                    <div className="like">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStarHalfAlt />
                    </div>
                  </div>
                </div>
              </div>
              <div className="comment">
                <p>
                  GPS+ istifadə etməyə başladıqdan sonra avtomobil idarəetməsində böyük rahatlıq hiss edirəm. Əvvəllər park etdiyim yerləri kiminsə maşınıma toxunduğunu bilmədiyim hallar olurdu. Ancaq bu sistem sayəsində indi hər şey nəzarətim altındadır. Xüsusilə, tətbiqin interfeysi çox rahat və sadədir. Avtomobilin dəqiq koordinatlarını görmək, sürət limitlərini təyin etmək və xəbərdarlıqlar almaq funksiyaları çox faydalıdır.  cavab verir. GPS+ mükəmməl bir həll yoludur!
                </p>
              </div>
            </div>
            <div className="review_card">
              <div className="card_top">
                <div className="profile">
                  <div className="profile_image">
                    <img src="https://media.istockphoto.com/id/1413766112/photo/successful-mature-businessman-looking-at-camera-with-confidence.jpg?s=612x612&w=0&k=20&c=NJSugBzNuZqb7DJ8ZgLfYKb3qPr2EJMvKZ21Sj5Sfq4=" alt="" />
                  </div>
                  <div className="name">
                    <strong>Mətin Həsənov</strong>
                    <div className="like">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStarHalfAlt />
                    </div>
                  </div>
                </div>
              </div>
              <div className="comment">
                <p>
                  Mənim kiçik bir taksi şirkətim var və GPS+ cihazlarını bütün nəqliyyat vasitələrimizə quraşdırdıq. Nəticədə sürücülərimizin fəaliyyətini. Hər maşının hərəkət trayektoriyasını görmək və yanacaq sərfiyyatını təhlil etmək imkanımız var. GPS cihazları hətta avtomobilin müəyyən bir zonadan çıxması və ya icazəsiz istifadəsi zamanı bizə bildiriş göndərir. Beləliklə, işimizə daha effektiv nəzarət edirik və əlavə xərcləri azalda bilirik. Bu xidməti biznes sahiblərinə mütləq tövsiyə edirəm!
                </p>
              </div>
            </div>
          </div>
          <div className="review_box">
            <div className="review_card">
              <div className="card_top">
                <div className="profile">
                  <div className="profile_image">
                    <img src="https://www.shutterstock.com/image-photo/confident-business-grad-student-mba-600nw-2324674659.jpg" alt="" />
                  </div>
                  <div className="name">
                    <strong>Nərmin Şərifova</strong>
                    <div className="like">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStarHalfAlt />
                    </div>
                  </div>
                </div>
              </div>
              <div className="comment">
                <p>
                  Həmişə avtomobilimlə bağlı təhlükəsizlik narahatlığım olub, xüsusilə də gecə vaxtı park edəndə. GPS+ quraşdırandan sonra bu narahatçılıq tamamilə aradan qalxdı. İstənilən vaxt telefondan maşınımın yerini dəqiqliklə görə bilirəm. Bir dəfə maşınımın siqnalizasiya sistemi işə düşdü və mən dərhal tətbiq vasitəsilə yerini yoxladım, hər şey qaydasında idi. Bundan başqa, GPS+ sürət həddi xəbərdarlıqları da göndərir, bu isə uzun səfərlərdə çox faydalıdır. Bu xidməti təhlükəsizlik axtaran hər kəsə tövsiyə edirəm!
                </p>
              </div>
            </div>
            <div className="review_card">
              <div className="card_top">
                <div className="profile">
                  <div className="profile_image">
                    <img src="https://media.istockphoto.com/id/831902150/photo/ive-solidified-my-name-in-the-business-world.jpg?s=612x612&w=0&k=20&c=GCkoeN4GXE9W3EgNmwnInZpvGEepUSPd7N8NMKGBGFs=" alt="" />
                  </div>
                  <div className="name">
                    <strong>Leyla Muradzadə</strong>
                    <div className="like">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStarHalfAlt />
                    </div>
                  </div>
                </div>
              </div>
              <div className="comment">
                <p>
                  GPS+ quraşdırılmadan əvvəl yanacaq sərfiyyatı və avtomobil istifadəsi ilə bağlı ciddi nəzarət problemi yaşayırdım. Xüsusilə iş yerindəki xidməti avtomobillər üçün bu, böyük bir problem idi. GPS+ sayəsində indi sürücülərin nə qədər məsafə qət etdiyini və hansı marşrutlardan istifadə etdiyini aydın şəkildə görə bilirəm. Cihazlar çox dəqiq işləyir və quraşdırılma çox sürətli oldu. Həmçinin, müştəri dəstəyi daim əlçatandır və suallarımıza tez cavab verirlər. GPS+ həm fərdi istifadə, həm də biznes üçün çox faydalı bir sistemdir!
                </p>
              </div>
            </div>
            <div className="review_card">
              <div className="card_top">
                <div className="profile">
                  <div className="profile_image">
                    <img src="https://img.freepik.com/premium-photo/front-view-portrait-young-freckled-woman-resting-hands-keyboard-browsing-information-computer-laptop-sitting-city-park-education-internet-technology-attractive-beautiful-girl_129180-8799.jpg?semt=ais_hybrid" alt="" />
                  </div>
                  <div className="name">
                    <strong>Gültac Türkanova</strong>
                    <div className="like">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStarHalfAlt />
                    </div>
                  </div>
                </div>
              </div>
              <div className="comment">
                <p>
                  Mən avtomobilimi bəzən icarəyə verirəm və həmişə maşının necə istifadə edildiyini bilməyə ehtiyac duyuram. GPS+ ilə bu problem tamamilə həll olundu. Artıq maşınımın harada olduğunu, hansı  getdiyini rahatlıqla izləyə bilirəm. Bundan başqa, cihaz avtomobilin gözlənilməz şəkildə hərəkətə keçməsi və ya siqnalizasiya işə düşdükdə mənə xəbərdarlıq göndərir. Tətbiq çox sadədir və hər kəs üçün əlverişli şəkildə hazırlanıb. GPS+-ı rahatlıq və təhlükəsizlik istəyən hər kəsə tövsiyə edirəm!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default page
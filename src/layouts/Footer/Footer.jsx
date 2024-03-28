import "./Footer.scss";

import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";

import { LuChevronRight } from "react-icons/lu";

const Footer = () => {
  return (
    <footer>
      <div className="top">
        <div className="footer-brand">
          <img className="logo" src="public/logo.png" alt="Logo" />
          <p>
            Mobil uygulamaızı indirerek bilet rezervasyon işlemlerinizi çok daha
            hızlı yapabilir ve kampanyalarımızdan haberdar olabilirsiniz!
          </p>

          <div className="mobil-store">
            <img src="public/appstore-icon.png" alt="App Store Icon" />
            <img src="public/googleplay-icon.png" alt="Google Play Icon" />
          </div>

          <div className="bulten">
            <label>E-Bülten</label>

            <div className="ebulten">
              <input
                type="text"
                name="ebulten"
                id="ebulten"
                placeholder="E-Mail"
              />
              <div className="btn">
                <LuChevronRight size={38} />
              </div>
            </div>
            <p>
              Bültenimize abone olarak güncel kampanyalarımızdan haberdar
              olabilirsiniz.
            </p>
          </div>

          <div className="social-media">
            <label>Sosyal Medya</label>
            <div className="icons">
              <FaFacebook size={32} />
              <FaTwitter size={32} />
              <FaInstagram size={32} />
              <FaYoutube size={32} />
              <FaWhatsapp size={32} />
            </div>
          </div>

          <div className="licence">
            <div className="tursab">
              <img src="public/tursab.png" alt="Tursab Icon" />
              <p>Tripenia Bilişim A.Ş. TURSAB 12345</p>
            </div>
            <div className="iata">
              <img src="public/iata.png" alt="Iata Icon" />
              <p>TRNCOM Seyahat Acentası IATA: 12345</p>
            </div>
          </div>
        </div>
        <div className="footer-links">
          <article>
            <strong>Otobüs Bileti</strong>
            <p>Otobüs Bileti Al</p>
            <p>Otobüs Firmaları</p>
            <p>Otobüs Seferleri</p>
          </article>

          <article>
            <strong>Otobüs Firmaları</strong>
            <a href="#">Varan</a>
            <a href="#">Nilüfer</a>
            <a href="#">Pamukkale</a>
            <a href="#">Kamil Koç</a>
            <a href="#">Metro</a>
            <a id="all" href="#">
              Tüm Firmalar
            </a>
          </article>

          <article>
            <strong>Tüm Otogarlar</strong>
            <a href="#">İstanbul</a>
            <a href="#">Ankara</a>
            <a href="#">İzmir</a>
            <a href="#">Antalya Koç</a>
            <a href="#">Eskişehir</a>
            <a id="all" href="#">
              Tüm Otogarlar
            </a>
          </article>

          <article>
            <strong>Firmamız</strong>
            <p>Hakkımızda</p>
            <p>BiletNoktası.com Blog</p>
          </article>

          <article>
            <strong>Yardım</strong>
            <p>İletişim</p>
            <p>Sık Sorulan Sorular</p>
          </article>

          <article>
            <strong>Gizlilik</strong>
            <p>Kullanım Şartları</p>
            <p>Gizlilik Politikası</p>
            <p>Çerez Politikası</p>
            <p>Kişisel Verilerin </p>
          </article>
        </div>
      </div>
      <div className="bottom">
        <p>Copyright@2024 Tüm hakları saklıdır. BiletNoktası.com</p>
      </div>
    </footer>
  );
};

export default Footer;

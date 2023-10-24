import React from "react";
import "./FooterContactStyles.css";

const FooterContact = () => {
  return (
    <div className="footer-contact-area">
      <div className="footer-container">
        <div className="footer-contact-items">
          <ul>
            <li>
              <i class="fa-solid fa-location-arrow"></i>
            </li>
            <li>
              <h4>Alamat</h4>
              <p>
                JL. Kapten Darmosugondo 16/38
                <br />
                Kel. Indro, Kec. Kebomas, Kab. Gresik, Prov. Jawa Timur
              </p>
            </li>
          </ul>
        </div>
        <div className="footer-contact-items">
          <ul>
            <li>
              <i class="fa-solid fa-square-phone-flip"></i>
            </li>
            <li>
              <h4>Hubungi Kami</h4>
              <p>
                +6292 3924 4322
                <br />
                +6266 3453 3243
              </p>
            </li>
          </ul>
        </div>
        <div className="footer-contact-items">
          <ul>
            <li>
              <i class="fa-solid fa-building"></i>
            </li>
            <li>
              <h4>Jam Kerja</h4>
              <p>
                Senin - Jum'at (08:00 AM - 05:00 AM)
                <br />
                Sabtu - Minggu : Libur
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FooterContact;

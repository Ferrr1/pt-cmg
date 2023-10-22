import "./HomeContentStyles.css";
// import { GiStairsGoal, GiTeamUpgrade, GiMountainCave } from "react-icons/gi";
// import { TbStairsUp } from "react-icons/tb";
import ImageContent from "../assets/img/Content/content-1.jpg";
import ImageContent1 from "../assets/img/Content/content-2.jpg";
import React from "react";
// import React, { useState } from "react";

const HomeContent = () => {
  return (
    <div className="content">
      <div className="title-content">
        <h1>Mengapa Memilih Kami</h1>
        <p>
          Alasan mengapa perusahaan anda harus memilih kami dalam pembangunan
        </p>
        <div className="content-left">
          <img src={ImageContent} alt="Content" />
          <div className="content-right">
            <img src={ImageContent1} alt="Content" />
            <div className="bg-content">
              <div className="content-item">
                <ul>
                  <li>
                    <div className="content-icon">
                      <div className="icon">
                        <i class="fa-solid fa-stairs"></i>
                      </div>
                    </div>
                    <div className="content-text">
                      <h3>Kami Berpengalaman Lebih Dari 10 Tahun</h3>
                      <p>
                        Kami telah banyak mengerjakan konstruksi untuk gedung,
                        jembatan, bandara dan jalan, Tidak ada alasan lagi anda
                        tidak memilih kami sebagai jasa konstruksi Anda.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="content-icon">
                      <div className="icon">
                        <i class="fa-solid fa-people-group"></i>
                      </div>
                    </div>
                    <div className="content-text">
                      <h3>Mempunyai Tim Yang Solid & Berpengalaman</h3>
                      <p>
                        Kami menempatkan Tim terbaik pada semua proyek yang
                        dikerjakan, kami tahu betul untuk mewujudkan sebuah
                        mimpi yang besar memerlukan orang-orang yang terbaik di
                        bidangnya.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="content-icon">
                      <div className="icon">
                        <i class="fa-solid fa-arrow-up-right-dots"></i>
                      </div>
                    </div>
                    <div className="content-text">
                      <h3>Berinovasi</h3>
                      <p>
                        Setiap pekerjaan konstruksi yang dilakukan, kami selalu
                        melakukan inovasi terbaru dan mengedepankan Seni dalam
                        arsitektur kami, tentunya menggunakan peralatan yang
                        berteknologi dan terbarukan.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="content-icon">
                      <div className="icon">
                        <i class="fa-solid fa-mountain-sun"></i>
                      </div>
                    </div>
                    <div className="content-text">
                      <h3>Tantangan Bukanlah Halangan</h3>
                      <p>
                        Ketika anda mempercayakan pekerjaan konstruksi kepada
                        kami, kami paham betul akan kesulitan-kesulitan yang
                        dihadapi, tapi bagi perusahaan kami, itu bukanlah suatu
                        masalah besar yang di hadapi, karena kami berbekal
                        pengalaman, tim dan peralatan yang terbaik untuk
                        mendukung semua pekerjaan kami.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeContent;

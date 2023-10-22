import "./HomeContentStyles.css";
import ImageContent from "../assets/img/Content/content-1.jpg";
import ImageContent1 from "../assets/img/Content/content-2.jpg";
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
            <div className="bg-content"></div>
            <div className="content-item">
              <ul>
                {/* <li>
                  <div className="content-icon"></div>
                  <div className="content-text">
                    <h3>Test</h3>
                    <p>Test Juga bang</p>
                  </div>
                </li>
                <li>
                  <div className="content-icon"></div>
                  <div className="content-text">
                    <h3>Test</h3>
                    <p>Test Juga bang</p>
                  </div>
                </li>
                <li>
                  <div className="content-icon"></div>
                  <div className="content-text">
                    <h3>Test</h3>
                    <p>Test Juga bang</p>
                  </div>
                </li>
                <li>
                  <div className="content-icon"></div>
                  <div className="content-text">
                    <h3>Test</h3>
                    <p>Test Juga bang</p>
                  </div>
                </li> */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeContent;

import "./BussinessStyles.css";
import React from "react";
import { cardItems } from "../Data/BussinessData";

const Bussiness = () => {
  return (
    <div className="bussiness">
      <div className="title-bussiness">
        <h1>Bisnis Kami</h1>
        <p>Berikut adalah bidang yang kami kerjakan</p>
        <div className="card-bussiness-container">
          {cardItems.map((item, index) => {
            return (
              <div className="card-bussiness" key={index}>
                <div className="image-bussiness">
                  <img src={item.src} alt={item.alt} />
                </div>
                <div className="card-title">
                  <h3>{item.title}</h3>
                </div>
                <div className="card-body">
                  <p>{item.body}</p>
                </div>
                <div className="card-btn">
                  <button>
                    <a href={item.href}>{item.btn}</a>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Bussiness;

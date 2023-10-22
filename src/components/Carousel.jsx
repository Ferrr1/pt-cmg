import "./CarouselStyles.css";
import React, { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

const Carousel = ({ data, Buttondata }) => {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === data.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? data.length - 1 : slide - 1);
  };

  return (
    <div className="carousel">
      <BsArrowLeftCircleFill onClick={prevSlide} className="arrow arrow-left" />
      {data.map((item, idx) => (
        <div
          key={idx}
          className={`carousel ${idx === slide ? "active" : "overlay"}`}
        >
          <div className={slide === idx ? "slide" : "slide slide-hidden"}>
            <img
              className={`images ${idx === slide ? "active" : "image"}`}
              src={item.src}
              alt={item.alt}
            />
            <div className="title-overlay">
              <h1>{item.title}</h1>
              <p>{item.info}</p>
              {Buttondata[slide] && (
                <div className="buttons">
                  {Buttondata.map((button, buttonIdx) => (
                    <a
                      key={buttonIdx}
                      href={button.url}
                      rel="noopener noreferrer"
                    >
                      <button>{button.label}</button>
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
      <BsArrowRightCircleFill
        onClick={nextSlide}
        className="arrow arrow-right"
      />
      <span className="indicators">
        {data.map((_, idx) => (
          <button
            key={idx}
            className={
              slide === idx ? "indicator" : "indicator indicator-inactive"
            }
            onClick={() => setSlide(idx)}
          />
        ))}
      </span>
    </div>
  );
};

export default Carousel;

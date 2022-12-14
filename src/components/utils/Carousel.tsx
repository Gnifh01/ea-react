import React, { useEffect } from "react";
import { useState } from "react";

const slideStyles: any = {
  width: "100%",
  height: "100%",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

/* const rightArrowStyles: any = {
  position: "absolute",
  top: "50%",
  transform: "translate(0, -50%)",
  right: "32px",
  fontSize: "45px",
  color: "#fff",
  zIndex: 1,
  cursor: "pointer",
};

const leftArrowStyles: any = {
  position: "absolute",
  top: "50%",
  transform: "translate(0, -50%)",
  left: "32px",
  fontSize: "45px",
  color: "#fff",
  zIndex: 1,
  cursor: "pointer",
}; */

const sliderStyles: any = {
  position: "relative",
  height: "100%",
};

const dotsContainerStyles: any = {
  display: "flex",
  justifyContent: "center",
};

const dotStyle: any = {
  margin: "0 3px",
  cursor: "pointer",
  fontSize: "20px",
};

const ImageSlider = ({ slides }: any) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (slideIndex: any) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    setInterval(() => {
      const isLastSlide = currentIndex === slides.length - 1;
      const newIndex = isLastSlide ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
    }, 10000);
  }, [currentIndex, slides.length]);

  const slideStylesWidthBackground = {
    ...slideStyles,
    backgroundImage: `url(${slides[currentIndex].url})`,
  };

  return (
    <div style={sliderStyles}>
      <div>
      </div>
      <div style={slideStylesWidthBackground}></div>
      <div style={dotsContainerStyles}>
        {slides.map((slide: any, slideIndex: any) => (
          <div
            style={dotStyle}
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;

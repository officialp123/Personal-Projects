import React, { useState, useEffect, useCallback } from "react";
import "./App.css";
import data from "./data.json";

const App = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderItems, setSliderItems] = useState([]);

  useEffect(() => {
    // Fetch the data from the JSON file
    setSliderItems(data);
  }, []);

  useEffect(() => {
    // Automatic slide change every 3 seconds
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % sliderItems.length);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [sliderItems.length]);

  const handleVisibilityToggle = useCallback((id) => {
    setSliderItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, isVisible: !item.isVisible } : item
      )
    );
  }, []);

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? sliderItems.length - 1 : prevSlide - 1
    );
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % sliderItems.length);
  };

  return (
    <div className="app-container">
      <div className="app">
        <div className="slider">
          {sliderItems.map((item, index) => (
            <div
              key={item.id}
              className={`slider-item ${
                index === currentSlide ? "active" : ""
              }`}
              style={{ display: item.isVisible ? "block" : "none" }}
            >
              <img src={item.image} alt={item.caption} />
              <div className="caption-overlay">{item.caption}</div>
              <button
                className="visibility-toggle"
                onClick={() => handleVisibilityToggle(item.id)}
              >
                {item.isVisible ? (
                  <i className="fas fa-eye-slash"></i>
                ) : (
                  <i className="fas fa-eye"></i>
                )}
              </button>
            </div>
          ))}
          <div className="navigation-arrows">
            <button className="arrow" onClick={handlePrevSlide}>
              <i className="fas fa-chevron-left"></i>
            </button>
            <button className="arrow" onClick={handleNextSlide}>
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>
      <h1>Image Slider</h1>
    </div>
  );
};

export default App;

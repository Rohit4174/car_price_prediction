import React, { useState, useEffect } from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import background from "./background.jpg";
import about from "./about.jpg";
import why from "./why.jpg";
import flow from "./flow.jpg";
import factor from "./factor.jpg";
import increase from "./increase.jpg";
import image from "./image.png";

function Home() {
  const navigate = useNavigate();
  const API_URL = "https://car-price-prediction-aiy5.onrender.com/data";

  const [formData, setFormData] = useState({
    brand: "",
    model: "",
    age: "",
    kmDriven: "",
    selectedSeller: "",
    selectedFuel: "",
    selectedTransmission: "",
    selectedCondition: "",
    selectedColor: ""
  });

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const Calculateclick = () => {
    navigate("/Calculate");
  };

  const handleImageClick = () => {
    window.open("https://www.carlogos.org/car-brands/", "_blank");
  };

  // ✅ Correctly wrapped in async function
  const handlePredict = async () => {
    try {
      const res = await axios.post(API_URL, formData, {
        headers: { "Content-Type": "application/json" }
      });

      console.log("API Response:", res.data);
      alert("Predicted Price: ₹" + res.data.predicted_price);
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong!");
    }
  };

  return (
    <div className="home-page">
      {/* Hero Section */}
      <div className="hero-section">
        <img src={background} alt="Car Background" className="hero-image" />
        <div id="home-container" data-aos="zoom-in">
          <h1>
            <span>Welcome</span> to the Vehicle Value App
          </h1>
          <p>Explore the value of your vehicle with us!</p>
          <button id="cal" onClick={Calculateclick}>
            Calculate
          </button>
        </div>
      </div>

      {/* About Section */}
      <section>
        <h2 className="section-title">About VechValuator</h2>
        <div className="about" data-aos="fade-down">
          <div className="about-content">
            <p>
              VechValuator is an AI-powered platform delivering ultra-accurate,
              real-time resale values for your car—trade-in, private sale, or
              online listings. It analyzes thousands of datapoints, including
              market trends, depreciation, and regional demand, to pinpoint
              where you’ll get the best price.
            </p>
          </div>
          <div className="about-image">
            <img src={about} alt="About VechValuator" data-aos="fade-left" />
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section>
        <h2 className="section-title">Why Choose VechValuator?</h2>
        <div className="about" data-aos="fade-down">
          <div className="about-content">
            <ul>
              <li>AI-Powered Accuracy – Trained on real-world car sales data</li>
              <li>Instant Price Estimate – Get your car's estimated price in seconds</li>
              <li>Wide Brand Coverage – Supports both Indian and international brands</li>
              <li>User-Friendly Interface – Simple design for all users</li>
              <li>Free to Use – No hidden charges</li>
            </ul>
          </div>
          <div className="about-image">
            <img src={why} alt="Why Choose VechValuator" data-aos="fade-left" />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section>
        <h2 className="section-title">How It Works</h2>
        <div className="about" data-aos="fade-down">
          <div className="about-content">
            <ol>
              <li>Enter Your Car Details – Select brand, model, year, mileage, etc.</li>
              <li>Our Model Analyzes Data – Compares with historical sales records</li>
              <li>Get an Instant Price Estimate – View the predicted price range</li>
            </ol>
          </div>
          <div className="about-image">
            <img src={flow} alt="How It Works" data-aos="fade-left" />
          </div>
        </div>
      </section>

      {/* Factors Affecting Resale Value */}
      <section>
        <h2 className="section-title">Factors Affecting Car Resale Value</h2>
        <div className="about" data-aos="fade-down">
          <div className="about-content">
            <ul>
              <li>Brand & Model Popularity</li>
              <li>Age of the Car</li>
              <li>Mileage Driven</li>
              <li>Fuel Type</li>
              <li>Condition & Maintenance</li>
              <li>Ownership History</li>
            </ul>
          </div>
          <div className="about-image">
            <img src={factor} alt="Car Resale Factors" data-aos="fade-left" />
          </div>
        </div>
      </section>

      {/* Tips to Increase Value */}
      <section>
        <h2 className="section-title">Tips to Increase Your Car’s Resale Value</h2>
        <div className="about" data-aos="fade-down">
          <div className="about-content">
            <ul>
              <li>Keep service history records up-to-date</li>
              <li>Maintain cleanliness and proper upkeep</li>
              <li>Fix dents, scratches, and small mechanical issues</li>
              <li>Sell at the right market time</li>
            </ul>
          </div>
          <div className="about-image">
            <img src={increase} alt="Tips to Increase Car Value" data-aos="fade-left" />
          </div>
        </div>
      </section>

      <div className="image">
        <img
          src={image}
          alt="brand"
          style={{ width: "100%", height: "auto" }}
          onClick={handleImageClick}
          data-aos="fade-left"
        />
      </div>

      {/* Example button to trigger prediction
      <div style={{ textAlign: "center", margin: "30px" }}>
        <button onClick={handlePredict} className="predict-btn">
          Predict Price
        </button>
      </div> */}

      <p className="disclaimer">
        Disclaimer: VechValuator provides an estimated market price based on available data and statistical models.
        Actual selling price may vary depending on local market conditions, demand, and buyer preferences.
      </p>
    </div>
  );
}

export default Home;

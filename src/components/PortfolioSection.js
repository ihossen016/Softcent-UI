import React from "react";
import "./PortfolioSection.css";

const PortfolioSection = () => {
  return (
    <section className="portfolio">
      <div className="sectionTitle">
        <div className="name">
          <h2>Our Portfolio</h2>
          <img
            src="../../images/underline 3.png"
            className="underline"
            alt=""
          />
        </div>
        <div className="icons">
          <div className="left">
            <i class="fas fa-long-arrow-alt-left"></i>
          </div>
          <div className="right">
            <i class="fas fa-long-arrow-alt-right"></i>
          </div>
        </div>
      </div>

      <div className="images">
        <div className="img1">
          <img src="../../images/Colory-Cover-1.png" alt="" />
          <p>Color System Design</p>
        </div>
        <div className="img2">
          <img src="../../images/Colory-Cover2.png" alt="" />
          <p>Logo Design</p>
        </div>
        <div className="img3">
          <img src="../../images/Mockup-1.png" alt="" />
          <p>UI/UX Design</p>
        </div>
      </div>

      <div className="btn">
        <button>See All Protfolio</button>
      </div>
    </section>
  );
};

export default PortfolioSection;

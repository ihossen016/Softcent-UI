import React from "react";
import "./TechSection.css";

const TechSection = () => {
  return (
    <section className="techList">
      <div className="sectionTitle">
        <h2>Our Dev Technology</h2>
        <img className="underline" src="../../images/underline 3.png" alt="" />
      </div>

      <div className="nameList">
        <div className="name">
          <p>Programming Languages</p>
          <span className="under">
            <span className="upper"></span>
          </span>
        </div>
        <div className="name">
          <p>Frameworks</p>
          <span className="under"></span>
        </div>
        <div className="name">
          <p>Databases</p>
          <span className="under"></span>
        </div>
        <div className="name">
          <p>Mobile Platforms</p>
          <span className="under"></span>
        </div>
      </div>

      <div className="imgList">
        <img src="../../images/image 5.png" alt="" />
        <img src="../../images/image 6.png" alt="" />
        <img src="../../images/image 7.png" alt="" />
        <img src="../../images/image 8.png" alt="" />
        <img src="../../images/image 9.png" alt="" />
      </div>

      <div className="sectionTitle">
        <h2>Our Design Technology</h2>
        <img className="underline" src="../../images/underline 3.png" alt="" />
      </div>

      <div className="imgList">
        <img src="../../images/image 5 (1).png" alt="" />
        <img src="../../images/image 6 (1).png" alt="" />
        <img src="../../images/image 7 (1).png" alt="" />
        <img src="../../images/image 8 (1).png" alt="" />
        <img src="../../images/image 9 (1).png" alt="" />
      </div>
    </section>
  );
};

export default TechSection;

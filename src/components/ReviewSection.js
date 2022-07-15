import React from "react";
import "./ReviewSection.css";

const ReviewSection = () => {
  return (
    <section className="review">
      <div className="sectionTitle">
        <h2>Talk About Us!</h2>
        <img className="underline" src="../../images/underline 3.png" alt="" />
      </div>
      <div className="mainReview">
        <div className="reviewText">
          <img className="quote1" src="../../images/quote 1.png" alt="" />
          <p>
            We had a bit of a slow and bumpy start, but after changing the
            designer on their side everything went in a very good direction. The
            designers were talented and easy to work with.
          </p>
          <img className="quote2" src="../../images/quote 2.png" alt="" />
          <div className="writer">
            <div className="img">
              <img src="../../images/Ellipse 5.png" alt="" />
            </div>
            <div className="info">
              <h3>Shuvo Roy</h3>
              <h4>Softcent Co-Founder</h4>
            </div>
          </div>
        </div>
        <div className="reviewImg">
          <img src="../../images/Ellipse 6.png" width="60%" alt="" />
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;

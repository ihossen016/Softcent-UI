import React from "react";
import "./CustomerSection.css";

const CustomerSection = () => {
  return (
    <section className="customer">
      <h2>Our Customers</h2>
      <img
        className="underline"
        src="../../public/images/underline 3.png"
        alt=""
      />
      <div className="customer-logos">
        <img src="../../images/image_1-removebg-preview.png" alt="" />
        <img src="../../images/image_2-removebg-preview.png" alt="" />
        <img src="../../images/image_3-removebg-preview.png" alt="" />
        <img src="../../images/image_4-removebg-preview.png" alt="" />
      </div>
    </section>
  );
};

export default CustomerSection;

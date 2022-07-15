import React from "react";
import "./ProductSection.css";

const ProductSection = () => {
  return (
    <section className="product">
      <div className="sectionTitle">
        <h2>Our Products</h2>
        <img className="underline" src="../../images/underline 3.png" alt="" />
      </div>
      <div className="sub">
        <p>
          We believe that great design should not be out of reach, so our
          services are less than half the price of a full-time designer.
        </p>
        <button>See More</button>
      </div>
      <div className="prod1">
        <div className="prod-detail">
          <div className="grid-center">
            <h3>SwipeXYZ Product</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <button>View Product</button>
          </div>
        </div>
        <div className="prod-image">
          <img
            src="../../images/product1.png"
            width="100%"
            height="100%"
            alt=""
          />
        </div>
      </div>
      <div className="prod2">
        <div className="prod-image">
          <img
            src="../../images/product2.png"
            width="100%"
            height="100%"
            alt=""
          />
        </div>
        <div className="prod-detail">
          <div className="grid-center">
            <h3>Cashback Product</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <button>View Product</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;

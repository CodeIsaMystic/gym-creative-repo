import React from "react";
// import photos from "../../data";
import "./style.scss";
import img1 from "../../assets/img/img1.jpg";
import img2 from "../../assets/img/img2.jpg";

export default function Featured() {
  //   const [firstImage, secondImage] = photos;
  //   const img2 = "../../assets/img/img2.jpg";
  //   const img1 = "../../assets/img/img1.jpg";

  return (
    <section className="featured-section" data-scroll-section>
      <div className="featured-row-layout">
        <h6>Force</h6>
        <img src={img1} data-scroll />
      </div>
      <div className="featured-column-layout">
        <h6>Forme</h6>
        <img src={img2} data-scroll />
      </div>
    </section>
  );
}

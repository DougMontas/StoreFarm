import React from "react";
import recipe1 from "../Assets/juneplumrec.jpg";
import recipe2 from "../Assets/juneplumrec2.jpeg";
import recipe3 from "../Assets/juneplumrec3.png";
import recipe4 from "../Assets/juneplumrec4.jpg";
import recipe5 from "../Assets/juneplumrec5.jpeg";
import recipe6 from "../Assets/juneplumrec6.png";

export const Carousel = () => {
  return (
    <>
      <div
        style={{
          width: "60%",
          height: "12rem",
          marginLeft: "auto",
          marginRight: "auto",
        }}
        id="carouselExampleAutoplaying"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={recipe1}
              className="d-block w-100"
              alt="juneplums recipe"
            />
          </div>
          <div className="carousel-item">
            <img
              src={recipe2}
              className="d-block w-100"
              alt="juneplums recipe"
            />
          </div>
          <div className="carousel-item">
            <img
              src={recipe3}
              className="d-block w-100"
              alt="juneplums recipe"
            />
          </div>
          <div className="carousel-item">
            <img
              src={recipe4}
              className="d-block w-100"
              alt="juneplums recipe"
            />
          </div>
          <div className="carousel-item">
            <img
              src={recipe5}
              className="d-block w-100"
              alt="juneplums recipe"
            />
          </div>
          <div className="carousel-item">
            <img
              src={recipe6}
              className="d-block w-100"
              alt="juneplums recipe"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div style={{marginTop: '4rem'}}>
        <h5 style={{ color: "white" }}>
          Links for info: <br />
          <a
            href="https://thatgirlcookshealthy.com/june-plum-juice/"
            target="_blank"
            rel="noreferrer"
          >
            thatgirlcookshealthy.com/june-plum-juice/
          </a>{" "}
          <br />
          <a
            href="https://www.islandsmile.org/sweet-and-spicy-ambarella-curry/"
            target="_blank"
            rel="noreferrer"
          >
            islandsmile.org/sweet-and-spicy-ambarella-curry/
          </a>{" "}
          <br />
          <a
            href="https://jamaicanfoodsandrecipes.com/jamaican-june-plum-juice/"
            target="_blank"
            rel="noreferrer"
          >
            jamaicanfoodsandrecipes.com/jamaican-june-plum-juice/
          </a>
          <br />
        </h5>
      </div>
    </>
  );
};

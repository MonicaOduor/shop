import React from "react";
import bgimage from "../Assets/img/bgimage.jpg";

export default function CardImage() {
  return (
    <>
      <div
        className="card container-fluid mb-2"
        style={{ background: "inherit", border: "none" }}
      >
        <img
          className="card-img img-fluid image-overlay"
          src={bgimage}
          style={{ height: "20rem" }}
          alt="home background-img"
        />
        <div className="card-img-overlay m-3">
          <br />
          <br />
          <h4>
            <strong className="card-text text-center text-white">
              Groceries with the same quality, freshness
              <br /> and choice you'd find in the store. Promise
            </strong>
          </h4>

          <button className="btn btn-success">Shop Now </button>
        </div>
      </div>
      <div className=" m-2">
        <strong className="text-success">POPULAR CATEGORIES</strong>
        <div className="row">
          <div className="col-lg-2 col-md-3 col-sm-4">
            <img
              src="https://img.icons8.com/color/48/000000/grains-of-rice.png"
              alt="rice"
            />
            <small>Cereals</small>
          </div>

          <div className="col-lg-2 col-md-3 col-sm-4 ">
            <img
              src="https://img.icons8.com/cotton/48/000000/beetroot-and-carrot-1.png"
              alt="root vegetable"
            />
            <small>Root veggies</small>
          </div>

          <div className="col-lg-2 col-md-3 col-sm-4 ">
            <img
              src="https://img.icons8.com/emoji/48/000000/leafy-green.png"
              alt="veggies"
            />
            <small>Veggies</small>
          </div>

          <div className="col-lg-2 col-md-3 col-sm-4 ">
            <img
              src="https://img.icons8.com/color/48/000000/group-of-fruits.png"
              alt="fruits"
            />
            <small>Fruits</small>
          </div>
          <div className="col-lg-2 col-md-3 col-sm-4">
            <img
              src="https://img.icons8.com/cotton/48/000000/potato--v1.png"
              alt="potato"
            />
            <small>Potatoes</small>
          </div>

          <div className="col-lg-2 col-md-3 col-sm-4 ">
            <img
              src="https://img.icons8.com/emoji/48/000000/tomato-emoji.png"
              alt="tomato"
            />
            <small>Tomatoes</small>
          </div>
        </div>
      </div>
      <br />
    </>
  );
}

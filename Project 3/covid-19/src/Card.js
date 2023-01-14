import React from "react";
import "./Card.css";

function Card({ img, color, info }) {
  return (
    <div className="col">
      <div
        class="card card__hover shadow ms-4"
        style={{ backgroundColor: color, width: 220, height: 290 }}
      >
        {console.log(color)}
        <img
          className="img-fluid w-25 ms-5"
          src={`${img}`}
          class="card-img-top"
        />
        <div class="card-body border-top border-dark">
          <h5 class="card-title" style={{ color: "#565656" }}>
            {info}
          </h5>
        </div>
      </div>
    </div>
  );
}

export default Card;

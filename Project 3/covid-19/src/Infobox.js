import React from "react";
import "./Infobox.css";
import "./Card.css";

//  && operator (in js
// condition && (something to be returned...)
// if condition is true it will returned if condition is false it wont be returned(React will ignore and skip it)
// )
function Infobox({
  title,
  cases,
  total,
  redBox,
  greenBox,
  blueBox,
  active,
  ...props
}) {
  return (
    <div // active && "infobox--select"
      onClick={props.onClick}
      className={`card card__hover shadow-sm mt-5 mb-3 rounded ms-5 infobox  ${
        redBox && "infobox--red"
      }
      ${blueBox && "infobox--blue"}
      ${greenBox && "infobox--green"}
      `}
    >
      <div className="card-body">
        <h5 className="card-title">{title}</h5>

        <p className="card-text">
          <h2> {cases}</h2>
          {total} Total
        </p>
      </div>
    </div>
  );
}

export default Infobox;

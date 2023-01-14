import React from "react";
import "./App.css";
import "./Symptoms.css";

function Precautions() {
  return (
    <div className="container ">
      <div className="card precautions cardGraph m-5 shadow">
        <div className="card-header ">
          <h2>Precautions</h2>
        </div>
        <div className="card-body">
          <h4>
            <ul className="m-2">
              <li>Clean your hands often.</li>
              <li>Use soap and water, or an alcohol-based hand rub.</li>
              <li>
                Maintain a safe distance from anyone who is coughing or
                sneezing.
              </li>
              <li> Wear a mask when physical distancing is not possible.</li>
              <li>Don’t touch your eyes, nose or mouth.</li>
              <li>
                Cover your nose and mouth with your bent elbow or a tissue when
                you cough or sneeze. Stay home if you feel unwell.
              </li>
              <li>
                If you have a fever, cough and difficulty breathing, seek
                medical attention.
              </li>
            </ul>
          </h4>
        </div>
      </div>
    </div>
  );
}
export default Precautions;

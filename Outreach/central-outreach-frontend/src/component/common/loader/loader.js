import React, { useState, useEffect } from "react";

const Loader = (props) => {
  const [show, setShow] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setShow(false);
    }, 2000);
  }, [show]);

  return (
    <div className={`loader-wrapper ${show ? "" : "loderhide"}`}>
      <div className="typewriter">
        <h1>VLabs IITB Outreachportal..</h1>
      </div>
    </div>
  );
};

export default Loader;

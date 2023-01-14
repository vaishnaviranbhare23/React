import React from "react";

const Loader = ({ isLoading }) => {
  if (!isLoading) return null;
  return (
    <div
      id="loader"
      className="d-flex justify-content-center align-items-center flex-column"
    >
      {/* <img
        src="https://react-pdf.org/images/logo.png"
        alt="loader"
        className="mb-5 App-logo"
      />
      <p>Loading...</p> */}
      <div className="loader-box">
        <div className="loader-10"></div>
      </div>
    </div>
  );
};

export default Loader;

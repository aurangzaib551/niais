import React from "react";
import ScaleLoader from "react-spinners/ScaleLoader";

const Loader = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <ScaleLoader color="#025802" />
    </div>
  );
};

export default Loader;

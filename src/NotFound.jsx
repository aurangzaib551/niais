import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div
      className="container d-flex justify-content-center align-items-center flex-column"
      style={{ height: "100vh" }}
    >
      <div class="mainbox d-flex justify-content-center align-items-center">
        <div class="err fw-bold">4</div>
        <i class="far fa-question-circle d-inline-block mx-3 fa-spin fw-bold"></i>
        <div class="err2 fw-bold">4</div>
      </div>
      <div class="msg">
        Maybe this page moved? Got deleted? Is hiding out in quarantine? Never
        existed in the first place?
        <p>
          Let's go <Link to="/">home</Link> and try from there.
        </p>
      </div>
    </div>
  );
};

export default NotFound;

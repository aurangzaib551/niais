import React from "react";
import Button from "@material-ui/core/Button";

const TopHeader = () => {
  return (
    <>
      <div className="top-header py-3 py-sm-2 px-3 d-flex flex-sm-row flex-column align-items-center align-items-sm-stretch justify-content-around">
        <div className="d-flex">
          <div className="d-flex align-items-center me-3">
            <i className="fas fa-envelope text-white me-2"></i>
            <a href="mailto:admin@niais.org">admin@niais.org</a>
          </div>
          <div className="d-flex align-items-center">
            <i className="fas fa-mobile-alt text-white me-2"></i>
            <a href="tel:04235888885">04235888885</a>
          </div>
        </div>
        <Button
          href="https://www.facebook.com/groups/385771178939338/"
          target="_blank"
          color="inherit"
          size="small"
          className="group-btn mt-2 mt-sm-0"
          variant="contained"
        >
          Join Official Group
        </Button>
      </div>
    </>
  );
};

export default TopHeader;

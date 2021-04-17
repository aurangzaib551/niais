import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <div className="py-3 d-flex align-items-center justify-content-between container">
        <img
          src="https://i.ibb.co/b5QVVc8/logo-png-niais.png"
          alt="NIAIS"
          width="90"
          height="90"
        />

        <nav>
          <ul className="d-flex list-unstyled mb-0 navigation">
            <li>
              <Link to="/" className="link">
                Home
              </Link>
            </li>
            <li className="link">
              Admissions <i className="fas fa-angle-down"></i>
              <ul className="list-unstyled sub-nav border text-nowrap">
                <li>
                  <Link to="/" className="sub-nav-link">
                    Programs
                  </Link>
                </li>
                <li>
                  <Link to="/" className="sub-nav-link">
                    Admission Process
                  </Link>
                </li>
                <li>
                  <Link to="/" className="sub-nav-link">
                    Fee Structure
                  </Link>
                </li>
                <li>
                  <Link to="/" className="sub-nav-link">
                    How to Pay
                  </Link>
                </li>
              </ul>
            </li>

            <li className="link">
              News <i className="fas fa-angle-down"></i>
              <ul className="list-unstyled sub-nav border text-nowrap">
                <li>
                  <Link to="/" className="sub-nav-link">
                    Events &amp; Happenings
                  </Link>
                </li>
                <li>
                  <Link to="/" className="sub-nav-link">
                    Blogs
                  </Link>
                </li>
              </ul>
            </li>
            <li className="link">
              About Us <i className="fas fa-angle-down"></i>
              <ul className="list-unstyled sub-nav border text-nowrap">
                <li>
                  <Link to="/" className="sub-nav-link">
                    Governor Punjab Message
                  </Link>
                </li>
                <li>
                  <Link to="/" className="sub-nav-link">
                    About NIAIS
                  </Link>
                </li>
                <li>
                  <Link to="/" className="sub-nav-link">
                    NIAIS Appreciation
                  </Link>
                </li>
                <li>
                  <Link to="/" className="sub-nav-link">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

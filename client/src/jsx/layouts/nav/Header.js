import React from "react";

import { Link } from "react-router-dom";
/// Scroll
import PerfectScrollbar from "react-perfect-scrollbar";

/// Image
import profile from "../../../images/profile/main-profile.jpg";

const Header = ({}) => {
  let path = window.location.pathname.split("/");
  path = path[path.length - 1];
  path = path === "";

  return (
    <div className="header">
      <div className="header-content">
        <nav className="navbar navbar-expand">
          <div className="collapse navbar-collapse justify-content-between">
            <div className="header-left">
              <strong>Orenda Test Frontend</strong>
            </div>

            <ul className="navbar-nav header-right">
              <li className="nav-item dropdown header-profile">
                <a className="nav-link">
                  <div className="header-info">
                    <span>Bima Ega Farizky</span>
                  </div>
                  <img src={profile} width={20} alt="" />
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;

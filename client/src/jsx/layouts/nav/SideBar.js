import React, { Component } from "react";

/// Link
import { Link } from "react-router-dom";

/// Scroll
import PerfectScrollbar from "react-perfect-scrollbar";

/// Menu
import MetisMenu from "metismenujs";

///
// import drump from "../../../images/card/drump.png";

class MM extends Component {
  componentDidMount() {
    this.$el = this.el;
    this.mm = new MetisMenu(this.$el);
  }
  componentWillUnmount() {
    // this.mm("dispose");
    // console.log(this.mm);
  }
  render() {
    return (
      <div className="mm-wrapper">
        <ul className="metismenu" ref={(el) => (this.el = el)}>
          {this.props.children}
        </ul>
      </div>
    );
  }
}

class SideBar extends Component {
  /// Open menu
  componentDidMount() {
    // sidebar open/close
    var btn = document.querySelector(".nav-control");
    var aaa = document.querySelector("#main-wrapper");

    function toggleFunc() {
      return aaa.classList.toggle("menu-toggle");
    }

    btn.addEventListener("click", toggleFunc);

    //sidebar icon Heart blast
    var handleheartBlast = document.querySelector(".heart");

    function heartBlast() {
      return handleheartBlast.classList.toggle("heart-blast");
    }

    handleheartBlast.addEventListener("click", heartBlast);
  }
  render() {
    /// Path
    var path = window.location.pathname;
    path = path.split("/");
    path = path[path.length - 1];

    /// Active menu
    let deshBoard = [
        "",
        "analytics",
        "campaign",
        "social-network-campaign",
        "spendings",
        "new-compaign",
      ],
      app = [
        "app-profile",
        "app-calender",
        "email-compose",
        "email-inbox",
        "email-read",
        "ecom-product-grid",
        "ecom-product-list",
        "ecom-product-list",
        "ecom-product-order",
        "ecom-checkout",
        "ecom-invoice",
        "ecom-customers",
        "post-details",
        "ecom-product-detail",
      ],
      email = ["email-compose", "email-inbox", "email-read"],
      shop = [
        "ecom-product-grid",
        "ecom-product-list",
        "ecom-product-list",
        "ecom-product-order",
        "ecom-checkout",
        "ecom-invoice",
        "ecom-customers",
        "ecom-product-detail",
      ],
      charts = [
        "chart-rechart",
        "chart-flot",
        "chart-chartjs",
        "chart-chartist",
        "chart-sparkline",
        "chart-apexchart",
      ],
      bootstrap = [
        "ui-accordion",
        "ui-badge",
        "ui-alert",
        "ui-button",
        "ui-modal",
        "ui-button-group",
        "ui-list-group",
        "ui-media-object",
        "ui-card",
        "ui-carousel",
        "ui-dropdown",
        "ui-popover",
        "ui-progressbar",
        "ui-tab",
        "ui-typography",
        "ui-pagination",
        "ui-grid",
      ],
      plugins = [
        "uc-select2",
        "uc-nestable",
        "uc-sweetalert",
        "uc-toastr",
        "uc-noui-slider",
        "map-jqvmap",
      ],
      widget = ["widget-basic"],
      forms = [
        "form-element",
        "form-wizard",
        "form-editor-summernote",
        "form-pickers",
        "form-validation-jquery",
      ],
      table = ["table-bootstrap-basic", "table-datatable-basic"],
      pages = [
        "page-register",
        "page-login",
        "page-lock-screen",
        "page-error-400",
        "page-error-403",
        "page-error-404",
        "page-error-500",
        "page-error-503",
      ],
      error = [
        "page-error-400",
        "page-error-403",
        "page-error-404",
        "page-error-500",
        "page-error-503",
      ];

    return (
      <div className="deznav">
        <PerfectScrollbar className="deznav-scroll">
          <MM className="metismenu" id="menu">
            <li className={`${deshBoard.includes(path) ? "mm-active" : ""}`}>
              <Link className="has-arrow ai-icon" to="#" aria-expanded="false">
                <i className="flaticon-381-networking"></i>
                <span className="nav-text">Dashboard</span>
              </Link>
              <ul aria-expanded="false">
                <li>
                  <Link
                    to="/"
                    className={`${
                      path === "" || path === "social-network-campaign"
                        ? "mm-active"
                        : ""
                    }`}
                  >
                    Dashboard
                  </Link>
                </li>
              </ul>
            </li>

            <li className={`${pages.includes(path) ? "mm-active" : ""}`}>
              <Link className="has-arrow ai-icon" to="#" aria-expanded="false">
                <i className="ti-shopping-cart"></i>
                <span className="nav-text">Order</span>
              </Link>
              <ul aria-expanded="false">
                <li>
                  <Link to="/order">Order</Link>
                </li>
              </ul>
            </li>

            <li className={`${table.includes(path) ? "mm-active" : ""}`}>
              <Link className="has-arrow ai-icon" to="#" aria-expanded="false">
                <i className="flaticon-381-network"></i>
                <span className="nav-text">Master</span>
              </Link>
              <ul aria-expanded="false">
                <li>
                  <Link
                    className={`${path === "customer" ? "mm-active" : ""}`}
                    to="/customer"
                  >
                    Customer
                  </Link>
                </li>
                <li>
                  <Link
                    className={`${path === "product" ? "mm-active" : ""}`}
                    to="/product"
                  >
                    Product
                  </Link>
                </li>
              </ul>
            </li>
          </MM>
          <div className="copyright">
            <p className="fs-14 font-w200">
              <strong className="font-w400">PT. Orenda Digital</strong> Develop
              © 2023 All Rights Reserved
            </p>
            <p>
              Made with <span class="heart"></span> by Bima Ega Farizky
            </p>
          </div>
        </PerfectScrollbar>
      </div>
    );
  }
}

export default SideBar;

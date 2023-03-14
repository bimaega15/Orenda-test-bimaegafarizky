import React from "react";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";

import ChartDoughnut2 from "../charts/Chartjs/donught2";
import { convertMonth, currentTime, currentDate } from "../../../utils";
import { useState, useEffect, useCallback } from "react";
import { getCustomer, getProduct, getOrder } from "../../../actions";
function SocialNetworkCampaign() {
  const [currentTimeState, setCurrentTimeState] = useState("");
  const [currentDateState, setCurrentDateState] = useState("");
  const [countCustomer, setCountCustomer] = useState(0);
  const [countProduct, setCountProduct] = useState(0);
  const [countOrder, setCountOrder] = useState(0);

  const getCustomerCount = useCallback(async () => {
    const data = await getCustomer();
    setCountCustomer(data.result.length);
  }, [getCustomer]);
  const getProductCount = useCallback(async () => {
    const data = await getProduct();
    setCountProduct(data.result.length);
  }, [getProduct]);
  const getOrderCount = useCallback(async () => {
    const data = await getOrder();
    setCountOrder(data.result.length);
  }, [getOrder]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTimeState(currentTime());
      setCurrentDateState(`${currentDate().day}, ${currentDate().date}`);
    }, 1000);

    getCustomerCount();
    getProductCount();
    getOrderCount();

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <div className="form-head d-flex mb-0 mb-lg-4 align-items-start">
        <div className="mr-auto d-none d-lg-block">
          <h2 className="text-black font-w600">Dashboard</h2>
          <div>
            <span>My Dashboard</span>
          </div>
        </div>
        <div className="d-none d-lg-flex align-items-center">
          <div className="text-right">
            <h3 className="fs-20 text-black mb-0">{currentTimeState}</h3>
            <span className="fs-14">{currentDateState}</span>
          </div>
          <Link
            className="ml-4 text-black p-3 rounded border text-center width60"
            to="/"
          >
            <i className="las la-cog scale5" />
          </Link>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4">
          <div className="mb-3 bgl-success p-0 p-lg-2 pr-lg-3 rounded">
            <div className="d-flex align-items-center">
              <i className="fa fa-user social-icon bg-success text-white" />
              <div className="d-none d-lg-block ml-3">
                <h5 className="text-black fs-18 mb-0">Customer</h5>
                <span className="fs-13">{countCustomer}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="mb-3 bgl-info p-0 p-lg-2 pr-lg-3 rounded">
            <div className="d-flex align-items-center">
              <i className="fa fa-inbox social-icon bg-info text-white" />
              <div className="d-none d-lg-block ml-3">
                <h5 className="text-black fs-18 mb-0">Product</h5>
                <span className="fs-13">{countProduct}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="mb-3 bgl-primary p-0 p-lg-2 pr-lg-3 rounded">
            <div className="d-flex align-items-center">
              <i className="fa fa-shopping-cart social-icon bg-primary text-white" />
              <div className="d-none d-lg-block ml-3">
                <h5 className="text-black fs-18 mb-0">Order</h5>
                <span className="fs-13">{countOrder}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SocialNetworkCampaign;

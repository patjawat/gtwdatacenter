import React from "react";
import HorizontalBarExample from "./horizontalBar";
import Dailyonline from "./dailyonline"
export default function cardorderlist() {
  return (
    <div>
      <div className="row match-height">
        <div className="col-xl-8 col-12" id="ecommerceChartView">
          <div className="card-header card-header-transparent py-20">
            <div className="btn-group dropdown">
              <a
                href="#"
                className="text-body dropdown-toggle blue-grey-700"
                data-toggle="dropdown"
                aria-expanded="false"
              >
                PRODUCTS SALES
              </a>
              <div
                className="dropdown-menu animate"
                role="menu"
                x-placement="bottom-start"
                style={{
                  position: "absolute",
                  willChange: "transform",
                  top: 0,
                  left: 0,
                  transform: "translate3d(0px, 20px, 0px)",
                }}
              >
                <a className="dropdown-item" href="#" role="menuitem">
                  Sales
                </a>
                <a className="dropdown-item" href="#" role="menuitem">
                  Total sales
                </a>
                <a className="dropdown-item" href="#" role="menuitem">
                  profit
                </a>
              </div>
            </div>
            <ul
              className="nav nav-pills nav-pills-rounded chart-action float-right btn-group"
              role="group"
            >
              <li className="nav-item">
                <a
                  className="nav-link active"
                  data-toggle="tab"
                  href="#scoreLineToDay"
                >
                  Day
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  data-toggle="tab"
                  href="#scoreLineToWeek"
                >
                  Week
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  data-toggle="tab"
                  href="#scoreLineToMonth"
                >
                  Month
                </a>
              </li>
            </ul>
          </div>

          <div className="widget-content tab-content bg-white p-20" style={{height:'350px'}}>
            {/* <HorizontalBarExample /> */}
          </div>
        </div>

        <div className="col-xl-4 col-lg-12">
         <Dailyonline />
        </div>
      </div>
    </div>
  );
}

import React, { useState, useEffect } from "react";
import Theme from "@/components/themes";
import Axios from "../../axios.config";
import NumberFormat from "react-number-format";

export default function Index() {
  const [assets, setAssets] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    let { data } = await Axios.get("datacenter/assets");
    setAssets(data.items);
  };

  return (
    <div>
      {/* {JSON.stringify(assets)} */}
      <div className="row">
        <div id="recent-transactions" className="col-12">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">Recent Transactions</h4>
              <a className="heading-elements-toggle">
                <i className="la la-ellipsis-v font-medium-3" />
              </a>
              <div className="heading-elements">
                <ul className="list-inline mb-0">
                  <li>
                    <a
                      className="btn btn-sm btn-danger box-shadow-2 round btn-min-width pull-right"
                      href="invoice-summary.html"
                      target="_blank"
                    >
                      Export
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="card-content">
              <div className="table-responsive">
                <table
                  id="recent-orders"
                  className="table table-hover table-xl mb-0"
                >
                  <thead>
                    <tr>
                      <th className="border-top-0">หน่วยบริการ</th>
                      <th className="border-top-0">เลขครุภัณฑ์</th>
                      <th className="border-top-0">ประเภท</th>
                      <th className="border-top-0">วิธีได้มา</th>
                      <th className="border-top-0">งบที่ใช้</th>
                      <th className="border-top-0">Shipping</th>
                      <th className="border-top-0">Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    {assets.map((item, i) => {
                      return (
                        <tr>
                          <td className="text-truncate">
                            <p className="mb-0">{item.HOS_NAME}</p>
                            <p>({item.HOSPCODE})</p>
                          </td>
                          <td className="text-truncate">
                            <a href="#">{item.ARTICLE_NUM}</a>
                          </td>
                          <td className="text-truncate">
                            {/* <span className="avatar avatar-xs">
                    <img className="box-shadow-2" src="../../../app-assets/images/portrait/small/avatar-s-4.png" alt="avatar" />
                  </span> */}
                            <span>{item.SUP_TYPE_NAME}</span>
                          </td>
                          <td className="text-truncate p-1">
                            {/* <ul className="list-unstyled users-list m-0">
                              <li
                                data-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-original-title="Kimberly Simmons"
                                className="avatar avatar-sm pull-up"
                              >
                                <img
                                  className="media-object rounded-circle no-border-top-radius no-border-bottom-radius"
                                  src="../../../app-assets/images/portfolio/portfolio-1.jpg"
                                  alt="Avatar"
                                />
                              </li>
                              <li
                                data-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-original-title="Willie Torres"
                                className="avatar avatar-sm pull-up"
                              >
                                <img
                                  className="media-object rounded-circle no-border-top-radius no-border-bottom-radius"
                                  src="../../../app-assets/images/portfolio/portfolio-2.jpg"
                                  alt="Avatar"
                                />
                              </li>
                              <li
                                data-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-original-title="Rebecca Jones"
                                className="avatar avatar-sm pull-up"
                              >
                                <img
                                  className="media-object rounded-circle no-border-top-radius no-border-bottom-radius"
                                  src="../../../app-assets/images/portfolio/portfolio-4.jpg"
                                  alt="Avatar"
                                />
                              </li>
                              <li className="avatar avatar-sm">
                                <span className="badge badge-info">
                                  +1 more
                                </span>
                              </li>
                            </ul> */}
                            {item.METHOD_NAME}
                          </td>
                          <td>
                          {item.BUDGET_NAME}

                            {/* <button
                              type="button"
                              className="btn btn-sm btn-outline-danger round"
                            >
                              Food
                            </button> */}
                          </td>
                          <td>
                            <div className="progress progress-sm mt-1 mb-0 box-shadow-2">
                              <div
                                className="progress-bar bg-gradient-x-danger"
                                role="progressbar"
                                style={{ width: "25%" }}
                                aria-valuenow={25}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              />
                            </div>
                          </td>
                          <td className="text-truncate">
                            {/* {item.PRICE_PER_UNIT} */}
                            <NumberFormat
                              value={item.PRICE_PER_UNIT}
                              displayType={"text"}
                              thousandSeparator={true}
                              prefix={""}
                            />
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
Index.Layout = Theme;

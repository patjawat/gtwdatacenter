import React, { useState, useEffect } from "react";

import Link from "next/link";
import NumberFormat from "react-number-format";

import Axios from "../../axios.config";

export default function Index() {
  const [summary, setSummary] = useState(0);
  const [branch, setBranch] = useState(0);

  useEffect(async () => {
    await getData();
  }, []);

  const getData = async () => {
    const {data} = await Axios.get("datacenter");
    setSummary(data.summary);
    setBranch(data.branchs);
  };

  return (
    <div className="row">

      <div className="col-xl-4 col-lg-6 col-12">
        <Link href="/assets">
          <div className="card pull-up">
            <div className="card-content">
              <div className="card-body">
                <div className="media d-flex">
                  <div className="align-self-center">
                    <i className="icon-bar-chart  font-large-2 float-left info" />
                  </div>
                  <div className="media-body  text-right">
                    <h3 className="info">
                      <NumberFormat
                        value={summary ? summary[0].asset : 0}
                        displayType={"text"}
                        thousandSeparator={true}
                        prefix={""}
                      />
                    </h3>

                    <span>
                      <button type="button" className="btn btn-sm btn-outline-danger round">ครุภัณฑ์(รายการ)</button>
                      </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>

      <div className="col-xl-4 col-lg-6 col-12">
        <Link href="/branchs">
          <div className="card pull-up">
            <div className="card-content">
              <div className="card-body">
                <div className="media d-flex">
                  <div className="align-self-center">
                    <i className="icon-bar-chart  font-large-2 float-left primary" />
                  </div>
                  <div className="media-body  text-right">
                    <h3 className="primary">
                      <NumberFormat
                        value={summary ? summary[0].assetbuildings : 0}
                        displayType={"text"}
                        thousandSeparator={true}
                        prefix={""}
                      />
                    </h3>
                    <button type="button" className="btn btn-sm btn-outline-danger round">สิ่งก่อสร้าง</button>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>

      <div className="col-xl-4 col-lg-6 col-12">
        <div className="card pull-up">
          <div className="card-content">
            <div className="card-body">
              <div className="media d-flex">
                <div className="align-self-center">
                <i className="icon-bar-chart  font-large-2 float-left danger" />
                </div>
                <div className="media-body  text-right">
                  <h3 className="danger">{branch}</h3>
                  <button type="button" className="btn btn-sm btn-outline-danger round">ทั้งหมด</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

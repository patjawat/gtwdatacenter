import React, { useState, useEffect } from "react";

import Link from "next/link";
import NumberFormat from "react-number-format";

import Axios from "../axios.config";

export default function TotalSummary() {
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
      <div className="col-xl-3 col-lg-6 col-12">
          <div className="card pull-up bg-gradient-directional-info">
            <div className="card-content">
              <div className="card-body">
        <Link href="/persons">
                <div className="media d-flex">
                  <div className="align-self-center">
                    <i className="icon-user text-white font-large-2 float-left" />
                  </div>
                  <div className="media-body text-white text-right">
                    <h3 className="text-white">
                      <NumberFormat
                        value={summary ? summary[0].person : 0}
                        displayType={"text"}
                        thousandSeparator={true}
                        prefix={""}
                      />
                    </h3>
                    <span>
                      บุคคลากร
                    </span>
                  </div>
                </div>
        </Link>
              </div>
            </div>
          </div>
      </div>

      <div className="col-xl-3 col-lg-6 col-12">
        <Link href="/assets">
          <div className="card pull-up bg-gradient-directional-success">
            <div className="card-content">
              <div className="card-body">
                <div className="media d-flex">
                  <div className="align-self-center">
                    <i className="icon-screen-desktop text-white font-large-2 float-left" />
                  </div>
                  <div className="media-body text-white text-right">
                    <h3 className="text-white">
                      <NumberFormat
                        value={summary ? summary[0].asset : 0}
                        displayType={"text"}
                        thousandSeparator={true}
                        prefix={""}
                      />
                    </h3>

                    <span>ครุภัณฑ์(รายการ)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>

      <div className="col-xl-3 col-lg-6 col-12">
        <Link href="/branchs">
          <div className="card pull-up bg-gradient-directional-warning">
            <div className="card-content">
              <div className="card-body">
                <div className="media d-flex">
                  <div className="align-self-center">
                    <i className="icon-home text-white font-large-2 float-left" />
                  </div>
                  <div className="media-body text-white text-right">
                    <h3 className="text-white">
                      <NumberFormat
                        value={summary ? summary[0].assetbuildings : 0}
                        displayType={"text"}
                        thousandSeparator={true}
                        prefix={""}
                      />
                    </h3>

                    <span>สิ่งก่อสร้าง</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>

      <div className="col-xl-3 col-lg-6 col-12">
        <div className="card pull-up bg-gradient-directional-danger">
          <div className="card-content">
            <div className="card-body">
              <div className="media d-flex">
                <div className="align-self-center">
                <i className="icon-pointer text-white font-large-2 float-left" />
                </div>
                <div className="media-body text-white text-right">
                  <h3 className="text-white">{branch}</h3>
                  <span>หน่วยบริการ</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
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
        <Link href="/persons">
          <div class="card pull-up bg-gradient-directional-info">
            <div class="card-content">
              <div class="card-body">
                <div class="media d-flex">
                  <div class="align-self-center">
                    <i class="icon-user text-white font-large-2 float-left"></i>
                  </div>
                  <div class="media-body text-white text-right">
                    <h3 class="text-white">
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
              </div>
            </div>
          </div>
        </Link>
      </div>

      <div className="col-xl-3 col-lg-6 col-12">
        <Link href="/assets">
          <div class="card pull-up bg-gradient-directional-success">
            <div class="card-content">
              <div class="card-body">
                <div class="media d-flex">
                  <div class="align-self-center">
                    <i class="icon-screen-desktop text-white font-large-2 float-left"></i>
                  </div>
                  <div class="media-body text-white text-right">
                    <h3 class="text-white">
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
          <div class="card pull-up bg-gradient-directional-warning">
            <div class="card-content">
              <div class="card-body">
                <div class="media d-flex">
                  <div class="align-self-center">
                    <i class="icon-home text-white font-large-2 float-left"></i>
                  </div>
                  <div class="media-body text-white text-right">
                    <h3 class="text-white">
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
        <div class="card pull-up bg-gradient-directional-danger">
          <div class="card-content">
            <div class="card-body">
              <div class="media d-flex">
                <div class="align-self-center">
                <i class="icon-pointer text-white font-large-2 float-left"></i>
                </div>
                <div class="media-body text-white text-right">
                  <h3 class="text-white">{branch}</h3>
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

import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Link from "next/link";
import NumberFormat from "react-number-format";

import Axios from "../axios.config";

export default function TotalSummary() {
  const [person, setPerson] = useState(0);
  const [asset, setAsset] = useState(0);
  const [branch, setBranch] = useState(0);

  useEffect(async () => {
    await getData();
  }, []);

  const getData = async () => {
    const person = await Axios.get("datacenter/persons/total");
    const asset = await Axios.get("datacenter/persons/total");

    setPerson(person.data);
    setAsset(asset.data);
  };

  return (
    <div className="row">
      <div className="col-xl-3 col-lg-6 col-12">
        <Link href="/persons">
          <div class="card bg-gradient-directional-info">
            <div class="card-content">
              <div class="card-body">
                <div class="media d-flex">
                  <div class="align-self-center">
                    <i class="icon-user text-white font-large-2 float-left"></i>
                  </div>
                  <div class="media-body text-white text-right">
                    <h3 class="text-white">
                      <NumberFormat
                        value={person}
                        displayType={"text"}
                        thousandSeparator={true}
                        prefix={""}
                      />
                    </h3>
                    <span>
                      บุคคลากร
                      {JSON.stringify(person)}
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
          <div class="card bg-gradient-directional-success">
            <div class="card-content">
              <div class="card-body">
                <div class="media d-flex">
                  <div class="align-self-center">
                    <i class="icon-user text-white font-large-2 float-left"></i>
                  </div>
                  <div class="media-body text-white text-right">
                    <h3 class="text-white">
                      <NumberFormat
                        value={asset}
                        displayType={"text"}
                        thousandSeparator={true}
                        prefix={""}
                      />
                    </h3>

                    <span>ทรัพย์สิน(รายการ)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>

      <div className="col-xl-3 col-lg-6 col-12">
        <Link href="/branchs">
          <div class="card bg-gradient-directional-warning">
            <div class="card-content">
              <div class="card-body">
                <div class="media d-flex">
                  <div class="align-self-center">
                    <i class="icon-pointer text-white font-large-2 float-left"></i>
                  </div>
                  <div class="media-body text-white text-right">
                    <h3 class="text-white">
                      <NumberFormat
                        value={branch}
                        displayType={"text"}
                        thousandSeparator={true}
                        prefix={""}
                      />
                    </h3>

                    <span>หน่วยบริการ</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>

      <div className="col-xl-3 col-lg-6 col-12">
        <div class="card bg-gradient-directional-danger">
          <div class="card-content">
            <div class="card-body">
              <div class="media d-flex">
                <div class="align-self-center">
                  <i class="icon-pie-chart text-white font-large-2 float-left"></i>
                </div>
                <div class="media-body text-white text-right">
                  <h3 class="text-white">0</h3>
                  <span>บัญชี</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

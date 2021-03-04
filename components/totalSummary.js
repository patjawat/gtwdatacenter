import React, { useState, useEffect } from "react";

import Link from "next/link";
import NumberFormat from "react-number-format";
import ContentLoader, { Facebook } from "react-content-loader";
import { useSelector, useDispatch } from "react-redux";

import Axios from "../axios.config";

export default function TotalSummary() {
  const [summary, setSummary] = useState(0);
  const [branch, setBranch] = useState(0);
  const store = useSelector((state) => state);
  const isLoading = store.theme.isLoading

  useEffect(async () => {
    await getData();
  }, []);

  const getData = async () => {
    const { data } = await Axios.get("datacenter");
    setSummary(data.summary);
    setBranch(data.branchs);
  };

  const MyLoader = () => (
    <div className="card pull-up bg-gradient-directional-white">
      <div className="card-content">
        <div className="card-body">
          <ContentLoader
           backgroundColor={'#b7b7b7'}
           foregroundColor={'#999'}
          ></ContentLoader>
        </div>
      </div>
    </div>
  );

  return (
    <div className="row">
      <div className="col-xl-3 col-lg-6 col-12">
        {isLoading ? (
          <MyLoader />
        ) : (
          <div className="card pull-up bg-gradient-directional-info">
            <div className="card-content">
              <div className="card-body">
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
                    <Link href="/persons">
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-light btn-min-width"
                      >
                        บุคคลากร
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="col-xl-3 col-lg-6 col-12">
      {isLoading ? (
          <MyLoader />
        ) : (
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
                  <Link href="/assets">
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-light btn-min-width"
                    >
                      ครุภัณฑ์(รายการ)
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
          )}
      </div>
      
      <div className="col-xl-3 col-lg-6 col-12">
      {isLoading ? (
          <MyLoader />
        ) : (
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
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-light btn-min-width"
                    >
                      สิ่งก่อสร้าง
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>
        )}
      </div>

      <div className="col-xl-3 col-lg-6 col-12">
      {isLoading ? (
          <MyLoader />
        ) : (
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
        )}
      </div>
    </div>
  );
}

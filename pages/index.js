import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ContentLoader, { Facebook, BulletList } from "react-content-loader";

import Head from "next/head";
import styles from "../styles/Home.module.css";
import Theme from "@/components/themes";
import "chartjs-plugin-datalabels";
import Axios from "../axios.config";
import NumberFormat from "react-number-format";

import axios from "axios";
import TotalSummary from "@/components/totalSummary";
import Branch from "@/components/branch";

import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import Drilldown from "highcharts-drilldown";

import persons from "../services/persons";

export default function Home(props) {
  const store = useSelector((state) => state);
  const isLoading = store.theme.isLoading;
  const dispatch = useDispatch();

  const [dataset, setDataset] = useState([]);
  const [typeGroup, setTypeGroup] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(async () => {
    await getDataset();
  }, []);

  const getDataset = async () => {
    console.log("loading home");
    dispatch({ type: "THEME_LOADING", payload: true });
    const { data } = await Axios.get("datacenter/assets/datasets");
    await setTypeGroup(data);
    await setCategories([...new Set(data.map((n) => n.name))]);

    await setDataset([
      {
        name: "ครุภัณฑ์",
        data: [...new Set(data.map((n) => parseInt(n.asset)))],
        color: "#20a576",
      },
      {
        name: "สิ่งก่อสร้าง",
        data: [...new Set(data.map((n) => parseInt(n.assetbuildings)))],
        color: "#ff7216",
      },
    ]);

    // โหลดข้อมูล บุคลากร
    await persons
      .getAll()
      .then((res) => {
        dispatch({ type: "GET_PERSON", payload: res.data });
        dispatch({ type: "THEME_COMPLATE" });
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <>
      <TotalSummary />

      <div className="row">
        <div className="col-8">
          <div className="card">
            <div className="card-content collapse show">
              <div className="card-body">
                <div className="rickshaw-wrap">
                  <AssetSummary dataset={dataset} categories={categories} />
                  <div className="rickshaw-legend-wrap">
                    <div id="area-chart-legend" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="card">
            <div className="card-content collapse show">
              <div className="row">
                <div className="col-xl-8 col-lg-12">
                  <div className="card-body">
                    <div className="rickshaw-wrap">
                      <ListGroup
                        typeGroup={typeGroup}
                        setDataset={setDataset}
                        setCategories={setCategories}
                      />

                      <div className="rickshaw-legend-wrap">
                        <div id="area-chart-legend" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Branch />
    </>
  );
}

function ListGroup({ typeGroup, setDataset, setCategories }) {
  const store = useSelector((state) => state);
  const isLoading = store.theme.isLoading;
  return (
    <>
      {isLoading ? (
        <BulletList 
        height={120}
        backgroundColor={"#b7b7b7"} 
        foregroundColor={"#999"}
         />
      ) : (
        <table
          id="new-orders-table"
          className="table table-xs table-hover mb-0 p-0"
        >
          <thead>
            <tr>
              <th className="border-top-0">จังหวัด</th>
              <th className="border-top-0">ครุภัณฑ์</th>
              <th className="border-top-0">สิ่งก่อสร้าง</th>
            </tr>
          </thead>
          <tbody>
            {typeGroup.map((item, i) => {
              return (
                <tr key={i} className="pull-up">
                  <td className="text-truncate" style={{ width: 130 }}>
                    <a
                      onClick={async () => {
                        const { data } = await Axios.get(
                          "datacenter/assets/groupbyhospcode/",
                          {
                            params: {
                              chwpart: item.chwpart,
                            },
                          }
                        );
                        await setCategories([
                          ...new Set(data.map((n) => n.name)),
                        ]);

                        // setDataset(data);
                        setDataset([
                          {
                            name: "ครุภัณฑ์",
                            data: [
                              ...new Set(data.map((n) => parseInt(n.asset))),
                            ],
                            color: "#20a576",
                          },
                          {
                            name: "สิ่งก่อสร้าง",
                            data: [
                              ...new Set(
                                data.map((n) => parseInt(n.assetbuildings))
                              ),
                            ],
                            color: "#ff7216",
                          },
                        ]);
                        console.log(data);
                      }}
                    >
                      {item.name}
                    </a>
                  </td>
                  <td className="text-truncate p-1">
                    <h6 className="text-bold-600">
                      <NumberFormat
                        value={item.asset}
                        displayType={"text"}
                        thousandSeparator={true}
                        prefix={""}
                      />
                    </h6>
                  </td>
                  <td className="text-truncate">
                    <h6 className="text-bold-600">
                      <NumberFormat
                        value={item.assetbuildings}
                        displayType={"text"}
                        thousandSeparator={true}
                        prefix={""}
                      />
                    </h6>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </>
  );
}

function AssetSummary({ dataset, categories }) {
  const chartOptions = {
    chart: {
      type: "column",
    },
    title: {
      text: "สิ่งที่มีอยู่",
    },
    xAxis: {
      categories: categories,
      title: { text: "Year" },
    },
    legend: {
      enabled: true,
    },

    plotOptions: {
      series: {
        borderWidth: 0,
        dataLabels: {
          enabled: true,
        },
      },
    },

    series: dataset,
  };

  return (
    <>
      <HighchartsReact highcharts={Highcharts} options={chartOptions} />
    </>
  );
}

Home.Layout = Theme;

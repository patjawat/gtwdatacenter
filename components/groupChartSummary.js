import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { useSelector } from "react-redux";
import NumberFormat from "react-number-format";

import Axios from "../axios.config";
function ChartSmmery(props) {
  const store = useSelector((state) => state.infomation);
  const [dataset, setDataset] = useState([]);
  const [typeGroup, setTypeGroup] = useState([]);

  useEffect(async () => {
    await getDataset();
  }, []);

  const getDataset = async () => {
    const { data } = await Axios.get("datacenter/assets/datasets");
    await setDataset(data);
    await setTypeGroup(data);
  };

  const dataChart = (canvas) => {
    const ctx = canvas.getContext("2d");

    const purple_orange_gradient = ctx.createLinearGradient(0, 0, 0, 600);
    purple_orange_gradient.addColorStop(0, "#0c84d1");
    purple_orange_gradient.addColorStop(1, "#4eb4f5");

    const purple_orange_gradient1 = ctx.createLinearGradient(0, 0, 0, 600);
    purple_orange_gradient1.addColorStop(1, "#ff1635");
    purple_orange_gradient1.addColorStop(0, "#ff7c8d");

    let datasets = [];
    datasets.push(
      {
        label: "ครุภัณฑ์",
        backgroundColor: '#20a576',
        // hoverBackgroundColor: purple_orange_gradient,
        data: [...new Set(dataset.map((n) => n.asset))],
      },
      {
        label: "สิ่งก่อสร้าง",
        backgroundColor: purple_orange_gradient1,
        // hoverBackgroundColor: purple_orange_gradient1,
        data: [...new Set(dataset.map((n) => n.assetbuildings))],
      }
    );

    return {
      labels: [...new Set(dataset.map((n) => n.name))],
      fill: "start",
      datasets,
    };
  };

  var options = {
    responsive: true,
    legend: {
        position: 'top',
        display: true,
    },
    hover: {
      "animationDuration": 0
    },
    plugins: {
      datalabels: {
        color: 'black',
        anchor: 'end',
        offset: 1,
        padding: 0,
        
        align: function(context) {
          return 'end';
        },
      }
    },
    
    title: {
        display: false,
        text: ''
    },

  };

  return (
    <div>
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-content collapse show">
              <div className="row">
                <div className="col-xl-8 col-lg-12">
                  <div className="card-body">
                    <div className="rickshaw-wrap">
                      <Bar
                        data={dataChart}
                        height={150}
                        options={options}
                      />
                      <div className="rickshaw-legend-wrap">
                        <div id="area-chart-legend" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-12">
                  <div className="table-responsive mt-2">
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
                              <td
                                className="text-truncate"
                                style={{ width: 130 }}
                              >
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
                                    setDataset(data);
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChartSmmery;

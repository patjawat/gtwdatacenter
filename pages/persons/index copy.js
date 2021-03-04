import React, { useState, useEffect } from "react";
import Theme from "@/components/themes";
import NumberFormat from "react-number-format";
// import Sexpie from "@/components/sexPie";
// import Typepie from "@/components/typePie";
import Axios from "../../axios.config";
import Highcharts from "highcharts";

import HighchartsReact from "highcharts-react-official";
import ColumnChart from "./columnChart";

// import Sex from "./bacl_sex";
export default function Index() {
  const [getDatasets, setDataset] = useState([]);
  const [typeSummary, setTypeSummary] = useState(null);

  useEffect(async () => {
    await getData();
  }, []);

  const getData = async () => {
    const datasets = await Axios.get("datacenter/persons/datasets");
    const dataTypeSummary = await Axios.get("datacenter/persons/type-summary");
    setDataset(datasets.data.items);
    setTypeSummary(dataTypeSummary.data);
  };

  return (
    <>
      <div className="row">
        <div className="col-xl-3 col-md-6 col-12">
          <div className="card pull-up bg-gradient-directional-secondary">
            <div className="card-content">
              <div className="card-body">
                <div className="media d-flex">
                  <div className="align-self-center">
                    <i className="icon-users text-white font-large-2 float-left" />
                  </div>
                  <div className="media-body text-white text-right">
                    <h3 className="text-white">
                      {typeSummary !== null ? (
                        <NumberFormat
                          value={typeSummary.type_all.total}
                          displayType={"text"}
                          thousandSeparator={true}
                          prefix={""}
                        />
                      ) : (
                        <i className="fas fa-circle-notch fa-spin"></i>
                      )}
                      {typeSummary !== null ? " คน" : ""}
                    </h3>
                    <span>
                      {typeSummary !== null ? typeSummary.type_all.label : null}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-md-6 col-12">
          <div className="card pull-up bg-gradient-directional-primary bg-darken-4">
            <div className="card-content">
              <div className="card-body">
                <div className="media d-flex">
                  <div className="align-self-center">
                    <i className="icon-badge text-white font-large-2 float-left" />
                  </div>
                  <div className="media-body text-white text-right">
                    <h3 className="text-white">
                      {typeSummary !== null ? (
                        <NumberFormat
                          value={typeSummary.type_a.total}
                          displayType={"text"}
                          thousandSeparator={true}
                          prefix={""}
                        />
                      ) : (
                        <i className="fas fa-circle-notch fa-spin" />
                      )}
                      {typeSummary !== null ? " คน" : ""}
                    </h3>
                    <span>
                      {typeSummary !== null ? typeSummary.type_a.label : null}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-md-6 col-12">
          <div className="card pull-up bg-gradient-directional-info">
            <div className="card-content">
              <div className="card-body">
                <div className="media d-flex">
                  <div className="align-self-center">
                    <i className="fas fa-user-tag text-white font-large-2 float-left" />
                  </div>
                  <div className="media-body text-white text-right">
                    <h3 className="text-white">
                      {typeSummary !== null ? (
                        <NumberFormat
                          value={typeSummary.type_b.total}
                          displayType={"text"}
                          thousandSeparator={true}
                          prefix={""}
                        />
                      ) : (
                        <i className="fas fa-circle-notch fa-spin"></i>
                      )}
                      {typeSummary !== null ? " คน" : ""}
                    </h3>
                    <span>
                      {typeSummary !== null ? typeSummary.type_b.label : null}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-md-6 col-12">
          <div className="card pull-up bg-gradient-directional-success">
            <div className="card-content">
              <div className="card-body">
                <div className="media d-flex">
                  <div className="align-self-center">
                    <i className="fas fa-user-shield text-white font-large-2 float-left" />
                  </div>
                  <div className="media-body text-white text-right">
                    <h3 className="text-white">
                      {typeSummary !== null ? (
                        <NumberFormat
                          value={typeSummary.type_c.total}
                          displayType={"text"}
                          thousandSeparator={true}
                          prefix={""}
                        />
                      ) : (
                        <i className="fas fa-circle-notch fa-spin"></i>
                      )}
                      {typeSummary !== null ? " คน" : ""}
                    </h3>
                    <span>
                      {typeSummary !== null ? typeSummary.type_c.label : null}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-md-6 col-12">
          <div className="card pull-up bg-gradient-directional-warning">
            <div className="card-content">
              <div className="card-body">
                <div className="media d-flex">
                  <div className="align-self-center">
                    <i className="fas fa-hand-holding-medical text-white font-large-2 float-left" />
                  </div>
                  <div className="media-body text-white text-right">
                    <h3 className="text-white">
                      {typeSummary !== null ? (
                        <NumberFormat
                          value={typeSummary.type_d.total}
                          displayType={"text"}
                          thousandSeparator={true}
                          prefix={""}
                        />
                      ) : (
                        <i className="fas fa-circle-notch fa-spin"></i>
                      )}
                      {typeSummary !== null ? " คน" : ""}
                    </h3>
                    <span>
                      {typeSummary !== null ? typeSummary.type_d.label : null}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-md-6 col-12">
          <div className="card pull-up bg-gradient-directional-custom1">
            <div className="card-content">
              <div className="card-body">
                <div className="media d-flex">
                  <div className="align-self-center">
                    <i className="icon-calendar text-white font-large-2 float-left" />
                  </div>
                  <div className="media-body text-white text-right">
                    <h3 className="text-white">
                      {typeSummary !== null ? (
                        <NumberFormat
                          value={typeSummary.type_e.total}
                          displayType={"text"}
                          thousandSeparator={true}
                          prefix={""}
                        />
                      ) : (
                        <i className="fas fa-circle-notch fa-spin"></i>
                      )}
                      {typeSummary !== null ? " คน" : ""}
                    </h3>
                    <span>
                      {typeSummary !== null ? typeSummary.type_e.label : null}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-md-6 col-12">
          <div className="card pull-up bg-gradient-directional-custom2">
            <div className="card-content">
              <div className="card-body">
                <div className="media d-flex">
                  <div className="align-self-center">
                    <i className="fas fa-user-clock text-white font-large-2 float-left" />
                  </div>
                  <div className="media-body text-white text-right">
                    <h3 className="text-white">
                      {typeSummary !== null ? (
                        <NumberFormat
                          value={typeSummary.type_f.total}
                          displayType={"text"}
                          thousandSeparator={true}
                          prefix={""}
                        />
                      ) : (
                        <i className="fas fa-circle-notch fa-spin"></i>
                      )}
                      {typeSummary !== null ? " คน" : ""}
                    </h3>
                    <span>
                      {typeSummary !== null ? typeSummary.type_f.label : null}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-md-6 col-12">
          <div className="card pull-up bg-gradient-directional-danger">
            <div className="card-content">
              <div className="card-body">
                <div className="media d-flex">
                  <div className="align-self-center">
                    <i className="fas fa-users text-white font-large-2 float-left" />
                  </div>
                  <div className="media-body text-white text-right">
                    <h3 className="text-white">
                      {typeSummary !== null ? (
                        <NumberFormat
                          value={typeSummary.type_other_and_null.total}
                          displayType={"text"}
                          thousandSeparator={true}
                          prefix={""}
                        />
                      ) : (
                        <i className="fas fa-circle-notch fa-spin"></i>
                      )}
                      {typeSummary !== null ? " คน" : ""}
                    </h3>
                    <span>
                      {/* {typeSummary !== null ? typeSummary.person_type_other_and_null.label : null} */}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <div className="card pull-up">
            <div className="card-content collapse show">
              <div className="row">
                <div className="col-xl-12 col-lg-9">
                  <div className="card-body">
                    <div className="rickshaw-wrap">
                      <ColumnChart />
                      {/* <BarChartSummery dataChart={dataChart} /> */}

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

      <div className="row">
        <div className="col-sm-6 col-lg-6 col-md-6">
          {/* <SexType data={typeSummary}/> */}
          {/* <Sexpie /> */}
        </div>

        <div className="col-sm-6 col-lg-6 col-md-">{/* <Typepie /> */}</div>
      </div>

      {/* <ListSummary data={getDatasets} /> */}
    </>
  );
}

function ListSummary({ data }) {
  return (
    <>
      <div className="card">
        <div className="card-header">
          <a className="heading-elements-toggle">
            <i className="la la-ellipsis-v font-medium-3" />
          </a>
          <div className="heading-elements"></div>
        </div>
        <div className="card-content">
          <div className="table-responsive">
            <table
              id="recent-orders"
              className="table table-hover table-xl mb-0"
            >
              <thead>
                <tr>
                  <th className="border-top-0">จังหวัด</th>
                  <th className="border-top-0">ข้าราชการ</th>
                  <th className="border-top-0">พนักงานราชการ</th>
                  <th className="border-top-0">พนักงานกระทรวงสาธารณสุข</th>
                  <th className="border-top-0">ลูกจ้างประจำ</th>
                  <th className="border-top-0">ลูกจ้างชั่วคราว</th>
                  <th className="border-top-0">ลูกจ้างอื่นๆ</th>
                  <th className="border-top-0">เพศชาย</th>
                  <th className="border-top-0">เพศหญิง</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, i) => {
                  return (
                    <tr className="pull-up" key={i}>
                      <td className="text-truncate">
                        <i className="la la-dot-circle-o success font-medium-1 mr-1" />{" "}
                        {item.name}
                      </td>
                      <td className="text-truncate">
                        {/* ข้าราชการ */}
                        <h6 className="text-bold-600">
                          <NumberFormat
                            value={item.person_type_a}
                            displayType={"text"}
                            thousandSeparator={true}
                            prefix={""}
                          />
                        </h6>
                      </td>
                      <td className="text-truncate">
                        {/* พนักงานราชการ */}
                        <h6 className="text-bold-600">
                          <NumberFormat
                            value={item.person_type_c}
                            displayType={"text"}
                            thousandSeparator={true}
                            prefix={""}
                          />
                        </h6>
                      </td>

                      <td className="text-truncate">
                        {/* พนักงานกระทรวงสาธารณสุข */}
                        <h6 className="text-bold-600">
                          <NumberFormat
                            value={item.person_type_d}
                            displayType={"text"}
                            thousandSeparator={true}
                            prefix={""}
                          />
                        </h6>
                      </td>

                      <td className="text-truncate">
                        {/* ลูกจ้างประจำ */}
                        <h6 className="text-bold-600">
                          <NumberFormat
                            value={item.person_type_b}
                            displayType={"text"}
                            thousandSeparator={true}
                            prefix={""}
                          />
                        </h6>
                      </td>

                      <td className="text-truncate">
                        {/* ลูกจ้างรายวัน */}
                        <h6 className="text-bold-600">
                          <NumberFormat
                            value={item.person_type_e}
                            displayType={"text"}
                            thousandSeparator={true}
                            prefix={""}
                          />
                        </h6>
                      </td>
                      <td className="text-truncate">
                        {/* ทั้งหมด */}
                        <h6 className="text-bold-600">
                          <NumberFormat
                            value={item.person_type_other}
                            displayType={"text"}
                            thousandSeparator={true}
                            prefix={""}
                          />
                        </h6>
                      </td>
                      <td className="text-truncate">
                        <h6 className="text-bold-600">
                          <NumberFormat
                            value={item.male}
                            displayType={"text"}
                            thousandSeparator={true}
                            prefix={""}
                          />
                        </h6>
                      </td>
                      <td className="text-truncate">
                        <h6 className="text-bold-600">
                          <NumberFormat
                            value={item.female}
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
    </>
  );
}


function SexType({ data }){
const [series,setSeries] = useState(0)

useEffect(() =>{

})

const loadData = async () =>{
  let {data} = await Axios.get("datacenter/persons")
  setSeries([
    {
        name: 'Share',
        data: [
            { name: 'ชาย', y: data.male },
            { name: 'หญิง', y: data.female4 },
            { name: 'ไม่ระบุ', y: data.nottype },
        ]
   
    }
  ])
}
  const options = {
    chart: {
      type: "pie",
      events: {
        drilldown: function (e) {
          // console.log("Drilldown" + e.point.name);
          if (!e.seriesOptions) {
            var chart = this;
            if (e.point.name === "NAMR") {
              chart.addSingleSeriesAsDrilldown(e.point, {
                name: "New",
                color: "green",
                data: [
                  ["Mary", 34],
                  ["Peter", 22],
                ],
              });
              chart.addSingleSeriesAsDrilldown(e.point, {
                name: "In Progress",
                color: "blue",
                data: [
                  ["Mary", 4],
                  ["Peter", 12],
                ],
              });
            }
            chart.applyDrilldown();
          }
        },
      },
    },

    title: {
      text: "ภาพรวมบุคลากรทั้งหมดของเขตสุขภาพที่ 1",
      style: {
        fontFamily: 'Kanit',
        fontSize: "15px",
        fontWeight: "bold",
        color: "#123E69",
      },
    },
    subtitle: {
    //   text: "Click the columns to drilldown to each region",
    },

    xAxis: {
      categories: ['ชาย','หญิง'],
      type: "category",
    },
    yAxis: {
      min: 0, // Lowest value to show on the yAxis
      title: {
        text: "Counts", // Title for the yAxis
      },
    },
    legend: {
      enabled: true, // Enable/Disable the legend
    },

    tooltip: {
      shared: true, // If you have multiple series then all points in each category will show up on one tooltip
    },
    plotOptions: {
      pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
              enabled: true,
              format: '<b>{point.name}</b>: {point.percentage:.1f} %',
              connectorColor: 'silver'
          }
      }
  },
    series: series,
  };

  return(
    <>
    Sex
    {/* {JSON.stringify(data)} */}
    <HighchartsReact
        // allowChartUpdate={this.allowChartUpdate}
        // ref={'chartComponent'}
        highcharts={Highcharts}
        options={options}
      />
    </>
  )
}
Index.Layout = Theme;

import React, { useState, useEffect } from "react";
import Theme from "@/components/themes";
import NumberFormat from "react-number-format";
import Sexpie from "@/components/sexPie";
import Typepie from "@/components/typePie";
import Axios from "../../axios.config";
import BarChartSummery from "./BarChartSummery"
import  'chartjs-plugin-datalabels';

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

  const dataChart = (canvas) => {
    const ctx = canvas.getContext("2d");
    const gradient = ctx.createLinearGradient(0, 0, 100, 0);

    const purple_orange_gradient = ctx.createLinearGradient(0, 0, 300, 600);
    purple_orange_gradient.addColorStop(0, "#3a44e1");
    purple_orange_gradient.addColorStop(1, "#9298ef");
 

    const purple_orange_gradient1 = ctx.createLinearGradient(0, 0, 0, 600);
    purple_orange_gradient1.addColorStop(0, "#0c84d1");
    purple_orange_gradient1.addColorStop(1, "#4eb4f5");

    const purple_orange_gradient2 = ctx.createLinearGradient(0, 0, 0, 600);
    purple_orange_gradient2.addColorStop(1, "#20a576");
    purple_orange_gradient2.addColorStop(0, "#4eddaa");

    const purple_orange_gradient3 = ctx.createLinearGradient(0, 0, 0, 600);
    purple_orange_gradient3.addColorStop(1, "#ff7216");
    purple_orange_gradient3.addColorStop(0, "#ffb07c");

    const purple_orange_gradient4 = ctx.createLinearGradient(0, 0, 0, 600);
    purple_orange_gradient4.addColorStop(1, "#3813C2");
    purple_orange_gradient4.addColorStop(0, "#FF6FD8");

    const purple_orange_gradient5 = ctx.createLinearGradient(0, 0, 0, 600);
    purple_orange_gradient5.addColorStop(1, "#65FDF0");
    purple_orange_gradient5.addColorStop(0, "#1D6FA3");

    const purple_orange_gradient6 = ctx.createLinearGradient(0, 0, 0, 600);
    purple_orange_gradient6.addColorStop(1, "#FFE985");
    purple_orange_gradient6.addColorStop(0, "#FA742B");

    const purple_orange_gradient7 = ctx.createLinearGradient(0, 0, 0, 600);
    purple_orange_gradient7.addColorStop(1, "#FFA6B7");
    purple_orange_gradient7.addColorStop(0, "#1E2AD2");

    const purple_orange_gradient8 = ctx.createLinearGradient(0, 0, 0, 600);
    purple_orange_gradient8.addColorStop(1, "#3C8CE7");
    purple_orange_gradient8.addColorStop(0, "#00EAFF");

    const purple_orange_gradient9 = ctx.createLinearGradient(0, 0, 0, 600);
    purple_orange_gradient9.addColorStop(1, "#FF96F9");
    purple_orange_gradient9.addColorStop(0, "#C32BAC");

    let datasets = [];
    datasets.push(
      {
        label: "ข้าราชการ",
        backgroundColor: "#9298ef",
        hoverBackgroundColor: "#9298ef",
        data: [...new Set(getDatasets.map((n) => n.person_type_a))],
      },
      {
        label: "ลูกจ้างประจำ",
        backgroundColor: "#4eb4f5",
        hoverBackgroundColor: "#4eb4f5",
        data: [...new Set(getDatasets.map((n) => n.person_type_b))],
      },
      {
        label: "พนักงานราชการ",
        backgroundColor: "#4eddaa",
        hoverBackgroundColor: "#4eddaa",
        data: [...new Set(getDatasets.map((n) => n.person_type_c))],
      },
      {
        label: "พนักงานกระทรวงสาธารณสุข",
        backgroundColor: "#ffb07c",
        hoverBackgroundColor: "#ffb07c",
        data: [...new Set(getDatasets.map((n) => n.person_type_d))],
      },
      {
        label: "ลูกจ้างชั่วคราว",
        backgroundColor: "#4f1ec4",
        hoverBackgroundColor: "#4f1ec4",
        data: [...new Set(getDatasets.map((n) => n.person_type_e))],
      },
      {
        label: "ลูกจ้างรายวัน",
        backgroundColor: "#1D6FA3",
        hoverBackgroundColor: "#1D6FA3",
        data: [...new Set(getDatasets.map((n) => n.person_type_f))],
      },
      {
        label: "ลูกจ้างอื่นๆ",
        backgroundColor: '#ff374c',
        hoverBackgroundColor: '#ff374c',
        data: [...new Set(getDatasets.map((n) => n.person_type_other))],
      },
      {
        label: "null",
        backgroundColor: '#bd2000',
        hoverBackgroundColor: '#8c0000',
        data: [...new Set(getDatasets.map((n) => n.person_type_null))],
      }
    );

    return {
      labels: [...new Set(getDatasets.map((n) => n.name))],
      fill: "start",
      datasets,
    };
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
            <div className="card-header">
              <h4 className="card-title">
                ภาพรวมบุคลากรทั้งหมดของเขตสุขภาพที่ 1
              </h4>
              <a className="heading-elements-toggle">
                <i className="la la-ellipsis-v font-medium-3" />
              </a>
            </div>
            <div className="card-content collapse show">
              <div className="row">
                <div className="col-xl-12 col-lg-9">
                  <div className="card-body">
                    <div className="rickshaw-wrap">
                    <BarChartSummery dataChart={dataChart} />
                     
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
         
              <Sexpie />

        </div>

        <div className="col-sm-6 col-lg-6 col-md-">
              <Typepie />
        </div>
      </div>

      <ListSummary data={getDatasets} />
    </>
  );
}

function ListSummary({ data }) {
  return (
    <>
   
      <div className="card">
        <div className="card-header">
          {/* <h4 className="card-title">Recent Transactions</h4> */}
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

Index.Layout = Theme;

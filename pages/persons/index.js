import React from "react";
import Theme from "../../themes";
import NumberFormat from "react-number-format";
import { Bar, Pie } from "react-chartjs-2";
import Sexpie from "../../components/sexPie";
import { useQuery, QueryClient, QueryClientProvider } from "react-query";
import Axios from "../../axios.config";
const queryClient = new QueryClient();

export default function Index() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Person />
      </QueryClientProvider>
    </>
  );
}

function Person() {
  const { status, data, error, isFetching } = useQuery("todos", async () => {
    const { data } = await Axios.get("datacenter/persons");
    return data;
  });

  if (status === "loading") return <h1>Loading...</h1>;
  if (status === "error") return <span>Error: {error.message}</span>;

  const dataChart = (canvas) => {
    const ctx = canvas.getContext("2d");
    const gradient = ctx.createLinearGradient(0, 0, 100, 0);

    const purple_orange_gradient = ctx.createLinearGradient(0, 0, 300, 600);
    purple_orange_gradient.addColorStop(0, "#0c84d1");
    purple_orange_gradient.addColorStop(1, "#4eb4f5");

    const purple_orange_gradient1 = ctx.createLinearGradient(0, 0, 0, 600);
    purple_orange_gradient1.addColorStop(1, "#FDEB71");
    purple_orange_gradient1.addColorStop(0, "#F8D800");

    const purple_orange_gradient2 = ctx.createLinearGradient(0, 0, 0, 600);
    purple_orange_gradient2.addColorStop(1, "#ABDCFF");
    purple_orange_gradient2.addColorStop(0, "#0396FF");

    const purple_orange_gradient3 = ctx.createLinearGradient(0, 0, 0, 600);
    purple_orange_gradient3.addColorStop(1, "#CE9FFC");
    purple_orange_gradient3.addColorStop(0, "#7367F0");

    const purple_orange_gradient4 = ctx.createLinearGradient(0, 0, 0, 600);
    purple_orange_gradient4.addColorStop(1, "#FFF6B7");
    purple_orange_gradient4.addColorStop(0, "#F6416C");

    const purple_orange_gradient5 = ctx.createLinearGradient(0, 0, 0, 600);
    purple_orange_gradient5.addColorStop(1, "#FF7AF5");
    purple_orange_gradient5.addColorStop(0, "#513162");

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
        backgroundColor: purple_orange_gradient,
        hoverBackgroundColor: purple_orange_gradient,
        data: [...new Set(data.datasets.items.map((n) => n.person_type0))],
      },
      {
        label: "จ้างเหมาบริการ",
        backgroundColor: purple_orange_gradient1,
        hoverBackgroundColor: purple_orange_gradient1,
        data: [...new Set(data.datasets.items.map((n) => n.person_type1))],
      },
      {
        label: "จ้างเหมาบริการบุคคล",
        backgroundColor: purple_orange_gradient2,
        hoverBackgroundColor: purple_orange_gradient2,
        data: [...new Set(data.datasets.items.map((n) => n.person_type2))],
      },
      {
        label: "พนักงานกระทรวงสาธารณสุข",
        backgroundColor: purple_orange_gradient3,
        hoverBackgroundColor: purple_orange_gradient3,
        data: [...new Set(data.datasets.items.map((n) => n.person_type3))],
      },
      {
        label: "พนักงานราชการ",
        backgroundColor: purple_orange_gradient4,
        hoverBackgroundColor: purple_orange_gradient4,
        data: [...new Set(data.datasets.items.map((n) => n.person_type4))],
      },
      {
        label: "ลูกจ้างชั่วคราว",
        backgroundColor: purple_orange_gradient5,
        hoverBackgroundColor: purple_orange_gradient5,
        data: [...new Set(data.datasets.items.map((n) => n.person_type5))],
      },
      {
        label: "ลูกจ้างประจำ",
        backgroundColor: purple_orange_gradient6,
        hoverBackgroundColor: purple_orange_gradient6,
        data: [...new Set(data.datasets.items.map((n) => n.person_type6))],
      },
      {
        label: "ลูกจ้างรายคาบ",
        backgroundColor: purple_orange_gradient7,
        hoverBackgroundColor: purple_orange_gradient7,
        data: [...new Set(data.datasets.items.map((n) => n.person_type7))],
      },
      {
        label: "ลูกจ้างรายวัน",
        backgroundColor: purple_orange_gradient8,
        hoverBackgroundColor: purple_orange_gradient8,
        data: [...new Set(data.datasets.items.map((n) => n.person_type8))],
      },
      {
        label: "ลูกจ้างเหมาบริการ",
        backgroundColor: purple_orange_gradient9,
        hoverBackgroundColor: purple_orange_gradient9,
        data: [...new Set(data.datasets.items.map((n) => n.person_type9))],
      }
    );

    return {
      labels: [...new Set(data.datasets.items.map((n) => n.name))],
      fill: "start",
      datasets,
    };
  };

  return (
    <>
      <div className="row">
        <div className="col-xl-4 col-md-6 col-12">
        <div className="card pull-up">
          <div className="card-content">
            <div className="card-body">
              <div className="media d-flex">
                <div className="align-self-center">
                  <i className="icon-pointer danger font-large-2 float-left" />
                </div>
                <div className="media-body text-right">
                  <h3>
                  <NumberFormat
                          value={data.totaltypesummery.total}
                          displayType={"text"}
                          thousandSeparator={true}
                          prefix={""}
                        />
                  </h3>
                  <span>จำนวนบุคลากรทั้งหมด</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>

        <div className="col-xl-4 col-md-6 col-12">
        <div className="card pull-up">
          <div className="card-content">
            <div className="card-body">
              <div className="media d-flex">
                <div className="align-self-center">
                  <i className="icon-pointer danger font-large-2 float-left" />
                </div>
                <div className="media-body text-right">
                  <h3>
                    <NumberFormat
                      value={data.totaltypesummery.items[0].total}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={""}
                    />
                  </h3>
                  <span>{data.totaltypesummery.items[0].label}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>

        <div className="col-xl-4 col-md-6 col-12">
        <div className="card pull-up">
          <div className="card-content">
            <div className="card-body">
              <div className="media d-flex">
                <div className="align-self-center">
                  <i className="icon-pointer danger font-large-2 float-left" />
                </div>
                <div className="media-body text-right">
                  <h3>
                    <NumberFormat
                      value={data.totaltypesummery.items[3].total}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={""}
                    />
                  </h3>
                  <span>{data.totaltypesummery.items[3].label}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>

       

        
      </div>


      <div className="row">
      <div className="col-xl-4 col-md-6 col-12">
        <div className="card pull-up">
          <div className="card-content">
            <div className="card-body">
              <div className="media d-flex">
                <div className="align-self-center">
                  <i className="icon-pointer danger font-large-2 float-left" />
                </div>
                <div className="media-body text-right">
                  <h3>
                    <NumberFormat
                      value={data.totaltypesummery.items[2].total}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={""}
                    />
                  </h3>
                  <span>{data.totaltypesummery.items[2].label}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
        <div className="col-xl-4 col-md-6 col-12">
        <div className="card pull-up">
          <div className="card-content">
            <div className="card-body">
              <div className="media d-flex">
                <div className="align-self-center">
                  <i className="icon-pointer danger font-large-2 float-left" />
                </div>
                <div className="media-body text-right">
                  <h3>
                    <NumberFormat
                      value={data.totaltypesummery.items[1].total}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={""}
                    />
                  </h3>
                  <span>{data.totaltypesummery.items[1].label}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>

        <div className="col-xl-4 col-md-6 col-12">
        <div className="card pull-up">
          <div className="card-content">
            <div className="card-body">
              <div className="media d-flex">
                <div className="align-self-center">
                  <i className="icon-pointer danger font-large-2 float-left" />
                </div>
                <div className="media-body text-right">
                  <h3>
                    <NumberFormat
                      value={data.totaltypesummery.items[4].total}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={""}
                    />
                  </h3>
                  <span>{data.totaltypesummery.items[5].label}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>

        
</div>


      {/* <Summery data={data} /> */}

      <div className="row">
        <div className="col-9">
        <div className="card pull-up">
            <div className="card-header">
              <a className="heading-elements-toggle">
                <i className="la la-ellipsis-h font-medium-3" />
              </a>
              <div className="heading-elements">
              </div>
            </div>
            <div className="card-content collapse show">
              <div className="row">
                <div className="col-xl-12 col-lg-9">
                  <div className="card-body">
                    <div className="rickshaw-wrap">
                      <Bar
                        data={dataChart}
                        height={100}
                        options={{
                          responsive: true,
                          legend: {
                            position: "right",
                          },
                          title: {
                            text: "ภาพรวมบุคลากรทั้งหมดของเขตสุขภาพที่ 1",
                            display: true,
                          },
                        }}
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
        <div className="col-3">
                      <Sexpie />

        </div>
      </div>

      <ListSummary data={data} />
    </>
  );
}

function Summery({ data }) {
  return (
    <>
      <div className="row">
        <div className="col-xl-3 col-lg-6 col-12">
          <div className="card pull-up mb-1">
            <div className="card-content">
              <div className="card-body">
                <div className="media d-flex">
                  <div className="media-body text-left">
                    <h3 className="success">
                      {
                        <NumberFormat
                          value={data.totaltypesummery.total}
                          displayType={"text"}
                          thousandSeparator={true}
                          prefix={""}
                        />
                      }
                    </h3>
                    <h6>จำนวนบุคลากรทั้งหมด</h6>
                  </div>
                  <div>
                    <i className="icon-user-follow success font-large-2 float-right" />
                  </div>
                </div>
                <div className="progress progress-sm mt-0 mb-0 box-shadow-2">
                  <div
                    className="progress-bar bg-gradient-x-success"
                    role="progressbar"
                    style={{ width: "75%" }}
                    aria-valuenow={75}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {data.totaltypesummery.items.map((item, i) => {
          return (
            <div className="col-xl-3 col-lg-6 col-12">
              <div className="card pull-up mb-1">
                <div className="card-content">
                  <div className="card-body">
                    <div className="media d-flex">
                      <div className="media-body text-left">
                        <h3 className="success">
                          {
                            <NumberFormat
                              value={item.total}
                              displayType={"text"}
                              thousandSeparator={true}
                              prefix={""}
                            />
                          }
                        </h3>
                        <h6>{item.label}</h6>
                      </div>
                      <div>
                        <i className="icon-user-follow success font-large-2 float-right" />
                      </div>
                    </div>
                    <div className="progress progress-sm mt-1 mb-0 box-shadow-2">
                      <div
                        className="progress-bar bg-gradient-x-success"
                        role="progressbar"
                        style={{ width: "75%" }}
                        aria-valuenow={75}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
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
                  <th className="border-top-0">ลูกจ้างประจำ</th>
                  <th className="border-top-0">พนักงานราชการ</th>
                  <th className="border-top-0">พนักงานกระทรวงสาธารณสุข</th>
                  <th className="border-top-0">ลูกจ้างรายวัน</th>
                  <th className="border-top-0">รวมทั้งหมด</th>
                  <th className="border-top-0">เพศชาย</th>
                  <th className="border-top-0">เพศหญิง</th>
                </tr>
              </thead>
              <tbody>
                {data.datasets.items.map((item, i) => {
                  return (
                    <tr>
                      <td className="text-truncate">
                        <i className="la la-dot-circle-o success font-medium-1 mr-1" />{" "}
                        {item.name}
                      </td>
                      <td className="text-truncate">
                      {/* ข้าราชการ */}
                        <NumberFormat
                          value={item.person_type0}
                          displayType={"text"}
                          thousandSeparator={true}
                          prefix={""}
                        />
                      </td>
                      <td className="text-truncate">
                      {/* ลูกจ้างประจำ */}
                        <NumberFormat
                          value={item.person_type6}
                          displayType={"text"}
                          thousandSeparator={true}
                          prefix={""}
                        />
                      </td>
                      <td className="text-truncate">
                      {/* พนักงานราชการ */}
                        <NumberFormat
                          value={item.person_type4}
                          displayType={"text"}
                          thousandSeparator={true}
                          prefix={""}
                        />
                      </td>
                      <td className="text-truncate">
                      {/* พนักงานกระทรวงสาธารณสุข */}
                        <NumberFormat
                          value={item.person_type3}
                          displayType={"text"}
                          thousandSeparator={true}
                          prefix={""}
                        />
                      </td>
                      <td className="text-truncate">
                      {/* ลูกจ้างรายวัน */}
                        <NumberFormat
                          value={item.person_type8}
                          displayType={"text"}
                          thousandSeparator={true}
                          prefix={""}
                        />
                      </td>
                      <td className="text-truncate">
                      {/* ทั้งหมด */}
                        <NumberFormat
                          value={item.person}
                          displayType={"text"}
                          thousandSeparator={true}
                          prefix={""}
                        />
                      </td>
                      <td className="text-truncate">
                        <NumberFormat
                          value={item.man}
                          displayType={"text"}
                          thousandSeparator={true}
                          prefix={""}
                        />
                      </td>
                      <td className="text-truncate">
                        <NumberFormat
                          value={item.woman}
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
    </>
  );
}

Index.Layout = Theme;

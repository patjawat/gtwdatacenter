import Branch from "@/components/branch";
import Theme from "@/components/themes";
import "chartjs-plugin-datalabels";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import React, { useEffect, useState } from "react";
import { BulletList } from "react-content-loader";
import NumberFormat from "react-number-format";
import { useDispatch, useSelector } from "react-redux";
import Axios from "../axios.config";
import persons from "../services/persons";
import SmallBox from "@/components/small-box/SmallBox";
// import styles from '../styles/Home.module.scss'

export default function Home(props) {
  const store = useSelector((state) => state);
  const isLoading = store.theme.isLoading;
  const dispatch = useDispatch();

  const [dataset, setDataset] = useState([]);
  const [categories, setCategories] = useState([]);
  const [typeGroup, setTypeGroup] = useState([]);
  const [summary, setSummary] = useState(0);
  const [branch, setBranch] = useState(0);

  useEffect(async () => {
    await dispatch({ type: "THEME_LOADING" });

    await getDataset();
  }, []);

  const getDataset = async () => {
    console.log("loading home");


    const summary = await Axios.get("datacenter");
    setSummary(summary.data.summary);

    setBranch(summary.data.branchs);

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
    await dispatch({ type: "THEME_COMPLATE" });

    // โหลดข้อมูล บุคลากร
    // await persons
    //   .getAll()
    //   .then((res) => {
    //     dispatch({ type: "GET_PERSON", payload: res.data });
    //     dispatch({ type: "THEME_COMPLATE" });
    //   })
    //   .catch((e) => {
    //     console.log(e);
    //   });
  };

  return (
    <>
      <div className="row">
        <div className="col-3">
          <SmallBox
            isLoading={isLoading}
            count={summary ? summary[0].person : 0}
            title="บุคคลากร"
            type="primary"
            icon="fas fa-user-friends"
            navigateTo="/persons"
          />
        </div>
        <div className="col-3">
          <SmallBox
            isLoading={isLoading}
            count={summary ? summary[0].asset : 0}
            title="ครุภัณฑ์(รายการ)"
            type="success"
            icon="fas fa-suitcase"
            navigateTo="/assets"
          />
        </div>
        <div className="col-3">
          <SmallBox
            isLoading={isLoading}
            count={summary ? summary[0].assetbuildings : 0}
            title="สิ่งก่อสร้าง"
            type="warning"
            icon="fas fa-home"
            navigateTo="/persons"
          />
        </div>
        <div className="col-3">
          <SmallBox
            isLoading={isLoading}
            count={branch}
            title="หน่วยบริการ"
            type="danger"
            icon="fas fa-map-marker-alt"
            navigateTo="/persons"
          />
        </div>
      </div>

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
          <ListGroup
            typeGroup={typeGroup}
            setDataset={setDataset}
            setCategories={setCategories}
          />
         
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
          <div className="card">
            <div className="card-header border-transparent">
              <h3 className="card-title">สิ่งที่มีอยู่</h3>
              <div className="card-tools">
                <button
                  type="button"
                  className="btn btn-tool"
                  data-card-widget="collapse"
                >
                  <i className="fas fa-minus" />
                </button>
                <button
                  type="button"
                  className="btn btn-tool"
                  data-card-widget="remove"
                >
                  <i className="fas fa-times" />
                </button>
              </div>
            </div>
            {/* /.card-header */}
            <div className="card-body p-0">
              <div className="table-responsive">
                <table className="table m-0">
                  <thead>
                    <tr>
                      <th>จังหวัด</th>
                      <th>ครุภัณฑ์</th>
                      <th>สิ่งก่อสร้าง</th>
                    </tr>
                  </thead>
                  <tbody>
                    {typeGroup.map((item, i) => {
                      return (
                        <tr key={i}>
                          <td>
                            <a
                              href="javascript:void(0)"
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
                                      ...new Set(
                                        data.map((n) => parseInt(n.asset))
                                      ),
                                    ],
                                    color: "#20a576",
                                  },
                                  {
                                    name: "สิ่งก่อสร้าง",
                                    data: [
                                      ...new Set(
                                        data.map((n) =>
                                          parseInt(n.assetbuildings)
                                        )
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
                          <td>
                            {" "}
                            <h6 className="text-bold-600">
                              <NumberFormat
                                value={item.asset}
                                displayType={"text"}
                                thousandSeparator={true}
                                prefix={""}
                              />
                            </h6>
                          </td>
                          <td>
                            {" "}
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
              {/* /.table-responsive */}
            </div>
            {/* /.card-body */}
          </div>
        </>
    //   )}
    // </>
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

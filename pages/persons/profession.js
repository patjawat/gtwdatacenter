import React, { useState, useEffect } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

import Axios from "../../axios.config";
import Theme from "@/components/themes";

export default function Profession() {
    const store = useSelector((state) => state);

  const [dataset, setDataset] = useState([]);
  const [items, setItems] = useState([]);
  const [categories, setCategories] = useState([]);
  const [personType, setPersonType] = useState([]);
  const dispatch = useDispatch();

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    const { a } = Axios.get("datacenter/persons/profession", {
      params: { position_type: data.position_type },
    });
    console.log(a);
  };

  useEffect(async () => {
    await dispatch({ type: "THEME_LOADING" });
    await getPerson();
  }, []);

  const Input = ({ label, register, required }) => (
    <>
      <label>{label}</label>
      <input name={label} ref={register({ required })} />
    </>
  );

  const Select = React.forwardRef(({ label }, ref) => (
    <>
      <label>{label}</label>
      <select name={label} ref={ref}>
        <option value="">Select</option>
        {personType.map((item, i) => {
          return (
            <option key={i} value={item.name}>
              {item.name}
            </option>
          );
        })}
      </select>
    </>
  ));

  const getPerson = async () => {
    const { data } = await Axios.get("datacenter/persons");
    const personType = await Axios.get("datacenter/persons/type");
    setPersonType(personType.data);
    setItems(data.datasets.items);
    // setIsLoading(false);

    setDataset([
      {
        name: "ข้าราชการ",
        color: "#676fe8",
        data: [
          ...new Set(data.datasets.items.map((n) => parseInt(n.person_type_a))),
        ],
      },
      {
        name: "พนักงานราชการ",
        color: "#35bc8d",
        data: [
          ...new Set(data.datasets.items.map((n) => parseInt(n.person_type_c))),
        ],
      },
      {
        name: "พนักงานกระทรวงสาธารณสุข",
        color: "#ff8e4a",
        data: [
          ...new Set(data.datasets.items.map((n) => parseInt(n.person_type_d))),
        ],
      },
      {
        name: "ลูกจ้างประจำ",
        color: "#2e9ae2",
        data: [
          ...new Set(data.datasets.items.map((n) => parseInt(n.person_type_b))),
        ],
      },

      {
        name: "ลูกจ้างชั่วคราว",
        color: "#9f42ce",
        data: [
          ...new Set(data.datasets.items.map((n) => parseInt(n.person_type_e))),
        ],
      },
      //   {
      //     name: "ลูกจ้างรายวัน",
      //     color: "#43b9cb",
      //     data: [
      //       ...new Set(data.datasets.items.map((n) => parseInt(n.person_type_f))),
      //     ],
      //   },
      //   {
      //     name: "ลูกจ้างอื่นๆ",
      //     color: "#ff5262",
      //     data: [
      //       ...new Set(
      //         data.datasets.items.map((n) => parseInt(n.person_type_other))
      //       ),
      //     ],
      //   },
      //   {
      //     name: "null",
      //     data: [
      //       ...new Set(
      //         data.datasets.items.map((n) => parseInt(n.person_type_null))
      //       ),
      //     ],
      //   },
    ]);

    setCategories([
      ...new Set(data.datasets.items.map((item, i) => item.name)),
    ]);
    dispatch({ type: "THEME_COMPLATE" });

  };

  return (
    <div>
      <ContentHeader />
      <form onSubmit={handleSubmit(onSubmit)}>
        <Select label="position_type" ref={register} />
        <input type="submit" />
      </form>
      <ChartSummary dataset={dataset} categories={categories} />
      <List items={items} setItems={setItems} />
    </div>
  );
}
Profession.Layout = Theme;

function ChartSummary({ dataset, categories }) {
  const chartOptions = {
    chart: {
      type: "column",
    },
    title: {
      text: "รายงานจำนวนบุคลากร ทั้งหมด",
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

function List({ items, setItems }) {
  const dispatch = useDispatch();

  return (
    <>
      <div className="card mt-3">
        {/* /.card-header */}
        <div className="card-body p-0">
          <table className="table table-bordered">
            <tbody>
              <tr>
                <td
                  style={{ verticalAlign: "middle;text-align:center" }}
                  rowspan="2"
                >
                  ประเภทหน่วยงาน
                </td>
                <td colspan="2">กรอบอัตรากำลัง</td>
                <td
                  style={{ verticalAlign: "middle;text-align:center" }}
                  rowspan="2"
                >
                  ข้าราชการ
                </td>
                <td
                  style={{ verticalAlign: "middle;text-align:center" }}
                  rowspan="2"
                >
                  พ.ราชการ
                </td>
                <td
                  style={{ verticalAlign: "middle;text-align:center" }}
                  rowspan="2"
                >
                  พ.กระทรวงฯ
                </td>
                <td
                  style={{ verticalAlign: "middle;text-align:center" }}
                  rowspan="2"
                >
                  ลูกจ้างประจำ
                </td>
                <td
                  style={{ verticalAlign: "middle;text-align:center" }}
                  rowspan="2"
                >
                  ลูกจ้างชั่วคราว
                </td>
                <td
                  style={{ verticalAlign: "middle;text-align:center" }}
                  rowspan="2"
                >
                  รวมทั้งหมด
                </td>
                <td
                  style={{ verticalAlign: "middle;text-align:center" }}
                  colspan="2"
                >
                  GAP ทุกประเภท
                </td>
                <td
                  style={{ verticalAlign: "middle;text-align:center" }}
                  colspan="2"
                >
                  GAP ประเภทข้าราชการ
                </td>
              </tr>
              <tr>
                <td>ขั้นสูง</td>
                <td>ขั้นต่ำ</td>
                <td>ขั้นต่ำ (คิด%)</td>
                <td>ขั้นสูง (คิด%)</td>
                <td>ขั้นต่ำ (คิด%)</td>
                <td>ขั้นสูง (คิด%)</td>
              </tr>
              {items.map((item, i) => {
                return (
                  <tr>
                    <td>
                      <a
                        onClick={async () => {
                        //   await setIsLoading(true);
                        await dispatch({ type: "THEME_LOADING" });

                          const { data } = await Axios.get(
                            "datacenter/persons/profession",
                            {
                              params: { chwpart_code: item.chwpart_code },
                            }
                          );
                          console.log(data);

                          await setItems(data.items);
                        await dispatch({ type: "THEME_COMPLATE" });

                        //   await setIsLoading(false);
                        }}
                      >
                        {item.name}
                        {item.hname}
                      </a>
                    </td>
                    <td></td>
                    <td></td>
                    <td style={{ verticalAlign: "middle;text-align:center" }}>
                      {item.person_type_a}
                    </td>
                    <td style={{ verticalAlign: "middle;text-align:center" }}>
                      {item.person_type_c}
                    </td>
                    <td style={{ verticalAlign: "middle;text-align:center" }}>
                      {item.person_type_d}
                    </td>
                    <td style={{ verticalAlign: "middle;text-align:center" }}>
                      {item.person_type_b}
                    </td>
                    <td style={{ verticalAlign: "middle;text-align:center" }}>
                      {item.person_type_e}
                    </td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        {/* /.card-body */}
        <div className="card-footer clearfix">
          <ul className="pagination pagination-sm m-0 float-right">
            <li className="page-item">
              <a className="page-link" href="#">
                «
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                1
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                2
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                3
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                »
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

function ContentHeader() {
  return (
    <>
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 className="m-0">รายงานจำนวนบุคลากรแยกตามวิชาชีพ</h1>
            </div>
            {/* /.col */}
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item">
                  <a href="#">หน้าหลัก</a>
                </li>
                <li className="breadcrumb-item active">บุคคลากร</li>
              </ol>
            </div>
            {/* /.col */}
          </div>
          {/* /.row */}
        </div>
        {/* /.container-fluid */}
      </div>
    </>
  );
}

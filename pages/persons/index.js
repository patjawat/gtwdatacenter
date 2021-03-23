import React, { useState, useEffect } from "react";
import InfoBox from "@/components/info-box/InfoBox";
import Theme from "@/components/themes";
import Axios from "../../axios.config";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { useDispatch, useSelector } from "react-redux";

export default function Index() {
  const dispatch = useDispatch();

  const [persons, setPersons] = useState(0);
  const [categories, setCategories] = useState([]);
  const [series, setSeries] = useState([]);
  const [sex, setSex] = useState([]);
  const [sexType, setSexType] = useState([]);

  useEffect(async () => {
    await dispatch({ type: "THEME_LOADING" });

    await getPerson();
  }, []);

  const getPerson = async () => {
    const { data } = await Axios.get("datacenter/persons");
    setPersons(data);
    // setchartSummary(data.datasets.items);
    setSeries([
      {
        name: "ข้าราชการ",
        color: "#676fe8",
        data: [
          ...new Set(data.datasets.items.map((n) => parseInt(n.person_type_a))),
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
        name: "ลูกจ้างชั่วคราว",
        color: "#9f42ce",
        data: [
          ...new Set(data.datasets.items.map((n) => parseInt(n.person_type_e))),
        ],
      },
      {
        name: "ลูกจ้างรายวัน",
        color: "#43b9cb",
        data: [
          ...new Set(data.datasets.items.map((n) => parseInt(n.person_type_f))),
        ],
      },
      {
        name: "ลูกจ้างอื่นๆ",
        color: "#ff5262",
        data: [
          ...new Set(
            data.datasets.items.map((n) => parseInt(n.person_type_other))
          ),
        ],
      },
      {
        name: "null",
        data: [
          ...new Set(
            data.datasets.items.map((n) => parseInt(n.person_type_null))
          ),
        ],
      },
    ]);

    setCategories([
      ...new Set(data.datasets.items.map((item, i) => item.name)),
    ]);

    setSex([
      {
        name: "Browsers",
        colorByPoint: true,
        data: [
          {
            name: "ชาย " + data.male + " คน",
            y: data.male,
            color: "#003f7f",
            icon: "\uf182",
          },
          {
            name: "หญิง " + data.female + " คน",
            y: data.female,
            color: "#ff007f",
          },
          {
            name: "ไม่ระบุ " + data.nottype + " คน",
            y: data.nottype,
            color: "#a50505",
          },
        ],
      },

    ]);

    setSexType([
      {
        name: "Browsers",
        colorByPoint: true,
        data: [
          {
            name: "ช้าราชการ " + data.type_a + " คน",
            y: data.type_a,
            color: "#676fe8",
          },
          {
            name: "อื่นๆ " + data.type_a + " คน",
            y: data.type_other,
            color: "#fd7e14",
          },
          {
            name: "ไม่ระบุ " + data.nottype + " คน",
            y: data.nottype,
            color: "#6c757d",
          },
        ],
      },
    ]);
    await dispatch({ type: "THEME_COMPLATE" });

    // setBranch(data.branchs);
  };
  return (
    <>
      <TotalSummary persons={persons} />
      <ColumnChart categories={categories} series={series} />
      <div className="row mt-2 mb-2 ">
        <div className="col-6">
          <SexType dataset={sexType} />
        </div>
        <div className="col-6">
          <Sex dataset={sex} />
        </div>
      </div>
    </>
  );
}

function TotalSummary({ persons }) {
  return (
    <div className="row">
      <div className="col-xl-3 col-md-6 col-12">
        <InfoBox
          isLoading={false}
          count={persons ? persons.typesummary.type_all.total : 0}
          title={persons ? persons.typesummary.type_all.label : null}
          type="secondary"
          icon="ion-android-people"
        />
      </div>

      <div className="col-xl-3 col-md-6 col-12">
        <InfoBox
          isLoading={false}
          count={persons ? persons.typesummary.type_a.total : 0}
          title={persons ? persons.typesummary.type_a.label : null}
          type="primary"
          icon="ion-android-people"
        />
      </div>

      <div className="col-xl-3 col-md-6 col-12">
        <InfoBox
          isLoading={false}
          count={persons ? persons.typesummary.type_b.total : 0}
          title={persons ? persons.typesummary.type_b.label : null}
          type="info"
          icon="ion-android-people"
        />
      </div>

      <div className="col-xl-3 col-md-6 col-12">
        <InfoBox
          isLoading={false}
          count={persons ? persons.typesummary.type_c.total : 0}
          title={persons ? persons.typesummary.type_c.label : null}
          type="success"
          icon="ion-android-people"
        />
      </div>
      <div className="col-xl-3 col-md-6 col-12">
        <InfoBox
          isLoading={false}
          count={persons ? persons.typesummary.type_d.total : 0}
          title={persons ? persons.typesummary.type_d.label : null}
          type="warning"
          icon="ion-android-people"
        />
      </div>

      <div className="col-xl-3 col-md-6 col-12">
        <InfoBox
          isLoading={false}
          count={persons ? persons.typesummary.type_e.total : 0}
          title={persons ? persons.typesummary.type_e.label : null}
          type="purple"
          icon="ion-android-people"
        />
      </div>

      <div className="col-xl-3 col-md-6 col-12">
        <InfoBox
          isLoading={false}
          count={persons ? persons.typesummary.type_f.total : 0}
          title={persons ? persons.typesummary.type_f.label : null}
          type="warning"
          icon="ion-android-people"
        />
      </div>

      <div className="col-xl-3 col-md-6 col-12">
        <InfoBox
          isLoading={false}
          count={persons ? persons.typesummary.type_other_and_null.total : 0}
          title={persons ? persons.typesummary.type_other_and_null.label : null}
          type="danger"
          icon="ion-android-people"
        />
      </div>
    </div>
  );
}

function ColumnChart({ categories, series }) {
  const options = {
    chart: {
      type: "column",
    },

    title: {
      text: "ภาพรวมบุคลากรทั้งหมดของเขตสุขภาพที่ 1",
      style: {
        fontFamily: "Kanit",
        fontSize: "15px",
        fontWeight: "bold",
        color: "#123E69",
      },
    },
    subtitle: {
      //   text: "Click the columns to drilldown to each region",
    },

    xAxis: {
      categories: categories,
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
      column: {
        stacking: "percent",
      },
    },
    series: series,
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
}

function Sex({ dataset }) {
  const options = {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: "pie",
    },
    title: {
      text: "ร้อยละบุคคลแยกตามเพศ",
      style: {
        fontFamily: "Kanit",
        fontSize: "15px",
        fontWeight: "bold",
        color: "#123E69",
      },
    },
    tooltip: {
      pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>",
    },
    accessibility: {
      point: {
        valueSuffix: "%",
      },
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: "pointer",
        dataLabels: {
          enabled: true,
          format: "<b>{point.name} </b> <br />คิดเป็น {point.percentage:.1f} %",
          connectorColor: "silver",
        },
      },
    },
    series: dataset,
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
}

function SexType({ dataset }) {
  const options = {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: "pie",
    },
    title: {
      text: "ร้อยละบุคคลแยกตามประเภท",
      style: {
        fontFamily: "Kanit",
        fontSize: "15px",
        fontWeight: "bold",
        color: "#123E69",
      },
    },
    tooltip: {
      pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>",
    },
    accessibility: {
      point: {
        valueSuffix: "%",
      },
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: "pointer",
        dataLabels: {
          enabled: true,
          format: "<b>{point.name} </b> <br />คิดเป็น {point.percentage:.1f} %",
          connectorColor: "silver",
        },
      },
    },
    series: dataset,
  };

  return (
    <>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </>
  );
}

Index.Layout = Theme;

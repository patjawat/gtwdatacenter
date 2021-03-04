import React, { Component, useEffect, useState } from "react";
// Import Highcharts
import { render } from "react-dom";
import { useSelector, useDispatch } from "react-redux";
import Highcharts from "highcharts";
import drilldown from "highcharts/modules/drilldown.js";
import HighchartsReact from "highcharts-react-official";
import Axios from "../../axios.config";
drilldown(Highcharts);

class TestingChart extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    
    return (
      <>
      {JSON.stringify(this.props.data)}
        <ChartSummary />
      </>
    );
  }
}

function ChartSummary() {
  // const [series, setSeries] = useState({});
  // const [categories, setCategories] = useState({});

  const dispatch = useDispatch();
  const person = useSelector((state) => state.persons);
  const data = person.datasets

 

  // useEffect( async () =>{
  //   await loadData()
  // })
  // const loadData = async () => {
    // let { data } = await Axios.get("datacenter/persons/datasets");
    // setCategories([...new Set(data.items.map((item, i) => item.name))]);

    const categories = ([...new Set(data.items.map((item, i) => item.name))]);
    const series = ([
      {
        name: "ข้าราชการ",
        color:'#676fe8',
        data: [...new Set(data.items.map((n) => parseInt(n.person_type_a)))],
      },
      {
        name: "ลูกจ้างประจำ",
        color:'#2e9ae2',
        data: [...new Set(data.items.map((n) => parseInt(n.person_type_b)))],
      },
      {
        name: "พนักงานราชการ",
        color:'#35bc8d',
        data: [...new Set(data.items.map((n) => parseInt(n.person_type_c)))],
      },
      {
        name: "พนักงานกระทรวงสาธารณสุข",
        color:'#ff8e4a',
        data: [...new Set(data.items.map((n) => parseInt(n.person_type_d)))],
      },
      {
        name: "ลูกจ้างชั่วคราว",
        color:'#9f42ce',
        data: [...new Set(data.items.map((n) => parseInt(n.person_type_e)))],
      },
      {
        name: "ลูกจ้างรายวัน",
        color:'#43b9cb',
        data: [...new Set(data.items.map((n) => parseInt(n.person_type_f)))],
      },
      {
        name: "ลูกจ้างอื่นๆ",
        color:'#ff5262',
        data: [
          ...new Set(data.items.map((n) => parseInt(n.person_type_other))),
        ],
      },
      {
        name: "null",
        data: [...new Set(data.items.map((n) => parseInt(n.person_type_null)))],
      },
    ]);
    // console.log(data);
  // };

  const options = {
    chart: {
      type: "column",
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
            stacking: 'percent'
        }
    },
    series: series,
  };


  return (
    <>
      <HighchartsReact
        // allowChartUpdate={this.allowChartUpdate}
        // ref={'chartComponent'}
        highcharts={Highcharts}
        options={options}
      />
    </>
  );
}

export default TestingChart;

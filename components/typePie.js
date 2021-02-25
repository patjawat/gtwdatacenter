import React, { useState, useEffect } from "react";
import { Doughnut, Pie } from "react-chartjs-2";
import Axios from "../axios.config";

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

    const purple_orange_gradient = ctx.createLinearGradient(0, 0, 0, 600);
    purple_orange_gradient.addColorStop(0, "#0c84d1");
    purple_orange_gradient.addColorStop(1, "#4eb4f5");

    const purple_orange_gradient1 = ctx.createLinearGradient(0, 0, 0, 600);
    purple_orange_gradient1.addColorStop(1, "#FDEB71");
    purple_orange_gradient1.addColorStop(0, "#F8D800");

    if (typeSummary === null) return "";
    return {
      labels: ["ข้าราชการ", "อื่นๆ"],
      datasets: [
        {
          label: "My First Dataset",
          data: [typeSummary.type_a.total, typeSummary.type_other_total.total],
          backgroundColor: [
            "rgb(255, 99, 132)",
            "rgb(54, 162, 235)",
            "rgb(255, 205, 86)",
          ],
          hoverOffset: 4,
          options: {
            responsive: true,
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    };
  };

  var options = {
    tooltips: {
      enabled: false,
    },
    plugins: {
      datalabels: {
        formatter: (value, ctx) => {
          let datasets = ctx.chart.data.datasets;
          if (datasets.indexOf(ctx.dataset) === datasets.length - 1) {
            let sum = datasets[0].data.reduce((a, b) => a + b, 0);
            let percentage = Math.round((value / sum) * 100) + "%";
            return percentage;
          } else {
            return percentage;
          }
        },
        color: "#fff",
        font: {
          weight: "bold",
          size: 30,
        },
      },
    },
  };

  return (
    <div className="card pull-up">
            <div className="card-header">
              <h4 className="card-title">ร้อยละบุคคลแยกตามประเภท</h4>
              <a className="heading-elements-toggle">
                <i className="la la-ellipsis-v font-medium-3" />
              </a>
            </div>
            <div className="card-content collapse show pb-3">
        <Doughnut data={dataChart} height={160} options={options} />
      </div>
    </div>
  );
}

import React, { useState, useEffect } from "react";
import NumberFormat from "react-number-format";
import { Doughnut, Pie } from "react-chartjs-2";
import 'chartjs-plugin-labels';

import Axios from "../axios.config";


export default function Index()  {

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

if(typeSummary === null) return '';
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
          options:{
            responsive: true,
            legend: {
              position: "bottom",
            },
          }
        },
      ],
      };
  };

  return (
    <div>
          <Doughnut
            data={dataChart}
            width={400}
            height={330}
            options={{
              plugins: {
                labels: {
                  render: 'percentage',
                  fontSize: 20,
                  fontStyle: 'bold',
                  fontColor: '#fff',
                  fontFamily: '"Lucida Console", Kanit, monospace'
                }
              },
              responsive: true,
              maintainAspectRatio: false,
              cutoutPercentage: 40,
              responsive: true,
              title: {
                text: "ร้อยละบุคคลแยกตามเพศ",
                display:false,
              },
              tooltips: {
                enabled: true,
                callbacks: {
                  label: function (tooltipItem, data) {
                    var dataset = data.datasets[tooltipItem.datasetIndex];
                    var total = dataset.data.reduce(function (previousValue, currentValue, currentIndex, array) {
                      return previousValue + currentValue;
                    });
                    var currentValue = dataset.data[tooltipItem.index];
                    var percentage = Math.floor(((currentValue / total) * 100) + 0.5);
                    return percentage + "%";
                  },                    
                  title: function (tooltipItem, data) {
                    return data.labels[tooltipItem[0].index];
                  },
                },
              },
             
            }}
          />
   
    </div>
  );
}

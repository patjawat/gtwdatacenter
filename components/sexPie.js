import React from "react";
import NumberFormat from "react-number-format";
import { Doughnut, Pie } from "react-chartjs-2";

import {
  useQuery,
  QueryClient,
  QueryClientProvider,
} from "react-query";
import Axios from "../axios.config";

const queryClient = new QueryClient();

export default function Index() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <PieChart />
      </QueryClientProvider>
    </>
  );
}

function PieChart() {
  const { status, data, error, isFetching } = useQuery("todos", async () => {
    const { data } = await Axios.get("datacenter/persons");
    return data;
  });

  if (status === "loading") return <h1>Loading...</h1>;
  if (status === "error") return <span>Error: {error.message}</span>;

  const dataChart = (canvas) => {
    const ctx = canvas.getContext("2d");
    const gradient = ctx.createLinearGradient(0, 0, 100, 0);

    const purple_orange_gradient = ctx.createLinearGradient(0, 0, 0, 600);
    purple_orange_gradient.addColorStop(0, "#0c84d1");
    purple_orange_gradient.addColorStop(1, "#4eb4f5");

    return {
      labels: ["ชาย", "หญิง"],
      datasets: [
        {
          label: "My First Dataset",
          data: [data.sexsummery.m, data.sexsummery.f],
          borderColor: "#fff",
          backgroundColor: [
            "rgb(255, 99, 132)",
            "rgb(54, 162, 235)",
            "rgb(255, 205, 86)",
          ],
          hoverOffset: 4,
        },
      ],
    };
  };

  var options = {
    tooltips: {
      enabled: false
    },
    plugins: {
      datalabels: {
        formatter: (value, ctx) => {
          let datasets = ctx.chart.data.datasets;
          if (datasets.indexOf(ctx.dataset) === datasets.length - 1) {
            let sum = datasets[0].data.reduce((a, b) => a + b, 0);
            let percentage = Math.round((value / sum) * 100) + '%';
            return percentage;
          } else {
            return percentage;
          }
        },
        color: '#fff',
        font: {
          weight: 'bold',
          size: 30,
        }
      },
    }
  };
  
  return (
    <div className="card pull-up">
            <div className="card-header">
              <h4 className="card-title">ร้อยละบุคคลแยกตามเพศ</h4>
              <a className="heading-elements-toggle">
                <i className="la la-ellipsis-v font-medium-3" />
              </a>
            </div>
            <div className="card-content collapse show pb-3">
        <Doughnut
            data={dataChart}
            // width={20}
            height={160}
            options={options}
          />
        </div>
      </div>

  );
}

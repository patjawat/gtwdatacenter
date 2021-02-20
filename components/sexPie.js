import React, { useState, useEffect } from "react";
import NumberFormat from "react-number-format";
import { Doughnut, Pie } from "react-chartjs-2";
import "chartjs-plugin-labels";
import { useSelector } from "react-redux";
import {
  useQuery,
  useQueryClient,
  useMutation,
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
          backgroundColor: [
            "rgb(255, 99, 132)",
            "rgb(54, 162, 235)",
            "rgb(255, 205, 86)",
          ],
          hoverOffset: 4,
          options: [
            {
              responsive: true,
              legend: {
                position: "bottom",
              },
            },
          ],
        },
      ],
    };
  };

  return (
    <div>
      <div className="card pull-up">
        <div className="card-header">
          <a className="heading-elements-toggle">
            <i className="la la-ellipsis-h font-medium-3" />
          </a>
          <div className="heading-elements"></div>
        </div>
        <div className="card-content collapse show">
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
            }}
          />
        </div>
      </div>
    </div>
  );
}

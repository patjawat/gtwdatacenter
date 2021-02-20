import React, { useState, useEffect } from "react";
import NumberFormat from "react-number-format";
import { Doughnut, Pie } from "react-chartjs-2";

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
            // width={400}
            height={230}
            options={{
              responsive: true,
              maintainAspectRatio: false,
              cutoutPercentage: 50,
              responsive: true,
              title: {
                text: "ร้อยละบุคคลแยกตามเพศ",
                display:false,
              },
            }}
          />
   
    </div>
  );
}

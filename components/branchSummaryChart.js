import React, { useState, useEffect } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import { useSelector } from "react-redux";

function ChartSmmery() {

  const store = useSelector((state) => state);

  useEffect(() => {
    
  });

  const data
   = (canvas) => {
    const ctx = canvas.getContext("2d")
    const gradient = ctx.createLinearGradient(0, 0, 100, 0);

    const purple_orange_gradient = ctx.createLinearGradient(0, 0, 0, 600);
    purple_orange_gradient.addColorStop(0, '#17B169');
    purple_orange_gradient.addColorStop(1, '#01BAEF');

    const purple_orange_gradient0 = ctx.createLinearGradient(0, 0, 0, 600);
    purple_orange_gradient0.addColorStop(0, 'orange');
    purple_orange_gradient0.addColorStop(1, 'purple');


    const purple_orange_gradient1 = ctx.createLinearGradient(0, 0, 0, 600);
    purple_orange_gradient1.addColorStop(0, 'orange');
    purple_orange_gradient1.addColorStop(1, 'purple');


    const purple_orange_gradient2 = ctx.createLinearGradient(0, 0, 0, 600);
    purple_orange_gradient2.addColorStop(0, 'mediumorchid');
    purple_orange_gradient2.addColorStop(1, 'blueviolet');

    const purple_orange_gradient3 = ctx.createLinearGradient(0, 0, 0, 600);
    purple_orange_gradient3.addColorStop(0, 'chocolate');
    purple_orange_gradient3.addColorStop(1, 'blueviolet');

    
    if (!store.infomation) return [];
    let datasets = [];
    store.infomation.person.datasets.data.map((item,i) => {
      datasets.push({
        backgroundColor: purple_orange_gradient,
        hoverBackgroundColor: purple_orange_gradient,
        label:item.label,
        data:item.data
      }
      );
    });

    return {
      labels: store.infomation.person.datasets.label,
      datasets:datasets,
      backgroundColor: gradient
    }
  }

  return (
    <div className="p-1">
      <Bar
          data={data}
          width={400}
          height={150}
          options={{
            responsive: true,
            title: { text: "สรุปจำนวนบุคลากร", display: true },
          }}
        />
    </div>
  );
}

export default ChartSmmery;
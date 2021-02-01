import React, { useState, useEffect } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import { useSelector } from "react-redux";

import Axios from '../axios.config'
import axios from 'axios'


function ChartSmmery() {

  const [chartData, setChartData] = useState({});
  // const [chartData, setChartData] = useState({});

  const store = useSelector((state) => state);

  useEffect(() => {

    // loadData()
    chart()
  });

  // if (!store.infomation) return 'loadData'



  const chart = async () => {
// const num = [3, 8, 11, 7, 5];
// const num2x = num.map((n) => n * 2);
// console.log(num2x); // [6, 16, 22, 14, 10]


const {data:{person}} = await  Axios.get('datacenter');

person.datasets.label.map((item,i) =>{
//   // const num2x = item.map((n) => n.total );
//   datas = [...datas, item.map((store.infomation.person.datasetsn) => n.total )];
//   // datas2.push(item.map((n) => n.total ))
//   datas2.push({
//     // label: item[0].HR_PERSON_TYPE_NAME,
//     // [...new Set(myString)]
    
//     label: [...new Set(item.map((n) => n.HR_PERSON_TYPE_NAME))],
//     data:item.map((n) => n.total )
  })

 setChartData({
          labels: person.datasets.label,
          datasets: person.datasets.data
        });


  };

  async function loadData() {


  }

  const data1
   = (canvas) => {
    const ctx = canvas.getContext("2d")
    const gradient = ctx.createLinearGradient(0, 0, 100, 0);
    const purple_orange_gradient1 = ctx.createLinearGradient(0, 0, 0, 600);
    purple_orange_gradient1.addColorStop(0, 'orange');
    purple_orange_gradient1.addColorStop(1, 'purple');

    const purple_orange_gradient2 = ctx.createLinearGradient(0, 0, 0, 600);
    purple_orange_gradient2.addColorStop(0, 'mediumorchid');
    purple_orange_gradient2.addColorStop(1, 'blueviolet');

    const purple_orange_gradient3 = ctx.createLinearGradient(0, 0, 0, 600);
    purple_orange_gradient3.addColorStop(0, 'chocolate');
    purple_orange_gradient3.addColorStop(1, 'blueviolet');


    let datasets = [];

    store.infomation.person.datasets.data.map((item,i) => {


    });


    return {
      labels: store.infomation.person.datasets.label,
      datasets: [
        {
          label: 'ข้าราชการ',
          borderWidth: 1,
          backgroundColor: purple_orange_gradient1,
          hoverBackgroundColor: purple_orange_gradient1,
          hoverBorderWidth: 2,
          hoverBorderColor: 'purple',
          data: [65, 59, 80]
        },
   
      ],
      backgroundColor: gradient

    }
    // return chartData;
  }


  return (
    <div className="p-1">
         <p className="btn btn-primary" onClick={() => {
        chart()
      }}>Load Chartxx</p>
      {/* <div><pre>{JSON.stringify(store.infomation.person.datasets, null, 2) }</pre></div> */}

      <Bar
          data={chartData}
          
          width={400}
        height={200}
          options={{
            responsive: true,
            title: { text: "THICCNESS SCALE", display: true },
            // scales: {
            //   yAxes: [
            //     {
            //       ticks: {
            //         autoSkip: true,
            //         maxTicksLimit: 10,
            //         beginAtZero: true
            //       },
            //       gridLines: {
            //         display: false
            //       }
            //     }
            //   ],
            //   xAxes: [
            //     {
            //       gridLines: {
            //         display: false
            //       }
            //     }
            //   ]
            // }
          }}
        />
  
      {/* <Bar
        data={data2}
        width={400}
        height={200}
        options={{
          maintainAspectRatio: false
        }}
      /> */}
      {/* {JSON.stringify(data2)} */}
   
      <p className="btn btn-danger" onClick={() => {
        setChartData({})

      }}>Clear</p>

      {/* {chartData.map((n, index) => {
        return <Bar width={400} height={200} key={index} data={n} />;
      })} */}

    </div>
  );
}

export default ChartSmmery;
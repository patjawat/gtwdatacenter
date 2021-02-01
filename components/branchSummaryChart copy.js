import React, { useState, useEffect } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import { useSelector } from "react-redux";

import Axios from '../axios.config'
import axios from 'axios'


function ChartSmmery() {
  const [dataset, setDataset] = useState([]);


  const [chartData, setChartData] = useState({});
  const [employeeSalary, setEmployeeSalary] = useState([]);
  const [employeeAge, setEmployeeAge] = useState([]);


  const store = useSelector((state) => state);

  useEffect(() => {

    loadData()
  });

  if (!store.infomation) return 'loadData'



  const chart = async () => {
    let empSal = [];
    let empAge = [];
    let empLabel = [];
    let empDataset = [];


    let total = [];

// const num = [3, 8, 11, 7, 5];
// const num2x = num.map((n) => n * 2);
// console.log(num2x); // [6, 16, 22, 14, 10]


const {data:{person}} = await  Axios.get('datacenter');
const items = person.datasets.data;
// console.log(person.datasets)
let datas = [];
let labels = [];
person.datasets.data.map((item,i) =>{
  // const num2x = item.map((n) => n.total );
  datas = [...datas, item.map((n) => n.total )];
  // labels = [...labels,item.label];

  // console.log(item[i] ? item[i].HR_PERSON_TYPE_NAME : null)
  
})
 setChartData({
          labels: person.datasets.label,
          datasets:datas
          // datasets: [
          //   {
          //     label: "level of thiccness",
          //     data: empSal,
          //     backgroundColor: ["rgba(75, 192, 192, 0.6)"],
          //     borderWidth: 4
          //   }
          // ]
        });
console.log(chartData)


//     Axios.get('datacenter')
//     .then(res => {
//       const data = res.data.person;
// console.log(data.datasets.data)
      // data.map((item, i) => {
      //   console.log(item)
      // })

      // res.data.person.data.map(function(item, i){
      //   console.log('test');
      //   <li>Test</li>
      // })
      
      // console.log(res.data.person)

        // console.log(res.data.person.datasets.data);
        // for (const dataObj of res.data.person.datasets.data) {
        //   // console.log(dataObj.HR_PERSON_TYPE_NAME)
        //   // empLabel.push(parseInt(dataObj.HR_PERSON_TYPE_NAME));
        //   // console.log(dataObj)
        //   console.log(dataObj.HR_PERSON_TYPE_NAME);
        //   empLabel.push(dataObj.HOS_NAME);
        //   empSal.push(dataObj.total);
        //   empDataset.push( {
        //     label: dataObj.HR_PERSON_TYPE_NAME,
        //     // label: dataObj[0],
        //     borderWidth: 1,
        //     // backgroundColor: purple_orange_gradient1,
        //     // hoverBackgroundColor: purple_orange_gradient1,
        //     hoverBorderWidth: 2,
        //     hoverBorderColor: 'purple',
        //     data: empSal
        //   },);


        //   // dataObj.total.map((val, key) => {
        //   //   console.log(val)
        //   // })
        //   // console.log(dataObj.total)
        //   // empAge.push(parseInt(dataObj.employee_age));
        //   // console.log(dataObj)
        // }
        
        // console.log(res.data.person.datasets.label)
        // setChartData({
        //   labels: res.data.person.datasets.label,
        //   datasets:empDataset
        //   // datasets: [
        //   //   {
        //   //     label: "level of thiccness",
        //   //     data: empSal,
        //   //     backgroundColor: ["rgba(75, 192, 192, 0.6)"],
        //   //     borderWidth: 4
        //   //   }
        //   // ]
        // });
        // console.log(total)

      // })
      // .catch(err => {
      //   console.log(err);
      // });
    // console.log(empSal, empAge);
  };







  async function loadData() {

    // await axios
    //   .get(
    //     "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=2&page=1&sparkline=true"
    //   )
    //   .then(res => {
    //     const x = res.data;
    //     let chartData = [];
    //     x.forEach(element => {
    //       chartData.push({
    //         labels: element.sparkline_in_7d.price,
    //         datasets: [{ data: element.sparkline_in_7d.price }]
    //       });
    //     });
    //     setChartData(chartData)
    //     console.log(chartData)
    //   });


    const {data} = await  Axios.get('datacenter');
    
    // const x = data.person.datasets.data;
    // const setData = [];
    // x.map(function(item, i){
    //   // console.log(item[0].HOS_NAME);
    //    setData.push({
    //           labels: item[0].HR_PERSON_TYPE_NAME,
    //           data: item.map((subset, i) =>subset.total)
    //         });
    // })
    // setChartData(setData)
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

    return {
      labels: store.infomation.person.datasets.label,
      datasets: [
        {
          label: 'My First dataset',
          borderWidth: 1,
          backgroundColor: purple_orange_gradient1,
          hoverBackgroundColor: purple_orange_gradient1,
          hoverBorderWidth: 2,
          hoverBorderColor: 'purple',
          data: [65, 59, 80, 34]
        },
        {
          label: 'My Data2',
          borderWidth: 1,
          backgroundColor: purple_orange_gradient2,
          hoverBackgroundColor: purple_orange_gradient2,
          hoverBorderWidth: 2,
          hoverBorderColor: 'purple',
          data: [61, 15, 80, 81]
        }
      ],
      backgroundColor: gradient

    }
    // return chartData;
  }


  const data2 = {

      labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
      datasets: [
        {
          label: "# of Votes",
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            "Red",
            "Blue",
            "Yellow",
            "Green",
            "Purple",
            "Orange"
          ],
          borderColor: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
          borderWidth: 1
        }
      ]

  }

  return (
    <div className="p-1">
         <p className="btn btn-primary" onClick={() => {
        // loadData()
        chart()
      }}>Load Chartxx</p>
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
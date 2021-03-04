import React from 'react'
import { Bar, Pie } from "react-chartjs-2";

export default function BarChartSummery(props) {
  const {dataChart} = props

  var options = {
    responsive: true,
    layout: {
      padding: {
        left: -280,
        
      }
    },
    legend: {
        position: 'top',
        display: true,

    },
    hover: {
      "animationDuration": 0
    },
    plugins: {
      datalabels: {
        color: 'black',
        anchor: 'end',
        offset: 1,
        padding: 0,
        align: function(context) {
          // return context.dataset.data[context.dataIndex] > 12 ? 'end' : 'start';
          return 'end';
        },
        // color: function(context) {
        //   return context.dataset.data[context.dataIndex] < 15 ? 'black' : 'white';
        // }
      }
    },
    
    title: {
        display: false,
        text: ''
    },
    onClick: (e, item) => {
      // console.log(`Item with text ${item[0]._index} and index ${item[0]._datasetIndex} clicked`);
      console.log(item)
  }

  };



    return (
        <div>
          <h1>XXX</h1>
                 <Bar
                        data={dataChart}
                        height={100}
                        options={options}
                      />

        </div>
    )
}

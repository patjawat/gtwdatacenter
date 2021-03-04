import React,{useState, useEffect} from 'react'
import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

  import Axios from "../../axios.config";
  

  export default function Index() {
   
    const [dataChart,setDataChart] = useState({});
    
    const chartOptions = {
        xAxis: {
                categories: ['A', 'B', 'C'],
              },
              title: {
                text: 'My chart'
            },
            series: [
                    { 
                          type: 'bar',
                        data:[data.male, data.female,data.nottype],
                    }
                  ],
                  plotOptions: {
                    series: {
                      point: {
                        events: {
                        //   mouseOver: this.setHoverData.bind(this)
                        }
                      }
                    }
                  }
                },
               
              
    
                    // To avoid unnecessary update keep all options in the state.
                    // const chartOptions = {
                    //   xAxis: {
                    //     categories: ['A', 'B', 'C'],
                    //   },
                    //   title: {
                    //     text: 'My chart'
                    // },
                    // series: [
                    //     { 
                    //           type: 'bar',
                    //         data:[data.male, data.female,data.nottype],
                    //     }
                    //   ],
                    //   plotOptions: {
                    //     series: {
                    //       point: {
                    //         events: {
                    //         //   mouseOver: this.setHoverData.bind(this)
                    //         }
                    //       }
                    //     }
                    //   }
                    // },
                    // hoverData: null
                //   }
        
        

    // const dataChart = (canvas) => {
    //   const ctx = canvas.getContext("2d");
    //   const gradient = ctx.createLinearGradient(0, 0, 100, 0);
  
    //   const purple_orange_gradient = ctx.createLinearGradient(0, 0, 0, 600);
    //   purple_orange_gradient.addColorStop(0, "#0c84d1");
    //   purple_orange_gradient.addColorStop(1, "#4eb4f5");
  
    //   return {
    //     labels: ["ชาย "+data.male+" คน", "หญิง "+data.female+" คน","ไม่ระบุ "+data.nottype+" คน"],
    //     datasets: [
    //       {
    //         label: "My First Dataset",
    //         data: [data.male, data.female,data.nottype],
    //         borderColor: "#fff",
    //         backgroundColor: [
    //           "rgb(255, 99, 132)",
    //           "rgb(54, 162, 235)",
    //           "rgb(255, 205, 86)",
    //         ],
    //         hoverOffset: 4,
    //       },
    //     ],
    //   };
    // };
  
    // var options = {
    //   tooltips: {
    //     enabled: false
    //   },
    //   plugins: {
    //     datalabels: {
    //       formatter: (value, ctx) => {
    //         let datasets = ctx.chart.data.datasets;
    //         if (datasets.indexOf(ctx.dataset) === datasets.length - 1) {
    //           let sum = datasets[0].data.reduce((a, b) => a + b, 0);
    //           let percentage = Math.round((value / sum) * 100) + '%';
    //           return percentage;
    //         } else {
    //           return percentage;
    //         }
    //       },
    //       color: '#fff',
    //       font: {
    //         weight: 'bold',
    //         size: 30,
    //       }
    //     },
    //   }
    // };
    
    return (
      <div className="card pull-up">
              <div className="card-header">
                <h4 className="card-title">ร้อยละบุคคลแยกตามเพศ</h4>
                <a className="heading-elements-toggle">
                  <i className="la la-ellipsis-v font-medium-3" />
                </a>
              </div>
              <div className="card-content collapse show pb-3">
          {/* <Doughnut
              data={dataChart}
              // width={20}
              height={160}
              options={options}
            /> */}
           <HighchartsReact
           highcharts={Highcharts}
           options={dataChart.chartOptions}
         /> 
          </div>
        </div>
  
    );
  }


// export default function Index() {

//     const [dataChart,setDataChart] = useState(
//         {
//             // To avoid unnecessary update keep all options in the state.
//             chartOptions: {
//               xAxis: {
//                 categories: ['A', 'B', 'C'],
//               },
//               title: {
//                 text: 'My chart'
//             },
//             series: [
//                 { 
//                       type: 'bar',
//                     data: [1, 2, 3] 
//                 }
//               ],
//               plotOptions: {
//                 series: {
//                   point: {
//                     events: {
//                     //   mouseOver: this.setHoverData.bind(this)
//                     }
//                   }
//                 }
//               }
//             },
//             hoverData: null
//           }

//     )


//     return (
//         <div>
//             dex
//             <HighchartsReact
//           highcharts={Highcharts}
//           options={dataChart.chartOptions}
//         />
//         </div>
//     )
// }
}

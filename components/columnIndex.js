import React,{useState, useEffect} from 'react'
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';
import Drilldown from 'highcharts-drilldown';


export default function Index() {
    Drilldown(Highcharts);
    const [chartOptions,setChartOptions] = useState({});

    useEffect(() =>{
        getChart()
    },[]);

    function getChart(){
        setChartOptions({
                chart: {
                  type: 'column'
                },
                title: {
                  text: 'Basic drilldown'
                },
                xAxis: {
                  type: 'category'
                },
        
                legend: {
                  enabled: true
                },
        
                plotOptions: {
                  series: {
                    borderWidth: 0,
                    dataLabels: {
                      enabled: true,
                    }
                  }
                },
        
                series: [
                  {
                    "name": "soles",
                    "data": [
                      {
                        "name": 2010,
                        "y": 35,
                        "drilldown": "soles2010"
                      },
                      {
                        "name": 2011,
                        "y": 47,
                        "drilldown": "soles2011"
                      },
                      {
                        "name": 2019,
                        "y": 776,
                        "drilldown": "soles2019"
                      },
                      {
                        "name": 2020,
                        "y": 838,
                        "drilldown": "soles2020"
                      },
                      {
                        "name": 2021,
                        "y": 0,
                        "drilldown": "soles2021"
                      },
                      {
                        "name": 2023,
                        "y": 0,
                        "drilldown": "soles2023"
                      }
                    ]
                  },
                  {
                    "name": "dolares",
                    "data": [
                      {
                        "name": 2010,
                        "y": 0,
                        "drilldown": "dolares2010"
                      },
                      {
                        "name": 2011,
                        "y": 0,
                        "drilldown": "dolares2011"
                      },
                      {
                        "name": 2019,
                        "y": 416,
                        "drilldown": "dolares2019"
                      },
                      {
                        "name": 2020,
                        "y": 7404,
                        "drilldown": "dolares2020"
                      },
                      {
                        "name": 2021,
                        "y": 0,
                        "drilldown": "dolares2021"
                      },
                      {
                        "name": 2023,
                        "y": 0,
                        "drilldown": "dolares2023"
                      }
                    ]
                  }
                ],
                drilldown: {
                  "allowPointDrilldown": false,
                  "series": [
                    {
                      "id": "soles2010819",
                      "name": "soles2010819",
                      "data": [
                        {
                          "name": "OTROS",
                          "y": 35,
                          "drilldown": "soles2010819OTROS"
                        }
                      ]
                    },
                    {
                      "id": "dolares2010819",
                      "name": "dolares2010819",
                      "data": [
                        {
                          "name": "OTROS",
                          "y": 0,
                          "drilldown": "dolares2010819OTROS"
                        }
                      ]
                    },
                    {
                      "id": "soles20108",
                      "name": "soles20108",
                      "data": [
                        {
                          "name": 19,
                          "y": 35,
                          "drilldown": "soles2010819"
                        }
                      ]
                    },
                    {
                      "id": "dolares20108",
                      "name": "dolares20108",
                      "data": [
                        {
                          "name": 19,
                          "y": 0,
                          "drilldown": "dolares2010819"
                        }
                      ]
                    },
                    {
                      "id": "soles2010",
                      "name": "soles2010",
                      "data": [
                        {
                          "name": "Agosto",
                          "y": 35,
                          "drilldown": "soles20108"
                        }
                      ]
                    },
                    {
                      "id": "dolares2010",
                      "name": "dolares2010",
                      "data": [
                        {
                          "name": "Agosto",
                          "y": 0,
                          "drilldown": "dolares20108"
                        }
                      ]
                    },
                    {
                      "id": "soles2011819",
                      "name": "soles2011819",
                      "data": [
                        {
                          "name": "OTROS",
                          "y": 47,
                          "drilldown": "soles2011819OTROS"
                        }
                      ]
                    },
                    {
                      "id": "dolares2011819",
                      "name": "dolares2011819",
                      "data": [
                        {
                          "name": "OTROS",
                          "y": 0,
                          "drilldown": "dolares2011819OTROS"
                        }
                      ]
                    },
                    {
                      "id": "soles20118",
                      "name": "soles20118",
                      "data": [
                        {
                          "name": 19,
                          "y": 47,
                          "drilldown": "soles2011819"
                        }
                      ]
                    },
                    {
                      "id": "dolares20118",
                      "name": "dolares20118",
                      "data": [
                        {
                          "name": 19,
                          "y": 0,
                          "drilldown": "dolares2011819"
                        }
                      ]
                    },
                    {
                      "id": "soles2011",
                      "name": "soles2011",
                      "data": [
                        {
                          "name": "Agosto",
                          "y": 47,
                          "drilldown": "soles20118"
                        }
                      ]
                    },
                    {
                      "id": "dolares2011",
                      "name": "dolares2011",
                      "data": [
                        {
                          "name": "Agosto",
                          "y": 0,
                          "drilldown": "dolares20118"
                        }
                      ]
                    },
                    {
                      "id": "soles2019617",
                      "name": "soles2019617",
                      "data": [
                        {
                          "name": "OTROS",
                          "y": 250,
                          "drilldown": "soles2019617OTROS"
                        }
                      ]
                    },
                    {
                      "id": "dolares2019617",
                      "name": "dolares2019617",
                      "data": [
                        {
                          "name": "OTROS",
                          "y": 0,
                          "drilldown": "dolares2019617OTROS"
                        }
                      ]
                    },
                    {
                      "id": "soles2019619",
                      "name": "soles2019619",
                      "data": [
                        {
                          "name": "OTROS",
                          "y": 135,
                          "drilldown": "soles2019619OTROS"
                        }
                      ]
                    },
                    {
                      "id": "dolares2019619",
                      "name": "dolares2019619",
                      "data": [
                        {
                          "name": "OTROS",
                          "y": 0,
                          "drilldown": "dolares2019619OTROS"
                        }
                      ]
                    },
                    {
                      "id": "soles2019620",
                      "name": "soles2019620",
                      "data": [
                        {
                          "name": "OTROS",
                          "y": 70,
                          "drilldown": "soles2019620OTROS"
                        }
                      ]
                    },
                    {
                      "id": "dolares2019620",
                      "name": "dolares2019620",
                      "data": [
                        {
                          "name": "OTROS",
                          "y": 0,
                          "drilldown": "dolares2019620OTROS"
                        }
                      ]
                    },
                    {
                      "id": "soles2019621",
                      "name": "soles2019621",
                      "data": [
                        {
                          "name": "OTROS",
                          "y": 43,
                          "drilldown": "soles2019621OTROS"
                        }
                      ]
                    },
                    {
                      "id": "dolares2019621",
                      "name": "dolares2019621",
                      "data": [
                        {
                          "name": "OTROS",
                          "y": 0,
                          "drilldown": "dolares2019621OTROS"
                        }
                      ]
                    },
                    {
                      "id": "soles20196",
                      "name": "soles20196",
                      "data": [
                        {
                          "name": 17,
                          "y": 250,
                          "drilldown": "soles2019617"
                        },
                        {
                          "name": 19,
                          "y": 135,
                          "drilldown": "soles2019619"
                        },
                        {
                          "name": 20,
                          "y": 70,
                          "drilldown": "soles2019620"
                        },
                        {
                          "name": 21,
                          "y": 43,
                          "drilldown": "soles2019621"
                        }
                      ]
                    },
                    {
                      "id": "dolares20196",
                      "name": "dolares20196",
                      "data": [
                        {
                          "name": 17,
                          "y": 0,
                          "drilldown": "dolares2019617"
                        },
                        {
                          "name": 19,
                          "y": 0,
                          "drilldown": "dolares2019619"
                        },
                        {
                          "name": 20,
                          "y": 0,
                          "drilldown": "dolares2019620"
                        },
                        {
                          "name": 21,
                          "y": 0,
                          "drilldown": "dolares2019621"
                        }
                      ]
                    },
                    {
                      "id": "soles201975",
                      "name": "soles201975",
                      "data": [
                        {
                          "name": "OTROS",
                          "y": 75,
                          "drilldown": "soles201975OTROS"
                        }
                      ]
                    },
                    {
                      "id": "dolares201975",
                      "name": "dolares201975",
                      "data": [
                        {
                          "name": "OTROS",
                          "y": 0,
                          "drilldown": "dolares201975OTROS"
                        }
                      ]
                    },
                    {
                      "id": "soles201976",
                      "name": "soles201976",
                      "data": [
                        {
                          "name": "OTROS",
                          "y": 0,
                          "drilldown": "soles201976OTROS"
                        }
                      ]
                    },
                    {
                      "id": "dolares201976",
                      "name": "dolares201976",
                      "data": [
                        {
                          "name": "OTROS",
                          "y": 0,
                          "drilldown": "dolares201976OTROS"
                        }
                      ]
                    },
                    {
                      "id": "soles201977",
                      "name": "soles201977",
                      "data": [
                        {
                          "name": "OTROS",
                          "y": 0,
                          "drilldown": "soles201977OTROS"
                        }
                      ]
                    },
                    {
                      "id": "dolares201977",
                      "name": "dolares201977",
                      "data": [
                        {
                          "name": "OTROS",
                          "y": 0,
                          "drilldown": "dolares201977OTROS"
                        }
                      ]
                    },
                    {
                      "id": "soles2019710",
                      "name": "soles2019710",
                      "data": [
                        {
                          "name": "OTROS",
                          "y": 12,
                          "drilldown": "soles2019710OTROS"
                        },
                        {
                          "name": "TRASLADO DEL TERMINAL DE BUS A HOTEL EN EL CENTRO",
                          "y": 0,
                          "drilldown": "soles2019710TRASLADO DEL TERMINAL DE BUS A HOTEL EN EL CENTRO"
                        },
                        {
                          "name": "TRASLADO DEL AEROPUERTO RUTA SILLUSTANI A HOTEL EN EL CENTRO",
                          "y": 0,
                          "drilldown": "soles2019710TRASLADO DEL AEROPUERTO RUTA SILLUSTANI A HOTEL EN EL CENTRO"
                        }
                      ]
                    },
                    {
                      "id": "dolares2019710",
                      "name": "dolares2019710",
                      "data": [
                        {
                          "name": "OTROS",
                          "y": 0,
                          "drilldown": "dolares2019710OTROS"
                        },
                        {
                          "name": "TRASLADO DEL TERMINAL DE BUS A HOTEL EN EL CENTRO",
                          "y": 0,
                          "drilldown": "dolares2019710TRASLADO DEL TERMINAL DE BUS A HOTEL EN EL CENTRO"
                        },
                        {
                          "name": "TRASLADO DEL AEROPUERTO RUTA SILLUSTANI A HOTEL EN EL CENTRO",
                          "y": 0,
                          "drilldown": "dolares2019710TRASLADO DEL AEROPUERTO RUTA SILLUSTANI A HOTEL EN EL CENTRO"
                        }
                      ]
                    },
                    {
                      "id": "soles2019711",
                      "name": "soles2019711",
                      "data": [
                        {
                          "name": "OTROS",
                          "y": 101,
                          "drilldown": "soles2019711OTROS"
                        }
                      ]
                    },
                    {
                      "id": "dolares2019711",
                      "name": "dolares2019711",
                      "data": [
                        {
                          "name": "OTROS",
                          "y": 0,
                          "drilldown": "dolares2019711OTROS"
                        }
                      ]
                    },
                    {
                      "id": "soles2019715",
                      "name": "soles2019715",
                      "data": [
                        {
                          "name": "OTROS",
                          "y": null,
                          "drilldown": "soles2019715OTROS"
                        }
                      ]
                    },
                    {
                      "id": "dolares2019715",
                      "name": "dolares2019715",
                      "data": [
                        {
                          "name": "OTROS",
                          "y": null,
                          "drilldown": "dolares2019715OTROS"
                        }
                      ]
                    },
                    {
                      "id": "soles2019716",
                      "name": "soles2019716",
                      "data": [
                        {
                          "name": "OTROS",
                          "y": null,
                          "drilldown": "soles2019716OTROS"
                        }
                      ]
                    },
                    {
                      "id": "dolares2019716",
                      "name": "dolares2019716",
                      "data": [
                        {
                          "name": "OTROS",
                          "y": null,
                          "drilldown": "dolares2019716OTROS"
                        }
                      ]
                    },
                    {
                      "id": "soles2019718",
                      "name": "soles2019718",
                      "data": [
                        {
                          "name": "OTROS",
                          "y": null,
                          "drilldown": "soles2019718OTROS"
                        }
                      ]
                    },
                    {
                      "id": "dolares2019718",
                      "name": "dolares2019718",
                      "data": [
                        {
                          "name": "OTROS",
                          "y": null,
                          "drilldown": "dolares2019718OTROS"
                        }
                      ]
                    },
                    {
                      "id": "soles2019723",
                      "name": "soles2019723",
                      "data": [
                        {
                          "name": "OTROS",
                          "y": 0,
                          "drilldown": "soles2019723OTROS"
                        }
                      ]
                    },
                    {
                      "id": "dolares2019723",
                      "name": "dolares2019723",
                      "data": [
                        {
                          "name": "OTROS",
                          "y": 100,
                          "drilldown": "dolares2019723OTROS"
                        }
                      ]
                    },
                    {
                      "id": "soles2019724",
                      "name": "soles2019724",
                      "data": [
                        {
                          "name": "OTROS",
                          "y": 0,
                          "drilldown": "soles2019724OTROS"
                        }
                      ]
                    },
                    {
                      "id": "dolares2019724",
                      "name": "dolares2019724",
                      "data": [
                        {
                          "name": "OTROS",
                          "y": 0,
                          "drilldown": "dolares2019724OTROS"
                        }
                      ]
                    },
                    {
                      "id": "soles20197",
                      "name": "soles20197",
                      "data": [
                        {
                          "name": 5,
                          "y": 75,
                          "drilldown": "soles201975"
                        },
                        {
                          "name": 6,
                          "y": 0,
                          "drilldown": "soles201976"
                        },
                        {
                          "name": 7,
                          "y": 0,
                          "drilldown": "soles201977"
                        },
                        {
                          "name": 10,
                          "y": 12,
                          "drilldown": "soles2019710"
                        },
                        {
                          "name": 11,
                          "y": 101,
                          "drilldown": "soles2019711"
                        },
                        {
                          "name": 15,
                          "y": null,
                          "drilldown": "soles2019715"
                        },
                        {
                          "name": 16,
                          "y": null,
                          "drilldown": "soles2019716"
                        },
                        {
                          "name": 18,
                          "y": null,
                          "drilldown": "soles2019718"
                        },
                        {
                          "name": 23,
                          "y": 0,
                          "drilldown": "soles2019723"
                        },
                        {
                          "name": 24,
                          "y": 0,
                          "drilldown": "soles2019724"
                        }
                      ]
                    },
                    {
                      "id": "dolares20197",
                      "name": "dolares20197",
                      "data": [
                        {
                          "name": 5,
                          "y": 0,
                          "drilldown": "dolares201975"
                        },
                        {
                          "name": 6,
                          "y": 0,
                          "drilldown": "dolares201976"
                        },
                        {
                          "name": 7,
                          "y": 0,
                          "drilldown": "dolares201977"
                        },
                        {
                          "name": 10,
                          "y": 0,
                          "drilldown": "dolares2019710"
                        },
                        {
                          "name": 11,
                          "y": 0,
                          "drilldown": "dolares2019711"
                        },
                        {
                          "name": 15,
                          "y": null,
                          "drilldown": "dolares2019715"
                        },
                        {
                          "name": 16,
                          "y": null,
                          "drilldown": "dolares2019716"
                        },
                        {
                          "name": 18,
                          "y": null,
                          "drilldown": "dolares2019718"
                        },
                        {
                          "name": 23,
                          "y": 100,
                          "drilldown": "dolares2019723"
                        },
                        {
                          "name": 24,
                          "y": 0,
                          "drilldown": "dolares2019724"
                        }
                      ]
                    },
                    {
                      "id": "soles2019813",
                      "name": "soles2019813",
                      "data": [
                        {
                          "name": "OTROS",
                          "y": 78,
                          "drilldown": "soles2019813OTROS"
                        }
                      ]
                    },
                    {
                      "id": "dolares2019813",
                      "name": "dolares2019813",
                      "data": [
                        {
                          "name": "OTROS",
                          "y": 0,
                          "drilldown": "dolares2019813OTROS"
                        }
                      ]
                    },
                    {
                      "id": "soles2019824",
                      "name": "soles2019824",
                      "data": [
                        {
                          "name": "OTROS",
                          "y": null,
                          "drilldown": "soles2019824OTROS"
                        }
                      ]
                    },
                    {
                      "id": "dolares2019824",
                      "name": "dolares2019824",
                      "data": [
                        {
                          "name": "OTROS",
                          "y": null,
                          "drilldown": "dolares2019824OTROS"
                        }
                      ]
                    },
                    {
                      "id": "soles20198",
                      "name": "soles20198",
                      "data": [
                        {
                          "name": 13,
                          "y": 78,
                          "drilldown": "soles2019813"
                        },
                        {
                          "name": 24,
                          "y": null,
                          "drilldown": "soles2019824"
                        }
                      ]
                    },
                    {
                      "id": "dolares20198",
                      "name": "dolares20198",
                      "data": [
                        {
                          "name": 13,
                          "y": 0,
                          "drilldown": "dolares2019813"
                        },
                        {
                          "name": 24,
                          "y": null,
                          "drilldown": "dolares2019824"
                        }
                      ]
                    },
                    {
                      "id": "soles201996",
                      "name": "soles201996",
                      "data": [
                        {
                          "name": "OTROS",
                          "y": 12,
                          "drilldown": "soles201996OTROS"
                        }
                      ]
                    },
                    {
                      "id": "dolares201996",
                      "name": "dolares201996",
                      "data": [
                        {
                          "name": "OTROS",
                          "y": null,
                          "drilldown": "dolares201996OTROS"
                        }
                      ]
                    },
                    {
                      "id": "soles201997",
                      "name": "soles201997",
                      "data": [
                        {
                          "name": "OTROS",
                          "y": null,
                          "drilldown": "soles201997OTROS"
                        }
                      ]
                    },
                    {
                      "id": "dolares201997",
                      "name": "dolares201997",
                      "data": [
                        {
                          "name": "OTROS",
                          "y": null,
                          "drilldown": "dolares201997OTROS"
                        }
                      ]
                    },
                    {
                      "id": "soles201999",
                      "name": "soles201999",
                      "data": [
                        {
                          "name": "OTROS",
                          "y": 0,
                          "drilldown": "soles201999OTROS"
                        }
                      ]
                    },
                    {
                      "id": "dolares201999",
                      "name": "dolares201999",
                      "data": [
                        {
                          "name": "OTROS",
                          "y": 9,
                          "drilldown": "dolares201999OTROS"
                        }
                      ]
                    },
                    {
                      "id": "soles2019910",
                      "name": "soles2019910",
                      "data": [
                        {
                          "name": "OTROS",
                          "y": 0,
                          "drilldown": "soles2019910OTROS"
                        },
                        {
                          "name": "EXC. UROS",
                          "y": 0,
                          "drilldown": "soles2019910EXC. UROS"
                        }
                      ]
                    },
                    {
                      "id": "dolares2019910",
                      "name": "dolares2019910",
                      "data": [
                        {
                          "name": "OTROS",
                          "y": 72,
                          "drilldown": "dolares2019910OTROS"
                        },
                        {
                          "name": "EXC. UROS",
                          "y": 90,
                          "drilldown": "dolares2019910EXC. UROS"
                        }
                      ]
                    },
                    {
                      "id": "soles2019911",
                      "name": "soles2019911",
                      "data": [
                        {
                          "name": "TRASLADO DEL AEROPUERTO RUTA SILLUSTANI A HOTEL EN EL CENTRO",
                          "y": 0,
                          "drilldown": "soles2019911TRASLADO DEL AEROPUERTO RUTA SILLUSTANI A HOTEL EN EL CENTRO"
                        }
                      ]
                    },
                    {
                      "id": "dolares2019911",
                      "name": "dolares2019911",
                      "data": [
                        {
                          "name": "TRASLADO DEL AEROPUERTO RUTA SILLUSTANI A HOTEL EN EL CENTRO",
                          "y": 145,
                          "drilldown": "dolares2019911TRASLADO DEL AEROPUERTO RUTA SILLUSTANI A HOTEL EN EL CENTRO"
                        }
                      ]
                    },
                    {
                      "id": "soles20199",
                      "name": "soles20199",
                      "data": [
                        {
                          "name": 6,
                          "y": 12,
                          "drilldown": "soles201996"
                        },
                        {
                          "name": 7,
                          "y": null,
                          "drilldown": "soles201997"
                        },
                        {
                          "name": 9,
                          "y": 0,
                          "drilldown": "soles201999"
                        },
                        {
                          "name": 10,
                          "y": 0,
                          "drilldown": "soles2019910"
                        },
                        {
                          "name": 11,
                          "y": 0,
                          "drilldown": "soles2019911"
                        }
                      ]
                    },
                    {
                      "id": "dolares20199",
                      "name": "dolares20199",
                      "data": [
                        {
                          "name": 6,
                          "y": null,
                          "drilldown": "dolares201996"
                        },
                        {
                          "name": 7,
                          "y": null,
                          "drilldown": "dolares201997"
                        },
                        {
                          "name": 9,
                          "y": 9,
                          "drilldown": "dolares201999"
                        },
                        {
                          "name": 10,
                          "y": 162,
                          "drilldown": "dolares2019910"
                        },
                        {
                          "name": 11,
                          "y": 145,
                          "drilldown": "dolares2019911"
                        }
                      ]
                    },
                    {
                      "id": "soles2019",
                      "name": "soles2019",
                      "data": [
                        {
                          "name": "Junio",
                          "y": 498,
                          "drilldown": "soles20196"
                        },
                        {
                          "name": "Julio",
                          "y": 188,
                          "drilldown": "soles20197"
                        },
                        {
                          "name": "Agosto",
                          "y": 78,
                          "drilldown": "soles20198"
                        },
                        {
                          "name": "Setiembre",
                          "y": 12,
                          "drilldown": "soles20199"
                        }
                      ]
                    },
                    {
                      "id": "dolares2019",
                      "name": "dolares2019",
                      "data": [
                        {
                          "name": "Junio",
                          "y": 0,
                          "drilldown": "dolares20196"
                        },
                        {
                          "name": "Julio",
                          "y": 100,
                          "drilldown": "dolares20197"
                        },
                        {
                          "name": "Agosto",
                          "y": 0,
                          "drilldown": "dolares20198"
                        },
                        {
                          "name": "Setiembre",
                          "y": 316,
                          "drilldown": "dolares20199"
                        }
                      ]
                    },
                    {
                      "id": "soles202011",
                      "name": "soles202011",
                      "data": [
                        {
                          "name": "OTROS",
                          "y": 0,
                          "drilldown": "soles202011OTROS"
                        }
                      ]
                    },
                    {
                      "id": "dolares202011",
                      "name": "dolares202011",
                      "data": [
                        {
                          "name": "OTROS",
                          "y": 0,
                          "drilldown": "dolares202011OTROS"
                        }
                      ]
                    },
                    {
                      "id": "soles202012",
                      "name": "soles202012",
                      "data": [
                        {
                          "name": "OTROS",
                          "y": 0,
                          "drilldown": "soles202012OTROS"
                        }
                      ]
                    },
                    {
                      "id": "dolares202012",
                      "name": "dolares202012",
                      "data": [
                        {
                          "name": "OTROS",
                          "y": 0,
                          "drilldown": "dolares202012OTROS"
                        }
                      ]
                    },
                    {
                      "id": "soles20201",
                      "name": "soles20201",
                      "data": [
                        {
                          "name": 1,
                          "y": 0,
                          "drilldown": "soles202011"
                        },
                        {
                          "name": 2,
                          "y": 0,
                          "drilldown": "soles202012"
                        }
                      ]
                    },
                    {
                      "id": "dolares20201",
                      "name": "dolares20201",
                      "data": [
                        {
                          "name": 1,
                          "y": 0,
                          "drilldown": "dolares202011"
                        },
                        {
                          "name": 2,
                          "y": 0,
                          "drilldown": "dolares202012"
                        }
                      ]
                    },
                    {
                      "id": "soles202092",
                      "name": "soles202092",
                      "data": [
                        {
                          "name": "OTROS",
                          "y": 492,
                          "drilldown": "soles202092OTROS"
                        }
                      ]
                    },
                    {
                      "id": "dolares202092",
                      "name": "dolares202092",
                      "data": [
                        {
                          "name": "OTROS",
                          "y": 4936,
                          "drilldown": "dolares202092OTROS"
                        }
                      ]
                    },
                    {
                      "id": "soles2020922",
                      "name": "soles2020922",
                      "data": [
                        {
                          "name": "OTROS",
                          "y": 246,
                          "drilldown": "soles2020922OTROS"
                        }
                      ]
                    },
                    {
                      "id": "dolares2020922",
                      "name": "dolares2020922",
                      "data": [
                        {
                          "name": "OTROS",
                          "y": 2468,
                          "drilldown": "dolares2020922OTROS"
                        }
                      ]
                    },
                    {
                      "id": "soles20209",
                      "name": "soles20209",
                      "data": [
                        {
                          "name": 2,
                          "y": 492,
                          "drilldown": "soles202092"
                        },
                        {
                          "name": 22,
                          "y": 246,
                          "drilldown": "soles2020922"
                        }
                      ]
                    },
                    {
                      "id": "dolares20209",
                      "name": "dolares20209",
                      "data": [
                        {
                          "name": 2,
                          "y": 4936,
                          "drilldown": "dolares202092"
                        },
                        {
                          "name": 22,
                          "y": 2468,
                          "drilldown": "dolares2020922"
                        }
                      ]
                    },
                    {
                      "id": "soles20201115",
                      "name": "soles20201115",
                      "data": [
                        {
                          "name": "OTROS",
                          "y": 100,
                          "drilldown": "soles20201115OTROS"
                        }
                      ]
                    },
                    {
                      "id": "dolares20201115",
                      "name": "dolares20201115",
                      "data": [
                        {
                          "name": "OTROS",
                          "y": 0,
                          "drilldown": "dolares20201115OTROS"
                        }
                      ]
                    },
                    {
                      "id": "soles20201116",
                      "name": "soles20201116",
                      "data": [
                        {
                          "name": "OTROS",
                          "y": 0,
                          "drilldown": "soles20201116OTROS"
                        }
                      ]
                    },
                    {
                      "id": "dolares20201116",
                      "name": "dolares20201116",
                      "data": [
                        {
                          "name": "OTROS",
                          "y": 0,
                          "drilldown": "dolares20201116OTROS"
                        }
                      ]
                    },
                    {
                      "id": "soles20201117",
                      "name": "soles20201117",
                      "data": [
                        {
                          "name": "OTROS",
                          "y": 0,
                          "drilldown": "soles20201117OTROS"
                        }
                      ]
                    },
                    {
                      "id": "dolares20201117",
                      "name": "dolares20201117",
                      "data": [
                        {
                          "name": "OTROS",
                          "y": 0,
                          "drilldown": "dolares20201117OTROS"
                        }
                      ]
                    },
                    {
                      "id": "soles20201118",
                      "name": "soles20201118",
                      "data": [
                        {
                          "name": "OTROS",
                          "y": 0,
                          "drilldown": "soles20201118OTROS"
                        }
                      ]
                    },
                    {
                      "id": "dolares20201118",
                      "name": "dolares20201118",
                      "data": [
                        {
                          "name": "OTROS",
                          "y": 0,
                          "drilldown": "dolares20201118OTROS"
                        }
                      ]
                    },
                    {
                      "id": "soles202011",
                      "name": "soles202011",
                      "data": [
                        {
                          "name": 15,
                          "y": 100,
                          "drilldown": "soles20201115"
                        },
                        {
                          "name": 16,
                          "y": 0,
                          "drilldown": "soles20201116"
                        },
                        {
                          "name": 17,
                          "y": 0,
                          "drilldown": "soles20201117"
                        },
                        {
                          "name": 18,
                          "y": 0,
                          "drilldown": "soles20201118"
                        }
                      ]
                    },
                    {
                      "id": "dolares202011",
                      "name": "dolares202011",
                      "data": [
                        {
                          "name": 15,
                          "y": 0,
                          "drilldown": "dolares20201115"
                        },
                        {
                          "name": 16,
                          "y": 0,
                          "drilldown": "dolares20201116"
                        },
                        {
                          "name": 17,
                          "y": 0,
                          "drilldown": "dolares20201117"
                        },
                        {
                          "name": 18,
                          "y": 0,
                          "drilldown": "dolares20201118"
                        }
                      ]
                    },
                    {
                      "id": "soles2020",
                      "name": "soles2020",
                      "data": [
                        {
                          "name": "Enero",
                          "y": 0,
                          "drilldown": "soles20201"
                        },
                        {
                          "name": "Setiembre",
                          "y": 738,
                          "drilldown": "soles20209"
                        },
                        {
                          "name": "Noviembre",
                          "y": 100,
                          "drilldown": "soles202011"
                        }
                      ]
                    },
                    {
                      "id": "dolares2020",
                      "name": "dolares2020",
                      "data": [
                        {
                          "name": "Enero",
                          "y": 0,
                          "drilldown": "dolares20201"
                        },
                        {
                          "name": "Setiembre",
                          "y": 7404,
                          "drilldown": "dolares20209"
                        },
                        {
                          "name": "Noviembre",
                          "y": 0,
                          "drilldown": "dolares202011"
                        }
                      ]
                    },
                    {
                      "id": "soles202124",
                      "name": "soles202124",
                      "data": [
                        {
                          "name": "OTROS",
                          "y": 0,
                          "drilldown": "soles202124OTROS"
                        }
                      ]
                    },
                    {
                      "id": "dolares202124",
                      "name": "dolares202124",
                      "data": [
                        {
                          "name": "OTROS",
                          "y": 0,
                          "drilldown": "dolares202124OTROS"
                        }
                      ]
                    },
                    {
                      "id": "soles202125",
                      "name": "soles202125",
                      "data": [
                        {
                          "name": "OTROS",
                          "y": 0,
                          "drilldown": "soles202125OTROS"
                        }
                      ]
                    },
                    {
                      "id": "dolares202125",
                      "name": "dolares202125",
                      "data": [
                        {
                          "name": "OTROS",
                          "y": 0,
                          "drilldown": "dolares202125OTROS"
                        }
                      ]
                    },
                    {
                      "id": "soles202126",
                      "name": "soles202126",
                      "data": [
                        {
                          "name": "OTROS",
                          "y": 0,
                          "drilldown": "soles202126OTROS"
                        }
                      ]
                    },
                    {
                      "id": "dolares202126",
                      "name": "dolares202126",
                      "data": [
                        {
                          "name": "OTROS",
                          "y": 0,
                          "drilldown": "dolares202126OTROS"
                        }
                      ]
                    },
                    {
                      "id": "soles20212",
                      "name": "soles20212",
                      "data": [
                        {
                          "name": 4,
                          "y": 0,
                          "drilldown": "soles202124"
                        },
                        {
                          "name": 5,
                          "y": 0,
                          "drilldown": "soles202125"
                        },
                        {
                          "name": 6,
                          "y": 0,
                          "drilldown": "soles202126"
                        }
                      ]
                    },
                    {
                      "id": "dolares20212",
                      "name": "dolares20212",
                      "data": [
                        {
                          "name": 4,
                          "y": 0,
                          "drilldown": "dolares202124"
                        },
                        {
                          "name": 5,
                          "y": 0,
                          "drilldown": "dolares202125"
                        },
                        {
                          "name": 6,
                          "y": 0,
                          "drilldown": "dolares202126"
                        }
                      ]
                    },
                    {
                      "id": "soles2021",
                      "name": "soles2021",
                      "data": [
                        {
                          "name": "Febrero",
                          "y": 0,
                          "drilldown": "soles20212"
                        }
                      ]
                    },
                    {
                      "id": "dolares2021",
                      "name": "dolares2021",
                      "data": [
                        {
                          "name": "Febrero",
                          "y": 0,
                          "drilldown": "dolares20212"
                        }
                      ]
                    },
                    {
                      "id": "soles202311",
                      "name": "soles202311",
                      "data": [
                        {
                          "name": "OTROS",
                          "y": 0,
                          "drilldown": "soles202311OTROS"
                        }
                      ]
                    },
                    {
                      "id": "dolares202311",
                      "name": "dolares202311",
                      "data": [
                        {
                          "name": "OTROS",
                          "y": 0,
                          "drilldown": "dolares202311OTROS"
                        }
                      ]
                    },
                    {
                      "id": "soles202312",
                      "name": "soles202312",
                      "data": [
                        {
                          "name": "OTROS",
                          "y": 0,
                          "drilldown": "soles202312OTROS"
                        }
                      ]
                    },
                    {
                      "id": "dolares202312",
                      "name": "dolares202312",
                      "data": [
                        {
                          "name": "OTROS",
                          "y": 0,
                          "drilldown": "dolares202312OTROS"
                        }
                      ]
                    },
                    {
                      "id": "soles20231",
                      "name": "soles20231",
                      "data": [
                        {
                          "name": 1,
                          "y": 0,
                          "drilldown": "soles202311"
                        },
                        {
                          "name": 2,
                          "y": 0,
                          "drilldown": "soles202312"
                        }
                      ]
                    },
                    {
                      "id": "dolares20231",
                      "name": "dolares20231",
                      "data": [
                        {
                          "name": 1,
                          "y": 0,
                          "drilldown": "dolares202311"
                        },
                        {
                          "name": 2,
                          "y": 0,
                          "drilldown": "dolares202312"
                        }
                      ]
                    },
                    {
                      "id": "soles202329",
                      "name": "soles202329",
                      "data": [
                        {
                          "name": "OTROS",
                          "y": 0,
                          "drilldown": "soles202329OTROS"
                        }
                      ]
                    },
                    {
                      "id": "dolares202329",
                      "name": "dolares202329",
                      "data": [
                        {
                          "name": "OTROS",
                          "y": 0,
                          "drilldown": "dolares202329OTROS"
                        }
                      ]
                    },
                    {
                      "id": "soles20232",
                      "name": "soles20232",
                      "data": [
                        {
                          "name": 9,
                          "y": 0,
                          "drilldown": "soles202329"
                        }
                      ]
                    },
                    {
                      "id": "dolares20232",
                      "name": "dolares20232",
                      "data": [
                        {
                          "name": 9,
                          "y": 0,
                          "drilldown": "dolares202329"
                        }
                      ]
                    },
                    {
                      "id": "soles2023",
                      "name": "soles2023",
                      "data": [
                        {
                          "name": "Enero",
                          "y": 0,
                          "drilldown": "soles20231"
                        },
                        {
                          "name": "Febrero",
                          "y": 0,
                          "drilldown": "soles20232"
                        }
                      ]
                    },
                    {
                      "id": "dolares2023",
                      "name": "dolares2023",
                      "data": [
                        {
                          "name": "Enero",
                          "y": 0,
                          "drilldown": "dolares20231"
                        },
                        {
                          "name": "Febrero",
                          "y": 0,
                          "drilldown": "dolares20232"
                        }
                      ]
                    }
                  ]
                }
              
            
        })
    }

    return (
        <div>
            ColumnChart
            <HighchartsReact
          highcharts={Highcharts}
          options={chartOptions}
        />
        </div>
    )
}

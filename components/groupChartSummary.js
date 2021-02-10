import React, { useState, useEffect } from "react";
import { Bar, Line } from "react-chartjs-2";
import { useSelector } from "react-redux";
import NumberFormat from 'react-number-format';
import Axios from '../axios.config'
function ChartSmmery(props) {
  const store = useSelector((state) => state.infomation);
  const [provinceSummery, setprovinceSummery] = useState([]);
  const [barchartDataset, setBarchartDataset] = useState([]);
  const [barchartLabel, setBarchartLabel] = useState([]);
  const [personSum, setPersonSum] = useState(0);
  const [assetSum, setAssetnSum] = useState(0);

  useEffect(async () => {
    // await setprovinceSummery(store.provincegroup);
    await getProvincegroup();
  },[]);

  function setProvincegroup(){
    // setPersonSum(barchart.reduce((a,v) =>  a = a + v.data[0] , 0 ))
    // console.log('setsetProvincegroup')
    setprovinceSummery(store ? store.provincegroup : []);


  }


  const getProvincegroup = async () => {
    const {data} = await  Axios.get('datacenter');
    console.log(data.provincegroup);
    // setBarchartLabel([...new Set(data.provincegroup.map((n) => n.name))])
    setBarchartLabel(['ครุภัณฑ์','สิ่งก่อสร้าง'])
    setprovinceSummery(data.provincegroup)
    const datasets = [];
    data.provincegroup.map((item,i) =>{
          datasets.push({
          label:item.name,
          data:[
            item.asset,
            item.asset05,
          ]
        }
      );
    })


    setBarchartDataset(datasets)
    
  }


  const data = (canvas) => {
    const ctx = canvas.getContext("2d");
    const gradient = ctx.createLinearGradient(0, 0, 100, 0);

    const purple_orange_gradient = ctx.createLinearGradient(0, 0, 0, 600);
    purple_orange_gradient.addColorStop(0, "#17B169");
    purple_orange_gradient.addColorStop(1, "#01BAEF");

    const purple_orange_gradient0 = ctx.createLinearGradient(0, 0, 0, 600);
    purple_orange_gradient0.addColorStop(0, "orange");
    purple_orange_gradient0.addColorStop(1, "purple");

    const purple_orange_gradient1 = ctx.createLinearGradient(0, 0, 0, 600);
    purple_orange_gradient1.addColorStop(0, "orange");
    purple_orange_gradient1.addColorStop(1, "purple");

    const purple_orange_gradient2 = ctx.createLinearGradient(0, 0, 0, 600);
    purple_orange_gradient2.addColorStop(0, "mediumorchid");
    purple_orange_gradient2.addColorStop(1, "blueviolet");

    const purple_orange_gradient3 = ctx.createLinearGradient(0, 0, 0, 600);
    purple_orange_gradient3.addColorStop(0, "chocolate");
    purple_orange_gradient3.addColorStop(1, "blueviolet");

    // if (!store) return [];
    // let datasets = [];
    // store.person.datasets.data.map((item,i) => {
    //   datasets.push({
    //     backgroundColor: purple_orange_gradient,
    //     hoverBackgroundColor: purple_orange_gradient,
    //     label:item.label,
    //     data:item.data
    //   }
    //   );
    // });

    // return {
    //   labels: store.person.datasets.label,
    //   datasets:datasets,
    //   backgroundColor: gradient
    // }
    if (!store) return [];
    let datasets = [];
    // setBarchartLabel([...new Set(provinceSummery.map((n) => n.name))])
    store.provincegroup.map((item, i) => {
 
      // datasets.push({
      //   backgroundColor: purple_orange_gradient,
      //   hoverBackgroundColor: purple_orange_gradient,
      //   label:item.label,
      //   data:item.data
      // }
      // );
      let labelset = [];
      // labelset.push(item.name);
      // setBarchartLabel(labelset)
      // console.log(item)
    });


   return  {
      labels: barchartLabel,
      // datasets:provinceSummery
      datasets:[
        {"label":"เชียงใหม่","data":["168","10"]},
        {"label":"ลำปาง","data":["88","30"]},
      ]
      // datasets:[
      //   {
      //     "label":"เชียงใหม่",
      //     "data":["168","0"]
      // },
      // {
      //   "label":"ลำปาง",
      //   "data":["88","0"]
      // },{
      //   "label":"เชียงราย",
      //   "data":["784","0"]
      // },{
      //     "label":"แม่ฮ่องสอน",
      //     "data":["273","0"]
      //   }
      // ]
      // datasets: [
      //     {
      //         label: "ครุภัณฑ์",
      //         fillColor: "blue",
      //         backgroundColor: purple_orange_gradient,
      //         hoverBackgroundColor: purple_orange_gradient,
      //         data: [3,7,4]
      //     },
      //     {
      //         label: "สิ่งก่อสร้าง",
      //         fillColor: "red",
      //         backgroundColor: purple_orange_gradient1,
      //         hoverBackgroundColor: purple_orange_gradient1,
      //         data: [4,13,5]
      //     },
      // ]
  };
  };


  return (
    <div>
      <div className="row match-height">
        <div className="col-xl-8 col-12" id="ecommerceChartView">
          <div className="card card-shadow" style={{ height: 541 }}>
            {/* {JSON.stringify(barchartDataset)} */}
            {JSON.stringify(barchartLabel)}
            <Bar
          data={data}
          width={400}
          height={250}
          options={{
            responsive: true,
            title: { text: "สรุปจำนวนบุคลากรจังหวัดเชียงใหม่", display: true },
          }}
        />
          </div>
        </div>
        <div className="col-xl-4 col-lg-12">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">รายการ</h4>
              <a className="heading-elements-toggle">
                <i className="la la-ellipsis-v font-medium-3" />
              </a>
              <div className="heading-elements">
                <ul className="list-inline mb-0">
                  <li>
                    <a data-action="reload">
                      <i className="ft-rotate-cw" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="card-content">
              <div id="new-orders" className="media-list position-relative ps">
                <div className="table-responsive">
                  
                <table
                    id="new-orders-table"
                    className="table table-hover table-xl mb-0 p-0"
                  >
                    <thead>
                      <tr>
                        <th className="border-top-0">จังหวัด</th>
                        <th className="border-top-0">ครุภัณฑ์</th>
                        <th className="border-top-0">สิ่งก่อสร้าง</th>
                      </tr>
                    </thead>
                    <tbody>
                        {store ? store.provincegroup.map((item, i) => {
                          return (
                            <tr key={i}>
                              <td className="text-truncate" style={{ width: 130 }}>
                                <a onClick={ async () =>{
                                  // setBarchart(item)
                                  const {data} = await  Axios.get('datacenter/groupbyhospcode/',{
                                    params: {
                                      chwpart:item.chwpart
                                    }
                                  });
                                  // setBarchart(data)
                                  setBarchartLabel([...new Set(data.map((n) => n.name))])
                                  //  label: [...new Set(item.map((n) => n.HR_PERSON_TYPE_NAME))],


                                }}>
                                  {item.name}
                                  </a>
                              </td>
                              <td className="text-truncate p-1">{item.person}</td>
                              <td className="text-truncate">{item.asset05}</td>
                            </tr>
                          );
                        }) : []}
                          </tbody>
                        </table>
                  
                </div>
                <div className="ps__rail-x" style={{ left: 0, bottom: 0 }}>
                  <div
                    className="ps__thumb-x"
                    tabIndex={0}
                    style={{ left: 0, width: 0 }}
                  />
                </div>
                <div className="ps__rail-y" style={{ top: 0, right: 0 }}>
                  <div
                    className="ps__thumb-y"
                    tabIndex={0}
                    style={{ top: 0, height: 0 }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChartSmmery;

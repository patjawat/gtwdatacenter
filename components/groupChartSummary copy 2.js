import React, { useState, useEffect } from "react";
import { Bar, Line } from "react-chartjs-2";
import { useSelector } from "react-redux";
import NumberFormat from 'react-number-format';
import Axios from '../axios.config'
function ChartSmmery(props) {
  const store = useSelector((state) => state.infomation);
  const [provinceSummery, setprovinceSummery] = useState([]);
  const [barchart, setBarchart] = useState([]);
  const [barchartLabel, setBarchartLabel] = useState([]);
  const [personSum, setPersonSum] = useState(0);
  const [assetSum, setAssetnSum] = useState(0);

  useEffect(async () => {
    await setprovinceSummery(store ? store.provincegroup : []);
    // await setBarchartLabel(store ? [...new Set(store.provincegroup.map((n) => n.name))] : [])
    // await personSummery()
    // await setPersonSum(store ? (barchart.reduce((a,v) =>  a = a + v.data[0] , 0 )) : 0)
    // console.log([...new Set(provinceSummery.map((n) => n.name))])
  });

  // function personSummery(){
  //   setPersonSum(barchart.reduce((a,v) =>  a = a + v.data[0] , 0 ))

  // }


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

    let datasets = [];
    barchart.map((item,i) => {
      datasets.push({
        backgroundColor: purple_orange_gradient,
        hoverBackgroundColor: purple_orange_gradient,
        label:item.label,
        data:item.data
      }
      );
    });


   return  {
      labels: barchartLabel,
      datasets: [
          {
              label: "ครุภัณฑ์",
              fillColor: "blue",
              backgroundColor: purple_orange_gradient,
              hoverBackgroundColor: purple_orange_gradient,
              data: [3,7,4]
          },
          {
              label: "สิ่งก่อสร้าง",
              fillColor: "red",
              backgroundColor: purple_orange_gradient1,
              hoverBackgroundColor: purple_orange_gradient1,
              data: [4,13,5]
          },
      ]
  };
  };

  const ListGroup = () => {
    return provinceSummery.map((item, i) => {
      return (
        <tr>
          <td className="text-truncate" style={{ width: 130 }}>
            <a href="javascript:void(0)" onClick={ async () =>{
              // setBarchart(item)
              const {data} = await  Axios.get('datacenter/groupbyhospcode/',{
                params: {
                  chwpart:item.chwpart
                }
              });
              console.log(data)
              setBarchart(data)
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
    });
  };

  return (
    <div>
      <div className="row match-height">
        <div className="col-xl-8 col-12" id="ecommerceChartView">
          <div className="card card-shadow" style={{ height: 541 }}>
            {JSON.stringify(provinceSummery)}
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
                      <ListGroup />
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

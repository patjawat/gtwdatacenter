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

  useEffect(async () => {
    await getProvincegroup();
  },[]);


  const getProvincegroup = async () => {
    const {data} = await  Axios.get('datacenter');
    setprovinceSummery(data.provincegroup)
  }


  const data = (canvas) => {
    const ctx = canvas.getContext("2d");
    const gradient = ctx.createLinearGradient(0, 0, 100, 0);

    const purple_orange_gradient = ctx.createLinearGradient(0, 0, 0, 600);
    purple_orange_gradient.addColorStop(0, "#0c84d1");
    purple_orange_gradient.addColorStop(1, "#4eb4f5");
    
    const purple_orange_gradient1 = ctx.createLinearGradient(0, 0, 0, 600);
    purple_orange_gradient1.addColorStop(1, "#ff1635");
    purple_orange_gradient1.addColorStop(0, "#ff7c8d");

    // const purple_orange_gradient0 = ctx.createLinearGradient(0, 0, 0, 600);
    // purple_orange_gradient0.addColorStop(0, "orange");
    // purple_orange_gradient0.addColorStop(1, "purple");


    // const purple_orange_gradient2 = ctx.createLinearGradient(0, 0, 0, 600);
    // purple_orange_gradient2.addColorStop(0, "mediumorchid");
    // purple_orange_gradient2.addColorStop(1, "blueviolet");

    // const purple_orange_gradient3 = ctx.createLinearGradient(0, 0, 0, 600);
    // purple_orange_gradient3.addColorStop(0, "chocolate");
    // purple_orange_gradient3.addColorStop(1, "blueviolet");


    let datasets = [];
       datasets.push({
        label:'ครุภัณฑ์',
        backgroundColor: purple_orange_gradient,
        hoverBackgroundColor: purple_orange_gradient,
        data: [...new Set(provinceSummery.map((n) => n.person))]
      },
      {
        label:'สิ่งก่อสร้าง',
        backgroundColor: purple_orange_gradient1,
            hoverBackgroundColor: purple_orange_gradient1,
        data: [...new Set(provinceSummery.map((n) => n.assetbuildings))]
      });
 
    return{
      labels:[...new Set(provinceSummery.map((n) => n.name))],
      fill:'start',
      datasets
    }

// return barchartDataset;

  }




  return (
    <div>
      <div className="row match-height">
        <div className="col-xl-8 col-12" id="ecommerceChartView">
          <div className="card card-shadow">

            <Bar
              data={data}
              // width={400}
              height={180}
              options={{
                responsive: true,
                title: { text: "ข้อมูลสิ่งที่มีอยู่", display: true },
              }}
            />
          </div>
        </div>
        <div className="col-xl-4 col-lg-12">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">ข้อมูลสิ่งที่มีอยู่</h4>
              <a className="heading-elements-toggle">
                <i className="la la-ellipsis-v font-medium-3" />
              </a>
              <div className="heading-elements">
                <ul className="list-inline mb-0">
                  <li>
                    <a data-action="reload" onClick={()=>{
                      console.log('click')
                      getProvincegroup()
                    }}>
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
                        <th className="border-top-0">วันที่ปรับปรุง</th>
                      </tr>
                    </thead>
                    <tbody>
                        {store ? store.provincegroup.map((item, i) => {
                          return (
                            <tr key={i}>
                              <td className="text-truncate" style={{ width: 130 }}>
                                <a onClick={ async () =>{
                                  const {data} = await  Axios.get('datacenter/groupbyhospcode/',{
                                    params: {
                                      chwpart:item.chwpart
                                    }
                                  });
                                  setprovinceSummery(data)
                                  console.log(data)
                                }}>
                                  {item.name}
                                  </a>
                              </td>
                              <td className="text-truncate p-1">
                                <NumberFormat value={item.person} displayType={'text'} thousandSeparator={true} prefix={''} />
                                </td>
                              <td className="text-truncate"><NumberFormat value={item.assetbuildings} displayType={'text'} thousandSeparator={true} prefix={''} /></td>
                              <td className="text-truncate">
                                {item.lastupdate}
                              </td>
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

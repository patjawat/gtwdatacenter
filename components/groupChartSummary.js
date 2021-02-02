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
    <div>






<div className="row match-height">
  <div className="col-xl-8 col-12" id="ecommerceChartView">
    <div className="card card-shadow" style={{height: 421}}>
    <Bar
          data={data}
          width={400}
          height={150}
          options={{
            responsive: true,
            title: { text: "สรุปจำนวนบุคลากรจังหวัดเชียงใหม่", display: true },
          }}
        />

    </div>
  </div>
  <div className="col-xl-4 col-lg-12">
    <div className="card" style={{height: 421}}>
      <div className="card-header">
        <h4 className="card-title">รายการ</h4>
        <a className="heading-elements-toggle"><i className="la la-ellipsis-v font-medium-3" /></a>
        <div className="heading-elements">
          <ul className="list-inline mb-0">
            <li><a data-action="reload"><i className="ft-rotate-cw" /></a></li>
          </ul>
        </div>
      </div>
      <div className="card-content">
        <div id="new-orders" className="media-list position-relative ps">
          <div className="table-responsive">
            <table id="new-orders-table" className="table table-hover table-xl mb-0">
              <thead>
                <tr>
                  <th className="border-top-0">จัง</th>
                  <th className="border-top-0">Customers</th>
                  <th className="border-top-0">Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-truncate">iPhone X</td>
                  <td className="text-truncate p-1">
                    <ul className="list-unstyled users-list m-0">
                      <li data-toggle="tooltip" data-popup="tooltip-custom" data-original-title="John Doe" className="avatar avatar-sm pull-up">
                        <img className="media-object rounded-circle" src="../../../app-assets/images/portrait/small/avatar-s-19.png" alt="Avatar" />
                      </li>
                      <li data-toggle="tooltip" data-popup="tooltip-custom" data-original-title="Katherine Nichols" className="avatar avatar-sm pull-up">
                        <img className="media-object rounded-circle" src="../../../app-assets/images/portrait/small/avatar-s-18.png" alt="Avatar" />
                      </li>
                      <li data-toggle="tooltip" data-popup="tooltip-custom" data-original-title="Joseph Weaver" className="avatar avatar-sm pull-up">
                        <img className="media-object rounded-circle" src="../../../app-assets/images/portrait/small/avatar-s-17.png" alt="Avatar" />
                      </li>
                      <li className="avatar avatar-sm">
                        <span className="badge badge-info">+4 more</span>
                      </li>
                    </ul>
                  </td>
                  <td className="text-truncate">$8999</td>
                </tr>
                
              </tbody>
            </table>
          </div>
          <div className="ps__rail-x" style={{left: 0, bottom: 0}}><div className="ps__thumb-x" tabIndex={0} style={{left: 0, width: 0}} /></div><div className="ps__rail-y" style={{top: 0, right: 0}}><div className="ps__thumb-y" tabIndex={0} style={{top: 0, height: 0}} /></div></div>
      </div>
    </div>
  </div>
</div>






    </div>
  );
}

export default ChartSmmery;
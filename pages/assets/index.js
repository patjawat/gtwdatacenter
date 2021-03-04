import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import NumberFormat from "react-number-format";
import Theme from "@/components/themes";
import Axios from "../../axios.config";
import  'chartjs-plugin-datalabels';
import TypeSummary from "./typeSummary";
import TotalCard from "./totalCard";
export default function Index() {
  const [dataset, setDataset] = useState([]);
  const [typeGroup, setTypeGroup] = useState([]);

  useEffect(async () => {
    await getDataset();
  }, []);

  const getDataset = async () => {
    const { data } = await Axios.get("datacenter/assets/datasets");
    await setDataset(data);
    await setTypeGroup(data);
  };

  const dataChart = (canvas) => {
    const ctx = canvas.getContext("2d");

    const purple_orange_gradient = ctx.createLinearGradient(0, 0, 0, 600);
    purple_orange_gradient.addColorStop(0, "#0c84d1");
    purple_orange_gradient.addColorStop(1, "#4eb4f5");

    const purple_orange_gradient1 = ctx.createLinearGradient(0, 0, 0, 600);
    purple_orange_gradient1.addColorStop(1, "#ff1635");
    purple_orange_gradient1.addColorStop(0, "#ff7c8d");

    let datasets = [];
    datasets.push(
      {
        label: "ครุภัณฑ์",
        backgroundColor: purple_orange_gradient,
        hoverBackgroundColor: purple_orange_gradient,
        data: [...new Set(dataset.map((n) => n.asset))],
      },
      {
        label: "สิ่งก่อสร้าง",
        backgroundColor: purple_orange_gradient1,
        hoverBackgroundColor: purple_orange_gradient1,
        data: [...new Set(dataset.map((n) => n.assetbuildings))],
      }
    );

    return {
      labels: [...new Set(dataset.map((n) => n.name))],
      fill: "start",
      datasets,
    };
  };



  var options = {
    responsive: true,
    layout: {
      padding: {
        left: -650,
        
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
          return 'end';
        },
      }
    },
    
    title: {
        display: false,
        text: ''
    },

  };

  return (
    <div>
      <TotalCard />
      <div className="row">
        <div className="col-sm-12 col-md-8 col-lg-8">
          <div className="card pull-up">
            <div className="card-header">
              <h4 className="card-title">ข้อมูลสิ่งที่มีอยู่</h4>
              <a className="heading-elements-toggle">
                <i className="la la-ellipsis-v font-medium-3" />
              </a>
            </div>
            <div className="card-content collapse show">
              <Bar
                data={dataChart}
                // width={400}
                height={150}
                options={options}
              />
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-4 col-lg-4">
              <TypeSummary />
      </div>
      </div>
      {/* <div className="row">
        <div className="col-sm-12 col-md-4 col-lg-4">
          <div className="card pull-up">
            <div className="card-header">
              <h4 className="card-title">ข้อมูลแผน 5 ปี</h4>
              <a className="heading-elements-toggle">
                <i className="la la-ellipsis-v font-medium-3" />
              </a>
            </div>
            <div className="card-content collapse show">
                <h1 className="text-center">Soon</h1>

            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-8 col-lg-8">
          <div className="card pull-up">
            <div className="card-header">
              <h4 className="card-title">ข้อมูลแผน 5 ปี</h4>
              <a className="heading-elements-toggle">
                <i className="la la-ellipsis-v font-medium-3" />
              </a>
            </div>
            <div className="card-content collapse show">
                <h1 className="text-center">Soon</h1>
            </div>
          </div>
        </div>

      </div> */}
    </div>
  );
}

Index.Layout = Theme;

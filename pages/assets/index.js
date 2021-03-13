import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import NumberFormat from "react-number-format";
import Theme from "@/components/themes";
import Axios from "../../axios.config";
import "chartjs-plugin-datalabels";
// import TypeSummary from "../../components/assets/typeSummary";
import SmallBox from "@/components/small-box/SmallBox";
import InfoBox from "@/components/info-box/InfoBox";

import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const getDatas = async () => {
  const summary = await Axios.get("datacenter");
  return summary;
  // setBranch(data.branchs);
};

export default function Index(props) {
  const [summary, setSummary] = useState(0);
  const [typeSummary, setTypeSummary] = useState(0);
  const [typeSummaryTotal, setTypeSummaryTotal] = useState(0);

  // const [branch, setBranch] = useState(0);

  useEffect(async () => {
    await getData();
    await getTypeSummary();
  }, []);

  const getData = async () => {
    const summary = await Axios.get("datacenter");
    setSummary(summary.data.summary);
    // setBranch(data.branchs);
  };

  async function getTypeSummary() {
    const { data } = await Axios.get("datacenter/assets/type-money-summary");
    setTypeSummary(data);

    const Total = data.reduce(
      (itemTotal, i) => itemTotal + parseInt(i.total, 10),
      0
    );

    setTypeSummaryTotal(Total); // 36 calories
  }

  return (
    <div>
      <div className="row">
        <div className="col-xl-4 col-lg-6 col-12">
          <InfoBox
            isLoading={false}
            count={summary ? summary[0].asset : 0}
            title="ครุภัณฑ์(รายการ)"
            type="info"
            icon="ion-android-people"
          />
        </div>
        <div className="col-xl-4 col-lg-6 col-12">
          <InfoBox
            isLoading={false}
            count={summary ? summary[0].person : 0}
            title="สิ่งก่อสร้าง"
            type="primary"
            icon="ion-android-people"
          />
        </div>
        <div className="col-xl-4 col-lg-6 col-12">
          <InfoBox
            isLoading={false}
            count={summary ? summary[0].person : 0}
            title="ทั้งหมด"
            type="danger"
            icon="ion-android-people"
            navigateTo="/persons"
          />
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-8"></div>
        <div className="col-4">
          <TypeSummary
            typeSummary={typeSummary}
            typeSummaryTotal={typeSummaryTotal}
          />
        </div>
      </div>
    </div>
  );
}

function TypeSummary({ typeSummary, typeSummaryTotal }) {
  function percenTage(val) {
    return (val / typeSummaryTotal) * 100;
  }
  return (
    <div>
      <div className="card pull-up">
        <div className="card-content box-shadow-2">
          <div className="media align-items-stretch bg-gradient-primary text-white rounded">
            <div className="bg-primary bg-darken-2 media-middle">
              <i className="icon-wallet font-large-2 text-white"></i>
            </div>
            <div className="media-body p-3">
              <h4 className="text-white">งบประมาณ </h4>
              <span>
                คืดเป็นร้อยละ{" "}
                {percenTage(typeSummary ? typeSummary[0].total : 0).toFixed(2)}%
              </span>
              <div className="progress progress-sm mt-1 mb-0 box-shadow-2">
                <div
                  className="progress-bar bg-gradient-success"
                  role="progressbar"
                  style={{
                    width:
                      percenTage(
                        typeSummary ? typeSummary[0].total : 0
                      ).toFixed(2) + "%",
                  }}
                  aria-valuenow={percenTage(
                    typeSummary ? typeSummary[0].total : 0
                  ).toFixed(2)}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
              </div>
            </div>
            <div className="media-right p-2 media-middle">
              <h3 className="text-white">
                <NumberFormat
                  value={typeSummary ? typeSummary[0].total : 0}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={""}
                />
              </h3>
            </div>
          </div>
        </div>
      </div>

      <div className="card pull-up">
        <div className="card-content box-shadow-2">
          <div className="media align-items-stretch bg-gradient-info text-white rounded">
            <div className="bg-info bg-darken-2 media-middle">
              <i className="icon-wallet font-large-2 text-white"></i>
            </div>
            <div className="media-body p-3">
              <h4 className="text-white">เงินบำรุง</h4>
              <span>
                คืดเป็นร้อยละ{" "}
                {percenTage(typeSummary ? typeSummary[1].total : 0).toFixed(2)}%
              </span>
              <div className="progress progress-sm mt-1 mb-0 box-shadow-2">
                <div
                  className="progress-bar bg-gradient-info"
                  role="progressbar"
                  style={{
                    width:
                      percenTage(
                        typeSummary ? typeSummary[1].total : 0
                      ).toFixed(2) + "%",
                  }}
                  aria-valuenow={percenTage(
                    typeSummary ? typeSummary[1].total : 0
                  ).toFixed(2)}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
              </div>
            </div>
            <div className="media-right p-2 media-middle">
              <h3 className="text-white">
                <NumberFormat
                  value={typeSummary ? typeSummary[1].total : 0}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={""}
                />
              </h3>
            </div>
          </div>
        </div>
      </div>

      <div className="card pull-up">
        <div className="card-content box-shadow-2">
          <div className="media align-items-stretch bg-gradient-success text-white rounded">
            <div className="bg-success bg-darken-2 media-middle">
              <i className="icon-wallet font-large-2 text-white"></i>
            </div>
            <div className="media-body p-3">
              <h4 className="text-white">เงินบริจาค</h4>
              <span>
                คืดเป็นร้อยละ{" "}
                {percenTage(typeSummary ? typeSummary[2].total : 0).toFixed(2)}%
              </span>
              <div className="progress progress-sm mt-1 mb-0 box-shadow-2">
                <div
                  className="progress-bar bg-gradient-success"
                  role="progressbar"
                  style={{
                    width:
                      percenTage(
                        typeSummary ? typeSummary[2].total : 0
                      ).toFixed(2) + "%",
                  }}
                  aria-valuenow={percenTage(
                    typeSummary ? typeSummary[2].total : 0
                  ).toFixed(2)}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
              </div>
            </div>
            <div className="media-right p-2 media-middle">
              <h3 className="text-white">
                <NumberFormat
                  value={typeSummary ? typeSummary[2].total : 0}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={""}
                />
              </h3>
            </div>
          </div>
        </div>
      </div>

      <div className="card pull-up">
        <div className="card-content box-shadow-2">
          <div className="media align-items-stretch bg-gradient-warning text-white rounded">
            <div className="bg-warning bg-darken-2 media-middle">
              <i className="icon-wallet font-large-2 text-white"></i>
            </div>
            <div className="media-body p-3">
              <h4 className="text-white">งบค่าเสื่อม </h4>
              <span>
                คืดเป็นร้อยละ{" "}
                {percenTage(typeSummary ? typeSummary[3].total : 0).toFixed(2)}%
              </span>
              <div className="progress progress-sm mt-1 mb-0 box-shadow-2">
                <div
                  className="progress-bar bg-gradient-warning"
                  role="progressbar"
                  style={{
                    width:
                      percenTage(
                        typeSummary ? typeSummary[3].total : 0
                      ).toFixed(2) + "%",
                  }}
                  aria-valuenow={percenTage(
                    typeSummary ? typeSummary[3].total : 0
                  ).toFixed(2)}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
              </div>
            </div>
            <div className="media-right p-2 media-middle">
              <h3 className="text-white">
                <NumberFormat
                  value={typeSummary ? typeSummary[3].total : 0}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={""}
                />
              </h3>
            </div>
          </div>
        </div>
      </div>

      <div className="card pull-up">
        <div className="card-content box-shadow-2">
          <div className="media align-items-stretch bg-gradient-secondary text-white rounded">
            <div className="bg-secondary bg-darken-2 media-middle">
              <i className="icon-wallet font-large-2 text-white"></i>
            </div>
            <div className="media-body p-3">
              <h4 className="text-white">เงินอื่น ๆ </h4>
              <span>
                คืดเป็นร้อยละ{" "}
                {percenTage(typeSummary ? typeSummary[4].total : 0).toFixed(2)}%
              </span>
              <div className="progress progress-sm mt-1 mb-0 box-shadow-2">
                <div
                  className="progress-bar bg-gradient-secondary"
                  role="progressbar"
                  style={{
                    width:
                      percenTage(
                        typeSummary ? typeSummary[4].total : 0
                      ).toFixed(2) + "%",
                  }}
                  aria-valuenow={percenTage(
                    typeSummary ? typeSummary[4].total : 0
                  ).toFixed(2)}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
              </div>
            </div>
            <div className="media-right p-2 media-middle">
              <h3 className="text-white">
                <NumberFormat
                  value={typeSummary ? typeSummary[4].total : 0}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={""}
                />
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Index.Layout = Theme;

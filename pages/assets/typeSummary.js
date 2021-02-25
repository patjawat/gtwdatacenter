import React,{useState, useEffect}from "react";
import Axios from '../../axios.config'
import NumberFormat from "react-number-format";

export default function typeSummary() {
  const  [typeSummary,setTypeSummary] = useState(0)
  const  [typeSummaryTotal,setTypeSummaryTotal] = useState(0)


  useEffect(async () => {
    await getTypeSummary();
  }, []);

  async function getTypeSummary(){
    const {data} = await  Axios.get('datacenter/assets/type-money-summary');
    setTypeSummary(data)

const Total = data.reduce((itemTotal, i) => itemTotal + parseInt(i.total, 10), 0);

setTypeSummaryTotal(Total); // 36 calories
  }

  function percenTage(val){
      return  (val / typeSummaryTotal) * 100;
  }

  return (
    <div>
      <div className="card pull-up">
        <div className="card-content box-shadow-2">
          <div className="media align-items-stretch bg-gradient-x-primary text-white rounded">
            <div className="bg-primary bg-darken-2 p-2 media-middle">
              <i className="icon-wallet font-large-2 text-white"></i>
            </div>
            <div className="media-body p-2">
              <h4 className="text-white">งบประมาณ </h4>
              <span>คืดเป็นร้อยละ {percenTage(typeSummary ? typeSummary[0].total : 0).toFixed(2)}%</span>
              <div className="progress progress-sm mt-1 mb-0 box-shadow-2">
                <div
                  className="progress-bar bg-gradient-x-success"
                  role="progressbar"
                  style={{ width: percenTage(typeSummary ? typeSummary[0].total : 0).toFixed(2)+"%" }}
                  aria-valuenow={percenTage(typeSummary ? typeSummary[0].total : 0).toFixed(2)}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
              </div>
            </div>
            <div className="media-right p-2 media-middle">
              <h1 className="text-white">
              <NumberFormat
                        value={typeSummary ? typeSummary[0].total : 0}
                        displayType={"text"}
                        thousandSeparator={true}
                        prefix={""}
                      />
              </h1>
            </div>
          </div>
        </div>
      </div>

    
      <div className="card pull-up">
        <div className="card-content box-shadow-2">
          <div className="media align-items-stretch bg-gradient-x-info text-white rounded">
            <div className="bg-info bg-darken-2 p-2 media-middle">
              <i className="icon-wallet font-large-2 text-white"></i>
            </div>
            <div className="media-body p-2">
              <h4 className="text-white">เงินบำรุง</h4>
              <span>คืดเป็นร้อยละ {percenTage(typeSummary ? typeSummary[1].total : 0).toFixed(2)}%</span>
              <div className="progress progress-sm mt-1 mb-0 box-shadow-2">
                <div
                  className="progress-bar bg-gradient-x-info"
                  role="progressbar"
                  style={{ width: percenTage(typeSummary ? typeSummary[1].total : 0).toFixed(2)+"%" }}
                  aria-valuenow={percenTage(typeSummary ? typeSummary[1].total : 0).toFixed(2)}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
              </div>
            </div>
            <div className="media-right p-2 media-middle">
              <h1 className="text-white">
              <NumberFormat
                        value={typeSummary ? typeSummary[1].total : 0}
                        displayType={"text"}
                        thousandSeparator={true}
                        prefix={""}
                      />
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="card pull-up">
        <div className="card-content box-shadow-2">
          <div className="media align-items-stretch bg-gradient-x-success text-white rounded">
            <div className="bg-success bg-darken-2 p-2 media-middle">
              <i className="icon-wallet font-large-2 text-white"></i>
            </div>
            <div className="media-body p-2">
              <h4 className="text-white">เงินบริจาค</h4>
              <span>คืดเป็นร้อยละ {percenTage(typeSummary ? typeSummary[2].total : 0).toFixed(2)}%</span>
              <div className="progress progress-sm mt-1 mb-0 box-shadow-2">
                <div
                  className="progress-bar bg-gradient-x-success"
                  role="progressbar"
                  style={{ width: percenTage(typeSummary ? typeSummary[2].total : 0).toFixed(2)+"%" }}
                  aria-valuenow={percenTage(typeSummary ? typeSummary[2].total : 0).toFixed(2)}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
              </div>
            </div>
            <div className="media-right p-2 media-middle">
              <h1 className="text-white">
              <NumberFormat
                        value={typeSummary ? typeSummary[2].total : 0}
                        displayType={"text"}
                        thousandSeparator={true}
                        prefix={""}
                      />
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="card pull-up">
        <div className="card-content box-shadow-2">
          <div className="media align-items-stretch bg-gradient-x-warning text-white rounded">
            <div className="bg-warning bg-darken-2 p-2 media-middle">
              <i className="icon-wallet font-large-2 text-white"></i>
            </div>
            <div className="media-body p-2">
              <h4 className="text-white">งบค่าเสื่อม </h4>
              <span>คืดเป็นร้อยละ {percenTage(typeSummary ? typeSummary[3].total : 0).toFixed(2)}%</span>
              <div className="progress progress-sm mt-1 mb-0 box-shadow-2">
                <div
                  className="progress-bar bg-gradient-x-warning"
                  role="progressbar"
                  style={{ width: percenTage(typeSummary ? typeSummary[3].total : 0).toFixed(2)+"%" }}
                  aria-valuenow={percenTage(typeSummary ? typeSummary[3].total : 0).toFixed(2)}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
              </div>
            </div>
            <div className="media-right p-2 media-middle">
              <h1 className="text-white">
              <NumberFormat
                        value={typeSummary ? typeSummary[3].total : 0}
                        displayType={"text"}
                        thousandSeparator={true}
                        prefix={""}
                      />
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="card pull-up">
        <div className="card-content box-shadow-2">
          <div className="media align-items-stretch bg-gradient-x-secondary text-white rounded">
            <div className="bg-secondary bg-darken-2 p-2 media-middle">
              <i className="icon-wallet font-large-2 text-white"></i>
            </div>
            <div className="media-body p-2">
              <h4 className="text-white">เงินอื่น ๆ </h4>
              <span>คืดเป็นร้อยละ {percenTage(typeSummary ? typeSummary[4].total : 0).toFixed(2)}%</span>
              <div className="progress progress-sm mt-1 mb-0 box-shadow-2">
                <div
                  className="progress-bar bg-gradient-x-secondary"
                  role="progressbar"
                  style={{ width: percenTage(typeSummary ? typeSummary[4].total : 0).toFixed(2)+"%" }}
                  aria-valuenow={percenTage(typeSummary ? typeSummary[4].total : 0).toFixed(2)}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
              </div>
            </div>
            <div className="media-right p-2 media-middle">
              <h1 className="text-white">
              <NumberFormat
                        value={typeSummary ? typeSummary[4].total : 0}
                        displayType={"text"}
                        thousandSeparator={true}
                        prefix={""}
                      />
              </h1>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
}

import React from 'react'
import { useSelector } from "react-redux";
import Link from "next/link";

import Axios from '../axios.config'


export default function TotalSummary(){

  const store = useSelector((state) => state);
 
  // if (store.infomation === null) return <h3>Loading...</h3>;


  // if (status === "loading") return <h3>Loading...</h3>;
  // if (status === "error") return <span>Error: {error.message}</span>;

  return (
    <div className="row">

<div className="col-xl-3 col-lg-6 col-12">
<Link href="/persons">
        <div className="card pull-up">
          <div className="card-content">
            <div className="card-body">
              <div className="media d-flex">
                <div className="media-body text-left">
                  <h3 className="success">{store.infomation === null ? <i className="la la-spinner spinner"></i> : store.infomation.person.total}</h3>
                  <h6>บุคคลากร</h6>
                </div>
                <div>
                  <i className="icon-user-follow success font-large-2 float-right" />
                </div>
              </div>
              <div className="progress progress-sm mt-1 mb-0 box-shadow-2">
                <div className="progress-bar bg-gradient-x-success" role="progressbar" style={{ width: '75%' }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
              </div>
            </div>
          </div>
        </div>
</Link>
      </div>

      <div className="col-xl-3 col-lg-6 col-12">
      <Link href="/assets">
        <div className="card pull-up">
          <div className="card-content">
            <div className="card-body">
              <div className="media d-flex">
                <div className="media-body text-left">
                  {/* <h3 className="info">{JSON.stringify(summary.assets)}</h3> */}
                  <h3 className="info">{store.infomation === null ? <i className="la la-spinner spinner"></i> : store.infomation.assets.total}</h3>
                  <h6>ทรัพย์สิน(รายการ)</h6>
                </div>
                <div>
                  <i className="icon-basket-loaded info font-large-2 float-right" />
                </div>
              </div>
              <div className="progress progress-sm mt-1 mb-0 box-shadow-2">
                <div className="progress-bar bg-gradient-x-info" role="progressbar" style={{ width: '80%' }} aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} />
              </div>
            </div>
          </div>
        </div>
</Link>

      </div>


      <div className="col-xl-3 col-lg-6 col-12">
<Link href="/branchs">
<a href="#">

        <div className="card pull-up">
          <div className="card-content">
            <div className="card-body">
              <div className="media d-flex">
                <div className="media-body text-left">
                  <h3 className="danger">{store.infomation === null ? <i className="la la-spinner spinner"></i> : store.infomation.infomation.branchs.total}</h3>
                  <h6>หน่วยบริการ</h6>
                </div>
                <div>
                  <i className="icon-heart danger font-large-2 float-right" />
                </div>
              </div>
              <div className="progress progress-sm mt-1 mb-0 box-shadow-2">
                <div className="progress-bar bg-gradient-x-danger" role="progressbar" style={{ width: '85%' }} aria-valuenow={85} aria-valuemin={0} aria-valuemax={100} />
              </div>
            </div>
          </div>
        </div>
</a>
</Link>

      </div>


      <div className="col-xl-3 col-lg-6 col-12">
        <div className="card pull-up">
          <div className="card-content">
            <div className="card-body">
              <div className="media d-flex">
                <div className="media-body text-left">
                  <h3 className="warning">0</h3>
                  <h6>บัญชี</h6>
                </div>
                <div>
                  <i className="icon-pie-chart warning font-large-2 float-right" />
                </div>
              </div>
              <div className="progress progress-sm mt-1 mb-0 box-shadow-2">
                <div className="progress-bar bg-gradient-x-warning" role="progressbar" style={{ width: '65%' }} aria-valuenow={65} aria-valuemin={0} aria-valuemax={100} />
              </div>
            </div>
          </div>
        </div>
      </div>



    </div>
  )
}

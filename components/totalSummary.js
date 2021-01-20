import React, { useState, useEffect } from 'react'
import Axios from '../axios.config'
import {
  useQuery,
  QueryClient,
  QueryClientProvider,
} from "react-query";
const queryClient = new QueryClient();

export default function TotalSummary() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Summary />
      </QueryClientProvider>
    </>
  );
}

function Summary() {

  const url = process.env.api;

  const { status, data, error, isFetching } = useQuery("summary", async () => {
    const { data } = await Axios.get(url + 'datacenter');
    return data;
  });

  // if (status === "loading") return <h3>Loading...</h3>;
  // if (status === "error") return <span>Error: {error.message}</span>;

  return (
    <div className="row">
      <div className="col-xl-3 col-lg-6 col-12">
        <div className="card pull-up">
          <div className="card-content">
            <div className="card-body">
              <div className="media d-flex">
                <div className="media-body text-left">
                  {/* <h3 className="info">{JSON.stringify(summary.assets)}</h3> */}
                  <h3 className="info">{status === "loading" ? <i class="la la-spinner spinner"></i> : data.assets.total}</h3>
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
      <div className="col-xl-3 col-lg-6 col-12">
        <div className="card pull-up">
          <div className="card-content">
            <div className="card-body">
              <div className="media d-flex">
                <div className="media-body text-left">
                  <h3 className="success">{status === "loading" ? <i class="la la-spinner spinner"></i> : data.person.total}</h3>
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
      </div>
      <div className="col-xl-3 col-lg-6 col-12">
        <div className="card pull-up">
          <div className="card-content">
            <div className="card-body">
              <div className="media d-flex">
                <div className="media-body text-left">
                  <h3 className="danger">0</h3>
                  <h6>soon</h6>
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
      </div>
    </div>
  )
}

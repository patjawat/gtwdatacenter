import React, { useState, useEffect } from "react";
import {
  useQuery,
  useQueryClient,
  useMutation,
  QueryClient,
  QueryClientProvider,
} from "react-query";
import axios from "../axios.config";

const queryClient = new QueryClient();

export default function dailyonline() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Example />
      </QueryClientProvider>
    </>
  );
}

function Example() {
  // const queryClient = useQueryClient();
  // const [intervalMs, setIntervalMs] = React.useState(1000);
  // const [value, setValue] = React.useState("");

  const { status, data, error, isFetching } = useQuery("todos", async () => {
    const { data } = await axios.get("datacenter");
    return data.infomation.authdaily;
  });

  if (status === "loading") return <h1>Loading...</h1>;
  if (status === "error") return <span>Error: {error.message}</span>;

  return (
    <div>
      <div className="card" style={{ height: 421, zoom: 1 }}>
        <div className="card-header">
          <h4 className="card-title">
            <i className="ft-activity text-danger"></i> ปริมาณการใช้งานรายวัน
          </h4>
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
                className="table table-hover table-xl mb-0"
              >
                <thead>
                  <tr>
                    <th className="border-top-0">หน่วยงาสน</th>
                    <th className="border-top-0">คิดเป็น%</th>
                    <th className="border-top-0">จำนวน</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item, i) => (
                    <tr key={item.code}>
                      <td className="text-truncate">{item.hos_name}</td>
                      <div className="progress progress-sm mt-1 mb-0 box-shadow-2">
                        <div
                          className="progress-bar bg-gradient-x-danger"
                          role="progressbar"
                          style={{ width: "25%" }}
                          aria-valuenow={25}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>

                      <td className="text-truncate">{item.total}</td>
                    </tr>
                  ))}
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

      <div></div>
      {/* <ReactQueryDevtools initialIsOpen /> */}
    </div>
  );
}

import React from "react";
import axios from "../axios.config";
import NumberFormat from "react-number-format";

import { useQuery, QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

export default function Branch() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Example />
      </QueryClientProvider>
    </>
  );
}

function Example() {
  const { status, data, error, isFetching } = useQuery("todos", async () => {
    const { data } = await axios.get("datacenter/branchs");
    return data;
  });

  if (status === "loading") return <h1>Loading...</h1>;
  if (status === "error") return <span>Error: {error.message}</span>;

  return (
    <div className="row mt-1">
      <div id="recent-transactions" className="col-12">
        <div className="card">
          <div className="card-header">
            <h4 className="card-title">หน่วยบริการ</h4>
            <a className="heading-elements-toggle">
              <i className="la la-ellipsis-v font-medium-3" />
            </a>
            <div className="heading-elements">
              <ul className="list-inline mb-0">
                {/* <li><a className="btn btn-sm btn-danger box-shadow-2 round btn-min-width pull-right" href="invoice-summary.html" target="_blank">Invoice Summary</a></li> */}
              </ul>
            </div>
          </div>
          <div className="card-content">
            <div className="table-responsive">
              <table
                id="recent-orders"
                className="table table-sx table-hover mb-0"
              >
                <thead>
                  <tr>
                    <th className="border-top-0">ชื่อสถานประกอบการ</th>
                    <th className="border-top-0">รหัส</th>
                    <th className="border-top-0">ขนาด</th>
                    <th className="border-top-0">บุคคลากร</th>
                    <th className="border-top-0">ทรัพย์สิน</th>
                    <th className="border-top-0">สิ่งก่อสร้าง</th>
                    <th className="border-top-0">ปรับปรุงล่าสุด</th>
                  </tr>
                </thead>
                <tbody>
                  {data
                    .sort((a, b) => b.person - a.person)
                    .map((item, i) => (
                      <tr key={i} className="pull-up">
                        <td className="text-truncate">
                          <i className="la la-dot-circle-o success font-medium-1 mr-1" />{" "}
                          {item.name}
                        </td>
                        <td className="text-truncate">
                          <a href="#">{item.hospcode}</a>
                        </td>
                        <td>
                          <button
                            type="button"
                            className="btn btn-sm btn-outline-danger round"
                          >
                            {item.service_plan}
                          </button>
                        </td>
                        <td>
                          <NumberFormat
                            value={item.person}
                            displayType={"text"}
                            thousandSeparator={true}
                            prefix={""}
                          />
                        </td>
                        <td>
                          <NumberFormat
                            value={item.asset}
                            displayType={"text"}
                            thousandSeparator={true}
                            prefix={""}
                          />
                        </td>
                        <td>
                          <NumberFormat
                            value={item.assetbuildings}
                            displayType={"text"}
                            thousandSeparator={true}
                            prefix={""}
                          />
                        </td>
                        <td>{item.lastupdate}</td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

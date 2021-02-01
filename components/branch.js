import React from 'react'
import { useSelector } from "react-redux";


export default function Branch() {
  const store = useSelector((state) => state);
  if(!store) return <h3>Loading...</h3>;
  if (store.infomation === null) return <h3>Loading...</h3>;

    return (
        <div className="row mt-1">
  <div id="recent-transactions" className="col-12">
    <div className="card">
      <div className="card-header">
        <h4 className="card-title">{store.infomation.infomation.branchs.label}</h4>
        <a className="heading-elements-toggle"><i className="la la-ellipsis-v font-medium-3" /></a>
        <div className="heading-elements">
          <ul className="list-inline mb-0">
            {/* <li><a className="btn btn-sm btn-danger box-shadow-2 round btn-min-width pull-right" href="invoice-summary.html" target="_blank">Invoice Summary</a></li> */}
          </ul>
        </div>
      </div>            
      <div className="card-content">                
        <div className="table-responsive">


          <table id="recent-orders" className="table table-hover table-xl mb-0">
            <thead>
              <tr>
                <th className="border-top-0">ชื่อสถานประกอบการ</th>                                
                <th className="border-top-0">รหัส</th>
                <th className="border-top-0">ขนาด</th>
                <th className="border-top-0">บุคคลากร</th>
                <th className="border-top-0">ทรัพย์สิน</th>
                {/* <th className="border-top-0">soon</th>
                <th className="border-top-0">Amount</th> */}
              </tr>
            </thead>
            <tbody>
            {store.infomation.infomation.branchs.items.sort((a, b) => b.summaryPerson - a.summaryPerson).map((item, i) => (
            

              <tr key={i}>
                <td className="text-truncate"><i className="la la-dot-circle-o success font-medium-1 mr-1" /> {item.name}</td>
                <td className="text-truncate"><a href="#">{item.hos_code}</a></td>
                <td>
                  <button type="button" className="btn btn-sm btn-outline-danger round">{item.service_plan}</button>
                </td>
                <td>
                 {item.summaryPerson}
                </td>
                <td>
                  {item.summaryAsset}
                </td>
                {/* <td>
                  <div className="progress progress-sm mt-1 mb-0 box-shadow-2">
                    <div className="progress-bar bg-gradient-x-danger" role="progressbar" style={{width: '35%'}} aria-valuenow={35} aria-valuemin={0} aria-valuemax={100} />
                  </div>
                </td>
                <td className="text-truncate">$ 1500.00</td> */}
              </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</div>

    )
}

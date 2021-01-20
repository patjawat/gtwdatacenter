import React from 'react'

export default function inventory() {
    return (
        <div className="row mt-1">
  <div id="recent-transactions" className="col-12">
    <div className="card">
      <div className="card-header">
        <h4 className="card-title">หน่วยงานในสังกัด</h4>
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
                <th className="border-top-0">Customer Name</th>
                <th className="border-top-0">ขนาด</th>
                <th className="border-top-0">Shipping</th>
                <th className="border-top-0">Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-truncate"><i className="la la-dot-circle-o success font-medium-1 mr-1" /> โรงพยาบาลทดสอบ</td>
                <td className="text-truncate"><a href="#">00000</a></td>
                <td className="text-truncate">
                  <span className="avatar avatar-xs">
                    <img className="box-shadow-2" src="../../../app-assets/images/portrait/small/avatar-s-9.png" alt="avatar" />
                  </span>
                  <span>จจจ</span>
                </td>
                
                <td>
                  <button type="button" className="btn btn-sm btn-outline-danger round">Food</button>
                </td>
                <td>
                  <div className="progress progress-sm mt-1 mb-0 box-shadow-2">
                    <div className="progress-bar bg-gradient-x-danger" role="progressbar" style={{width: '35%'}} aria-valuenow={35} aria-valuemin={0} aria-valuemax={100} />
                  </div>
                </td>
                <td className="text-truncate">$ 1500.00</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</div>

    )
}

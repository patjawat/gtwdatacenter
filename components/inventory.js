import React from 'react'

export default function inventory() {
    return (
        <div className="row mt-1">
  <div id="recent-transactions" className="col-12">
    <div className="card">
      <div className="card-header">
        <h4 className="card-title">Recent Transactions</h4>
        <a className="heading-elements-toggle"><i className="la la-ellipsis-v font-medium-3" /></a>
        <div className="heading-elements">
          <ul className="list-inline mb-0">
            <li><a className="btn btn-sm btn-danger box-shadow-2 round btn-min-width pull-right" href="invoice-summary.html" target="_blank">Invoice Summary</a></li>
          </ul>
        </div>
      </div>            
      <div className="card-content">                
        <div className="table-responsive">
          <table id="recent-orders" className="table table-hover table-xl mb-0">
            <thead>
              <tr>
                <th className="border-top-0">Status</th>                                
                <th className="border-top-0">Invoice#</th>
                <th className="border-top-0">Customer Name</th>
                <th className="border-top-0">Products</th>
                <th className="border-top-0">Categories</th>
                <th className="border-top-0">Shipping</th>
                <th className="border-top-0">Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-truncate"><i className="la la-dot-circle-o success font-medium-1 mr-1" /> Paid</td>
                <td className="text-truncate"><a href="#">INV-001001</a></td>
                <td className="text-truncate">
                  <span className="avatar avatar-xs">
                    <img className="box-shadow-2" src="../../../app-assets/images/portrait/small/avatar-s-4.png" alt="avatar" />
                  </span>
                  <span>Elizabeth W.</span>
                </td>
                <td className="text-truncate p-1">
                  <ul className="list-unstyled users-list m-0">                                               
                    <li data-toggle="tooltip" data-popup="tooltip-custom" data-original-title="Kimberly Simmons" className="avatar avatar-sm pull-up">
                      <img className="media-object rounded-circle no-border-top-radius no-border-bottom-radius" src="../../../app-assets/images/portfolio/portfolio-1.jpg" alt="Avatar" />
                    </li>
                    <li data-toggle="tooltip" data-popup="tooltip-custom" data-original-title="Willie Torres" className="avatar avatar-sm pull-up">
                      <img className="media-object rounded-circle no-border-top-radius no-border-bottom-radius" src="../../../app-assets/images/portfolio/portfolio-2.jpg" alt="Avatar" />
                    </li>
                    <li data-toggle="tooltip" data-popup="tooltip-custom" data-original-title="Rebecca Jones" className="avatar avatar-sm pull-up">
                      <img className="media-object rounded-circle no-border-top-radius no-border-bottom-radius" src="../../../app-assets/images/portfolio/portfolio-4.jpg" alt="Avatar" />
                    </li>
                    <li className="avatar avatar-sm">                                            
                      <span className="badge badge-info">+1 more</span>
                    </li>
                  </ul>
                </td>
                <td>
                  <button type="button" className="btn btn-sm btn-outline-danger round">Food</button>
                </td>
                <td>
                  <div className="progress progress-sm mt-1 mb-0 box-shadow-2">
                    <div className="progress-bar bg-gradient-x-danger" role="progressbar" style={{width: '25%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                  </div>
                </td>
                <td className="text-truncate">$ 1200.00</td>
              </tr>
              <tr>
                <td className="text-truncate"><i className="la la-dot-circle-o danger font-medium-1 mr-1" /> Declined</td>
                <td className="text-truncate"><a href="#">INV-001002</a></td>
                <td className="text-truncate">
                  <span className="avatar avatar-xs">
                    <img className="box-shadow-2" src="../../../app-assets/images/portrait/small/avatar-s-5.png" alt="avatar" />
                  </span>
                  <span>Doris R.</span>
                </td>
                <td className="text-truncate p-1">
                  <ul className="list-unstyled users-list m-0">                                               
                    <li data-toggle="tooltip" data-popup="tooltip-custom" data-original-title="Kimberly Simmons" className="avatar avatar-sm pull-up">
                      <img className="media-object rounded-circle no-border-top-radius no-border-bottom-radius" src="../../../app-assets/images/portfolio/portfolio-5.jpg" alt="Avatar" />
                    </li>
                    <li data-toggle="tooltip" data-popup="tooltip-custom" data-original-title="Willie Torres" className="avatar avatar-sm pull-up">
                      <img className="media-object rounded-circle no-border-top-radius no-border-bottom-radius" src="../../../app-assets/images/portfolio/portfolio-6.jpg" alt="Avatar" />
                    </li>                                        
                    <li className="avatar avatar-sm">                                            
                      <span className="badge badge-info">+2 more</span>
                    </li>
                  </ul>
                </td>
                <td>
                  <button type="button" className="btn btn-sm btn-outline-warning round">Electronics</button>
                </td>
                <td>
                  <div className="progress progress-sm mt-1 mb-0 box-shadow-2">
                    <div className="progress-bar bg-gradient-x-warning" role="progressbar" style={{width: '45%'}} aria-valuenow={45} aria-valuemin={0} aria-valuemax={100} />
                  </div>
                </td>
                <td className="text-truncate">$ 1850.00</td>
              </tr>
              <tr>
                <td className="text-truncate"><i className="la la-dot-circle-o warning font-medium-1 mr-1" /> Pending</td>
                <td className="text-truncate"><a href="#">INV-001003</a></td>
                <td className="text-truncate">
                  <span className="avatar avatar-xs">
                    <img className="box-shadow-2" src="../../../app-assets/images/portrait/small/avatar-s-6.png" alt="avatar" />
                  </span>
                  <span>Megan S.</span>
                </td>
                <td className="text-truncate p-1">
                  <ul className="list-unstyled users-list m-0">                                               
                    <li data-toggle="tooltip" data-popup="tooltip-custom" data-original-title="Kimberly Simmons" className="avatar avatar-sm pull-up">
                      <img className="media-object rounded-circle no-border-top-radius no-border-bottom-radius" src="../../../app-assets/images/portfolio/portfolio-2.jpg" alt="Avatar" />
                    </li>
                    <li data-toggle="tooltip" data-popup="tooltip-custom" data-original-title="Willie Torres" className="avatar avatar-sm pull-up">
                      <img className="media-object rounded-circle no-border-top-radius no-border-bottom-radius" src="../../../app-assets/images/portfolio/portfolio-5.jpg" alt="Avatar" />
                    </li>
                  </ul>
                </td>
                <td>
                  <button type="button" className="btn btn-sm btn-outline-success round">Groceries</button>
                </td>
                <td>
                  <div className="progress progress-sm mt-1 mb-0 box-shadow-2">
                    <div className="progress-bar bg-gradient-x-success" role="progressbar" style={{width: '75%'}} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
                  </div>
                </td>
                <td className="text-truncate">$ 3200.00</td>
              </tr>
              <tr>
                <td className="text-truncate"><i className="la la-dot-circle-o success font-medium-1 mr-1" /> Paid</td>
                <td className="text-truncate"><a href="#">INV-001004</a></td>
                <td className="text-truncate">
                  <span className="avatar avatar-xs">
                    <img className="box-shadow-2" src="../../../app-assets/images/portrait/small/avatar-s-7.png" alt="avatar" />
                  </span>
                  <span>Andrew D.</span>
                </td>
                <td className="text-truncate p-1">
                  <ul className="list-unstyled users-list m-0">                                               
                    <li data-toggle="tooltip" data-popup="tooltip-custom" data-original-title="Kimberly Simmons" className="avatar avatar-sm pull-up">
                      <img className="media-object rounded-circle no-border-top-radius no-border-bottom-radius" src="../../../app-assets/images/portfolio/portfolio-6.jpg" alt="Avatar" />
                    </li>
                    <li data-toggle="tooltip" data-popup="tooltip-custom" data-original-title="Willie Torres" className="avatar avatar-sm pull-up">
                      <img className="media-object rounded-circle no-border-top-radius no-border-bottom-radius" src="../../../app-assets/images/portfolio/portfolio-1.jpg" alt="Avatar" />
                    </li>
                    <li className="avatar avatar-sm">                                            
                      <span className="badge badge-info">+1 more</span>
                    </li>
                  </ul>
                </td>
                <td>
                  <button type="button" className="btn btn-sm btn-outline-info round">Apparels</button>
                </td>
                <td>
                  <div className="progress progress-sm mt-1 mb-0 box-shadow-2">
                    <div className="progress-bar bg-gradient-x-info" role="progressbar" style={{width: '65%'}} aria-valuenow={65} aria-valuemin={0} aria-valuemax={100} />
                  </div>
                </td>
                <td className="text-truncate">$ 4500.00</td>
              </tr>
              <tr>
                <td className="text-truncate"><i className="la la-dot-circle-o success font-medium-1 mr-1" /> Paid</td>
                <td className="text-truncate"><a href="#">INV-001005</a></td>
                <td className="text-truncate">
                  <span className="avatar avatar-xs">
                    <img className="box-shadow-2" src="../../../app-assets/images/portrait/small/avatar-s-9.png" alt="avatar" />
                  </span>
                  <span>Walter R.</span>
                </td>
                <td className="text-truncate p-1">
                  <ul className="list-unstyled users-list m-0">                                               
                    <li data-toggle="tooltip" data-popup="tooltip-custom" data-original-title="Kimberly Simmons" className="avatar avatar-sm pull-up">
                      <img className="media-object rounded-circle no-border-top-radius no-border-bottom-radius" src="../../../app-assets/images/portfolio/portfolio-5.jpg" alt="Avatar" />
                    </li>
                    <li data-toggle="tooltip" data-popup="tooltip-custom" data-original-title="Willie Torres" className="avatar avatar-sm pull-up">
                      <img className="media-object rounded-circle no-border-top-radius no-border-bottom-radius" src="../../../app-assets/images/portfolio/portfolio-3.jpg" alt="Avatar" />
                    </li>
                  </ul>
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

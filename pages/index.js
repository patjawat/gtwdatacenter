import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Theme from "../themes";
import Authlog from "../components/authlog"

import TotalSummary from "../components/totalSummary"
import OrderList from "../components/card-orderlist"
import Dailyonline from "../components/dailyonline"
import Branch from "../components/branch"
import BranchSummaryChart from "../components/branchSummaryChart"
// import Dankmemes from "../components/Dankmemes"

export default function Home() {
  return (
   <>
{/* <Dankmemes /> */}
   <TotalSummary />
{/* <ChartSuumary /> */}
          <BranchSummaryChart />
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
   <div className="row match-height mt-5">
        <div className="col-xl-12 col-12" id="ecommerceChartView">
            
          <div className="widget-content tab-content bg-white p-20" style={{height:'650px'}}>
          {/* <h1 className="text-center">Soon</h1> */}
          </div>
        </div>

      </div>

      <div className="row match-height">
        <div className="col-xl-8 col-12" id="ecommerceChartView">
            
          <div className="widget-content tab-content bg-white p-20" style={{height:'350px'}}>
          {/* <BranchSummaryChart /> */}
          {/* <h1 className="text-center">Soon</h1> */}
          </div>
        </div>

        <div className="col-xl-4 col-lg-12">
         {/* <Dailyonline /> */}
        </div>
      </div>

   <Branch />

   </>
  )
}
Home.Layout =Theme;
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Theme from "../themes";
import Authlog from "../components/authlog"

import TotalSummary from "../components/totalSummary"
import OrderList from "../components/card-orderlist"
import Dailyonline from "../components/dailyonline"
import Branch from "../components/branch"
import BranchSummaryChart from "../components/groupChartSummary"

export default function Home() {
  return (
   <>
   <TotalSummary />
    <BranchSummaryChart />
   <Branch />
   </>
  )
}
Home.Layout =Theme;
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Theme from "@/components/themes";
import  'chartjs-plugin-datalabels';


import TotalSummary from "@/components/totalSummary"
import Branch from "@/components/branch"
import GroupChartSummary from "@/components/groupChartSummary"

export default function Home(props) {
  return (
   <>
   <TotalSummary />
    <GroupChartSummary />
   <Branch />
   </>
  )
}
Home.Layout =Theme;

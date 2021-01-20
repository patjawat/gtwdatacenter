import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Theme from "../themes";
import Authlog from "../components/authlog"

import TotalSummary from "../components/totalSummary"
import OrderList from "../components/card-orderlist"
import Inventory from "../components/inventory"
export default function Home() {
  return (
   <>
   
   <TotalSummary />
   <OrderList />
   <Inventory />

   </>
  )
}
Home.Layout =Theme;
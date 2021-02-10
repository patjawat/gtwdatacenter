import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Theme from "../themes";
import Authlog from "../components/authlog"

import TotalSummary from "../components/totalSummary"
import OrderList from "../components/card-orderlist"
import Dailyonline from "../components/dailyonline"
import Branch from "../components/branch"
import GroupChartSummary from "../components/groupChartSummary"

export default function Home(props) {
  return (
   <>
   {JSON.stringify(props.msg)}
   <TotalSummary />
    <GroupChartSummary />
   <Branch />
   </>
  )
}
Home.Layout =Theme;

export async function getStaticProps(context) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
  // const data = await res.json()
  const posts = await res.json()

  if (!posts) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      posts,
      msg:'Hello'
    }, // will be passed to the page component as props
  }
}

import React, { useState, useEffect } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import { useSelector } from "react-redux";

export default function ChartSmmery(props) {
  const store = useSelector((state) => state.infomation);
  const [barchart,setBarchart] = useState({})


  useEffect( async () => {
    await setBarchart(store ? store.provincegroup.data : [])
    // console.log(store.infomation)
  });


  const data
   = (canvas) => {
    const ctx = canvas.getContext("2d")
    const gradient = ctx.createLinearGradient(0, 0, 100, 0);

    const purple_orange_gradient = ctx.createLinearGradient(0, 0, 0, 600);
    purple_orange_gradient.addColorStop(0, '#17B169');
    purple_orange_gradient.addColorStop(1, '#01BAEF');

    const purple_orange_gradient0 = ctx.createLinearGradient(0, 0, 0, 600);
    purple_orange_gradient0.addColorStop(0, 'orange');
    purple_orange_gradient0.addColorStop(1, 'purple');


    const purple_orange_gradient1 = ctx.createLinearGradient(0, 0, 0, 600);
    purple_orange_gradient1.addColorStop(0, 'orange');
    purple_orange_gradient1.addColorStop(1, 'purple');


    const purple_orange_gradient2 = ctx.createLinearGradient(0, 0, 0, 600);
    purple_orange_gradient2.addColorStop(0, 'mediumorchid');
    purple_orange_gradient2.addColorStop(1, 'blueviolet');

    const purple_orange_gradient3 = ctx.createLinearGradient(0, 0, 0, 600);
    purple_orange_gradient3.addColorStop(0, 'chocolate');
    purple_orange_gradient3.addColorStop(1, 'blueviolet');

    
    // if (!store) return [];
    // let datasets = [];
    // store.person.datasets.data.map((item,i) => {
    //   datasets.push({
    //     backgroundColor: purple_orange_gradient,
    //     hoverBackgroundColor: purple_orange_gradient,
    //     label:item.label,
    //     data:item.data
    //   }
    //   );
    // });

    // return {
    //   labels: store.person.datasets.label,
    //   datasets:datasets,
    //   backgroundColor: gradient
    // }
  }

  return (
    <div>





<div className="row match-height">
  <div className="col-xl-8 col-12" id="ecommerceChartView">
    <div className="card card-shadow" style={{height: 421}}>
    {/* <Bar
          data={data}
          width={400}
          height={250}
          options={{
            responsive: true,
            title: { text: "สรุปจำนวนบุคลากรจังหวัดเชียงใหม่", display: true },
          }}
        /> */}

    </div>
  </div>
  <div className="col-xl-4 col-lg-12">
    <div className="card" style={{height: 520}}>
      <div className="card-header">
        <h4 className="card-title">รายการ</h4>
        <a className="heading-elements-toggle"><i className="la la-ellipsis-v font-medium-3" /></a>
        <div className="heading-elements">
          <ul className="list-inline mb-0">
            <li><a data-action="reload"><i className="ft-rotate-cw" /></a></li>
          </ul>
        </div>
      </div>
      <div className="card-content">
        <div id="new-orders" className="media-list position-relative ps">
          <div className="table-responsive">
            <table id="new-orders-table" className="table table-hover table-xl mb-0 p-0">
              <thead>
                <tr>
                  <th className="border-top-0">จังหวัด</th>
                  <th className="border-top-0">ครุภัณฑ์</th>
                  <th className="border-top-0">สิ่งก่อสร้าง</th>
                </tr>
              </thead>
              <tbody>

                  <ListGroup />    
                  <h1>Dankmemes</h1>        
                  {/* {JSON.stringify(barchart)} */}
                  {/* {store.provincegroup.data[0].map((item,i) =>{
                    return <p>{item}</p>
                  })} */}
              </tbody>
            </table>
          </div>
          <div className="ps__rail-x" style={{left: 0, bottom: 0}}><div className="ps__thumb-x" tabIndex={0} style={{left: 0, width: 0}} /></div><div className="ps__rail-y" style={{top: 0, right: 0}}><div className="ps__thumb-y" tabIndex={0} style={{top: 0, height: 0}} /></div></div>
      </div>
    </div>
  </div>
</div>


    </div>
  );
}


function ListGroup(props){

return <h5>{JSON.stringify(props)}</h5>

// return (

//   data.data.map((item,i) =>{
    
//     return(
//       <tr>

//                   <td className="text-truncate" style={{width:130}}>{item.name}</td>
//                   <td className="text-truncate p-1">
//                        {item.asset}
//                   </td>
//                   <td className="text-truncate">
//                       {item.person}
//                   </td>
//                 </tr>
//   )
// })

// )

}




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


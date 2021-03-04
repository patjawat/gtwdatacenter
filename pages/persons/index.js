import React, { useState, useEffect } from "react";
import Theme from "@/components/themes";
import NumberFormat from "react-number-format";
// import Sexpie from "@/components/sexPie";
// import Typepie from "@/components/typePie";
import Axios from "../../axios.config";
import Highcharts from "highcharts";
import { useSelector, useDispatch } from "react-redux";


import HighchartsReact from "highcharts-react-official";
import ColumnChart from "./columnChart";
import TotalSummary from "./totalSummary"

import persons from '../../services/persons'


export default function Index() {

    const dispatch = useDispatch();
    const person = useSelector((state) => state.persons);

    const [getDatasets, setDataset] = useState([]);
    const [typeSummary, setTypeSummary] = useState(null);
  
    useEffect(async () => {
      // await getData();
    }, []);
  
    const getData = async () => {
      try {
        // const datasets = await Axios.get("datacenter/persons/datasets");
        // const dataTypeSummary = await Axios.get("datacenter/persons/type-summary");
    
        // // const getAllResponse = await Promise.all([datasets, dataTypeSummary])
        // // console.log('response: ', getAllResponse);
        // setDataset(datasets.data);
        // setTypeSummary(dataTypeSummary.data);
        // // do something about response
        // console.log('load persons')
        persons.getAll()
          .then(res => {
            // setTutorials(response.data);
          dispatch({type: 'GET_PERSON',payload: res.data});

            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });

      } catch (error) {
        console.error(error)
      }
    };
// 
    return (
        <div>
           <TotalSummary />
            <ColumnChart />
        </div>
    )
}

Index.Layout = Theme;

import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import Cookies from "js-cookie";
import axios from "../axios.config";
import Header from "./header";
import Sidebar from "./sidebar";
import Content from "./content";
import Footer from "./footer";

export default function AdminLte3({ children }) {
  const router = useRouter();
  const dispatch = useDispatch();
  const store = useSelector((state) => state);
  const token = Cookies.get("token");

  useEffect(() => {
  //   (async () => {
  //     // ตรวจสอบ user Login
  //     if(!token){
  //       router.push('/login')
  //     }

  //     if (!store.user) {
  //       try{
  //         const { data } = await axios.get('user')
  //         dispatch({type: 'GET_USER',payload: data});
  //       } catch(error) {
  //   console.log("error", error);
  //   router.push('/login')

  //   // appropriately handle the error
  // }
      
  //     }
  //     // จบดารตรวจสอบ User login
  //   })();
  getData()
  }, []);


  const getData = async () => {
    const { data } = await axios.get('datacenter')
    console.log(data);
    dispatch({type: 'GET_INFOMATION',payload: data});
  }

  return (
    <>
      <Header />
      <Sidebar />

      <div className="app-content content">
        <div className="content-overlay" />
        <div className="content-wrapper">
          <div className="content-header row">
            
          </div>
          <div className="content-body">
          {children}
          </div>
        </div>
      </div>
      <Footer />

    </>
  );
}

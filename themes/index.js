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
    (async () => {
      // ตรวจสอบ user Login
      if(!token){
        router.push('/login')
      }

      if (!store.user) {
        try{
          const { data } = await axios.get('user')
          dispatch({type: 'GET_USER',payload: data});
        } catch(error) {
    console.log("error", error);
    router.push('/login')

    // appropriately handle the error
  }
      
      }
      // จบดารตรวจสอบ User login
    })();

  }, []);

  return (
    <>
      <Header />
      <Sidebar />
      <div>
        <div
          className="sidenav-overlay"
          style={{
            touchAction: "pan-y",
            userSelect: "none",
            WebkitUserDrag: "none",
            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
          }}
        />
        <div
          className="drag-target"
          style={{
            touchAction: "pan-y",
            userSelect: "none",
            WebkitUserDrag: "none",
            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
          }}
        />
      </div>

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

      {/* <Header />
      <Sidebar />
      <div className="content-wrapper" style={{ minHeight: '1289.56px' }}>
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>Blank Page {router.pathname}</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item"><a href="#">Home</a></li>
                  <li className="breadcrumb-item active">Blank Page</li>
                </ol>
              </div>
            </div>
          </div>
        </section>
        <section className="content"> */}
     
      {/* </section>
      </div>
      <Footer /> */}
    </>
  );
}

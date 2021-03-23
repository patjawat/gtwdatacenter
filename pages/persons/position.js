import React, { useState, useEffect } from "react";
import Theme from "@/components/themes";
import Axios from "../../axios.config";
import { useSelector, useDispatch } from "react-redux";
export default function Position() {
  const dispatch = useDispatch();

  const [data, setData] = useState([]);
  const [links, setLinks] = useState([]);

  useEffect( async () => {
    await dispatch({ type: "THEME_LOADING" });

    await loadData();
    console.log("component didmout");
  }, []);

  async function loadData() {
    let res = await Axios.get(
      "datacenter/persons/reports-position-in-province"
    );
    console.log(res);
    setData(res.data.items.data);
    setLinks(res.data.items.links);
    await dispatch({ type: "THEME_COMPLATE" });

    console.log("loading data");
  }

  return (
    <div>
      <ContentHeader />
      <div className="card">
        <div className="card-header">
          <h3 className="card-title">แสดงข้อรายงาน</h3>
        </div>
        {/* /.card-header */}
        <div
          className="card-body table-responsive p-0"
          style={{ height: "430px" }}
        >
          <table className="table table-head-fixed text-nowrap table-striped">
            <thead>
              <tr>
                <th style={{ width: 300 }}>วิชาชีพ</th>
                <th style={{ textAlign: "center" }}>น่าน</th>
                <th style={{ textAlign: "center" }}>พะเยา</th>
                <th style={{ textAlign: "center" }}>ลำปาง</th>
                <th style={{ textAlign: "center" }}>ลำพูน</th>
                <th style={{ textAlign: "center" }}>เชียงราย</th>
                <th style={{ textAlign: "center" }}>เชียงใหม่</th>
                <th style={{ textAlign: "center" }}>แพร่</th>
                <th style={{ textAlign: "center" }}>แม่ฮ่องสอน</th>
                <th style={{ textAlign: "center" }}>รวมเขต 1</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, i) => {
                return (
                  <tr key={i}>
                    <td>{item.name}</td>
                    <td style={{ textAlign: "center" }}>{item.nan}</td>
                    <td style={{ textAlign: "center" }}>{item.phayao}</td>
                    <td style={{ textAlign: "center" }}>{item.lampang}</td>
                    <td style={{ textAlign: "center" }}>{item.lampoon}</td>
                    <td style={{ textAlign: "center" }}>{item.chiangrai}</td>
                    <td style={{ textAlign: "center" }}>{item.chiangmai}</td>
                    <td style={{ textAlign: "center" }}>{item.phrae}</td>
                    <td style={{ textAlign: "center" }}>{item.maehongson}</td>
                    <td style={{ textAlign: "center" }}>{item.total}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        {/* /.card-body */}
        <div className="card-footer clearfix">
          <ul className="pagination pagination-sm m-0 float-right">
            {links.map((item, i) => {
              return (
                <li className={item.active ? "page-item active" : "page-item"}>
                  <a
                    className="page-link"
                    href="#"
                    onClick={async () => {
                      await dispatch({ type: "THEME_LOADING" });

                      let res = await Axios.get(
                        "datacenter/persons/reports-position-in-province",
                        {
                          params: { page: item.label },
                        }
                      );

                      setData(res.data.items.data);
                      setLinks(res.data.items.links);
                      console.log("loading data");
                      await dispatch({ type: "THEME_COMPLATE" });
                      
                    }}
                  >
                    {item.label === "&laquo; Previous"
                      ? "Previous"
                      : item.label === "Next &raquo;"
                      ? "Next"
                      : item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

function ContentHeader() {
  return (
    <>
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 className="m-0">รายงานบุคลากรแยกตามวิชาชีพ</h1>
            </div>
            {/* /.col */}
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item">
                  <a href="#">หน้าหลัก</a>
                </li>
                <li className="breadcrumb-item active">บุคคลากร</li>
              </ol>
            </div>
            {/* /.col */}
          </div>
          {/* /.row */}
        </div>
        {/* /.container-fluid */}
      </div>
    </>
  );
}
Position.Layout = Theme;

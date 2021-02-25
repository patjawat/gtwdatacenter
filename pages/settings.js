import React, { useState, useEffect } from "react";
import Theme from "@/components/themes";
import Axios from "../axios.config";
import axios from "axios";
import { useSelector, useDispatch } from 'react-redux'




function Branch({url}){
  // const [data,setData] = useState([])
  // const res = await Axios.get("branchs");
  // console.log(res.data);
  // setData(res.data);
  return url;
}


export default function Settigns() {
  const [branchs, setBranchs] = useState([]);
  const counter = useSelector(state => state.book.numOfBooks);
  const dispatch = useDispatch();

  useEffect(() => {
    getBranch()
  }, []);

  const getBranch = async () => {
    const res = await Axios.get("branchs");
    console.log(res.data);
    setBranchs(res.data);
  };


  async function getDatabranch(){
    const todoIdList = [1, 2, 3, 4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40]
    await Promise.all(
      todoIdList.map(async (id) => {
        // const response = await fetch('https://jsonplaceholder.typicode.com/todos/')
        // const todo = await response.json()
        const {data} = await axios.get('https://jsonplaceholder.typicode.com/todos/');

        console.log(data)
        dispatch({
          type: "ADD_BOOK",
          step: 1
      })
      })
    )
    console.timeEnd('.map()');
  }

  return (
    <div>
      <div className="content-body">
      {JSON.stringify(counter)}

      <button className="btn btn-success"
                onClick={() =>
                    dispatch({
                        type: "ADD_BOOK",
                        step: 1
                    })
                }
            >
                เพิ่ม + 
      </button>
      {'  '}

            <button
            className="btn btn-danger"
                onClick={() =>
                    dispatch({
                        type: "BUY_BOOK",
                        step: 1
                    })
                }
            >
                ลบ -
      </button>
        <section className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">My Task List</h4>
                <a className="heading-elements-toggle">
                  <i className="la la-ellipsis-h font-medium-3" />
                </a>
                <div className="heading-elements">
                  <button
                    className="btn btn-primary btn-sm"
                    onClick={() => {
                      // getBranch();
                      getDatabranch();
                    }}
                  >
                    <i className="ft-plus white" /> New Task
                  </button>
                  <span className="dropdown">
                    <button
                      id="btnSearchDrop1"
                      type="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                      className="btn btn-warning btn-sm dropdown-toggle dropdown-menu-right"
                    >
                      <i className="ft-download white" />
                    </button>
                    <span
                      aria-labelledby="btnSearchDrop1"
                      className="dropdown-menu mt-1 dropdown-menu-right"
                      x-placement="bottom-end"
                      style={{
                        position: "absolute",
                        willChange: "transform",
                        top: 0,
                        left: 0,
                        transform: "translate3d(64px, 25px, 0px)",
                      }}
                    >
                      <a href="#" className="dropdown-item">
                        <i className="la la-calendar" /> Due Date
                      </a>
                      <a href="#" className="dropdown-item">
                        <i className="la la-random" /> Priority{" "}
                      </a>
                      <a href="#" className="dropdown-item">
                        <i className="la la-bar-chart" /> Progress
                      </a>
                      <a href="#" className="dropdown-item">
                        <i className="la la-user" /> Assign to
                      </a>
                    </span>
                  </span>
                  <button className="btn btn-success btn-sm">
                    <i className="ft-settings white" />
                  </button>
                </div>
              </div>
              <div className="card-content">
                <div className="card-body">
                  {/* Task List table */}
                  <div className="table-responsive">
                    <div
                      id="project-task-list_wrapper"
                      className="dataTables_wrapper dt-bootstrap4"
                    >
                      <div className="row">
                        <div className="col-sm-12">
                          <table
                            id="project-task-list"
                            className="table table-white-space table-bordered row-grouping display no-wrap icheck table-middle dataTable"
                            role="grid"
                            aria-describedby="project-task-list_info"
                          >
                            <thead>
                              <tr>
                                <th>รหัส</th>
                                <th>รายชื่อ</th>
                                <th>ดำเนินการ</th>
                              </tr>
                            </thead>
                            <tbody>
                              {branchs.map((item, i) => {
                                return (
                                  <>
                                    <tr>
                                      <td key={i}>
                                     
                                      </td>
                                      <td>{item.name}</td>
                                      <td>b</td>
                                    </tr>
        
                                  </>
                                );
                              })}
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-12 col-md-5">
                          <div
                            className="dataTables_info"
                            id="project-task-list_info"
                            role="status"
                            aria-live="polite"
                          >
                            Showing 11 to 20 of 28 entries
                          </div>
                        </div>
                        <div className="col-sm-12 col-md-7">
                          <div
                            className="dataTables_paginate paging_simple_numbers"
                            id="project-task-list_paginate"
                          >
                            <ul className="pagination">
                              <li
                                className="paginate_button page-item previous"
                                id="project-task-list_previous"
                              >
                                <a
                                  href="#"
                                  aria-controls="project-task-list"
                                  data-dt-idx={0}
                                  tabIndex={0}
                                  className="page-link"
                                >
                                  Previous
                                </a>
                              </li>
                              <li className="paginate_button page-item ">
                                <a
                                  href="#"
                                  aria-controls="project-task-list"
                                  data-dt-idx={1}
                                  tabIndex={0}
                                  className="page-link"
                                >
                                  1
                                </a>
                              </li>
                              <li className="paginate_button page-item active">
                                <a
                                  href="#"
                                  aria-controls="project-task-list"
                                  data-dt-idx={2}
                                  tabIndex={0}
                                  className="page-link"
                                >
                                  2
                                </a>
                              </li>
                              <li className="paginate_button page-item ">
                                <a
                                  href="#"
                                  aria-controls="project-task-list"
                                  data-dt-idx={3}
                                  tabIndex={0}
                                  className="page-link"
                                >
                                  3
                                </a>
                              </li>
                              <li
                                className="paginate_button page-item next"
                                id="project-task-list_next"
                              >
                                <a
                                  href="#"
                                  aria-controls="project-task-list"
                                  data-dt-idx={4}
                                  tabIndex={0}
                                  className="page-link"
                                >
                                  Next
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*/ Task List table */}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}


Settigns.Layout = Theme;

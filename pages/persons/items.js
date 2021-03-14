import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import NumberFormat from "react-number-format";
import Theme from "@/components/themes";
import { useTable, usePagination } from "react-table";
import Axios from "../../axios.config";
import { useForm } from "react-hook-form";
import { Modal, Button } from "antd";
import moment from "moment";
import Highlighter from "react-highlight-words";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Row,
  Col,
} from "reactstrap";
import classnames from "classnames";

import { ThaiDate } from "@/components/formatDate";

export default function Items() {
  const dispatch = useDispatch();
  const search = useSelector((state) => state.search);
  const [persons, setPersons] = useState([]);
  const [loading, setLoading] = useState(false);
  const [total, setTotal] = useState(0);
  const [links, setLinks] = useState([]);
  const [profile, setProfile] = useState({});

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    dispatch({ type: "SEARCH_KEY", payload: { key: data.search } });
    setLoading(true);
    getPersons(data.search);
  };

  const [visible, setVisible] = useState(false);

  function InfoModal() {}

  useEffect(() => {}, []);

  async function getPersons(key) {
    let { data } = await Axios.get("datacenter/persons/items", {
      params: { key: key },
    });
    console.log(data);
    setPersons(data.data);
    setLoading(false);
    setTotal(data.total);
    setLinks(data.links);
  }

  function getProfile(item) {
    setVisible(true);
    setProfile(item);
  }

  return (
    <div>
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 className="m-0">ระบบฐานข้อมูลบุคลากร เขตสุขภาพที่ 1</h1>
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

      <Modal
        title="แสดงข้อมูล"
        // centered
        visible={visible}
        onOk={() => setVisible(false)}
        // onCancel={() => setVisible(false)}
        width={1000}
        footer={[
          <Button key="3" type="danger" onClick={() => setVisible(false)}>
            ปิด
          </Button>,
        ]}
      >
        <Profile profile={profile} />
      </Modal>

      <div className="card">
        <div className="card-header">
          <h3 className="card-title">
            ค้นหาบุคลากรทั้งหมดในเขตสุขภาพที่ 1 จำนวน{" "}
            <NumberFormat
              value={total}
              displayType={"text"}
              thousandSeparator={true}
              prefix={""}
            />{" "}
            รายการ
          </h3>
          <div className="card-tools">
            <form
              className="form-inline ml-3"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div
                className="input-group input-group-sm"
                style={{ width: 200 }}
              >
                <input
                  name="search"
                  className="form-control float-right"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  ref={register}
                />
                <div className="input-group-append">
                  <button type="submit" className="btn btn-default">
                    <i className="fas fa-search" />
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        {/* /.card-header */}
        <div
          className="card-body table-responsive p-0"
          style={{ height: "430px" }}
        >
          {loading ? (
            <h1 className="text-center">loading...</h1>
          ) : (
            <table className="table table-head-fixed text-nowrap table-striped">
              <thead>
                <tr>
                  <th style={{ width: 10 }}>#</th>
                  <th>รหัส</th>
                  <th>ชื่อ-นามสกุล</th>
                  <th>ตำแหน่ง</th>
                  <th>ระดับ</th>
                  <th>หน่วยบริการ</th>
                  <th>จังหวัด</th>
                  <th>ประเภท</th>
                  <th style={{ textAlign: "center" }} width="115">
                    ดำเนินการ
                  </th>
                </tr>
              </thead>

              <tbody>
                {persons.map((item, i) => {
                  return (
                    <tr key={i}>
                      <td>{(i = i + 1)}</td>
                      <td>
                        <Highlighter
                          highlightClassName="YourHighlightClass"
                          searchWords={[search.key]}
                          autoEscape={true}
                          textToHighlight={item.HOSPCODE}
                        />
                      </td>
                      <td>
                        <Highlighter
                          highlightClassName="YourHighlightClass"
                          searchWords={[search.key]}
                          autoEscape={true}
                          textToHighlight={item.HR_FNAME + " " + item.HR_LNAME}
                        />
                      </td>
                      <td>
                        <Highlighter
                          highlightClassName="YourHighlightClass"
                          searchWords={[search.key]}
                          autoEscape={true}
                          textToHighlight={item.POSITION_IN_WORK}
                        />
                      </td>
                      <td>
                        <Highlighter
                          highlightClassName="YourHighlightClass"
                          searchWords={[search.key]}
                          autoEscape={true}
                          textToHighlight={item.HR_LEVEL_NAME}
                        />
                      </td>
                      <td>
                        <Highlighter
                          highlightClassName="YourHighlightClass"
                          searchWords={[search.key]}
                          autoEscape={true}
                          textToHighlight={item.name}
                        />
                      </td>
                      <td>
                        <Highlighter
                          highlightClassName="YourHighlightClass"
                          searchWords={[search.key]}
                          autoEscape={true}
                          textToHighlight={item.province}
                        />
                      </td>
                      <td>
                        <Highlighter
                          highlightClassName="YourHighlightClass"
                          searchWords={[search.key]}
                          autoEscape={true}
                          textToHighlight={item.HR_PERSON_TYPE_NAME}
                        />
                      </td>
                      <td style={{ textAlign: "center" }}>
                        <Button
                          className="btn btn-outline-primary btn-xs"
                          onClick={async () => {
                            await getProfile(item);
                          }}
                        >
                          เพิ่มเติม
                        </Button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>
        {/* {JSON.stringify(links)} */}
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
                      let { data } = await Axios.get(
                        "datacenter/persons/items",
                        {
                          params: { key: search.key, page: item.label },
                        }
                      );
                      console.log(data);
                      setPersons(data.data);
                      setLoading(false);
                      setTotal(data.total);
                      setLinks(data.links);
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

function Profile({ profile }) {
  const [activeTab, setActiveTab] = useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <>
      <div className="row">
        <div className="col-4">
          <div className="card card-primary card-outline">
            <div className="card-body box-profile">
              <div className="text-center">
                <img
                  src="/datacenterv2/img/default-profile.png"
                  className="profile-user-img img-fluid img-circle"
                  alt="User Image"
                />
              </div>
              <h3 className="profile-username text-center">
                {profile.HR_FNAME} {profile.HR_LNAME}
              </h3>
              <p className="text-muted text-center">
                {profile.HR_PERSON_TYPE_NAME}
              </p>
              <ul className="list-group list-group-unbordered mb-3">
                <li className="list-group-item">
                  <b>เพศ</b> <a className="float-right">{profile.SEX_NAME}</a>
                </li>
                <li className="list-group-item">
                  <b>ตำแหน่ง</b>{" "}
                  <a className="float-right">{profile.POSITION_IN_WORK}</a>
                </li>
                <li className="list-group-item">
                  <b>หน่วยงาน</b>{" "}
                  <a className="float-right">
                    {profile.HR_DEPARTMENT_SUB_SUB_NAME}
                  </a>
                </li>
                <li className="list-group-item">
                  <b>วันที่บรรจุ</b>{" "}
                  <a className="float-right">
                    {ThaiDate(profile.HR_STARTWORK_DATE)}
                  </a>
                </li>
                <li className="list-group-item">
                  <b>สถานะปัจจุบัน</b>{" "}
                  <a className="float-right">{profile.HR_STATUS_NAME}</a>
                </li>
              </ul>
            </div>
            {/* /.card-body */}
          </div>
        </div>
        <div className="col-8">
          <div className="card">
            <div className="card-header p-2">
              <Nav pills>
                <NavItem>
                  <NavLink
                    className={classnames({ active: activeTab === "1" })}
                    onClick={() => {
                      toggle("1");
                    }}
                  >
                    ข้อมูลทั่วไป
                  </NavLink>
                </NavItem>
                {/* <NavItem>
                  <NavLink
                    className={classnames({ active: activeTab === "2" })}
                    onClick={() => {
                      toggle("2");
                    }}
                  >
                    หน่วยงานตามจ.18
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classnames({ active: activeTab === "3" })}
                    onClick={() => {
                      toggle("3");
                    }}
                  >
                    การศึกษา(วุฒิในตำแหน่ง)
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classnames({ active: activeTab === "4" })}
                    onClick={() => {
                      toggle("4");
                    }}
                  >
                    การศึกษา(วุฒิสูงสุด)
                  </NavLink>
                </NavItem> */}
              </Nav>
            </div>

            <div className="card-body">
              {/* <pre>{JSON.stringify(profile, null, 2) }</pre> */}
              <TabContent activeTab={activeTab}>
                <TabPane tabId="1">
                  <Row>
                    <Col sm="12">
                      <div className="form-row mt-4">
                        <div className="col-sm-6 pb-3">
                          <label htmlFor="exampleAccount">กลุ่มงาน</label>
                          <input
                            type="text"
                            className="form-control"
                            id="exampleAccount"
                            placeholder={profile.HR_DEPARTMENT_NAME}
                            disabled="true"
                          />
                        </div>
                        <div className="col-sm-6 pb-3">
                          <label htmlFor="exampleCtrl">ฝ่าย/แผนก</label>
                          <input
                            type="text"
                            className="form-control"
                            id="exampleCtrl"
                            placeholder={profile.HR_DEPARTMENT_SUB_NAME}
                            disabled="true"
                          />
                        </div>
                        <div className="col-sm-6 pb-3">
                          <label htmlFor="exampleCity">
                            เลขใบประกอบวิชาชีพ
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="exampleCity"
                            disabled="true"
                            placeholder={profile.VCODE}
                          />
                        </div>
                        <div className="col-sm-6 pb-3">
                          <label htmlFor="exampleCity">วดป.รับใบประกอบ</label>
                          <input
                            type="text"
                            className="form-control"
                            id="exampleCity"
                            disabled="true"
                            placeholder={ThaiDate(profile.HR_STARTWORK_DATE)}
                          />
                        </div>
                        <div className="col-sm-6 pb-3">
                          <label htmlFor="exampleCity">ระดับ</label>
                          <input
                            type="text"
                            className="form-control"
                            id="exampleCity"
                            disabled="true"
                            placeholder={profile.HR_LEVEL_NAME}
                          />
                        </div>
                        <div className="col-sm-6 pb-3">
                          <label htmlFor="exampleCity">กลุ่มบุคลากร</label>
                          <input
                            type="text"
                            className="form-control"
                            id="exampleCity"
                            disabled="true"
                            placeholder={profile.HR_PERSON_TYPE_NAME}
                          />
                        </div>

                        {/* <span class="badge badge-success">อัพเดทล่าสุด</span> */}
                      </div>
                    </Col>
                  </Row>
                </TabPane>
                {/* <TabPane tabId="2">xxx</TabPane>
                <TabPane tabId="3">xxx</TabPane>
                <TabPane tabId="4">xxx</TabPane> */}
              </TabContent>
            </div>
          </div>
          <div className="callout callout-warning">
            <h5>
              <i className="fas fa-info" /> Note :{" "}
            </h5>
            อัพเดทล่าสุด: {ThaiDate(profile.updated_at)}
          </div>
        </div>
      </div>
    </>
  );
}

Items.Layout = Theme;

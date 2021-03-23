import React from "react";
import Link from "next/link";
import { useDispatch } from "react-redux";

export default function Sidebar() {
  const dispatch = useDispatch();

  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
      {/* Brand Logo */}
      <a href="../../index3.html" className="brand-link">
        <img
          src="/datacenterv2/img/logo.png"
          alt="AdminLTE Logo"
          className="brand-image img-circle elevation-3"
          style={{ opacity: ".8" }}
        />
        <span className="brand-text font-weight-light">DataCenter</span>
      </a>
      {/* Sidebar */}
      <div className="sidebar">
        {/* Sidebar user (optional) */}
        {/* <div className="user-panel mt-3 pb-3 mb-3 d-flex">
      <div className="image">
        <img src="/datacenterv2/img/default-profile.png" className="img-circle elevation-2" alt="User Image" />
      </div>
      <div className="info">
        <a href="#" className="d-block">Alexander Pierce</a>
      </div>
    </div> */}
        {/* SidebarSearch Form */}
        <div className="form-inline">
          <div className="input-group" data-widget="sidebar-search">
            <input
              className="form-control form-control-sidebar"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <div className="input-group-append">
              <button className="btn btn-sidebar">
                <i className="fas fa-search fa-fw" />
              </button>
            </div>
          </div>
          <div className="sidebar-search-results">
            <div className="list-group">
              <a href="#" className="list-group-item">
                <div className="search-title">
                  <b className="text-light" />N<b className="text-light" />o
                  <b className="text-light" /> <b className="text-light" />e
                  <b className="text-light" />l<b className="text-light" />e
                  <b className="text-light" />m<b className="text-light" />e
                  <b className="text-light" />n<b className="text-light" />t
                  <b className="text-light" /> <b className="text-light" />f
                  <b className="text-light" />o<b className="text-light" />u
                  <b className="text-light" />n<b className="text-light" />d
                  <b className="text-light" />!<b className="text-light" />
                </div>
                <div className="search-path"></div>
              </a>
            </div>
          </div>
        </div>
        {/* Sidebar Menu */}
        <nav className="mt-2">
          <ul
            className="nav nav-pills nav-sidebar flex-column"
            data-widget="treeview"
            role="menu"
            data-accordion="false"
          >
            {/* Add icons to the links using the .nav-icon class
             with font-awesome or any other icon font library */}
            {/* <li className="nav-item">
          <a href="#" className="nav-link">
            <i className="nav-icon fas fa-tachometer-alt" />
            <p>
              Dashboard
              <i className="right fas fa-angle-left" />
            </p>
          </a>
          <ul className="nav nav-treeview">
            <li className="nav-item">
              <a href="../../index.html" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>Dashboard v1</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="../../index2.html" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>Dashboard v2</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="../../index3.html" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>Dashboard v3</p>
              </a>
            </li>
          </ul>

        </li> */}
            <li className="nav-item">
              <Link href="/" >
                <a href="" className="nav-link" >
                  <i className="fas fa-home nav-icon" />
                  <p>Home</p>
                </a>
              </Link>
            </li>
            <li className="nav-header"> บุคคลากร</li>
            <li className="nav-item">
              <Link href="/persons/items">
                <a href="" className="nav-link">
                  <i className="far fa-user nav-icon" />
                  <p>ค้นหาบุคคลากรทั้งหมด</p>
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                <i className="nav-icon fas fa-search" />
                <p>
                  รายงาน
                  <i className="fas fa-angle-left right" />
                </p>
              </a>
              <ul className="nav nav-treeview" style={{ display: "none" }}>
                <li className="nav-item">
                  <Link href="/persons/position">
                    <a href="#" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>บุคลากรทุกวิชาชีพ</p>
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/persons/profession">
                    <a href="#" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>บุคลากรแยกตามวิชาชีพ</p>
                    </a>
                  </Link>
                </li>
               
              </ul>
            </li>

            {/* <li className="nav-item">
        <Link href="/persons">

              <a href="" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>Persons</p>
              </a>
        </Link>
            </li> */}
          </ul>
        </nav>
        {/* /.sidebar-menu */}
      </div>
      {/* /.sidebar */}
    </aside>
  );
}

import React from 'react'
import Link from 'next/link'
import { useSelector, useDispatch } from 'react-redux'
import { useRouter } from 'next/router'
import Cookies from 'js-cookie'

export default function Header() {
  const store = useSelector(state => state);
  const username = store.user ? store.user.profile.name : null;

  const router = useRouter();

  return (
    <nav className="header-navbar navbar-expand-lg navbar navbar-with-menu navbar-without-dd-arrow fixed-top navbar-semi-dark navbar-shadow">
    <div className="navbar-wrapper">
      <div className="navbar-header">
        <ul className="nav navbar-nav flex-row">
            <li className="nav-item mobile-menu d-lg-none mr-auto">
              <a
                className="nav-link nav-menu-main menu-toggle hidden-xs is-active"
                href="#"
              >
                <i className="ft-menu font-large-1" />
              </a>
            </li>
            <li className="nav-item mr-auto">
              <a className="navbar-brand" href="#">
                <h3 className="brand-text">Datacenter</h3>
              </a>
            </li>
            <li className="nav-item d-none d-lg-block nav-toggle">
              <a
                className="nav-link modern-nav-toggle pr-0"
                data-toggle="collapse"
              >
                <i
                  className="toggle-icon ft-toggle-right font-medium-3 white"
                  data-ticon="ft-toggle-right"
                />
              </a>
            </li>
            <li className="nav-item d-lg-none">
              <a
                className="nav-link open-navbar-container"
                data-toggle="collapse"
                data-target="#navbar-mobile"
              >
                <i className="la la-ellipsis-v" />
              </a>
            </li>
          </ul>
        </div>
        <div className="navbar-container content">
          <div className="collapse navbar-collapse" id="navbar-mobile">
            <ul className="nav navbar-nav mr-auto float-left">
              <li className="nav-item d-none d-lg-block">
                <a className="nav-link nav-link-expand" href="#">
                  <i className="ficon ft-maximize" />
                </a>
              </li>
              <li className="dropdown nav-item mega-dropdown d-none d-lg-block">
                <a
                  className="dropdown-toggle nav-link"
                  href="#"
                  data-toggle="dropdown"
                >
                  Mega
                </a>
                <ul className="mega-dropdown-menu dropdown-menu row p-1">
                  <li className="col-md-4 bg-mega p-2">
                    <h3 className="text-white mb-1 font-weight-bold">
                      Mega Menu Sidebar
                    </h3>
                    <p className="text-white line-height-2">
                      Candy canes bonbon toffee. Cheesecake dragée gummi bears
                      chupa chups powder bonbon. Apple pie cookie sweet.
                    </p>
                    <button className="btn btn-outline-white">
                      Learn More
                    </button>
                  </li>
                  <li className="col-md-5 px-2">
                    <h6 className="font-weight-bold font-medium-2 ml-1">
                      Admin Panel
                    </h6>
                    <ul className="row mt-2">
                      <li className="col-6 col-xl-4">
                        <a
                          className="text-center mb-2 mb-xl-3"
                          href="../ecommerce-menu-template"
                          target="_blank"
                        >
                          <i className="la la-shopping-cart font-large-1 mr-0" />
                          <p className="font-medium-2 mt-25 mb-0">eCommerce</p>
                        </a>
                      </li>
                      <li className="col-6 col-xl-4">
                        <a
                          className="text-center mb-2 mb-xl-3"
                          href="../travel-menu-template"
                          target="_blank"
                        >
                          <i className="la la-plane font-large-1 mr-0" />
                          <p className="font-medium-2 mt-25 mb-0">Travel</p>
                        </a>
                      </li>
                      <li className="col-6 col-xl-4">
                        <a
                          className="text-center mb-2 mb-xl-3 mt-75 mt-xl-0"
                          href="../hospital-menu-template"
                          target="_blank"
                        >
                          <i className="la la-stethoscope font-large-1 mr-0" />
                          <p className="font-medium-2 mt-25 mb-0">Hospital</p>
                        </a>
                      </li>
                      <li className="col-6 col-xl-4">
                        <a
                          className="text-center mb-2 mt-75 mt-xl-0"
                          href="../crypto-menu-template"
                          target="_blank"
                        >
                          <i className="la la-bitcoin font-large-1 mr-0" />
                          <p className="font-medium-2 mt-25 mb-50">Crypto</p>
                        </a>
                      </li>
                      <li className="col-6 col-xl-4">
                        <a
                          className="text-center mb-2 mt-75 mt-xl-0"
                          href="../support-menu-template"
                          target="_blank"
                        >
                          <i className="la la-tag font-large-1 mr-0" />
                          <p className="font-medium-2 mt-25 mb-50">Support</p>
                        </a>
                      </li>
                      <li className="col-6 col-xl-4">
                        <a
                          className="text-center mb-2 mt-75 mt-xl-0"
                          href="../bank-menu-template"
                          target="_blank"
                        >
                          <i className="la la-bank font-large-1 mr-0" />
                          <p className="font-medium-2 mt-25 mb-50">Bank</p>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="col-md-3">
                    <h6 className="font-weight-bold font-medium-2">
                      Components
                    </h6>
                    <ul className="row mt-1 mt-xl-2">
                      <li className="col-12 col-xl-6 pl-0">
                        <ul className="mega-component-list">
                          <li className="mega-component-item">
                            <a
                              className="mb-1 mb-xl-2"
                              href="component-alerts.html"
                              target="_blank"
                            >
                              Alert
                            </a>
                          </li>
                          <li className="mega-component-item">
                            <a
                              className="mb-1 mb-xl-2"
                              href="component-callout.html"
                              target="_blank"
                            >
                              Callout
                            </a>
                          </li>
                          <li className="mega-component-item">
                            <a
                              className="mb-1 mb-xl-2"
                              href="component-buttons-basic.html"
                              target="_blank"
                            >
                              Buttons
                            </a>
                          </li>
                          <li className="mega-component-item">
                            <a
                              className="mb-1 mb-xl-2"
                              href="component-carousel.html"
                              target="_blank"
                            >
                              Carousel
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="col-12 col-xl-6 pl-0">
                        <ul className="mega-component-list">
                          <li className="mega-component-item">
                            <a
                              className="mb-1 mb-xl-2"
                              href="component-dropdowns.html"
                              target="_blank"
                            >
                              Drop Down
                            </a>
                          </li>
                          <li className="mega-component-item">
                            <a
                              className="mb-1 mb-xl-2"
                              href="component-list-group.html"
                              target="_blank"
                            >
                              List Group
                            </a>
                          </li>
                          <li className="mega-component-item">
                            <a
                              className="mb-1 mb-xl-2"
                              href="component-modals.html"
                              target="_blank"
                            >
                              Modals
                            </a>
                          </li>
                          <li className="mega-component-item">
                            <a
                              className="mb-1 mb-xl-2"
                              href="component-pagination.html"
                              target="_blank"
                            >
                              Pagination
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="nav-item nav-search">
                <a className="nav-link nav-link-search" href="#">
                  <i className="ficon ft-search" />
                </a>
                <div className="search-input">
                  <input
                    className="input"
                    type="text"
                    placeholder="Explore Modern..."
                    tabIndex={0}
                    data-search="template-list"
                  />
                  <div className="search-input-close">
                    <i className="ft-x" />
                  </div>
                  <ul className="search-list" />
                </div>
              </li>
            </ul>
            <ul className="nav navbar-nav float-right">
              
              {/* <li className="dropdown dropdown-notification nav-item">
                <a
                  className="nav-link nav-link-label"
                  href="#"
                  data-toggle="dropdown"
                >
                  <i className="ficon ft-bell" />
                  <span className="badge badge-pill badge-danger badge-up badge-glow">
                    5
                  </span>
                </a>
                <ul className="dropdown-menu dropdown-menu-media dropdown-menu-right">
                  <li className="dropdown-menu-header">
                    <h6 className="dropdown-header m-0">
                      <span className="grey darken-2">Notifications</span>
                    </h6>
                    <span className="notification-tag badge badge-danger float-right m-0">
                      5 New
                    </span>
                  </li>
                  <li className="scrollable-container media-list w-100 ps">
                    <a href="#">
                      <div className="media">
                        <div className="media-left align-self-center">
                          <i className="ft-plus-square icon-bg-circle bg-cyan mr-0" />
                        </div>
                        <div className="media-body">
                          <h6 className="media-heading">You have new order!</h6>
                          <p className="notification-text font-small-3 text-muted">
                            Lorem ipsum dolor sit amet, consectetuer elit.
                          </p>
                          <small>
                            <time
                              className="media-meta text-muted"
                              dateTime="2015-06-11T18:29:20+08:00"
                            >
                              30 minutes ago
                            </time>
                          </small>
                        </div>
                      </div>
                    </a>
                    <a href="#">
                      <div className="media">
                        <div className="media-left align-self-center">
                          <i className="ft-download-cloud icon-bg-circle bg-red bg-darken-1 mr-0" />
                        </div>
                        <div className="media-body">
                          <h6 className="media-heading red darken-1">
                            99% Server load
                          </h6>
                          <p className="notification-text font-small-3 text-muted">
                            Aliquam tincidunt mauris eu risus.
                          </p>
                          <small>
                            <time
                              className="media-meta text-muted"
                              dateTime="2015-06-11T18:29:20+08:00"
                            >
                              Five hour ago
                            </time>
                          </small>
                        </div>
                      </div>
                    </a>
                    <a href="#">
                      <div className="media">
                        <div className="media-left align-self-center">
                          <i className="ft-alert-triangle icon-bg-circle bg-yellow bg-darken-3 mr-0" />
                        </div>
                        <div className="media-body">
                          <h6 className="media-heading yellow darken-3">
                            Warning notifixation
                          </h6>
                          <p className="notification-text font-small-3 text-muted">
                            Vestibulum auctor dapibus neque.
                          </p>
                          <small>
                            <time
                              className="media-meta text-muted"
                              dateTime="2015-06-11T18:29:20+08:00"
                            >
                              Today
                            </time>
                          </small>
                        </div>
                      </div>
                    </a>
                    <a href="#">
                      <div className="media">
                        <div className="media-left align-self-center">
                          <i className="ft-check-circle icon-bg-circle bg-cyan mr-0" />
                        </div>
                        <div className="media-body">
                          <h6 className="media-heading">Complete the task</h6>
                          <small>
                            <time
                              className="media-meta text-muted"
                              dateTime="2015-06-11T18:29:20+08:00"
                            >
                              Last week
                            </time>
                          </small>
                        </div>
                      </div>
                    </a>
                    <a href="#">
                      <div className="media">
                        <div className="media-left align-self-center">
                          <i className="ft-file icon-bg-circle bg-teal mr-0" />
                        </div>
                        <div className="media-body">
                          <h6 className="media-heading">
                            Generate monthly report
                          </h6>
                          <small>
                            <time
                              className="media-meta text-muted"
                              dateTime="2015-06-11T18:29:20+08:00"
                            >
                              Last month
                            </time>
                          </small>
                        </div>
                      </div>
                    </a>
                    <div className="ps__rail-x" style={{ left: 0, bottom: 0 }}>
                      <div
                        className="ps__thumb-x"
                        tabIndex={0}
                        style={{ left: 0, width: 0 }}
                      />
                    </div>
                    <div className="ps__rail-y" style={{ top: 0, right: 0 }}>
                      <div
                        className="ps__thumb-y"
                        tabIndex={0}
                        style={{ top: 0, height: 0 }}
                      />
                    </div>
                  </li>
                  <li className="dropdown-menu-footer">
                    <a
                      className="dropdown-item text-muted text-center"
                      href="#"
                    >
                      Read all notifications
                    </a>
                  </li>
                </ul>
              </li> */}
              {/* <li className="dropdown dropdown-notification nav-item">
                <a
                  className="nav-link nav-link-label"
                  href="#"
                  data-toggle="dropdown"
                >
                  <i className="ficon ft-mail" />
                </a>
                <ul className="dropdown-menu dropdown-menu-media dropdown-menu-right">
                  <li className="dropdown-menu-header">
                    <h6 className="dropdown-header m-0">
                      <span className="grey darken-2">Messages</span>
                    </h6>
                    <span className="notification-tag badge badge-warning float-right m-0">
                      4 New
                    </span>
                  </li>
                  <li className="scrollable-container media-list w-100 ps">
                    <a href="#">
                      <div className="media">
                        <div className="media-left">
                          <span className="avatar avatar-sm avatar-online rounded-circle">
                            <img
                              src="../../../app-assets/images/portrait/small/avatar-s-19.png"
                              alt="avatar"
                            />
                            <i />
                          </span>
                        </div>
                        <div className="media-body">
                          <h6 className="media-heading">Margaret Govan</h6>
                          <p className="notification-text font-small-3 text-muted">
                            I like your portfolio, let's start.
                          </p>
                          <small>
                            <time
                              className="media-meta text-muted"
                              dateTime="2015-06-11T18:29:20+08:00"
                            >
                              Today
                            </time>
                          </small>
                        </div>
                      </div>
                    </a>
                    <a href="#">
                      <div className="media">
                        <div className="media-left">
                          <span className="avatar avatar-sm avatar-busy rounded-circle">
                            <img
                              src="../../../app-assets/images/portrait/small/avatar-s-2.png"
                              alt="avatar"
                            />
                            <i />
                          </span>
                        </div>
                        <div className="media-body">
                          <h6 className="media-heading">Bret Lezama</h6>
                          <p className="notification-text font-small-3 text-muted">
                            I have seen your work, there is
                          </p>
                          <small>
                            <time
                              className="media-meta text-muted"
                              dateTime="2015-06-11T18:29:20+08:00"
                            >
                              Tuesday
                            </time>
                          </small>
                        </div>
                      </div>
                    </a>
                    <a href="#">
                      <div className="media">
                        <div className="media-left">
                          <span className="avatar avatar-sm avatar-online rounded-circle">
                            <img
                              src="../../../app-assets/images/portrait/small/avatar-s-3.png"
                              alt="avatar"
                            />
                            <i />
                          </span>
                        </div>
                        <div className="media-body">
                          <h6 className="media-heading">Carie Berra</h6>
                          <p className="notification-text font-small-3 text-muted">
                            Can we have call in this week ?
                          </p>
                          <small>
                            <time
                              className="media-meta text-muted"
                              dateTime="2015-06-11T18:29:20+08:00"
                            >
                              Friday
                            </time>
                          </small>
                        </div>
                      </div>
                    </a>
                    <a href="#">
                      <div className="media">
                        <div className="media-left">
                          <span className="avatar avatar-sm avatar-away rounded-circle">
                            <img
                              src="../../../app-assets/images/portrait/small/avatar-s-6.png"
                              alt="avatar"
                            />
                            <i />
                          </span>
                        </div>
                        <div className="media-body">
                          <h6 className="media-heading">Eric Alsobrook</h6>
                          <p className="notification-text font-small-3 text-muted">
                            We have project party this saturday.
                          </p>
                          <small>
                            <time
                              className="media-meta text-muted"
                              dateTime="2015-06-11T18:29:20+08:00"
                            >
                              last month
                            </time>
                          </small>
                        </div>
                      </div>
                    </a>
                    <div className="ps__rail-x" style={{ left: 0, bottom: 0 }}>
                      <div
                        className="ps__thumb-x"
                        tabIndex={0}
                        style={{ left: 0, width: 0 }}
                      />
                    </div>
                    <div className="ps__rail-y" style={{ top: 0, right: 0 }}>
                      <div
                        className="ps__thumb-y"
                        tabIndex={0}
                        style={{ top: 0, height: 0 }}
                      />
                    </div>
                  </li>
                  <li className="dropdown-menu-footer">
                    <a
                      className="dropdown-item text-muted text-center"
                      href="#"
                    >
                      Read all messages
                    </a>
                  </li>
                </ul>
              </li> */}
              <li className="dropdown dropdown-user nav-item">
                <a
                  className="dropdown-toggle nav-link dropdown-user-link"
                  href="#"
                  data-toggle="dropdown"
                >
                  <span className="mr-1 user-name text-bold-700">{username ? username : ''}</span>
                  <i className="ft-user" style={{fontSize: '23px'}}/>
                  <span className="avatar avatar-online">
                    {/* <img
                      src="static/images/portrait/small/avatar-s-19.png"
                      alt="avatar"
                    /> */}
                  
                  </span>
                </a>
                <div className="dropdown-menu dropdown-menu-right">
                  <a className="dropdown-item" href="user-profile.html">
                    <i className="ft-user" /> Edit Profile
                  </a>
                  <a className="dropdown-item" href="app-kanban.html">
                    <i className="ft-clipboard" /> Todo
                  </a>
                  <a className="dropdown-item" href="user-cards.html">
                    <i className="ft-check-square" /> Task
                  </a>
                  <div className="dropdown-divider" />
                  <a
                    className="dropdown-item"
                    href="#"
                    onClick={() => {
                      Cookies.remove("token", {
                        expires: 1,
                      });
                      router.push("/login");
                    }}
                  >
                    <i className="ft-power" /> Logout
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

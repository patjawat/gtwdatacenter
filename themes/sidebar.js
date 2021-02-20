import React from "react";
import Link from "next/link";

export default function sidebar() {
  return (
    <div className="main-menu menu-fixed menu-dark menu-accordion menu-shadow" data-scroll-to-active="true" style={{touchAction: 'none', userSelect: 'none', WebkitUserDrag: 'none', WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)'}}>
    <div className="main-menu-content ps ps--active-y" style={{height: '654.75px'}}>
        <ul
          className="navigation navigation-main"
          id="main-menu-navigation"
          data-menu="menu-navigation"
        >
          <li className="nav-item">
            <Link href="/">
              <a>
                <i className="la la-home" />
                <span className="menu-title">Dashboard</span>
              </a>
            </Link>
          </li>
          {/* <li className="nav-item">
            <Link href="/settings">
              <a>
                <i className="la la-cog" />
                <span className="menu-title">Settings</span>
              </a>
            </Link>
          </li> */}

        </ul>
        <div className="ps__rail-x" style={{ left: 0, bottom: 0 }}>
          <div
            className="ps__thumb-x"
            tabIndex={0}
            style={{ left: 0, width: 0 }}
          />
        </div>
        <div className="ps__rail-y" style={{ top: 0, height: 299, right: 0 }}>
          <div
            className="ps__thumb-y"
            tabIndex={0}
            style={{ top: 0, height: 21 }}
          />
        </div>
      </div>
    </div>


  );
}

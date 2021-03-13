import React from "react";
import Link from "next/link";
import ContentLoader, { Facebook } from "react-content-loader";
import NumberFormat from "react-number-format";

// import {Link} from 'react-router-dom';
// import {useTranslation} from 'react-i18next';

const SmallBox = ({
  type = "info",
  icon = "",
  count,
  title,
  isLoading,
  navigateTo,
}) => {
  // const {t} = useTranslation();

  let className = "small-box";
  let iconClass = "";
  switch (type) {
    case "success":
      className += " bg-gradient-success";
      break;
    case "warning":
      className += " bg-gradient-warning";
      break;
    case "danger":
      className += " bg-gradient-danger";
      break;
    case "info":
      className += " bg-gradient-info";
      break;
    case "primary":
      className += " bg-gradient-primary";
      break;
    default:
      className += " bg-gradient-info";
      break;
  }

  iconClass += icon ? ` ${icon}` : " ";

  const MyLoader = () => (
    <div className="card pull-up bg-gradient-directional-white">
      <div className="card-content">
        <div className="card-body">
          <ContentLoader
            backgroundColor={"#b7b7b7"}
            foregroundColor={"#999"}
          ></ContentLoader>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <div className={className}>
        <div className="inner">
          <h3>
            {" "}
            <NumberFormat
              value={count ? count : 0}
              displayType={"text"}
              thousandSeparator={true}
              prefix={""}
            />
          </h3>
          <p>{title}</p>
        </div>
        <div className="icon">
          <i className={iconClass} />
        </div>
        <Link href={navigateTo} className="small-box-footer">
          <a href="#" className="small-box-footer">
            More info <i className="fas fa-arrow-circle-right" />
          </a>
        </Link>
      </div>
      {/* )} */}
    </>
  );
};

export default SmallBox;

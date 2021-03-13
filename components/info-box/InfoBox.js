import React from "react";
import Link from "next/link";
import ContentLoader, { Facebook } from "react-content-loader";
import NumberFormat from "react-number-format";

// import {Link} from 'react-router-dom';
// import {useTranslation} from 'react-i18next';

const InfoBox = ({
  type = "info",
  icon = "ion-bag",
  count,
  title,
  isLoading,
  navigateTo,
}) => {
  // const {t} = useTranslation();

  let className = "info-box-icon";
  let iconClass = "fas fa-";
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
    case "secondary":
      className += " bg-gradient-secondary";
      break;
      case "purple":
        className += " bg-gradient-purple";
        break;

      
    default:
      className += " bg-gradient-info";
      break;
  }

  // iconClass += icon ? ` ${icon}` : " ion-bag";
  iconClass += icon ? ` ${icon}` : " ";

  return (
    <>
      <div className="info-box shadow">
        <span className={className}>
          <i className={iconClass} />
        </span>
        <div className="info-box-content">
          <span className="info-box-text">{title}</span>
          <span className="info-box-number">
            <NumberFormat
              value={count ? count : 0}
              displayType={"text"}
              thousandSeparator={true}
              prefix={""}
            />
          </span>
        </div>
      </div>
    </>
  );
};

export default InfoBox;

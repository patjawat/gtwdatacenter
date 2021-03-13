import React from "react";
import moment from "moment";

const SLASH_DMY = "DD/MM/YYYY";
const SLASH_DMYHMS = "DD/MM/YYYY HH:mm:ss";
const SLASH_YMD = "YYYY/MM/DD";
const SLASH_YMDHMS = "YYYY/MM/DD HH:mm:ss";
const DASH_DMY = "DD-MM-YYYY";
const DASH_DMYHMS = "DD-MM-YYYY HH:mm:ss";
const DASH_YMD = "YYYY-MM-DD";
const DASH_YMDHMS = "YYYY-MM-DD HH:mm:ss";

export function ThaiDate(date) {
  var dateFormat = "YYYY-MM-DD";
  var check = moment(
    moment(date).format(dateFormat),
    dateFormat,
    true
  ).isValid();
  if (check) {
    return moment(date).add(543, "year").format(SLASH_DMY);
  } else {
    return date;
  }
}

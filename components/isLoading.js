import React from "react";
import Spinner from "react-spinner-material";

export default function IsLoading() {
  return (
    <div style={{ marginLeft: "40%", paddingTop: "10%" }}>
      <Spinner radius={130} color={"#e83e8c"} stroke={3} visible={true} />
    </div>
  );
}

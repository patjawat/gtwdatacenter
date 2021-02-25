import React from "react";
import Theme from "@/components/themes";
import TotalSummary from "./totalCard";
import BarChartSummary from "./barChartSummary";
import TypeSummery from "./typeSummary";
export default function Index() {
  return (
    <div>
      <TotalSummary />
      <div className="row">
        <div className="col-8">
          <BarChartSummary />
        </div>
        <div className="col-4">
          <TypeSummery />
        </div>
      </div>
    </div>
  );
}

Index.Layout = Theme;

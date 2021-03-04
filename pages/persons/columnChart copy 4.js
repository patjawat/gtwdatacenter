import React, { Component } from "react";
// Import Highcharts
import { render } from "react-dom";
import Highcharts from "highcharts";
import drilldown from "highcharts/modules/drilldown.js";
import HighchartsReact from "highcharts-react-official";

drilldown(Highcharts);

 class TestingChart extends Component {
  constructor(props) {
    super(props);
    // this.allowChartUpdate = true;
    this.state = {
      options: {
        chart: {
          type: "column",
          events: {
            drilldown: function(e) {
              // console.log("Drilldown" + e.point.name);
              if (!e.seriesOptions) {
                var chart = this;
                if (e.point.name === "NAMR") {
                  chart.addSingleSeriesAsDrilldown(e.point, {
                    name: "New",
                    color: "green",
                    data: [["Mary", 34], ["Peter", 22]]
                  });
                  chart.addSingleSeriesAsDrilldown(e.point, {
                    name: "In Progress",
                    color: "blue",
                    data: [["Mary", 4], ["Peter", 12]]
                  });
                }
                chart.applyDrilldown();
              }
            }
          }
        },

        title: {
          text: "Testing Chart",
          style: {
            fontSize: "15px",
            fontWeight: "bold",
            color: "#123E69"
          }
        },
        subtitle: {
          text: "Click the columns to drilldown to each region"
        },

        xAxis: {
          // categories: ['Chrome', 'Firefox']
          type: "category"
        },
        yAxis: {
          min: 0, // Lowest value to show on the yAxis
          title: {
            text: "Counts" // Title for the yAxis
          }
        },
        legend: {
          enabled: true // Enable/Disable the legend
        },

        tooltip: {
          shared: true // If you have multiple series then all points in each category will show up on one tooltip
        },

        series: [
          {
            name: "New",
            data: [
              {
                name: "NAMR",
                y: 34,
                drilldown: true
              }
            ]
          },
          {
            name: "In Progress",
            data: [
              {
                name: "NAMR",
                y: 66,
                drilldown: true
              }
            ]
          }
        ]
      }
    };
  }

  // componentDidMount() {
  //   // const chart = this.refs.chartComponent.chart;
  // }

  // categoryClicked() {
  //   this.allowChartUpdate = true;

  // }

  render() {
    return (
      <HighchartsReact
        // allowChartUpdate={this.allowChartUpdate}
        // ref={'chartComponent'}
        highcharts={Highcharts}
        options={this.state.options}
      />
    );
  }


}

export default TestingChart;
import { ArrowDownSVG, ArrowUpSVG } from "components/SVG";
import React from "react";

export default function Statistic(props) {
  return (
    <div className="dashboard__statistic--card">
      <div className="dashboard__statistic--card--head">
        <div className="dashboard__statistic--card--head--income">
          <ArrowUpSVG stroke="#1EC15F" width="28" height="28" />
          <p className="text__statistic">Income</p>
          <h6 className="text__statistic--amount">Rp2.120.000</h6>
        </div>
        <div className="dashboard__statistic--card--head--expense">
          <ArrowDownSVG stroke="#FF5B37" width="28" height="28" />
          <p className="text__statistic">Expense</p>
          <h6 className="text__statistic--amount">Rp2.120.000</h6>
        </div>
      </div>

      <p className="text-center">CHART JS HERE</p>
    </div>
  );
}

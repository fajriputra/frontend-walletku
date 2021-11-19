import Button from "components/Button";
import { ArrowUpSVG, PlusSVG } from "components/SVG";
import React from "react";

export default function Balance(props) {
  return (
    <div className="dashboard__balance--card">
      <div className="dashboard__balance--card--text">
        <p className="text__balance">Balance</p>
        <h1 className="text__amount">Rp120.000</h1>
        <p className="text__telp">+62 813-9387-7946</p>
      </div>

      <div className="dashboard__balance--card--button">
        <Button className="btn btn__flex mb-3 w-100">
          <ArrowUpSVG
            stroke="#B5B0ED"
            width="28"
            height="28"
            className="me-3"
          />
          Transfer
        </Button>
        <Button className="btn btn__flex w-100">
          <PlusSVG stroke="#B5B0ED" width="28" height="28" className="me-3" />
          Top Up
        </Button>
      </div>
    </div>
  );
}

import Button from "components/Button";
import { PlusSVG } from "components/SVG";
import React from "react";

export default function Balance(props) {
  return (
    <div className="dashboard__balance--card">
      <div className="dashboard__balance--card--text">
        <p className="text__balance">Balance</p>
        <h1 className="text__amount">{props.balance}</h1>
        <p className="text__telp">{props.noTelp}</p>
      </div>

      <div className="dashboard__balance--card--button">
        <Button
          className="btn btn__flex w-100"
          onClick={props.topup}
          isLoading={props.isLoading}
        >
          <PlusSVG stroke="#B5B0ED" width="28" height="28" className="me-3" />
          Top Up
        </Button>
      </div>
    </div>
  );
}

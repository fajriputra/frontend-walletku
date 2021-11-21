import React from "react";
import UserProfile from "components/UserProfile";
import Button from "components/Button";

export default function TransactionHistory(props) {
  return (
    <div className="transaction__history--card">
      <div className="transaction__history--card--head">
        <h6 className="transaction__history--card--head--text">
          Transaction History
        </h6>
        <div className="dropdown">
          <Button className="btn dropdown__toggle">--Select Filter--</Button>
        </div>
      </div>

      <UserProfile name="Walid Nurudin" sub="Transfer">
        <p className="text__amount--transaction">+Rp50.000</p>
      </UserProfile>
    </div>
  );
}

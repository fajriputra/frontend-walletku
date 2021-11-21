import Button from "components/Button";
import UserProfile from "components/UserProfile";
import React from "react";

export default function Confirmation(props) {
  return (
    <div className="confirmation__card">
      <div className="confirmation__card--transfer">
        <h6 className="text__heading">Transfer to</h6>
      </div>

      <UserProfile
        name="Haris Wahyudi"
        sub="+62 813-8492-9994"
        className="card__shadow"
      />

      <div className="confirmation__card--detail">
        <h6 className="text__heading">Details</h6>
      </div>

      <div className="confirmation__card--amount">
        <p className="confirmation__card--amount--title">Amount</p>
        <h5 className="confirmation__card--amount--subtitle">Rp100.000</h5>
      </div>
      <div className="confirmation__card--amount">
        <p className="confirmation__card--amount--title">Balance Left</p>
        <h5 className="confirmation__card--amount--subtitle">Rp20.000</h5>
      </div>
      <div className="confirmation__card--amount">
        <p className="confirmation__card--amount--title">Date & Time</p>
        <h5 className="confirmation__card--amount--subtitle">
          May 11, 2020 - 12.20
        </h5>
      </div>
      <div className="confirmation__card--amount" style={{ marginBottom: 40 }}>
        <p className="confirmation__card--amount--title">Notes</p>
        <h5 className="confirmation__card--amount--subtitle">
          For buying some socks
        </h5>
      </div>

      <div className="d-flex justify-content-end">
        <Button className="btn btn__continue">Continue</Button>
      </div>
    </div>
  );
}

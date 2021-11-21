import Button from "components/Button";
import { CheckSVG, DownloadSVG } from "components/SVG";
import UserProfile from "components/UserProfile";
import React from "react";

export default function Status(props) {
  return (
    <div className="confirmation__card">
      <div className="row justify-content-center" style={{ marginBottom: 40 }}>
        <div className="confirmation__card--status rounded-circle">
          <CheckSVG />
        </div>

        <h5 className="status__success">Transfer Success</h5>

        <p className="text__display--error">
          We can’t transfer your money at the moment, we recommend you to check{" "}
          <span className="d-block">
            your internet connection and try again.
          </span>
        </p>
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

      <div className="confirmation__card--transfer">
        <h6 className="text__heading">Transfer to</h6>
      </div>

      <UserProfile
        name="Haris Wahyudi"
        sub="+62 813-8492-9994"
        className="card__shadow"
      />

      <div className="d-flex justify-content-end flex-column flex-md-row">
        <Button className="btn btn__download mb-3 me-md-3 mb-md-0">
          <DownloadSVG className="me-3" />
          Download PDF
        </Button>
        <Button className="btn btn__home">Back To Home</Button>
      </div>
    </div>
  );
}

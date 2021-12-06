import React, { useEffect, useState } from "react";
import { formatRp } from "helpers/formatRp";
import axios from "helpers/axios";
import Button from "components/Button";
import UserProfile from "components/UserProfile";

export default function Confirmation(props) {
  const { data, handlePrev, showModal } = props;

  return (
    <>
      <div className="confirmation__card">
        <div className="confirmation__card--transfer">
          <h6 className="text__heading">Transfer to</h6>
        </div>

        <UserProfile
          name={`${data.firstName} ${data.lastName}`}
          sub={data.noTelp ? `+62${data.noTelp}` : ""}
          imageSrc={
            data.image
              ? `${process.env.API_HOST}/uploads/${data.image}`
              : "/images/default.png"
          }
          className="card__shadow"
        />

        <div className="confirmation__card--detail">
          <h6 className="text__heading">Details</h6>
        </div>

        <div className="confirmation__card--amount">
          <p className="confirmation__card--amount--title">Amount</p>
          <h5 className="confirmation__card--amount--subtitle">
            {formatRp(data.amount)}
          </h5>
        </div>
        <div className="confirmation__card--amount">
          <p className="confirmation__card--amount--title">Balance Left</p>
          <h5 className="confirmation__card--amount--subtitle">
            {formatRp(data.balanceLeft)}
          </h5>
        </div>
        <div className="confirmation__card--amount">
          <p className="confirmation__card--amount--title">Date & Time</p>
          <h5 className="confirmation__card--amount--subtitle">{data.date}</h5>
        </div>
        <div
          className="confirmation__card--amount"
          style={{ marginBottom: 40 }}
        >
          <p className="confirmation__card--amount--title">Notes</p>
          <h5 className="confirmation__card--amount--subtitle">{data.notes}</h5>
        </div>

        <div className="d-flex flex-column flex-md-row justify-content-center justify-content-md-between">
          <Button
            className="btn btn__continue mb-3 mb-md-0"
            onClick={handlePrev}
          >
            Back
          </Button>
          <Button className="btn btn__continue" onClick={showModal}>
            Continue
          </Button>
        </div>
      </div>
    </>
  );
}

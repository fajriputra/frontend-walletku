import React from "react";
import { useSelector } from "react-redux";
import { TrashSVG } from "components/SVG";

export default function ManagePhone(props) {
  const { userById } = useSelector((state) => state.user);

  return (
    <div className="manage__phone--card">
      <div className="manage__phone--card--head">
        <div className="manage__phone--card--head--inner">
          <h5>Manage Phone Number</h5>
          <p>
            You can only delete the phone number and then
            <span className="d-md-block">
              you must add another phone number.
            </span>
          </p>
        </div>

        <span className="back" onClick={props.handlePrev}>
          Back
        </span>
      </div>

      <div className="manage__phone--card--body">
        <div className="manage__phone--card--body--inner mb-0">
          <div className="wrap">
            <p>Primary</p>
            <h5>{`+62${userById.noTelp}`}</h5>
          </div>

          <TrashSVG width="28" height="28" stroke="#A9A9A9" />
        </div>
      </div>
    </div>
  );
}

import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "helpers/axios";
import Button from "components/Button";
import FormInput from "components/FormInput";
import { PhoneSVG } from "components/SVG";
import { toast } from "react-toastify";
import { getUserById } from "stores/user/actions";

export default function AddPhone(props) {
  const [loading, setLoading] = useState(false);
  const [telp, setTelp] = useState("");
  const { userById } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handlePhone = (e) => {
    e.preventDefault();
    setLoading(true);
    axios
      .patch(`/user/profile/${userById.id}`, user)
      .then(() => {
        if (!telp) {
          return toast.error("Please fill out the form");
        } else if (telp.length > 12) {
          return toast.error("Phone number only accepts 12 digits");
        }

        toast.success("Success add phone number");
        dispatch(getUserById(userById.id));
        setTelp("");
      })
      .catch((err) => {
        err.response.data.msg && toast.error(err.response.data.msg);
        setTelp("");
      })
      .finally(() => {
        setTelp("");
        setLoading(false);
      });
  };

  return (
    <div className="add__phone--card">
      <div className="add__phone--card--head">
        <div className="add__phone--card--head--inner">
          <h5>Add Phone Number</h5>
          <p>
            Add at least one phone number for the transfer
            <span className="d-md-block">
              ID so you can start transfering your money to
            </span>
            another user.
          </p>
        </div>

        <span className="back" onClick={props.handlePrev}>
          Back
        </span>
      </div>

      <div className="add__phone--card--body">
        <form onSubmit={handlePhone}>
          <div
            className={`form-group position-relative ${
              telp.length > 12 ? "error" : "not-error"
            }`}
          >
            <FormInput
              type="number"
              inputClassName="form__add--phone"
              placeholder="Enter your phone number"
              value={telp}
              onChange={handleChange}
              name="noTelp"
            />

            <div className="icon__phone">
              <PhoneSVG
                width="24"
                height="24"
                stroke="#A9A9A9"
                className="me-2"
              />

              <span>+62</span>
            </div>
          </div>

          {telp.length > 12 && (
            <p
              style={{
                color: "#ff5b37",
                marginBottom: 70,
              }}
            >
              Phone number only accepts 12 digits
            </p>
          )}

          <Button
            className="btn btn__add--phone w-100"
            isLoading={loading}
            isDisabled={props.isDisabled}
          >
            Add Phone Number
          </Button>
        </form>
      </div>
    </div>
  );
}

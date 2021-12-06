import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "components/Button";
import FormInput from "components/FormInput";
import axios from "helpers/axios";
import { toast } from "react-toastify";
import { getUserById } from "stores/user/actions";

const initialState = {
  firstName: "",
  lastName: "",
};

export default function PersonalInformation(props) {
  const { userById } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [user, setUser] = useState(initialState);

  useEffect(() => {
    setUser({
      ...user,
      firstName: userById.firstName,
      lastName: userById.lastName,
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleUpdate = (e) => {
    e.preventDefault();

    axios
      .patch(`/user/profile/${userById.id}`, user)
      .then((res) => {
        toast.success(res.data.msg);

        dispatch(getUserById(userById.id));
      })
      .catch(
        (err) => err.response.data.msg && toast.error(err.response.data.msg)
      );
  };

  return (
    <div className="personal__information--card" id="personal">
      <div className="personal__information--card--head">
        <div className="personal__information--card--head--inner">
          <h5>Personal Information</h5>
          <p>
            We got your personal information from the sign
            <span className="d-md-block">
              up proccess. If you want to make changes on
              <span className="d-md-block">
                your information, contact our support.
              </span>
            </span>
          </p>
        </div>

        <span className="back" onClick={props.handlePrev}>
          Back
        </span>
      </div>

      <div className="personal__information--card--body">
        <div className="personal__information--card--body--inner update__data">
          <div className="wrap">
            <label htmlFor="firstName">First Name</label>
            <FormInput
              onChange={handleChange}
              name="firstName"
              value={user.firstName}
              inputClassName="personal__information--card--body--inner--name border-bottom-0 p-0 fw-bold"
            />
          </div>

          <span
            className="update"
            onClick={handleUpdate}
            style={{ cursor: "pointer", color: "#6379f4", fontWeight: 600 }}
          >
            Update
          </span>
        </div>
        <div className="personal__information--card--body--inner update__data">
          <div className="wrap">
            <label htmlFor="firstName">Last Name</label>
            <FormInput
              onChange={handleChange}
              name="lastName"
              value={user.lastName}
              inputClassName="personal__information--card--body--inner--name border-bottom-0 p-0 fw-bold"
            />
          </div>
          <span
            className="update"
            onClick={handleUpdate}
            style={{ cursor: "pointer", color: "#6379f4", fontWeight: 600 }}
          >
            Update
          </span>
        </div>
        <div className="personal__information--card--body--inner">
          <p>Verified E-mail</p>
          <h5>{userById.email}</h5>
        </div>
        <div className="personal__information--card--body--inner phone mb-0">
          <div className="wrap">
            <p>Phone Number</p>
            <h5>{userById.noTelp ? `+62${userById.noTelp}` : ""}</h5>
          </div>

          <Button className="btn btn__manage p-0" onClick={props.manageClicked}>
            Manage
          </Button>
        </div>
      </div>
    </div>
  );
}

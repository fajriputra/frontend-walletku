import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "helpers/axios";
import Button from "components/Button";
import FormInput from "components/FormInput";
import { EyeCrossedSVG, LockSVG } from "components/SVG";
import { toast } from "react-toastify";
import { getUserById } from "stores/user/actions";

const initialState = {
  oldPassword: "",
  newPassword: "",
  confirmPassword: "",
};

export default function ChangePassword(props) {
  const dispatch = useDispatch();
  const { userById } = useSelector((state) => state.user);

  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState(initialState);

  const { oldPassword, newPassword, confirmPassword } = password;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPassword({ ...password, [name]: value });
  };

  const handleUpdate = (e) => {
    e.preventDefault();

    setLoading(true);

    if (!oldPassword || !newPassword || !confirmPassword) {
      toast.error("All field must be filled");
      return setLoading(false);
    }

    if (newPassword !== confirmPassword) {
      toast.error("Password doesn't matches");
      return setLoading(false);
    }

    axios
      .patch(`/user/password/${userById.id}`, password)
      .then((res) => {
        toast.success(res.data.msg);
        dispatch(getUserById(userById.id));
      })
      .catch((err) => {
        err.response.data.msg && toast.error(err.response.data.msg);
        setPassword(initialState);
      })
      .finally(() => {
        setLoading(false);
        setPassword(initialState);
      });
  };

  return (
    <div className="change__password--card">
      <div className="change__password--card--head">
        <div className="change__password--card--head--inner">
          <h5>Change Password</h5>
          <p>
            You must enter your current password and then
            <span className="d-md-block"> type your new password twice. </span>
          </p>
        </div>

        <span className="back" onClick={props.handlePrev}>
          Back
        </span>
      </div>

      <div className="change__password--card--body">
        <form onSubmit={handleUpdate}>
          <div className="form-group position-relative">
            <FormInput
              name="oldPassword"
              value={password.oldPassword}
              onChange={handleChange}
              inputClassName="form__change--password"
              placeholder="Current password"
              type="password"
            />

            <LockSVG width="24" height="24" className="icon" stroke="#A9A9A9" />

            <EyeCrossedSVG
              width="24"
              height="24"
              className="icon eye"
              stroke="#A9A9A9"
            />
          </div>
          <div className="form-group position-relative">
            <FormInput
              name="newPassword"
              value={password.newPassword}
              onChange={handleChange}
              inputClassName="form__change--password"
              placeholder="New password"
              type="password"
            />

            <LockSVG width="24" height="24" className="icon" stroke="#A9A9A9" />

            <EyeCrossedSVG
              width="24"
              height="24"
              className="icon eye"
              stroke="#A9A9A9"
            />
          </div>
          <div
            className="form-group position-relative"
            style={{ marginBottom: 70 }}
          >
            <FormInput
              name="confirmPassword"
              value={password.confirmPassword}
              onChange={handleChange}
              inputClassName="form__change--password"
              placeholder="Confirm new password"
              type="password"
            />

            <LockSVG width="24" height="24" className="icon" stroke="#A9A9A9" />

            <EyeCrossedSVG
              width="24"
              height="24"
              className="icon eye"
              stroke="#A9A9A9"
            />
          </div>

          <Button
            className="btn btn__change--password w-100"
            isLoading={loading}
          >
            Change Password
          </Button>
        </form>
      </div>
    </div>
  );
}

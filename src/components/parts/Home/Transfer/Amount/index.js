import Button from "components/Button";
import FormInput from "components/FormInput";
import UserProfile from "components/UserProfile";
import React from "react";

export default function Amount(props) {
  return (
    <div className="amount__card">
      <div className="amount__card--head">
        <h6 className="text__heading">Transfer Money</h6>
      </div>

      <UserProfile
        name="Haris Wahyudi"
        sub="+62 813-8492-9994"
        className="card__shadow"
      />

      <p className="text__display--info">
        Type the amount you want to transfer and then
        <span className="d-block"> press continue to the next steps. </span>
      </p>

      <div className="row justify-content-center mx-auto custom__row">
        <div className="form-group position-relative">
          <FormInput
            type="number"
            placeholder="0.00"
            inputClassName="form__input--amount"
          />
        </div>

        <p className="text__display--amount">Rp120.000 Available</p>

        <div className="form-group position-relative">
          <FormInput
            type="number"
            placeholder="Add some notes..."
            inputClassName="form__input--notes"
          />
        </div>
      </div>

      <div className="d-flex justify-content-end">
        <Button className="btn btn__continue">Continue</Button>
      </div>
    </div>
  );
}

import FormInput from "components/FormInput";
import { SearchSVG } from "components/SVG";
import UserProfile from "components/UserProfile";
import React from "react";

export default function SearchReceiver(props) {
  return (
    <div className="transfer__card">
      <div className="transfer__card--head">
        <h6 className="text__heading">Search Receiver</h6>
        <div className="form-group position-relative">
          <FormInput
            inputClassName="form__input--receiver"
            placeholder="Search receiver here..."
          />

          <SearchSVG width="24" height="24" className="icon__search" />
        </div>
      </div>

      <UserProfile
        name="Haris Wahyudi"
        sub="+62 813-8492-9994"
        className="card__shadow"
      />
    </div>
  );
}

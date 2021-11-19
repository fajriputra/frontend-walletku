import React from "react";
import FormInput from "components/FormInput";

export default function Pin(props) {
  return (
    <form className="right__column--form--wrapper">
      <div className="form__pin">
        <FormInput maxLength="1" inputClassName="form__input pin" id="pin-1" />
        <FormInput maxLength="1" inputClassName="form__input pin" id="pin-2" />
        <FormInput maxLength="1" inputClassName="form__input pin" id="pin-3" />
        <FormInput maxLength="1" inputClassName="form__input pin" id="pin-4" />
        <FormInput maxLength="1" inputClassName="form__input pin" id="pin-5" />
        <FormInput maxLength="1" inputClassName="form__input pin" id="pin-5" />
      </div>

      {props.children}
    </form>
  );
}

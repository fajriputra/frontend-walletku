import React from "react";
import FormInput from "components/FormInput";

export default function Pin(props) {
  return (
    <form className="right__column--form--wrapper" onSubmit={props.onSubmit}>
      <div className="form__pin">
        <FormInput
          maxLength="1"
          inputClassName={["form__input pin", props.classPin].join(" ")}
          id={props.pinId1}
          value={props.pin1}
          name="1"
        />
        <FormInput
          maxLength="1"
          inputClassName={["form__input pin", props.classPin].join(" ")}
          id={props.pinId2}
          value={props.pin2}
          name="2"
        />
        <FormInput
          maxLength="1"
          inputClassName={["form__input pin", props.classPin].join(" ")}
          id={props.pinId3}
          value={props.pin3}
          name="3"
        />
        <FormInput
          maxLength="1"
          inputClassName={["form__input pin", props.classPin].join(" ")}
          id={props.pinId4}
          value={props.pin4}
          name="4"
        />
        <FormInput
          maxLength="1"
          inputClassName={["form__input pin", props.classPin].join(" ")}
          id={props.pinId5}
          value={props.pin5}
          name="5"
        />
        <FormInput
          maxLength="1"
          inputClassName={["form__input pin", props.classPin].join(" ")}
          id={props.pinId6}
          value={props.pin6}
          name="6"
        />
      </div>

      {props.children}
    </form>
  );
}

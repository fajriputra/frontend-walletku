import React from "react";
import { EmailSVG, EyeCrossedSVG, LockSVG, PersonSVG } from "components/SVG";
import Button from "components/Button";
import FormInput from "components/FormInput";
import FormCreatePin from "../FormCreatePin";
import FormResetPassword from "../FormResetPassword";

export default function RightColumn(props) {
  if (props.isSignup) {
    return (
      <div className="right__column">
        <div className="right__column--form">
          <div className="right__column--form--heading">
            <h5>
              Start Accessing Banking Needs With All Devices and All Platforms
              With 30.000+ Users
            </h5>
            <p>
              Transfering money is eassier than ever, you can access WalletKU
              wherever you are. Desktop, laptop, mobile phone? we cover all of
              that for you!
            </p>
          </div>

          <form
            className="right__column--form--wrapper"
            onSubmit={props.onSubmit}
          >
            <div className="form-group position-relative">
              <FormInput
                placeholder="Enter your firstname"
                inputClassName={["form__input", props.classFirstname].join(" ")}
                onChange={props.onChange}
                value={props.firstname}
                name="firstName"
              />

              <PersonSVG
                width="24"
                height="24"
                stroke={props.strokePerson1}
                className="icon"
              />
            </div>
            <div className="form-group position-relative">
              <FormInput
                placeholder="Enter your lastname"
                inputClassName={["form__input", props.classLastname].join(" ")}
                onChange={props.onChange}
                value={props.lastname}
                name="lastName"
              />

              <PersonSVG
                width="24"
                height="24"
                stroke={props.strokePerson2}
                className="icon"
              />
            </div>
            <div className="form-group position-relative">
              <FormInput
                placeholder="Enter your e-mail"
                inputClassName={["form__input", props.classEmail].join(" ")}
                onChange={props.onChange}
                value={props.email}
                name="email"
              />

              <EmailSVG
                width="24"
                height="24"
                stroke={props.strokeEmail}
                className="icon"
              />
            </div>
            <div className="form-group position-relative">
              <FormInput
                placeholder="Enter your password"
                inputClassName={["form__input", props.classPassword].join(" ")}
                onChange={props.onChange}
                value={props.password}
                type="password"
                name="password"
              />
              <LockSVG
                width="24"
                height="24"
                className="icon"
                stroke={props.strokeLock}
              />
              <EyeCrossedSVG
                width="24"
                height="24"
                className="icon eye"
                stroke="#A9A9A9"
              />
            </div>
            <div className="form-group position-relative mb-3">
              <FormInput
                placeholder="Enter your confirm password"
                inputClassName={["form__input", props.classConfirm].join(" ")}
                onChange={props.onChange}
                value={props.confirmPassword}
                type="password"
                name="confirmation_password"
              />
              <LockSVG
                width="24"
                height="24"
                className="icon"
                stroke={props.strokeLock2}
              />
              <EyeCrossedSVG
                width="24"
                height="24"
                className="icon eye"
                stroke="#A9A9A9"
              />
            </div>

            <p className="error-helpers">{props.displayError}</p>

            <Button
              className={["btn btn__signup w-100", props.classSubmit].join(" ")}
              isDisabled={props.isDisabled}
              isLoading={props.isLoading}
            >
              Sign Up
            </Button>

            <div className="text-center">
              <Button className="btn btn__link p-0" type="link" href="/signin">
                Already have an account? Let&apos;s{" "}
                <span className="text__link">Sign In</span>
              </Button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  if (props.isConfirm) {
    return (
      <FormResetPassword
        isConfirmPassword
        onSubmit={props.onSubmit}
        onChange={props.onChange}
        password={props.password}
        confirm={props.confirm}
        classNewPassword={props.classNewPassword}
        classConfirm={props.classConfirm}
        strokeLock={props.strokeLock}
        strokeLock2={props.strokeLock2}
        displayError={props.displayError}
        isLoading={props.isLoading}
        isDisabled={props.isDisabled}
      />
    );
  }

  if (props.isReset) {
    return (
      <FormResetPassword
        onSubmit={props.onSubmit}
        onChange={props.onChange}
        formClassReset={props.formClassReset}
        email={props.email}
        stroke={props.strokeEmail}
        isLoading={props.isLoading}
        isDisabled={props.isDisabled}
      />
    );
  }

  if (props.createPin) {
    return (
      <FormCreatePin
        onSubmit={props.onSubmit}
        onChange={props.onChange}
        isLoading={props.isLoading}
        isDisabled={props.isDisabled}
        classPin={props.classPin}
        pin1={props.pin1}
        pin2={props.pin2}
        pin3={props.pin3}
        pin4={props.pin4}
        pin5={props.pin5}
        pin6={props.pin6}
      />
    );
  }

  if (props.isCreatedSuccess) {
    return <FormCreatePin isSuccess />;
  }

  return (
    <div className="right__column">
      <div className="right__column--form">
        <div className="right__column--form--heading">
          <h5>
            Start Accessing Banking Needs With All Devices and All Platforms
            With 30.000+ Users
          </h5>
          <p>
            Transfering money is eassier than ever, you can access WalletKU
            wherever you are. Desktop, laptop, mobile phone? we cover all of
            that for you!
          </p>
        </div>

        <form
          className="right__column--form--wrapper"
          onSubmit={props.onSubmit}
        >
          <div className="form-group position-relative">
            <FormInput
              placeholder="Enter your e-mail"
              name="email"
              inputClassName={["form__input", props.classEmail].join(" ")}
              onChange={props.onChange}
              value={props.email}
            />

            <EmailSVG
              width="24"
              height="24"
              stroke={props.strokeEmail}
              className="icon"
            />
          </div>
          <div className="form-group position-relative mb-3">
            <FormInput
              placeholder="Enter your password"
              inputClassName={["form__input", props.classPassword].join(" ")}
              type="password"
              name="password"
              onChange={props.onChange}
              value={props.password}
            />

            <LockSVG
              width="24"
              height="24"
              className="icon"
              stroke={props.strokeLock}
            />
            <EyeCrossedSVG
              width="24"
              height="24"
              className="icon eye"
              stroke="#A9A9A9"
            />
          </div>

          <div className="text-end mb-md-5">
            <Button
              className="btn btn__forgot p-0"
              type="link"
              href="/reset-password"
            >
              Forgot password?
            </Button>
          </div>

          <p className="error-helpers">{props.displayError}</p>

          <Button
            className={["btn btn__signin w-100", props.classSubmit].join(" ")}
            isDisabled={props.isDisabled}
            isLoading={props.isLoading}
          >
            Sign In
          </Button>

          <div className="text-center">
            <Button className="btn btn__link p-0" type="link" href="/signup">
              Don&apos;t have an account? Let&apos;s{" "}
              <span className="text__link">Sign Up</span>
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

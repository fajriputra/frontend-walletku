import Button from "components/Button";
import Figure from "components/Figure";
import FormInput from "components/FormInput";
import React from "react";
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

          <form className="right__column--form--wrapper">
            <div className="form-group position-relative">
              <FormInput
                placeholder="Enter your firstname"
                inputClassName="form__input"
              />
              <Figure
                srcImage="../../../../images/icons/icon-person.svg"
                altImage="Icon Person"
                className="icon"
                imageClass="img-cover"
              />
            </div>
            <div className="form-group position-relative">
              <FormInput
                placeholder="Enter your lastname"
                inputClassName="form__input"
              />
              <Figure
                srcImage="../../../../images/icons/icon-person.svg"
                altImage="Icon Person"
                className="icon"
                imageClass="img-cover"
              />
            </div>
            <div className="form-group position-relative">
              <FormInput
                placeholder="Enter your e-mail"
                type="email"
                inputClassName="form__input"
              />
              <Figure
                srcImage="../../../../images/icons/icon-email.svg"
                altImage="Icon Email"
                className="icon"
                imageClass="img-cover"
              />
            </div>
            <div className="form-group position-relative mb-3">
              <FormInput
                placeholder="Enter your password"
                inputClassName="form__input"
              />
              <Figure
                srcImage="../../../../images/icons/icon-lock.svg"
                altImage="Icon Lock"
                className="icon"
                imageClass="img-cover"
              />
              <Figure
                srcImage="../../../../images/icons/icon-eye-crossed.svg"
                altImage="Icon Eye"
                className="icon eye"
                imageClass="img-cover"
              />
            </div>

            <Button className="btn__signup">Sign Up</Button>

            <div className="text-center">
              <Button className="btn btn__link p-0" type="link" href="/signup">
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
    return <FormResetPassword isConfirmPassword />;
  }

  if (props.isReset) {
    return <FormResetPassword />;
  }

  if (props.createPin) {
    return <FormCreatePin />;
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

        <form className="right__column--form--wrapper">
          <div className="form-group position-relative">
            <FormInput
              placeholder="Enter your e-mail"
              type="email"
              inputClassName="form__input"
            />
            <Figure
              srcImage="../../../../images/icons/icon-email.svg"
              altImage="Icon Email"
              className="icon"
              imageClass="img-cover"
            />
          </div>
          <div className="form-group position-relative mb-3">
            <FormInput
              placeholder="Enter your password"
              inputClassName="form__input"
            />
            <Figure
              srcImage="../../../../images/icons/icon-lock.svg"
              altImage="Icon Lock"
              className="icon"
              imageClass="img-cover"
            />
            <Figure
              srcImage="../../../../images/icons/icon-eye-crossed.svg"
              altImage="Icon Eye"
              className="icon eye"
              imageClass="img-cover"
            />
          </div>

          <div className="text-end mb-md-5">
            <Button
              className="btn btn__forgot p-0"
              type="link"
              href="/forgotpassword"
            >
              Forgot password?
            </Button>
          </div>

          <Button className="btn__signin">Sign In</Button>

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

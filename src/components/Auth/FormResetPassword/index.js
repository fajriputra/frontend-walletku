import Button from "components/Button";
import FormInput from "components/FormInput";
import { EmailSVG, EyeCrossedSVG, LockSVG } from "components/SVG";

export default function FormResetPassword(props) {
  if (props.isConfirmPassword) {
    return (
      <div className="right__column">
        <div className="right__column--form">
          <div className="right__column--form--heading">
            <h5>
              Did You Forgot Your Password?{" "}
              <span className="d-md-flex flex-md-column">
                Don’t Worry, You Can Reset Your
              </span>
              Password In a Minutes.
            </h5>
            <p>
              Now you can create a new password for your WalletKU account. Type
              your password twice so we can confirm your new passsword.
            </p>
          </div>

          <form
            className="right__column--form--wrapper"
            onSubmit={props.onSubmit}
          >
            <div className="form-group position-relative">
              <FormInput
                placeholder="Create your new password"
                inputClassName={["form__input", props.classNewPassword].join(
                  " "
                )}
                type="password"
                value={props.password}
                onChange={props.onChange}
                name="newPassword"
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
                placeholder="Confirm your new password"
                inputClassName={["form__input", props.classConfirm].join(" ")}
                type="password"
                value={props.confirm}
                onChange={props.onChange}
                name="confirmPassword"
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

            <p className="error-helpers mt-4">{props.displayError}</p>

            <Button
              className="btn btn__reset w-100"
              isLoading={props.isLoading}
              isDisabled={props.isDisabled}
            >
              Reset Password
            </Button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="right__column">
      <div className="right__column--form">
        <div className="right__column--form--heading">
          <h5>
            Did You Forgot Your Password?{" "}
            <span className="d-md-flex flex-md-column">
              Don’t Worry, You Can Reset Your
            </span>
            Password In a Minutes.
          </h5>
          <p>
            To reset your password, you must type your e-mail and we will send a
            link to your email and you will be directed to the reset password
            screens.
          </p>
        </div>

        <form
          className="right__column--form--wrapper"
          onSubmit={props.onSubmit}
        >
          <div className="form-group position-relative">
            <FormInput
              placeholder="Enter your e-mail"
              inputClassName={["form__input", props.formClassReset].join(" ")}
              name="email"
              value={props.email}
              onChange={props.onChange}
            />

            <EmailSVG
              className="icon"
              width="24"
              height="24"
              stroke={props.stroke}
            />
          </div>

          <p className="error-helpers">{props.displayError}</p>

          <Button
            className="btn btn__confirm w-100 mt-0"
            isLoading={props.isLoading}
            isDisabled={props.isDisabled}
          >
            Confirm
          </Button>
        </form>
      </div>
    </div>
  );
}
